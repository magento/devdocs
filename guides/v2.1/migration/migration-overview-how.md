---
layout: default
group:  migration
subgroup: A_Overview
title: How migration works
menu_title: How migration works
menu_node: 
menu_order: 3
github_link21: migration/migration-overview-how.md
---


<h2>How migration works</h2>

This document uses the following terminology to discuss the Data Migration Tool:

* Step: A unique migration task that must be executed in a prescribed order
* Map: A set of rules that describe connections between Magento 1.x and Magento 2.0 data structures
* Mode: Represented by a separate Data Migration Tool command, defines the basic mode of operation as:
  * Settings: Migrates the system configuration and website-related settings
  * Data: Migrates database assets in bulk
  * Delta: Migrates incremental changes (for example, orders and inventory)

This guide provides information about migration using Data Migration Tool that can transfer and adapt data from Magento 1 to Magento 2 stores. The migration in overall is split into three phases (or "modes"): 

*	Configuration settings
*	Data 
*	Delta (that is, changes since the last run) 

Each mode is divided into steps, each of which is responsible for transferring particular data (for example, URL rewrite step, EAV step, settings step, and so on). At the begin of a run, a step checks the table structures of Magento 1 and Magento 2 for consistency. Then the actual data is transferred to Magento 2. In the end, this data is verified.

This section previews your migration experience by providing a high-level overview of the Data Migration Tool. 

<h4>Conceptual overview</h4>
The data migration tool recognizes the differences in database structure between Magento 1.x versions. Most of these database structural differences are declared in *map files*. Each step in the process uses map files to transform data for use in your Magento 2 store.

For example, when you transform data from a Magento CE 1.8.0.0 database to Magento 2.0.4, the map file accounts for the fact that a table was renamed and renames it accordingly in the destination database. If there are no differences in data structure or data format, the Data Migration Tool transfers it as-is to the Magento 2 database, including data from tables created by extensions. 

When differences are not declared in map files, then the Data Migration Tool displays an error and does not start.

Mapping files are discussed in more detail in <a href="{{ site.gdeurl21 }}migration/migration-tool-internal-spec.html"> Data Migration Tool Internal Specification.</a>

####The following diagram illustrates the migration flow in general:

<p><img src="{{ site.baseurl }}common/images/migration_flow.png" alt="Migration Flow"></p> 
