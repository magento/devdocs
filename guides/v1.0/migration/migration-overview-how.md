---
layout: default
group:  migration
subgroup: A_Overview
title: How migration works
menu_title: How migration works
menu_node: 
menu_order: 3
github_link: migration/migration-overview-how.md
---


<h2>How migration works</h2>

This document uses the following terminology to discuss the Data Migration Tool:

* Step: A unique migration task that must be executed in a prescribed order.
* Map: A set of rules that describe connections between Magento 1.x and Magento 2.0 data structures.
* Mode: Represented by a separate Data Migration Tool command, defines the basic mode of operation as:
  * Settings: Migrates the system configuration and website-related settings.
  * Data: Migrates database assets in bulk.
  * Delta: Migrates incremental changes (for example, orders and inventory). 

This guide provides information about migration using Data Migration Tool that can transfer and adapt data from Magento 1 to Magento 2 stores. The migration in overall is split into three phase (or "modes"). Migration of settings, migration of data and migration of delta. Each mode splits into steps. Every step responsible for transferring some particular data. (e.g. URL Rewrite step, EAV step, Settings step ...) At the beginning, when is run, step checks tables structure of Magento 1 and Magento 2 for their consistency. Then the actual data is transferred to Magento 2 and in the end this data is checked to ensure that everything was transferred properly.

This section previews your migration experience by providing a high-level overview of the Data Migration Tool. 

<h4>Conceptual overview</h4>

There are many differences between Magento 1 and Magento 2 in data structure and data format, which are stored in database. And each version of Manento 1, for example 1.8.0.0 or 1.9.0.0, has its own unique changes in data structure. The Data Migration Tool understands all these changes and can properly transform it for usage in Magento 2 store. Most of these differences are declared in so called Map files. Using the Map file a Step will know that, for example, a table from Magento 1 was renamed in Magento 2 and will be able to transfer data properly to destination table. In case when there are no differences in data structure or data format the Data Migration Tool will transfer data as is to the database of Magento 2, including data from tables created by extensions. When differences are not declared in Map files then the Data Migration Tool will not start migration process and will show an error.

Mapping files are discussed in more detail in <a href="{{ site.gdeurl }}migration/migration_mapping.html"> Database mapping.</a>

####The following diagram illustrates the migration flow in general:

<p><img src="{{ site.baseurl }}common/images/migration_flow.png" alt="Migration Flow"></p> 
