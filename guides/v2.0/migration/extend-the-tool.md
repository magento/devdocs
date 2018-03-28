---
layout: default
group: migration
title: Extend the tool
version: 2.0
github_link: migration/migration-tool.md
functional_areas:
  - Tools
---

If the data format and structure created by [Magento extensions](https://marketplace.magento.com/extensions.html) or custom code is different between Magento 1 and Magento 2, use extension points in the Data Migration Tool to migrate the data. If the data format and structure are the same, the tool can automatically migrate the data without user intervention. 

During migration, the [Map Step](http://devdocs.magento.com/guides/v1.0/migration/migration-tool-internal-spec.html#map-step) scans and compares all Magento 1 and Magento 2 tables, including those created by extensions. If the tables do not differ, the tool automatically migrates the data. If the tables differ, the tool terminates and notifies the user.

<div class="bs-callout" id="info" markdown="1">
Read the [Technical Specification](http://devdocs.magento.com/guides/v1.0/migration/migration-tool-internal-spec.html) first before attempting to extend the Data Migration Tool. You should also review the [Migration Guide](http://devdocs.magento.com/guides/v2.2/migration/bk-migration-guide.html) for general information about using the tool.
</div>

## Minor changes in data format and structure
In most cases, the [Map Step](http://devdocs.magento.com/guides/v1.0/migration/migration-tool-internal-spec.html#map-step) sufficiently resolves minor data format and structure changes through map.xml file.

- to transform data format use existing handlers or create a custom handler 
- for changed table or field names use mapping rules

The following shows an example of using both methods. Assume we have GreatBlog extension for Magento 1 and its improved version for Magento 2.

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

Here is an explanation of the changes in the previous example: 

1. Unnecessary data from the index table `great_blog_index` should not be migrated
1. The table `great_blog_publication` was renamed to `great_blog_post` in Magento 2, so data should be migrated to the new table
    1. Field summary was renamed to title in Magento 2, so data should be migrated to the new field
    1. Field priority was removed and no longer exists in Magento 2
    1. The data in the body field has changed format and therefore should be processed by the custom handler: `\Migration\Handler\GreatBlog\NewFormat`
1. A new ratings feature was developed for the "GreatBlog" extension in Magento 2
    1. New table `great_blog_rating` was created
    1. New field `great_blog_post.rating` was created

### Extend mapping in other steps
Other steps support mapping, such as the "EAV Step" and "Customer Attributes Step". These steps migrate a predefined list of Magento tables. For example, suppose that the "GreatBlog" extension has an additional field in the eav_attribute table and the name changed in Magento 2. Since the table is processed by the "EAV Step", mapping rules should be written for the `map-eav.xml` file. The `map.xml` and `map-eav.xml` files use the same `map.xsd` schema, so mapping rules remain the same. 

## Major changes in data format and structure
In addition to the "Map Step", there are other steps in the `config.xml` file which migrate data with major changes in format and structure, including:

- Url Rewrite Step
- OrderGrids Step
- EAV Step

These steps deal with a predefined list of tables instead of all tables, like the "Map Step". Using the same "GreatBlog" example, let's imagine it has three more tables in Magento 1, but was redesigned to have only one table in Magento 2. All the data from several tables should be migrated into a single table. In such cases, the Data Migration Tool can be extended by creating a new custom Step in the `config.xml` file. For example:

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

The tool runs steps according to their position in the `config.xml` file; from top to bottom. In our example, "GreatBlog Step" will be run last.

Steps can include four types of classes:

- Integrity checking
- Data delivering
- Volume checking
- Delta delivering

<div class="bs-callout" id="info" markdown="1">
Refer to [Configuration](http://devdocs.magento.com/guides/v2.3/migration/migration-tool-internal-spec.html#configuration), [Step internals](http://devdocs.magento.com/guides/v2.3/migration/migration-tool-internal-spec.html#step-internals), [Stages](http://devdocs.magento.com/guides/v2.3/migration/migration-tool-internal-spec.html#stages) and [Running modes](http://devdocs.magento.com/guides/v2.3/migration/migration-tool-internal-spec.html#running-modes) for more information.
</div>

Complex SQL queries can be assembled inside these classes to fetch data from the three tables and migrate into a single table. Also, note that these tables should be "ignored" in the "Map step" because it scans all the existing tables and tries to migrate it unless it is in the `<ignore>` tag of the `map.xml` file.

## Prohibited methods of extending functionality of the tool
Since the Data Migration Tool and Magento 2 are constantly evolving, existing steps and handlers are subject to change. We highly recommend not overriding the behaviour of steps like "Map Step", "Url Rewrite Step", and handlers by extending its classes.

Some steps do not support mapping and cannot be changed without altering the code. You can either write an extra step that changes data at the end of migration or create a [GitHub issue](https://github.com/magento/data-migration-tool/issues) and ask for a new extension point on the existing step.