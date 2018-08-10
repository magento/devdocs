---
group: migration
title: How migration works
version: 2.1
redirect_from: /guides/v1.0/migration/migration-overview-how.html
---

## Terminology

This document uses the following terminology to discuss the Data Migration Tool:

* **Step** - unique migration task that must be executed in a prescribed order
* **Map** - set of rules that describe connections between Magento 1.x and Magento 2.x data structures
* **Mode** - represented by a separate Data Migration Tool command; defines the basic mode of operation as:
  * *Settings* - migrates the system configuration and website-related settings
  * *Data* - migrates database assets in bulk
  * *Delta* - migrates incremental changes, such as orders and inventory

## Migration modes (phases)

This guide provides information about migration using the Data Migration Tool. This tool transfers and adapts data from Magento 1 to Magento 2 stores by splitting the migration into three phases (or modes):

*	Configuration settings
*	Data
*	Delta (changes since the last run)

Each mode is divided into steps, each responsible for transferring particular data, such as the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %}, the rewrite step, the EAV step, and the settings step.

At the beginning of a run, a step checks the table structures of Magento 1 and Magento 2 for consistency, then the actual data is transferred to Magento 2 and verified.

This section previews your migration experience by providing a high-level overview of the Data Migration Tool.

## Conceptual overview

The data migration tool recognizes the differences in database structure between Magento 1.x and 2.x versions. Most of these database structural differences are declared in map files. Each step in the process uses map files to transform data for use in your Magento 2 store.

For example, when you transform data from a {{site.data.var.ce}} 1.8.0.0 database to {{site.data.var.ce}} 2.x.x, the map file accounts for the fact that a table was renamed, and renames it accordingly in the destination database. If there are no differences in data structure or data format, the Data Migration Tool transfers it as-is, including data from tables created by extensions, to the Magento 2 database.

When differences are not declared in map files, then the Data Migration Tool displays an error and does not start.

Mapping files are discussed in more detail in <a href="{{ page.baseurl }}/migration/migration-tool-internal-spec.html"> Data Migration Tool Technical Specification.</a>

## Migration flow diagram

<p><img src="{{ site.baseurl }}/common/images/migration_flow.png" alt="Migration Flow"></p>
