---
layout: default
group: install_pre
subgroup: Prerequisites
title: RabbitMQ
menu_title: RabbitMQ (Magento Commerce only)
menu_order: 50
version: 2.1
ee_only: True
github_link: install-gde/prereq/install-rabbitmq.md
functional_areas:
  - Install
  - System
  - Setup
---

RabbitMQ is an open source message broker that offers a reliable, highly available, scalable and portable messaging system.

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them.

{{site.data.var.ee}} uses RabbitMQ to manage these message queues. RabbitMQ cannot be used with {{site.data.var.ce}} installations.

The message queue system must be established before you install Magento. The basic sequence is

1. Install RabbitMQ and any prerequisites.
2. Connect RabbitMQ and Magento.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
A basic message queue system can be implemented on {{site.data.var.ee}} using cron instead of RabbitMQ. See [Configure message queues]({{page.baseurl}}/config-guide/mq/manage-mysql.html) for more information.
</div>

## Install RabbitMQ on Ubuntu {#ubuntu-install}

To install RabbitMQ on Ubuntu 16 enter the following command:

    sudo apt install -y rabbitmq-server

This command also installs the required Erlang packages.

If you have an older version of Ubuntu, RabbitMQ recommends installing the package from their {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %}.

1. Download [rabbitmq-server_3.6.6-1_all.deb](https://www.rabbitmq.com/releases/rabbitmq-server/v3.6.6/rabbitmq-server_3.6.6-1_all.deb){:target="&#95;blank"}.
2. Install the package with `dpkg`.

Refer to [Installing on Debian/Ubuntu](https://www.rabbitmq.com/install-debian.html){:target="&#95;blank"} for more information.

## Install RabbitMQ on CentOS {#centos-install}

### Install Erlang

RabbitMQ was written using the Erlang programming language, which must be installed on the same system as RabbitMQ.

See [Manual installation](https://www.erlang-solutions.com/resources/download.html){:target="&#95;blank"} for more information.

Run the following commands to install this feature.

1. `wget http://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm`
2. `rpm -Uvh erlang-solutions-1.0-1.noarch.rpm`

### Install RabbitMQ

The RabbitMQ server is included on CentOS, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [rabbitmq-server-3.5.6-1.noarch.rpm](https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server-3.5.6-1.noarch.rpm){:target="&#95;blank"}.
2. Run the following commands as a user with root permissions:

`rpm --import https://www.rabbitmq.com/rabbitmq-signing-key-public.asc{:target="&#95;blank"}
`yum install rabbitmq-server-3.5.6-1.noarch.rpm`

Refer to [Installing on RPM-based Linux](https://www.rabbitmq.com/install-rpm.html){:target="&#95;blank"} for more information.

## Configure RabbitMQ {#config}

Review the official RabbitMQ documentation to configure and manage RabbitMQ. Pay attention to the following items:

* Environment variables
* Port access
* Default user accounts
* Starting and stopping the broker
* System limits

## Connect RabbitMQ to {{site.data.var.ee}}

Add the following command line parameters when you install {{site.data.var.ee}}:

`--amqp-host="<hostname>" --amqp-port="5672" --amqp-user="<user_name>" --amqp-password="<password>" --amqp-virtualhost="/"`

where:

<table>
<tr>
<th>Parameter</th><th>Description</th>
</tr>
<tr>
<td>amqp-host</td>
<td>The host name where RabbitMQ is installed.</td>
</tr>
<tr>
<td>amqp-port</td>
<td>The port to use to connect to RabbitMQ. The default is 5672.</td>
</tr>
<tr>
<td>amqp-user</td>
<td>The user name for connecting to RabbitMQ. Do not use the default user `guest`. </td>
</tr>
<tr>
<td>amqp-password</td>
<td>The password for connecting to RabbitMQ. Do not use the default password `guest`. </td>
</tr>
<tr>
<td>amqp-virtualhost</td>
<td><p>The virtual host for connecting to RabbitMQ. The default is <code>/</code>. </p>
<p>For additional information, see RabbitMQ documentation:</p>
<ul><li><a href="https://www.rabbitmq.com/vhosts.html" target="&#95;blank">Virtual hosts</a></li>
<li><a href="https://www.rabbitmq.com/access-control.html" target="&#95;blank">Access control</a></li></ul></td>
</tr>
</table>

## Start the message queue consumers

After you have connected {{site.data.var.ee}} and RabbitMQ, you must start the message queue consumers. See [Configure message queues]({{page.baseurl}}/config-guide/mq/manage-mysql.html) for details.

#### Related topics
*	[Installing optional software]({{page.baseurl}}/install-gde/prereq/optional.html)
*	[Apache]({{page.baseurl}}/install-gde/prereq/apache.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;Ubuntu]({{page.baseurl}}/install-gde/prereq/php-ubuntu.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;CentOS]({{page.baseurl}}/install-gde/prereq/php-centos.html)
*	[Configuring security options]({{page.baseurl}}/install-gde/prereq/security.html)
*	[How to get the Magento software]({{ page.baseurl}}/install-gde/bk-install-guide.html)
*	[Message queue overview]({{page.baseurl}}/config-guide/mq/rabbitmq-overview.html)
*	[Manage message queues]({{page.baseurl}}/config-guide/mq/manage-mysql.html)
