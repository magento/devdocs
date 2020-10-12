---
group: php-developer-guide
title: Message Queues

---

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

In {{site.data.var.ee}}, the Message Queue Framework (MQF) is a fully-functional system that allows a [module](https://glossary.magento.com/module) to publish messages to queues. It also creates consumers to receive them asynchronously. The MQF primarily uses [RabbitMQ] as the messaging broker, which  provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL [adapter](https://glossary.magento.com/adapter) stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

See [Configure message queues] for information about setting up the message queue system.

## Send a message from the publisher to a queue

The following code sends a message to the queue. The `publish` method is defined in `PublisherInterface`

```php
$publisher->publish($topic, $message)
```

In a MySQL adapter environment, when a message is published to multiple queues, create a single record in `queue_message` and multiple records in `queue_message_status`: one for each queue. (A join on the `queue`, `queue_message`, and `queue_message_status` tables is required).

## Instantiate a consumer

The procedure for instantiating a consumer differs, depending on which message queue system is being used.

### RabbitMQ

This instantiates a consumer that is defined in a [`queue_consumer.xml`]({{page.baseurl}}/extension-dev-guide/message-queues/config-mq.html#queueconsumerxml) file. The consumer (`customer_created_listener`) listens to the queue and receives all new messages. For every message, it invokes `Magento\Some\Class::processMessage($message)`

```php
$this->consumerFactory->get('customer_created_listener')
    ->process();
```

### MySQL adapter

Implement `\Magento\Framework\MessageQueue\ConsumerInterface::process($maxNumberOfMessages)` to instantiate a consumer.

Perform the following actions:

1. Define the queue name associated with current consumer using `\Magento\Framework\MessageQueue\ConsumerConfigurationInterface::getQueueName`.
1. Select `$maxNumberOfMessages` message records, filtering on the  `queue_name` field. You must join on all 3 tables. To accomplish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers.
1. Decode the message using topic name taken from the `\Magento\Framework\MessageQueue\ConsumerConfigurationInterface`.
1. Invoke callback  `Magento\Framework\MessageQueue\ConsumerConfigurationInterface::getCallback` and pass the decoded data as an argument.

## Change message queue from MySQL to AMQP

The following sample introduces a runtime configuration that allows you to redefine the adapter for a topic.

```php
'queue' => [
    'topics' => [
        'product_action_attribute.update' => [
            'publisher' => 'amqp-magento'
        ]
    ],
    'config' => [
        'publishers' => [
            'product_action_attribute.update' => [
                'connections' => [
                    'amqp' => [
                        'name' => 'amqp',
                        'exchange' => 'magento',
                        'disabled' => false
                    ],
                    'db' => [
                        'name' => 'db',
                        'disabled' => true
                    ]
                ]
            ]
        ]
    ],
    'consumers' => [
        'product_action_attribute.update' => [
            'connection' => 'amqp',
        ],
    ],
],
```

### Related Topics

*  [Message Queues Overview]
*  [Configure message queues]
*  [Install RabbitMQ]

<!-- Link definitions -->
[RabbitMQ]: http://www.rabbitmq.com
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Message Queues Overview]: {{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html
[Configure message queues]: {{ page.baseurl }}/extension-dev-guide/message-queues/config-mq.html
[Install RabbitMQ]: {{ page.baseurl }}/install-gde/prereq/install-rabbitmq.html
