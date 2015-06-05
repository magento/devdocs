---
layout: default
group:  migration
subgroup: Migrate using data migration tool
title: Migrate using data migration tool
menu_title: Migrate using data migration tool
menu_node: parent
menu_order: 4
github_link: migration/migration-migrate.md
---

  
<h2 id="migration-command">Migrating settings, data and changes</h2>

Run the migration tool from the `<your Magento 2 install dir>/vendor/magento/data-migration-tool/bin` directory.

Command syntax:

	php migrate <mode> --config=path/to/config.xml [options]

where `<mode>` can be:

*	`data` to migrate database data
*	`delta` to migrate data that is added to the database since your ran the tool with the `data` option
*	`settings` to migrate Magento Admin Panel settings

where `[options]` can be:

*	`--reset` to start the migration from the beginning
*	`--config <value>` path to `config.xml`
*	`--verbose <level>` DEBUG, INFO, NONE (default is INFO)
*	`--help` Displays help for the command

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Logs are written to the <code>&lt;your Magento install dir>/vendor/magento/migration-tool/var</code> directory.</p></span>
</div>

The following sections should be performed in a specific order:

1.	<a href="#migrate-command-settings">Migrating settings</a>
3.	<a href="#migrate-command-data">Migrating data</a>
4.	<a href="#migrate-command-delta">Incremental migration (delta mode)</a>