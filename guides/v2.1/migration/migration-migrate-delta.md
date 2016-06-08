---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate changes
menu_title: Migrate changes
menu_node:
menu_order: 3
github_link21: migration/migration-migrate-delta.md
---

  
<h2 id="migrate-command-delta">Migrate incremental changes</h2>
Incremental migration enables you to migrate only the changes made in Magento 1 since the last time you migrated data. These changes are data that was added through the storefront by customers (created orders, reviews, changes in customer profiles etc.) and all operations with orders in the Magento Admin.

<h2 id="migrate-first">First steps</h2>
{% include install/first-steps-cli.html %}

In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="migrate-data-cmd">Run the incremental migration command</h2>
To migrate incremental changes, use the following command:

Command usage:

	bin/magento migrate:delta [-r|--reset] {<path to config.xml>}

where

`{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

`[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing CTRL+C.</p></span>
</div>

Please note that in this mode Data Migration Tool migrates data created only by Magento's own modules and is not responsible for the code or extensions made by third-party developers. If these extensions created some data in the storefront database and the merchant wants to have this data in Magento 2 - config files of Data Migration Tool should be created and modified. Please check <a href="{{ site.gdeurl21 }}migration/migration-tool-internal-spec.html"> Data Migration Tool Internal Specification</a> for more information.

#### Related topics

* <a href="{{ site.gdeurl21 }}migration/migration-manually.html">Data that needs to be migrated manually</a>