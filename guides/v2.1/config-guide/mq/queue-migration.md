---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Migrate message queue configuration
menu_title: Migrate message queue configuration
menu_order: 5
version: 2.1
github_link: config-guide/mq/queue-migration.md
---

### Migrate from Magento 2.1 to 2.2 ###

To upgrade from Magento 2.1, you must create the following files in the `<module>/etc` directory for each module that will use the message queue framework.

* `queue_consumer.xml` - Defines the relationship between an existing queue and its consumer.
* `queue_topology.xml`- Defines the message routing rules.
* `queue_publisher.xml` - Defines the relationship between a topic and its publisher.

The existing `queue.xml` file is deprecated.

For complete details about these files, see [Configure messque queue topology]({{page.baseurl}}config-guide/mq/config-mq.html)

<div class="bs-callout bs-callout-warning">
    <p>The Magento 2.1 <code><communication.xml</code> file has not changed for Magento 2.2.</p>
</div>

#### Create the `queue_consumer.xml` file ####

The first column in the following table lists the all the parameters in the `queue_consumer.xml` file. The second column lists where in the Magento 2.1 `queue.xml` file the equivalent parameters are located.

| 2.2 Attribute  | 2.1 queue.xml source |
| ---------------- | ----------- |
`<consumer>/name`   | `<broker>/<queue>/consumer`
`<consumer>/queue`  | `<broker>/<queue>/name`
`<consumer>/handler`          | `<broker>/<queue>/handler`
`<consumer>/consumerInstance`  | `<broker>/<queue>/consumerInstance`
`<consumer>/connection`       | `<broker>/type`
`<consumer>/maxMessages`     | `<broker>/<queue>/maxMessages`

#### Create the `queue_topology.xml` file ####

The first column in the following table lists the all the parameters in the `queue_topology.xml` file. The second column lists where in the Magento 2.1 `queue.xml` file the equivalent parameters are located.

| 2.2 Attribute  | 2.1 queue.xml source |
| ---------------- | -----------|
`<exchange>/name` | `<broker>/exchange`
`<exchange>/type` | Not present in 2.1. Set this value to `topic`.
`<exchange>/connection` | `<broker>/type`
`<exchange>/durable` | Not present in 2.1. Omit this parameter to accept the default value.
`<exchange>/autoDelete` | Not present in 2.1. Omit this parameter to accept the default value.
`<exchange>/internal` | Not present in 2.1. Omit this parameter to accept the default value.
`<exchange>/<binding>/id` | Not present in 2.1. It is recommended that you concatenate the 2.1 exchange name, topic name, and queue name to create a value for the `id` parameter.
`<exchange>/<binding>/topic` | `<broker>/topic`
`<exchange>/<binding>/destinationType` | Not present in 2.1. This value must be set to `queue`.
`<exchange>/<binding>/destination` | `<broker>/<queue>/name`
`<exchange>/<binding>/disabled` | Not present in 2.1. Omit this parameter to accept the default value.
`<arguments>` | Not present in 2.1. Omit this element.

#### Create the `queue_publisher.xml` file ####
The first column in the following table lists the all the parameters in the `queue_publisher.xml` file. The second column lists where in the Magento 2.1 `queue.xml` file the equivalent parameters are located.


| 2.2 Attribute  | 2.1 queue.xml source |
| ---------------- | ----------- |
`<publisher>/topic` | `<broker>/topic`
`<publisher>/disabled` | Not present in 2.1. Omit this parameter to accept the default value.
`<publisher>/<connection>/name` | `<broker>/type`
`<publisher>/<connection>/exchange` | `<broker>exchange`
`<publisher>/<connection>/disabled` | Not present in 2.1. Omit this parameter to accept the default value.

### Migrate from Magento 2.0 to 2.2 ###
To upgrade from Magento 2.0, you must create the following files in the `<module>/etc` directory for each module that will use the message queue framework.

* `communication.xml` - Configures message queue communication attributes for the module.
* `queue_consumer.xml` - Defines the relationship between an existing queue and its consumer.
* `queue_topology.xml`- Defines the message routing rules.
* `queue_publisher.xml` - Defines the relationship between a topic and its publisher.

The existing `queue.xml` file is deprecated.

For complete details about these files, see [Configure messque queue topology]({{page.baseurl}}config-guide/mq/config-mq.html)

#### Create the `queue_consumer.xml` file ####
The first column in the following table lists the all the parameters in the `queue_consumer.xml` file. The second column lists where in the Magento 2.0 `queue.xml` file the equivalent parameters are located.

2.2 Attribute        | 2.0 queue.xml Source
---------------- | -----------
`<consumer>/name`   | `<consumer>/name`
`<consumer>/queue`  | `<consumer>/queue`
`<consumer>/handler`          | Use the values from `<consumer>/class` and `<consumer>/method` in the format `<Vendor>\Module\<ServiceName>::<methodName>`.
`<consumer>/consumerInstance` | `<consumer>/executor`
`<consumer>/connection`       |  `<consumer>/connection`
`<consumer>/maxMessages`     | `<consumer>/max_messages`

#### Create the `queue_topology.xml` file ####
The first column in the following table lists the all the parameters in the `queue_topology.xml` file. The second column lists where in the Magento 2.0 `queue.xml` file the equivalent parameters are located.

| 2.2 Attribute  | 2.0 queue.xml Source |
| ---------------- | -----------|
`<exchange>/name` | `<publisher>/exchange`
`<exchange>/type` | Not present in 2.0. Set this value to `topic`.
`<exchange>/connection` | `<publisher>/connection`
`<exchange>/durable` | Not present in 2.0. Omit this parameter to accept the default value.
`<exchange>/autoDelete` | Not present in 2.0. Omit this parameter to accept the default value.
`<exchange>/internal` | Not present in 2.0. Omit this parameter to accept the default value.
`<<exchange>/binding>/id` | Not present in 2.0. It is recommended that you concatenate the 2.1 exchange name, topic name, and queue name to create a value for the `id` parameter.
`<exchange>/<binding>/topic` | `<bind>/topic`
`<exchange>/<binding>/destinationType` | Not present in 2.0. This value must be set to `queue`.
`<exchange>/<binding>/destination` | `<bind>/queue`
`<exchange>/<binding>/disabled` | Not present in 2.0. Omit this parameter to accept the default value.
`<arguments>` | Not present in 2.0. Omit this element.

#### Create the `queue_publisher.xml` file ####
The first column in the following table lists the all the parameters in the `queue_publisher.xml` file. The second column lists where in the Magento 2.0 `queue.xml` file the equivalent parameters are located.

| 2.2 Attribute  | 2.0 queue.xml Source |
| ---------------- | ----------- |
`<publisher>/topic` | `<topic>/publisher`
`<publisher>/disabled` | Not present in 2.0. Omit this parameter to accept the default value.
`<publisher>/<connection>/name` | `<publisher>/connection`
`<publisher>/<connection>/exchange` | `<publisher>/exchange`
`<publisher>/<connection>/disabled` | Not present in 2.0. Omit this parameter to accept the default value.

### Migrate from Magento 2.0 to 2.1 ###

#### Create the `communication.xml` file ####

Magento 2.1 introduces the `communication.xml` file, which configures message queue communication attributes for the module. See 	<a href="{{page.baseurl}}config-guide/mq/config-mq.html">Configure message queue topology</a> for information about creating this file.

#### Replace the `queue.xml` file ####

The structure of the `queue.xml` file is substantially different in Magento. 2.1. Make a copy of your 2.0 `queue.xml` file and create a new one with the structure listed below.

| 2.1 Attribute  | 2.0 Equivalent |
| ---------------- | ----------- |
`<broker>/topic` | `<bind>/topic`
`<broker>/type` | `<consumer>/connection`
`<broker>/exchange` | `<bind>/exchange`
`<broker>/<queue>/name` | `<consumer>/queue`
`<broker>/<queue>/consumer` | `<consumer>/name`
`<broker>/<queue>/consumerInstance` | `<consumer>/executor`
`<broker>/<queue>/handler` | Use the values from `<consumer>/class` and `<consumer>/method` in the format `<Vendor>\Module\<ServiceName>::<methodName>`.
`<broker>/<queue>/maxMessages` | `<consumer>/max_messages`
