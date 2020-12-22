---
group: php-developer-guide
title: Declarative Schema Overview
---

Declarative Schema aims to simplify the Magento installation and upgrade processes. Previously, developers had to write database scripts in PHP for each new version of Magento. Various scripts were required for

*  Installing and upgrading the database schema
*  Installing and upgrading data
*  Invoking other operations that are required each time Magento was installed or upgraded

When a customer upgrades Magento to a version several releases ahead of the installed version, the upgrade script for each intermediate release still executes. Developers were required to fully understand what each install and upgrade script contained. They needed to account for this complexity when creating extensions.

The new declarative schema approach allows developers to declare the final desired state of the database and has the system adjust to it automatically, without performing redundant operations. Developers are no longer forced to write scripts for each new version. In addition, this approach allows data be deleted when a module is uninstalled.

{:.bs-callout-info}
**Implementing declarative schema is not a requirement for Magento 2.3.** However, upgrade scripts will be phased out in favor of declarative schema.

To prepare a module for declarative schema, you must

*  Develop a data patch and/or a schema patch
*  Configure the declarative schema for your module
*  Convert upgrade scripts to declarative schema (This step applies only to modules that have been released using upgrade scripts.)

Once a module is converted to the declarative schema approach, it cannot be reverted to upgrade scripts.

## Data patch terminology

*  *Data patch* - A class that contains data modification instructions. It can have dependencies on other data or schema patches.

*  *Revertable data patch* - A `data patch` that contains a `revert()` method (see [Reverting data patches]({{ page.baseurl }}/extension-dev-guide/declarative-schema/data-patches.html#revertingDataPatches)) with provided operations that revert revertable changes caused by the module. Revertable operations are usually related to changes in the database.

*  *Migration* - A type of non-revertable data patch that can be applied, but not reverted. Any complex operation, such as one that contains an application layer (for example, Collections or Serializers) is non-revertable. SQL delete operations are non-revertable because they can cause triggering.

*  *Schema patch* - A class that contains custom schema modification instructions. Schema patches are used along with declarative schema, but these patches allow complex operations such as:

   *  Adding triggers, stored procedures, functions
   *  Performing data migration with inside DDL operations
   *  Renaming tables, columns, and other entities
   *  Adding partitions and options to a table

*  *Revertable schema patch* - A `schema patch` that contains a `revert()` method with the provided revert functionality. Like in the `Revertable data patch`, the revert functionality of the `schema patch` affects changes in the database only.
