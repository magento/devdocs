---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Configure 2.2 message queues
menu_title: Configure 2.2 message queues
menu_order: 2
version: 2.2
github_link: config-guide/mq/config-mq22.md
---
## {{page.menu_title}}
{:.no_toc}

The message queue topology is an Enterprise Edition feature. It can be included as part of EE installation, or you can add it existing modules.

### Overview ###
Configuring the message queue topology involves creating and modifying the following configuration files in the `<module>/etc` directory:

* [`communication.xml`](#communicationxml) - Defines aspects of the message queue system that all communication types have in common.
* [`queue_consumer.xml`](#queueconsumerxml) - Defines the relationship between an existing queue and its consumer.
* [`queue_topology.xml`](#queuetopologyxml) - Defines the message routing rules and declares queues and exchanges.
* [`queue_publisher.xml`](#queuepublisherxml) - Defines the exchange where a topic is published.

### Use Cases ###
Depending on your needs, you may only need to create and configure `communication.xml` and one or two of these files.

* If you only want to publish to an existing queue created by a 3rd party system, you will only need the `queue_publisher.xml` file.
* If you only want to consume from an existing queue,  you will only need the `queue_consumer.xml` config file.
* In cases where you want to configure the local queue and publish to it for 3rd party systems to consume, you will need the `queue_publisher.xml` and `queue_topology.xml` files.
* When you want to configure the local queue and consume messages published by 3rd party system, you will need the `queue_topology.xml` and `queue_consumer.xml` files.

### `communication.xml` {#communicationxml}

The `<module>/etc/communication.xml` file defines aspects of the message queue system that all communication types have in common. This release supports AMQP and database connections.

### Sample `communication.xml` file
{:.no_toc}

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

### topic element###
{:.no_toc}
Topic configuration is flexible in that you can switch the transport layer for topics at deployment time. These values can be overwritten in the `env.php` file.

The `name` parameter is required. The topic definition must include either a `request` or a `schema`. Use `schema` if you want to implement a custom service interface.  Otherwise, specify `request`. If `request` is specified, then also specify `response` if the topic is synchronous.

Parameter | Description
--- | ---
name | A string that uniquely identifies the topic. A topic name should be a series of strings that are separated by periods. The leftmost string should be the most general, and each string afterward should narrow the scope. For example, to describe actions for tending to pets, you might create names such as `cat.white.feed` and `dog.retriever.walk`. Wildcards are not supported in the `communication.xml` file.
request | Specifies the data type of the topic.
response | Specifies the format of the response. This parameter is required if you are defining a synchronous topic. Omit this parameter if you are defining an asynchronous topic.
schema | The interface that describes the structure of the message. The format must be  `<module>\Api\<ServiceName>::<methodName>`.

### handler element ###
{:.no_toc}
The `handler` element specifies the class where the logic for handling messages exists and the method it executes.

Parameter | Description
--- | ---
name | A string that uniquely defines the handler. The name can be derived from the topic name if the handler is specific to the topic. If the handler provides more generic capabilities, name the handler so that it describes those capabilities.
type | The class or interface that defines the handler.
method | The method this handler executes.
disabled | Determines whether this handler is disabled. The default value is `false`.

### `queue_consumer.xml` {#queueconsumerxml}
The `queue_consumer.xml` file contains one or more `consumer` elements:

#### Example `queue_consumer` file ####
{:.no_toc}

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue_consumer.xsd">
    <consumer name="basic.consumer" queue="basic.consumer.queue" handler="LoggerClass::log"/>
    <consumer name="synchronous.rpc.test" queue="synchronous.rpc.test.queue" handler="LoggerClass::log"/>
    <consumer name="rpc.test" queue="queue.for.rpc.test.unused.queue" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" connection="amqp"/>
</config>
{% endhighlight %}

#### `consumer` element ####
{:.no_toc}

| Attribute        | Description |
| ---------------- | ----------- |
| name (required)  | The name of the consumer.  |
| queue (required) | Defines the queue name to send the message to.  |
| handler          | Specifies the class and method that processes the message. The value must be specified in the format `<Vendor>\Module\<ServiceName>::<methodName>`.|
| consumerInstance | The Magento class name that consumes the message |
| connection       | Must be `amqp` if using an external message broker or `db` if writing to the MySQL database.  |
| maxMessages     | Specifies the maximum number of messages to consume.|

### `queue_topology.xml` {#queuetopologyxml}

The `queue_topology.xml` file defines the message routing rules and declares queues and exchanges. It contains the following elements:

* `exchange`
* `exchange/binding`(optional)
* `exchange/arguments` (optional)
* `exchange/binding/arguments` (optional)

#### Example `queue_topology.xml` file
{:.no_toc}

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue_topology.xsd">
  <exchange name="magento-topic-based-exchange1" type="topic" connection="db">
    <binding id="topicBasedRouting2" topic="anotherTopic" destinationType="queue" destination="topic-queue1">
        <arguments>
            <!--Not part of our use case, but will be processed if someone specifies them-->
            <argument name="argument1" xsi:type="string">value</argument>
        </arguments>
    </binding>
    <arguments>
        <argument name="alternate-exchange" xsi:type="string">magento-log-exchange</argument>
    </arguments>
  </exchange>
  <exchange name="magento-topic-based-exchange2" type="topic" connection="db">
    <binding id="topicBasedRouting1" topic="#" destinationType="queue" destination="topic-queue2"/>
    <arguments>
      <argument name="alternate-exchange" xsi:type="string">magento-log-exchange</argument>
    </arguments>
  </exchange>
</config>
{% endhighlight %}

#### `exchange` element ####
{:.no_toc}

| Attribute      | Description |
| -------------- | ----------- |
 name (required) | A unique ID for the exchange.
 type (required) | Specifies the type of exchange. Must be `topic`.
 connection  (required) | Specifies the name of connection. Must be `amqp` or `db`.
 durable | Boolean value indicating whether the exchange is persistent. Non-durable exchanges are purged when the server restarts. The default is `true`.
 autoDelete | Boolean value indicating whether the exchange is deleted when all queues have finished using it. The default is `false`.
 internal | Boolean value. If set to true, the exchange may not be used directly by publishers, but only when bound to other exchanges. The default is `false`.

#### `binding` element ####
{:.no_toc}

The `binding` element is a subnode of the `exchange` element.

| Attribute      | Description |
| -------------- | ----------- |
| id (required)  | A unique ID for this binding. |
| topic (required)  | The name of a topic. You can specify an asterisk (*) or pound sign (#) as wildcards. These are described below the table.|
| destinationType (required)  | Must be `queue`. |
| destination (required)  | Identifies the name of a queue. |
| disabled       | Determines whether this binding is disabled. The default value is `false`. |

Example topic names that include wildcards:

| Pattern | Description | Example matching topics | Example non-matching topics
| --- | --- | --- | ---
`*.*.*` | Matches any topic that contains exactly two periods. | `mytopic.createOrder.success`, `mytopic.updatePrice.item1` | `mytopic.createOrder`, `mytopic.createOrder.success.true`
`#`| Matches any topic name.  | `mytopic`, `mytopic.createOrder.success`, `this.is.a.long.topic.name` | Not applicable
`mytopic.#` | Matches any topic name that begins with `mytopic` and has a period afterward. |  `mytopic.success`, `mytopic.createOrder.error` | `new.mytopic.success`,
`*.Order.#` | There must be one string before __.Order__. There can be any number of strings (including 0) after that.  | `mytopic.Order`, `mytopic.Order.Create`, `newtopic.Order.delete.success` |

#### `arguments` element ####
{:.no_toc}

The `arguments` element is an optional element that contains one or more `argument` elements. These arguments define key/value pairs that are passed to the broker for processing.

Each `argument` definition must have the following parameters:

| Attribute      | Description |
| --------------- | ----------- |
| name | The parameter name |
| type | The data type of the value |

The following illustrates an `arguments` block:

{% highlight xml %}
<arguments>
    <argument name="warehouseId" xsi:type="int">1</argument>
    <argument name="carrierName" xsi:type="string">USPS</argument>
</arguments>
{% endhighlight %}


### `queue_publisher.xml` {#queuepublisherxml}

The `queue_publisher.xml` file defines which connection and exchange to use to publish messages for a specific topic. It contains the following elements:

* publisher
* publisher/connection

#### Example `queue_publisher.xml` file
{:.no_toc}

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue_publisher.xsd">
    <publisher topic="magento.testModuleSynchronousAmqp.api.serviceInterface.execute" disabled="true" />
    <publisher topic="asynchronous.test">
        <connection name="amqp" exchange="magento" disabled="false"/>
        <connection name="db" exchange="exch1" disabled="true"/>
    </publisher>
</config>
{% endhighlight %}

#### `publisher` element
{:.no_toc}

| Attribute            | Description |
| -------------------- | ----------- |
| topic (required)     | The name of the topic. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

#### `connection` element
{:.no_toc}

The `connection` element is a subnode of the `publisher` element. There must not be more than one enabled active connection to a pushlisher defined at a time. If you omit the `connection` element, the default connection of `amqp` and exchange `magento` will be used.

| Attribute            | Description |
| -------------------- | ----------- |
| name (required)      | The name of connection. Must be `amqp` or `db`.|
| exchange             | The name of the exchange to publish to. The default system exchange name is `magento`. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

### Updating `queue.xml` {#updatequeuexml}

See [Migrate message queue configuration]({{page.baseurl}}config-guide/mq/queue-migration.html) for information about upgrading from Magento 2.0 or 2.1.

### Related Topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/manage-mysql.html">Manage message queues with MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
