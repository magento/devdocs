---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Configure 2.2 message queue topology
menu_title: Configure 2.2 message queue topology
menu_order: 3
version: 2.2
github_link: config-guide/mq/config-mq22.md
---
## {{page.menu_title}}
{:.no_toc}

_**Note to reviewer: Is the following note still true?**_

<div class="bs-callout bs-callout-warning">
  <p>The message queue topology can only be configured after Magento Community Edition has been installed and before Magento Enterprise Editions has been installed. </p>
</div>

### Overview ###
Configuring the message queue topology involves creating and modifying 3 configuration files in the `<module>/etc` directory:

* [`queue_consumer.xml`](#queueconsumerxml) - Defines the relationship between an existing queue and its consumer.
* [`queue_topology.xml`](#queuetopologyxml) - Defines the relationship between a queue and its assigned topic.
* [`queue_publisher.xml`](#queuepublisherxml) - Defines the relationship between a topic and its publisher.

#### Use Cases ####
Depending on your needs, you may only need to create and configure one or two of these files.

* If you only want to publish to an existing queue created by a 3rd party system, you will only need the `queue_publisher.xml` file.
* If you only want to consume from an existing queue,  you will only need the `queue_consumer.xml` config file.
* In cases where you want to configure the local queue and publish to it for 3rd party systems to consume, you will need the `queue_publisher.xml` and `queue_topology` files.
* When you want to configure the local queue and consume messages published by 3rd party system, you will need the `queue_topology` and `queue_consumer` files.

### `queue_consumer.xml` ###
The `queue_consumer.xml` file contains one or more `consumer` elements:

#### `consumer` element ####
{:.no_toc}

| Atrribute        | Description |
| ---------------- | ----------- |
| name (required)  | The name of the consumer. The value should be the same as the magic method used as a callback. |
| queue (required) | Defines the queue name to send the message to. This value is used in the `queue_topology.xml` file. |
| handler          | The method within a specified class that processes the message. The value must be specified in the format `<Vendor>\Module\<ServiceName>::<methodName>`.|
| consumerInstance | The path to a Magento class that consumes the message. |
| connection       | Must be `amqp` if using an external message broker or `db` if writing to the MySQL database.  |
| max_messages     | Specifies the maximum number of messages to consume.|

#### Example ####
{:.no_toc}

{% highlight xml %}
<?xml version="1.0"?>
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue_consumer.xsd">
    <consumer name="basic.consumer" queue="basic.consumer.queue" handler="LoggerClass::log"/>
    <consumer name="synchronous.rpc.test" queue="synchronous.rpc.test.queue" handler="LoggerClass::log"/>
    <consumer name="rpc.test" queue="queue.for.rpc.test.unused.queue" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" connection="amqp"/>
</config>
{% endhighlight %}

### `queue_topology.xml` ###

The `queue_topology.xml` file defines the relationship between a queue and its assigned topic. It contains the following elements:

* `exchange`
* `binding`
* `arguments` (optional)

#### `exchange` element ####

{:.no_toc}
| Attribute      | Description |
| -------------- | ----------- |
 name (required) | A unique ID for the exchange.
 type | Specifies the type of exchange. Must be `topic`.
 connection | Specifies the type of connection. Must be `amqp` or `db`.
 durable | Boolean value indicating whether the exchange is persistent. Non-durable exchanges are purged when the server restarts.
 autoDelete | Boolean value indicating whether the exchange is deleted when all queues have finished using it.
 internal | Boolean value. If set to true, the exchange may not be used directly by publishers, but only when bound to other exchanges.

#### `binding` element ####

{:.no_toc}
| Attribute      | Description |
| -------------- | ----------- |
| id (required)  | A unique ID for this binding. |
| topic          | The name of a topic. You can specify an asterisk (*) or pound sign (#) as wildcards.|
| destinationType | Must be `queue`. |
| destination | Identifies the name of an exchange or queue. |
| disabled       | Determines whether this binding is disabled. The default value is `false`. |


#### `arguments` element ####

{:.no_toc}
The `arguments` element is an optional element that contains one or more `argument` elements. These arguments define key/value pairs that are passed to the broker for processing.

Each `argument` definition must have the following parameters:

| Attribute       | Description |
| --------------- | ----------- |
| name | The parameter name |
| type | The data type of the value |
| <value> | The value being passed |

The following illustrates an `arguments` block:

{% highlight xml %}
<arguments>
    <argument name="warehouseId" xsi:type="int">1</argument>
    <argument name="carrierName" xsi:type="string">USPS</argument>
</arguments>
{% endhighlight %}

See the `types.xsd` file to determine all the supported data types.

#### Example
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

### `queue_publisher.xml`

The `queue_publisher.xml` file defines the relationship between a topic and its publisher. It contains the following elements with the following attributes:

#### `publisher` element
{:.no_toc}

| Attribute            | Description |
| -------------------- | ----------- |
| topic (required)     | The name of the topic. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

#### `connection` element
{:.no_toc}

| Attribute            | Description |
| -------------------- | ----------- |
| name (required)      | The type of connection. Must be `amqp` or `db`.|
| exchange             | The name of the exchange to publish to. The value is referenced in both the `queue_topology.xml` and `queue_consumer.xml` files. The default system exchange name is `magento`. |
| disabled             | Determines whether this queue is disabled. The default value is `false`. |

#### Example
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

### Updating `queue.xml`

TBD

### Related Topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/manage-mysql.html">Manage message queues with MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
