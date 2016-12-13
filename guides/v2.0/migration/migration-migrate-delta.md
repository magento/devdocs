---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate changes
menu_title: Migrate changes
menu_node:
menu_order: 3
version: 2.0
github_link: migration/migration-migrate-delta.md
redirect_from: /guides/v1.0/migration/migration-migrate-delta.html
---

## Overview

Incremental migration enables you to migrate only the changes made in Magento 1 since the last time you migrated data. These changes are:

* data that customers added via storefront (created orders, reviews, changes in customer profiles, etc.)

* all operations with orders in the Magento Admin panel

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html).

2. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{page.baseurl}}migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the incremental migration command {#migrate-data-cmd}

To start migrating incremental changes, run:

    bin/magento migrate:delta [-r|--reset] {<path to config.xml>}

where;

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing CTRL+C.</p></span>
</div>

## Migrate data created by 3rd party extensions {#migrate-delta-external-extensions}

In the `Delta` mode, the Data Migration Tool migrates data created only by Magento's own modules and is not responsible for the code or extensions made by third-party developers. If these extensions created data in the storefront database and the merchant wants to have this data in Magento 2 --- config files of the Data Migration Tool should be created and modified accordingly.

If an extension has its own tables, and you need to track their changes for delta migration, follow these steps:

1. Add the tables to be tracked to the `deltalog.xml` file

2. Create an additional delta class which extends the `Migration\App\Step\AbstractDelta`

3. Add the name of the newly created class to the delta mode section of `config.xml`

## Related topics

* <a href="{{page.baseurl}}migration/migration-manually.html">Data that needs to be migrated manually</a>
