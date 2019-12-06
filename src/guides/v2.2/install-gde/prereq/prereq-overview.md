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

*  Set up one or more hosts that meet the [Magento system requirements]({{ page.baseurl }}/install-gde/system-requirements.html).
*  If you are setting up more than one web node with load balancing, set up and test that part of your system _before_ you install Magento.
*  Make sure you can back up your entire system at various points during the installation so you can roll back in the [event](https://glossary.magento.com/event) of issues.

{:.bs-callout-info}
We assume you're installing the Magento 2 software in a _development environment_, which means you have [root user](http://www.linfo.org/root.html){:target="_blank"} access to the machine _and_ that the machine does not need to be highly secure. If you're setting up a more secure machine, we strongly recommend you consult a network administrator for additional assistance.

We strongly recommend you update and upgrade your operating system software. These upgrades can provide security and software fixes that might prevent future problems.

 {:.bs-callout-info}
Don't know what any of this means? Check out our [installation overview page]({{ page.baseurl }}/install-gde/bk-install-guide.html).

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

Magento supports Apache version 2.4

CentOS: `httpd -v`

Ubuntu: `apache2 -v`

as the following result indicates:

```terminal
Server version: Apache/2.2.15 (Unix)
Server built: Jul 23 2014 14:17:29
```

To install or upgrade Apache, see [Apache]({{ page.baseurl }}/install-gde/prereq/apache.html).

### PHP

For Magento v2.2.10, you must run [PHP](https://glossary.magento.com/php) version 7.1.x or 7.2.x.
To check your PHP version, in the command line, enter:

```bash
  php -v
```

 The result will be similar to:

```terminal
PHP 7.2.8-2 ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.0.0, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.0.8-2, Copyright (c) 1999-2018, by Zend Technologies
```

To install PHP, see [PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

### MySQL

```bash
mysql -u <database root user or database owner name> -p
```

For example:

```bash
mysql -u magento -p
```

You must run MySQL version 5.6 or later as the following result indicates:

```terminal
Welcome to the MySQL monitor. Commands end with ; or \g.
Your MySQL connection id is 871
Server version: 5.6.21 MySQL Community Server (GPL)

Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
```

Enter `exit` at the `mysql>` prompt to exit.

To install or upgrade MySQL, see [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html).

{:.ref-header}
Next step

[Choose how to install the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)

{:.ref-header}
Related topics

*  [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*  [Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*  [PHP]({{ page.baseurl }}/install-gde/prereq/php-settings.html)
*  [Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
*  [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
