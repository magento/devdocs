---
group: configuration-guide
title: env.php reference
functional_areas:
  - Configuration
  - System
  - Setup
---

The `env.php` file contains the following sections:

| Name                          | Description                                                     |
|-------------------------------|-----------------------------------------------------------------|
| `backend`                     | Settings for the Admin area                                     |
| `cache_types`                 | Cache storage settings                                          |
| `consumers_wait_for_messages` | Configure how consumers process messages from the message queue |
| `cron`                        | Enable or disable the cron jobs                                 |
| `crypt`                       | The encryption key for cryptographic functions                  |
| `db`                          | Database connection settings                                    |
| `directories`                 | Magento directories mapping settings                            |
| `downloadable_domains`        | List of downloadable domains                                    |
| `install`                     | The installation date                                           |
| `lock`                        | Lock provider settings                                          |
| `MAGE_MODE`                   | The [Magento mode][magento-mode]                                |
| `queue`                       | [Message queues][message-queues] settings                       |
| `resource`                    | Mapping of resource name to a connection                        |
| `session`                     | Session storage data                                            |
| `x-frame-options`             | Setting for [x-frame-options][x-frame-options]                  |

## backend

Configure the **frontName** for the Magento admin url using the `backend` node in env.php.

```conf
'backend' => [
  'frontName' => 'admin'
]
```

## cache_types

All the Magento cache types configuration are available from this node.

```conf
'cache_types' => [
  'config' => 1,
  'layout' => 1,
  'block_html' => 1,
  'collections' => 1,
  'reflection' => 1,
  'db_ddl' => 1,
  'compiled_config' => 1,
  'eav' => 1,
  'customer_notification' => 1,
  'config_integration' => 1,
  'config_integration_api' => 1,
  'full_page' => 1,
  'config_webservice' => 1,
  'translate' => 1,
  'vertex' => 1
]
```

Learn more about different [Cache Types][cache-types].

## consumers_wait_for_messages

Specify whether consumers should continue polling for messages if the number of processed messages is less than the `max_messages` value. The default value is `1`.

```conf
'queue' => [
    'consumers_wait_for_messages' => 1
]
```

The following options are available:

-  `1`—Consumers continue to process messages from the message queue until reaching the `max_messages` value specified in the `env.php` file before closing the TCP connection and terminating the consumer process. If the queue empties before reaching the `max_messages` value, the consumer waits for more messages to arrive.

   We recommend this setting for large merchants because a constant message flow is expected and delays in processing are undesirable.

-  `0`—Consumers process available messages in the queue, close the TCP connection, and terminate. Consumers do not wait for additional messages to enter the queue, even if the number of processed messages is less than the `max_messages` value specified in the `env.php` file. This can help prevent issues with cron jobs caused by long delays in message queue processing.

   We recommend this setting for smaller merchants that do not expect a constant message flow and prefer to conserve computing resources in exchange for minor processing delays when there could be no messages for days.

## cron

Enable or disable cron jobs for the Magento application. By default, cron jobs are enabled. To disable them, add the `cron` configuration to the `env.php` file and set the value to `0`.

```conf
'cron' => [
  'enabled' => 0
]
```

{:.bs-callout-warning}
Be careful when you disable cron jobs. When they are disabled essential processes required by the Magento application will not run.

Learn more about [Crons][crons].

## crypt

Magento uses an encryption key to protect passwords and other sensitive data. This key is generated during the Magento installation process.

```conf
'crypt' => [
  'key' => '63d409380ccb1182bfb27c231b732f05'
]
```

You can learn more about it at [Encryption Key][encryption-key].

## db

All database configurations are availble in this node.

```conf
'db' => [
  'table_prefix' => '',
  'connection' => [
    'default' => [
      'host' => 'localhost',
      'dbname' => 'magento_db',
      'username' => 'root',
      'password' => 'admin123',
      'model' => 'mysql4',
      'engine' => 'innodb',
      'initStatements' => 'SET NAMES utf8;',
      'active' => '1'
    ]
  ]
]
```

## directories

Optional directory mapping options that need to be set when the web server is configured to serve Magento app from the `/pub` directory for [improved security][change-docroot-to-pub].

```conf
'directories' => [
    'document_root_is_pub' => true
]
```

## downloadable_domains

A list of downloadable domains available in this node. Additional domains can be added, removed, or listed using CLI commands.

```conf
'downloadable_domains' => [
    'local.vanilla.com'
]
```

Learn more about [Downloadable Domains][downloadable-domains] commands.

## install

The installation date of Magento application.

```conf
'install' => [
  'date' => 'Tue, 23 Apr 2019 09:31:07 +0000'
]
```

## lock

Lock provider settings are configured using the `lock` node.

Learn more about the lock provider at [Lock Provider Configuration][lock-provider-config].

## MAGE_MODE

The Magento deploy mode can be configured in this node.

```conf
'MAGE_MODE' => 'developer'
```
Learn more about [Magento Modes][magento-modes].

## queue

Message queue releated configurations are availble in this node.

```conf
'queue' => [
  'topics' => [
    'customer.created' => [publisher="default-rabitmq"],
    'order.created' => [publisher="default-rabitmq"],
  ]
]
```

Learn more about Message queue in below link [Message Queue][message-queue]

## resource

Resource configuration settings are avilable in this node.

```conf
'resource' => [
  'default_setup' => [
    'connection' => 'default'
  ]
]
```

## session

Magento session related configurations are stoted in the `session` node.

```conf
'session' => [
  'save' => 'files'
],
```
Learn more about session in [Session][session].

## x-frame-options

x-frame-options header can be configured using this node.

```conf
'x-frame-options' => 'SAMEORIGIN'
```

Learn more about session in [x-frame-options][x-frame-options].

<!-- Link definitions -->
[lock-provider-config]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-lock.html
[encryption-key]: https://docs.magento.com/m2/ce/user_guide/system/encryption-key.html
[session]: {{ page.baseurl }}/config-guide/sessions.html
[message-queue]: {{ page.baseurl }}/extension-dev-guide/message-queues/message-queues.html
[cache-types]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html
[magento-modes]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html
[x-frame-options]: {{ page.baseurl }}/config-guide/secy/secy-xframe.html
[magento-mode]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html
[message-queues]: {{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html
[downloadable-domains]: {{ page.baseurl }}/reference/cli/magento.html#downloadabledomainsadd
[change-docroot-to-pub]: {{ page.baseurl }}/install-gde/tutorials/change-docroot-to-pub.html
[crons]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html
