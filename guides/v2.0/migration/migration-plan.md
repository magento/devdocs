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

## {{page.menu_title}}
{:.no_toc}

To migrate successfully and avoid issues, you need to thourougly plan and test your migration. We hope the guidelines below will help.

* TOC
{:toc}

## Step 1: Review extensions on your current site

* What extensions have you installed?

* Have you identified if you need all these extensions on your new site?  (There might be old ones you can safely remove.)

* Have you determined if Magento 2 versions of your extensions exist?  (Visit [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"} to find the latest versions or contact your extension provider.)

* What database assets from your extensions do you want to migrate?

## Step 2: Plan capacity

Consider whether the new site needs to be designed with more hardware or a more advanced topology with better caching tiers and so on. It’s a good time to make more serious changes to get your site ready for your next level of growth.

## Step 3: Build and test Magento 2

To prepare for the migration, make sure you do all of the following:

* Set up a Magento 2.x system using a topology and design that at least matches your existing Magento 1 system

* To provide redundancy in the event of unexpected issues, we advise you to replicate your Magento 1.x database and use this Magento 1.x data for your migration

* Install Magento 2.x (with all modules of this release) on a system that meets our system requirements

## Step 4: Start your migration

1. Make sure that the Data Migration Tool has a network access to connect to Magento 1 and Magento 2 databases. Open ports in your firewall.

2. Stop all activity in the Magento 1.x Admin Panel (except for order management, such as shipping, creating invoice, credit memos etc.). **Note:** activity cannot resume until your Magento 2 store goes live.

3. Stop all Magento 1.x cron jobs.

4. Use the Data Migration Tool to migrate settings and websites.

5. Copy your Magento 1.x media files to Magento 2.x. (You must copy these manually from  from magento1-root/media to magento2-root/pub/media directory).

6. Use Data Migration Tool to bulk copy your data from Magento 1 database to Magento 2 database. If some of your extensions have data you want to migrate, you might need to install these extensions adapted for Magento 2. In case the extensions have a different structure in Magento 2 database, use the mapping files provided with the Data Migration Tool.

7. Reindex all Magento 2.x indexers. For details, see the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Configuration Guide</a>.

8. Thoroughly test your Magento 2.x site.

    Note that after such testing the next step (Incremental data update) might not work properly.

## Step 5: Update incremental data

Now that you’ve migrated your data, you must incrementally capture data updates that are added in Magento 1 store (such as new orders, reviews and changes in customer profiles) and migrate it to Magento 2 store.

* Start the incremental migration; updates run continually.
You can stop the updates at any time by pressing `Ctrl+C`

* Test your Magento 2 site during this time so you can catch any issues as soon as possible.
In case you find any issues, press `Ctrl+C` to stop incremental migration and start it again after issues are resolved

<div class="bs-callout bs-callout-info" id="info">
  <p>Volume check warnings may appear in case you conduct testing of your Magento 2 site and run migration process at the same time. It happens because in Magento 2 you create entities that do not exist in Magento 1 instance.</p>
</div>

## Step 6: Go live

Now that your Magento 2 site is up-to-date with Magento 1 and is functioning normally, do the following to cut over to the new site:

1. Put your Magento 1 system in maintenance mode (DOWNTIME STARTS).
2. Press Control+C in the migration tool command window to stop incremental updates.
3. Start your Magento 2 cron jobs.
4. In your Magento 2 system, reindex the stock indexer. For more information, see the <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-index.html">Configuration Guide</a>.
5. Using a tool of your choice, hit pages in your Magento 2 system to cache pages in advance of customers using your storefront.
6. Perform any final verification of your Magento 2 site.
7. Change DNS, load balancers, and so on to point to new production hardware (DOWNTIME ENDS)
8. Magento 2 store is ready to use. You and your customers can resume all activities.
