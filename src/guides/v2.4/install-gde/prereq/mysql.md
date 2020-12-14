---
group: installation-guide
title: MySQL
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

Magento 2.4 requires a clean installation of MySQL 8.0. Follow the links below for instructions on installing MySQL on your machine.

*  [Ubuntu](https://ubuntu.com/server/docs/databases-mysql)
*  [CentOS](https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html)

If you expect to import large numbers of products into Magento, you can increase the value for [`max_allowed_packet`](http://dev.mysql.com/doc/refman/5.6/en/program-variables.html){:target="_blank"} that is larger than the default, 16MB.

{:.bs-callout-info}
The default value applies to {{site.data.var.ece}} *and* on-premises projects. {{site.data.var.ece}} Pro customers must open a support ticket to increase the `max_allowed_packet` value. {{site.data.var.ece}} Starter customers can increase the value by updating the configuration in the `/etc/mysql/mysql.cnf` file.

  {% include install/mysql_max-allowed-packet-ubuntu.md %}

Then, [Configure the Magento database instance](#instgde-prereq-mysql-config).

## MySQL 8 changes

For Magento 2.4, we added support for MySQL 8.
This section describes major changes to MySQL 8 that Magento developers should be aware of.

### Removed width for integer types (Padding)

The display width specification for integer data types (TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT)
have been deprecated in MySQL 8.0.17. Statements that include data-type definitions in their output no longer show the display width for integer types, with the exception of TINYINT(1). MySQL Connectors assume that TINYINT(1) columns originated as BOOLEAN columns. This exception enables them to continue to make that assumption.

#### Example:

Describe admin_user at mysql 8.19

| Field | Type | Null | Key | Default | Extra |
| :--- | :--- | :--- | :--- | :--- | :--- |
| user\_id | int unsigned | NO | PRI | NULL | auto\_increment |
| firstname | varchar\(32\) | YES | | NULL | |
| lastname | varchar\(32\) | YES | | NULL | |
| email | varchar\(128\) | YES | | NULL | |
| username | varchar\(40\) | YES | UNI | NULL | |
| password | varchar\(255\) | NO | | NULL | |
| created | timestamp | NO | | CURRENT\_TIMESTAMP | DEFAULT\_GENERATED |
| modified | timestamp | NO | | CURRENT\_TIMESTAMP | DEFAULT\_GENERATED on update CURRENT\_TIMESTAMP |
| logdate | timestamp | YES | | NULL | |
| lognum | smallint unsigned | NO | | 0 | |

With the exception of *TINYINT(1)*, all integer padding (TINYINT > 1, SMALLINT, MEDIUMINT, INT, BIGINT) should be removed from the `db_schema.xml` file.

For more information, see [https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-19.html#mysqld-8-0-19-feature](
https://dev.mysql.com/doc/relnotes/mysql/8.0/en/news-8-0-19.html#mysqld-8-0-19-feature).

### Default ORDER BY behavior

Before 8.0, entries were sorted by the foreign key. Default sort order depends on the engine that is used.
Always specify a sort order if your code depends on a specific sort.

### Deprecated ASC and DESC qualifiers for GROUP BY

As of MySQL 8.0.13, the deprecated `ASC` or `DESC` qualifiers for `GROUP BY` clauses have been removed. Queries that previously relied on `GROUP BY` sorting may produce results that differ from previous MySQL versions. To produce a given sort order, provide an `ORDER BY` clause.

## Magento and MySQL 8

There have been some changes to Magento to properly support MySQL 8.

### Query and Insert Behavior

Magento disabled the regular validation behavior by setting SET SQL_MODE='' in `/lib/internal/Magento/Framework/DB/Adapter/Pdo/Mysql.php:424.`. With validation disabled, it is possible that MySQL will truncate data. In MySQL, the Query behavior has changed: `Select * on my_table where IP='127.0.0.1'` will no longer return any results because the IP address is now properly seen as a string, rather than an integer.

## Upgrading from MySQL 5.7 to MySQL 8

To properly update MySQL from version 5.7 to version 8, you must follow these steps in order:

1. Upgrade Magento to 2.4.0.
   Test everything and make sure your system works as expected.
1. Enable maintenance mode:

   ```bash
   bin/magento maintenance:enable
   ```
1. Make a database backup:

   ```bash
   bin/magento setup:backup --db
   ```

1. Update MySQL to version 8.
1. Import the backed-up data into MySQL.
1. Clean the cache:

   ```bash
   bin/magento cache:clean
   ```
1. Disable maintenance mode:

   ```bash
   bin/magento maintenance:disable
   ```

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

   ```sql
   create database magento;
   ```

   ```sql
   create user 'magento'@'localhost' IDENTIFIED BY 'magento';
   ```

   ```sql
   GRANT ALL ON magento.* TO 'magento'@'localhost';
   ```

   ```sql
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

   *  {% include install/maria-db.md %}

1. In order for MySQL `TIMESTAMP` fields to follow the preferences and composition expected by Magento's declarative schema architecture, the system variable `explicit_defaults_for_timestamp` must be set to `on`.

   References;

   *  [MySQL 5.7](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_explicit_defaults_for_timestamp)
   *  [MariaDB](https://mariadb.com/kb/en/server-system-variables/#explicit_defaults_for_timestamp)

   If this setting is not enabled, `setup:db:status` will always report that `Declarative Schema is not up to date`.

{:.bs-callout-info}
The `explicit_defaults_for_timestamp` setting is deprecated. This setting controls deprecated TIMESTAMP behaviors that will be removed in a future MySQL release. When those behaviors are removed, the `explicit_defaults_for_timestamp` setting will be removed as well.

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
