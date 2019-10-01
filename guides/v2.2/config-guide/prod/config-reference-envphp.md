---
group: configuration-guide
title: env.php reference
functional_areas:
  - Configuration
  - System
  - Setup
---

The `env.php` file contains the following sections:

| Name              | Description                                    |
| ----------------- | ---------------------------------------------- |
| `backend`         | Settings for the Admin area                    |
| `crypt`           | The encryption key for cryptographic functions |
| `session`         | Session storage data                           |
| `db`              | Database connection settings                   |
| `resource`        | Mapping of resource name to a connection       |
| `x-frame-options` | Setting for [x-frame-options][x-frame-options] |
| `MAGE_MODE`       | The [Magento mode][magento-mode]               |
| `cache_types`     | Cache storage settings                         |
| `install`         | The installation date                          |
| `queue`           | [Message queues][message-queues] settings      |
| `lock`            | Lock provider settings                         |

[x-frame-options]: {{ page.baseurl }}/config-guide/secy/secy-xframe.html
[magento-mode]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html
[message-queues]: {{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html
