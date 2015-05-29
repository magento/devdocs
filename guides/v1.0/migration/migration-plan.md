---
layout: default
group:  migration
subgroup: Creating a migration plan
title: Creating a migration plan
menu_title: Creating a migration plan
menu_node: parent
menu_order: 2
github_link: migration/migration-plan.md
---

  
<h2>Creating a migration plan</h2>

To have a successful migration, you need to plan it and test it thoroughly. Use the following guidelines to get started.

<h4>Step 1: Review your current site</h4>

* What extensions have you installed?
* Have you identified if you need all these extensions in your new site?  (There might be old ones you can safely drop.)
* Have you determined if Magento 2 versions your extensions exist?  (Check with your extension providers to see if they have been ported yet.)
* What database assets from your extensions do you want to migrate?

<h4>Step 2: Capacity planning</h4>

Consider whether the new site needs to be designed with more hardware or a more advanced topology with better caching tiers and so on. It’s a good time to make more serious changes to get your site ready for your next level of growth.

<h4>Step 3: Build and test Magento 2</h4>

To prepare for the migration, make sure you do all of the following:

* Set up a Magento 2.0 system using a topology and design that at least matches your existing Magento 1 system.
* Make sure network connection is available between your Magento 1.x and 2.0 systems.
* To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database and use this Magento 1.x data for your migration
* Install Magento 2.0 on a system that meets our system requirements.

<h4>Step 4: Start your migration</h4>

* Stop all activity in the Magento 1.x Admin Panel (except for order management and shipping).

<pre>Activity cannot resume until your migration is complete.</pre>

* Stop all Magento 1.x cron jobs. Use the migration tool to migrate settings and websites.
* Copy your Magento 1.x media files to Magento 2.0. (You must copy these manually from  from magento1-root/media to magento2-root/pub/media directory)
* Use the migration tool to bulk copy your Magento 1.x database to your Magento 2.0 database. 
If some of your extensions have data you want to migrate, you might need to use the mapping files provided with the migration tool.
* Reindex all Magento 2.0 indexers. For details, see the Configuration Guide.
* Thoroughly test your Magento 2.0 site. 
Make sure you can place orders using all configured payment processors.

<h4>Step 5:  Incremental updates</h4>

Now that you’ve migrated your data, you must incrementally capture data updates (such as new orders, reviews and changes in customer profiles) from Magento 1.x to Magento 2.0.

* Start the incremental migration; updates run continually. 
You can stop the updates at any time by pressing Control+C.
* Test your Magento 2 site during this time so you can catch any issues as soon as possible.
In case you find any issues, press Control+C to stop incremental migration and start it again after issues are resolved.

<h4>Step 6: Go live</h4>

Now that your Magento 2 site is up-to-date with Magento 1 and is functioning normally, do the following to cut over to the new site:

1. Put your Magento 1 system in maintenance mode (DOWNTIME STARTS).
2. Press Control+C in the migration tool command window to stop incremental updates.
3. Start your Magento 2 cron jobs.
4. In your Magento 2 system, reindex the stock indexer. For more information, see the `<TBD>`.
5. Using a tool of your choice, hit pages in your Magento 2 system to cache pages in advance of customers using your storefront.
6. Perform any final verification of your Magento 2 site.
7. Change DNS, load balancers, and so on to point to new production hardware (DOWNTIME ENDS) 
8. Resume activity in the Magento Admin.


