---
group: migration-guide
subgroup: F_troubleshooting
title: Troubleshooting
menu_title: Troubleshooting
menu_node: parent
menu_order: 6
functional_areas:
  - Tools
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

* Install the corresponding Magento 2 extensions from [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"}

    If the conflicting data originates from an extension which adds own database structure elements, then the Magento 2 version of the same extension may add such elements to the destination (Magento 2) database, thus fixing the issue.

* Configure the Tool to ignore the problematic data

To ignore database entities, add the `<ignore>` tag to an entity in the `map.xml` file, like this:

```xml
<ignore>
   <field>sales_order_address_id</field>
</ignore>
```

{: .bs-callout .bs-callout-warning }
Before ignoring entities, make sure you do not need the affected data in your Magento 2 store.

### Class does not exist but mentioned

```xml
Class <extension/class_name> does not exist but mentioned in:
<eav_attribute.frontend_model> for <attribute_id=196>
```

#### Explanation

A class from Magento 1 codebase could not be found in Magento 2 codebase during the [EAV migration step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav). In most cases, the missing class belongs to an [extension](https://glossary.magento.com/extension).

#### Possible solutions

* Install the corresponding Magento 2 extension

* Ignore the attribute that causes the issue

    For this, add the attribute to the `ignore` group in the `eav-attribute-groups.xml.dist` file.

* Add class mapping using the `class-map.xml.dist` file

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
Mismatch of entities in the document: <DOCUMENT>
```

#### Explanation

The error occurs during the Volume Check step. It means the Magento 2 database record count of the document is not the same as in Magento 1.

Missing records happen when a customer places an order during migration.

#### Solution

Run the Data Migration Tool in `Delta` mode to transfer incremental changes.
