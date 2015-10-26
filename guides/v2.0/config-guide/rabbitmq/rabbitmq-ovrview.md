---
layout: default
group: config-guide
subgroup: RabbitMQ
title: Install RabbitMQ
menu_title: Install RabbitMQ (Enterprise Edition only)
menu_order: 1
menu_node: parent
github_link: config-guide/rabbitmq/rabbitmq-overview.md
---

#### Contents
*	<a href="#overview">Overview</a>
*	<a href="#ubuntu-install">Install on Ubuntu</a>
*	<a href="#centos-install">Install on CentOS</a>
*	<a href="{{ site.gdeurl }}config-guide/solr/solr-magento.html">Configure message queues</a>


<h2 id="overview">Overview</h2>

RabbitMQ is is an open source message broker that offers a reliable, highly available, scalable and portable messaging system.

Message queues provide an asynchronous communications mechanism in which the sender and the receiver of a message do not contact each other. Nor do they need to communicate with the message queue at the same time. When a sender places a messages onto a queue, it is stored until the recipient receives them. 

Magento 2.0 Enterprise Edition (EE) uses RabbitMQ to manage these message queues. RabbitMQ cannot be used with Community Edition (CE) installations.

The message queue system must be established before you install Magento. The basic sequence is

1. Install RabbitMQ and any prequisites.
2. Configure RabbitMQ.
2. Configure your message queue topology.

<h2 id="ubuntu-install">Install RabbitMQ on Ubuntu</h2>

Detailed installation instructions are beyond the scope of this document. See [Installing on Debian/Ubuntu](https://www.rabbitmq.com/install-debian.html) for more information.

The RabbitMQ server is included on Ubuntu, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [rabbitmq-server_3.5.6-1_all.deb](https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server_3.5.6-1_all.deb).
2. Install the package with `dpkg`.

<h2 id ="centos-install">Install RabbitMQ on CentOS</h2>

Detailed installation instructions are beyond the scope of this document. See [Installing on RPM-based Linux](https://www.rabbitmq.com/install-rpm.html) for more information.

<h3>Install Erlang</h3>
RabbitMQ was written in the Erlang programming language. 

Run the following commands to install this feature.

1. `wget http://packages.erlang-solutions.com/erlang-solutions-1.0-1.noarch.rpm`
2. `rpm -Uvh erlang-solutions-1.0-1.noarch.rpm`

See [https://www.erlang-solutions.com/downloads/download-erlang-otp](Manual installation) for more information.

<h3>Install RabbitMQ</h3>
The RabbitMQ server is included on CentOS, but the version is often old. RabbitMQ recommends installing the package from their website.

1. Download [https://www.rabbitmq.com/releases/rabbitmq-server/v3.5.6/rabbitmq-server-3.5.6-1.noarch.rpm).
2. Run the following commands as a user with root permissions:

`rpm --import https://www.rabbitmq.com/rabbitmq-signing-key-public.asc`
`yum install rabbitmq-server-3.5.6-1.noarch.rpm`

<h2>Configure RabbitMQ</h2>
Review the official RabbitMQ documentation to configure and manage RabbitMQ. Pay attention to the following items:

* Environment variables
* Port access
* Default user accounts
* Starting and stopping the broker
* System limits


<img src="{{ site.baseurl }}common/images/ee-only_large.png" alt="This topic applies to Enterprise Edition only">

