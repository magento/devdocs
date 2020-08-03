---
group: php-developer-guide
title: Configure message queues
functional_areas:
  - Configuration
  - System
  - Setup
---

The message queue topology is a {{site.data.var.ce}} feature. It can be included as part of {{site.data.var.ce}} installation, or you can add it to existing modules.

### Overview

Configuring the message queue topology involves creating and modifying the following configuration files in the `<module>/etc` directory:

*  [`communication.xml`](#communicationxml) - Defines aspects of the message queue system that all communication types have in common.
*  [`queue_consumer.xml`](#queueconsumerxml) - Defines the relationship between an existing queue and its consumer.
*  [`queue_topology.xml`](#queuetopologyxml) - Defines the message routing rules and declares queues and exchanges.
*  [`queue_publisher.xml`](#queuepublisherxml) - Defines the exchange where a topic is published.

### Use Cases

Depending on your needs, you may only need to create and configure `communication.xml` and one or two of these files.

*  If you only want to publish to an existing queue created by a 3rd party system, you will only need the `queue_publisher.xml` file.
*  If you only want to consume from an existing queue,  you will only need the `queue_consumer.xml` config file.
*  In cases where you want to configure the local queue and publish to it for 3rd party systems to consume, you will need the `queue_publisher.xml` and `queue_topology.xml` files.
*  When you want to configure the local queue and consume messages published by 3rd party system, you will need the `queue_topology.xml` and `queue_consumer.xml` files.

### `communication.xml` {#communicationxml}

The `<module>/etc/communication.xml` file defines aspects of the message queue system that all communication types have in common. This release supports AMQP and database connections.

### Sample `communication.xml` file
{:.no_toc}

The following sample defines two synchronous topics. The first topic is for RPC calls. The second uses a custom service interface.

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Communication/etc/communication.xsd">
  <topic name="synchronous.rpc.test" request="string" response="string">
    <handler name="processRpcRequest" type="Magento\TestModuleSynchronousAmqp\Model\RpcRequestHandler" method="process"/>
  </topic>
  <topic name="magento.testModuleSynchronousAmqp.api.serviceInterface.execute" schema="Magento\TestModuleSynchronousAmqp\Api\ServiceInterface::execute">
    <handler name="processRemoteRequest" type="Magento\TestModuleSynchronousAmqp\Model\RpcRequestHandler" method="process"/>
  </topic>
</config>
```

### topic element
{:.no_toc}
Topic configuration is flexible in that you can switch the transport layer for topics at deployment time. These values can be overwritten in the `env.php` file.

The `name` parameter is required. The topic definition must include either a `request` or a `schema`. Use `schema` if you want to implement a custom service interface.  Otherwise, specify `request`. If `request` is specified, then also specify `response` if the topic is synchronous.

Parameter | Description
--- | ---
name | A string that uniquely identifies the topic. A topic name should be a series of strings that are separated by periods. The leftmost string should be the most general, and each string afterward should narrow the scope. For example, to describe actions for tending to pets, you might create names such as `cat.white.feed` and `dog.retriever.walk`. Wildcards are not supported in the `communication.xml` file.
request | Specifies the data type of the topic.
response | Specifies the format of the response. This parameter is required if you are defining a synchronous topic. Omit this parameter if you are defining an asynchronous topic.
schema | The interface that describes the structure of the message. The format must be  `<module>\Api\<ServiceName>::<methodName>`.

### handler element
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

#### Example `queue_consumer` file
{:.no_toc}

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="basic.consumer" queue="basic.consumer.queue" handler="LoggerClass::log"/>
    <consumer name="synchronous.rpc.test" queue="synchronous.rpc.test.queue" handler="LoggerClass::log"/>
    <consumer name="rpc.test" queue="queue.for.rpc.test.unused.queue" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" connection="amqp"/>
    <consumer name="test.product.delete" queue="queue.for.test.product.delete" connection="amqp" handler="Magento\Queue\Model\ProductDeleteConsumer::processMessage" maxMessages="200" maxIdleTime="180" sleep="60" onlySpawnWhenMessageAvailable="0"/>
</config>
```

#### `consumer` element
{:.no_toc}

| Attribute                     | Description |
| ----------------------------- | ----------- |
| name (required)               | The name of the consumer.  |
| queue (required)              | Defines the queue name to send the message to.  |
| handler                       | Specifies the class and method that processes the message. The value must be specified in the format `<Vendor>\Module\<ServiceName>::<methodName>`.|
| consumerInstance              | The Magento class name that consumes the message |
| connection                    | For AMQP connections, the connection name must match the `connection` attribute in the `queue_topology.xml` file. Otherwise, the connection name must be `db`.  |
| maxMessages                   | Specifies the maximum number of messages to consume.|
| maxIdleTime                   | Defines the maximum waiting time in seconds for a new message from the queue. If no message was handled within this period of time, the consumer exits. Default value: `null`|
| sleep                         | Specifies time in seconds to sleep before checking if a new message is available in the queue. Default value is `null` which equals to 1 second.|
| onlySpawnWhenMessageAvailable | Boolean value (`1` or `0` only) that identifies whether a consumer should be spawned only if there is available message in the related queue. Default value: `null`|

{:.bs-callout-info}
The `maxIdleTime` and `sleep` attributes will be handled only by consumers that were fired with a defined `maxMessages` parameter. The `onlySpawnWhenMessageAvailable` attribute is only checked and validated by the `\Magento\MessageQueue\Model\Cron\ConsumersRunner` class that runs consumer processes with cron.

It is possible to set `onlySpawnWhenMessageAvailable` globally by setting `queue/only_spawn_when_message_available` equal to `0` or `1` in `app/etc/env.php`. By default, the global value of `only_spawn_when_message_available` for all consumers is `1`.
The `onlySpawnWhenMessageAvailable` consumer attribute has higher priority than the global `queue/only_spawn_when_message_available` setting in `app/etc/env.php`. Therefore, it is possible to overwrite the global `only_spawn_when_message_available` value by setting `onlySpawnWhenMessageAvailable` equal to `0` or `1` for each consumer in `queue_consumer.xml`.

The `onlySpawnWhenMessageAvailable` and `maxIdleTime` attributes may be combined if a specific consumer needs to run infrequently. The consumer will only spawn when it is needed, and it terminates itself if it is inactive for a certain period.
It is also possible to combine the global `queue/only_spawn_when_message_available` setting in `app/etc/env.php` with the `queue/consumers-wait-for-messages` setting. That means that the consumer will run only when there is an available message in the queue, and it will be terminated when there are no more messages to process. This combination of settings is recommended to save server resources such as CPU usage.

The [`consumers-wait-for-messages`]({{page.baseurl}}/install-gde/install/cli/install-cli-subcommands-consumers.html) option works similar to `onlySpawnWhenMessageAvailable`. When it is set to `false`, the consumer processes all messages and exits if there are no available messages in the queue.
The problem is that every time the cron job `cron_consumers_runner` runs, it spawns a new consumer process, the consumer checks if messages are available, and it terminates itself if there are no messages.
Meanwhile, the `onlySpawnWhenMessageAvailable` attribute first checks if there are available messages, and it spawns a new consumer process only if there are messages. It means that it does not spawn unneeded processes which take up memory, live for a very short period, and then disappear.

#### Consumer handlers

A handler is a class and method that processes a message. Magento has two ways to define a handler for messages.

*  In the `<handler>` element of the module's `communication.xml` file
*  In the `handler` attribute of the module's `queue_consumer.xml` file

The following conditions determine how these handlers are processed:

*  If the consumer in `queue_consumer.xml` does not have a `consumerInstance` defined, then the system uses the default consumer: `Magento\Framework\MessageQueue\Consumer`. In this case, if the `<consumer>` element contains the `handler` attribute, then it will be used, and the `<handler>` element in `communication.xml` will be ignored.
*  If the consumer in `queue_consumer.xml` has a `consumerInstance` defined, then the specific consumer implementation defines how the `handler` is used.

Magento provides these consumers out-of-the-box:

| Class name        | Handler in `communication.xml` will be executed? | Handler in `queue_consumer.xml` will be executed? |
| ---------------- | ----------- | ---------- |
| `Magento\Framework\MessageQueue\Consumer` | Only if not defined in `queue_consumer.xml` | Yes, if exists |
| `Magento\Framework\MessageQueue\BatchConsumer` | Only if not defined in `queue_consumer.xml` | Yes, if exists |
| `Magento\AsynchronousOperations\Model\MassConsumer`  | Yes, if exists | Yes, if exists |

### `queue_topology.xml` {#queuetopologyxml}

The `queue_topology.xml` file defines the message routing rules and declares queues and exchanges. It contains the following elements:

*  `exchange`
*  `exchange/binding` (optional)
*  `exchange/arguments` (optional)
*  `exchange/binding/arguments` (optional)

#### Example `queue_topology.xml` file
{:.no_toc}

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/topology.xsd">
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
```

#### `exchange` element
{:.no_toc}

| Attribute      | Description |
| -------------- | ----------- |
 name (required) | A unique ID for the exchange.
 type (required) | Specifies the type of exchange. Must be `topic`.
 connection  (required) | For AMQP connections, a string that identifies the connection.  For MySQL connections, the connection name must be `db`.
 durable | Boolean value indicating whether the exchange is persistent. Non-durable exchanges are purged when the server restarts. The default is `true`.
 autoDelete | Boolean value indicating whether the exchange is deleted when all queues have finished using it. The default is `false`.
 internal | Boolean value. If set to true, the exchange may not be used directly by publishers, but only when bound to other exchanges. The default is `false`.

#### `binding` element
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

#### `arguments` element
{:.no_toc}

The `arguments` element is an optional element that contains one or more `argument` elements. These arguments define key/value pairs that are passed to the broker for processing.

Each `argument` definition must have the following parameters:

| Attribute      | Description |
| --------------- | ----------- |
| name | The parameter name |
| type | The data type of the value |

The following illustrates an `arguments` block:

```xml
<arguments>
    <argument name="warehouseId" xsi:type="int">1</argument>
    <argument name="carrierName" xsi:type="string">USPS</argument>
</arguments>
```

### `queue_publisher.xml` {#queuepublisherxml}

The `queue_publisher.xml` file defines which connection and exchange to use to publish messages for a specific topic. It contains the following elements:

*  [publisher](https://glossary.magento.com/publisher-subscriber-pattern)
*  publisher/connection

#### Example `queue_publisher.xml` file
{:.no_toc}

```xml
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/publisher.xsd">
    <publisher topic="magento.testModuleSynchronousAmqp.api.serviceInterface.execute" disabled="true" />
    <publisher topic="asynchronous.test">
        <connection name="amqp" exchange="magento" disabled="false"/>
        <connection name="db" exchange="exch1" disabled="true"/>
    </publisher>
</config>
```

#### `publisher` element
{:.no_toc}

| Attribute            | Description |
| -------------------- | ----------- |
| topic (required)     | The name of the topic. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

#### `connection` element
{:.no_toc}

The `connection` element is a subnode of the `publisher` element. There must not be more than one enabled active connection to a publisher defined at a time. If you omit the `connection` element, the default connection of `amqp` and exchange `magento` will be used.

| Attribute            | Description |
| -------------------- | ----------- |
| name (required)      | For AMQP connections, the connection name must match the `connection` attribute in the `queue_topology.xml` file. Otherwise, the connection name must be `db`. |
| exchange             | The name of the exchange to publish to. The default system exchange name is `magento`. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

{:.bs-callout-warning}
You cannot enable more than one `publisher` for each `topic`.

### Updating `queue.xml` {#updatequeuexml}

See [Migrate message queue configuration]({{page.baseurl}}/extension-dev-guide/message-queues/queue-migration.html) for information about upgrading from Magento 2.0 or 2.1.

### Related Topics

*  [Message Queues Overview]({{page.baseurl}}/config-guide/mq/rabbitmq-overview.html)
*  [Manage message queues with MySQL]({{page.baseurl}}/config-guide/mq/manage-message-queues.html)
*  [Install RabbitMQ]({{page.baseurl}}/install-gde/prereq/install-rabbitmq.html)

<!-- Link definitions -->
[MySQL]: https://www.mysql.com/
[RabbitMQ]: http://www.rabbitmq.com
