---
group: installation-guide
title: MySQL
redirect_from:
  - guides/v2.3/install-gde/trouble/tshoot_mysql_table-open-cache.html
---

## Help if you are just starting out {#mysql-help-beginner}

If you are new to all this and need some help getting started, we suggest the following:

*  [Is the Magento software installed already?]({{page.baseurl }}/install-gde/basics/basics_magento-installed.html)
*  [What is the software that the Magento server needs to run?]({{page.baseurl }}/install-gde/basics/basics_software.html)
*  [What operating system is my server running?]({{page.baseurl }}/install-gde/basics/basics_os-version.html)
*  [How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{page.baseurl }}/install-gde/basics/basics_login.html)

## General guidelines {#instgde-prereq-mysql-intro}

{:.bs-callout-info}
See [Magento technology stack requirements]({{ page.baseurl }}/install-gde/system-requirements.html#database) for supported versions of MySQL.

Magento _strongly_ recommends you observe the following standard when you set up your Magento database:

*  Magento uses [MySQL database triggers](http://dev.mysql.com/doc/refman/5.0/en/triggers.html){:target="_blank"} to improve database access during reindexing. These get created when the indexer mode is set to [schedule](https://devdocs.magento.com/guides/v2.3/config-guide/cli/config-cli-subcommands-index.html#configure-indexers-1){:target="_blank"}. Magento does not support any custom triggers in the Magento database because custom triggers can introduce incompatibilities with future Magento versions.
*  Familiarize yourself with [these potential MySQL trigger limitations](http://dev.mysql.com/doc/mysql-reslimits-excerpt/5.1/en/stored-program-restrictions.html){:target="_blank"} before you continue.
*  If you use MySQL database replication, be aware that Magento does _not_ support MySQL statement-based replication. Make sure you use _only_ [row-based replication](http://dev.mysql.com/doc/refman/5.1/en/replication-formats.html){:target="_blank"}.

{:.bs-callout-warning}
Magento 2 currently utilizes `CREATE TEMPORARY TABLE` statements inside transactions, which are [incompatible](https://dev.mysql.com/doc/refman/5.7/en/replication-gtids-restrictions.html) with database implementations utilizing GTID-based replication, such as [Google Cloud SQL second-generation instances](https://cloud.google.com/sql/docs/features#differences).

{:.bs-callout-info}
If your web server and database server are on different hosts, perform the tasks discussed in this topic on the database server host then see [Set up a remote MySQL database connection]({{page.baseurl }}/install-gde/prereq/mysql_remote.html).

## Installing MySQL on Ubuntu {#instgde-prereq-mysql-ubuntu}

See one of the following sections for more information:

*  [Installing and configuring MySQL 5.7 on Ubuntu 16](#instgde-prereq-mysql57-ub16)
*  [Installing MySQL 5.6 on Ubuntu 14](#instgde-prereq-mysql56ubu14)
*  [Installing MySQL 5.6 on Ubuntu 12](#instgde-prereq-mysql56ubu12)

### Installing and configuring MySQL 5.7 on Ubuntu 16 {#instgde-prereq-mysql57-ub16}

This section discusses how to install MySQL 5.7 on Ubuntu 16.

{:.bs-callout-info}
The Magento application 2.1.2 and later are compatible with MySQL 5.7.

To install MySQL 5.7 on Ubuntu 16:

1. Enter this command:

   ```bash
   sudo apt install -y mysql-server mysql-client
   ```

1. Start MySQL:

   ```bash
   sudo service mysql start
   ```

1. Secure the installation:

   ```bash
   sudo mysql_secure_installation
   ```

1. Test the installation:

   ```bash
   mysql -u root -p
   ```

   Sample output:

   ```terminal
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 45 Server version: 5.6.19-0ubuntu0.14.04.1 (Ubuntu)

   Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

   Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

   mysql>
   ```

1. If you expect to import large numbers of products into Magento, you can increase the value for [`max_allowed_packet`](http://dev.mysql.com/doc/refman/5.6/en/program-variables.html){:target="_blank"} that is larger than the default, 16MB.

   {:.bs-callout-info}
   The default value applies to {{site.data.var.ece}} *and* on-premises projects. {{site.data.var.ece}} Pro customers must open a support ticket to increase the `max_allowed_packet` value. {{site.data.var.ece}} Starter customers can increase the value by updating the configuration in the `/etc/mysql/mysql.cnf` file.

  {% include install/mysql_max-allowed-packet-ubuntu.md %}

1. [Configure the Magento database instance](#instgde-prereq-mysql-config).

### Installing MySQL 5.6 on Ubuntu 14 {#instgde-prereq-mysql56ubu14}

To install MySQL 5.6 on Ubuntu 14:

1. Enter this command:

   ```bash
   apt-get -y install mysql-server-5.6 mysql-client-5.6
   ```

1. Start MySQL:

   ```bash
   sudo service mysql start
   ```

1. Secure the installation:

   ```bash
   mysql_secure_installation
   ```

1. Test the installation by entering the following command:

   ```bash
   mysql -u root -p
   ```

   Sample output:

   ```terminal
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 45 Server version: 5.6.19-0ubuntu0.14.04.1 (Ubuntu)

   Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

   Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

   mysql>
   ```

1. If you expect to import large numbers of products into Magento, you can increase the value for [`max_allowed_packet`](http://dev.mysql.com/doc/refman/5.6/en/program-variables.html){:target="_blank"} that is larger than the default, 16MB.

   {% include install/mysql_max-allowed-packet-ubuntu.md %}

1. [Configure the Magento database instance](#instgde-prereq-mysql-config).

### Installing MySQL 5.6 on Ubuntu 12 {#instgde-prereq-mysql56ubu12}

To install MySQL 5.6 on Ubuntu 12, use the following instructions from [askubuntu.com](http://askubuntu.com/questions/433014/unable-to-install-mysql-5-6-in-ubuntu-12-04){:target="_blank"}.

1. Enter the following commands in the order shown:

   ```bash
   apt-get -y update
   ```

   ```bash
   apt-add-repository ppa:ondrej/mysql-5.6
   ```

   ```bash
   apt-get -y update
   ```

   ```bash
   apt-get -y install mysql-server
   ```

1. Start MySQL:

   ```bash
   sudo service mysql start
   ```

1. Secure the installation:

   ```bash
   mysql_secure_installation
   ```

1. Test the installation:

   ```bash
   mysql -u root -p
   ```

   Messages similar to the following display:

   ```terminal
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 43 Server version: 5.6.21-1+deb.sury.org~precise+1 (Ubuntu)

   Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.

   Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

   mysql>
   ```

1. If you expect to import large numbers of products into Magento, you can increase the value for [`max_allowed_packet`](http://dev.mysql.com/doc/refman/5.6/en/program-variables.html){:target="_blank"} that is larger than the default, 16MB.

   {% include install/mysql_max-allowed-packet-ubuntu.md %}

1. [Configure the Magento database instance](#instgde-prereq-mysql-config).

## Installing and configuring MySQL 5.7 on CentOS {#instgde-prereq-mysql57-centos}

This section discusses how to install MySQL 5.7 on CentOS 6 or CentOS 7.

{:.bs-callout-info}
The Magento application 2.1.2 and later are compatible with MySQL 5.7.

### Get MySQL 5.7 for CentOS 7

The following procedure is based on [How to Install Latest MySQL 5.7.9 on RHEL/CentOS 7/6/5 and Fedora 23/22/21](http://www.tecmint.com/install-latest-mysql-on-rhel-centos-and-fedora){:target="_blank"}.

As a user with `root` privileges, enter the following commands in the order shown:

```bash
wget http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm
```

```bash
yum -y localinstall mysql57-community-release-el7-7.noarch.rpm
```

Continue with [Install and configure MySQL 5.7 on CentOS 6 or 7](#mysql57-centos-config).

### Get MySQL 5.7 for CentOS 6

The following procedure is based on [How to Install Latest MySQL 5.7.9 on RHEL/CentOS 7/6/5 and Fedora 23/22/21](http://www.tecmint.com/install-latest-mysql-on-rhel-centos-and-fedora){:target="_blank"}.

As a user with `root` privileges, enter the following commands in the order shown:

```bash
wget http://dev.mysql.com/get/mysql57-community-release-el6-7.noarch.rpm
```

```bash
yum -y localinstall mysql57-community-release-el6-7.noarch.rpm
```

Continue with the next section.

### Install and configure MySQL 5.7 on CentOS 6 or 7 {#mysql57-centos-config}

1. Enter the following commands in the order shown:

   ```bash
   yum -y install mysql-community-server
   ```

   ```bash
   service mysqld start
   ```

1. Verify the version:

   ```bash
   mysql --version
   ```

   Sample output follows:

   ```bash
   mysql  Ver 14.14 Distrib 5.7.12, for Linux (x86_64) using  EditLine wrapper
   ```

1. Get the temporary database `root` user password:

   ```bash
   grep 'temporary password' /var/log/mysqld.log
   ```

1. Secure the installation:

   ```bash
   mysql_secure_installation
   ```

   ```bash
   mysql_secure_installation
   ```

   Follow the prompts on your screen to set a new password and configure other options.

1. Configure MySQL 5.7 as discussed in [Configuring the Magento database instance](#instgde-prereq-mysql-config).

## Installing and configuring MySQL 5.6 on CentOS {#instgde-prereq-mysql-centos}

The following procedure is based on [Install MySQL Server 5.6 in CentOS 6.x and Red Hat 6.x Linux](http://sharadchhetri.com/2013/12/26/install-mysql-server-5-6-in-centos-6-x-and-red-hat-6-x-linux/){:target="_blank"}.

1. *CentOS 6* Install the MySQL database:

   ```bash
   yum -y update
   ```

   ```bash
   sudo wget http://repo.mysql.com/mysql-community-release-el6-5.noarch.rpm && sudo rpm -ivh mysql-community-release-el6-5.noarch.rpm
   ```

   ```bash
   sudo yum -y install mysql-server
   ```

1. *CentOS 7* Install the MySQL database:

   ```bash
   yum -y update
   ```

   ```bash
   sudo wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm && sudo rpm -ivh mysql-community-release-el7-5.noarch.rpm
   ```

   ```bash
   sudo yum -y install mysql-server
   ```

1. Start MySQL:

   ```bash
   service mysqld start
   ```

1. Set a password for the <tt>root</tt> user and set other security-related options. Enter the following command and follow the prompts on your screen to complete the configuration:

   ```bash
   mysql_secure_installation
   ```

1. Verify the MySQL server version:

   ```bash
   mysql -u root -p
   ```

   Messages similar to the following display:

   ```terminal
   Welcome to the MySQL monitor.  Commands end with ; or \g.
   Your MySQL connection id is 15 Server version: 5.6.23 MySQL Community Server (GPL)

   Copyright (c) 2000, 2015, Oracle and/or its affiliates. All rights reserved.

   Oracle is a registered trademark of Oracle Corporation and/or its affiliates. Other names may be trademarks of their respective owners.

   Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
   ```

1. If you expect to import large numbers of products into Magento, you can configure MySQL to use the [`max_allowed_packet`](http://dev.mysql.com/doc/refman/5.6/en/program-variables.html){:target="_blank"} parameter. We recommend a value of at least 16MB.

   {% include install/mysql_max-allowed-packet-centos.md %}

1. Configure the Magento database instance as discussed in the next section.

## Configuring the Magento database instance {#instgde-prereq-mysql-config}

This section discusses how to create a new database instance for Magento. Although a new database instance is recommended, you can optionally install Magento into an existing database instance.

To configure a MySQL database instance:

1. Log in to your database server as any user.
1. Get to a MySQL command prompt:

   ```bash
   mysql -u root -p
   ```

1. Enter the MySQL `root` user's password when prompted.
1. Enter the following commands in the order shown to create a database instance named `magento` with username `magento`:

   ```shell
   create database magento;
   ```

   ```shell
   create user magento IDENTIFIED BY 'magento';
   ```

   ```shell
   GRANT ALL ON magento.* TO magento@localhost IDENTIFIED BY 'magento';
   ```

   ```shell
   flush privileges;
   ```

1. Enter `exit` to quit the command prompt.

1. Verify the database:

   ```bash
   mysql -u magento -p
   ```

   If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.

1. If your web server and database server are on different hosts, perform the tasks discussed in this topic on the database server host then see [Set up a remote MySQL database connection]({{page.baseurl }}/install-gde/prereq/mysql_remote.html).

   We recommend you configure your database instance as appropriate for your business. When configuring your database, please keep the following in mind:

   *  Indexers require higher `tmp_table_size` and `max_heap_table_size` values (e.g., 64M). If you configure the `batch_size` parameter, you can adjust that value along with the table size settings to improve indexer performance. Refer to the [Magento Optimization Guide]({{page.baseurl }}/performance-best-practices/configuration.html) for more information.

   *  For optimal performance, make sure all MySQL and Magento index tables can be kept in memory (e.g., configure `innodb_buffer_pool_size`).

1. In order for MySQL `TIMESTAMP` fields to follow the preferences and composition expected by Magento's declarative schema architecture, the system variable `explicit_defaults_for_timestamp` must be set to `on`.

   References;

   *  [MySQL 5.7](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp)
   *  [MariaDB](https://mariadb.com/kb/en/server-system-variables/#explicit_defaults_for_timestamp)

   If this setting is not enabled, `setup:db:status` will always report that `Declarative Schema is not up to date`.

{:.bs-callout-info}
The `explicit_defaults_for_timestamp` setting is deprecated. This setting controls deprecated TIMESTAMP behaviors that will be removed in a future MySQL release.  When those behaviors are removed, the `explicit_defaults_for_timestamp` setting will be removed as well.

{:.bs-callout-warning}
On Magento projects deployed on the Cloud platform, the `explicit_defaults_for_timestamp` setting for MySQL (MariaDB) defaults to *OFF*

{:.ref-header}
Related topics

*  [Set up a remote MySQL database connection]({{page.baseurl }}/install-gde/prereq/mysql_remote.html)
*  [Installing optional software]({{page.baseurl }}/install-gde/prereq/optional.html)
*  [Apache]({{page.baseurl }}/install-gde/prereq/apache.html)
*  [PHP](php-settings.html)
*  [Configuring security options]({{page.baseurl }}/install-gde/prereq/security.html)
*  [How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
