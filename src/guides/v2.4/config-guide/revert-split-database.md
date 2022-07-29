---
group: configuration-guide
title: Revert from a split database to a single database
ee_only: true
functional_areas:
  - Configuration
  - System
  - Setup
---

For {{ site.data.var.ee }} customers who have implemented [Split Database]({{ page.baseurl }}/config-guide/multi-master/multi-master.html), the following topic describes how to revert or migrate back to a single database. We recommend that {{ site.data.var.ee }} merchants currently using Split Database who are upgrading to 2.4.2 and above review these steps, as well as our [announcement](https://community.magento.com/t5/Magento-DevBlog/Deprecation-of-Split-Database-in-Magento-Commerce/ba-p/465187) on the planned deprecation of Split Database.

Reverting from a split database to a single database implementation involves creating backups of the `magento_quote` and `magento_sales` databases before loading them into the single `magento_main` database.

In this example, we log in to all three databases, which are installed on the same host (`magento2-mysql`) as the "root" user. You must replace these values with the appropriate values for your databases.

1. Create a backup of the `magento_quote` database:

   ```bash
   mysqldump -h "magento2-mysql" -u root -p magento_quote > ./quote.sql
   ```

1. Create a backup of the `magento_sales` database:

   ```bash
   mysqldump -h "magento2-mysql" -u root -p magento_sales > ./sales.sql
   ```

1. Load the `magento_quote` database into the `magento_main` database:

   ```bash
   mysql -h "magento2-mysql" -u root -p magento_main < ./quote.sql
   ```

1. Load the `magento_sales` database into the `magento_main` database:

   ```bash
   mysql -h "magento2-mysql" -u root -p magento_main < ./sales.sql
   ```

1. Drop the `magento_sales` database:

   ```bash
   mysql -h "magento2-mysql" -u root -p -e "DROP DATABASE magento_sales;"
   ```

1. Drop the `magento_quote` database:

   ```bash
   mysql -h "magento2-mysql" -u root -p -e "DROP DATABASE magento_quote;"
   ```

1. Remove the deployment configuration for `checkout` and `sales` in the `connections` and `resources` sections of the `env.php` file.
1. Restore foreign keys:

   ```bash
   bin/magento setup:upgrade
   ```

## Verify your work

To verify that your single database implementation is working properly, perform the following tasks and verify that data is added to the `magento_main` database tables using a database tool like [phpMyAdmin]({{ page.baseurl }}/install-gde/prereq/optional.html#install-optional-phpmyadmin):

1. Verify that foreign keys have been restored. For example, the `QUOTE_STORE_ID_STORE_STORE_ID` key in the `quote` database table.
1. Verify that customers can place orders from the storefront.
1. Verify that orders created before reverting the split database to a single database are available in the Admin.
