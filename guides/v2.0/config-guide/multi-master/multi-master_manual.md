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
*	[Overview of manual split database configuration](#config-ee-multidb-manual-over)
*   [Back up the Magento system](#config-ee-multidb-backup)
*	[Set up additional master databases](#config-ee-multidb-master-masters)
*	[Run OMS SQL scripts](#config-ee-multidb-oms)
*	[Configure the checkout database](#config-ee-multidb-checkout)
*   [Verify your configuration](#config-ee-multidb-config)

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

## Back up the Magento system {#config-ee-multidb-backup}
We strongly recommend you back up your current database and file system so you can restore it later in the event of issues during the process.

To back up your system:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).
2.	Enter the following commands:

		magento setup:backup --code --media --db
3.	Continue with the next section.

{% include config/split-db.md %}

After you're done, continue with the next section.

## Set up additional master databases {#config-ee-multidb-master-masters}
TBD, not sure if you do this or not


## Run OMS SQL scripts {#config-ee-multidb-oms}
This section discusses how to create and run SQL scripts that alter OMS database tables and back up data from those tables.

For more information, see:

*	[Create OMS SQL scripts](#config-ee-multidb-sql-oms)
*	[Run SQL scripts](#config-ee-multidb-sql-run)

### Create OMS SQL scripts {#config-ee-multidb-sql-oms}
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

#### Back up sales data
This script backs up data from the sales tables only. Later, you'll restore these tables in a different database.

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

#### Remove OMS tables
This script removes OMS tables from the main Magento database. 

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
This script is the second of two that remove foreign keys that refer to non-sales tables from sales tables. Replace `<your main magento DB name>` with the name of your Magento database.

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

### Run OMS SQL scripts {#config-ee-multidb-sql-oms-run}
Run each script in the order in which you created it as follows:

1.  Log in to your MySQL database as the `root` or administrative user:

        mysql -u root -p
2.  At the `mysql>` prompt, run each script as follows:

        source <path>/<script>.sql

    For example,

        source /root/sql-scripts/1_foreign1.sql
        source /root/sql-scripts/2_back-up-sales.sql
        source /root/sql-scripts/3_remove-tables.sql
        source /root/sql-scripts/4_foreign-key2.sql

#### Sample script output
Sample output from each script follows in the order we suggest you run them.

**Drop foreign keys (script 1)**
{% highlight sql %}
+---------------------------------------------------------------------------------------------------------------------------------------------+
| concat(
    'ALTER TABLE ',
    replace(for_name, 'magento/', ''),
    ' DROP FOREIGN KEY ',
    replace(id, 'magento/', ''),
    ';'
    ) |
+---------------------------------------------------------------------------------------------------------------------------------------------+
| ALTER TABLE salesrule_coupon_aggregated_order DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_ORDER_STORE_ID_STORE_STORE_ID;                   |
| ALTER TABLE salesrule_coupon_aggregated DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_STORE_ID_STORE_STORE_ID;                               |
| ALTER TABLE salesrule_coupon_aggregated_updated DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_UPDATED_STORE_ID_STORE_STORE_ID;               |
| ALTER TABLE salesrule_coupon_usage DROP FOREIGN KEY SALESRULE_COUPON_USAGE_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;                           |
| ALTER TABLE salesrule_customer_group DROP FOREIGN KEY SALESRULE_CSTR_GROUP_CSTR_GROUP_ID_CSTR_GROUP_CSTR_GROUP_ID;                          |
| ALTER TABLE salesrule_customer DROP FOREIGN KEY SALESRULE_CUSTOMER_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;                                   |
| ALTER TABLE salesrule_label DROP FOREIGN KEY SALESRULE_LABEL_STORE_ID_STORE_STORE_ID;                                                       |
| ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRD_ATTR_ATTR_ID_EAV_ATTR_ATTR_ID;                                       |
| ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRD_ATTR_CSTR_GROUP_ID_CSTR_GROUP_CSTR_GROUP_ID;                         |
| ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRODUCT_ATTRIBUTE_WEBSITE_ID_STORE_WEBSITE_WEBSITE_ID;                   |
| ALTER TABLE salesrule_website DROP FOREIGN KEY SALESRULE_WEBSITE_WEBSITE_ID_STORE_WEBSITE_WEBSITE_ID;                                       |
+---------------------------------------------------------------------------------------------------------------------------------------------+
{% endhighlight %}

**Back up sales tables**

TBD REDO With wider screen

**Remove tables**
{% highlight sql %}
+------------------------------+
| querytext                    |
+------------------------------+
|  SET foreign_key_checks = 0; |
| SET foreign_key_checks = 1;  |
+------------------------------+
{% endhighlight %}

**Drop foreign keys (second script)**
{% highlight sql %}
use <your Magento main DB name>;
ALTER TABLE downloadable_link_purchased_item DROP FOREIGN KEY DL_LNK_PURCHASED_ITEM_ORDER_ITEM_ID_SALES_ORDER_ITEM_ITEM_ID;
ALTER TABLE downloadable_link_purchased DROP FOREIGN KEY DOWNLOADABLE_LINK_PURCHASED_ORDER_ID_SALES_ORDER_ENTITY_ID;
ALTER TABLE paypal_billing_agreement_order DROP FOREIGN KEY PAYPAL_BILLING_AGREEMENT_ORDER_ORDER_ID_SALES_ORDER_ENTITY_ID;
{% endhighlight %}

## Configure the checkout database {#config-ee-multidb-checkout}
This section discusses tasks required to drop foreign keys from checkout database tables and move tables to the checkout database.

### Drop foreign keys from checkout tables
Run the following commands from the `mysql>` prompt:

{% highlight SQL %}
use <your Magento main DB name>;
ALTER TABLE quote DROP FOREIGN KEY QUOTE_STORE_ID_STORE_STORE_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_PRODUCT_ID_CATALOG_PRODUCT_ENTITY_ENTITY_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_STORE_ID_STORE_STORE_ID;
{% endhighlight %}

### Back up quote tables
Run the following command from the `mysql>` prompt:

    mysqldump -u root -p <your Magento main DB name> magento_customercustomattributes_sales_flat_quote magento_customercustomattributes_sales_flat_quote_address quote quote_address quote_address_item quote_item quote_item_option quote_payment quote_shipping_rate quote_id_mask > /<path>/quote.sql

### Import tables to the OMS database

    mysql -u root -p magento_oms < /<path>/quote.sql

### Drop quote tables from the Magento database
Either run the following commands from the `mysql>` prompt or create a script and run it:

{% highlight sql %}
use <your Magento main DB name>;
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

### Restore sales data {#sql-sales-restore}
This script restores sales data in your OMS database.

If you are using an NDB database cluster:

1.  Convert tables from InnoDb to NDB type in dump files:

        sed -ei 's/InnoDb/NDB/' <dumpfile>.sql

2.  Remove rows with FULLTEXT KEY from dumps because NDB tables don't support FULLTEXT:

        TBD

    salesarchive.sql

Run the following commands:

{% highlight sql %}
mysql -u <root user name> -p<root user password> <your OMS DB name> < /<path>/sales.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /<path>/sequence.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /<path>/salesarchive.sql
mysql -u <root user name> -p<root user password> <your OMS DB name> < /<path>/customercustomattributes.sql
{% endhighlight %}

where

*   `<your OMS DB name>` with the name of your OMS database. 

    In this topic, the sample database name is `magento_oms`.
*   `<root user name>` with your MySQL root user name
*   `<root user password>` with the user's password
*   Verify the location of the backup files you created earlier (for example, `/var/sales.sql`)

## Verify your configuration {#config-ee-multidb-config}
This section discusses how to make sure the Magento configuration in `<your Magento install dir>/app/etc/env.php` is correct.

### Verify env.php
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


#### Next step
<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master_verify.html">Verify split databases</a>