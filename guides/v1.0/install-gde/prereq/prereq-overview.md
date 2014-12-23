---
layout: default
group: install
subgroup: Prerequisites
title: Prerequisites
menu_node: parent
menu_title: Prerequisites
menu_order: 1
github_link: install-gde/prereq-overview.md
---

<h2 id="instgde-prereq-overview">Before you begin</h2>

Before you install Magento, you must do all of the following:

*	Set up one or more hosts that meet the <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento system requirements</a>.
*	If you are setting up more than one web node with load balancing, set up and test that part of your system _before_ you install Magento.
*	Make sure you can back up your entire system at various points during the installation so you can roll back in the event of issues.

We strongly recommend you update and upgrade your operating system software. These upgrades can provide security and software fixes that might prevent future problems.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Don't know what any of this means? Check out our <a href="{{ site.gdeurl }}install-gde/bk-install-guide.html">installation overview page</a>.</p></span>
</div>
	

Enter the following commands as a user with `root` privileges:

*	Ubuntu

	`apt-get update`

	`apt-get upgrade`

*	CentOS

	`yum -y update`

	`yum -y upgrade`

<h2 id="instgde-prereq-check">Prerequisite check</h2>

To check your system for prerequisites, enter the following commands:

*	PHP

	`php -v`

	You must run PHP version 5.4.11 or later as the following result indicates:

	<pre>PHP 5.4.33 (cli) (built: Sep 20 2014 16:20:03)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

	To install or upgrade PHP, see <a href="{{ site.gdeurl }}install-gde/prereq/php.html">Installing PHP required extensions</a>.

*	Apache

	CentOS: `httpd -v`

	Ubuntu: `apache2 -v`

	Debian: `/usr/sbin/apache2 -v`

	You must run Apache version 2.2 or 2.4 as the following result indicates:

	<pre>Server version: Apache/2.2.15 (Unix)
Server built:   Jul 23 2014 14:17:29</pre>

	To install or upgrade Apache, see <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>.

*	MySQL

	`mysql -u [database root user or database owner name] -p`

	For example:

	`mysql -u magento -p`

	You must run MySQL version 5.6 or later as the following result indicates:

	<pre>Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 871
	Server version: 5.6.21 MySQL Community Server (GPL)

	Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.</pre>


	Enter `exit` at the `mysql>` prompt to exit.

	To install or upgrade MySQL, see <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>.

#### Next step

Either install prerequisite software or see <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and Clone the Magento repository</a>.

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento system requirements</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.4&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and Clone the Magento repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>






