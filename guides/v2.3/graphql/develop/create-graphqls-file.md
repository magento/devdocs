---
layout: default
group: graphql
version: 2.3
title: Create a
github_link: graphql/develop/create-graphqls-file.md
---

A module's `schema.graphqls` file defines how the attributes defined in the module can be used in a GraphQL query. If your module's attributes are completely self-contained, then the `schema.graphqls` file defines the query, the interfaces used, the data types of all the attributes, and any enumerations that restrict the possible attribute contents. If your module extends another module (such as Catalog), then you must ensure that the other module can load your attributes.

The `<module_name>/etc/schema.graphqls` file defines the GraphQL schema for a module. This file:

* Defines the structure of queries.
* Determines which attributes to make available for GraphQL queries. You can define separate lists of attributes for queries and results.
* Serves as the source for displaying the schema in a GraphQL browser

The base `schema.graphqls` file, located in the `app/code/GraphQl/etc/` directory, provides the basic structure for all GraphQL queries, including definitions for comparison operators and paging information for search results.

The `webonyx/graphql-php` library enforces the syntax of all `schema.graphqls` files.

To illustrate how to configure the `schema.graphqls` file, let's suppose you have a module named Volumizer that calculates the volume of a product, given its height, width, and depth. We'll assume this module extends the Catalog module.

## Define the query

A query definition can be one line, or it can be complex. If your module's query implements `searchCriteria`, then you must define arguments that define filters and pagination information, all of which adds complexity. However, if you expect a single result from your query, then its definition can be simple.

The following example shows the `products` query. The `type` is defined as a `Query`.  The `products` definitions define the keywords that are used to construct a query, as shown in [Searches and pagination in GraphQL]({{page.baseurl}}graphql/search-pagination.html). The parameter definitions will be discussed in [Specify output attributes](#specify-output-attributes)

``` php
type Query {
    products (
        search: String,
        filter: ProductFilterInput,
        pageSize: Int = 20,
        currentPage: Int = 1,
        sort: ProductSortInput)
     ): Products @resolver(class: "Magento\\CatalogGraphQl\\Model\\Resolver\\Products")
}
```

In contrast, the `customer` query returns the `Customer` object associated with the current user. There is no need to define pagination information.

``` php
type Query {
    customer: Customer @resolver(class: "Magento\\CustomerGraphQl\\Model\\Resolver\\Customer")
}
```

If all your module's attributes are extension attributes for existing modules, then no query definition is required. In this case, the attributes point to the other module's query definition.

## Declare input attributes

You must explicitly define each attribute that can be used as input in a GraphQL query.

Because the Volumizer module extends `Catalog`, reference `ProductFilterInput` as the source and make each attribute be of type `FilterTypeInput`. In other use cases, you would be required to create your own input type.

The following example defines three Volumizer attributes (`v_height`, `v_width`, `v_depth`) that must be specified as input to a query.

``` php
input ProductFilterInput {
  v_height: FilterTypeInput
  v_width: FilterTypeInput
  v_depth: FilterTypeInput
}
```

## Specify sorting attributes

You can also define which attributes can be used for sorting the search results. This list does not not have to be identical to the list of input or output attributes.

This example allows sorting on the `v_volume` attribute only.

``` php
input ProductSortInput {
    v_volume: SortEnum
}

```

`ProductSortInput` indicates that the attributes are available to catalog (Product) queries. If you specify a module-specific value such as `VolumizerSortInput`, then the attribute will be available only to queries processed by that module.

`SortEnum` is defined in the base `graphql.xml` file.

## Specify output attributes {#specify-output-attributes}

Output attributes are more complex than input attributes. You must know the data type of each attribute, whether it is scalar or an object, and whether it can be part of an array. In addition, each attribute within an object must be defined in the same manner.

In an `schema.graphqls` file, the output `Interface` defines top-level attributes. Each object returned is defined in a `type` definition.

### Define the output interface

In many cases, the response contains data that was either not available as input, or it was transformed in some manner from the input. For example, when you specify a price in an input filter, Magento evaluates it as a Float value. However, `Price` output objects contain a Float value, a currency value, and possibly minimum/maximum values and tax adjustments. You can define a `typeResolver` to point to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{page.baseurl}}graphql/resolvers.html) for more information.

The following example defines module-specific output attributes for the Volumizer module.

``` php
interface ProductInterface @typeResolver(class: ""){
    v_height: Float
    v_width: Float
    v_depth: Float
    v_volume: VolumeWithUnit
}
```


Parameter | Description
--- | ---
`xsi:type` | Required. Must be `OutputInterface`
`name` | Required. A name, such as *ModuleName*`Interface` that uniquely identifies the output interface.
`typeResolver` | The path to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{page.baseurl}}graphql/resolvers.html) for more information.

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
enum VolumeEnum {
  IN3
  FT3
  CM3
  M3
}
```
<div class="bs-callout bs-callout-warning" id="info" markdown="1">
The specified `name` must end with the string `Input`.
</div>
