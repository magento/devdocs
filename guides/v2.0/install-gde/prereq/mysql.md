---
layout: default
group: install_pre
subgroup: Prerequisites
title: MySQL
menu_title: MySQL
menu_order: 10
github_link: install-gde/prereq/mysql.md
redirect_from: /guides/v1.0/install-gde/prereq/mysql.html
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->


#### Contents

*	<a href="#mysql-help-beginner">Help if you're just starting out</a>
*	<a href="#instgde-prereq-mysql-intro">General guidelines</a>
*	<a href="#instgde-prereq-mysql-ubuntu">Installing and configuring MySQL 5.6 on Ubuntu</a>
*	[Installing and configuring MySQL 5.7 on CentOS](#instgde-prereq-mysql57-centos)
*	<a href="#instgde-prereq-mysql-centos">Installing and configuring MySQL 5.6 on CentOS</a>
*	<a href="#instgde-prereq-mysql-config">Configuring the Magento database instance</a>

<h2 id="mysql-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>


<h2 id="instgde-prereq-mysql-intro">General guidelines</h2>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento requires MySQL 5.6.x.</p></span>
</div>

Magento _strongly_ recommends you observe the following standard when you set up your Magento database:

*	Magento uses <a href="http://dev.mysql.com/doc/refman/5.0/en/triggers.html" target="_blank">MySQL database triggers</a> to improve database access during reindexing. Magento does not support any custom triggers in the Magento database because custom triggers can introduce incompatibilities with future Magento versions.
*	Familiarize yourself with <a href="http://dev.mysql.com/doc/mysql-reslimits-excerpt/5.1/en/stored-program-restrictions.html" target="_blank">these potential MySQL trigger limitations</a> before you continue.
*	If you use MySQL database replication, be aware that Magento does _not_ support MySQL statement-based replication. Make sure you use _only_ <a href="http://dev.mysql.com/doc/refman/5.1/en/replication-formats.html" target="_blank">row-based replication</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If your web server and database server are on different hosts, perform the tasks discussed in this topic on the database server host then see <a href="{{ site.gdeurl }}install-gde/prereq/mysql_remote.html">Set up a remote MySQL database connection</a>.</p></span>
</div>

<h2 id="instgde-prereq-mysql-ubuntu">Installing MySQL on Ubuntu</h2>
See one of the following sections for more information:

*	<a href="#instgde-prereq-mysql56ubu14">Installing MySQL 5.6 on Ubuntu 14</a>
*	<a href="#instgde-prereq-mysql56ubu12">Installing MySQL 5.6 on Ubuntu 12</a>

<h3 id="instgde-prereq-mysql56ubu14">Installing MySQL 5.6 on Ubuntu 14</h3>
To install MySQL 5.6 on Ubuntu 14:

1.	Enter the following command:

		apt-get -y install mysql-server-5.6 mysql-client-5.6

2.	Secure the installation.

		mysql_secure_installation

2.	Test the installation by entering the following command:

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

4.	If you expect to import large numbers of products into Magento, you can increase the value for <a href="http://dev.mysql.com/doc/refman/5.6/en/program-variables.html" target="_blank">`max_allowed_packet`</a> that is larger than the default, 16MB.

	{% include install/mysql_max-allowed-packet-ubuntu.md %}

3.	<a href="#instgde-prereq-mysql-config">Configure the Magento database instance</a>.

<h3 id="instgde-prereq-mysql56ubu12">Installing MySQL 5.6 on Ubuntu 12</h3>

To install MySQL 5.6 on Ubuntu 12, use the following instructions from <a href="http://askubuntu.com/questions/433014/unable-to-install-mysql-5-6-in-ubuntu-12-04" target="_blank">askubuntu.com</a>.

1.	Enter the following commands in the order shown:

		apt-get -y update
		apt-add-repository ppa:ondrej/mysql-5.6
		apt-get -y update
		apt-get -y install mysql-server

3.	Secure the installation.

		mysql_secure_installation

2.	Test the installation by entering the following command:

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

4.	If you expect to import large numbers of products into Magento, you can increase the value for <a href="http://dev.mysql.com/doc/refman/5.6/en/program-variables.html" target="_blank">`max_allowed_packet`</a> that is larger than the default, 16MB.

	{% include install/mysql_max-allowed-packet-ubuntu.md %}

5.	<a href="#instgde-prereq-mysql-config">Configure the Magento database instance</a>.

## Installing and configuring MySQL 5.7 on CentOS {#instgde-prereq-mysql57-centos}
This section discusses how to to install MySQL 5.7 on CentOS 6 or CentOS 7.

### Get MySQL 5.7 for CentOS 7
The following procedure is based on [How to Install Latest MySQL 5.7.9 on RHEL/CentOS 7/6/5 and Fedora 23/22/21](http://www.tecmint.com/install-latest-mysql-on-rhel-centos-and-fedora){:target="_blank"}.

As a user with `root` privileges, enter the following commands in the order shown:

	wget http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm
	yum -y localinstall mysql57-community-release-el7-7.noarch.rpm

Continue with [Install and configure MySQL 5.7 on CentOS 6 or 7](#mysql57-centos-config).

### Get MySQL 5.7 for CentOS 6
The following procedure is based on [How to Install Latest MySQL 5.7.9 on RHEL/CentOS 7/6/5 and Fedora 23/22/21](http://www.tecmint.com/install-latest-mysql-on-rhel-centos-and-fedora){:target="_blank"}.

As a user with `root` privileges, enter the following commands in the order shown:

	wget http://dev.mysql.com/get/mysql57-community-release-el6-7.noarch.rpm
	yum -y localinstall mysql57-community-release-el6-7.noarch.rpm

Continue with the next section.

### Install and configure MySQL 5.7 on CentOS 6 or 7 {#mysql57-centos-config}
1.	Enter the following commands in the order shown:

		yum -y install mysql-community-server
		service mysqld start

2.	Verify the version using the following command:

		mysql --version

	Sample output follows:

		mysql  Ver 14.14 Distrib 5.7.12, for Linux (x86_64) using  EditLine wrapper

3.	Enter the following command to get the temporary database `root` user password:

		grep 'temporary password' /var/log/mysqld.log
4.	Enter the following command to secure the installation:

		mysql_secure_installation

	Follow the prompts on your screen to set a new password and configure other options.
5.	Configure MySQL 5.7 as discussed in [Configuring the Magento database instance](#instgde-prereq-mysql-config).

<h2 id="instgde-prereq-mysql-centos">Installing and configuring MySQL 5.6 on CentOS</h2>
The following procedure is based on <a href="http://sharadchhetri.com/2013/12/26/install-mysql-server-5-6-in-centos-6-x-and-red-hat-6-x-linux/" target="_blank">Install MySQL Server 5.6 in CentOS 6.x and Red Hat 6.x Linux</a>.

1.	Install the MySQL database:

		yum -y update
		sudo wget http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm && sudo rpm -ivh mysql-community-release-el6-5.noarch.rpm
		sudo yum -y install mysql-server

2.	Start MySQL.

		service mysqld start

3.	Set a password for the <tt>root</tt> user and set other security-related options. Enter the following command and follow the prompts on your screen to complete the configuration.

		mysql_secure_installation

4.	Verify the MySQL server version.

		mysql -u root -p

	Messages similar to the following display:

		Welcome to the MySQL monitor.  Commands end with ; or \g.
		Your MySQL connection id is 15
		Server version: 5.6.23 MySQL Community Server (GPL)

		Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

		Oracle is a registered trademark of Oracle Corporation and/or its
		affiliates. Other names may be trademarks of their respective
		owners.

		Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

5.	If you expect to import large numbers of products into Magento, you can configure MySQL to use the <a href="http://dev.mysql.com/doc/refman/5.6/en/program-variables.html" target="_blank">`max_allowed_packet`</a> parameter. We recommend a value of at least 16MB.

	{% include install/mysql_max-allowed-packet-centos.md %}

6.	Configure the Magento database instance as discussed in the next section.

<h2 id="instgde-prereq-mysql-config">Configuring the Magento database instance</h2>
This section discusses how to create a new database instance for Magento. Although a new database instance is recommended, you can optionally install Magento into an existing database instance.

To configure a MySQL database instance:

1.	Log in to your database server as any user.
2.	Enter the following command to get to a MySQL command prompt:

		mysql -u root -p

3.	Enter the MySQL `root` user's password when prompted.
4.	Enter the following commands in the order shown to create a database instance named `magento` with user name `magento`:

		create database magento;
		GRANT ALL ON magento.* TO magento@localhost IDENTIFIED BY 'magento';

5.	Enter `exit` to quit the command prompt.

6.	Verify the database:

		mysql -u magento -p

	If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.

7.	If your web server and database server are on different hosts, perform the tasks discussed in this topic on the database server host then see <a href="{{ site.gdeurl }}install-gde/prereq/mysql_remote.html">Set up a remote MySQL database connection</a>.

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql_remote.html">Set up a remote MySQL database connection</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.4&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Ways to install the Magento software</a>
