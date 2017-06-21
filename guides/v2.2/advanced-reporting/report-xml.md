---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Report XML
menu_title: Report XML
menu_order: 2
menu_node:
version: 2.2
github_link: advanced-reporting/report-xml.md
---

**Report XML** is a markup language for building the Analytics reports.
The language declares SQL queries using the XML declaration. Report XML is easy to process and validate.

Third party developers can retrieve data using a report name.
Report name is the same as the `name` attribute in the _&lt;report&gt;_ node, as described below.
The `getReport` method of the report provider returns the object that implements the Iterator Interface.

## Creating a new report

Report files must be located in the `etc` folder of your module, like this:

```
<module_name>/etc/reports.xml
```

Report files can be located in any custom module that depends on Analytics (e.g. the `SalesAnalytics` module created for Sales related reports).
Each report is declared in the _&lt;report&gt;_ node inside the _&lt;config&gt;_ node.
A single report node is rendered into a single SQL query.

The _&lt;config&gt;_ node contains the following attributes:

|Name|Description|Required?|
|--- |--- |--- |
|name|Name of report|True|
|connection|Name of connection to the DB|False|
|iterator|Full class name to a statement iterator|False|

All data of the `reports.xml` file from the _&lt;report&gt;_ node that has the same attribute name will be merged.
The Magento store can have more than one DB.
Therefore, we should specify a connection name using the `connection` attribute.

You can use a custom iterator to modify or filter data.
To use a custom iterator, add an `iterator` attribute that must contain an iterator class or interface name.
This iterator can get statement iterator in the constructor method and wrap or change the current values with the custom data.

Below is an example of the `reports.xml` file:

```xml
<?xml version="1.0"?>
   <!--
   /**
    * Copyright © 2013-2017 Magento, Inc. All rights reserved.
    * See COPYING.txt for license details.
    */
   -->
   <config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Analytics:etc/reports.xsd">
       <report name="modules" connection="default" iterator="Magento\Analytics\Model\ReportXml\ModuleIterator">
           <source name="setup_module">
               <attribute name="module" alias="module_name"/>
               <attribute name="schema_version"/>
               <attribute name="data_version"/>
           </source>
       </report>
       <report name="config_data" connection="default">
           <source name="core_config_data">
               <attribute name="path"/>
               <attribute name="value"/>
           </source>
       </report>
   </config>
```

## Data sources

The data sources (that must correspond to table names in a database) are described inside the _&lt;report&gt;_ node.
The main table is specified with the _&lt;source&gt;_ tag.
After rendering, it is represented as the `FROM` statement in an SQL query.

The _&lt;source&gt;_ node contains the following attributes:

|Name|Description|Required?|
|--- |--- |--- |
|name|Table name|True|
|alias|Table alias|False|

The name must be the same as the table name in DB.
The `alias` attribute can be used in the same way as an alias in the SQL.

In the source node, you can also add a data source with the _&lt;link-source&gt;_ tag.
After rendering it is represented as the `JOIN` statement in an SQL query.

The _&lt;link-source&gt;_ node contains the following attributes:

|Name|Description|Required?|
|--- |--- |--- |
|name|Table name|True|
|alias|Table alias|False|
|link-type|Join type|False|

The name must be the same as the table name in DB.
The `alias` attribute can be used in the same way as an alias in the SQL.
The `link-type` attribute specifies the type of join in SQL query and can be either `INNER` or `LEFT`.

Join conditions are described in the _&lt;link-source&gt;_ node using the _&lt;using&gt;_ tag.
After rendering it is represented as the `ON` statement in an SQL query.
_&lt;using&gt;_ works in the same way as the filter, described below in this document.

**Example of orders' data source in reports.xml**

```
<report name="orders" connection="sales">
    <source name="sales_order" alias="sales">
        <attribute name="entity_id"/>
        <attribute name="base_grand_total"/>
        <attribute name="base_tax_amount"/>
        <attribute name="base_shipping_amount"/>
        <attribute name="coupon_code"/>
        <attribute name="created_at"/>
        <attribute name="store_id"/>
        <attribute name="email"/>
        <link-source name="sales_order_address" alias="billing" link-type="left">
            <attribute name="email"/>
            <using glue="and">
                <condition attribute="parent_id" operator="eq" type="identifier">entity_id</condition>
                <condition attribute="address_type" operator="eq" type="value">billing</condition>
            </using>
        </link-source>
    </source>
</report>
```

## Report columns

Report XML does not support the asterisk statement.
All columns must be declared:

* for the main table — inside the _&lt;source&gt;_ node

* for join tables — inside the _&lt;link-source&gt;_ node

Columns are added using the _&lt;attribute&gt;_ tag.

The _&lt;attribute&gt;_ node contains the following attributes:

|Name|Description|Required?|
|--- |--- |--- |
|name|Column name|True|
|alias|Column alias|False|

The name must be the same as the column name in DB.
The `alias` attribute can be used in the same way as the column alias in SQL.
Additional columns can be added using a custom iterator declaration (see the [Creating a new report](#creating-a-new-report) section above).

### Report filters

A report can be filtered using the _&lt;filter&gt; tag_, declared inside the _&lt;source&gt;_ node.

Filters use an attribute glue that helps filter records based on more than one condition.
Glue has 2 types:

* __AND__ (default)

* __OR__

A node filter can have nested filters or/and _&lt;conditions&gt;_.

**Example of a nested condition in SQL:**

```
WHERE ((billing.entity_id IS NULL AND ((billing.entity_id < '200' AND billing.entity_id != '42') AND (billing.entity_id > '200' OR billing.entity_id != '201'))))
```

**Example of a nested condition in Report XML:**

```
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

The _&lt;conditions&gt;_ node contains the following attributes:

|Name|Description|Required?|
|--- |--- |--- |
|attribute|Column name|True|
|type|Type of comaprsion value|False|
|operator|Comparison operator|True|

The attribute must be the same as the column name in DB.

The attribute type can be a value or an identifier.
In case the type is an identifier, the value inside a condition is the column.
In case type is value, it means it is the scalar value.
By default, the type is the value.

An operator describes which comparison operator is used to compare columns with the value or columns that can be specified inside the _&lt;conditions&gt;_ XML node.

All the supported comparison operators can be found in:

```
\Magento\Analytics\ReportXml\DB\ConditionResolver::$conditionMap.
```