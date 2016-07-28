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

#### Create the `queue_consumer.xml` file ####

2.2 Atrribute        | 2.1 `queue.xml` Source
---------------- | -----------
/<consumer>/name   | /<broker>//<queue>/consumer
/<consumer>/queue  | /<broker>//<queue>/name
/<consumer>/handler          | /<broker>//<queue>/handler
/<consumer>/consumerInstance | /<broker>//<queue>/consumerInstance
/<consumer>/connection       | /<broker>/type
/<consumer>/maxMessages     | /<broker>//<queue>/maxMessages


#### Create the `queue_topology.xml` file ####

2.2 Atrribute        | 2.1 `queue.xml` Source
---------------- | -----------
/<exchange>/name | /<broker>/exchange
/<exchange>/type | Not present in 2.1. Set this value to `topic`.
/<exchange>/connection | /<broker>/type
/<exchange>/durable | Not present in 2.1. Omit this parameter to allow the default value.
/<exchange>/autoDelete | Not present in 2.1. Omit this parameter to allow the default value.
/<exchange>/internal | Not present in 2.1. Omit this parameter to allow the default value.
/<binding>/id | Not present in 2.1. It is recommended that you concatenate the 2.1 exchange name, topic name, and queue name to create a value for the `id` parameter.
/<binding>/topic | /<broker>/topic
/<binding>/destinationType | Not present in 2.1. This value must be set to `queue`.
/<binding>/destination | /<broker>//<queue>/name
/<binding>/disabled | Not present in 2.1. Omit this parameter to allow the default value.
/<arguments>/ | Not present in 2.1. Omit this element.

#### Create the `queue_publisher.xml` file ####

/<publisher>/topic | /<broker>/topic
/<publisher>/disabled | Not present in 2.1. Omit this parameter to allow the default value.
/<connection>/exchange | /<broker>exchange
/<connection>/disabled | Not present in 2.1. Omit this parameter to allow the default value.

### Migrate from Magento 2.0 to 2.2 ###

#### Create the `queue_consumer.xml` file ####

2.2 Atrribute        | 2.0 `queue.xml` Source
---------------- | -----------
/<consumer>/name   | /<consumer>/
/<consumer>/queue  | /<consumer>/
/<consumer>/handler          | /<consumer>/
/<consumer>/consumerInstance | /<consumer>/
/<consumer>/connection       | /<consumer>/
/<consumer>/maxMessages     | /<consumer>/


#### Create the `queue_topology.xml` file ####

#### Create the `queue_publisher.xml` file ####


### Migrate from Magento 2.0 to 2.1 ###
