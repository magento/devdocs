---
group: migration
title: How migration works
redirect_from: /guides/v1.0/migration/migration-overview-how.html
---

This topic provides a high-level overview of the Data Migration Tool.

## Terminology

This document uses the following terminology to discuss the Data Migration Tool:

* **Modes** - an ordered set of operations for migrating data from Magento 1.x to Magento 2.x.
* **Steps** - the tasks in a mode that define the kinds of data to migrate.
* **Stages** - the subtasks in step that actually migrates the data (validating, transferring, and verifying).
* **Map file** - set of rules that describe connections between Magento 1.x and Magento 2.x data structures for completing the stages.

## Modes

This guide provides information about how data is migrated from Magento 1 to Magento 2 using the Data Migration Tool. This tool transfers and adapts data from Magento 1 to Magento 2 by splitting the migration into three *modes* which must be run in this order:

1. **Settings Mode**: migrates the system configuration and website-related settings.
2. **Data Mode**: migrates database assets in bulk.
3. **Delta Mode**: migrates incremental changes (changes since the last run), such as orders and inventory.

![Migration Modes]

## Steps
Each mode divides it migration tasks into *steps*, and each step is responsible for transferring a particular type of data. For example, in the Settings mode, there are two steps used to migrate the all the settings data: Stores step and Settings step. For details about the data migrated in each of these steps (as well as for steps in the other modes), see [Data Migration Tool TechnicalSpecification].

![Migration Overview]

## Stages
Each step migrates its data in three *stages*: 
1. Integration Check Stage: checks that the table structures and data types match between Magento 1 and Magento 2.
2. Data Transfer Stage: transfers the data.
3. Volume Check Stage: checks that the number of records between the Magento 1 and Magento 2 tables match.

![Migration Steps]

## Map files
Each stage within a step uses a *map file* to transform data (if necessary) between the Magento 1.x and 2.x database structures.

For example, when you transform data from a {{site.data.var.ce}} 1.8.0.0 database to {{site.data.var.ce}} 2.x.x, the map file accounts for the fact that a table was renamed, and renames it accordingly in the destination database. If there are no differences in data structure or data format, the Data Migration Tool transfers it as-is, including data from tables created by extensions, to the Magento 2 database.

When differences are not declared in map files, then the Data Migration Tool displays an error and does not start.

Mapping files are discussed in more detail in [Data Migration Tool TechnicalSpecification].

## Migration flow diagram

<p><img src="{{ site.baseurl }}/common/images/migration_flow.png" alt="Migration Flow"></p>


[Data Migration Tool TechnicalSpecification]: {{ page.baseurl }}/migration/migration-tool-internal-spec.html

[Migration Modes]: ./images/MigrationModes.png
[Migration Overview]: ./images/MigrationOverview.png
[Migration Steps]: ./images/MigrationSteps.png
