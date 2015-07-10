---
layout: default
group:  migration
subgroup: Migrate using data migration tool
title: Migrate Data
menu_title: Migrate Data
menu_node:
menu_order: 2
github_link: migration/migration-migrate.md
---

  
<h2 id="migrate-command-data">Migrating data</h2>
When you migrate data, the Data Migration Tool verifies that tables and fields are consistent between  Magento 1 and Magento 2. If not, an error displays that lists the problematic tables and fields. These entities, for example, can belong to some extensions from Magento 1 that do not exist in the Magento 2 database.

If you encounter such an error, you can:

*	Install the corresponding extensions in Magento 2 if they exist
*	Ignore them by adding `<ignore>` tags to the `map.xml` file 

After resolving issues, run the Data Migration Tool again.

To run the Data Migration Tool, use the following command:

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate data --config=<path to config.xml> [--reset]

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The Data Migration Tool saves its current progress as it runs. If errors or user intervention stop it from running, the Data Migration Tool resumes progress at the last known good state.</p>
  <p>To force the Data Migration Tool to run from the beginning, use the <code>--reset</code> argument. In that case, we recommend you restore your Magento 2 database dump to prevent duplicating previously migrated data.</p></span>
</div>