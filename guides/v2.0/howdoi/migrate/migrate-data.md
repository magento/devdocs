---
layout: default
group: howdoi
subgroup: Migration
title: Data Migration
menu_title: Data Migration
menu_order: 4
github_link: howdoi/migrate/migrate-data.md
---

## Migrate data from Magento 1 to Magento 2

Data Migration allows you to migrate several types of data from your Magento 1 store to Magento 2 store.

<h4>Start your migration</h4>
<ol>
  <li>Make sure that the <a href="{{ site.gdeurl }}migration/migration-tool.html">Data Migration Tool</a> has a network access to connect to Magento 1 and Magento 2 databases. Open ports in your firewall.</li>
  <li>Stop all activity in the Magento 1.x Admin Panel (except for order management, such as shipping, creating invoice, credit memos etc.)</li>
<pre>NOTE: Activity cannot resume until your Magento 2 store goes live.</pre>
  <li>Stop all Magento 1.x cron jobs.</li> 
  <li>Use the migration tool to <a href="{{ site.gdeurl }}migration/migration-migrate-settings.html">migrate settings</a> and websites.</li>
  <li>Copy your Magento 1.x media files to Magento 2.0. (You must copy these manually from <code>&lt;magento1-root>/media</code> to <code>&lt;magento2-root>/pub/media</code>)</li> 
  <li>Use Data Migration Tool to <a href="{{ site.gdeurl }}migration/migration-migrate-data.html">migrate your data</a> from Magento 1 database to Magento 2 database. If some of your extensions have data you want to migrate, you might need to install these extensions adapted for Magento 2. In case the extensions have a different structure in Magento 2 database, use the mapping files provided with the Data Migration Tool.</li>
  <li>Use the <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex">magento indexer:reindex</code></a> command to reindex all indexers.</li>
  <li>Thoroughly test your Magento 2.0 site.</li>
</ol>

<h4>Incremental updates</h4>

Now that you’ve migrated your data, you must incrementally capture data updates that are added in Magento 1 store (such as new orders, reviews and changes in customer profiles) and migrate it to Magento 2 store.

* Start the <a href="{{ site.gdeurl }}migration/migration-migrate-delta.html">incremental migration</a>; updates run continually. 
You can stop the updates at any time by pressing CTRL+C
* Test your Magento 2 site during this time so you can catch any issues as soon as possible.
In case you find any issues, press Control+C to stop incremental migration and start it again after issues are resolved

<h4>Go live</h4>

Now that your Magento 2 site is up-to-date with Magento 1 and is functioning normally, do the following to cut over to the new site:

1. Put your Magento 1 system in maintenance mode (DOWNTIME STARTS).
2. Press Control+C in the migration tool command window to stop incremental updates.
3. Start your Magento 2 cron jobs.
4. In your Magento 2 system, reindex the stock indexer using the command <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-index.html#config-cli-subcommands-index-reindex">`magento indexer:reindex cataloginventory_stock`</a>.
5. Using a tool of your choice, hit pages in your Magento 2 system to cache pages in advance of customers using your storefront.
6. Perform any final verification of your Magento 2 site.
7. Change DNS, load balancers, and so on to point to new production hardware (DOWNTIME ENDS) 
8. Magento 2 store is ready to use. You and Your customers can resume all activities.

For full information please see the complete <a href="{{ site.gdeurl }}migration/bk-migration-guide.html">Migration Guide</a>


