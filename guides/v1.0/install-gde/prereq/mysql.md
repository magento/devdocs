---
layout: default
group: install
subgroup: Prerequisites
title: MySQL
menu_title: MySQL
menu_order: 5
github_link: install-gde/prereq/mysql.md
---

#### Contents

*	<a href="#instgde-prereq-mysql-intro">General guidelines</a>
*	<a href="#instgde-prereq-mysql-ubuntu">Installing MySQL on Ubuntu</a>
*	<a href="#instgde-prereq-mysql-centos">Installing and configuring MySQL on CentOS</a>

<h2 id="instgde-prereq-mysql-intro">General guidelines</h2>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento requires MySQL 5.6.x.</p></span>
</div>

Magento _strongly_ recommends you observe the following standard when you set up your Magento database:

*	Magento uses <a href="http://dev.mysql.com/doc/refman/5.0/en/triggers.html" target="_blank">MySQL database triggers</a> to improve database access during reindexing. Magento does not support any custom triggers in the Magento database because custom triggers can introduce incompatibilities with future Magento versions.
*	Familiarize yourself with <a href="http://dev.mysql.com/doc/mysql-reslimits-excerpt/5.1/en/stored-program-restrictions.html" target="_blank">these potential MySQL trigger limitations</a> before you continue.
*	If you use MySQL database replication, be aware that Magento does _not_ support MySQL statement-based replication. Make sure you use _only_ <a href="http://dev.mysql.com/doc/refman/5.1/en/replication-formats.html" target="_blank">row-based replication</a>.

<h2 id="instgde-prereq-mysql-ubuntu">Installing MySQL on Ubuntu</h2>
See one of the following sections for more information:

*	<a href="#instgde-prereq-mysql56ubu14">Installing MySQL 5.6 on Ubuntu 14</a>
*	<a href="#instgde-prereq-mysql56ubu12">Installing MySQL 5.6 on Ubuntu 12</a>

<h3 id="instgde-prereq-mysql56ubu14">Installing MySQL 5.6 on Ubuntu 14</h3>
To install MySQL 5.6 on Ubuntu 14, enter the following command:

	apt-get -y install mysql-server-5.6 mysql-client-5.6
	
Test the installation by entering the following command:

	mysql -u root -p
	
Sample output:

	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 45
	Server version: 5.6.19-0ubuntu0.14.04.1 (Ubuntu)

	Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

	mysql>

<h3 id="instgde-prereq-mysql56ubu12">Installing MySQL 5.6 on Ubuntu 12</h3>
To install MySQL 5.6 on Ubuntu 12, enter the following commands in the order shown:

	apt-add-repository ppa:ondrej/mysql-5.6
	apt-get -y update
	apt-get -y install mysql-server
	
Test the installation by entering the following command:

	mysql -u root -p
	
Messages similar to the following display:

	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 43
	Server version: 5.6.21-1+deb.sury.org~precise+1 (Ubuntu)

	Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

	mysql>

<h2 id="instgde-prereq-mysql-centos">Installing and configuring MySQL on CentOS</h2>

The following procedure is based on <a href="http://sharadchhetri.com/2013/12/26/install-mysql-server-5-6-in-centos-6-x-and-red-hat-6-x-linux/" target="_blank">Install MySQL Server 5.6 in CentOS 6.x and Red Hat 6.x Linux</a>.

1.	Install the MySQL database:

	<pre>cd /tmp
wget http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm
rpm -ivh mysql-community-release-el6-5.noarch.rpm
yum -y install mysql-server</pre>
	
2.	Start MySQL.

	`service mysqld start`
	
3.	Set a password for the <tt>root</tt> user and set other security-related options. Enter the following command and follow the prompts on your screen to complete the configuration.

	`mysql_secure_installation`

<h2 id="instgde-prereq-mysql-config">Configuring the Magento database instance</h2>

This section discusses how to create a new database instance for Magento. Although a new database instance is recommended, you can optionally install Magento into an existing database instance.

To configure a MySQL database instance:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:	
	<pre>mysql -u root -p</pre>
3.	Enter the MySQL `root` user's password when prompted.
4.	Enter the following commands in the order shown to create a database instance named `magento` with user name `magento`:
	<pre>create database magento;
GRANT ALL ON magento.* TO magento@localhost IDENTIFIED BY 'magento';</pre>

5.	Enter `exit` to quit the command prompt.

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.4&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Updating installation dependencies</a>