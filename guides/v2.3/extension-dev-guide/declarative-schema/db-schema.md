---
layout: default
group: extension-dev-guide
title: Configure declarative schema
version: 2.3
github_link: extension-dev-guide/declarative-schema/db-schema.md
---

Before Magento 2.3, extension developers were required to write code (PHP scripts) to change the database schema. The following types of scripts existed before Magento 2.3:

* InstallData and InstallSchema scripts, which are executed on a clean (empty) database
* UpgradeData and UpgradeSchema incremental scripts, which supplement an existing Magento database
* Recurring scripts, which are executed each time you install or upgrade Magento

Each script iteratively adds changes. During the installation process, Magento applies only those changes that have not been applied yet. For example, if you have Magento 2.1.8 installed and the latest version is 2.1.11, then the upgrade scripts for
2.1.9, 2.1.10, and 2.1.11 will be applied, in order, when you upgrade to 2.1.11. That procedure is called _migration setup_ or _migration scripts_.

The main disadvantage of this approach is that Magento applies changes blindly. For example, in one version a new database column might be introduced, only to be removed in the next. _Declarative setup_ eliminates this type of unnecessary work.

Declarative setup is based on database structure declarations, and is used in projects such as [Doctrine](http://www.doctrine-project.org/). Schema files declare what the database structure should be,
and Magento determines the differences between the current table structure and what it should be. These differences can be represented with atomic SQL operations.

The following example, extracted from the `Catalog/etc/db_schema.xml` file, defines the `catalog_product_entity_datetime` table:

```xml
<table name="catalog_product_entity_datetime" resource="default" engine="innodb"
           comment="Catalog Product Datetime Attribute Backend Table">
        <column xsi:type="int" name="value_id" padding="11" unsigned="false" nullable="false" identity="true" comment="Value ID"/>
        <column xsi:type="smallint" name="attribute_id" padding="5" unsigned="true" nullable="false" identity="false"default="0" comment="Attribute ID"/>
        <column xsi:type="smallint" name="store_id" padding="5" unsigned="true" nullable="false" identity="false" default="0" comment="Store ID"/>
        <column xsi:type="int" name="entity_id" padding="10" unsigned="true" nullable="false" identity="false" default="0"/>
        <column xsi:type="datetime" name="value" on_update="false" nullable="true" comment="Value"/>
        <constraint xsi:type="primary" name="PRIMARY">
            <column name="value_id"/>
        </constraint>
</table>
```

## `db_schema` structure

The `<Module_Vendor>/<Module_Name>/etc/db_schema.xml` file declares a module's database structure.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you have enabled [URN highlighting]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-urn.html), you can use the PHPStorm autocomplete feature after choosing a node's `xsi:type`. This will also allow you to view which attributes are available on each line of your `db_schema.xml` file
</div>

### Top-level node

The `schema` node defines the location of the `schema.xsd`  file.

`<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="urn:magento:setup:Model/Declaration/Schema/etc/schema.xsd">`

### `table` node

Each `db_schema.xml` file should contain one or more `table` nodes. Each table node represents a table in the database.
A table node can contain the following attributes:

Attribute | Description
--- | ---
`name` | The name of the table.
`engine` | SQL engine. This value must be `innodb` or `memory`.
`resource` | The database shard on which to install the table. This value must be `default`, `quote`, or `sales`.
`comment` | Table comment.

 A `table` node can contain three types of subnodes:

 * `column`
 * `constraint`
 * `index`

#### `column` subnode

The `column` subnode defines a column in a table. Each column requires its own declaration.

A column can have the following attributes:

<table>
<tr><th>Attribute</th><th>Description</th></tr>
<tr>
<td><code>xsi:type</code></td>
<td><p>Specifies the column type. Must be one of the following:</p>
<ul>
<li><code>blob</code>  (includes blob, mediumblob, longblob)</li>
<li><code>boolean</code></li>
<li><code>date</code></li>
<li><code>datetime</code></li>
<li><code>int</code> (includes smallint, bigint, tinyint)</li>
<li><code>real</code> (includes decimal, float, double, real)</li>
<li><code>text</code> (includes text, mediumtext, longtext)</li>
<li><code>timestamp</code></li>
<li><code>varbinary</code></li>
<li><code>varchar</code></li>
</ul></td>
</tr>
<tr>
<td><code>default</code></td>
<td>Initializes the column with the specified default value. The default value should have the same datatype defined in <code>xsi:type</code>.
</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>Disables or deletes the declared table, column, constraint, or index.
</td>
</tr>
<tr>
<td><code>identity</code></td>
<td>Indicates whether a column is auto incremented.
</td>
</tr>
<tr>
<td><code>length</code></td>
<td>In text and binary types (including varchar and varbinary), specifies the length of a column.</td>
</tr>
<tr>
<td><code>nullable</code></td>
<td>Indicates whether column can be nullable.</td>
</tr>
<tr>
<td><code>onCreate</code></td>
<td>This is a DDL trigger that allows you to move data from an existing column to a newly created column. This trigger works only when a column is created.</td>
</tr>
<tr>
<td><code>padding</code></td>
<td>The size of an integer column.</td>
</tr>
<tr>
<td><code>precision</code></td>
<td>The number of allowed digits in a real data type.</td>
</tr>
<tr>
<td><code>scale</code></td>
<td>The number of digits after the decimal in a real data type.</td>
</tr>
<tr>
<td><code>unsigned</code></td>
<td>For numeric data types, specifies whether the column can contain positive and negative values or only positive values.</td>
</tr>
</table>

For more information about each type, refer to the annotations in the corresponding XSD file. The XSD files are located in the `<Magento_root_directory/setup/src/Magento/Setup/Model/Declaration/Schema/etc` directory.


Example:

```xml
<column xsi:type="int" name="entity_id" padding="10" unsigned="true" nullable="false" identity="true" comment="Credit ID"/>
```

#### `constraint` subnode

The `constraint` subnode is represented by 3 different types:

* `primary`
* `unique`
* `foreign`

The `primary` and `unique` constraints are called "internal" constraints, because they can be applied only to the scope of the table where they are created. Internal constraints define the `name` attribute and contain one or more `column` subnodes. Each subnode defines a constrained column.

The following example shows the format of an internal constraint.

```xml
<constraint xsi:type="primary" name="PRIMARY">
    <column name="entity_id"/>
</constraint>
```

The `foreign` constraint is similar to foreign keys in SQL. This type of constraint connects two tables with each other. The following attributes define a foreign constraint:

Attribute | Description
--- | ---
`column` | A column in the current table that refers to a specific column in another table.
`referenceTable` | The table being referenced.
`referenceColumn`| A column in the `referenceTable`.
`onDelete` | Foreign key trigger. The value must be `CASCADE`, `SET NULL`, or `NO ACTION`.

Example:

```xml
<constraint xsi:type="foreign" name="COMPANY_CREDIT_COMPANY_ID_DIRECTORY_COUNTRY_COUNTRY_ID" table="company_credit" column="company_id" referenceTable="company" referenceColumn="entity_id" onDelete="CASCADE"/>
```
#### `index` subnode

The `index` subnode has the same structure as internal constraints but contains different logic. While constraints are used for defining limitations, indexes are used for speeding up DQL operations.

## Perform common database operations

This section shows how to perform common database operations using declarative schema. The screen captures use `git diff` to illustrate how to perform these tasks.

### Create a table

The following example creates the `table_name` table with five columns. The `id` column is the primary key.

![Create Table]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/declaration-create-table.png)

### Drop a table

In the following example, the `table_name` table was completely removed from the `db-schema.xml` file. To drop a table declared in another module, redeclare it with the `disabled` attribute set to `true`.

![Drop Table]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/drop-declarative-table.png)

### Rename a table

Table renaming is not supported. However, you can remove an unneeded table declaration and add a new one. Data will be persisted in a CSV dump, but the data will not be added to the new table automatically. You can add the data manually by using data/recurring patches.

### Create a foreign key

In the following example, the selected `constraint` node defines the characteristics of the `FL_ALLOWED_SEVERITIES` foreign key.

![Create Foreign Key]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/create-fk.png)

### Drop a foreign key

The following example removes the  `FL_ALLOWED_SEVERITIES` foreign key by deleting its `constraint` node. To drop a constraint declared in another module, redeclare it with the `disabled` attribute set to `true`.

![Drop Foreign Key]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/drop-fk.png)

### Add a column to table

The following example adds the `date_closed` column.

![Add column to table]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/add-column.png)

### Drop a column from a table

The following example removes the  `date_closed` column by deleting its `column` node. To drop a column declared in another module, redeclare it with the `disabled` attribute set to `true`.

![Drop column from table]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/remove-column.png)

### Change the column type

The following example changes the `type` of the `title` column from `varchar` to  `tinytext`.

![Change column type]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/change-column-type.png)

### Rename a column

To rename a column, delete the original column declaration and create a new one. In the new declaration, use the `onCreate` attribute to specify which column to migrate data from. Use the following construction to migrate data from the same table.

```xml
onCreate="migrateDataFrom(entity_id)"
```

To migrate data from another table, specify a value similar to the following:

```xml
onCreate="migrateDataFromAnotherTable(catalog_category_entity,entity_id)"
```

### Add an index

The following example adds the `INDEX_SEVERITY` index to the `table_name` table.

![Add index]({{page.baseurl}}/extension-dev-guide/declarative-schema/images/add-index.png)


## Other tasks

### Disable a module

When a module is disabled from the Admin console, its database schema configuration is no longer read on upgrade or install. As a result, subsequent system upgrades rebuild the database schema without the module's tables, columns, or other elements.

<!--
### Truncate a table

**Developer question:** This section is empty

-->

[How to generate urns?]:{{page.baseurl}}/config-guide/cli/config-cli-subcommands-urn.html
[Db Schema Autocomplete]:{{page.baseurl}}/extension-dev-guide/declarative-schema/images/db-schema-autocomplete.png
