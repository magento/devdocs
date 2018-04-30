---
layout: default
group: config-guide
subgroup: 15_RabbitMQ
title: Message Queues Overview
menu_title: Message Queues (Magento Commerce only)
menu_order: 1
menu_node: parent
version: 2.0
ee_only: True
github_link: config-guide/mq/rabbitmq-overview.md
functional_areas:
  - Configuration
  - System
  - Setup
---

The Message Queue Framework (MQF) is a system within {{site.data.var.ee}} that allows a {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} to publish messages to queues. It also defines the consumers that will receive the messages asynchronously. The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

The following diagram illustrates the Message Queue Framework.

<img src="{{ site.baseurl}}/common/images/mq.png">

* A {% glossarytooltip d5777fe2-f786-45d9-b052-cca8a10120d9 %}publisher{% endglossarytooltip %} is a component that sends messages to an exchange. It knows which exchange to publish to and the format of the messages it sends.

* An exchange receives messages from publishers and sends them to queues. Although RabbitMQ supports multiple types of exchanges, Magento uses topic exchanges only. A topic includes a routing key, which contains text strings separated by dots. The format for a topic name is <code><i>string1</i>.<i>string2</i></code>..., for example, `customer.created` or `customer.sent.email`.

	The broker allows you to use wildcards when setting rules for forwarding messages.  You can use an asterisk (`*`) to replace _one_ string or a pound sign (`#`) to replace 0 or more strings. For example, `customer.*` would filter on `customer.create` and `customer.delete`, but not `customer.sent.email`. However `customer.#` would filter on `customer.create`,  `customer.delete`, and`customer.sent.email`.

* A queue is a buffer that stores messages.

* A consumer receives messages. It knows which queue to consume. It can map processors of the message to a specific queue.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL {% glossarytooltip edb42858-1ff8-41f9-80a6-edf0d86d7e10 %}adapter{% endglossarytooltip %} stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

See <a href="{{page.baseurl}}/extension-dev-guide/message-queues/config-mq.html">Configure message queues</a> for information about setting up the message queue system.

#### Related Topics

*	[Manage message queues]({{page.baseurl}}/config-guide/mq/manage-mysql.html)
*	[Install RabbitMQ]({{page.baseurl}}/install-gde/prereq/install-rabbitmq.html)
