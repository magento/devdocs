---
group: install_pre
subgroup: Prerequisites
title: Prerequisites
menu_node: parent
menu_title: Prerequisites
menu_order: 1
version: 2.0
redirect_from: /guides/v1.0/install-gde/prereq/prereq-overview.html
functional_areas:
  - Install
  - System
  - Setup
---

## Before you begin   {#instgde-prereq-overview}

Before you install Magento, you must do all of the following:

*	Set up one or more hosts that meet the <a href="{{ page.baseurl }}/install-gde/system-requirements.html">Magento system requirements</a>.
*	If you are setting up more than one web node with load balancing, set up and test that part of your system _before_ you install Magento.
*	Make sure you can back up your entire system at various points during the installation so you can roll back in the {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} of issues.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>We assume you're installing the Magento 2 software in a <em>development environment</em>, which means you have <a href="http://www.linfo.org/root.html" target="_blank">root user</a> access to the machine <em>and</em> that the machine does not need to be highly secure. If you're setting up a more secure machine, we strongly recommend you consult a network administrator for additional assistance.</p></span>
</div>

We strongly recommend you update and upgrade your operating system software. These upgrades can provide security and software fixes that might prevent future problems.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Don't know what any of this means? Check out our <a href="{{ page.baseurl }}/install-gde/bk-install-guide.html">installation overview page</a>.</p></span>
</div>


Enter the following commands as a user with `root` privileges:

*	Ubuntu

		apt-get update
		apt-get upgrade

*	CentOS

		yum -y update
		yum -y upgrade

## Prerequisite check   {#instgde-prereq-check}

To check your system for prerequisites, enter the following commands:

### Apache

CentOS: `httpd -v`

Ubuntu: `apache2 -v`

You must run Apache version 2.2 or 2.4 as the following result indicates:

	Server version: Apache/2.2.15 (Unix)
	Server built:   Jul 23 2014 14:17:29

To install or upgrade Apache, see <a href="{{ page.baseurl }}/install-gde/prereq/apache.html">Apache</a>.

### PHP

	php -v

You must run {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} version 5.5 or later as the following result indicates:

	PHP 5.5.9-1ubuntu4.4 (cli) (built: Sep  4 2014 06:56:34)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.3, Copyright (c) 1999-2014, by Zend Technologies

To install PHP, see:

*	<a href="{{ page.baseurl }}/install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/php-ubuntu.html">PHP 5.5, 5.6, or 7.0&mdash;Ubuntu</a>

### MySQL

	mysql -u <database root user or database owner name> -p

For example:

	mysql -u magento -p

You must run MySQL version 5.6 or later as the following result indicates:

		Welcome to the MySQL monitor.  Commands end with ; or \g.
		Your MySQL connection id is 871
		Server version: 5.6.21 MySQL Community Server (GPL)

		Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

		Oracle is a registered trademark of Oracle Corporation and/or its
		affiliates. Other names may be trademarks of their respective
		owners.

		Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

Enter `exit` at the `mysql>` prompt to exit.

To install or upgrade MySQL, see <a href="{{ page.baseurl }}/install-gde/prereq/mysql.html">MySQL</a>.

#### Next step

<a href="{{ page.baseurl }}/install-gde/bk-install-guide.html">Choose how to install the Magento software</a>

#### Related topics

*	<a href="{{ site.baseurl }}/magento-system-requirements.html">Magento system requirements</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/php-ubuntu.html">PHP 5.5, 5.6, or 7.0&mdash;Ubuntu</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ page.baseurl }}/install-gde/prereq/optional.html">Installing optional software</a>
*	[How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
