---
layout: default
group: graphql
version: 2.3
title: Configure the GraphQL schema for a module
github_link: graphql/develop/configure-graphql-xml.md
---

The `<module_name>/etc/graphql.xml` file defines the GraphQL schema for a module. This file

* Defines the structure of queries.
* Determines which attributes to make available for GraphQL queries. You can define separate lists of attributes for queries and results.
* Serves as the source for displaying the schema in a GraphQL browser

A module's `graphql.xml` file inherits properties from the base `graphql.xml` file, located in the `app/code/GraphQl/etc/` directory. All `graphql.xml` files must follow the specifications defined in the `app/code/GraphQl/etc/graphql.xsd` file.

To illustrate how to configure the `graphql.xml` file, let's suppose you have a module named Volumizer that calculates the volume of a product, given its height, width, and depth. The contents of this file will vary, depending on whether the module extends the Catalog module or acts as a standalone.

## Define the query

A query definition can be one line, or it can be complex. If your module's query implements `searchCriteria`, then you must define arguments that define filters and pagination information, all of which adds complexity. However, if you expect a single result from your query, then its definition is simple.

The following example shows the `products` query. The top-level `name` is `Query`, indicating that is a child of the `Query` node. All module schema definitions contain this line. The `argument` definitions define the keywords that are used to construct a query, as shown in [Searches and pagination in GraphQL]({{page.baseurl}}/graphql/search-pagination.html). The parameter definitions will be discussed in [Specify output attributes](#specify-output-attributes)

``` xml
<type xsi:type="OutputType" name="Query">
    <field xsi:type="ObjectOutputField" name="products" type="Products" resolver="\Magento\GraphQlCatalog\Model\Resolver\Products">
        <argument xsi:type="ScalarArgument" name="search" type="String"/>
        <argument xsi:type="ObjectArgument" name="filter" type="ProductFilterInput" required="true"/>
        <argument xsi:type="ScalarArgument" name="pageSize" type="Int"/>
        <argument xsi:type="ScalarArgument" name="currentPage" type="Int"/>
        <argument xsi:type="ObjectArgument" name="sort" type="ProductSortInput"/>
    </field>
</type>
```

In contrast, this `customer` query returns the `Customer` object associated with the current user. There is no need to define pagination information.

``` xml
 <type xsi:type="OutputType" name="Query">
   <field xsi:type="ObjectOutputField" name="customer" type="Customer" resolver="Magento\CustomerGraphQl\Model\Resolver\Customer"/>
</type>`
```
The `resolver` parameter specifies the class that performs GraphQL request processing. See [Resolvers]({{page.baseurl}}/graphql/develop/resolvers.html) for more information.

If all your module's attributes are extension attributes for existing modules, then no query definition is required. In this case, the attributes point to the other module's query definition.

The Volumizer query will be based on the `products` query. Since we're not expecting large number of returned items, the `pageSize` and `currentPage` arguments are omitted.

``` xml
<type xsi:type="OutputType" name="Query">
    <field xsi:type="ObjectOutputField" name="volumizer" type="Volumizer" resolver="\Magento\GraphQlCatalog\Model\Resolver\Products">
        <argument xsi:type="ScalarArgument" name="search" type="String"/>
        <argument xsi:type="ObjectArgument" name="filter" type="VolumizerFilterInput" required="true"/>
        <argument xsi:type="ObjectArgument" name="sort" type="ProductSortInput"/>
    </field>
</type>
```

## Declare input attributes

You must explicitly define each attribute that can be used as input in a GraphQL query. Complex objects are not supported as inputs, so each attribute definition will contain an `xsi:type`, `name`, and `type`.

The following example defines four Volumizer attributes that can be specified as input to a query. If the Volumizer module extends Catalog, then the InputType `name` value must be the value assigned in the Catalog module's `graphql.xml`file (`ProductFilterInput`). If the Volumizer module is a standalone module, then provide a `name` such as `VolumizerFilterInput`. In this case, the attributes will be available only to queries processed by the Volumizer module.

<div class="bs-callout bs-callout-warning" id="info" markdown="1">
The specified `name` must end with the string `Input`.
</div>

``` xml
<type xsi:type="InputType" name="ProductFilterInput">
  <field xsi:type="ObjectInputField" name="v_height" type="FilterTypeInput"/>
  <field xsi:type="ObjectInputField" name="v_width" type="FilterTypeInput"/>
  <field xsi:type="ObjectInputField" name="v_depth" type="FilterTypeInput"/>
  <field xsi:type="ObjectInputField" name="v_volume" type="FilterTypeInput"/>
</type>
```

where:

* `xsi:type="InputType"` indicates that a set of input attributes are being defined.
* `name="ProductFilterInput"` specifies that the input attributes will be available to catalog (Product) queries.  The specified value must end with the string `Input`.
* `xsi:type="ObjectInputField"` indicates an input attribute is being defined.
* `name=<value>` specifies the name of an input attribute.
* `type="FilterTypeInput"` indicates the attribute can be used as part of a filter. `FilterTypeInput` is defined in the base `graphql.xml` file. It defines the types of comparisons  that the query can perform.

### Override default GraphQL settings

The base `graphql.xml` file defines the filter operations (`eq`, `like`, `gt`, etc.) that are available to all queries. If you want to restrict which filter operations can be used in queries in your module, add a definition similar to the following:

``` xml
<type xsi:type="InputType" name="FilterTypeInput">
  <field xsi:type="ScalarInputField" name="eq" type="String"/>
  <field xsi:type="ScalarInputField" name="gt" type="String"/>
  <field xsi:type="ScalarInputField" name="gteq" type="String"/>
  <field xsi:type="ScalarInputField" name="lt" type="String"/>
  <field xsi:type="ScalarInputField" name="lteq" type="String"/>
</type>
```

## Specify sorting attributes

You must also define which attributes can be used for sorting the search results. This list does not not have to be identical to the list of input or output attributes.

If your attributes extend another module, use the name defined in the extended module. Otherwise, be sure that the value assigned to `name` must end with the string `Input`.

This example allows sorting on the `v_volume` attribute only.

``` xml
<type xsi:type="InputType" name="ProductSortInput">
  <field xsi:type="ObjectInputField" name="v_volume" type="SortEnum"/>
</type>
```

where:

* `xsi:type="InputType"` indicates that a set of input attributes are being defined.
* `name="ProductSortInput"` specifies that the  attributes will be available to catalog (Product) queries. If you specify a value such as `VolumizerSortInput`, then the attribute will be available only to queries processed by the Volumizer module. The specified value must end with the string `Input`.
* `xsi:type="ObjectInputField"` indicates an input attribute is being defined.
* `name=<value>` specifies the name of an input attribute.
* `type="SortEnum"` is defined in the base `graphql.xml` file.

## Specify output attributes {#specify-output-attributes}

Output attributes are more complex than input attributes. You must know the data type of each attribute, whether it is scalar or an object, and whether it can be part of an array. In addition, each attribute within an object must be defined in the same manner.

In an `graphql.xml` file, the `OutputInterface` type definition is the container for top-level attributes. Each object returned is defined in an `OutputType` type definition.

### Define the output interface

Use the following parameters to define the `OutputInterface` container:

Parameter | Description
--- | ---
`xsi:type` | Required. Must be `OutputInterface`
`name` | Required. A name, such as *ModuleName*`Interface` that uniquely identifies the output interface.
`typeResolver` | The path to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{page.baseurl}}/graphql/resolvers.html) for more information.

For example:

``` xml
<type xsi:type="OutputInterface" name="ProductInterface" typeResolver="PathToModule\Model\MyResolver">
...
</type>
```

Each attribute is defined as follows:

Parameter | Description
--- | ---
`xsi:type` | Required. The value must be `ScalarOutputField`, `ScalarArrayOutputField`, `ObjectOutputField`, or `ObjectArrayOutputField`
`name` | The attribute name
`type` | Used only when the `xsi:type` is `ScalarOutputField` or `ObjectOutputField`. Specifies the attribute's data type, such as `String`, `Int`, `Float`, `Boolean`, or an object name.
`itemType` | Used only when the `xsi:type` is `ScalarArrayOutputField` or `ObjectArrayOutputField`. Specifies an object name.

For example:

``` xml
<field xsi:type="ScalarOutputField" name="v_height" type="Float"/>
<field xsi:type="ScalarOutputField" name="v_width" type="Float"/>
<field xsi:type="ScalarOutputField" name="v_depth" type="Float"/>
<field xsi:type-"ObjectOutputField" name="v_volume" type="VolumeWithUnit"/>
```

### Define attribute output types

Individual output types have the same structure as the output interface definition with the following exceptions:

* The `xsi:type` parameter must be set to `OutputType`.
* The `name` must match a value defined by the `type` parameter.
* The `typeResolver` parameter is not used.

The following example shows the output type definition of the `VolumeWithUnit` object:

``` xml
<type xsi:type="OutputType" name="VolumeWithUnit">
  <field xsi:type="ScalarOutputField" name="v_number" type="Float"/>
  <field xsi:type="ScalarOutputField" name="v_unit" type="String"/>
</type>
```

### Define enumerations

You can optionally define enumerations to help prevent input errors. Magento capitalizes all enumerated responses. If a value contains a dash (-), the system converts it to an underscore (_).

``` xml
<type xsi:type="Enum" name="VolumeEnum">
  <item name="in3">IN3</item>
  <item name="ft3">FT3</item>
  <item name="cm3">CM3</item>
  <item name="m3">M3</item>
</type>
```
