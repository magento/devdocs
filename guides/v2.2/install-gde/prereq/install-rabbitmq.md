---
group: installation-guide
title: RabbitMQ
ee_only: true
functional_areas:
  - Install
  - System
  - Setup
---

{:.bs-callout .bs-callout-warning}
You must install and configure [RabbitMQ](http://rabbitmq.com) _after_ installing {{site.data.var.ce}} or _before_ installing {{site.data.var.ee}}.

## RabbitMQ Overview {#overview}

RabbitMQ is an open source message broker that offers a reliable, highly available, scalable and portable messaging system.

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

{{site.data.var.ee}} uses RabbitMQ to manage these message queues. RabbitMQ cannot be used with {{site.data.var.ce}} installations.

The message queue system must be established before you install Magento. The basic sequence is

1. Install RabbitMQ and any prerequisites.
2. Connect RabbitMQ and Magento.

{:.bs-callout .bs-callout-info}
A basic message queue system can be implemented on {{site.data.var.ee}} using cron instead of RabbitMQ. See [Configure message queues]({{ page.baseurl }}/config-guide/mq/manage-mysql.html) for more information.

## Install RabbitMQ on Ubuntu {#ubuntu-install}

To install RabbitMQ on Ubuntu 16 enter the following command:
```bash
sudo apt install -y rabbitmq-server
```

This command also installs the required Erlang packages.

If you have an older version of Ubuntu, RabbitMQ recommends installing the package from their [website](https://glossary.magento.com/website).

1. Download [rabbitmq-server_3.6.6-1_all.deb](https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.6/rabbitmq-server_3.6.6-1_all.deb).
2. Install the package with `dpkg`.

Refer to [Installing on Debian/Ubuntu](https://www.rabbitmq.com/install-debian.html) for more information.

## Install RabbitMQ on CentOS {#centos-install}

### Install Erlang

RabbitMQ was written using the Erlang programming language, which must be installed on the same system as RabbitMQ.

See [Manual installation](https://www.erlang-solutions.com/resources/download.html) for more information.

Run the following commands to install this feature.
```bash
wget http://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm
```
```bash
rpm -Uvh erlang-solutions-1.0-1.noarch.rpm
```

### Install RabbitMQ

The RabbitMQ server is included on CentOS, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [rabbitmq-server-3.5.6-1.noarch.rpm](https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server-3.5.6-1.noarch.rpm).
2. Run the following commands as a user with root permissions:

```bash
rpm --import https://www.rabbitmq.com/rabbitmq-signing-key-public.asc
```
```bash
yum install rabbitmq-server-3.5.6-1.noarch.rpm
```

Refer to [Installing on RPM-based Linux](https://www.rabbitmq.com/install-rpm.html) for more information.

## Configure RabbitMQ {#config}

Review the official RabbitMQ documentation to configure and manage RabbitMQ. Pay attention to the following items:

* Environment variables
* Port access
* Default user accounts
* Starting and stopping the broker
* System limits

## Connect RabbitMQ to {{site.data.var.ee}}

Add the following command line parameters when you install Magento {{site.data.var.ee}}:

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

## Configure SSL

To configure support for SSL, edit the `ssl` and `ssl_options` parameters in the `<install_directory>/app/etc/env.php` file so that they are similar to the following:

```php?start_inline=1

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

After you have connected {{site.data.var.ee}} and RabbitMQ, you must start the message queue consumers. See [Configure message queues]({{ page.baseurl }}/config-guide/mq/manage-mysql.html) for details.

#### Related topics

*	[Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
*	[Message queue overview]({{ page.baseurl }}/config-guide/mq/rabbitmq-overview.html)
*	[Manage message queues]({{ page.baseurl }}/config-guide/mq/manage-mysql.html)
