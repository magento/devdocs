---
group: extension-dev-guide
title: Message Queues
redirect_from: /guides/v2.3/extension-dev-guide/message-queues.html

---

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

In {{site.data.var.ee}}, the Message Queue Framework (MQF) is a fully-functional system that allows a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} to publish messages to queues. It also creates consumers to receive them asynchronously. The MQF primarily uses [RabbitMQ] as the messaging broker, which  provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

See [Configure message queues] for information about setting up the message queue system.

## Send a message from the publisher to a queue

The following code sends a message to the queue. The `publish` method is defined in `PublisherInterface`

{% highlight php startinline=true %}
$publisher->publish($topic, $message)
{% endhighlight %}

In an MySQL adapter environment, when a message is published to multiple queues, create a single record in `queue_message` and multiple records in `queue_message_status`: one for each queue. (A join on the `queue`, `queue_message`, and `queue_message_status` tables is required).

## Instantiate a consumer

The procedure for instantiating a consumer differs, depending on which message queue system is being used.

### RabbitMQ

This instantiates a consumer that is defined in a `queue.xml` file. The consumer (`customer_created_listener`)listens to the queue and receives all new messages. For every message, it invokes `Magento\Some\Class::processMessage($message)`

{% highlight php startinline=true %}
$this->consumerFactory->get('customer_created_listener')
    ->process();
{% endhighlight %}

### MySQL adapter

Implement `\Magento\Framework\MessageQueue\ConsumerInterface::process($maxNumberOfMessages)` to instantiate a consumer.

Perform the following actions:

1. Define the queue name associated with current consumer using `\Magento\Framework\MessageQueue\ConsumerConfigurationInterface::getQueueName`.
2. Select `$maxNumberOfMessages` message records, filtering on the  `queue_name` field. You must join on all 3 tables. To accomplish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers.
3. Decode the message using topic name taken from the `\Magento\Framework\MessageQueue\ConsumerConfigurationInterface`.
4. Invoke callback  `Magento\Framework\MessageQueue\ConsumerConfigurationInterface::getCallback` and pass the decoded data as an argument.

## Override topic configuration

The following sample introduces a runtime configuration that allows you to redefine the adapter for a topic.

{% highlight php startinline=true %}
'queue' =>
    array(
     'topics' => array(
        'customer.created' => [publisher="default-rabitmq"],
        'order.created' => [publisher="default-rabitmq"],
    ),
),
{% endhighlight %}

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
