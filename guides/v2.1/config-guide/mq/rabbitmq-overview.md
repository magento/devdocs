---
layout: default
group: config-guide
subgroup: 18_RabbitMQ
title: Message Queues
menu_title:  Message Queues (Enterprise Edition only)
menu_order: 1
menu_node: parent
version: 2.1
github_link21: config-guide/mq/rabbitmq-overview.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">

The Message Queue Framework (MQF) is a system within Magento Enterprise Edition that allows a module to publish messages to queues. It also defines the consumers that will receive the messages asynchronously. The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification. 

The following diagram illustrates the Message Queue Framework.

<img src="{{ site.baseurl }}common/images/mq.png">

* A publisher is a component that sends messages to an exchange. It knows which exchange to publish to and the format of the messages it sends.

* An exchange receives messages from publishers and sends them to queues. Although RabbitMQ supports multiple types of exchanges, Magento uses topic exchanges only. A topic includes a routing key, which contains text strings separated by dots. The format for a topic name is <code><i>string1</i>.<i>string2</i></code>..., for example, `customer.created` or `customer.sent.email`.

	The broker allows you to use wildcards when setting rules for forwarding messages.  You can use an asterisk (`*`) to replace _one_ string or a pound sign (`#`) to replace 0 or more strings. For example, `customer.*` would filter on `customer.create` and `customer.delete`, but not `customer.sent.email`. However `customer.#` would filter on `customer.create`,  `customer.delete`, and`customer.sent.email`.

* A queue is a buffer that stores messages.

* A consumer receives messages. It knows which queue to consume. It can map processors of the message to a specific queue.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL adapter stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

See <a href="{{ site.gdeurl21 }}config-guide/mq/config-mq.html">Configure message queues</a> for information about setting up the message queue system.

#### Related Topics
*	<a href="{{ site.gdeurl21 }}config-guide/mq/config-mq.html">Configure message queues</a>
*	<a href="{{ site.gdeurl21 }}install-gde/prereq/install-rabbitmq.html">Install RabbitMQ</a>
