---
layout: default
group: release-notes
subgroup: 05_BC
title: Magento 2.2 backward incompatible changes
menu_title: Magento 2.2 backward incompatible changes
version: 2.1
menu_node: parent
menu_order: 1
github_link: release-notes/backward-incompatible-changes-2.2.md
---

## {{page.title}}
{:.no_toc}

* TOC
{:toc}

### Overview

Magento 2.2 introduces several major changes that may affect the correct functionality of already released external modules. The purpose of this document is to highlight major changes between Magento 2.1 and 2.2.

### API Changes

Magento 2.2 introduces changes in several API classes. These changes are designed to extend overall API coverage and improve developer experience with new features.

#### MessageQueue Module API
The `Magento\Framework\MessageQueue\ConfigInterface` has been deprecated. The following table lists the deprecated methods and their replacements.

Deprecated method | Use instead | Subsequent calls
--- | ---
`getExchangeByTopic($topicName);` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)` | Call `getConnection()`  then `getExchange()`
`getQueuesByTopic($topic);` | `\Magento\Framework\MessageQueue\Topology\ConfigInterface::getQueues()`  | Iterate and call `getName()`
`getConnectionByTopic($topic);` |  `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)`| `getConnection()` `getName()`
`getConnectionByConsumer($consumer);` |  `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumer($name)` | `getConnection()`
`getMessageSchemaType($topic);` | `\Magento\Framework\Communication\ConfigInterface::getTopic($name)` |  Use getter methods to return information from topic data.
`getConsumer($name);` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumer($name)` |  Extract necessary information using accessor methods.
`getConsumerNames();` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumers()` | Iterate and use `getName()` on every item.
`getBinds();` | `\Magento\Framework\MessageQueue\Topology\ConfigInterface::getExchanges()` | Extract necessary information using accessor methods.
`getPublishers();` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublishers()` | Iterate and use getter methods.
`getConsumers();` | `\Magento\Framework\MessageQueue\Consumer\ConfigInterface::getConsumers()` | Iterate and use getter methods.
`getTopic($name);` | `\Magento\Framework\Communication\ConfigInterface::getTopic($name)` `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($topic)`| Use `getTopic($name)` for topic information. Use `getPublisher($name)` for publisher-related clients.
`getPublisher($name);` | `\Magento\Framework\MessageQueue\Publisher\ConfigInterface::getPublisher($name)` | Use getter methods to return requested information.
`getResponseQueueName($topicName);` | Magento\Framework\MessageQueue\Rpc\ResponseQueueNameBuilder::getQueueName($topicName) | -



### Changes in UI

### Database Schema changes

#### Staging (EE Only)


### Persistence management

#### Data interfaces persistence
