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
Any module can be configured to send and receive messages to the message queue. To do this, you must create the following files in the `<module>/etc` directory:

* `communication.xml`
* `queue.xml`

## Create the `communication.xml` file##

The `<module>/etc/communication.xml` file defines aspects of the message queue system that all communication types have in common. Magento 2.1 supports AMQP and database connections.

### topic element###

Every topic must be configured with transport layer connection information, so that the publisher knows where to publish messages. Configuration is flexible in that you can switch the transport layer for topics at deployment time. These values can be overwritten in the `env.php` file.

The `name` parameter is required. The topic definition must include either a `request` or a `schema`. Use `schema` if you want to implement a custom service interface.  Otherwise, specify `request`.

Parameter | Description | Example
=== | === | ===
name | A string that uniquely identifies the topic. The format should be `*object*.*action*` You can further distinguish topic names by appending `.*qualifier*` to the end of the name. You can specify an asterisk (\*) or pound sign (\#) as wildcards.| `mysystem.ordercreate`, `mysystem.ordercreate.success`
request | Specifies the data type of the topic. | `string`, `string[]`
response | Specifies the format of the response. This parameter is required if you are defining a synchronous topic. Omit this parameter if you are defining an asynchronous topic. | `string`
schema | The interface that describes the structure of the message. The format must be  `<module>\Api\<ServiceName>::<methodName>`. | `mymodule\Api\ServiceInterface::execute`

### handler element###
The `handler` element specifies the class where the logic for handling messages exists and the method it executes.

Parameter | Description | Example
=== | === | ===
name | A string that uniquely defines the handler. The name should be derived from the topic name.  | mysystem.ordercreate.handler
type | The class that defines the handler. | `Magento\RpcQueue\Model\Handler\Async\SendOrderCreateNotification`
method | The method this handler executes. | `send`
disabled | Determines whether this handler is disabled. The default value is `false`. | `true`, `false`

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
The `queue.xml` file defines the broker that processes topics and the name of each consumer. It also specifies the queue each topic will be sent to.

A single topic can be sent to one or multiple queues. Each recipient is defined in `consumer` elements. , and queues

### broker elements
Parameter | Description | Example
=== | === | ===
topic | A topic defined in the `communication.xml` file. | `mysystem.ordercreate`, `mysystem.ordercreate.success`
type | The type of message broker. For this release, the value must be `amqp`. | `amqp`
exchange | The name of the exchange to publish to. The default system exchange name is `magento`. | `magento`

### consumer element###
Parameter | Description | Example
=== | === | ===
name | The name of the consumer.  | sync.consumer, async.consumer
queue | Defines the queue name to send the message to.| magento_omsspec_api_ordermanagement_ordercreated

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
