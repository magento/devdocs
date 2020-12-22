---
group: php-developer-guide
title: Message queues and stores
contributor_name: Comwrap GmbH
contributor_link: https://www.comwrap.com
functional_areas:
  - Services
---

The `Magento_AmqpStore` module provides the ability for message queues to process asynchronous requests for specific stores.

### Processing messages

Magento processes each message that is sent to the Message Queue Framework, adding information about the current store. The following plugin implements this behavior:

```php
app/code/Magento/AmqpStore/Plugin/Framework/Amqp/Bulk/Exchange.php
```

The plugin executes before the `enqueue` method in `Magento\Framework\Amqp\Bulk\Exchange`.

By default, each AMQP message contains a list of properties. One of these properties is `application_headers`, and these headers are used for transfer the current `store_id` into the RabbitMQ queue.

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

In this example, you can see that the plugin checks `application_headers` and adds the `store_id` parameter. If the headers do not exist, then plugin creates them. As a result, each RabbitMQ message receives information about the store that is affected by an asynchronous request.

### Processing by consumer

[Consumers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-queue.html) pick up messages from the RabbitMQ queue and process them.

On a step when a consumer reads a message, the extension executes an around plugin, as shown here:

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

The plugin checks the message headers and sets the current store value in `storeManager` to the received `store_id` value.

#### Related Topics

*  [Message Queues Overview]
*  [Configure message queues]
*  [Install RabbitMQ]

<!-- Link definitions -->
[RabbitMQ]: http://www.rabbitmq.com
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Message Queues Overview]: {{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Install RabbitMQ]: {{ page.baseurl }}/install-gde/prereq/install-rabbitmq.html
