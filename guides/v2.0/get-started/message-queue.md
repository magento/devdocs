---
layout: default
group: get-started
subgroup: Temp
title: Message Queue Framework
menu_title: Message Queue Framework
menu_order: 1
github_link: get-started/message-queue.md

---
<div class="bs-callout bs-callout-info" id="info">
  <p>The Message Queue Framework is an Enterprise Edition (EE) feature.</p>
</div>

<b>NOTE TO REVIEWERS:</b> We need information about where to install RabbitMQ. On the same machine(s) as Magento? Is any configuration on the RabbitMQ system required?

<h2>Overview</h2>

Message queues allow components within a system to reliably send jobs and messages to each other asynchronously. As a result, the sender and receiver are not required to interact with each other. 

The Message Queue Framework is a feature of EE that schedules jobs to be invoked asynchronously. [RabbitMQ](http://www.rabbitmq.com) is a messaging broker that provides a scalable platform for sending and receiving messages, as well as a mechanism for storing undelivered messages. It is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification. 

The following diagram illustrates the Message Queue Framework.

![MQ Architecture](mq.png)

* A publisher is a component that sends messages to an exchange. It knows which exchange to publish to and the format of the messages it sends.

* An exchange receives messages from publishers and sends them to queues. Although RabbitMQ supports multiple types of exchanges, Magento uses topic exchanges only. A topic includes a routing key, which contains text strings separated by dots. The format for a topic name is <code><i>string1</i>.<i>string2</i></code>..., for example, `customer.created` or `customer.sent.email`.

	The broker allows you to use wildcards when setting rules for forwarding messages.  You can use an asterisk (`*`) to replace _one_ string or a pound sign (`#`) to replace 0 or more strings. For example, `customer.*` would filter on `customer.create` and `customer.delete`, but not `customer.sent.email`. However `customer.#` would filter on `customer.create`,  `customer.delete`, and`customer.sent.email`.

* A queue is a buffer that stores messages.

* A consumer receives messages. It knows which queue to consume. It can map processors of the message to a specific queue.

Message queues can also be implemented using database tables instead of RabbitMQ. In this case, a publisher writes messages to the queue_message table.


<h2>Configure message queues</h2> 

The initial topology of the queues and exchanges should be installed on Rabbit MQ as Magento is installed. Magento can then work with the scalable queues out of the box. The topology is defined in the Magento `queue.xml` file. Each module has its own `queue.xml` file.

<h3>Edit the <code>queue.xml</code> file</h3>
The `queue.xml` file can contain the following elements, in the order listed:

+ publisher
+ topic
+ consumer
+ bind

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
<td>If RabbitMQ is to used to manage the queue, then the value must be <code>rabbitmq</code>. Otherwise, then the value must be <code>db</code>.</td>
</tr>
<tr>
<td>exchange</td>
<td>The name of the exchange to publish to. The value is specified in a <code>bind</code> element.</td>
</tr>
</table>

<h4>topic element</h4>
Configuring the `topic` element defines the format of the published message and specifies which processor to invoke.
<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>name</td>
<td><p>The name assigned to the topic. The format should be <code><i>object</i></code><b>.</b><code><i>action</i></code> You can further distinguish topic names by appending <code><b>.</b><i>subaction</i></code> to the end of the name. Examples: <code>customer.created</code>, <code>customer.sent.email</code></p>
<p>The value is specified in a <code>bind</code> element.</p></td>. 
</tr>
<tr>
<td>schema</td>
<td><p>The interface that is invoked to process the message. For example, <code>Magento\Customer\Api\Data\CustomerInterface</code>.</p>
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
<td>Defines the queue name to send the message to. This value is specified in a <code>bind</code> element.</td>
</tr>
<tr>
<td>connection</td>
<td>Must be <code>rabbitmq</code> or other value specified in the `connection` parameter in of a publisher..</td>
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
<td>Specifies the maximum number of messages to </td>
</tr>
</table>

<h4>bind element</h4>
The `bind` elements link topics to queues and exchanges. A topic can be sent to any number of queues.

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

<h3>Configure crontab</h3>

Cron jobs are the default mechanism to restart consumers. Processes started by `cron` consume the specified number of messages, then die after that.Re-running `cron` restarts the consumer.

Configure `cron` to split different queue consumers into groups, with consumers running in parallel. Combine different consumers into one `cron` group if they are prone to race conditions. You could separate one set of consumers into a group that updates Catalog, and create another set that updates Customers. But do not run a few consumers in parallel that update the catalog, unless consumer is verified to be "thread safe".

A magic method, whose name is the same as the consumer name, is used as a callback when declaring new `consumer run` job in `crontab.xml`. Using magic methods allows you to pass the name of the consumer implicitly via method name. Alternatively, virtual types based on abstract consumer runner should be declared with concrete consumer name specified as an argument (this approach is more complex and required extra configuration).

The following shows a `crontab` entry:
{% highlight xml %}
<group id="default">
    <job name="consumerCustomerCreatedListener" instance="Magento\Amqp\Model\ConsumerRunner" method="customerCreatedListener">
        <schedule>0 0 * * *</schedule>
    </job>
</group>
{% endhighlight %}

<h3>Command line interface</h3>

The CLI can be used to start consumers of the messages from the queue. Multiple consumers can be started at a same time.

`./bin/magento queue:consumers:start <consumer_name> [--max-messages=<value>] [--daemon-mode]`

where:

`<consumer_name>` is the consumer to start.

`--max-messages=<value>` defines the maximum number of messages to consume per invocation. If number of messages are less then defined maximum number of messages, then the consumer will receive all the available messages in a queue.

`--daemon-mode` indicates the process should run continuously. 

If `--max-messages` is not defined and `--daemon-mode` is not specified, the consumer tries to receive only one message per invocation.  

If `--max-messages` is not defined and `--daemon-mode` is specified, the consumer continues to receive endless number of new messages  

After getting all available messages, the CLI command terminates. It can be lunched again with cron within a configured period of time, or manually.

<div class="bs-callout bs-callout-tip">
  <p>You can use a process manager such as <a href="http://supervisord.org/index.html">Supervisor</a> to monitor the status of processes. The manager can use the CLI to restart the processes as needed.
</p>
</div>

<h2>Programming topics</h2>


<h3>Override topic configuration</h3>
To introduce runtime configuration that allows you to redefine the adapters for a topic.
{% highlight php startinline=true %}
'queue' =>
    array(
     'topics' => array(
        'customer.created' => [publisher="default-rabitmq"],
        'order.created' => [publisher="default-rabitmq"],
    ),
),
{% endhighlight %}

<h3>Send a message from the publisher to a queue</h3>
Using the topic name, the connection details are retrieved, message encoded and sent to the queue.
{% highlight php startinline=true %}
$publisher->publish($topic, $message)
{% endhighlight %}

<h3>Instantiate a consumer</h3>
This instantiates a consumer of the `quename` queue. As a part of listening to the queue, it receives all new messages and for every message invoke `Magento\Some\Class::processMessage($message)`
{% highlight php startinline=true %}
$this->consumerFactory->get('customer_created_listener')
    ->process();
{% endhighlight %}

<h2>MySQL and synchronous adapters</h2>

<div class="bs-callout bs-callout-info" id="info">
  <p>Currently, if you did not implement the Rabbit MQ topology when you first installed Magento 2, but you want to implement it at a later time, you must re-install Magento 2 from scratch. The topology is created during the initial setup process only.</p>
</div>

<h3>DB schema</h3>
In Community Edition, all message queues are handled by MySQL and synchronous adapters. The MySQL implementation of message queues is minimalistic, and as a result, only three database tables (queue, queue_message, and queue_message_status) have been created to manage the message queue workload. If better performance is required, then install Enterprise Edition and implement RabbitMQ.

MySQL and RabbitMQ queues are configured in `queue.xml` the same way, except that the values of the `connection` parameter in the `publisher` element are different. 

To allow message status tracking and clearing old messages, status and updated_at fields should be added.
<h3>Publish message workflow</h3>

The `publish` method in PublisherInterface has the following signature:

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

Taking into account publisher interface which should be implemented and available queue configuration, the following steps should be performed to publish a message:

1. Define the names of all corresponding queues for `$topicName` from the `queue.xml` file. The topic element defines the publisher. The `publisher` element defines the exchange, and the `bind` element defines the list of queues. 

2. Encode the message using the mechanism defined by the `schema` attribute of the topic. 
3. When a message is published to multiple queues, create a single record in queue_message and a multiple records in queue_message_status, one for each queue. (A join on the queue, queue_message, and queue_message_status tables is required). 

<h3>Consume messages</h3>

`\Magento\Framework\Amqp\ConsumerInterface::process($maxNumberOfMessages)` should be implemented. 

Perform the following actions:

1. Define the queue name associated with current consumer using `\Magento\Framework\Amqp\ConsumerConfigurationInterface::getQueueName`.
2. Select `$maxNumberOfMessages` message records, filtering on the  `queue_name` field. You must join on all 3 tables. To accompolish this, you may want to extract fewer records at a time to improve load distribution between multiple consumers. 
3. Decode the message using topic name taken from the `\Magento\Framework\Amqp\ConsumerConfigurationInterface`.
4. Invoke callback  `Magento\Framework\Amqp\ConsumerConfigurationInterface::getCallback` and pass the decoded data as an argument.

