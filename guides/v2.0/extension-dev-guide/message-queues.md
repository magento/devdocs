---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Message Queues
menu_title: Message Queues (Enterprise Edition Only)
menu_order: 17
version: 2.0
github_link: extension-dev-guide/message-queues.md

---

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

On Magento 2.0 Enterprise Edition, the Message Queue Framework (MQF) is a fully-functional system that allows a module to publish messages to queues. It also creates consumers to receive them asynchronously. The MQF primarily uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which  provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL adapter stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

See <a href="{{page.baseurl}}config-guide/mq/config-mq.html">Configure message queues</a> for information about setting up the message queue system.


<h2>Send a message from the publisher to a queue</h2>

The following code sends a message to the queue. The `publish` method is defined in `PublisherInterface`

{% highlight php startinline=true %}
$publisher->publish($topic, $message)
{% endhighlight %}

In an MySQL adapter environment, when a message is published to multiple queues, create a single record in `queue_message` and multiple records in `queue_message_status`: one for each queue. (A join on the `queue`, `queue_message`, and `queue_message_status` tables is required).


<h2>Instantiate a consumer</h2>

The procedure for instantiating a consumer differs, depending on which message queue system is being used.

<h3>RabbitMQ</h3>
This instantiates a consumer that is defined in a `queue.xml` file. The consumer (`customer_created_listener`)listens to the queue and receives all new messages. For every message, it invokes `Magento\Some\Class::processMessage($message)`

{% highlight php startinline=true %}
$this->consumerFactory->get('customer_created_listener')
    ->process();
{% endhighlight %}

<h3>MySQL adapter</h3>

Implement `\Magento\Framework\Amqp\ConsumerInterface::process($maxNumberOfMessages)` to instantiate a consumer.

Perform the following actions:

1. Define the queue name associated with current consumer using `\Magento\Framework\Amqp\ConsumerConfigurationInterface::getQueueName`.
2. Select `$maxNumberOfMessages` message records, filtering on the  `queue_name` field. You must join on all 3 tables. To accomplish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers.
3. Decode the message using topic name taken from the `\Magento\Framework\Amqp\ConsumerConfigurationInterface`.
4. Invoke callback  `Magento\Framework\Amqp\ConsumerConfigurationInterface::getCallback` and pass the decoded data as an argument.

<h2>Override topic configuration</h2>
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

*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/config-mq.html">Configure message queues</a>

*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
