---
layout: default
group:  migration
subgroup: B_Creating a migration plan
title: Creating a migration plan
menu_title: Creating a migration plan
menu_node: parent
menu_order: 2
version: 2.0
github_link: migration/migration-plan.md
redirect_from: /guides/v1.0/migration/migration-plan.html
---

  
<h2>Creating a migration plan</h2>

To have a successful migration, you need to plan it and test it thoroughly. Use the following guidelines to get started.

<h4>Step 1: Review your current site</h4>

* What extensions have you installed?
* Have you identified if you need all these extensions in your new site?  (There might be old ones you can safely drop.)
* Have you determined if Magento 2 versions of your extensions exist?  (Check with your extension providers to see if they have been ported yet.)
* What database assets from your extensions do you want to migrate?

<h4>Step 2: Capacity planning</h4>

Consider whether the new site needs to be designed with more hardware or a more advanced topology with better caching tiers and so on. It’s a good time to make more serious changes to get your site ready for your next level of growth.

<h4>Step 3: Build and test Magento 2</h4>

To prepare for the migration, make sure you do all of the following:

* Set up a Magento 2.x system using a topology and design that at least matches your existing Magento 1 system
* To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database and use this Magento 1.x data for your migration
* Install Magento 2.x (with all modules of given release) on a system that meets our system requirements

<h4>Step 4: Start your migration</h4>

<ol>
  <li>Make sure that the Data Migration Tool has a network access to connect to Magento 1 and Magento 2 databases. Open ports in your firewall.</li>
  <li>Stop all activity in the Magento 1.x Admin Panel (except for order management, such as shipping, creating invoice, credit memos etc.)</li>
<pre>NOTE: Activity cannot resume until your Magento 2 store goes live.</pre>
  <li>Stop all Magento 1.x cron jobs.</li> 
  <li>Use the migration tool to migrate settings and websites.</li>
  <li>Copy your Magento 1.x media files to Magento 2.x. (You must copy these manually from  from magento1-root/media to magento2-root/pub/media directory)</li> 
  <li>Use Data Migration Tool to bulk copy your data from Magento 1 database to Magento 2 database. If some of your extensions have data you want to migrate, you might need to install these extensions adapted for Magento 2. In case the extensions have a different structure in Magento 2 database, use the mapping files provided with the Data Migration Tool.</li>
  <li>Reindex all Magento 2.x indexers. For details, see the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Configuration Guide</a>.</li>
  <li>Thoroughly test your Magento 2.x site.</li>
</ol>

<h4>Step 5:  Incremental updates</h4>

Now that you’ve migrated your data, you must incrementally capture data updates that are added in Magento 1 store (such as new orders, reviews and changes in customer profiles) and migrate it to Magento 2 store.

* Start the incremental migration; updates run continually. 
You can stop the updates at any time by pressing CTRL+C
* Test your Magento 2 site during this time so you can catch any issues as soon as possible.
In case you find any issues, press Control+C to stop incremental migration and start it again after issues are resolved

<div class="bs-callout bs-callout-info" id="info">
  <p>Volume check warnings may appear in case you conduct testing of your Magento 2 site and run migration process at the same time. It happens because in Magento 2 you create entities that do not exist in Magento 1 instance.</p>
</div>

<h4>Step 6: Go live</h4>

Now that your Magento 2 site is up-to-date with Magento 1 and is functioning normally, do the following to cut over to the new site:

1. Put your Magento 1 system in maintenance mode (DOWNTIME STARTS).
2. Press Control+C in the migration tool command window to stop incremental updates.
3. Start your Magento 2 cron jobs.
4. In your Magento 2 system, reindex the stock indexer. For more information, see the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Configuration Guide</a>.
5. Using a tool of your choice, hit pages in your Magento 2 system to cache pages in advance of customers using your storefront.
6. Perform any final verification of your Magento 2 site.
7. Change DNS, load balancers, and so on to point to new production hardware (DOWNTIME ENDS) 
8. Magento 2 store is ready to use. You and Your customers can resume all activities.


