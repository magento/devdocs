---
layout: default
group: get-started
subgroup: Temp
title: Message Queue Framework
menu_title: Message Queue Framework
menu_order: 1
github_link: get-started/message-queue.md

---
<!--

![EE](../../../common/images/ee-only_large.png)


<div class="bs-callout bs-callout-info" id="info">
  <p>The Message Queue Framework is an Enterprise Edition (EE) feature.</p>
</div>


-->

<b>NOTE TO REVIEWERS:</b> We need information about where to install RabbitMQ. On the same machine(s) as Magento? Is any configuration on the RabbitMQ system required?

<h2>Overview</h2>

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them. 

<h3>Enterprise Edition (EE)</h3>
On Magento 2.0 EE, the Message Queue Framework (MQF) is a fully-functional system that allows a module to publish messages to queues. It also creates consumers to receive them asynchronously. The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which  provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification. 

The following diagram illustrates the Message Queue Framework.

![MQ Architecture](mq.png)

* A publisher is a component that sends messages to an exchange. It knows which exchange to publish to and the format of the messages it sends.

* An exchange receives messages from publishers and sends them to queues. Although RabbitMQ supports multiple types of exchanges, Magento uses topic exchanges only. A topic includes a routing key, which contains text strings separated by dots. The format for a topic name is <code><i>string1</i>.<i>string2</i></code>..., for example, `customer.created` or `customer.sent.email`.

	The broker allows you to use wildcards when setting rules for forwarding messages.  You can use an asterisk (`*`) to replace _one_ string or a pound sign (`#`) to replace 0 or more strings. For example, `customer.*` would filter on `customer.create` and `customer.delete`, but not `customer.sent.email`. However `customer.#` would filter on `customer.create`,  `customer.delete`, and`customer.sent.email`.

* A queue is a buffer that stores messages.

* A consumer receives messages. It knows which queue to consume. It can map processors of the message to a specific queue.

Message queues can also be implemented using database tables instead of RabbitMQ. In this case, a publisher writes messages to the queue_message table.



<h3>Community Edition</h3>
In Magento 2 CE, the MQF relies on cron jobs and the command line interface to make sure the consumers are able to receive messages. CE uses MySQL tables to store information about the queues. It also uses a MySQL adapter to manage the tables.

See <a href="#ce">Messaging in Community Edition</a> for information about implementing message queues in Magento CE.


<h2>Configure message queues</h2> 

Each module that is to be a publisher must be configured as such. If you want a module to use the MQF, create a `<module>/etc/queue.xml` file and define the publisher, consumers, exchanges and bindings. 

Magento defines the default publisher as follows:

<table>
<tr>
<th></th><th>EE Value</th><th>CE Value</th>
</tr>
<tr>
<td>name</td><td>default</td><td>default_mysql</td>
</tr>
<tr>
<td>connection</td><td>rabbitmq</td><td>db</td>
</tr>
<tr>
<td>exchange</td><td>magento</td><td>magento</td>
</tr>
</table>

To change these values, edit the `Amqp/etc/queue.xml` (EE) or the `MysqlMq/etc/queue.xml`(CE) file.


<h3>Edit the <code>queue.xml</code> file</h3>
The `queue.xml` file can contain the following elements:

+ publisher
+ topic
+ consumer
+ bind

<h4>Required elements</h4>

Each `queue.xml` file must contain the following lines:

{% highlight xml %}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
.
.
.
</config>

{% endhighlight %}

<h4>publisher element</h4>
The `publisher` element configures the type of connection and the exchange to publish to. By default, Magento uses one exchange. The name of exchange is a part of the publisher configuration. However multiple exchanges are supported, based on the AMQP model.
<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>name</td>
<td>A unique identifer for the publisher. The value is specified in a <code>topic</code> element.</td>
</tr>
<tr>
<td>connection</td>
<td>If RabbitMQ is to used to manage the queue, then the value must be <code>rabbitmq</code>. The value can also be <code>db</code> or the name of a customer adapter.</td>
</tr>
<tr>
<td>exchange</td>
<td>The name of the exchange to publish to. The value is referenced from the <code>bind</code> element.</td>
</tr>
</table>

<h4>topic element</h4>
Configuring the `topic` element defines the interface that processes the message and assigns a publisher.
<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>name</td>
<td><p>The name assigned to the topic. The format should be <code><i>object</i></code><b>.</b><code><i>action</i></code> You can further distinguish topic names by appending <code><b>.</b><i>subaction</i></code> to the end of the name. Use the past tense for all verbs, to indicate the event has already happened. Examples: <code>customer.created</code>, <code>customer.sent.email</code></p>
<p>The value is specified in a <code>bind</code> element.</p></td>. 
</tr>
<tr>
<td>schema</td>
<td><p>The interface that describes the structure of the message. It should be in the format of a Data Interface from the Service Contracts. For example, <code>Magento\Customer\Api\Data\CustomerInterface</code>.
</p>
<p>You can also specify a service method signature, such as <code>Magento\Customer\Api\CustomerRepositoryInterface::save</code>. In this case, format the message as an array of all service method parameters, like for a <code>call_user_func_array</code> call. The consumer's callback should expect each message part to be passed as a separate parameter.
</p></td>
</tr>
<tr>
<td>publisher</td>
<td>The <code>name</code> of a <code>publisher</code>.</td>
</tr>
</table>

<h4>consumer element</h4>
Each `consumer` elements maps the receiver of a message to a specific queue. The `class` and `method` parameters indicate what receives and processes the message.
<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>name</td>
<td>The name of the consumer. The value should be the same as the magic method that to be used as a callback. </td>
</tr>
<tr>
<td>queue</td>
<td>Defines the queue name to send the message to. This value is used in the definition of a <code>bind</code> element.</td>
</tr>
<tr>
<td>connection</td>
<td>Must be <code>rabbitmq</code> or other value specified in the `connection` parameter in of a publisher.</td>
</tr>
<tr>
<td>class</td>
<td>The path to a Magento class that consumes the message.</td>
</tr>
<tr>
<td>method</td>
<td>The method within the specified <code>class</code> that processes the message.</td>
</tr>
<tr>
<td>max_messages</td>
<td>Specifies the maximum number of messages to consume.</td>
</tr>
</table>

<h4>bind element</h4>
The `bind` elements link topics to queues and exchanges, defining the message queue topology. A topic can be sent to any number of queues.

<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>queue</td>
<td>The <code>name</code> of a queue defined in a <code>consumer</code> element.</td>
</tr>
<tr>
<td>exchange</td>
<td>The <code>name</code> of an exchange defined in a <code>publisher</code> element.</td>
</tr>
<tr>
<td>topic</td>
<td>The <code>name</code> of a topic defined in a <code>topic</code> element. You can specify an asterisk (*) or pound sign (#) as wildcards. </td>
</tr>
</table>

<h2 id="ce">Messaging in Community Edition</h2>

CE installations typically use cron jobs and the CLI to ensure that consumers are retrieving messages. External process managers can be used instead of cron. 

<h3>Process managemnt</h3>

Cron jobs are the default mechanism to restart consumers. Processes started by `cron` consume the specified number of messages, then die after that. Re-running `cron` restarts the consumer.

A magic method, whose name is the same as the consumer name, is used as a callback when declaring new `consumer run` job in `crontab.xml`. Using magic methods allows you to pass the name of the consumer implicitly via method name. Alternatively, virtual types based on abstract consumer runner should be declared with concrete consumer name specified as an argument (this approach is more complex and required extra configuration).

The following shows a `crontab` entry:

{% highlight xml %}
<group id="default">
    <job name="consumerCustomerCreatedListener" instance="Magento\Amqp\Model\ConsumerRunner" method="customerCreatedListener">
        <schedule>0 0 * * *</schedule>
    </job>
</group>
{% endhighlight %}

You can also use a process manager such as <a href="http://supervisord.org/index.html">Supervisor</a> to monitor the status of processes. The manager can use the CLI to restart the processes as needed.

<h3>Command line interface</h3>

The CLI can be used to start consumers of the messages from the queue. Multiple consumers can be started at a same time.

`./bin/magento queue:consumers:start <consumer_name> [--max-messages=<value>]`

where:

`<consumer_name>` is the consumer to start.

`--max-messages=<value>` defines the maximum number of messages to consume per invocation. If number of messages are less then defined maximum number of messages, then the consumer will receive all the available messages in a queue.

If `--max-messages` is not defined, the consumer continues to receive endless number of new messages  

After getting all available messages, the CLI command terminates. It can be lunched again with cron within a configured period of time, or manually.

<h2>Programming topics</h2>


<h3>Send a message from the publisher to a queue</h3>

Before you begin, you must define the publisher, topics, and schema in the module's `queue.xml` file.

<h4>EE</h4>
The following code sends a message to the queue.

{% highlight php startinline=true %}
$publisher->publish($topic, $message)
{% endhighlight %}

<h4>CE</h4>
The `publish` method in `PublisherInterface` has the following signature:

{% highlight php startinline=true %}
/**
     * Publishes a message to a specific queue or exchange.
     *
     * @param string $topicName
     * @param array|object $data
     * @return void
     */
    public function publish($topicName, $data);
{% endhighlight %}


When a message is published to multiple queues, create a single record in queue_message and a multiple records in queue_message_status, one for each queue. (A join on the queue, queue_message, and queue_message_status tables is required). 


<h3>Instantiate a consumer</h3>
<h4>EE</h4>
This instantiates a consumer of the `queuename` queue. The consumer listens to the queue and receives all new messages. For every message, it invokes `Magento\Some\Class::processMessage($message)`

{% highlight php startinline=true %}
$this->consumerFactory->get('customer_created_listener')
    ->process();
{% endhighlight %}

<h4>CE</h4>

Implement `\Magento\Framework\Amqp\ConsumerInterface::process($maxNumberOfMessages)` to instantiate a consumer on CE. 

Perform the following actions:

1. Define the queue name associated with current consumer using `\Magento\Framework\Amqp\ConsumerConfigurationInterface::getQueueName`.
2. Select `$maxNumberOfMessages` message records, filtering on the  `queue_name` field. You must join on all 3 tables. To accompolish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers. 
3. Decode the message using topic name taken from the `\Magento\Framework\Amqp\ConsumerConfigurationInterface`.
4. Invoke callback  `Magento\Framework\Amqp\ConsumerConfigurationInterface::getCallback` and pass the decoded data as an argument.

<h3>Override topic configuration</h3>
The following sample introduces a runtime configuration that allows you to redefine the adapter














 for a topic.

{% highlight php startinline=true %}
'queue' =>
    array(
     'topics' => array(
        'customer.created' => [publisher="default-rabitmq"],
        'order.created' => [publisher="default-rabitmq"],
    ),
),
{% endhighlight %}


<h3>Adding your own adapter</h3>

A new adapter can be introduced via Dependency Injection (DI) configuration. Add lines similar to the following in the `di.xml` file for 

{% highlight xml %}
<type name="Magento\Framework\Amqp\ConsumerFactory">
    <arguments>
        <argument name="consumers" xsi:type="array">
            <item name="mysql" xsi:type="array">
                <item name="type" xsi:type="string">Magento\MysqlMq\Model\Consumer</item>
                <item name="connectionName" xsi:type="string">db</item>
            </item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

<h2>MySQL and synchronous adapters</h2>

<div class="bs-callout bs-callout-info" id="info">
  <p>Currently, if you did not implement the Rabbit MQ topology when you first installed Magento 2, but you want to implement it at a later time, you must re-install Magento 2 from scratch. The topology is created during the initial setup process only.</p>
</div>

<h3>DB schema</h3>
In Community Edition, all message queues are handled by MySQL and synchronous adapters. The MySQL implementation of message queues is minimalistic, and as a result, three database tables (queue, queue_message, and queue_message_status) have been created to manage the message queue workload. If better performance is required, then install Enterprise Edition and implement RabbitMQ.

MySQL and RabbitMQ queues are configured in `queue.xml` the same way, except that the values of the `connection` parameter in the `publisher` element are different. 

To allow message status tracking and clearing old messages, status and updated_at fields should be added.
