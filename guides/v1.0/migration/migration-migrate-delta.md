---
layout: default
group:  migration
subgroup: Migrate using data migration tool
title: Migrate Changes
menu_title: Migrate Changes
menu_node:
menu_order: 3
github_link: migration/migration-migrate.md
---

  
<h2 id="migrate-command-delta">Migrate changes in delta mode</h2>
Incremental migration enables you to migrate only the changes made in Magento 1 since you migrated data. These are all data that was added on Storefront by customers (created orders, reviews, changes in customer profiles etc.) and all operations with orders in Admin Panel.

Command usage:

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate delta --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Incremental migration runs continuously until you stop it by pressing CTRL+C.</p></span>
</div>

Please note, that in this mode Data Migration Tool migrates data created only by Magento's own modules and is not responsible for the code or extensions made by third party developers. If these extensions created some data in Storefront database and the merchant wants to have this data in Magento 2 - config files of Data Migration Tool should be created and modified. Please check <a href="{{ site.gdeurl }}migration/migration-tool-internal-spec.html"> Data Migration Tool Internal Specification</a> for more information.