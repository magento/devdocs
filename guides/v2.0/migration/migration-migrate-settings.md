---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate settings
menu_title: Migrate settings
menu_node:
menu_order: 1
version: 2.0
github_link: migration/migration-migrate-settings.md
redirect_from: /guides/v1.0/migration/migration-migrate-settings.html
---

## {{page.menu_title}}
{:.no_toc}

* TOC
{:toc}

<h2 id="migrate-command-settings">Migrating settings</h2>

You should migrate settings first. This mode migrates stores; websites; and different system configuration like shipping, payment, some tax settings etc.

If necessary, here is how to change how settings are migrated:

1.	Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to the following directory:

		<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<edition-to-edition>

	For example, if Magento 2 is installed in `/var/www/html`, you'll find `settings.xml.dist` in one of the following directories:

		/var/www/html/vendor/magento/data-migration-tool/etc/ce-to-ee
		/var/www/html/vendor/magento/data-migration-tool/etc/ee-to-ee
		/var/www/html/vendor/magento/data-migration-tool/etc/ce-to-ce

3. 	Enter the following command to create `settings.xml` from the provided sample:

		cp settings.xml.dist settings.xml
2. Make your changes in `settings.xml`.
3. Make changes to the `<settings_map_file>` tag in `<ce or ee version>/config.xml` to specify the new name of the settings file.

## Run the settings migration command {#migrate-data-cmd}

Before running the command, make the necessary preparations: log in as Magento file system owner, change to the Magento `/bin` directory or make sure it is added to your system PATH, and so on. See the [First steps]({{page.baseurl}}migration/migration-migrate.html#migration-command-run-first) section for more details.

To migrate settings, run:

	bin/magento migrate:settings [-r|--reset] {<path to config.xml>}

where:

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command does not migrate all configuration settings. Verify all settings in the Magento 2 Admin before proceeding.</p></span>
</div>

## Next step

* <a href="{{page.baseurl}}migration/migration-migrate-data.html">Migrate data</a>
