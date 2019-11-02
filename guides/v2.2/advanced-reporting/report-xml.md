---
group: advanced-reporting
title: Report XML
functional_areas:
    - Reports
---

**Report XML** is a markup language created to build advanced reports.
The language declares SQL queries using declarations in XML.

You can retrieve data for integration with advanced reporting service using a report name.
A report name is the same as the `name` attribute in the `<report>` node as described below.

## Report columns

Report XML does not support the asterisk statement.
All columns must be declared:

*  for the main table — inside the `<source>` node
*  for join tables — inside the `<link-source>` node

Columns are added using the `<attribute>` node.

## Syntax and structure

All report files are located in the `etc` directory of a module:

```text
<module_dir>/etc/reports.xml
```

The following is a visualized XML Schema for `reports.xml`:

{% include_relative img/reports_xsd.svg %}

Report files can be located in any module that depends on the `Analytics` module (e.g. the `SalesAnalytics` module created for the reports related to *Sales*).
Each report is declared in the `<report>` node.

A `report` node is rendered into an SQL query.

### `<config>`

Configuration of an XML.

|Attribute|Description|Constant value|Use|
|--- |--- |--- |
|`xmlns:xsi`|Default namespace declaration.|`http://www.w3.org/2001/XMLSchema-instance`|Required|
|`xsi:noNamespaceSchemaLocation`|An XML Schema document that does not have a target namespace.|`urn:magento:module:Magento_Analytics:etc/reports.xsd`|Required|

### `<report>`

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Name of report configuration. You can use it for merging purposes or as a reference.|Required|
|`connection`|Name of connection to the database, when a Magento store has more than one database.|Optional|
|`iterator`|Full class name or an interface name of a statement iterator. To use a custom iterator, add an `iterator` attribute which contains an iterator class or an interface name. This iterator can get statement iterator in the constructor method and wrap or change the current values with the custom data.|Optional|

All data of the `reports.xml` file from the `<report>` node that has the same attribute `name` will be merged.

### `<source>`

The data sources that correspond to table names in a database.

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Table name|Required|
|`alias`|Table alias|Optional|

The main table is specified with the `<source>` tag.
After rendering, it is represented in an SQL query as the `FROM` statement.

A report can be filtered using `<filter>` declared inside the `<source>` node.

### `<link-source>`

In the `source` node, you can also add a data source with the `<link-source>` tag.
After rendering it is represented as the `JOIN` statement in an SQL query.

The `<link-source>` node contains the following attributes:

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Table name|Required|
|`alias`|Table alias|Optional|
|`link-type`|Join type|Optional|

The name must be the same as the table name in database.
The `alias` attribute can be used in the same way as an alias in the SQL.
The `link-type` attribute specifies the type of join in SQL query and can be either `INNER` or `LEFT`.

Join conditions are described in the `<link-source>` node using the `<using>` tag.
After rendering it is represented as the `ON` statement in an SQL query.
`<using>` works in the same way as the filter, described below in this document.

### `<attribute>`

|Attribute|Description|Use
|--- |--- |---
|`name`|Column name in database|Required
|`alias`|Column alias. It can be used in the same way as the column alias in SQL.|Optional
|`function`|Available values: `count`, `lower`, `date`, `sum`, `max`, `avg`, `min`, `sha1`|Optional
|`group`|boolean|Optional
|`distinct`|boolean|Optional

### `<filter>`

A report can be filtered using `<filter>` declared inside the parent node.
The node can have nested filters and `<conditions>`.
Filters use an attribute `glue` that helps to filter records that are based on more than one condition.

|Attribute|Description|Values|Use|
|--- |--- |--- |
|`glue`|Logical operator|`or`, `and`|Optional|

#### Example

Example of a nested condition in SQL:

```sql
WHERE ((billing.entity_id IS NULL AND ((billing.entity_id < '200' AND billing.entity_id != '42') AND (billing.entity_id > '200' OR billing.entity_id != '201'))))
```

Example of a nested condition in Report XML:

```xml
<filter glue="and">
    <condition attribute="entity_id" operator="null" />
    <filter glue="and">
        <condition attribute="entity_id" operator="lt">200</condition>
        <condition attribute="entity_id" operator="neq">42</condition>
    </filter>
    <filter glue="or">
        <condition attribute="entity_id" operator="gt">200</condition>
        <condition attribute="entity_id" operator="neq">201</condition>
    </filter>
</filter>
```

### `<conditions>`

The `<conditions>` node contains the following attributes:

|Name|Description|Value|Required?|
|--- |--- |--- |
|`attribute`|Column name in the database.|string|Required|
|`type`|Type of comparison value.|`value` for a scalar value (default)<br/> `identifier` for a column|Optional|
|`operator`|Comparison operator|Required|

Comparison operator is used to compare columns with the value or columns that can be specified inside the `<conditions>` XML node.

You can find all the supported comparison operators in `\Magento\Analytics\ReportXml\DB\ConditionResolver::$conditionMap`.

<!-- LINK DEFINITIONS -->