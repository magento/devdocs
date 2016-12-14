---
layout: default
group: install_pre
subgroup: Prerequisites
title: Set up a remote MySQL database connection
menu_title: Set up a remote MySQL database connection
menu_order: 175
version: 2.0
github_link: install-gde/prereq/mysql_remote.md
---

<h2 id="instgde-prereq-mysql-remote-over">When to set up a remote database connection</h2>
This topic discusses how to set up a connection from your Magento web node to a MySQL server on another host. If you have a separate database host, you must perform the tasks discussed in this topic to install and use the Magento software. (The Magento *web node* is the server on which you installed the Magento software and that runs your web server.)

<div class="bs-callout bs-callout-info" id="info">
  <p>This is an advanced topic that should be used only by an experienced network administrator or database administrator. You must have <code>root</code> access to the file system and you must be able to log in to MySQL as <code>root</code>.</p>
</div>

### Prerequisites
Before you begin, you must:

*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">Install MySQL server</a> on the database server 
*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html#instgde-prereq-mysql-config">Create a database instance</a> on the database server
*	Install the MySQL client on your Magento web node. Consult MySQL documentation for details.

### High availability
Use the following guidelines to configure remote database connections if your web server or database server are clustered:

*	You must configure a connection for each web server node
*	Typically, you configure a database connection to the database load balancer; however, database clustering can be complex and configuring it is up to you. Magento makes no specific recommendations for database clustering.

	For more information, see <a href="https://dev.mysql.com/doc/refman/5.6/en/mysql-cluster.html" target="_blank">MySQL documentation</a>.

### Resolving connection issues
If you have issues connecting to either host, first ping the other host to make sure it's reachable. You also might need to allow connections from one host to another by modifying firewall and SELinux rules (if you use SELinux).

<h2 id="instgde-prereq-mysql-remote-create">Create the remote connection</h2>
To create a remote connection:

1.	On your database server, as a user with `root` privileges, open your MySQL configuration file.

	To locate it, enter the following command:

		mysql --help

	The location displays similar to the following:

		Default options are read from the following files in the given order:
		/etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf

3.	Search the configuration file for `bind-address`.

	If it exists, change the value as follows. 

	If it doesn't exist, add it anywhere except the `[mysqld]` section.

		bind-address = <ip address of your Magento web node>

	See <a href="https://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">MySQL documentation</a>, especially if you have a clustered web server.

3.	Save your changes to the configuration file and exit the text editor.
4.	Restart the MySQL service:

	CentOS: `service mysqld restart`

	Ubuntu: `service mysql restart`

<div class="bs-callout bs-callout-info" id="info">
  	<p>If MySQL fails to start, look in syslog for the source of the issue. Resolve the issue using <a href="https://dev.mysql.com/doc/refman/5.6/en/server-options.html#option_mysqld_bind-address" target="_blank">MySQL documentation</a> or another authoritative source.</p>
</div>

<h2 id="instgde-prereq-mysql-remote-access">Grant access to a database user</h2>
To enable your web node to connect to the database server, you must grant a web node database user access to the database on the remote server.

This example grants the `root` database user full access to the database on the remote host.

To grant access to a database user:

1.	Log in to the database server.
2.	Connect to the MySQL database as the `root` user.
3.	Enter the following command:

		GRANT ALL ON <local database name>.* TO <remote web node user name>@<remote web node server ip address> IDENTIFIED BY '<database user password>';

	For example,

		GRANT ALL ON magento_remote.* TO dbuser@192.0.2.50 IDENTIFIED BY 'dbuserpassword';

<div class="bs-callout bs-callout-info" id="info">
  <p>If your web server is clustered, enter the same command on every web server. You must use the same user name for every web server.</p>
</div>

<h2 id="instgde-prereq-mysql-remote-verify">Verify database access</h2>
On your web node host, enter the following command to verify the connection works:

	mysql -u <local database user name> -h <database server ip address> -p

If the MySQL monitor displays as follows, the database is ready for the Magento software:

	Welcome to the MySQL monitor.  Commands end with ; or \g.
	Your MySQL connection id is 213
	Server version: 5.6.26 MySQL Community Server (GPL)

	Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

	Oracle is a registered trademark of Oracle Corporation and/or its
	affiliates. Other names may be trademarks of their respective
	owners.

	Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

If your web server is clustered, enter the command on each web server host.


<h2 id="instgde-prereq-mysql-remote-install">Install the Magento software</h2>
When you install the Magento software using either the command line or Setup Wizard, you must specify the following:

*	The Base URL (also referred to as the *store address*) specifies the host name or IP address of the *web node*
*	Database host is the *remote database server* IP address (or load balancer if the database server is clustered)
*	Database user name is the *local web node* database user to which you gave access
*	Database password is the local web node user's password
*	Database name is the name of the database on the remote server


#### Related topics

*	<a href="{{page.baseurl}}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">PHP 5.5, 5.6, or 7.0&mdash;Ubuntu</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP 5.5, 5.6, or 7.0&mdash;CentOS</a>
*	<a href="{{page.baseurl}}install-gde/prereq/security.html">Configuring security options</a>
*	[How to get the Magento software]({{ page.baseurl }}install-gde/bk-install-guide.html)
