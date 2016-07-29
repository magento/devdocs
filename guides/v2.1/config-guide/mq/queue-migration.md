---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Migrate message queue configuration
menu_title: Migrate message queue configuration
menu_order: 3
version: 2.1
github_link: config-guide/mq/queue-migration.md
---

### Migrate from Magento 2.0 to 2.1 ###

The `communication.xml` file was not changed between Magento 2.0 and 2.1. Replace the `queue.xml` file for each module that sends messages to the message queue.

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

#### Related topics
*	<a href="{{page.baseurl}}config-guide/mq/rabbitmq-overview.html">RabbitMQ Overview</a>
*	<a href="{{page.baseurl}}config-guide/mq/config-mq.html">Configure message queues</a>
