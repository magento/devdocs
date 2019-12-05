---
group: migration-guide
title: Extend the tool
functional_areas:
  - Tools
---

If the data format and structure created by [Magento extensions](https://marketplace.magento.com/extensions.html){:target="_blank"} or custom code is different between Magento 1 and Magento 2, use extension points in the Data Migration Tool to migrate the data. If the data format and structure are the same, the tool can automatically migrate the data without user intervention.

During migration, the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) scans and compares all Magento 1 and Magento 2 tables, including those created by extensions. If the tables do not differ, the tool automatically migrates the data. If the tables differ, the tool terminates and notifies the user.

 {:.bs-callout-info}
Read the [Technical Specification]({{ page.baseurl }}/migration/migration-tool-internal-spec.html) first before attempting to extend the Data Migration Tool. You should also review the [Migration Guide]({{ page.baseurl }}/migration/bk-migration-guide.html) for general information about using the tool.

## Minor data format and structure changes

In most cases, the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) sufficiently resolves minor data format and structure changes using the following methods in the `map.xml` file:

-  Change table or field names with mapping rules
-  Transform data formats with existing handlers or create a custom handler

The following shows an example of using both mapping rules and a handler. This example uses a hypothetical Magento 1 extension called "GreatBlog" that has been improved for Magento 2.

```xml
<source>
    <document_rules>
        <ignore>
            <document>great_blog_index</document>
        </ignore>
        <rename>
            <document>great_blog_publication</document>
            <to>great_blog_post</to>
        </rename>
    </document_rules>
    <field_rules>
        <move>
            <field>great_blog_publication.summary</field>
            <to>great_blog_post.title</to>
        </move>
        <ignore>
            <field>great_blog_publication.priority</field>
        </ignore>
        <transform>
            <field>great_blog_publication.body</field>
            <handler class="\Migration\Handler\GreatBlog\NewFormat">
                <param name="switch" value="yes" />
            </handler>
        </transform>
    </field_rules>
</source>
<destination>
    <document_rules>
        <ignore>
            <document>great_blog_rating</document>
        </ignore>
    </document_rules>
    <field_rules>
        <ignore>
            <field>great_blog_post.rating</field>
        </ignore>
    </field_rules>
</destination>
```

Refer to the following for an explanation of the changes in the previous example:

-  Unnecessary data from the index table `great_blog_index` should not be migrated
-  The table `great_blog_publication` was renamed to `great_blog_post` in Magento 2, so data should be migrated to the new table
   -  The `summary` field was renamed `title`, so data should be migrated to the new field
   -  The `priority` field was removed and no longer exists in Magento 2
   -  The data in the `body` field has changed format and should be processed by the custom handler: `\Migration\Handler\GreatBlog\NewFormat`
-  A new ratings feature was developed for the "GreatBlog" extension in Magento 2
   -  A new `great_blog_rating` table was created
   -  A new `great_blog_post.rating` field was created

### Extend mapping in other steps

Other steps support mapping, such as the [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav) and Customer Attributes Step. These steps migrate a predefined list of Magento tables. For example, suppose that the "GreatBlog" extension has an additional field in the `eav_attribute` table and the name changed in Magento 2. Since the table is processed by the [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav), mapping rules should be written for the `map-eav.xml` file. The `map.xml` and `map-eav.xml` files use the same `map.xsd` schema, so mapping rules remain the same.

## Major data format and structure changes

In addition to the Map Step, there are other steps in the `config.xml` file which migrate data with major format and structure changes, including:

-  [Url Rewrite Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#url-rewrite-step)
-  OrderGrids Step
-  [EAV Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#eav)

Unlike the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step), these steps scan a predefined list of tables instead of all tables.

### Create custom steps

Using the same "GreatBlog" example, suppose the extension contains three tables in Magento 1, but was redesigned to have only one table in Magento 2. To migrate all data from multiple tables to a single table, you can create a custom step in the `config.xml` file. For example:

```xml
<steps mode="data">
    ...
    <step title="GreatBlog Step">
        <integrity>Migration\Step\GreatBlog\Integrity</integrity>
        <delta>Migration\Step\GreatBlog\Data</delta>
        <volume>Migration\Step\GreatBlog\Volume</volume>
    </step>
</steps>
<steps mode="delta">
    ...
    <step title="GreatBlog Step">
        <delta>Migration\Step\GreatBlog\Delta</delta>
        <volume>Migration\Step\GreatBlog\Volume</volume>
    </step>
</steps>
```

The tool runs steps according to their position in the `config.xml` file; from top to bottom. In our example, the `GreatBlog Step` will run last.

Steps can include four types of classes:

-  Integrity checking
-  Data delivering
-  Volume checking
-  Delta delivering

 {:.bs-callout-info}
Refer to [Configuration]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#configuration), [Step internals]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#step-internals), [Stages]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#step-stages) and [Running modes]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#running-modes) for more information.

Complex SQL queries can be assembled inside these classes to fetch data from the three tables and migrate into a single table. Also, note that these tables should be "ignored" in the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step) because it scans all existing tables and tries to migrate the data unless it is in the `<ignore>` tag of the `map.xml` file.

## Prohibited extension methods

Since the Data Migration Tool and Magento 2 are constantly evolving, existing steps and handlers are subject to change. We highly recommend not overriding the behavior of steps like the [Map Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#map-step), [URL Rewrite Step]({{ page.baseurl }}/migration/migration-tool-internal-spec.html#url-rewrite-step), and handlers by extending their classes.

Some steps do not support mapping and cannot be changed without altering the code. You can either write an extra step that changes data at the end of migration or create a [GitHub issue](https://github.com/magento/data-migration-tool/issues){:target="_blank"} and ask for a new extension point on the existing step.
