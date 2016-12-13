---
layout: default
group:  migration
subgroup: D_Migrate using the data migration tool
title: Migrate using Data Migration Tool
menu_title: Migrate using Data Migration Tool
menu_node: parent
menu_order: 4
version: 2.0
github_link: migration/migration-migrate.md
redirect_from: /guides/v1.0/migration/migration-migrate.html
---

## General rules for successful migration {#migration-command-gen}

Before you start migration, stop all Magento 1 cron jobs.

During the migration process, **do not:**

1. Make any changes in the Magento 1 Admin except for order management (shipping, creating invoice, credit memos, etc.)

2. Alter any code

3. Make changes in the Magento 2 Admin and storefront

<div class="bs-callout bs-callout-tip">
  <p>All operations in Magento 1 storefront are allowed at this time.</p>
</div>

## Run Data Migration Tool {#migration-command-run}
This section shows how to run the Data Migration Tool to migrate settings, data, or incremental changes.

### First steps {#migration-command-run-first}

{% include install/first-steps-cli.html %}

In addition to the command arguments mentioned here, see [Common arguments]({{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common)

### Command syntax {#migration-command-run-syntax}

Below is a typical command example:

{% highlight bash %}
bin/magento migrate:<mode> [-r|--reset] {<path to config.xml>}
{% endhighlight bash %}

where:

1. `<mode>` may be: <a href="{{page.baseurl}}migration/migration-migrate-settings.html">`settings`</a>, <a href="{{page.baseurl}}migration/migration-migrate-data.html">`data`</a>, or <a href="{{page.baseurl}}migration/migration-migrate-delta.html">`delta`</a>

2. `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

3. `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Logs are written to the <code>&lt;your Magento install dir>/var/</code> directory.</p></span>
</div>

## Migration order {#migration_order}

When we created the Data Migration Tool, we assumed the following data transfer sequence:

1.	<a href="{{page.baseurl}}migration/migration-migrate-settings.html">Settings</a>
2.	<a href="{{page.baseurl}}migration/migration-migrate-data.html">Data</a>
3.	<a href="{{page.baseurl}}migration/migration-migrate-delta.html">Changes</a>

That's why we strongly recommend to keep this order to migrate quickly and with no issues.
