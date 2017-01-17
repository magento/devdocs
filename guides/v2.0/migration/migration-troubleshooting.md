---
layout: default
group:  migration
subgroup: F_troubleshooting
title: Troubleshooting
menu_title: Troubleshooting
menu_node: parent
menu_order: 6
version: 2.0
github_link: migration/migration-troubleshooting.md
redirect_from: /guides/v1.0/migration/migration-manually.html
---

## Common error messages

This section is about the errors that might occur when you run the Data Migration Tool, and how to deal with them.

### Source documents/fields not mapped

{% highlight xml %}
Source documents are not mapped: <EXTENSION_TABLE>
{% endhighlight %}

{% highlight xml %}
Source fields are not mapped. Document: <EXTENSION_TABLE>. Fields: <EXTENSION_FIELD>
{% endhighlight %}

In rare cases, the message might mention `Destination documents` or `Destination fields` instead of source ones.

#### Explanation

Some Magento 1 entities (in most cases, coming from extensions) do not exist in the Magento 2 database.

This message appears because the Data Migration Tool runs internal tests to verify that database tables and fields are consistent between *source* (Magento 1) and *destination* (Magento 2).

#### Possible solutions

1. Install the corresponding Magento 2 extensions from [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"}.

    If the conflicting data originates from an extension which adds own database structure elements, then the Magento 2 version of the same extension may add such elements to the destination (Magento 2) database, thus fixing the issue.

2. Ignore the problematic data.

To ignore database entities, add the `<ignore>` tag to an entity in the `map.xml` file, like this:

{% highlight xml %}
<ignore>
   <field>sales_order_address_id</field>
</ignore>
{% endhighlight %}

<div class="bs-callout bs-callout-warning">
   <p>Before ignoring entities, make sure you don't need the affected data in your Magento 2 store.</p>
</div>

### Class does not exist but mentioned

{% highlight xml %}
Class <extension/class_name> does not exist but mentioned in:
<eav_attribute.frontend_model> for <attribute_id=196>
{% endhighlight %}

#### Explanation

A class from Magento 1 codebase could not be found in Magento 2 codebase during the [EAV migration step]({{page.baseurl}}migration/migration-tool-internal-spec.html#eav). In most cases, the missing class belongs to an extension.

#### Possible solutions

1. Install the corresponding Magento 2 extension

2. Ignore the attribute that causes the issue.

    For this, add the attribute to the `ignore` group in the `eav-attribute-groups.xml.dist` file

3. Add class mapping using the `class-map.xml.dist` file

### Foreign key constraint fails

#### Error message text

{% highlight xml %}
Foreign key <KEY_NAME> constraint fails.
Orphan records id: <ID_1>, <ID_2> from <CHILD_TABLE>.
<FIELD_ID> has no referenced records in <PARENT_TABLE>
{% endhighlight %}

#### Explanation

The `FIELD_ID` of the `CHILD_TABLE` in Magento database refers to a missing record in the `PARENT_TABLE`.

*Better initial version: In this case there are missing records in `table_parent` to which `table_child`.`some_field_id` is pointing.*

#### Possible solution

Delete the records from the `CHILD_TABLE`, if they are no longer needed.

If you still need the records, you may disable the `Data Integrity Step` in `config.xml`.


### Duplicates in URL rewrites

#### Error message text

{%highlight xml%}
There are duplicates in URL rewrites:
Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/10
Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/12
{%endhighlight%}

#### Explanation

There can only be a unique pair of Request Path + Store ID for a URL rewrite in Magento 2, while you're having two identical pairs with different Target Paths.

#### Possible solution

Enable the `auto_resolve_urlrewrite_duplicates` option in your `config.xml` file.

In this case, the Data Migration Tool will add a hash-string to the conflicting records of the URL reqwrite, and show the resolution result in your command line interface.

### Mismatch of entities

#### Error message text

{%highlight xml%}
Mismatch of entities in the document: <DOCUMENT>
{%endhighlight%}

#### Explanation

The error occurs during the Volume Check step. It means the Magento 2 database record count of the document is not the same as in Magento 1.

**Possible reason:** records may be missing because a customer has placed an order during migration.

#### Solution

Run the Data Migration Tool in `Delta` mode to transfer incremental changes.
