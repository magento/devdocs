---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Migrate changes
menu_title: Migrate changes
menu_node:
menu_order: 3
functional_areas:
  - Tools
---

## Overview

The incremental migration tool installs deltalog tables (with prefix m2_cl_*) and triggers to Magento 1 database during the [migration of data]({{ page.baseurl }}/migration/migration-migrate-data.html). It enables you to migrate only the changes made in Magento 1 since the last time you migrated data. These changes are:

* data that customers added via {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} (created orders, reviews, changes in customer profiles, etc.)

* all operations with orders in the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} panel

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

2. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{ page.baseurl }}/migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the incremental migration command {#migrate-data-cmd}

To start migrating incremental changes, run:

    bin/magento migrate:delta [-r|--reset] {<path to config.xml>}

where

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

You must have the tables the migration initially created in the Magento 1 database in order to perform and retain the delta migration. If you wipe the Magento 1 database and try to do the delta, it will fail with the following error: 

    Deltalog for customer_entity is not installed

As an example, if you have Magento 1 on one server and Magento 2 on another that can't access the live Magento 1 database, you may need to copy the Magento 1 database over. In this case if you drop and overwrite the database, you will lose those special tables.

{: .bs-callout .bs-callout-info }
Incremental migration runs continuously until you stop it by pressing CTRL+C.

## Migrate data created by 3rd party extensions {#migrate-delta-external-extensions}

In the `Delta` mode, the Data Migration Tool migrates data created only by Magento's own modules and is not responsible for the code or extensions made by third-party developers. If these extensions created data in the storefront database and the merchant wants to have this data in Magento 2 --- config files of the Data Migration Tool should be created and modified accordingly.

If an {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} has its own tables, and you need to track their changes for delta migration, follow these steps:

1. Add the tables to be tracked to the `deltalog.xml` file

2. Create an additional delta class which extends the `Migration\App\Step\AbstractDelta`

3. Add the name of the newly created class to the delta mode section of `config.xml`

## Related topics

* [Data that needs to be migrated manually]({{ page.baseurl }}/migration/migration-manually.html)

* [End migration]({{ page.baseurl }}/migration/migration-migrate-after.html)
