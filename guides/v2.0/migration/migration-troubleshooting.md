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

In this section you will find:

* list of most common error messages that occur when running the Data Migration Tool

* explanations on why the errors have occurred

* possible solutions

### Source docs/fields not mapped

#### Error message text

{% highlight xml %}
Source documents are not mapped: <EXTENSION_TABLE>
{% endhighlight %}

{% highlight xml %}
Source fields are not mapped. Document: <EXTENSION_TABLE>. Fields: <EXTENSION_FIELD>
{% endhighlight %}

#### Explanation

Your Magento 1 store has one or several installed extensions; extensions cannot be migrated with the Data Migration Tool.

#### Possible solutions

Migrate your extension using the [Magento Code Migration Toolkit](https://github.com/magento/code-migration) or find the Magento 2 version of your extension on [Magento Marketplace](https://marketplace.magento.com/){:target:"_blank"}.

### Class does not exist but mentioned

#### Error message text

{% highlight xml %}
Class <EXTENSION/CLASS_EXAMPLE_NAME> does not exist but mentioned in: <EAV_ATTRIBUTE.FRONTEND_MODEL> for <ATTRIBUTE_ID>
{% endhighlight %}

#### Explanation

A class from Magento 1 codebase could not be found in Magento 2 codebase during the EAV migration step. In most cases, the missing class represents an extension.

#### Possible solutions

* Install the corresponding Magento 2 extension

* Ignore the attribute that causes the issue. For this, add the attribute to the `ignore` group in the `eav-attribute-groups.xml.dist` file

* Add class mapping using the `class-map.xml.dist` file

See the [Mapping files]({{page.baseurl}}/migration/migration-tool-configure.html#migration-config) section for more details.

### Foreign key constraint fails

#### Error message text

Initial version:

{% highlight xml %}
Foreign key (FK_EXAMPLE) constraint fails. Orphan records id: 163,164 from `table_child`.`some_field_id` has no referenced records in `table_parent`
{% endhighlight %}

New version:

{% highlight xml %}
Foreign key <KEY_NAME> constraint fails.
Orphan records id: <ID_1>, <ID_2> from <CHILD_TABLE>.
<FIELD_ID> has no referenced records in <PARENT_TABLE>
{% endhighlight %}

#### Explanation

The `FIELD_ID` of the `CHILD_TABLE` makes a reference to a missing record in the `PARENT_TABLE`

#### Solution

Delete the records from the `CHILD_TABLE`, if they are no longer needed.

### Duplicates in URL rewrites

#### Error message text

Initial variant:

> There are duplicates in URL rewrites:
>
> Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/10
>
> Request path: towel.html Store ID: 2 Target path: catalog/product/view/id/12

New variant:

{%highlight xml%}
There are duplicates in URL rewrites:
Request path: <PATH.HTML> Store ID: <ID> Target path: <catalog/product/view/id/10>
Request path: <PATH.HTML> Store ID: <ID> Target path: <catalog/product/view/id/12>
{%endhighlight%}

#### Explanation

There are multiple Target Paths (each having the same Request Path and Store Id) for a URL rewrite. Magento 2 allows only one Target Path for a particular Request Path + Store Id pair in URL rewrites.

#### Possible solution

Set a unique Target Path value for the `auto_resolve_urlrewrite_duplicates` option in your `config.xml` file. In this case, a hash-string will be added to the other (conflicting) record of the URL reqwrite.

### Mismatch of entities

#### Error message text

{%highlight xml%}
Mismatch of entities in the document: <DOCUMENT>
{%endhighlight%}

#### Explanation

The error occurs during the Volume Check step. It means the Magento 2 database record count is not the same as in Magento 1 before migration. Possible reason: records might be missing because a customer has placed an order during migration.

#### Solution

Run the Data Migration Tool in `Delta` mode to transfer incremental changes.
