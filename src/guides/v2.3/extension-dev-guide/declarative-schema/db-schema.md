---
group: php-developer-guide
title: Configure declarative schema
---

Before Magento 2.3, extension developers were required to write code (PHP scripts) to change the database schema. The following types of scripts existed before Magento 2.3:

*  InstallData and InstallSchema scripts, which are executed the first time a module is installed.
*  UpgradeData and UpgradeSchema incremental scripts, which supplement an existing module schema.
*  Recurring scripts, which are executed each time you install or upgrade Magento.

Each script iteratively adds changes. During the installation process, upgrade scripts apply only those changes that have not been applied yet. For example, if you have a module with version 2.1.8 installed and the latest version is 2.1.11, then the upgrade script changes for 2.1.9, 2.1.10, and 2.1.11 will be applied, in order, when you upgrade to 2.1.11. Each upgrade script is responsible for checking the required version for each change to apply. The Magento installation only knows that a module has an upgrade script, not what versions it affected. That procedure is called _migration setup_ or _migration scripts_.

The main disadvantage of this approach is that Magento applies changes blindly. For example, in one version a new database column might be introduced, only to be removed in the next. _Declarative setup_ eliminates this type of unnecessary work.

Declarative setup is based on database structure declarations, and is used in projects such as [Doctrine](http://www.doctrine-project.org/). Schema files declare what the database structure should be,
and Magento determines the differences between the current table structure and what it should be. These differences can be represented with atomic SQL operations.

Magento prioritizes the declarative schema and executes the declarative install schemas before the [data and schema patches]({{ page.baseurl }}/extension-dev-guide/declarative-schema/data-patches.html).

The following example, extracted from the `Catalog/etc/db_schema.xml` file, defines the `catalog_product_entity_datetime` table:

```xml
<table name="catalog_product_entity_datetime" resource="default" engine="innodb"
           comment="Catalog Product Datetime Attribute Backend Table">
    <column xsi:type="int" name="value_id" padding="11" unsigned="false" nullable="false" identity="true" comment="Value ID"/>
    <column xsi:type="smallint" name="attribute_id" padding="5" unsigned="true" nullable="false" identity="false" default="0" comment="Attribute ID"/>
    <column xsi:type="smallint" name="store_id" padding="5" unsigned="true" nullable="false" identity="false" default="0" comment="Store ID"/>
    <column xsi:type="int" name="entity_id" padding="10" unsigned="true" nullable="false" identity="false" default="0" comment="Entity ID"/>
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

 {:.bs-callout-info}
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
`resource` | The database shard on which to install the table. This value must be `default`, `checkout`, or `sales`.
`comment` | Table comment

A `table` node can contain three types of subnodes:

*  `column`
*  `constraint`
*  `index`

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
<li><code>decimal</code></li>
<li><code>float</code></li>
<li><code>int</code> (includes smallint, bigint, tinyint)</li>
<li><code>real</code> (includes decimal, float, double, real)</li>
<li><code>smallint</code></li>
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
<td>Specifies the length of a column. Can be used for `char`, `varchar`, and `varbinary` types.</td>
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

For more information about each type, refer to the annotations in the corresponding XSD file. The location of the XSD file depends on how you installed Magento.

*  [Archive download]({{page.baseurl}}/install-gde/prereq/zip_install.html): `<Magento_root_directory/vendor/magento/framework/Setup/Declaration/Schema/etc`
*  [Composer]({{page.baseurl}}/install-gde/composer.html) or [GitHub]({{page.baseurl}}/install-gde/prereq/dev_install.html) installation: `<Magento_root_directory/lib/internal/Magento/Framework/Setup/Declaration/Schema/etc`

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

 {:.bs-callout-info}
To keep entity identifiers as immutable values, the declarative schema does not support `ON UPDATE` action for `constraint`.

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

 {:.bs-callout-info}
When creating a new table, remember to [generate]({{ page.baseurl}}/extension-dev-guide/declarative-schema/migration-commands.html#create-whitelist) the `db_schema_whitelist.json` file.

### Drop a table

In the following example, the `declarative_table` table was completely removed from the `db-schema.xml` file.

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

Table renaming is supported. The declarative schema will create a new table with the new name and drop the table with the old name.
Renaming a table via `RENAME TABLE` is *NOT* supported.
To migrate data from another table, specify the `onCreate` attribute on the `table` declaration, and add specify the source table name:

```xml
onCreate="migrateDataFromAnotherTable(catalog_category_entity)"
```

Please note that migrating data from another table and renaming columns at the same time is not supported.

This declarative process of renaming a table is not fast. If you need to migrate lots of data quickly you can create a CSV table dump using the `--safe-mode=1` and add the data manually by using data/recurring patches.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
+    <table name="new_declarative_table" onCreate="migrateDataFromAnotherTable(declarative_table)">
-    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

 {:.bs-callout-info}
When renaming a table, remember to regenerate the `db_schema_whitelist.json` file so it contains the new name in addition to the old one.

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

 {:.bs-callout-info}
When adding a new column into table, remember to [generate]({{ page.baseurl}}/extension-dev-guide/declarative-schema/migration-commands.html#create-whitelist) the `db_schema_whitelist.json` file.

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

 {:.bs-callout-info}
It is possible to drop a column only if it exists in the `db_schema_whitelist.json` file.

### Change the column type

The following example changes the `type` of the `title` column from `varchar` to  `text`.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
-       <column xsi:type="varchar" name="title" nullable="false" length="255" comment="Title"/>
+       <column xsi:type="text" name="title" nullable="false" comment="Title"/>
        <column xsi:type="timestamp" name="time_occurred" padding="10" comment="Time of event"/>
        <constraint xsi:type="primary" referenceId="PRIMARY">
            <column name="id_column"/>
        </constraint>
    </table>
</schema>
```

### Rename a column

To rename a column, delete the original column declaration and create a new one. In the new column declaration, use the `onCreate` attribute to specify which column to migrate data from. Use the following construction to migrate data from the same table.

```xml
onCreate="migrateDataFrom(entity_id)"
```

 {:.bs-callout-info}
When renaming a column, remember to regenerate the `db_schema_whitelist.json` file so it contains the new name in addition to the old one.

### Add an index

The following example adds the `INDEX_SEVERITY` index to the `declarative_table` table.

```diff
<schema xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="urn:magento:framework:Setup/Declaration/Schema/etc/schema.xsd">
    <table name="declarative_table">
        <column xsi:type="int" name="id_column" padding="10" unsigned="true" nullable="false" comment="Entity Id"/>
        <column xsi:type="int" name="severity" padding="10" unsigned="true" nullable="false" comment="Severity code"/>
        <column xsi:type="text" name="title" nullable="false" length="255" comment="Title"/>
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

{:.bs-callout-info}
Foreign keys can only be added to tables when both tables were created using a declarative schema (`db_schema.xml`).

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
-               onDelete="CASCADE"/>
    </table>
</schema>
```

 {:.bs-callout-info}
It is possible to drop a foreign key only if it exists in the `db_schema_whitelist.json` file.

### Recreate a foreign key

In this example, Module A defines a new table with primary key `id_column`. Module B declares its own schema, in which it creates a new column (`new_id_column`) and changes the primary index to this column.
Module B disables the original primary key and sets a new primary key with a `referenceId` value that is different from PRIMARY. Although this value is different, the real name of the primary key in the database remains PRIMARY.

**Module A declaration:**

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

**Module B declaration:**

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

When a module is disabled in `app/etc/config.php`, its database schema configuration is no longer read on upgrade or install. As a result, subsequent system upgrades rebuild the database schema without the module's tables, columns, or other elements.
Please note that the `db_schema_whitelist.json` file of disabled modules is still read during upgrades of installs, so the declarative schema system can perform the necessary operations.
Practically, this means that if you disable a module which uses declarative schema and run `bin/magento setup:upgrade`, *its database tables will be dropped* (see more details and discussion at  https://github.com/magento/magento2/issues/24926). Please consider using `setup:upgrade --safe-mode=1` in order to create a database backup after disabling a module and then eventually `setup:upgrade --data-restore=1` if you enable the module back and wish to restore from that backup.

[How to generate urns?]:{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html
[Db Schema Autocomplete]:{{ page.baseurl }}/extension-dev-guide/declarative-schema/images/db-schema-autocomplete.png
