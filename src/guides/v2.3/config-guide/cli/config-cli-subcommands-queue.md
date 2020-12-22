---
group: configuration-guide
title: Start message queue consumers
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

You must start a message queue consumer to enable asynchronous operations such as Inventory Management mass actions and REST bulk and asynchronous endpoints. To enable B2B functionality, you must start multiple consumers. Third-party modules might also require that you start a custom consumer.

{% include config/message-queue-consumers.md %}

{:.ref-header}
Related topics

*  [Message queues overview]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
*  [Manage message queues]({{ page.baseurl }}/config-guide/mq/manage-message-queues.html)