---
layout: default
group: extension-dev-guide
title: Set up declarative schema
version: 2.3
github_link: extension-dev-guide/declarative-schema/db-schema.md
---

Before Magento 2.3, extension developers were required to write code (PHP script) to change the database schema.

Currently, Magento 2 has the following types of scripts:

* InstallData and InstallSchema scripts, which are executed on a clean (empty) database
* UpgradeData and UpgradeSchema incremental scripts, which supplement an existing Magento database
* Recurring scripts, which are executed each time you install or upgrade Magento.

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

## Theory of operations

The declarative schema upgrade compares the current state of the schema against the declared state in configuration. It then determines the differences, which are converted to a sequence of statements and applied to the DB.

![Db Schema Invocation]({{page.baseurl}}extension-dev-guide/declarative-schema/images/declarative-schema-invocation.png)

## Db Schema Structure

Let's examine how such `db_schema.xml` should be declared.

A module's database declaration file is defined in `<Module_Vendor>/<Module_Name>/etc/db_schema.xml`.

### Top-level node

The `schema` node defines the location of the `schema.xsd`  file.

`<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:setup:Model/Declaration/Schema/etc/schema.xsd">`

### `table` node

Each `db_schema.xml` file should contain one or more `table` nodes. Each table node represents a table in the database.
A table node can contain the following attributes:

Attribute | Description
--- | ---
`name` | The name of the table
`engine` | SQL engine
`resource` | The database shard on which to install the table
`comment` | Table comment

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
<td>Initialize the column with the specified default value. The default value should have the same datatype defined in <code>xsi:type</code>
</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>This flag should be used only when you want to disable or delete the declared table, column, constraint, or index.
</td>
</tr>
<tr>
<td><code>identity</code></td>
<td>Indicates whether a column is auto incremented
</td>
</tr>
<tr>
<td><code>length</code></td>
<td>In text and binary types (including varchar and varbinary), specifies the length of a column.</td>
</tr>
<tr>
<td><code>nullable</code></td>
<td>Indicates whether column can be nullable</td>
</tr>
<tr>
<td><code>onCreate</code></td>
<td>This is a DDL trigger which allows you to move data from an existing column, for example, that you want to remove to a newly created column. This trigger works only when a column is created.</td>
</tr>
<tr>
<td><code>padding</code></td>
<td>The size of an integer column.</td>
</tr>
<tr>
<td><code>precision</code></td>
<td>The number of allowed digits in a real data type</td>
</tr>
<tr>
<td><code>scale</code></td>
<td>The number of digits after the decimal in a real data type</td>
</tr>
<tr>
<td><code>unsigned</code></td>
<td>For numeric data types, specifies whether the column can contain positive and negative values or only positive values.</td>
</tr>
</table>

For more information about each type, refer to the annotations in the corresponding XSD file.
For example, here is XSD for boolean: `urn:magento:setup:Model/Declaration/Schema/etc/types/boolean.xsd`
Each column can have different attributes. For instance, integer column can be auto incremented and text column - not
All attributes are declared in particular XSDs. Also all allowed attributes can be observed, if you will generate urns, by running
this command: [How to generate urns?]

If urns are already generated, you can exploit PHPStorm autocomplete after choosing column `xsi:type`. That is true for other subnodes too.

![Db Schema Autocomplete]

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
`column` | A column in the current table that refers to a specific column in another table
`referenceTable` | The table being referenced
`referenceColumn`| A column in the `referenceTable`
`onDelete` | Foreign key trigger. The value must be `CASCADE`, `SET NULL`, or `NO ACTION`.

Example:

```xml
<constraint xsi:type="foreign" name="COMPANY_CREDIT_COMPANY_ID_DIRECTORY_COUNTRY_COUNTRY_ID"
                    table="company_credit" column="company_id" referenceTable="company" referenceColumn="entity_id"
                    onDelete="CASCADE"/>
```

For more information about foreign key triggers, refer to the SQL engines documentation.


#### `index` node

The `index` subnode has the same structure as internal constraints, but contains different logic. While constraints are used for defining limitations, index are used for speeding up DQL operations.


[How to generate urns?]:{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html
[Db Schema Autocomplete]:{{page.baseurl}}extension-dev-guide/declarative-schema/images/db-schema-autocomplete.png
