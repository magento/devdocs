---
group: migration-guide
title: How migration works
---

This topic provides a high-level overview of how data is migrated from Magento 1 to Magento 2 using the Data Migration Tool.

## Terminology

*  **Modes** - an ordered set of operations for migrating data from Magento 1.x to Magento 2.x.
*  **Steps** - the tasks in a mode that define the kinds of data to migrate.
*  **Stages** - the tasks in step that validate, transfer, and verify the data.
*  **Map files** - XML files that define the rules and connections between Magento 1.x and Magento 2.x data structures for completing the stages.

## Modes

The Data Migration Tool splits the migration process into three phases or *modes* in order to transfer and adapt data from Magento 1.x to Magento 2.x. The three modes are listed here and must be run in this order:

1. **Settings Mode**: migrates the system configuration and website-related settings.
1. **Data Mode**: migrates database assets in bulk.
1. **Delta Mode**: migrates incremental changes (changes since the last run), such as new customers and orders.

![Migration Modes]

## Steps

The Data Migration Tool uses a list of *steps* within each mode to migrate a particular type of data. For example, in the Settings mode, there are two steps used to migrate the all the settings data: the Stores step and the Settings step. Details about the specific data that is migrated in each of these steps (as well as for steps in the other modes), can be found in the [Data Migration Tool Technical Specification].

![Migration Overview]

## Stages

Within each step are three *stages* that are always executed in this order to ensure the data gets properly migrated:

1. **Integrity Check**: Compares the table field names, types, and other info to verify compatibility between Magento 1 and 2 data structures.
1. **Data Transfer**: Transfers the data table by table from Magento 1 and 2.
1. **Volume Check**: Compares the number of records between tables to verify that the transfer was successful.

![Migration Steps]

## Map files

At the lowest level of the migration processes are the XML *map files*. The Data Migration Tool uses map files within the stages of a step to transform different data structures between the Magento 1.x and 2.x tables.

For example, when you transform data from a {{site.data.var.ce}} 1.8.0.0 database to {{site.data.var.ce}} 2.x.x, the map file accounts for the fact that a table was renamed, and renames it accordingly in the destination database. If there are no differences in data structure or data format, the Data Migration Tool transfers it as-is, including data from tables created by extensions, to the Magento 2 database.

When differences are not declared in map files, then the Data Migration Tool displays an error and does not start.

Mapping files are discussed in more detail in [Data Migration Tool Technical Specification].

## Migration flow diagram

![Migration Flow]

<!-- Link definitions -->
[Data Migration Tool Technical Specification]: {{ page.baseurl }}/migration/migration-tool-internal-spec.html

[Migration Modes]: {{site.baseurl}}/common/images/MigrationModes2.png
{:height="220px" width="930px"}

[Migration Overview]: {{site.baseurl}}/common/images/MigrationOverview2.png
{:height="627px" width="930px"}

[Migration Steps]: {{site.baseurl}}/common/images/MigrationSteps2.png
{:height="247px" width="930px"}

[Migration Flow]: {{site.baseurl}}/common/images/migration_flow.png
