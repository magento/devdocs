---
layout: default
group: analytics
subgroup: Advanced Reporting
title: Report XML
menu_title: Report XML
menu_order: 4
menu_node:
version: 2.2
github_link: advanced-reporting/report-xml/index.md
---

**Report XML** is a markup language created to build the Analytics reports *Что такое Analytics reports*{: style="color: red"}
The language declares SQL queries using declarations in XML. It is easy to process and validate. *За счет чего easy to process and validate? В чем это проявляется?*{: style="color: red"}

You can retrieve data for integration with analytical system using a report name. 
A report name is the same as the `name` attribute in the `<report>` node as described below.
The `getReport` method of a report provider returns an object that implements the Iterator Interface. *Что за интерфейс?*{: style="color: red"}

## Report columns

Report XML does not support the asterisk statement. *Что такое asterisk statement*{: style="color: red"}
All columns must be declared:

* for the main table — inside the `<source>` node

* for join tables — inside the `<link-source>` node

Columns are added using the `<attribute>` tag.

Additional columns can be added using a custom iterator declaration (see the [Creating a new report](#creating-a-new-report) section above).

## Example

The following is an example of `report.xml`:

{% highlight xml %}
<?xml version="1.0"?>
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
{%endhighlight%}

*Добавить текстовое пояснение к примеру*{: style="color: red"}

## Syntax and structure

All report files must be located in the `etc` directory of a module, like this:

```
<module_dir>/etc/reports.xml
```

The following is a visualized XML Schema for `reports.xml`:
 
![A visualized XML Schema for `reports.xml`](./images/report_xsd.png)

Report files can be located in any module that depends on the `Analytics` module (e.g. the `SalesAnalytics` module created for the reports related *Sales*).
Each report is declared in the `<report>` node.

A `report` node is rendered into an SQL query.

*Добавить картинку с XML и полученным из него SQL со стрелочами, показывающими преобразования параметров*{: style="color: red"}

### `<config>`

Configuration of an XML.

|Attribute|Description|Constant value|Use|
|--- |--- |--- |
|`xmlns:xsi`|Default namespace declaration.|http://www.w3.org/2001/XMLSchema-instance|Required|
|`xsi:noNamespaceSchemaLocation`|An XML Schema document that does not have a target namespace.|urn:magento:module:Magento_Analytics:etc/reports.xsd|Required|

### `<report>`

*Добавить краткое описание зачем нужна эта нода.*{: style="color: red"}

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Name of report configuration. You can use it for merging purposes or as a reference in |Required|
|`connection`|Name of connection to the database, when a Magento store has more than one database.|Optional|
|`iterator`|Full class name or an interface name of a statement iterator. To use a custom iterator, add an `iterator` attribute which contains an iterator class or an interface name. This iterator can get statement iterator in the constructor method and wrap or change the current values with the custom data.|Optional|

All data of the `reports.xml` file from the `<report>` node that has the same attribute `name` will be merged. *Имеется ввиду, что если такое же имя репорта задекларировано в одном `reports.xml` несколько раз? Или это мердж для `reports.xml` из разных модулей?*{: style="color: red"}

### `<source>`

The data sources that must correspond to table names in a database.

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Table name|Required|
|`alias`|Table alias|Optional|

The main table is specified with the `<source>` tag.
After rendering, it is represented in an SQL query as the `FROM` statement .

A report can be filtered using `<filter>` declared inside the `<source>` node.

#### Example

The following is an example of orders' data source

{%highlight xml%}
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
{%endhighlight%}

*Добавить описание примера*{: style="color: red"}

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

The `<attribute>` node *коротко описать зачем нужна нода*{: style="color: red"}

|Attribute|Description|Use|
|--- |--- |--- |
|`name`|Column name in database.|Required|
|`alias`|Column alias. It can be used in the same way as the column alias in SQL.|Optional|

### `<filter>`

A report can be filtered using `<filter>` declared inside the parent node.
The node can have nested filters and `<conditions>`.
Filters use an attribute `glue` that helps to filter records that are based on more than one condition.

|Attribute|Description|Values|Use|
|--- |--- |--- |
|`glue`|Logical operator.|`or`, `and`|Optional|

#### Example

**Example of a nested condition in SQL**

{% highlight sql%}
WHERE ((billing.entity_id IS NULL AND ((billing.entity_id < '200' AND billing.entity_id != '42') AND (billing.entity_id > '200' OR billing.entity_id != '201'))))
{% endhighlight %}

**Example of a nested condition in Report XML**

{% highlight xml%}
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
{% endhighlight %}

*Добавить описание примера*{: style="color: red"}

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


<!-- ABBREVIATIONS -->
*[MBI]: Magento Business Analytics