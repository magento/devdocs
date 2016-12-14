---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Configure message queue topology
menu_title: Configure message queue topology
menu_order: 2
version: 2.0
github_link: config-guide/mq/config-mq.md
---

<div class="bs-callout bs-callout-warning">
  <p>The message queue topology can only be configured after Magento Community Edition has been installed and before Magento Enterprise Editions has been installed. </p>
</div>

Each module that is to be a publisher must be configured as such. If you want a module to use the MQF, create a `<module>/etc/queue.xml` file and define the publisher, consumers, exchanges and bindings.

<h2>Edit the <code>queue.xml</code> file</h2>
The `queue.xml` file can contain the following elements:

+ publisher
+ topic
+ consumer
+ bind

<h3>Required elements</h3>

Each `queue.xml` file must contain the following lines:

{% highlight xml %}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
.
.
.
</config>

{% endhighlight %}

<h3>publisher element</h3>
The `publisher` element configures the type of connection and the exchange to publish to. By default, Magento uses one exchange. The name of exchange is a part of the publisher configuration. However multiple exchanges are supported, based on the AMQP model.
<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>name</td>
<td>A unique identifer for the publisher. The value is specified in a <code>topic</code> element. The default system publisher name is `default`.</td>
</tr>
<tr>
<td>connection</td>
<td>If RabbitMQ is to used to manage the queue, then the value must be <code>rabbitmq</code>. The value can also be <code>db</code> or the name of a custom adapter.</td>
</tr>
<tr>
<td>exchange</td>
<td>The name of the exchange to publish to. The value is referenced from the <code>bind</code> element. The default system exchange name is `magento`.</td>
</tr>
</table>

<h3>topic element</h3>
Configuring the `topic` element defines the interface that processes the message and assigns a publisher.
<table>
<tr>
<th><p>Parameter</p></th><th><p>Description</p></th>
</tr>
<tr>
<td>name</td>
<td><p>The name assigned to the topic. The format should be <code><i>object</i><b>.</b><i>action</i></code> You can further distinguish topic names by appending <code><b>.</b><i>subaction</i></code> to the end of the name. Use the past tense for all verbs, to indicate the event has already happened.</p>
<p>Examples: <code>customer.created</code>, <code>customer.sent.email</code></p>
<p>The value is specified in a <code>bind</code> element.</p></td>
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

<h3>consumer element</h3>
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

<h3>bind element</h3>
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
<td>The <code>name</code> of a topic defined in a <code>topic</code> element. You can specify an asterisk (\*) or pound sign (#) as wildcards. </td>
</tr>
</table>

<h2>Sample `queue.xml` file</h2>
{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
    <publisher name="test-publisher-1" connection="rabbitmq" exchange="magento"/>
    <publisher name="test-publisher-2" connection="db" exchange="magento"/>
    <topic name="customer.created" schema="Magento\Customer\Api\Data\CustomerInterface" publisher="test-publisher-1"/>
    <topic name="customer.deleted" schema="Magento\Customer\Api\Data\CustomerInterface" publisher="test-publisher-2"/>
    <consumer name="customerCreatedListener" queue="test-queue-1" connection="rabbitmq" class="Data\Type" method="processMessage"/>
    <consumer name="customerDeletedListener" queue="test-queue-2" connection="db" class="Other\Type" method="processMessage2" max_messages="98765"/>
    <bind queue="test-queue-1" exchange="magento" topic="customer.created" />
    <bind queue="test-queue-2" exchange="magento" topic="customer.deleted" />
</config>
{% endhighlight %}

#### Related Topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/manage-mysql.html">Manage message queues with MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
