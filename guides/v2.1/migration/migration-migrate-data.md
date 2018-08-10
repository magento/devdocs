---
group: migration
subgroup: D_Migrate using the data migration tool
title: Migrate data
menu_title: Migrate data
menu_node:
menu_order: 2
version: 2.1
redirect_from: /guides/v1.0/migration/migration-migrate-data.html
functional_areas:
  - Tools
---

## Before you start: routine preparations

1. Log in to Magento server as [the file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).

2. Change to the Magento `/bin` directory or make sure it is added to your system PATH.

See the [First steps]({{ page.baseurl }}/migration/migration-migrate.html#migration-command-run-first) section for more details.

## Run the data migration command {#migrate-data-cmd}

To start migrating data, run:

    bin/magento migrate:data [-r|--reset] {<path to config.xml>}

where:

* `[-r|--reset]` is an optional argument that starts migration from the beginning. You can use this argument for testing migration.

* `{<path to config.xml>}` is the absolute file system path to `config.xml`; this argument is required

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The Data Migration Tool saves its current progress as it runs. If errors or user intervention stop it from running, the Tool resumes progress at the last known good state.</p>
  <p>To force the Data Migration Tool to run from the beginning, use the <code>--reset</code> argument. In that case, we recommend you restore your Magento 2 database dump to prevent duplicating previously migrated data.</p></span>
</div>

## Possible consistency errors {#migrate-command-data}

While running, the Data Migration Tool may report inconsistencies between Magento 1 and Magento 2 databases, and display messages like this:

{% highlight xml %}
Source documents are not mapped: <EXTENSION_TABLE>
{% endhighlight %}

See the [Troubleshooting]({{ page.baseurl }}/migration/migration-troubleshooting.html) section of this guide for more information and recommendations.

<!--

When you migrate data, the Data Migration Tool verifies that tables and fields are consistent between Magento 1 and Magento 2. If they are inconsistent, you will see an error message that lists the problematic tables and fields, for example:

    Source fields are not mapped. Document: <document_name>. Fields: <field_name>

**Possible reason for error:** some database entities belong to Magento 1 extensions that do not exist in the Magento 2 database.

Below are the possible ways to handle these errors.

### Fix errors: Install corresponding Magento 2 extensions

Visit [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"} to find the latest {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} versions or contact your extension provider.

### Fix errors: Ignore entities

You may tell the Data Migration Tool to ignore the problematic entities.

To do that, add the `<ignore>` tag to an entity in the `map.xml` file, like this:

{% highlight xml %}
<ignore>
    <field>sales_order_address_id</field>
</ignore>
{% endhighlight %}

<div class="bs-callout bs-callout-warning">
    <p>Before ignoring entities, make sure you don't need the affected data in your Magento 2 store.</p>
</div>

### Verify fixes

To know if the issues have been resolved successfully, run the Data Migration Tool again.

-->

## Next migration step

<a href="{{ page.baseurl }}/migration/migration-migrate-delta.html">Migrate changes</a>
