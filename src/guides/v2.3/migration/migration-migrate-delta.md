---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Migrate changes
functional_areas:
  - Tools
---

## Overview

The incremental migration tool installs deltalog tables (with prefix `m2_cl_*`) and triggers (for tracking changes) in the Magento 1 database during the [migration of data]({{ page.baseurl }}/migration/migration-migrate-data.html). These deltalog tables and triggers are essential to ensuring that you migrate only the changes made in Magento 1 since the last time you migrated data. These changes are:

*  Data that customers added via [storefront](https://glossary.magento.com/storefront) (created orders, reviews, changes in customer profiles, etc.)

*  All operations with orders, products, and categories in the [Magento Admin](https://glossary.magento.com/magento-admin) panel

 {:.bs-callout-info}
All other new or updated entities entered through the Admin panel, such as attributes or CMS pages, are not included in the incremental migration and will not be migrated.

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{ page.baseurl }}/migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the incremental migration command {#migrate-data-cmd}

To start migrating incremental changes, run:

```bash
bin/magento migrate:delta [-r|--reset] [-a|--auto] {<path to config.xml>}
```

where

*  `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

*  `[-a|--auto]` is an optional argument that prevents migration from stopping when it encounters integrity check errors.

*  `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

 {:.bs-callout-info}
Incremental migration is a continuous process; it automatically restarts every 5 seconds. Use CTRL-C to abort the migration process.

## Migrate data created by 3rd party extensions {#migrate-delta-external-extensions}

In the `Delta` mode, the Data Migration Tool migrates data created only by Magento's own modules and is not responsible for the code or extensions made by third-party developers. If these extensions created data in the storefront database and the merchant wants to have this data in Magento 2 --- config files of the Data Migration Tool should be created and modified accordingly.

If an [extension](https://glossary.magento.com/extension) has its own tables, and you need to track their changes for delta migration, follow these steps:

1. Add the tables to be tracked to the `deltalog.xml` file
1. Create an additional delta class which extends the `Migration\App\Step\AbstractDelta`
1. Add the name of the newly created class to the delta mode section of `config.xml`

{:.ref-header}
Related topics

*  [Data that needs to be migrated manually]({{ page.baseurl }}/migration/migration-manually.html)
*  [End migration]({{ page.baseurl }}/migration/migration-migrate-after.html)
