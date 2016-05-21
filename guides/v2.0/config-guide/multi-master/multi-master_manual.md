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
*	[Configure the sales database](#config-ee-multidb-oms)
*	[Configure the quote database](#config-ee-multidb-checkout)
*   [Drop sales and quote tables from the Magento database](#config-ee-multidb-drop)
*   [Update your deployment configuration](#config-ee-multidb-config)

## Overview of manual split database configuration {#config-ee-multidb-manual-over}
If the Magento application is already in production or if you've already installed custom code or components, you might need to configure split databases manually. 

Before continuing, contact Magento Support to see if this is necessary in your case.

Manually splitting databases involves:

*	Create the checkout and order management system (OMS) databases
*	Run a series of SQL scripts that:

	*	Drop foreign keys
	*	Move tables from your main Magento database to the sales and quote databases

<div class="bs-callout bs-callout-warning">
    <p>If any custom code uses JOINs, you <em>cannot</em> use split databases. If in doubt, contact the authors of any custom code or extensions to make sure their code does not use JOINs.</p>
</div>

This topic uses the following naming conventions:

*	The main Magento database name is `magento` and its user name and password are both `magento`
*	The sales database name is `magento_quote` and its user name and password are both `magento_quote`

    The sales database is also referred to as the *checkout* database.
*	The quote database name is `magento_sales` and its user name and password are both `magento_sales`

    The quote database is also referred to as the order management system (*OMS*) database.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This guide assumes all three databases are on the same host as the Magento application. However, the choice of where to locate the databases and what they're named is up to you. We hope our examples make the instructions easier to follow.</p></span>
</div>

## Back up the Magento system {#config-ee-multidb-backup}
We strongly recommend you back up your current database and file system so you can restore it later in the event of issues during the process.

{% collapsible Click to show how to back up Magento %}

To back up your system:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).
2.	Enter the following commands:

		magento setup:backup --code --media --db
3.	Continue with the next section.
{% endcollapsible %}

## Set up additional master databases {#config-ee-multidb-master-masters}
This section discusses how to create database instances for sales and quote tables.

{% collapsible Click to show how to create database instances %}
Create sales and OMS quote databases as follows:

1.  Log in to your database server as any user.
2.  Enter the following command to get to a MySQL command prompt:

        mysql -u root -p

3.  Enter the MySQL `root` user's password when prompted.
4.  Enter the following commands in the order shown to create database instances named `magento_quote` and `magento_sales` with the same user names and passwords:

        create database magento_quote;
        GRANT ALL ON magento_quote.* TO magento_quote@localhost IDENTIFIED BY 'magento_quote';

        create database magento_sales;
        GRANT ALL ON magento_sales.* TO magento_sales@localhost IDENTIFIED BY 'magento_sales';

5.  Enter `exit` to quit the command prompt.

6.  Verify the databases, one at a time:

    quote database:

        mysql -u magento_quote -p
        exit

    Order management database:

        mysql -u magento_sales -p
        exit

    If the MySQL monitor displays, you created the database properly. If an error displays, repeat the preceding commands.
7.  Continue with the next section.
{% endcollapsible %}

## Configure the sales database {#config-ee-multidb-oms}
This section discusses how to create and run SQL scripts that alter quote database tables and back up data from those tables.

For more information, see:

*	[Create sales database SQL scripts](#config-ee-multidb-sql-oms)
*	[Run SQL scripts](#config-ee-multidb-sql-run)
*   [Back up sales data](#sales-backup)

### Create sales database SQL scripts {#config-ee-multidb-sql-oms}

{% collapsible Click to create and run sales database SQL scripts %}
Create the following SQL scripts in a location that is accessible by the user as whom you log in to your Magento server. For example, if you log in or run commands as `root`, you can create the scripts in the `/root/sql-scripts` directory.

#### Remove foreign keys (first script)
This script is the first of two that remove foreign keys that refer to non-sales tables from the sales database. 

Create the following script and give it a name like `1_foreign1.sql`. 

{% highlight sql %}
use <your main Magento DB name>;
ALTER TABLE salesrule_coupon_aggregated_order DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_ORDER_STORE_ID_STORE_STORE_ID;
ALTER TABLE salesrule_coupon_aggregated DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE salesrule_coupon_aggregated_updated DROP FOREIGN KEY SALESRULE_COUPON_AGGREGATED_UPDATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE salesrule_coupon_usage DROP FOREIGN KEY SALESRULE_COUPON_USAGE_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;
ALTER TABLE salesrule_customer_group DROP FOREIGN KEY SALESRULE_CSTR_GROUP_CSTR_GROUP_ID_CSTR_GROUP_CSTR_GROUP_ID;
ALTER TABLE salesrule_customer DROP FOREIGN KEY SALESRULE_CUSTOMER_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;
ALTER TABLE salesrule_label DROP FOREIGN KEY SALESRULE_LABEL_STORE_ID_STORE_STORE_ID;
ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRD_ATTR_ATTR_ID_EAV_ATTR_ATTR_ID;
ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRD_ATTR_CSTR_GROUP_ID_CSTR_GROUP_CSTR_GROUP_ID;
ALTER TABLE salesrule_product_attribute DROP FOREIGN KEY SALESRULE_PRODUCT_ATTRIBUTE_WEBSITE_ID_STORE_WEBSITE_WEBSITE_ID;
ALTER TABLE salesrule_website DROP FOREIGN KEY SALESRULE_WEBSITE_WEBSITE_ID_STORE_WEBSITE_WEBSITE_ID;
ALTER TABLE sales_bestsellers_aggregated_daily DROP FOREIGN KEY SALES_BESTSELLERS_AGGRED_DAILY_PRD_ID_CAT_PRD_ENTT_ENTT_ID;
ALTER TABLE sales_bestsellers_aggregated_monthly DROP FOREIGN KEY SALES_BESTSELLERS_AGGRED_MONTHLY_PRD_ID_CAT_PRD_ENTT_ENTT_ID;
ALTER TABLE sales_bestsellers_aggregated_yearly DROP FOREIGN KEY SALES_BESTSELLERS_AGGRED_YEARLY_PRD_ID_CAT_PRD_ENTT_ENTT_ID;
ALTER TABLE sales_bestsellers_aggregated_daily DROP FOREIGN KEY SALES_BESTSELLERS_AGGREGATED_DAILY_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_bestsellers_aggregated_monthly DROP FOREIGN KEY SALES_BESTSELLERS_AGGREGATED_MONTHLY_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_bestsellers_aggregated_yearly DROP FOREIGN KEY SALES_BESTSELLERS_AGGREGATED_YEARLY_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_creditmemo_grid DROP FOREIGN KEY SALES_CREDITMEMO_GRID_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_creditmemo DROP FOREIGN KEY SALES_CREDITMEMO_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_invoiced_aggregated_order DROP FOREIGN KEY SALES_INVOICED_AGGREGATED_ORDER_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_invoiced_aggregated DROP FOREIGN KEY SALES_INVOICED_AGGREGATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_invoice_grid DROP FOREIGN KEY SALES_INVOICE_GRID_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_invoice DROP FOREIGN KEY SALES_INVOICE_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order_aggregated_created DROP FOREIGN KEY SALES_ORDER_AGGREGATED_CREATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order_aggregated_updated DROP FOREIGN KEY SALES_ORDER_AGGREGATED_UPDATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order DROP FOREIGN KEY SALES_ORDER_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;
ALTER TABLE sales_order_grid DROP FOREIGN KEY SALES_ORDER_GRID_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID;
ALTER TABLE sales_order_grid DROP FOREIGN KEY SALES_ORDER_GRID_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order_item DROP FOREIGN KEY SALES_ORDER_ITEM_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order_status_label DROP FOREIGN KEY SALES_ORDER_STATUS_LABEL_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_order DROP FOREIGN KEY SALES_ORDER_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_refunded_aggregated_order DROP FOREIGN KEY SALES_REFUNDED_AGGREGATED_ORDER_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_refunded_aggregated DROP FOREIGN KEY SALES_REFUNDED_AGGREGATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_shipment_grid DROP FOREIGN KEY SALES_SHIPMENT_GRID_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_shipment DROP FOREIGN KEY SALES_SHIPMENT_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_shipping_aggregated_order DROP FOREIGN KEY SALES_SHIPPING_AGGREGATED_ORDER_STORE_ID_STORE_STORE_ID;
ALTER TABLE sales_shipping_aggregated DROP FOREIGN KEY SALES_SHIPPING_AGGREGATED_STORE_ID_STORE_STORE_ID;
ALTER TABLE magento_sales_creditmemo_grid_archive DROP FOREIGN KEY MAGENTO_SALES_CREDITMEMO_GRID_ARCHIVE_STORE_ID_STORE_STORE_ID;
ALTER TABLE magento_sales_invoice_grid_archive DROP FOREIGN KEY MAGENTO_SALES_INVOICE_GRID_ARCHIVE_STORE_ID_STORE_STORE_ID;
ALTER TABLE magento_sales_order_grid_archive DROP FOREIGN KEY MAGENTO_SALES_ORDER_GRID_ARCHIVE_CSTR_ID_CSTR_ENTT_ENTT_ID;
ALTER TABLE magento_sales_order_grid_archive DROP FOREIGN KEY MAGENTO_SALES_ORDER_GRID_ARCHIVE_STORE_ID_STORE_STORE_ID;
ALTER TABLE magento_sales_shipment_grid_archive DROP FOREIGN KEY MAGENTO_SALES_SHIPMENT_GRID_ARCHIVE_STORE_ID_STORE_STORE_ID;
ALTER TABLE downloadable_link_purchased_item DROP FOREIGN KEY DL_LNK_PURCHASED_ITEM_ORDER_ITEM_ID_SALES_ORDER_ITEM_ITEM_ID;
ALTER TABLE downloadable_link_purchased DROP FOREIGN KEY DOWNLOADABLE_LINK_PURCHASED_ORDER_ID_SALES_ORDER_ENTITY_ID;
ALTER TABLE paypal_billing_agreement_order DROP FOREIGN KEY PAYPAL_BILLING_AGREEMENT_ORDER_ORDER_ID_SALES_ORDER_ENTITY_ID;
{% endhighlight %}

### Configure the sales database {#config-ee-multidb-sql-oms-run}
Run each script in the order in which you created it as follows:

1.  Log in to your MySQL database as the `root` or administrative user:

        mysql -u root -p
2.  At the `mysql>` prompt, run each script as follows:

        source <path>/<script>.sql

    For example,

        source /root/sql-scripts/1_foreign1.sql
{% endcollapsible %}

### Back up sales data {#sales-backup}
This section discusses how to back up sales tables from the main Magento database so you can restore them in the separate sales database.

{% collapsible Click to back up and restore sales data %}

If you're currently at the `mysql>` prompt, enter `exit` to return to the command shell.

Run the following `mysqldump` commands, one at a time, from the command shell. In each, substitute the following:

*   `<your database root user name>` with the name of your database root user
*   `<your database root user password>` with the user's password
*   `<your main magento DB name>` with the name of your Magento database
*   `<path>` with a writable file system path

**Script 1**
{% highlight sql %}
mysqldump -u <your database root user name> -p <your main magento DB name> sales_bestsellers_aggregated_daily sales_bestsellers_aggregated_monthly sales_bestsellers_aggregated_yearly sales_creditmemo sales_creditmemo_comment sales_creditmemo_grid sales_creditmemo_item sales_invoice sales_invoice_comment sales_invoice_grid sales_invoice_item sales_invoiced_aggregated sales_invoiced_aggregated_order sales_order sales_order_address sales_order_aggregated_created sales_order_aggregated_updated sales_order_grid sales_order_item sales_order_payment sales_order_status sales_order_status_history sales_order_status_label sales_order_status_state sales_order_tax sales_order_tax_item sales_payment_transaction sales_refunded_aggregated sales_refunded_aggregated_order sales_sequence_meta sales_sequence_profile sales_shipment sales_shipment_comment sales_shipment_grid sales_shipment_item sales_shipment_track sales_shipping_aggregated sales_shipping_aggregated_order > /<path>/sales.sql
{% endhighlight %}

**Script 2**
{% highlight sql %}
mysqldump -u <your database root user name> -p <your main magento DB name> magento_sales_creditmemo_grid_archive magento_sales_invoice_grid_archive magento_sales_order_grid_archive magento_sales_shipment_grid_archive > /<path>/salesarchive.sql
{% endhighlight %}

**Script 3**
{% highlight sql %}
mysqldump -u <your database root user name> -p <your main magento DB name> magento_customercustomattributes_sales_flat_order magento_customercustomattributes_sales_flat_order_address > /<path>/customercustomattributes.sql
{% endhighlight %}

**Script 4**
{% highlight sql %}
mysqldump -u <your database root user name> -p <your main magento DB name> sequence_creditmemo_0 sequence_creditmemo_1 sequence_invoice_0 sequence_invoice_1 sequence_order_0 sequence_order_1 sequence_rma_item_0 sequence_rma_item_1 sequence_shipment_0 sequence_shipment_1 > /<path>/sequence.sql
{% endhighlight %}

### Restore sales data {#sql-sales-restore}
This script restores sales data in your quote database.

If you are using an NDB database cluster:

1.  Convert tables from InnoDb to NDB type in dump files:

        sed -ei 's/InnoDb/NDB/' <dumpfile>.sql

2.  Remove rows with FULLTEXT KEY from dumps because NDB tables don't support FULLTEXT:

        TBD

    salesarchive.sql

Run the following commands:

{% highlight sql %}
mysql -u <root user name> -p <your sales DB name> < /<path>/sales.sql
mysql -u <root user name> -p <your sales DB name> < /<path>/sequence.sql
mysql -u <root user name> -p <your sales DB name> < /<path>/salesarchive.sql
mysql -u <root user name> -p <your sales DB name> < /<path>/customercustomattributes.sql
{% endhighlight %}

where

*   `<your sales DB name>` with the name of your sales database. 

    In this topic, the sample database name is `magento_sales`.
*   `<root user name>` with your MySQL root user name
*   `<root user password>` with the user's password
*   Verify the location of the backup files you created earlier (for example, `/var/sales.sql`)

### Drop sales tables
This section discusses how to drop the sales tables from your main Magento database.

Create a script with a name like `2_drop-sales-tables.sql` with the following contents:

{% highlight sql %}
use <your main Magento DB name>;
SET foreign_key_checks = 0;                                                   
DROP TABLE IF EXISTS sales_bestsellers_aggregated_daily;                       
DROP TABLE IF EXISTS sales_bestsellers_aggregated_monthly;                     
DROP TABLE IF EXISTS sales_bestsellers_aggregated_yearly;                      
DROP TABLE IF EXISTS sales_creditmemo;                                         
DROP TABLE IF EXISTS sales_creditmemo_comment;                                 
DROP TABLE IF EXISTS sales_creditmemo_grid;                                    
DROP TABLE IF EXISTS sales_creditmemo_item;                                    
DROP TABLE IF EXISTS sales_invoice;                                            
DROP TABLE IF EXISTS sales_invoice_comment;                                    
DROP TABLE IF EXISTS sales_invoice_grid;                                       
DROP TABLE IF EXISTS sales_invoice_item;                                       
DROP TABLE IF EXISTS sales_invoiced_aggregated;                                
DROP TABLE IF EXISTS sales_invoiced_aggregated_order;                          
DROP TABLE IF EXISTS sales_order;                                              
DROP TABLE IF EXISTS sales_order_address;                                      
DROP TABLE IF EXISTS sales_order_aggregated_created;                           
DROP TABLE IF EXISTS sales_order_aggregated_updated;                           
DROP TABLE IF EXISTS sales_order_grid;                                         
DROP TABLE IF EXISTS sales_order_item;                                         
DROP TABLE IF EXISTS sales_order_payment;                                      
DROP TABLE IF EXISTS sales_order_status;                                       
DROP TABLE IF EXISTS sales_order_status_history;                               
DROP TABLE IF EXISTS sales_order_status_label;                                 
DROP TABLE IF EXISTS sales_order_status_state;                                 
DROP TABLE IF EXISTS sales_order_tax;                                          
DROP TABLE IF EXISTS sales_order_tax_item;                                     
DROP TABLE IF EXISTS sales_payment_transaction;                                
DROP TABLE IF EXISTS sales_refunded_aggregated;                                
DROP TABLE IF EXISTS sales_refunded_aggregated_order;                          
DROP TABLE IF EXISTS sales_sequence_meta;                                      
DROP TABLE IF EXISTS sales_sequence_profile;                                   
DROP TABLE IF EXISTS sales_shipment;                                           
DROP TABLE IF EXISTS sales_shipment_comment;                                   
DROP TABLE IF EXISTS sales_shipment_grid;                                      
DROP TABLE IF EXISTS sales_shipment_item;                                      
DROP TABLE IF EXISTS sales_shipment_track;                                     
DROP TABLE IF EXISTS sales_shipping_aggregated;                                
DROP TABLE IF EXISTS sales_shipping_aggregated_order;                          
DROP TABLE IF EXISTS magento_sales_creditmemo_grid_archive;                    
DROP TABLE IF EXISTS magento_sales_invoice_grid_archive;                       
DROP TABLE IF EXISTS magento_sales_order_grid_archive;                         
DROP TABLE IF EXISTS magento_sales_shipment_grid_archive;                      
DROP TABLE IF EXISTS magento_customercustomattributes_sales_flat_order;        
DROP TABLE IF EXISTS magento_customercustomattributes_sales_flat_order_address;
DROP TABLE IF EXISTS sequence_creditmemo_0;                                    
DROP TABLE IF EXISTS sequence_creditmemo_1;                                    
DROP TABLE IF EXISTS sequence_invoice_0;                                       
DROP TABLE IF EXISTS sequence_invoice_1;                                       
DROP TABLE IF EXISTS sequence_order_0;                                         
DROP TABLE IF EXISTS sequence_order_1;                                         
DROP TABLE IF EXISTS sequence_rma_item_0;                                      
DROP TABLE IF EXISTS sequence_rma_item_1;                                      
DROP TABLE IF EXISTS sequence_shipment_0;                                      
DROP TABLE IF EXISTS sequence_shipment_1;                                      
SET foreign_key_checks = 1;                                                    
{% endhighlight %}

From a `mysql>` prompt, run it as follows:

    source <path>/2_drop-sales-tables.sql

{% endcollapsible %}

## Configure the quote database {#config-ee-multidb-checkout}
This section discusses tasks required to drop foreign keys from sales database tables and move tables to the sales database.

### Drop foreign keys from quote tables
This script removes foreign keys that refer to non-quote tables from quote tables. Replace <your main magento DB name> with the name of your Magento database.

{% collapsible Click to drop foreign keys from quote tables %}

Create the following script and give it a name like `3_foreign-key2.sql`:

%%% ARE THESE TABLES IN MAGENTO DATABASE TBD

{% highlight SQL %}
use <your Magento main DB name>;
ALTER TABLE quote DROP FOREIGN KEY QUOTE_STORE_ID_STORE_STORE_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_PRODUCT_ID_CATALOG_PRODUCT_ENTITY_ENTITY_ID;
ALTER TABLE quote_item DROP FOREIGN KEY QUOTE_ITEM_STORE_ID_STORE_STORE_ID;
{% endhighlight %}

Run the script as follows:

1.  Log in to your MySQL database as the root or administrative user:

        mysql -u root -p
2.  At the `mysql>` prompt, run the script as follows:

        source <path>/<script>.sql
    For example,

        source /root/sql-scripts/3_foreign-key2.sql

### Back up quote tables
Run the following command from a command prompt:

    mysqldump -u <your database root user name> -p <your main Magento DB name> magento_customercustomattributes_sales_flat_quote magento_customercustomattributes_sales_flat_quote_address quote quote_address quote_address_item quote_item quote_item_option quote_payment quote_shipping_rate quote_id_mask > /<path>/quote.sql;

### Import tables to the quote database

    mysql -u root -p magento_quote < /<path>/quote.sql

## Drop sales and quote tables from the Magento database {#config-ee-multidb-drop}
This script sales and quote tables from the Magento database. Replace <your main magento DB name> with the name of your Magento database.

Create the following script and give it a name like `5_drop-tables.sql`:

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
DROP TABLE sales_bestsellers_aggregated_daily;                        
DROP TABLE sales_bestsellers_aggregated_monthly;                      
DROP TABLE sales_bestsellers_aggregated_yearly;                       
DROP TABLE sales_creditmemo;                                          
DROP TABLE sales_creditmemo_comment;                                  
DROP TABLE sales_creditmemo_grid;                                     
DROP TABLE sales_creditmemo_item;                                     
DROP TABLE sales_invoice;                                             
DROP TABLE sales_invoice_comment;                                     
DROP TABLE sales_invoice_grid;                                        
DROP TABLE sales_invoice_item;                                        
DROP TABLE sales_invoiced_aggregated;                                 
DROP TABLE sales_invoiced_aggregated_order;                           
DROP TABLE sales_order;                                               
DROP TABLE sales_order_address;                                       
DROP TABLE sales_order_aggregated_created;                            
DROP TABLE sales_order_aggregated_updated;                            
DROP TABLE sales_order_grid;                                          
DROP TABLE sales_order_item;                                          
DROP TABLE sales_order_payment;                                       
DROP TABLE sales_order_status;                                        
DROP TABLE sales_order_status_history;                                
DROP TABLE sales_order_status_label;                                  
DROP TABLE sales_order_status_state;                                  
DROP TABLE sales_order_tax;                                           
DROP TABLE sales_order_tax_item;                                      
DROP TABLE sales_payment_transaction;                                 
DROP TABLE sales_refunded_aggregated;                                 
DROP TABLE sales_refunded_aggregated_order;                           
DROP TABLE sales_sequence_meta;                                       
DROP TABLE sales_sequence_profile;                                    
DROP TABLE sales_shipment;                                            
DROP TABLE sales_shipment_comment;                                    
DROP TABLE sales_shipment_grid;                                       
DROP TABLE sales_shipment_item;                                       
DROP TABLE sales_shipment_track;                                      
DROP TABLE sales_shipping_aggregated;                                 
DROP TABLE sales_shipping_aggregated_order;                           
DROP TABLE magento_sales_creditmemo_grid_archive;                     
DROP TABLE magento_sales_invoice_grid_archive;                        
DROP TABLE magento_sales_order_grid_archive;                          
DROP TABLE magento_sales_shipment_grid_archive;                       
DROP TABLE magento_customercustomattributes_sales_flat_order;         
DROP TABLE magento_customercustomattributes_sales_flat_order_address; 
DROP TABLE sequence_creditmemo_0;                                     
DROP TABLE sequence_creditmemo_1;                                     
DROP TABLE sequence_invoice_0;                                        
DROP TABLE sequence_invoice_1;                                        
DROP TABLE sequence_order_0;                                          
DROP TABLE sequence_order_1;                                          
DROP TABLE sequence_rma_item_0;                                       
DROP TABLE sequence_rma_item_1;                                       
DROP TABLE sequence_shipment_0;                                       
DROP TABLE sequence_shipment_1;     
SET foreign_key_checks = 1;
{% endhighlight %}

Run the script as follows:

1.  Log in to your MySQL database as the root or administrative user:

        mysql -u root -p
2.  At the `mysql>` prompt, run the script as follows:

        source <path>/<script>.sql
    For example,

        source /root/sql-scripts/5_drop-tables.sql

## Update your deployment configuration {#config-ee-multidb-config}
The final step in manually splitting databases is to add connection and resource information to Magento's deployment configuration, `env.php`. 

Open `<your Magento install dir>/app/etc/env.php` in a text editor and update it using the guidelines discussed in the following sections.

**Database connections**

Locate the block starting with `'default'` (under `'connection'`) and add `'quote'` and `'sales'` sections. Replace sample values with values appropriate for your site.

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
        'dbname' => 'magento_quote',
        'username' => 'magento_quote',
        'password' => 'magento_quote',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
      'sales' => 
      array (
        'host' => 'localhost',
        'dbname' => 'magento_sales',
        'username' => 'magento_sales',
        'password' => 'magento_sales',
        'model' => 'mysql4',
        'engine' => 'innodb',
        'initStatements' => 'SET NAMES utf8;',
        'active' => '1',
      ),
    ),
{% endhighlight %}

**Resources**

Locate the block starting with `'resource'` and add `'quote'` and `'sales'` sections to it as follows:

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
{% endhighlight %}


#### Next step
<a href="{{ site.gdeurl }}config-guide/multi-master/multi-master_verify.html">Verify split databases</a>