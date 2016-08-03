---
layout: default
group: extension-dev-guide
subgroup: 99_Module Development
title: Configure bulk operations
menu_title: Confgire bulk operations (Enterprise Edition Only)
menu_order: 21
version: 2.2
github_link: extension-dev-guide/config-bulk-operations.md

---

## {{page.title}}
<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">

### Configure message queues

The message queue topology must be configured to implement bulk operations. Create or edit the following files in the `app/code/Magento/BulkOperations/etc` directory.

*_NOTE TO REVIEWER: I deleted references to queue.xml because it is deprecated for 2.2_*

* `communication.xml`
* `di.xml`
* `queue_consumer.xml`
* `queue_publisher.xml`
* `queue_topology.xml`

For more information about the `di.xml` file, see [Dependency Injection]({{page.baseurl}}extension-dev-guide/depend-inj.html). For information the other files, see []({{page.baseurl}}/config-guide/mq/config-mq.html).

#### Create `communication.xml`

The `communication.xml` file defines aspects of the message queue system that apply to all topics for the module. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Communication/etc/communication.xsd">
    <topic name="<your_topic_name>" request="Magento\BulkOperations\Api\Data\OperationInterface">
        <handler name="<your_handler_name>" type="<Consumer_Class>" method="<consumer_method>" />
    </topic>
</config>
{% endhighlight %}

#### Edit `di.xml`

Add the following type to the BulkOperations module's `di.xml` file.

{% highlight xml %}
<type name="Magento\Framework\MessageQueue\MergerFactory">
    <arguments>
        <argument name="mergers" xsi:type="array">
            <item name="<your_consumer_name>" xsi:type="string"><Merger_Class></item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

#### Create `queue_consumer.xml`

The `queue_consumer.xml` file defines the relationship between a queue and its consumer. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" handler="<Consumer_Class>::<Consumer_method>"/>
</config>
{% endhighlight %}

#### Create `queue_publisher.xml`

The `queue_publisher.xml` file defines the exchange where a topic is published. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/consumer.xsd">
    <consumer name="<consumer_name>" queue="<queue_name>" connection="amqp" consumerInstance="Magento\Framework\MessageQueue\BatchConsumer" handler="Consumer_Class::Consumer_method"/>
</config>
{% endhighlight %}

#### Create `queue_topology.xml`
The `queuetopology.xml` file defines the message routing rules and declares queues and exchanges. Create this file with the following contents:

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework-message-queue:etc/topology.xsd">
    <exchange name="magento" type="topic" connection="amqp">
        <binding id="defaultBinding" topic="" destinationType="queue" destination="<queue_name>"/>
    </exchange>
</config>
{% endhighlight %}

#### Related Topics

* [RabbitMQ Overview]( {{page.baseurl}}config-guide/mq/rabbitmq-overview.html)
* [Bulk Operations]({{page.baseurl}}extension-dev-guide/bulk-operations.html)
