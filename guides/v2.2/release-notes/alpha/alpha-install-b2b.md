---
layout: default
group: release-notes
subgroup: Magento 2.2.0 Alpha Release Candidate
title: Install B2B
menu_title: Install B2B
menu_order:
menu_node:
version: 2.2
ee_only: true
github_link: release-notes/b2b-install.md
---

## About this document

This document is an instruction on installing and launching the B2B extension for Magento 2 EE.

## Prerequisites

### Magento EE 2.2.0

The B2B extension can only be installed on Magento 2 EE version 2.2.0. Neither earlier versions, nor Magento 2 Community Edition (CE) are supported.

To know more about installing Magento, see the [Installation Guide](http://devdocs.magento.com/guides/v2.0/install-gde/bk-install-guide.html).

### Install before and after Magento software

The B2B extension can be installed either before or after installing the Magento software.

If you install B2B after having installed the Magento software: after succesfully completing the B2B installation, run the upgrade command:

{%highlight php startinline=1%}
bin/magento setup:upgrade
{%endhighlight%}

## Installation

### Install with Composer

1. Navigate to your Magento EE root directory.

2. Launch the installer:

{%highlight php startinline=1%}
composer require magento/extension-b2b
{%endhighlight%}

{:start="3"}
3. If you have installed the Magento software before installing B2B: after completing the B2B deployment, run the upgrade command:

{%highlight php startinline=1%}
bin/magento setup:upgrade
{%endhighlight%}

### Install with Web Setup Wizard (Component Manager)

1. Go to the Magento Admin, access the Extension Manager and view extensions ready to install.

2. On the **Ready to Install** page, select `magento/extension-b2b` and click **Install**.

![Install B2B extension]({{ site.baseurl }}common/images/m2.2_install_b2b_extension.png)

{:start="3"}
3. Proceed with the installation as you would normally do when installing extensions.

For detailed instructions on installing Magento extensions, see these documents:

1. [Component Manager and System Upgrade Guide]({{page.baseurl}}comp-mgr/bk-compman-upgrade-guide.html) on Magento DevDocs

2. [Install the Extension](http://docs.magento.com/marketplace/user_guide/quick-tour/install-extension.html) section of the Magento Marketplace User Guide.

## Post-install configuration

### Message queue: MySQL instead of RabbitMQ

For the Magento 2.2.0 Release Candidate Alpha, the B2B extension uses MySQL instead of RabbitMQ for message queue management.

### Start message consumers using MySQL

To succesfully launch the B2B extension, start the following two message consumers:

1. `sharedCatalogUpdatePrice`

2. `sharedCatalogUpdateCategoryPermissions`

You can do that using the `queue:consumers:start` command:

{%highlight php startinline=1%}
/bin/magento queue:consumers:start sharedCatalogUpdatePrice
/bin/magento queue:consumers:start sharedCatalogUpdateCategoryPermissions
{%endhighlight%}

Depending on your system configuration, you may also need to specify the following parameters:

* `max-messages`

* `batch-size`

For processing infinite messages, it may be a good idea to combine the daemon mode and the `max-messages` argument, then restart the needed consumers periodically or using external tools (like http://supervisord.org/).

For more details, see [Manage message queues with MySQL]({{page.baseurl}}config-guide/mq/manage-mysql.html).

## Troubleshooting

### Authentication when installing with Composer

If you have encounter authentication problems after installing the B2B extension, see these topics:

* [Authentication error (Install using Composer)]({{page.baseurl}}install-gde/install/cli/install-cli-sample-data-composer.html)

* [Get your authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html)
