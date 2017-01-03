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

## Overview

The `Settings` mode migrates stores, websites, and system configuration like shipping, payment, tax settings, etc.
According to our data migration [order]({{page.baseurl}}migration/migration-migrate.html#migration_order), you should migrate settings first.

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html).

2. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{page.baseurl}}migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the settings migration command {#migrate-data-cmd}

To start migrating settings, run:

	bin/magento migrate:settings [-r|--reset] {<path to config.xml>}

where:

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command does not migrate all configuration settings. Verify all settings in the Magento 2 Admin before proceeding.</p></span>
</div>

The `Migration completed` message is displayed after the settings are transferred successfully.

## Configure custom migration rules

You may ignore, rename or change the system configurations when migrating settings. For this, specify your custom rules in the `settings.xml` file.

1.	Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a>.

2.	Change to the following directory:

		<your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<edition-to-edition>

	For example, if Magento 2 is installed in `/var/www/html`, you'll find `settings.xml.dist` in one of the following directories:

		/var/www/html/vendor/magento/data-migration-tool/etc/ce-to-ee
		/var/www/html/vendor/magento/data-migration-tool/etc/ee-to-ee
		/var/www/html/vendor/magento/data-migration-tool/etc/ce-to-ce

3. To create a `settings.xml` file from the provided sample, run:

		cp settings.xml.dist settings.xml

4. Make your changes in `settings.xml`.

5. Specify the new name of the settings file for mapping. To do that, change the `<settings_map_file>` tag in the `<ce or ee version>/config.xml` file.

For more details, see the [Settings migration mode]({{page.baseurl}}migration/migration-tool-internal-spec.html#settings-migration-mode) section of the Tool's [specification]({{page.baseurl}}migration/migration-tool-internal-spec.html).

## Next migration step

* <a href="{{page.baseurl}}migration/migration-migrate-data.html">Migrate data</a>
