---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate using the data migration tool
menu_title: Migrate using data migration tool
menu_node: parent
menu_order: 4
version: 2.0
github_link: migration/migration-migrate.md
redirect_from: /guides/v1.0/migration/migration-migrate.html
---

#### Contents
*	<a href="#migration-command-gen">General rules for successful migration</a>
*	<a href="#migration-command-run">Run the Data Migration Tool</a>
*	<a href="#migration-command-run-syntax">Command syntax</a>

<h2 id="migration-command-gen">General rules for successful migration</h2>

During the time you're migrating:

*	Do not make any changes in the Magento 1 Admin except for order management (shipping, creating invoice, credit memos etc.)
*	Stop all Magento 1 cron jobs
*	Do not alter any code
*	Do not make changes in the Magento 2 Admin and storefront

All operations in Magento 1 storefront are allowed at this time.

<h2 id="migration-command-run">Run the Data Migration Tool</h2>
This section discusses how to run the migration tool to migrate settings, data, or incremental changes.

<h3 id="migration-command-run-first">First steps</h3>
{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h3 id="migration-command-run-syntax">Command syntax</h3>
Command syntax:

	bin/magento migrate:<mode> [-r|--reset] {<path to config.xml>}

where

`<mode>` is <a href="{{page.baseurl}}migration/migration-migrate-settings.html">`settings`</a>, <a href="{{page.baseurl}}migration/migration-migrate-data.html">`data`</a>, or <a href="{{page.baseurl}}migration/migration-migrate-delta.html">`delta`</a>

`{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

`[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Logs are written to the <code>&lt;your Magento install dir>/var/</code> directory.</p></span>
</div>

The following sections should be performed in a specific order:

1.	<a href="{{page.baseurl}}migration/migration-migrate-settings.html">Migrate settings</a>
3.	<a href="{{page.baseurl}}migration/migration-migrate-data.html">Migrate data</a>
4.	<a href="{{page.baseurl}}migration/migration-migrate-delta.html">Migrate changes</a>

