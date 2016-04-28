---
layout: default
group: config-guide
subgroup: 20_cqrs
title: Manually configure master databases
menu_title: Manually configure master databases
menu_order: 3
menu_node: 
github_link: config-guide/multi-master/multi-master_manual.md
---

<img src="{{ site.baseurl }}common/images/ee-only_large.png">

#### Contents
*	<a href="#config-ee-multidb-manual-over">Overview of master databases</a>
*	[Set up additional master databases](#config-ee-multidb-master-masters)
*	[Run SQL scripts](#config-ee-multidb-sql)
*	[Other required tasks](#config-ee-multidb-other)

## Overview of manual split database configuration {#config-ee-multidb-manual-over}
If the Magento application is already in production or if you've already installed custom code or components, you must configure split databases manually. This involves:

*	Create the checkout and order management system (OMS) databases
*	Running CLI commands to set up tables in the the checkout and OMS databases
*	Running a series of SQL scripts that:

	*	Drop foreign keys
	*	Move tables from your main Magento database to the checkout and OMS databases

<div class="bs-callout bs-callout-warning">
    <p>If any custom code uses JOINs, you <em>cannot</em> use split databases. If in doubt, contact the authors of any custom code or extensions to make sure their code does not use JOINs.</p>
</div>

This topic uses the following naming conventions:

*	The main Magento database name is `magento` and its user name and password are both `magento`
*	The checkout database name is `magento_checkout` and its user name and password are both `magento_checkout`
*	The OMS database name is `magento_oms` and its user name and password are both `magento_oms`

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This guide assumes all three databases are on the same host as the Magento application. However, the choice of where to locate the databases and what they're named is up to you. We hope our examples make the instructions easier to follow.</p></span>
</div>

## Back up the Magento system
We strongly recommend you back up your current database and file system so you can restore it later in the event of issues during the process.

To back up your system:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).
2.	Enter the following commands:

		magento setup:backup --code --media --db
3.	Continue with the next section.

{% include config/split-db.md %}

After you're done, continue with the next section.

## Run SQL scripts {#config-ee-multidb-sql}
Now that the split databases are configured, you must run the following SQL scripts to remove foreign key references from them:

*	[Create the SQL scripts](#config-ee-multidb-sql-create)
*	[Run SQL scripts](#config-ee-multidb-sql-run)

### Create the SQL scripts {#config-ee-multidb-sql-create}
Create the following SQL scripts in a location that is accessible by the user as whom you log in to your Magento server. For example, if you log in or run commands as `root`, you can create the scripts in the `/root/sql-scripts` directory.

#### Remove foreign keys (first script)
This script is the first of two that remove foreign keys that refer to non-sales tables from sales tables. 

Create the following script and give it a name like `1_foreign1.sql`. Replace `<your main magento DB name>` with the name of your Magento database. In this topic, the sample database name is `magento`.

{% highlight sql %}
select concat(
    'ALTER TABLE ',
    replace(for_name, '<your main magento DB name>/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, '<your main magento DB name>/', ''),
    ';'
    )
from information_schema.INNODB_SYS_FOREIGN
where for_name like  '<your main magento DB name>/|sales_%' escape '|'
    and ref_name not like  '<your main magento DB name>/|sales_%' escape '|'
union all
select concat(
    'ALTER TABLE ',
    replace(for_name, '<your main magento DB name>/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, '<your main magento DB name>/', ''),
    ';'
    )
from information_schema.INNODB_SYS_FOREIGN
where for_name like  '<your main magento DB name>/|magento_sales|_%' escape '|'
    and ref_name not like  '<your main magento DB name>/|sales|_%' escape '|'
;
{% endhighlight %}

#### Back up sales tables
This script backs up only the sales tables. It's necessary to later restore these tables in a different database.

Create the following script and give it a name like `2_back-up-sales.sql`. Replace the following:

*	`<your main magento DB name>` with the name of your Magento database. 

	In this topic, the sample database name is `magento`.
*	`<root user name>` with your MySQL root user name
*	`<root user password>` with the user's password
*	(Optional.) Replace paths like `/var/sales.sql`

{% highlight sql %}
select
    concat(
        'mysqldump -u <root user name> -p<root user password> <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/sales.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'sales/_%' escape '/';
 
select
    concat(
        'mysqldump -u<root user name> -p<root user password> <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/salesarchive.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'magento_sales/_%' escape '/';
 
select
    concat(
        'mysqldump -u<root user name> -p<root user password> <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/customercustomattributes.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'magento_customercustomattributes_sales_flat_order%' escape '/';
 
select
    concat(
        'mysqldump -u<root user name> -p<root user password> <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/sequence.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'sequence/_%' escape '/';
{% endhighlight %}

#### Remove checkout and OMS tables
This script removes checkout and OMS tables from the main Magento database. 

Create the following script and give it a name like `3_remove-tables.sql`. Replace `<your main magento DB name>` with the name of your Magento database. In this topic, the sample database name is `magento`.

{% highlight sql %}
select ' SET foreign_key_checks = 0;' as querytext
union all
select
    concat('DROP TABLE IF EXISTS ' , table_name, ';')
from information_schema.tables
where table_schema = '<your main magento db name>'
and table_name like 'sales/_%' escape '/'
union all
select
    concat('DROP TABLE IF EXISTS ' , table_name, ';')
from information_schema.tables
where table_schema = '<your main magento db name>'
and table_name like 'magento_sales/_%' escape '/'
union all
select
    concat('DROP TABLE IF EXISTS ' , table_name, ';')
from information_schema.tables
where table_schema = '<your main magento db name>'
and table_name like 'magento_customercustomattributes_sales_flat_order%' escape '/'
union all
select
    concat('DROP TABLE IF EXISTS ' , table_name, ';')
from information_schema.tables
where table_schema = '<your main magento db name>'
and table_name like 'sequence/_%' escape '/'
union all
select 'SET foreign_key_checks = 1;';
{% endhighlight %}

#### Remove foreign keys (second script)
This script is the second of two that remove foreign keys that refer to non-sales tables from sales tables.

Create the following script and give it a name like `4_foreign-key2.sql`:

{% highlight sql %}
select concat(
    'ALTER TABLE ',
    replace(for_name, '<your main magento DB name>/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, '<your main magento DB name>/', ''),
    ';'
    )
from information_schema.INNODB_SYS_FOREIGN
where for_name like '<your main magento DB name>/%'
    and ref_name like '<your main magento DB name>/sales\_%'
union all
select concat(
    'ALTER TABLE ',
    replace(for_name, '<your main magento DB name>/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, '<your main magento DB name>/', ''),
    ';'
    )
from information_schema.INNODB_SYS_FOREIGN
where for_name like '<your main magento DB name>/%'
    and ref_name like '<your main magento DB name>/magento_sales\_%'
union all
select concat(
    'ALTER TABLE ',
    replace(for_name, '<your main magento DB name>/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, '<your main magento DB name>/', ''),
    ';'
    )
from information_schema.INNODB_SYS_FOREIGN
where for_name like '<your main magento DB name>/%'
    and ref_name like '<your main magento DB name>/magento_customercustomattributes\_%'
;
{% endhighlight %}

### Run SQL scripts {#config-ee-multidb-sql-run}
Run each script in the order in which you created it as follows:

1.  Log in to your MySQL database as the `root` or administrative user:

        mysql -u root -p
2.  At the `mysql>` prompt, run each script as follows:

        source <path>/<script>.sql

    For example,

        TBD

## Other required tasks {#config-ee-multidb-other}
TBD

### Restore sales data {#sql-sales-restore}
This script restores sales data in your OMS database.

If you are using an NDB database cluster:

1.	Convert tables from InnoDb to NDB type in dump files:

		sed -ei 's/InnoDb/NDB/' <dumpfile>.sql

2.	Remove rows with FULLTEXT KEY from dumps because NDB tables don't support FULLTEXT:

		TBD

salesarchive.sql

Run the following commands:


{% highlight sql %}
mysql -u <root user name> -p<root user password> <your OMS DB name> < /var/sales.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /var/sequence.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /var/salesarchive.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /var/customercustomattributes.sql
{% endhighlight %}

where

*   `<your OMS DB name>` with the name of your OMS database. 

    In this topic, the sample database name is `magento_oms`.
*   `<root user name>` with your MySQL root user name
*   `<root user password>` with the user's password
*   Verify the location of the backup files you created earlier (for example, `/var/sales.sql`)

#### Verify env.php
Open `<your Magento install dir>/app/etc/env.php` in a text editor and verify there are arrays for `default`, `checkout`, and `sales`. If not, update them using the following guidlines:

**Database connections**

{% highlight php startinline=true %}
 'default' =>
      array (
        'host' => 'localhost',
        'dbname' => 'magento',
        'username' => 'magento',
        'password' => 'magento',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
      'checkout' =>
      array (
        'host' => 'localhost',
        'dbname' => 'magento_checkout',
        'username' => 'magento_checkout',
        'password' => 'magento_checkout',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
      'sales' =>
      array (
        'host' => 'localhost',
        'dbname' => 'magento_oms',
        'username' => 'magento_oms',
        'password' => 'magento_oms',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
{% endhighlight %}

**Resources**

{% highlight php startinline=true %}

'resource' =>
  array (
    'default_setup' =>
    array (
      'connection' => 'default',
    ),
    'checkout' =>
    array (
      'connection' => 'checkout',
    ),
    'sales' =>
    array (
      'connection' => 'sales',
    ),
  ),

{% endhighlight %}

### Checkout tables tasks

#### Drop foreign keys from checkout tables
Run the following commands from the `mysql>` prompt:

{% highlight SQL %}
ALTER TABLE quote DROP FOREIGN KEY QUOTE_STORE_ID_STORE_STORE_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_PRODUCT_ID_CATALOG_PRODUCT_ENTITY_ENTITY_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_STORE_ID_STORE_STORE_ID;
{% endhighlight %}

#### Back up quote tables
Run the following command from the `mysql>` prompt:

    mysqldump -u root -p magento_ee magento_customercustomattributes_sales_flat_quote magento_customercustomattributes_sales_flat_quote_address quote quote_address quote_address_item quote_item quote_item_option quote_payment quote_shipping_rate quote_id_mask > /<path>/quote.sql

#### Drop quote tables from the Magento database
Either run the following commands from the `mysql>` prompt or create a script and run it:

{% highlight sql %}
SET foreign_key_checks = 0;
DROP TABLE magento_customercustomattributes_sales_flat_quote; 
DROP TABLE magento_customercustomattributes_sales_flat_quote_address;
DROP TABLE quote;
DROP TABLE quote_address;
DROP TABLE quote_address_item;
DROP TABLE quote_item;
DROP TABLE quote_item_option;
DROP TABLE quote_payment;
DROP TABLE quote_shipping_rate;
DROP TABLE quote_id_mask;
SET foreign_key_checks = 1;
{% endhighlight %}

#### Import tables to the OMS database

    mysql -u root -p magento_oms < /<path>/quote.sql

### 


#### Next step
<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master_verify.html">Verify split databases</a>