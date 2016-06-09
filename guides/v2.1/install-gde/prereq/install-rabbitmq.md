---
layout: default
group: install_pre
subgroup: Prerequisites
title: RabbitMQ
menu_title: RabbitMQ (Enterprise Edition)
menu_order: 13
version: 2.1
github_link21: install-gde/prereq/install-rabbitmq.md
---

![EE]({{ site.baseurl }}common/images/ee-only_large.png)

<div class="bs-callout bs-callout-warning">
  <p><a href="http://rabbitmq.com">RabbitMQ</a> must be installed and configured after Magento Community Edition and before Magento Enterprise Edition.</p>
</div>

#### Contents
*	<a href="#overview">Overview</a>
*	<a href="#ubuntu-install">Install on Ubuntu</a>
*	<a href="#centos-install">Install on CentOS</a>
*	<a href="#config">Configure RabbitMQ</a>
*	<a href="{{ site.gdeurl21 }}config-guide/mq/rabbitmq-overview.html">Message queue overview</a>
*	<a href="{{ site.gdeurl21 }}config-guide/mq/config-mq.html">Configure message queues</a>


<h2 id="overview">RabbitMQ Overview</h2>

RabbitMQ is is an open source message broker that offers a reliable, highly available, scalable and portable messaging system.

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them. 

Magento 2.0 Enterprise Edition (EE) uses RabbitMQ to manage these message queues. RabbitMQ cannot be used with Community Edition (CE) installations.

The message queue system must be established before you install Magento. The basic sequence is

1. Install RabbitMQ and any prerequisites.
2. Configure RabbitMQ.
3. Configure your message queue topology.

<div class="bs-callout bs-callout-info" id="info">
  <p>A basic message queue system can be implemented on EE without using RabbitMQ. See <a href="{{ site.gdeurl21 }}config-guide/mq/manage-mysql.html">Configure message queues</a></p>
</div>


<h2 id="ubuntu-install">Install RabbitMQ on Ubuntu</h2>

Detailed installation instructions are beyond the scope of this document. See [Installing on Debian/Ubuntu](https://www.rabbitmq.com/install-debian.html) for more information.

The RabbitMQ server is included on Ubuntu, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [rabbitmq-server_3.5.6-1_all.deb](https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server_3.5.6-1_all.deb).
2. Install the package with `dpkg`.

<h2 id ="centos-install">Install RabbitMQ on CentOS</h2>

Detailed installation instructions are beyond the scope of this document. See [Installing on RPM-based Linux](https://www.rabbitmq.com/install-rpm.html) for more information.

<h3>Install Erlang</h3>
RabbitMQ was written using the Erlang programming language, which must be installed on the same system as RabbitMQ

<a href="https://www.erlang-solutions.com/downloads/download-erlang-otp" target="_blank">Manual installation</a> for more information.

Run the following commands to install this feature.

1. `wget http://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm`
2. `rpm -Uvh erlang-solutions-1.0-1.noarch.rpm`


<h3>Install RabbitMQ</h3>
The RabbitMQ server is included on CentOS, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [rabbitmq-server-3.5.6-1.noarch.rpm](https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server-3.5.6-1.noarch.rpm).
2. Run the following commands as a user with root permissions:

`rpm --import https://www.rabbitmq.com/rabbitmq-signing-key-public.asc`
`yum install rabbitmq-server-3.5.6-1.noarch.rpm`

<h2 id="config">Configure RabbitMQ</h2>
Review the official RabbitMQ documentation to configure and manage RabbitMQ. Pay attention to the following items:

* Environment variables
* Port access
* Default user accounts
* Starting and stopping the broker
* System limits



<h2>Install RabbitMQ on Magento EE</h2>

Add the following command line parameters when you install Magento EE:

`--amqp-host="<hostname>" --amqp-port="5672" --amqp-user="<user_name>" --amqp-password="<password>"`

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
</table>


#### Related topics

*	<a href="{{ site.gdeurl21 }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl21 }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl21 }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl21 }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl21 }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/pre-install.html">Ways to install the Magento software</a>
*	<a href="{{ site.gdeurl21 }}config-guide/mq/rabbitmq-overview.html">Message queue overview</a>
*	<a href="{{ site.gdeurl21 }}config-guide/mq/config-mq.html">Configure message queues</a>


