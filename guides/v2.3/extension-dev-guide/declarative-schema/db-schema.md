---
group: php-developer-guide
title: Configure declarative schema
---

Before Magento 2.3, extension developers were required to write code (PHP scripts) to change the database schema. The following types of scripts existed before Magento 2.3:

* InstallData and InstallSchema scripts, which are executed the first time a module is installed.
* UpgradeData and UpgradeSchema incremental scripts, which supplement an existing module schema.
* Recurring scripts, which are executed each time you install or upgrade Magento.

Each script iteratively adds changes. During the installation process, upgrade scripts apply only those changes that have not been applied yet. For example, if you have a module with version 2.1.8 installed and the latest version is 2.1.11, then the upgrade script changes for 2.1.9, 2.1.10, and 2.1.11 will be applied, in order, when you upgrade to 2.1.11. Each upgrade script is responsible for checking the required version for each change to apply. The Magento installation only knows that a module has an upgrade script, not what versions it affected. That procedure is called _migration setup_ or _migration scripts_.

The main disadvantage of this approach is that Magento applies changes blindly. For example, in one version a new database column might be introduced, only to be removed in the next. _Declarative setup_ eliminates this type of unnecessary work.

Declarative setup is based on database structure declarations, and is used in projects such as [Doctrine](http://www.doctrine-project.org/). Schema files declare what the database structure should be,
and Magento determines the differences between the current table structure and what it should be. These differences can be represented with atomic SQL operations.

The following example, extracted from the `Catalog/etc/db_schema.xml` file, defines the `catalog_product_entity_datetime` table:

```xml
<table name="catalog_product_entity_datetime" resource="default" engine="innodb"
           comment="Catalog Product Datetime Attribute Backend Table">
    <column xsi:type="int" name="value_id" padding="11" unsigned="false" nullable="false" identity="true" comment="Value ID"/>
    <column xsi:type="smallint" name="attribute_id" padding="5" unsigned="true" nullable="false" identity="false" default="0" comment="Attribute ID"/>
    <column xsi:type="smallint" name="store_id" padding="5" unsigned="true" nullable="false" identity="false" default="0" comment="Store ID"/>
    <column xsi:type="int" name="entity_id" padding="10" unsigned="true" nullable="false" identity="false" default="0"/>
    <column xsi:type="datetime" name="value" on_update="false" nullable="true" comment="Value"/>
    <constraint xsi:type="primary" referenceId="PRIMARY">
        <column name="value_id"/>
    </constraint>
    <constraint xsi:type="foreign" referenceId="CAT_PRD_ENTT_DTIME_ATTR_ID_EAV_ATTR_ATTR_ID" table="catalog_product_entity_datetime" column="attribute_id" referenceTable="eav_attribute" referenceColumn="attribute_id" onDelete="CASCADE"/>
    <constraint xsi:type="foreign" referenceId="CAT_PRD_ENTT_DTIME_ENTT_ID_CAT_PRD_ENTT_ENTT_ID" table="catalog_product_entity_datetime" column="entity_id" referenceTable="catalog_product_entity" referenceColumn="entity_id" onDelete="CASCADE"/>
    <constraint xsi:type="foreign" referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_STORE_ID_STORE_STORE_ID" table="catalog_product_entity_datetime" column="store_id" referenceTable="store" referenceColumn="store_id" onDelete="CASCADE"/>
    <constraint xsi:type="unique" referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_ENTITY_ID_ATTRIBUTE_ID_STORE_ID">
        <column name="entity_id"/>
        <column name="attribute_id"/>
        <column name="store_id"/>
    </constraint>
    <index referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_ATTRIBUTE_ID" indexType="btree">
        <column name="attribute_id"/>
    </index>
    <index referenceId="CATALOG_PRODUCT_ENTITY_DATETIME_STORE_ID" indexType="btree">
        <column name="store_id"/>
    </index>
</table>
```

## `db_schema` structure

The `<Module_Vendor>/<Module_Name>/etc/db_schema.xml` file declares a module's database structure.

{: .bs-callout .bs-callout-info }
If you have enabled [URN highlighting]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html), you can use the PhpStorm autocomplete feature after choosing a node's `xsi:type`. This will also allow you to view which attributes are available on each line of your `db_schema.xml` file

### Top-level node

The `schema` node defines the location of the `schema.xsd`  file.

`<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">`

### `table` node

Each `db_schema.xml` file should contain one or more `table` nodes. Each table node represents a table in the database.
A table node can contain the following attributes:

Attribute | Description
--- | ---
`name` | The name of the table
`engine` | SQL engine. This value must be `innodb` or `memory`.
`resource` | The database shard on which to install the table. This value must be `default`, `quote`, or `sales`.
`comment` | Table comment
{:style="table-layout:auto;"}

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

The `constraint` subnode always contains the following attributes:

Attribute | Description
--- | ---
`type` | One of `primary`, `unique`, or `foreign`
`referenceId` |  A custom identifier that is used only for relation mapping in the scope of `db_schema.xml` files. The real entity in the database has a system-generated name. The most convenient way to set the value of this attribute is to use the value that is written in the module's `db_schema_whitelist.json`  file when you [run the `generate-whitelist` command]({{ page.baseurl}}/extension-dev-guide/declarative-schema/migration-commands.html#create-whitelist).

The `primary` and `unique` constraints are called "internal" constraints, because they can be applied only to the scope of the table where they are created. Internal constraints define one or more `column` subnodes. Each subnode defines a constrained column.

The following example shows the format of an internal constraint.

```xml
<constraint xsi:type="primary" referenceId="PRIMARY">
    <column name="entity_id"/>
</constraint>
```

The `foreign` constraint is similar to foreign keys in SQL. This type of constraint connects two tables with each other. The following attributes define a foreign constraint:

Attribute | Description
--- | ---
`table` | The name of the current table
`column` | A column in the current table that refers to a specific column in another table
`referenceTable` | The table being referenced
`referenceColumn`| A column in the `referenceTable`
`onDelete` | Foreign key trigger. The value must be `CASCADE`, `SET NULL`, or `NO ACTION`
{:style="table-layout:auto;"}

Example:

```xml
<constraint xsi:type="foreign" referenceId="COMPANY_CREDIT_COMPANY_ID_DIRECTORY_COUNTRY_COUNTRY_ID" table="company_credit" column="company_id" referenceTable="company" referenceColumn="entity_id" onDelete="CASCADE"/>
```

#### `index` subnode

The `index` subnode has the same structure as internal constraints but contains different logic. While constraints are used for defining limitations, indexes are used for speeding up DQL operations. The following attributes define an index:

Attribute | Description
--- | ---
`referenceId` |  A custom identifier that is used only for relation mapping in the scope of `db_schema.xml` files. The real entity in the database has a system-generated name. The most convenient way to set the value of this attribute is to use the value that is written in the module's `db_schema_whitelist.json`  file when you [run the `generate-whitelist` command]({{ page.baseurl}}/extension-dev-guide/declarative-schema/migration-commands.html#create-whitelist).
`indexType` | The value must be `btree`, `fulltext`, or `hash`
{:style="table-layout:auto;"}

Example:

```xml
<index referenceId="NEWSLETTER_SUBSCRIBER_CUSTOMER_ID" indexType="btree">
    <column name="customer_id"/>
</index>
```

## Perform common database operations

This section shows how to perform common database operations using declarative schema. The screen captures use `git diff` to illustrate how to perform these tasks.

### Create a table

The following example creates the `declarative_table` table with four columns. The `id_column` column is the primary key.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
+    <table name="declarative_table">
+        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
+        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
+        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
+        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
+        <constraint xsi:type="primary" referenceId="PRIMARY">
+            <column name="id_column"/>
+        </constraint>
+    </table>
</schema>
```

### Drop a table

In the following example, the `declarative_table` table was completely removed from the `db-schema.xml` file. To drop a table declared in another module, redeclare it with the `disabled` attribute set to `true`.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
-    <table name="declarative_table">
-        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
-        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
-        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
-        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
-        <constraint xsi:type="primary" referenceId="PRIMARY">
-            <column name="id_column"/>
-        </constraint>
-    </table>
</schema>
```

### Rename a table

Table renaming is not supported. However, you can remove an unneeded table declaration and add a new one. Data will be persisted in a CSV dump, but the data will not be added to the new table automatically. You can add the data manually by using data/recurring patches.

### Add a column to table

The following example adds the `date_closed` column.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
+       <column xsi:type="timestamp" name="date_closed" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

### Drop a column from a table

The following example removes the  `date_closed` column by deleting its `column` node. To drop a column declared in another module, redeclare it with the `disabled` attribute set to `true`.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
-       <column xsi:type="timestamp" name="date_closed" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

### Change the column type

The following example changes the `type` of the `title` column from `varchar` to  `tinytext`.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
-       <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
+       <column xsi:type="tinytext" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

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

The following example adds the `INDEX_SEVERITY` index to the `declarative_table` table.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="tinytext" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
+       <index referenceId="INDEX_SEVERITY" indexType="btree">
+           <column name="severity"/>
+       </index>
    </table>
</schema>
```
### Create a foreign key

In the following example, the selected `constraint` node defines the characteristics of the `FL_ALLOWED_SEVERITIES` foreign key.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
+       <constraint xsi:type="foreign" referenceId="FL_ALLOWED_SEVERITIES" table="declarative_table" 
+               column="severity" referenceTable="severities" referenceColumn="severity_identifier" 
+               onDelete="CASCADE"/>
    </table>
</schema>
```

### Drop a foreign key

The following example removes the  `FL_ALLOWED_SEVERITIES` foreign key by deleting its `constraint` node. To drop a constraint declared in another module, redeclare it with the `disabled` attribute set to `true`.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
-       <constraint xsi:type="foreign" referenceId="FL_ALLOWED_SEVERITIES" table="declarative_table" 
-               column="severity" referenceTable="severities" referenceColumn="severity_identifier" 
-               HonDelete="CASCADE"/>
    </table>
</schema>
```

### Recreate a foreign key

In this example, Module A defines a new table with primary key `id_column`. Module B declares its own schema, in which it creates a new column (`new_id_column`) and changes the primary index to this column. 
Module B disables the original primary key and sets a new primary key with a `referenceId` value that is different from PRIMARY. Although this value is different, the real name of the primary key in the database remains PRIMARY.

 **Module A declaration**

```xml
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

 **Module B declaration**

```xml
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="new_id_column" padding="10" unsigned="true" nullable="false"
                comment="New Entity Id"/>
        <constraint xsi:type="primary" referenceId="PRIMARY" disabled="true"/>
        <constraint xsi:type="primary" referenceId="NEW_PRIMARY">
            <column name="new_id_column"/>
        </constraint>
    </table>
</schema>
```

## Other tasks

### Disable a module

When a module is disabled from the Admin console, its database schema configuration is no longer read on upgrade or install. As a result, subsequent system upgrades rebuild the database schema without the module's tables, columns, or other elements.


[How to generate urns?]:{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html
[Db Schema Autocomplete]:{{ page.baseurl }}/extension-dev-guide/declarative-schema/images/db-schema-autocomplete.png
