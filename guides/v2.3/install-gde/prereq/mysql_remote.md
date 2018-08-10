---
group: install_pre
subgroup: Prerequisites
title: Set up a remote MySQL database connection
menu_title: Set up a remote MySQL database connection
menu_order: 175
version: 2.1
functional_areas:
  - Install
  - System
  - Setup
---

## When to set up a remote database connection {#instgde-prereq-mysql-remote-over}

This topic discusses how to set up a connection from your Magento web node to a MySQL server on another host. If you have a separate database host, you must perform the tasks discussed in this topic to install and use the Magento software. (The Magento *web node* is the server on which you installed the Magento software and that runs your web server.)

{:.bs-callout .bs-callout-info}
This is an advanced topic that should be used only by an experienced network administrator or database administrator. You must have `root` access to the file system and you must be able to log in to MySQL as `root`.

### Prerequisites

Before you begin, you must:

*	[Install MySQL server]({{page.baseurl }}/install-gde/prereq/mysql.html) on the database server
*	[Create a database instance]({{page.baseurl }}/install-gde/prereq/mysql.html#instgde-prereq-mysql-config) on the database server
*	Install the MySQL client on your Magento web node. Consult MySQL documentation for details.

### High availability

Use the following guidelines to configure remote database connections if your web server or database server are clustered:

*	You must configure a connection for each web server node
*	Typically, you configure a database connection to the database load balancer; however, database clustering can be complex and configuring it is up to you. Magento makes no specific recommendations for database clustering.

	For more information, see [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/mysql-cluster.html).

### Resolving connection issues

If you have issues connecting to either host, first ping the other host to make sure it's reachable. You also might need to allow connections from one host to another by modifying firewall and SELinux rules (if you use SELinux).

## Create the remote connection {#instgde-prereq-mysql-remote-create}

To create a remote connection:

1.	On your database server, as a user with `root` privileges, open your MySQL configuration file.

	To locate it, enter the following command:

		mysql --help

	The location displays similar to the following:

		Default options are read from the following files in the given order:
		/etc/my.cnf /etc/mysql/my.cnf /usr/etc/my.cnf ~/.my.cnf

    {:.bs-callout .bs-callout-info}
    On Ubuntu 16, the path is typically `/etc/mysql/mysql.conf.d/mysqld.cnf`.

3.	Search the configuration file for `bind-address`.

	If it exists, change the value as follows.

	If it doesn't exist, add it anywhere except the `[mysqld]` section.

		bind-address = <ip address of your Magento web node>

	See [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/server-options.html), especially if you have a clustered web server.

3.	Save your changes to the configuration file and exit the text editor.
4.	Restart the MySQL service:

	CentOS: `service mysqld restart`

	Ubuntu: `service mysql restart`

{:.bs-callout .bs-callout-info}
If MySQL fails to start, look in syslog for the source of the issue. Resolve the issue using [MySQL documentation](https://dev.mysql.com/doc/refman/5.6/en/server-options.html#option_mysqld_bind-address) or another authoritative source.

## Grant access to a database user {#instgde-prereq-mysql-remote-access}

To enable your web node to connect to the database server, you must grant a web node database user access to the database on the remote server.

This example grants the `root` database user full access to the database on the remote host.

To grant access to a database user:

1.	Log in to the database server.
2.	Connect to the MySQL database as the `root` user.
3.	Enter the following command:

		GRANT ALL ON <local database name>.* TO <remote web node username>@<remote web node server ip address> IDENTIFIED BY '<database user password>';

	For example,

		GRANT ALL ON magento_remote.* TO dbuser@192.0.2.50 IDENTIFIED BY 'dbuserpassword';

{:.bs-callout .bs-callout-info}
If your web server is clustered, enter the same command on every web server. You must use the same username for every web server.

## Verify database access {#instgde-prereq-mysql-remote-verify}

On your web node host, enter the following command to verify the connection works:

	mysql -u <local database username> -h <database server ip address> -p

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

## Install the Magento software {#instgde-prereq-mysql-remote-install}

When you install the Magento software using either the command line or Setup Wizard, you must specify the following:

*	The Base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} (also referred to as the *store address*) specifies the hostname or IP address of the *web node*
*	Database host is the *remote database server* IP address (or load balancer if the database server is clustered)
*	Database username is the *local web node* database user to which you gave access
*	Database password is the local web node user's password
*	Database name is the name of the database on the remote server

#### Related topics

*	[Installing optional software]({{page.baseurl }}/install-gde/prereq/optional.html)
*	[Apache]({{page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP&mdash;Ubuntu]({{page.baseurl }}/install-gde/prereq/php-centos-ubuntu.html#php-for-ubuntu)
*	[PHP&mdash;CentOS]({{page.baseurl }}/install-gde/prereq/php-centos-ubuntu.html#php-for-centos)
*	[Configuring security options]({{page.baseurl }}/install-gde/prereq/security.html)
*	[How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
