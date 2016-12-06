---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Configure message queues
menu_title: Configure message queues
menu_order: 2
version: 2.1
github_link: config-guide/mq/config-mq.md
---
Any module can be configured to send and receive messages to the message queue. To do this, you must create the following files in the `<module>/etc` directory:

* `communication.xml`
* `queue.xml`

## Create the `communication.xml` file##

The `<module>/etc/communication.xml` file defines aspects of the message queue system that all communication types have in common. Magento 2.1 supports AMQP and database connections.

### topic element###

Topic configuration is flexible in that you can switch the transport layer for topics at deployment time. These values can be overwritten in the `env.php` file.

The `name` parameter is required. The topic definition must include either a `request` or a `schema`. Use `schema` if you want to implement a custom service interface.  Otherwise, specify `request`. If `request` is specified, then also specify `response` if the topic is synchronous.

Parameter | Description
--- | ---
name | A string that uniquely identifies the topic. A topic name should be a series of strings that are separated by periods. The leftmost string should be the most general, and each string afterward should narrow the scope. For example, to describe actions for tending to pets, you might create names such as `cat.white.feed` and `dog.retriever.walk`. Wildcards are not supported in the `communication.xml` file.
request | Specifies the data type of the topic.
response | Specifies the format of the response. This parameter is required if you are defining a synchronous topic. Omit this parameter if you are defining an asynchronous topic.
schema | The interface that describes the structure of the message. The format must be  `<module>\Api\<ServiceName>::<methodName>`.

### handler element ###
The `handler` element specifies the class where the logic for handling messages exists and the method it executes.

Parameter | Description
--- | ---
name | A string that uniquely defines the handler. The name can be derived from the topic name if the handler is specific to the topic. If the handler provides more generic capabilities, name the handler so that it describes those capabilities.
type | The class that defines the handler.
method | The method this handler executes.
disabled | Determines whether this handler is disabled. The default value is `false`.

### Sample `communication.xml` file
The following sample defines two synchronous topics. The first topic is for RPC calls. The second uses a custom service interface.

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
<topic name="synchronous.rpc.test" request="string" response="string">
    <handler name="processRpcRequest" type="Magento\TestModuleSynchronousAmqp\Model\RpcRequestHandler" method="process"/>
</topic>
<topic name="magento.testModuleSynchronousAmqp.api.serviceInterface.execute" schema="Magento\TestModuleSynchronousAmqp\Api\ServiceInterface::execute">
    <handler name="processRemoteRequest" type="Magento\TestModuleSynchronousAmqp\Model\RpcRequestHandler" method="process"/>
</topic>
</config>
{% endhighlight %}

## Create the `queue.xml` file ##
The `queue.xml` file defines the broker that processes topics.  It also specifies the queue each topic will be sent to.

### broker element ###
The `broker` element also contains `queue` elements.

Parameter | Description
--- | ---
topic | A topic defined in the `communication.xml` file.
type | The type of message broker. For this release, the value must be `amqp` or `db`.
exchange | The name of the exchange to publish to. The default system exchange name is `magento`.

### queue element ###
The `queue` element defines the module's queues.

Parameter | Description
--- | ---
name (required) | Defines the queue name to send the message to.
consumer (required) | The name of the consumer.  
consumerInstance | The path to a Magento class that consumes the message.
handler | Specifies the class and method that processes the message. The value must be specified in the format `<Vendor>\Module\<ServiceName>::<methodName>`.
maxMessages | Specifies the maximum number of messages to consume.

## Sample `queue.xml` file ##

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
<broker topic="synchronous.rpc.test" type="amqp" exchange="magento">
    <queue consumer="synchronousRpcTestConsumer" name="synchronous.rpc.test" consumerInstance="Magento\Framework\MessageQueue\Rpc\Consumer"/>
</broker>
<broker topic="magento.testModuleSynchronousAmqp.api.serviceInterface.execute" type="amqp" exchange="magento">
    <queue consumer="RemoteServiceTestConsumer" name="queue.magento.testModuleSynchronousAmqp.api.serviceInterface.execute" consumerInstance="Magento\Framework\MessageQueue\Rpc\Consumer"/>
</broker>
</config>
{% endhighlight %}

#### Related Topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/manage-mysql.html">Manage message queues with MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
