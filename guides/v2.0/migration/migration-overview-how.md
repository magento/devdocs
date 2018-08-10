---
group: migration
subgroup: A_Overview
title: How migration works
menu_title: How migration works
menu_node:
menu_order: 3
version: 2.0
redirect_from: /guides/v1.0/migration/migration-overview-how.html
functional_areas:
  - Tools
---

## Terminology

This document uses the following terminology to discuss the Data Migration Tool:

* **Step:** A unique migration task that must be executed in a prescribed order

* **Map:** A set of rules that describe connections between Magento 1.x and Magento 2.x data structures

* **Mode:** Represented by a separate Data Migration Tool command, defines the basic mode of operation as:

  * *Settings:* Migrates the system configuration and website-related settings

  * *Data:* Migrates database assets in bulk

  * *Delta:* Migrates incremental changes (for example, orders and inventory)

## Migration modes (phases)

This guide provides information about migration using the Data Migration Tool that can transfer and adapt data from Magento 1 to Magento 2 stores. The migration in overall is split into three phases (or "modes"):

*	Configuration settings

*	Data

*	Delta (changes since the last run)

Each mode is divided into steps, each of which is responsible for transferring particular data (for example, {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} rewrite step, EAV step, settings step, and so on). At the begin of a run, a step checks the table structures of Magento 1 and Magento 2 for consistency. Then the actual data is transferred to Magento 2. In the end, this data is verified.

This section previews your migration experience by providing a high-level overview of the Data Migration Tool.

## Conceptual overview

The data migration tool recognizes the differences in database structure between Magento 1.x versions. Most of these database structural differences are declared in *map files*. Each step in the process uses map files to transform data for use in your Magento 2 store.

For example, when you transform data from a {{site.data.var.ce}} 1.8.0.0 database to {{site.data.var.ce}} 2.x.x, the map file accounts for the fact that a table was renamed and renames it accordingly in the destination database. If there are no differences in data structure or data format, the Data Migration Tool transfers it as-is to the Magento 2 database, including data from tables created by extensions.

When differences are not declared in map files, then the Data Migration Tool displays an error and does not start.

Mapping files are discussed in more detail in <a href="{{ page.baseurl }}/migration/migration-tool-internal-spec.html"> Data Migration Tool Technical Specification.</a>

## Migration flow diagram

<p><img src="{{ site.baseurl }}/common/images/migration_flow.png" alt="Migration Flow"></p>
