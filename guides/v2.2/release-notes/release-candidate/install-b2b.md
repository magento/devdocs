---
layout: default
group: release-notes
subgroup: Magento 2.2.0 Pre-Release Candidate
title: Install B2B
menu_title: Install B2B
menu_order: 3
menu_node:
version: 2.2
ee_only: true
github_link: pre-release/b2b-install.md
---

This topic describes how to install and launch the B2B extension on Magento 2.2.0 EE Pre-Release Candidate.

## Prerequisites

### Magento EE 2.2.0

The B2B extension can only be installed on Magento EE starting fron version 2.2.0. It is not supported on earlier versions or Magento 2 Community Edition (CE).

See the [Installation Guide](http://devdocs.magento.com/guides/v2.0/install-gde/bk-install-guide.html) for more information.

### Install during Magento software, or after

The B2B extension can be installed during the Magento software installation, or after it.

If you install B2B after having installed the Magento software: after succesfully completing the B2B installation, run the upgrade command:

{%highlight php startinline=1%}
bin/magento setup:upgrade
{%endhighlight%}

## Install from GitHub

Use the standard `git clone` procedure with specifying the Magento 2 B2B repository:

    https://github.com/magento/magento2b2b

For additional information, see:

* Magento 2 Pre-Release Candidate installation instructions above

* [Install by cloning repositories]({{page.baseurl}}install-gde/install/cli/install-cli-sample-data-clone.html) on Magento DevDocs

## Post-install steps and configuration

### MySQL for message queues

The B2B extension uses MySQL for message queue management.

### Start message consumers

To succesfully launch the B2B extension, you need to start your message consumers from the queue. To do that:

1. List the available message consumers: `queue:consumers:list`

2. Start all of them: `queue:consumers:start <consumer_name>`

For more details, see [Manage message queues with MySQL]({{page.baseurl}}config-guide/mq/manage-mysql.html).

Depending on your system configuration, you may also need to specify these parameters:

* `--max-messages`: manages the consumer's lifetime and allows to specify the maximum number of messages processed by the consumer. The best practice for a PHP application is to restart the long-running processes to prevent possible memory leaks

* `batch-size`: allows to limit the system resources consumed by the consumers (CPU, memory). Using smaller batches reduces resource usage and, thus, leads to slower processing.

## Troubleshooting

### Authentication when installing with Composer

If you have encounter authentication problems after installing the B2B extension, see these topics:

* [Authentication error (Install using Composer)]({{page.baseurl}}install-gde/install/cli/install-cli-sample-data-composer.html)

* [Get your authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html)
