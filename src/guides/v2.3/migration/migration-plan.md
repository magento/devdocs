---
group: migration-guide
subgroup: B_Creating a migration plan
title: Creating a migration plan
menu_title: Creating a migration plan
menu_node: parent
menu_order: 2
functional_areas:
  - Tools
---

To migrate successfully and avoid issues, you need to thoroughly plan and test your migration. We hope the guidelines below will prove helpful.

## Before you start: Consider upgrade

Migration is a perfect moment to make serious changes and get your site ready for the next level of growth. Consider whether your new site needs to be designed with more hardware or a more advanced topology with better caching tiers, etc.

## Step 1: Review extensions on your current site

*  What extensions have you installed?

*  Have you identified if you need all these extensions on your new site?  (There might be old ones you can safely remove.)

*  Have you determined if Magento 2 versions of your extensions exist?  (Visit [Magento Marketplace] to find the latest versions or contact your extension provider.)

*  What database assets from your extensions do you want to migrate?

## Step 2: Build and prepare Magento 2 store for migration

*  Set up a Magento 2 hardware system using topology and design that at least matches your existing Magento 1 system

*  Install Magento 2.x (with all modules of this release) and the Data Migration Tool on a system that meets the [Magento system requirements]

*  Make your custom adjustments to the Data Migration Tool code in case you do not need to migrate some data (like CMS Pages, Sales Rules, etc.) or want to convert your Magento customization during migration. Read the Data Migration Tool's [Technical Specification] to better understand how migration works from inside

## Step 3: Dry run

Before you start migration on the production environment, it would be best to go through all the migration steps on your testing environment.

In such migration testing, follow these steps:

*  Copy your Magento 1 store to a staging server

*  Fully migrate the replicated Magento 1 store to Magento 2

*  Thoroughly test your new store

## Step 4: Start your migration

1. Make sure that the Data Migration Tool has a network access to connect to Magento 1 and Magento 2 databases. Open the corresponding ports in your firewall.

1. Stop all activities in the Magento 1.x Admin Panel, except for order management, such as shipping, creating invoice, credit memos, etc (the list of allowed activities can be extended by adjusting settings of the Delta mode in the Data Migration Tool). **Note:** such activities must not be resumed until your Magento 2 store goes live.

1. We recommend to stop all Magento 1.x cron jobs.

   Still, if some jobs are required to run during migration, make sure they do not create new database entities or change the existing ones in the way that such entities cannot be processed by the Delta mode.

   For example: the `enterprise_salesarchive_archive_orders` cron job moves old orders to archive. Running this job during migration is safe because the Delta mode takes the job into account and thus properly processes the archived orders.

1. Use the Data Migration Tool to migrate settings and websites.

1. Copy your Magento 1.x media files to Magento 2.x.

   You must copy these files manually from the `magento1-root/media` directory to `magento2-root/pub/media`.

1. Use the Data Migration Tool to bulk copy your data from Magento 1 database to Magento 2 database.

   If some of your extensions have data you want to migrate, you might need to install these extensions adapted for Magento 2. In case the extensions have a different structure in Magento 2 database, use the mapping files provided with the Data Migration Tool.

1. Reindex all Magento 2.x indexers. For details, see the [Configuration guide].

## Step 5: Make changes to the migrated data (if needed)

Sometimes you may want to have your Magento 2 store with different catalog structure, sales rules, CMS pages, etc. after migration.

It is important to practice caution while working through manual data changes. Mistakes will create errors in the incremental data migration step that follows.

For example, a product deleted from Magento 2: the one that has been bought on your live Magento 1 store and which is not available anymore in your Magento 2 store. Transferring data about such purchase might cause an error while running the Data Migration Tool in Delta mode.

## Step 6: Update incremental data

After migrating data, you must incrementally capture data updates that have been added in the Magento 1 store (such as new orders, reviews, and changes in customer profiles) and transfer these updates to the Magento 2 store using the Delta mode.

*  Start the incremental migration; updates will run continually. You can stop transferring updates at any time by pressing `Ctrl+C`

*  Test your Magento 2 site during this time to catch any issues as soon as possible. In case of such issues, press `Ctrl+C` to stop incremental migration and start it again after issues are resolved

 {:.bs-callout-info}
Volume check warnings may appear in case you conduct testing of your Magento 2 site and run migration process at the same time. It happens because in Magento 2 you create entities that do not exist in Magento 1 instance.

## Step 7: Go live

Now that your Magento 2 site is up-to-date with Magento 1 and is functioning normally, do the following to cut over to the new site:

1. Put your Magento 1 system in maintenance mode (DOWNTIME STARTS).

1. Press Control+C in the migration tool command window to stop incremental updates.

1. Start your Magento 2 cron jobs.

1. In your Magento 2 system, reindex the stock indexer. For more information, see the [Configuration guide].

1. Using a tool of your choice, hit pages in your Magento 2 system to cache pages in advance of customers who use your storefront.

1. Perform any final verification of your Magento 2 site.

1. Change DNS, load balancers, and so on to point to new production hardware (DOWNTIME ENDS).

1. Magento 2 store is now ready to use. You and your customers can resume all activities.

<!-- LINK ADDRESSES -->
[Magento system requirements]: {{ page.baseurl }}/install-gde/system-requirements.html
[Magento Marketplace]: https://marketplace.magento.com
[Technical Specification]: {{ page.baseurl }}/migration/migration-tool-internal-spec.html
[Configuration guide]: {{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html
