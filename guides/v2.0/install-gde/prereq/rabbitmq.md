---
layout: default
group: install_pre
subgroup: Prerequisites
title: RabbitMQ
menu_title: RabbitMQ (Enterprise Edition)
menu_order: 6
github_link: install-gde/prereq/rabbitmq.md

---

![EE](../../../../common/images/ee-only_large.png)


<h2>Configure your message queue topology</h2>

<div class="bs-callout bs-callout-warning">
  <p>Magento Community Edition must be installed before you can perform this procedure.</p>
</div>

Each module that is to be a publisher must be configured as such. If you want a module to use the MQF, create a `<module>/etc/queue.xml` file and define the publisher, consumers, exchanges and bindings. 

Magento defines the default publisher as follows:

<table>
<tr>
<th>Attribute</th><th>Value</th><!--<th>CE Value</th>-->
</tr>
<tr>
<td>name</td><td>default</td><!--<td>default_mysql</td>-->
</tr>
<tr>
<td>connection</td><td>rabbitmq</td><!--<td>db</td>-->
</tr>
<tr>
<td>exchange</td><td>magento</td><!--<td>magento</td>-->
</tr>
</table>

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

<h2>Install Magento EE</h2>

Add the following command line parameters when you install Magento EE:

`--amqp-host="<hostname>" --amqp-port="5672" --amqp-user="<user_name>" --amqp-password="<password>"`

where:

<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>amqp-host</td>
<td>The host name where RabbitMQ is installed.</td>
</tr>
<tr>
<td>amqp-port</td>
<td>The port to use to connect to RabbitMQ. The default is 5672.</td>
</tr>
<tr>
<td>amqp-user</td>
<td>The user name for connecting to RabbitMQ. Do not use the default user `guest`. </td>
</tr>
<tr>
<td>amqp-password</td>
<td>The password for connecting to RabbitMQ. Do not use the default password `guest`. </td>
</tr>
</table>


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Ways to install the Magento software</a>
