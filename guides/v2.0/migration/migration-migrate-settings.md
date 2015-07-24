---
layout: default
group:  migration
subgroup: Migrate using data migration tool
title: Migrate Settnigs
menu_title: Migrate Settnigs
menu_node:
menu_order: 1
github_link: migration/migration-migrate-settings.md
redirect_from: /guides/v1.0/migration/migration-migrate-settings.html
---

  
<h2 id="migrate-command-settings">Migrating settings</h2>
You should migrate settings first. This mode migrates stores; websites; and different system configuration like shipping, payment, some tax settings etc. 

To change how settings are migrated:

1. Rename or copy `settings.xml.dist` in a folder `"etc/<ce or ee version>/"` to remove the .dist extension.
2. Make your changes in settings.xml file.
3. Make changes to config.xml `<settings_map_file>` tag so it would have a new file name of the settings file.

Command usage:

	cd <your Magento 2 install dir>/vendor/magento/data-migration-tool/bin
	php migrate settings --config=<path to config.xml>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command does not migrate all configuration settings. Verify all settings in the Magento 2 Admin before proceeding.</p></span>
</div>

###Related topics

* <a href="{{ site.gdeurl }}migration/migration-migrate-data.html">Migrate data</a>