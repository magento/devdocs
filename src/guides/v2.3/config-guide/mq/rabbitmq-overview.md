---
group: configuration-guide
title: Message Queues Overview
---

The Message Queue Framework (MQF) is a system that allows a [module](https://glossary.magento.com/module) to publish messages to queues. It also defines the consumers that will receive the messages asynchronously. The MQF uses [RabbitMQ](http://www.rabbitmq.com) as the messaging broker, which provides a scalable platform for sending and receiving messages. It also includes a mechanism for storing undelivered messages. RabbitMQ is based on the Advanced Message Queuing Protocol (AMQP) 0.9.1 specification.

The following diagram illustrates the Message Queue Framework.

![]({{ site.baseurl }}/common/images/mq.png)

*  A [publisher](https://glossary.magento.com/publisher-subscriber-pattern) is a component that sends messages to an exchange. It knows which exchange to publish to and the format of the messages it sends.

*  An exchange receives messages from publishers and sends them to queues. Although RabbitMQ supports multiple types of exchanges, Magento uses topic exchanges only. A topic includes a routing key, which contains text strings separated by dots. The format for a topic name is <code><i>string1</i>.<i>string2</i></code>..., for example, `customer.created` or `customer.sent.email`.

   The broker allows you to use wildcards when setting rules for forwarding messages.  You can use an asterisk (`*`) to replace _one_ string or a pound sign (`#`) to replace 0 or more strings. For example, `customer.*` would filter on `customer.create` and `customer.delete`, but not `customer.sent.email`. However `customer.#` would filter on `customer.create`,  `customer.delete`, and`customer.sent.email`.

*  A queue is a buffer that stores messages.

*  A consumer receives messages. It knows which queue to consume. It can map processors of the message to a specific queue.

A basic message queue system can also be set up without using RabbitMQ. In this system, a MySQL [adapter](https://glossary.magento.com/adapter) stores messages in the database. Three database tables (`queue`, `queue_message`, and `queue_message_status`) manage the message queue workload. Cron jobs ensure the consumers are able to receive messages. This solution is not very scalable. RabbitMQ should be used whenever possible.

#### Related Topics

*  [Manage message queues]({{page.baseurl}}/config-guide/mq/manage-message-queues.html)
*  [Install RabbitMQ]({{page.baseurl}}/install-gde/prereq/install-rabbitmq.html)
