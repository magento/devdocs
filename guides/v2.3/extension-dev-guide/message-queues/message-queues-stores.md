---
group: php-developer-guide
title: Architecture of Message Queues
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Services
---

One of the key features of Message Queues - is a possibility of processing all asynchronous requests only for particular stores.

For support of store scopes extension `Magento_AmqpStore` is responsible. 

{: .bs-callout .bs-callout-warning }
Support of stores and mentioned extension is only available starting from Magento 2.3.3 version. If you are using version 2.3.1 or 2.3.2, then you can use Magento [PATCH]:https://magento.com/tech-resources/download#download2312

### Messages Processing 

First system have to process message that is send to Magento Message Queue Framework and add to this message information about current store.  
 
Implementation if this can be found in plugin:

```php
app/code/Magento/AmqpStore/Plugin/Framework/Amqp/Bulk/Exchange.php
```

Plugin executes before `enqueue` method of `Magento\Framework\Amqp\Bulk\Exchange`.

Each AMQP message by default contains list of properties. We are interesting in `application_headers`. Those headers are used for transfer current `store_id` into the RabbiMQ queue.  

```php
public function beforeEnqueue(SubjectExchange $subject, $topic, array $envelopes)
{
    try {
        $storeId = $this->storeManager->getStore()->getId();
    } catch (NoSuchEntityException $e) {
        $errorMessage = sprintf(
            "Can't get current storeId and inject to amqp message. Error %s.",
            $e->getMessage()
        );
        $this->logger->error($errorMessage);
        throw new \LogicException($errorMessage);
    }
    $updatedEnvelopes = [];
    foreach ($envelopes as $envelope) {
        $properties = $envelope->getProperties();
        if (!isset($properties)) {
            $properties = [];
        }
        if (isset($properties['application_headers'])) {
            $headers = $properties['application_headers'];
            if ($headers instanceof AMQPTable) {
                try {
                    $headers->set('store_id', $storeId);
                } catch (AMQPInvalidArgumentException $ea) {
                    $errorMessage = sprintf("Can't set storeId to amqp message. Error %s.", $ea->getMessage());
                    $this->logger->error($errorMessage);
                    throw new AMQPInvalidArgumentException($errorMessage);
                }
                $properties['application_headers'] = $headers;
            }
        } else {
            $properties['application_headers'] = new AMQPTable(['store_id' => $storeId]);
        }
        $updatedEnvelopes[] = $this->envelopeFactory->create(
            [
                'body' => $envelope->getBody(),
                'properties' => $properties
            ]
        );
    }
    if (!empty($updatedEnvelopes)) {
        $envelopes = $updatedEnvelopes;
    }
    return [$topic, $envelopes];
}
```

From example before you can see that plugin checks `application_headers` and add there `store_id` parameter. If headers are not exist, then plugin will create them. In this way RabbitMQ message will receive information for which store requrest have to be processed.

### Processing by consumer

[Consumers]:https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-queue.html are picking up messages from RabbitMQ queue and processing them. 

So on a step when consumer reads message, extension executes around plugin in: 

```php
Magento\AmqpStore\Plugin\AsynchronousOperations\MassConsumerEnvelopeCallback::aroundExecute(SubjectMassConsumerEnvelopeCallback $subject, callable $proceed, EnvelopeInterface $message) 
```

```php
public function aroundExecute(SubjectMassConsumerEnvelopeCallback $subject, callable $proceed, EnvelopeInterface $message)
    {
        $amqpProperties = $message->getProperties();
        if (isset($amqpProperties['application_headers'])) {
            $headers = $amqpProperties['application_headers'];
            if ($headers instanceof AMQPTable) {
                $headers = $headers->getNativeData();
            }
            if (isset($headers['store_id'])) {
                $storeId = $headers['store_id'];
                try {
                    $currentStoreId = $this->storeManager->getStore()->getId();
                } catch (NoSuchEntityException $e) {
                    $this->logger->error(
                        sprintf(
                            "Can't set currentStoreId during processing queue. Message rejected. Error %s.",
                            $e->getMessage()
                        )
                    );
                    $subject->getQueue()->reject($message, false, $e->getMessage());
                    return;
                }
                if (isset($storeId) && $storeId !== $currentStoreId) {
                    $this->storeManager->setCurrentStore($storeId);
                }
            }
        }
        $proceed($message);
        if (isset($storeId, $currentStoreId) && $storeId !== $currentStoreId) {
            $this->storeManager->setCurrentStore($currentStoreId);//restore original store value
        }
    }
```

Plugin will check message headers and will set up current store in `storeManager` to received `store_id` value.

#### Related Topics

* [Message Queues Overview]
* [Configure message queues]
* [Install RabbitMQ]

<!-- Link definitions -->
[RabbitMQ]: http://www.rabbitmq.com
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Message Queues Overview]: {{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Install RabbitMQ]: {{ page.baseurl }}/install-gde/prereq/install-rabbitmq.html
