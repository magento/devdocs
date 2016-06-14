---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate data
menu_title: Migrate data
menu_node:
menu_order: 2
version: 2.1
github_link21: migration/migration-migrate-data.md
---

  
<h2 id="migrate-command-data">Migrating data</h2>
When you migrate data, the Data Migration Tool verifies that tables and fields are consistent between  Magento 1 and Magento 2. If not, an error displays that lists the problematic tables and fields. These entities, for example, can belong to some extensions from Magento 1 that do not exist in the Magento 2 database.

If you encounter such an error, you can:

*	Install the corresponding extensions in Magento 2 if they exist
*	Ignore them by adding `<ignore>` tags to the `map.xml` file 

After resolving issues, run the Data Migration Tool again.

<h2 id="migrate-first">First steps</h2>
{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="migrate-data-cmd">Run the data migration command</h2>
To migrate data, use the following command:

Command usage:

	bin/magento migrate:data [-r|--reset] {<path to config.xml>}

where

`{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

`[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The Data Migration Tool saves its current progress as it runs. If errors or user intervention stop it from running, the Data Migration Tool resumes progress at the last known good state.</p>
  <p>To force the Data Migration Tool to run from the beginning, use the <code>--reset</code> argument. In that case, we recommend you restore your Magento 2 database dump to prevent duplicating previously migrated data.</p></span>
</div>

###Related topics

* <a href="{{ site.gdeurl21 }}migration/migration-migrate-delta.html">Migrate changes</a>
