---
group: installation-guide
title: RabbitMQ
functional_areas:
  - Install
  - System
  - Setup
---

## RabbitMQ Overview {#overview}

RabbitMQ is an open source message broker that offers a reliable, highly available, scalable and portable messaging system.

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

The message queue system must be established before you install Magento. The basic sequence is

1. Install RabbitMQ and any prerequisites.
1. Connect RabbitMQ and Magento.

{:.bs-callout-info}
You can use MySQL or RabbitMQ for message queue processing. For details on setting up the message queue system, see [Message queues overview]({{ page.baseurl }}/extension-dev-guide/message-queues/message-queues.html). If you are using the Bulk API with {{ site.data.var.ee }}, the message queue system configuration defaults to using RabbitMQ as the message broker.  See [Start message queue consumers]({{page.baseurl}}/config-guide/mq/manage-message-queues.html#start-message-queue-consumers) for more information.

## Install RabbitMQ on Ubuntu {#ubuntu-install}

To install RabbitMQ on Ubuntu 16 enter the following command:

```bash
sudo apt install -y rabbitmq-server
```

This command also installs the required Erlang packages.

If you have an older version of Ubuntu, RabbitMQ recommends installing the package from their website.

1. Download the .deb package from [rabbitmq-server](https://www.rabbitmq.com/download.html){:target="_blank"}.
1. Install the package with `dpkg`.

Refer to [Installing on Debian/Ubuntu](https://www.rabbitmq.com/install-debian.html){:target="_blank"} for more information.

## Install RabbitMQ on CentOS {#centos-install}

### Install Erlang

RabbitMQ was written using the Erlang programming language, which must be installed on the same system as RabbitMQ.

See [Manual installation](https://www.erlang-solutions.com/resources/download.html){:target="_blank"} for more information.

Refer to the [RabbitMQ/Erlang version matrix](https://www.rabbitmq.com/which-erlang.html) to install the correct version.

### Install RabbitMQ

The RabbitMQ server is included on CentOS, but the version is often old. RabbitMQ recommends installing the package from their website.

Refer to the RabbitMQ install page to get the latest supported vesion. Magento 2.3 supports RabbitMQ 3.8.x.

Refer to [Installing on RPM-based Linux](https://www.rabbitmq.com/install-rpm.html){:target="_blank"} for more information.

## Configure RabbitMQ {#config}

Review the official RabbitMQ documentation to configure and manage RabbitMQ. Pay attention to the following items:

*  Environment variables
*  Port access
*  Default user accounts
*  Starting and stopping the broker
*  System limits

## Install Magento with RabbitMQ and connect to {{site.data.var.ce}} or {{site.data.var.ee}}

If you installed Magento after you installed RabbitMQ, add the following command line parameters when you install {{site.data.var.ce}} or {{site.data.var.ee}}:

`--amqp-host="<hostname>" --amqp-port="5672" --amqp-user="<user_name>" --amqp-password="<password>" --amqp-virtualhost="/"`

where:

|Parameter|Description|
|--- |--- |
|`--amqp-host`|The hostname where RabbitMQ is installed.|
|`--amqp-port`|The port to use to connect to RabbitMQ. The default is `5672`.|
|`--amqp-user`|The username for connecting to RabbitMQ. Do not use the default user `guest`.|
|`--amqp-password`|The password for connecting to RabbitMQ. Do not use the default password `guest`.|
|`--amqp-virtualhost`|The virtual host for connecting to RabbitMQ. The default is `/`.
|`--amqp-ssl`|Indicates whether to connect to RabbitMQ. The default is `false`. If you set the value to true, see Configure SSL for more information.|

## Connect RabbitMQ to {{site.data.var.ce}} or {{site.data.var.ee}}

If you already had Magento installed and you want to connect it to RabbitMQ, add a `queue` section in the `<install_directory>/app/etc/env.php` file so that it is similar to the following:

```php
'queue' =>
  array (
    'amqp' =>
    array (
      'host' => 'rabbitmq.example.com',
      'port' => '11213',
      'user' => 'magento',
      'password' => 'magento',
      'virtualhost' => '/'
     ),
  ),
```

Then, run `bin/magento setup:upgrade` to apply the changes and create the required queues in RabbitMQ.

## Configure SSL

To configure support for SSL, edit the `ssl` and `ssl_options` parameters in the `<install_directory>/app/etc/env.php` file so that they are similar to the following:

```php
'queue' =>
  array (
    'amqp' =>
    array (
      'host' => 'rabbitmq.example.com',
      'port' => '11213',
      'user' => 'magento',
      'password' => 'magento',
      'virtualhost' => '/',
      'ssl' => 'true',
      'ssl_options' => [
            'cafile' =>  '/etc/pki/tls/certs/DigiCertCA.crt',
            'certfile' => '/path/to/magento/app/etc/ssl/test-rabbit.crt',
            'keyfile' => '/path/to/magento/app/etc/ssl/test-rabbit.key'
       ],
     ),
  ),
```

## Start the message queue consumers

After you have connected {{site.data.var.ee}} and RabbitMQ, you must start the message queue consumers. See [Configure message queues]({{page.baseurl}}/config-guide/mq/manage-message-queues.html#start-message-queue-consumers) for details.

{:.ref-header}
Related topics

*  [Installing optional software]({{page.baseurl}}/install-gde/prereq/optional.html)
*  [Apache]({{page.baseurl}}/install-gde/prereq/apache.html)
*  [Required PHP Settings]({{page.baseurl}}/install-gde/prereq/php-settings.html)
*  [Configuring security options]({{page.baseurl}}/install-gde/prereq/security.html)
*  [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
*  [Message queue overview]({{page.baseurl}}/config-guide/mq/rabbitmq-overview.html)
*  [Manage message queues]({{page.baseurl}}/config-guide/mq/manage-message-queues.html)
