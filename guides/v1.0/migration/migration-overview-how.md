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

This guide provides information about migration using Data Migration Tool that can transfer and adapt data from Magento 1 to Magento 2 stores. The migration in overall is split into three phase (or "modes"). Migration of settings, migration of main data and migration of delta. Each mode splits into steps. Every step responsible for transferring some particular data. (e.g. URL Rewrite step, EAV step, Settings step ...) At the beginning, when is run, step checks tables structure of Magento 1 and Magento 2 for their consistency. Then the actual data is transferred to Magento 2 and in the end this data is checked to ensure that everything was transferred properly.

This section previews your migration experience by providing a high-level overview of the migration tool. 

This document uses the following terminology to discuss the migration tool:

* Step: A unique migration task that must be executed in a prescribed order.
* Map: A set of rules that describe connections between Magento 1.x and Magento 2.0 data structures.
* Mode: Represented by a separate migration tool command, defines the basic mode of operation as:
  * Settings: Migrates the system configuration and website-related settings.
  * Data: Migrates database assets in bulk.
  * Delta: Migrates incremental changes (for example, orders and inventory). 

<h4>Conceptual overview</h4>

Each mode has several steps; steps might include data migration and integrity checking. Mapping files enable you to specify how custom database data is moved. (For example, if you have custom data you can move it as-is or you can rename tables and fields in the Magento 2 database). The declarative language used in the mapping files makes it as easy as possible for you to map your custom data.

All Magento 1.x core tables are automatically migrated to Magento 2.0 with no action required; you need to map only your custom database tables.

Mapping files are discussed in more detail in <cross-ref to Database configuration and mapping files>

####The following diagram illustrates the migration flow in general:

<p><img src="{{ site.baseurl }}common/images/migration-flow.png" alt="Migration Flow"></p> 
