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
  <p>The message queue topology can only be configured after Magento Community Edition has been installed and before Magento Enterprise Edition has been installed. </p>
</div>


Each module that is to be a publisher must be configured as such. If you want a module to use the MQF, create a `<module>/etc/queue.xml` file and define the publisher, consumers, exchanges and bindings.

## Edit the `communication.xml` file##

The `communication.xml` file defines common pieces of communication patterns which will be used by underlying transportation technology such as HTTP RPC, Webhooks, AMQP

### Required elements###

Each `communication.xml` file must contain the following lines:

{% highlight xml %}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
.
.
.
</config>

{% endhighlight %}

### topic element###

Every topic must be configured with transport layer connection information, so that the publisher knows where to publish messages. Configuration is flexible in that you can switch the transport layer for topics at deployment time. These values can be overwritten via `env.php`.

The `name` parameter is required. The topic definition must include either a `request` or a `schema`.

Parameter | Description | Example
=== | === | ===
name | A string that uniquely identifies the topic. The format should be `*object*.*action*` You can further distinguish topic names by appending `.*qualifier*` to the end of the name. | `magento.omsspec.api.ordermanagement.ordercreate`, `magento.omsspec.api.ordermanagement.ordercreate.success`
request | Specifies the format of the topic. | `string`, `string[]`
response | Specifies the format of the response. Omit this parameter if you are defining an asynchronous topic. This parameter is required if you are defining a synchronous topic. | `string`
schema | The interface that describes the structure of the message. The format must be  `Vendor\Module\Api\ServiceName::methodName`. |


### handler element###

Parameter | Description | Example
=== | === | ===
name | A string that uniquely defines the handler. The name should be derived from the topic name.  | magento.omsspec.api.ordermanagement.ordercreate.handler
type | The class that defines the handler. | agento\RpcQueue\Model\Handler\Async\SendOrderCreateNotification
method | The method this handler executes. | send
disabled | Determines whether this handler is disabled. The default value is `false`. | `true`, `false`

## Edit the `queue.xml` file ##

The `queue.xml` file defines the broker that processes topics and the name of each consumer. It also specifies the queue each topic will be sent to.

A single topic can be sent to one or multiple queues. Each recipient is defined in `consumer` elements. , and queues


### Required elements

Each `queue.xml` file must contain the following lines:

{% highlight xml %}
<?xml version="1.0"?>

<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/queue.xsd">
.
.
.
</config>

{% endhighlight %}

### broker elements

Parameter | Description | Example
=== | === | ===
topic | A topic defined in the `communication.xml` file. | `magento.omsspec.api.ordermanagement.ordercreate`, `magento.omsspec.api.ordermanagement.ordercreate.success`
type | The type of message broker. For this release, the value must be `amqp`. | `amqp`
exchange | The name of the exchange to publish to. The default system exchange name is `magento`. | `magento`

### consumer element###

Parameter | Description | Example
=== | === | ===
name | The name of the consumer.  | sync.consumer, async.consumer
queue | Defines the queue name to send the message to.| magento_omsspec_api_ordermanagement_ordercreated

## Sample `queue.xml` file ##

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:MessageQueue/etc/queue.xsd">
    <broker topic="magento.omsspec.api.ordermanagement.ordercreate" type="amqp" exchange="magento">
        <consumer name="async.consumer" queue="magento_omsspec_api_ordermanagement_ordercreate_first" /><!-- same topic is routed to 2 different queues -->
        <consumer name="async.consumer1" queue="magento_omsspec_api_ordermanagement_ordercreate_second" />
    </broker>
    <broker topic="magento.omsspec.api.ordermanagement.ordercreate.success" type="amqp" exchange="magento">
        <consumer name="async.consumer.for.same.queue" queue="magento_omsspec_api_ordermanagement_ordercreate_success" /><!-- two different topics are routed to same queues -->
    </broker>
    <broker topic="magento.omsspec.api.ordermanagement.ordercreated" type="amqp" exchange="magento">
        <consumer name="sync.consumer" queue="magento_omsspec_api_ordermanagement_ordercreated" />
    </broker>
    <broker topic="magento.omsspec.api.ordermanagement.orderupdated" type="amqp" exchange="magento" /><!-- this configuration is for publisher which never consumes message -->
</config>
{% endhighlight %}

#### Related Topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/manage-mysql.html">Manage message queues with MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
