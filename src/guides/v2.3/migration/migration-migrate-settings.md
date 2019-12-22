---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Migrate settings
menu_title: Migrate settings
menu_node:
menu_order: 1
functional_areas:
  - Tools
---

## Overview

The `Settings` mode migrates stores, websites, and system configuration like shipping, payment, tax settings, etc.
According to our data migration [order]({{ page.baseurl }}/migration/migration-migrate.html#migration_order), you should migrate settings first.

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

1. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

 {:.bs-callout-info}
Ensure Magento is deployed in default mode. Developer mode can cause validation errors in the migration tool.

See the [First steps]({{ page.baseurl }}/migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the settings migration command {#migrate-data-cmd}

To start migrating settings, run:

```bash
bin/magento migrate:settings [-r|--reset] {<path to config.xml>}
```

where:

*  `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration

*  `{<path to config.xml>}` is the absolute file system path to the migration tool's [`config.xml`]({{page.baseurl}}/migration/migration-tool-configure.html#migration-configure) file; this argument is required.

 {:.bs-callout-info}
This command does not migrate all configuration settings. Verify all settings in the Magento 2 [Admin](https://glossary.magento.com/admin) before proceeding.

The `Migration completed` message is displayed after the settings are transferred successfully.

## Configure custom migration rules

You may ignore, rename or change the system configurations when migrating settings. For this, specify your custom rules in the `settings.xml` file.

1. Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).

1. Change to the following directory:

       <your Magento 2 install dir>/vendor/magento/data-migration-tool/etc/<edition-to-edition>

   For example, if Magento 2 is installed in `/var/www/html`, you'll find `settings.xml.dist` in one of the following directories:

        /var/www/html/vendor/magento/data-migration-tool/etc/opensource-to-commerce
        /var/www/html/vendor/magento/data-migration-tool/etc/commerce-to-commerce
        /var/www/html/vendor/magento/data-migration-tool/etc/opensource-to-opensource

1. To create a `settings.xml` file from the provided sample, run:

   ```bash
   cp settings.xml.dist settings.xml
   ```

1. Make your changes in `settings.xml`.

1. To specify the new name of the settings file for mapping, change the `<settings_map_file>` tag in the `path/to/config.xml` file.

For more details, see the [Settings migration mode]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#settings-migration-mode) section of the Tool's [specification]({{ page.baseurl }}/migration/migration-tool-internal-spec.html).

## Next migration step

*  [Migrate data]({{ page.baseurl }}/migration/migration-migrate-data.html)
