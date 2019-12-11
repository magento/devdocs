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

## Backend

You can configure **frontName** for the Magento admin url using backend node in env.php.<br>
Below is an example to configure frontName for Magento Backend.

```conf
'backend' => [
  'frontName' => 'admin'
]
```

## Crypt

Magento uses an encryption key to protect passwords and other sensitive data. <br>This key is generated during instatllation of Magento.

```conf
'crypt' => [
  'key' => '63d409380ccb1182bfb27c231b732f05'
]
```
You can learn more about it in the below link<br>
[Encryption Key][encryption-key]

[encryption-key]: https://docs.magento.com/m2/ce/user_guide/system/encryption-key.html

## Session

Magento session related configurations are stoted in session node.

```conf
'session' => [
  'save' => 'files'
],
```
Learn more about session in the below link<br>
[Session][session]

[session]: {{ page.baseurl }}/config-guide/sessions.html

## DB

All the Database configurations availble in this configuration node.

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

## Resource

Resource configuration settings are avilable in this node.

```conf
'resource' => [
  'default_setup' => [
    'connection' => 'default'
  ]
]
```

## X-Frame-Options

x-frame-options header can be configured using this node.<br>

```conf
'x-frame-options' => 'SAMEORIGIN'
```

Learn more about session in the below link<br>
[x-frame-options][x-frame-options]

## MAGENTO MODE

Magento deploy mode can be configured in this node.<br>
Below is an example to set developer mode in Magento.

```conf
'MAGE_MODE' => 'developer'
```
Learn more about Magento modes in below link<br>
[Magento Modes][magento-modes]

[magento-modes]: {{ page.baseurl }}/config-guide/bootstrap/magento-modes.html

## Cache Types

All the Magento cache types configuration is available in this node.<br>
Below is an example that list all the cache types in Magento.<br>

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
Learn more about different cache types in below link<br>
[Cache Types][cache-types]

[cache-types]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html

## Install

Installation date of Magento application is available here.<br>

```conf
'install' => [
  'date' => 'Tue, 23 Apr 2019 09:31:07 +0000'
]
```

## Queue

Message queue releated configurations are availble in this node.<br>

```conf
'queue' => [
  'topics' => [
    'customer.created' => [publisher="default-rabitmq"],
    'order.created' => [publisher="default-rabitmq"],
  ]
]
```
Learn more about Message queue in below link<br>
[Message Queue][message-queue]

[message-queue]: {{ page.baseurl }}/extension-dev-guide/message-queues/message-queues.html

## Lock
Lock provider settings can be configured using lock node<br>

Learn more about lock provider in below link<br>
[Lock Provider Configuration][lock-provider-config]

[lock-provider-config]: {{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-lock.html
