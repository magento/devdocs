---
group: installation-guide
subgroup: Prerequisites
title: Prerequisites
menu_node: parent
menu_title: Prerequisites
menu_order: 1
functional_areas:
  - Install
  - System
  - Setup
---

## Before you begin {#instgde-prereq-overview}

Before you install Magento, you must do all of the following:

*  Set up one or more hosts that meet the [Magento system requirements]({{page.baseurl}}/install-gde/system-requirements.html).
*  If you are setting up more than one web node with load balancing, set up and test that part of your system _before_ you install Magento.
*  Make sure you can back up your entire system at various points during the installation so you can roll back in the [event](https://glossary.magento.com/event) of issues.

{:.bs-callout-info}
We assume you're installing the Magento 2 software in a **development environment**, which means you have [root user](http://www.linfo.org/root.html) access to the machine **and** that the machine does not need to be highly secure. If you're setting up a more secure machine, we strongly recommend you consult a network administrator for additional assistance.

We strongly recommend you update and upgrade your operating system software. These upgrades can provide security and software fixes that might prevent future problems. Don't know what any of this means? Check out our [installation overview page]({{page.baseurl}}/install-gde/bk-install-guide.html).

Enter the following commands as a user with `root` privileges:

*  Ubuntu

```bash
apt-get update
```

```bash
apt-get upgrade
```

*  CentOS

```bash
yum -y update
```

```bash
yum -y upgrade
```

## Prerequisite check {#instgde-prereq-check}

To check your system for prerequisites, enter the following commands:

### Apache

CentOS: `httpd -v`

Ubuntu: `apache2 -v`

Magento supports Apache version 2.4 as the following result indicates:

```terminal
Server version: Apache/2.4.0 (Unix)
Server built:   Jul 23 2017 14:17:29
```

To install or upgrade Apache, see [Apache]({{page.baseurl}}/install-gde/prereq/apache.html).

### PHP

{% include install/php-versions-2.3.md %}

See [PHP][] for info on PHP requirements.

### MySQL

```bash
mysql -u <database root user or database owner name> -p
```

For example:

```bash
mysql -u magento -p
```

Check you have the correct version of MySQL for the version of Magento you are installing, [Check Here For Supported Versions]({{ page.baseurl }}/install-gde/system-requirements.html#database). The following result indicates the version you are running.

```terminal
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 871
Server version: 5.6.21 MySQL Community Server (GPL)

Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
```

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

Enter `exit` at the `mysql>` prompt to exit.

To install or upgrade MySQL, see [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html).

{:.ref-header}
Next step

[Choose how to install the Magento software]({{page.baseurl}}/install-gde/bk-install-guide.html)

{:.ref-header}
Related topics

*  [MySQL]({{page.baseurl}}/install-gde/prereq/mysql.html)
*  [Apache]({{page.baseurl}}/install-gde/prereq/apache.html)
*  [PHP]({{page.baseurl}}/install-gde/prereq/php-settings.html)
*  [Installing optional software]({{page.baseurl}}/install-gde/prereq/optional.html)
*  [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
