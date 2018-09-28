---
group: migration-guide
subgroup: D_Migrate using the data migration tool
title: Migrate using Data Migration Tool
menu_title: Migrate using Data Migration Tool
menu_node: parent
menu_order: 4
redirect_from: /guides/v1.0/migration/migration-migrate.html
functional_areas:
  - Tools
---

## General rules for successful migration {#migration-command-gen}

Before you start migration, stop all Magento 1 cron jobs.

During the migration process, **do not:**

1. Make any changes in the Magento 1 {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} except for order management (shipping, creating invoice, credit memos, etc.)

2. Alter any code

3. Make changes in the Magento 2 Admin and {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}

{: .bs-callout .bs-callout-tip }
All operations in Magento 1 storefront are allowed at this time.

## Run Data Migration Tool {#migration-command-run}

This section shows how to run the Data Migration Tool to migrate settings, data, or incremental changes.

### First steps {#migration-command-run-first}

{% include install/first-steps-cli.md %}

In addition to the command arguments mentioned here, see [Common arguments]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common)

### Command syntax {#migration-command-run-syntax}

Below is a typical command example:

{% highlight bash %}
bin/magento migrate:<mode> [-r|--reset] {<path to config.xml>}
{% endhighlight bash %}

where:

1. `<mode>` may be: [`settings`]({{ page.baseurl }}/migration/migration-migrate-settings.html), [`data`]({{ page.baseurl }}/migration/migration-migrate-data.html), or [`delta`]({{ page.baseurl }}/migration/migration-migrate-delta.html)

2. `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

3. `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

{: .bs-callout .bs-callout-info }
Logs are written to the `<your Magento install dir>/var/` directory.

## Migration order {#migration_order}

When we created the Data Migration Tool, we assumed the following data transfer sequence:

1.	[Settings]({{ page.baseurl }}/migration/migration-migrate-settings.html)
2.	[Data]({{ page.baseurl }}/migration/migration-migrate-data.html)
3.	[Changes]({{ page.baseurl }}/migration/migration-migrate-delta.html)

That's why we strongly recommend to keep this order to migrate quickly and with no issues.
