---
layout: default
group: extension-dev-guide
title: Declarative Schema Overview
version: 2.3
github_link: extension-dev-guide/declarative-schema/index.md
---

Declarative Schema aims to simplify the Magento installation and upgrade processes. Previously, developers had to write database scripts in PHP for each new version of Magento. Various scripts were required for

* Installing and upgrading the database schema
* Installing and upgrading data
* Invoking other operations that are required each time Magento was installed or upgraded.

When upgrading Magento several versions ahead, the script for each intermediate version still executed. As a result, developers needed to understand this process and account for this complexity when creating extensions, for example.

The new declarative schema approach simply allows developers to declare the final desired state of the database and has the system adjust to it automatically, without performing redundant operations. Developers are no longer forced to write scripts for each new version. In addition, this approach allows data be deleted when a module is uninstalled.


<div class="bs-callout bs-callout-info" id="info" markdown="1">
**Implementing declarative schema is not a requirement for Magento 2.3.** However, upgrade scripts will be phased out in favor of declarative schema.
</div>

To prepare a module for declartive schema, you must

* Develop a data patch and/or a schema patch.
* Configure the declarative schema for your module
* Convert upgrade scripts to declarative schema. (This step applies only to modules that have been released using upgrade scripts.)

Once a module is converted to the declarative schema approach, it cannot be reverted to upgrade scripts.

## Data patch terminology

*Data patch* - A class that contains data modification instructions. It can have dependencies to other data or schema patches.

*Revertable data patch* - A patch that can be reverted during module deinstallation or path deinstallation. Revertable operations are Data Query Language (DQL) and partially Data Markup Language (DML) operations: INSERT, UPDATE.

**Note to reviewer** _Make sure I spelled out the meaning of DQL and DML correctly._

*Migration* - A type of non-revertable data patch that can be applied, but not reverted. Any complex operation, such one that contains an application layer (for example, Collections or Serializers) is non-revertable. SQL delete operations are non-revertable because they can cause triggering.

*Schema patch* - A class that contains custom schema modification instructions. Schema patches are used along with declarative schema, but these patches allow complex operations such as:

* Adding triggers, stored procedures, functions
* Performing data migration with inside DDL operations
* Renaming tables, columns, and other entities
* Adding partitions and options to a table
