---
group: configuration-guide
title: Verify split databases
ee_only: True
functional_areas:
  - Configuration
  - System
  - Setup
---

After configuration, the master databases are configured as follows:

*	Main magento database: 250 tables
*	Magento [quote](https://glossary.magento.com/quote) database: 10 tables
*	Magento sales database: 54 tables

To verify your split databases are working properly, perform the following tasks and verify that data is added to the database tables using a database tool like [phpmyadmin]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpmyadmin):

|What to verify|How to verify|
|--- |--- |
|quote database is working|Add items to a cart. Verify that rows have been added to your quote database's quote, quote_address, and quote_item tables.|
|sales database is working|Complete an order (any payment method, including check/money order). Verify that rows have been added to your sales database's sales_order_address, sales_order_item, and sales_order_payment tables.|


{:.bs-callout .bs-callout-warning}
You must back up the two additional database instances manually. Magento backs up only the main database instance. The [<code>'magento setup:backup --db</code>]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html) command and Magento Admin options do not back up the additional tables.

#### Next step (optional)

[Set up optional database replication]({{ page.baseurl }}/config-guide/multi-master/multi-master_slavedb.html)
