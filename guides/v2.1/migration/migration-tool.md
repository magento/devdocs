---
layout: default
group:  migration
subgroup: C_Data migration tool
title: Data migration tool
menu_title: Data migration tool
menu_node: parent
menu_order: 3
github_link21: migration/migration-tool.md
---

  
<h2>Data Migration Tool</h2>

To assist you with your migration, Magento provides the Data Migration Tool, a command-line interface (CLI) that provides verification, progress tracking, logging, and testing functions. The migration tool operates in three modes to transfer and adapt data from Magento 1 to Magento 2:

* Settings mode: Migrates all possible configuration settings from Magento 1 to Magento 2

* Data mode: Bulk migrates data from your Magento 1 database to your Magento 2 database

* Delta mode: Incremental "catch-up" migration after the initial bulk data migration

Each mode consists of several steps that perform tasks specific to the mode. (For example, URL rewrite step, EAV step, settings step.) Each step initially checks data integrity in the Magento 1 and Magento 2 databases and, after verification succeeds, performs the transfer, and verifies data again after it's done.
