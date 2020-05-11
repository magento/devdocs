---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Migrate using Data Migration Tool
menu_title: Migrate using Data Migration Tool
menu_node: parent
menu_order: 4
functional_areas:
  - Tools
---

## General rules for successful migration {#migration-command-gen}

Before you start migration, stop all Magento 1 cron jobs.

During the migration process, **do not:**

1. Make any changes in the Magento 1 [Admin](https://glossary.magento.com/admin) except for order management (shipping, creating invoice, credit memos, etc.)

1. Alter any code

1. Make changes in the Magento 2 Admin and [storefront](https://glossary.magento.com/storefront)

{:.bs-callout-tip}
All operations in Magento 1 storefront are allowed at this time.

## Run Data Migration Tool {#migration-command-run}

This section shows how to run the Data Migration Tool to migrate settings, data, or incremental changes.

### First steps {#migration-command-run-first}

{% include install/first-steps-cli.md %}

In addition to the command arguments mentioned here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common)

### Command syntax {#migration-command-run-syntax}

Below is a typical command example:

```bash
bin/magento migrate:<mode> [-r|--reset] [-a|--auto] {<path to config.xml>}
```

where:

*  `<mode>` may be: [`settings`]({{ page.baseurl }}/migration/migration-migrate-settings.html), [`data`]({{ page.baseurl }}/migration/migration-migrate-data.html), or [`delta`]({{ page.baseurl }}/migration/migration-migrate-delta.html)

*  `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

*  `[-a|--auto]` is an optional argument that prevents migration from stopping when it encounters integrity check errors.

*  `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

 {:.bs-callout-info}
Logs are written to the `<magento_root>/var/` directory.

## Migration order {#migration_order}

When we created the Data Migration Tool, we assumed the following data transfer sequence:

1. [Settings]({{ page.baseurl }}/migration/migration-migrate-settings.html)
1. [Data]({{ page.baseurl }}/migration/migration-migrate-data.html)
1. [Changes]({{ page.baseurl }}/migration/migration-migrate-delta.html)

That's why we strongly recommend to keep this order to migrate quickly and with no issues.
