---
group: migration-guide
title: Troubleshooting
redirect_to: https://support.magento.com/hc/en-us/articles/360033020451
---

## Common error messages

This section is about the errors that might occur when you run the Data Migration Tool, and how to deal with them.

### Source documents/fields not mapped

```xml
Source documents are not mapped: <EXTENSION_TABLE>
```

```xml
Source fields are not mapped. Document: <EXTENSION_TABLE>. Fields: <EXTENSION_FIELD>
```

In rare cases, the message might mention `Destination documents` or `Destination fields` instead of source ones.

#### Explanation

Some Magento 1 entities (in most cases, coming from extensions) do not exist in the Magento 2 database.

This message appears because the Data Migration Tool runs internal tests to verify that tables and fields are consistent between *source* (Magento 1) and *destination* (Magento 2) databases.

#### Possible solutions

*  Install the corresponding Magento 2 extensions from [Magento Marketplace](https://marketplace.magento.com/){:target="_blank"}

    If the conflicting data originates from an extension which adds own database structure elements, then the Magento 2 version of the same extension may add such elements to the destination (Magento 2) database, thus fixing the issue.

*  Use the `-a` argument when executing the tool to auto resolve errors and prevent migration from stopping.

*  Configure the Tool to ignore the problematic data

To ignore database entities, add the `<ignore>` tag to an entity in the `map.xml` file, like this:

```xml
    ...
    <source>
        <document_rules>
            ...
            <!-- Ignore `sales_flat_invoice_grid` table -->
            <ignore>
                <document>sales_flat_invoice_grid</document>
            </ignore>
        </document_rules>
        <field_rules>
            <!-- Ignore `address_id` field of `sales_flat_order_address` table -->
            <ignore>
                <field>sales_flat_order_address.address_id</field>
            </ignore>
            ...
        </field_rules>
    </source>
    ...
```

{:.bs-callout-warning}
Before ignoring entities by map file or using the `-a` option, make sure you do not need the affected data in your Magento 2 store.

### Class does not exist but mentioned

```xml
Class <extension/class_name> does not exist but mentioned in:
<eav_attribute.frontend_model> for <attribute_id=196>
```

#### Explanation

A class from Magento 1 codebase could not be found in Magento 2 codebase during the [EAV migration step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav). In most cases, the missing class belongs to an [extension](https://glossary.magento.com/extension).

#### Possible solutions

*  Install the corresponding Magento 2 extension

*  Ignore the attribute that causes the issue

    For this, add the attribute to the `ignore` group in the `eav-attribute-groups.xml.dist` file.

*  Add class mapping using the `class-map.xml.dist` file

### Foreign key constraint fails

#### Error message text

```xml
Foreign key <KEY_NAME> constraint fails.
Orphan records id: <id_1>, <id_2> from <child_table>.
<field_id> has no referenced records in <parent_table>
```

#### Explanation

There are missing database records in the `parent_table` to which the `field_id` of the `child_table` is pointing to.

#### Possible solution

Delete the records from the `child_table`, if you do not need them.

To keep the records, disable the `Data Integrity Step` by modifying the Data Migration Tool's `config.xml`.

### Duplicates in URL rewrites

```xml
There are duplicates in URL rewrites:
Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/10
Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/12
```

#### Explanation

The `Target path` in a URL rewrite must be specified by a unique pair of `Request path` + `Store ID`. This error reports two entries that use the same `Request path` + `Store ID` pair with two different `Target path` values.

#### Possible solution

Enable the `auto_resolve_urlrewrite_duplicates` option in your `config.xml` file.

This configuration adds a hash-string to the conflicting records of [URL](https://glossary.magento.com/url) rewrites, and shows the resolution result in your command line interface.

### Mismatch of entities

```xml
Mismatch of entities in the document: <DOCUMENT> Source: <COUNT_ITEMS_IN_SOURCE_TABLE> Destination: <COUNT_ITEMS_IN_DESTINATION_TABLE>
```

#### Explanation

The error occurs during the Volume Check step. It means the Magento 2 database record count of the document is not the same as in Magento 1.

Missing records happen when a customer places an order during migration.

#### Possible solution

Run the Data Migration Tool in `Delta` mode to transfer incremental changes.

### Deltalog is not installed

```xml
Deltalog for <TABLE_NAME> is not installed
```

#### Explanation

This error occurs during [incremental migration]({{ page.baseurl }}/migration/migration-migrate-delta.html) of changes to data. It means deltalog tables (with prefix `m2_cl_*`) were not found in Magento 1 database. The tool installs these tables during [data migration]({{ page.baseurl }}/migration/migration-migrate-data.html) as well as database triggers which track changes and fill deltalog tables.

One reason for the error could be that you are trying to migrate from a *copy* of your live Magento 1 store, not from the live store itself. When you make a copy from a live Magento 1 store that has never been migrated, the copy does not contain the triggers and additional deltalog tables needed to complete a delta migration, so the migration fails. The Data Migration Tool does NOT make comparisons between the DB of M1 and M2 to migrate the differences. Instead, the tool uses the triggers and deltalog tables installed during the first migration in order to perform subsequent delta migrations. In such a case, your copy of the live Magento 1 DB will not contain the triggers and deltalog tables that the Data Migration Tool uses to perform a migration.

#### Possible solution

We recommended testing the migration process from a copy of your Magento 1 database to fix your migration issues. After fixing the issues on the copy, start the migration process over again from your live Magento 1 database. This will help ensure a smooth migration process.
