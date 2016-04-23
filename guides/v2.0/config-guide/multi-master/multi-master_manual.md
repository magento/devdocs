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
*	[]()

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

*	[]()
*	[]()
*	[]()

### Create the SQL scripts {#config-ee-multidb-sql-create}
Create the following SQL scripts in a location that is accessible by the user as whom you log in to your Magento server. For example, if you log in or run commands as `root`, you can create the scripts in the `/root/sql-scripts` directory.

#### Remove foreign keys (first script)
This script is the first of two that remove foreign keys that refer to non-sales tables from sales tables. 

Create the following script and give it a name like `1_foreign1.sql`:

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

Create the following script and give it a name like `2_back-up-sales.sql`:

{% highlight sql %}
select
    concat(
        'mysqldump -uroot -p123123q <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/sales.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'sales/_%' escape '/';
 
select
    concat(
        'mysqldump -uroot -p123123q <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/salesarchive.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'magento_sales/_%' escape '/';
 
select
    concat(
        'mysqldump -uroot -p123123q <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/customercustomattributes.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'magento_customercustomattributes_sales_flat_order%' escape '/';
 
select
    concat(
        'mysqldump -uroot -p123123q <your main magento DB name> ',
        group_concat(table_name separator ' '),
        ' > /var/sequence.sql'
    )
from information_schema.tables
where table_schema = '<your main magento DB name>'
and table_name like 'sequence/_%' escape '/';
{% endhighlight %}

#### Remove foreign keys (second script)
This script is the second of two that remove foreign keys that refer to non-sales tables from sales tables.

Create the following script and give it a name like `3_foreign-key2.sql`:

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

#### Remove checkout and OMS tables
This script removes checkout and OMS tables from the main Magento database. 

Create the following script and give it a name like `4_remove-tables.sql`:



#### Restore sales data {#sql-sales-restore}


To run the SQL script:

1.	Copy the following script to your Magento server and save it as a text file.

	In the script, replace `<your main magento DB name>` with the name of your main Magento database; in this topic, the sample database name is `magento`.
2.	Log in to your MySQL database as `root`:

		mysql -u root -p
3.	Execute the script as follows:

		source <path>/<sql script name>.sql

SQL script:

{% highlight sql %}


#### Next step
<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master_verify.html">Verify split databases</a>