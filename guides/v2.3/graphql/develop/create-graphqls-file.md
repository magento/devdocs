---
group: graphql
title: Define the GraphQL schema for a module
redirect_from: graphql/develop/configure-graphql-xml.html
---

Each module that adds to or extends from a GraphQL schema can do so by placing a `schema.graphqls` file in its `etc` directory. Magento Core adds [`GraphQl`]({{ site.mage2300url }}app/code/Magento/GraphQl) modules based on the purpose of the schema being extended/added and the core modules they depend on. For example, the CustomerGraphQl module adds a query to the graphql endpoint to view customer data and relies on the Customer core module.

A GraphQL module's `schema.graphqls` file defines how the attributes defined in the module can be used in a GraphQL query. If your module's attributes are completely self-contained, then the `schema.graphqls` file defines the query, the interfaces used, the data types of all the attributes, and any enumerations that restrict the possible attribute contents. If your module simply extends another module (such as Catalog), then you must define those attributes and ensure that the other module can load your attributes.

The `<module_name>/etc/schema.graphqls` file:

* Defines the structure of queries.
* Determines which attributes to make available for GraphQL queries. You can define separate lists of attributes for queries and results.
* Points to the resolvers that verify and process the query data and response
* Serves as the source for displaying the schema in a GraphQL browser

The base `schema.graphqls` file, located in the `app/code/Magento/GraphQl/etc/` directory, provides the necessary structure for all GraphQL queries, including definitions for comparison operators and paging information for search results. The `webonyx/graphql-php` library enforces the syntax of all `schema.graphqls` files.

To illustrate how to configure the `schema.graphqls` file, let's suppose you have a module named Volumizer that calculates the volume of a product, given its height, width, and depth. We'll assume this module extends the Catalog module.

## Define the query

A query definition can be one line, or it can be complex. If your module's query implements `searchCriteria`, then you must define arguments that define filters and pagination information, all of which adds complexity. However, if you expect a single result from your query, then its definition can be simple.

The following example shows the `products` query. The `type` is defined as a `Query`.  The `products` definitions define the keywords that are used to construct a query, as shown in [Searches and pagination in GraphQL]({{ page.baseurl }}/graphql/search-pagination.html). The parameter definitions will be discussed in [Specify output attributes](#specify-output-attributes).

``` json
type Query {
    products (
        search: String,
        filter: ProductFilterInput,
        pageSize: Int = 20,
        currentPage: Int = 1,
        sort: ProductSortInput
    ): Products @resolver(class: "Magento\\CatalogGraphQl\\Model\\Resolver\\Products")
}
```

In contrast, the `customer` query returns the `Customer` object associated with the current user. There is no need to define pagination information.

``` json
type Query {
    customer: Customer @resolver(class: "Magento\\CustomerGraphQl\\Model\\Resolver\\Customer")
}
```

If all your module's attributes are extension attributes for existing modules, then no query definition is required. In this case, the attributes point to the other module's query definition.

## Declare input attributes

You must explicitly define each attribute that can be used as input in a GraphQL query. In the simplest cases, you can create a single `type` definition that includes all the input, output, and sorting attributes for an object. This might not be possible if your module performs calculations, or otherwise has attributes that aren't available at the time of the query.

The theoretical Volumizer module extends `Catalog`. In this case, you would reference `ProductFilterInput` as the source and make each attribute be of type `FilterTypeInput`. (Both of these entities are defined in `CatalogGraphQl`'s `schema.graphqls` file. In other use cases, you would be required to create your own input type.

The following example defines three Volumizer attributes (`v_height`, `v_width`, `v_depth`) that must be specified as input to a query.

``` json
input ProductFilterInput {
  v_height: FilterTypeInput
  v_width: FilterTypeInput
  v_depth: FilterTypeInput
}
```

## Specify sorting attributes

You can also define which attributes can be used for sorting the search results. This list does not have to be identical to the list of input or output attributes.

This example allows sorting on the `v_volume` attribute only.

``` json
input ProductSortInput {
    v_volume: SortEnum
}
```

`ProductSortInput` indicates that the attributes are available to catalog (Product) queries. If you specify a module-specific value such as `VolumizerSortInput`, then the attribute will be available only to queries processed by that module.

`SortEnum` is defined in the base `schema.graphqls` file.

## Specify output attributes {#specify-output-attributes}

You must know the data type of each attribute, whether it is scalar or an object, and whether it can be part of an array. In addition, each attribute within an object must be defined in the same manner.

In a `schema.graphqls` file, the output `Interface` defines top-level attributes. Each object returned is defined in a `type` definition.

### Define the output interface

In many cases, the response contains data that was either not available as input, or was transformed in some manner from the input. For example, when you specify a price in an input filter, Magento evaluates it as a Float value. However, `Price` output objects contain a Float value, a currency value, and possibly minimum/maximum values and tax adjustments. You can define a `typeResolver` to point to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{ page.baseurl }}/graphql/develop/resolvers.html) for more information.

The following example defines module-specific output attributes for the Volumizer module.

``` json
interface ProductInterface @typeResolver(class: "\\Path\\To\\typeResolver\\Class"){
    v_height: Float
    v_width: Float
    v_depth: Float
    v_volume: VolumeWithUnit
}
```

The `typeResolver` parameter specifies the path to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{ page.baseurl }}/graphql/develop/resolvers.html) for more information.

The `v_volume` attribute is defined as a `VolumeWithUnit` object. This object might be defined as follows:

``` json
type VolumeWithUnit {
    calculated_volume: Float
    unit: VolumeUnitEnum
}
```

The Volumizer module could return the `calculated_volume`, while the `unit` is an enumeration, described below.

### Define enumerations

You can optionally define enumerations to help prevent input errors. Magento capitalizes all enumerated responses. If a value contains a dash (-), the system converts it to an underscore (_). This is done to maintain compliance with the GraphQL specification.

``` json
enum VolumeUnitEnum {
    IN3
    FT3
    CM3
    M3
}
```

## Annotations

You can describe any attribute, type definition, or other entity within a `schema.graphqls` file by appending the following to the line:

`@doc(description: "<Text>")`

For example:

``` json
sku: FilterTypeInput @doc(description: "A number or code assigned to a product to identify the product, options, price, and manufacturer")
url_key: String @doc(description: "The url key assigned to the product")
product_count: Int @doc(description: "The number of products")
```
