---
group: graphql
title: Define the GraphQL schema for a module
redirect_from: /guides/v2.4/graphql/develop/configure-graphql-xml.html
---

Each module that adds to or extends from a GraphQL schema can do so by placing a `schema.graphqls` file in its `etc` directory. Magento Core adds [`GraphQl`]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/GraphQl) modules based on the purpose of the schema being extended/added and the core modules they depend on. For example, the `CustomerGraphQl` module adds a query and multiple mutations to the `graphql` endpoint to view and modify customer data. The `CustomerGraphQl` module relies on the `Customer` core module.

A GraphQL module's `schema.graphqls` file defines how the attributes defined in the module can be used in GraphQL queries and mutations. If your module's attributes are completely self-contained, then the `schema.graphqls` file defines the queries, mutations, the interfaces used, the data types of all the attributes, and any enumerations that restrict the possible attribute contents. If your module extends another module, then you must define those attributes and ensure that the other module can load your attributes. For example, the `CatalogGraphQl` module defines the `PriceAdjustmentCodesEnum`, but the `TaxGraphQl` and `WeeeGraphQl` modules define the enumeration values.

The `<module_name>/etc/schema.graphqls` file:

*  Defines the structure of queries and mutations.
*  Determines which attributes can be used for input and output in GraphQL queries and mutations. Requests and responses contain separate lists of valid attributes.
*  Points to the resolvers that verify and process the input data and response.
*  Serves as the source for displaying the schema in a GraphQL browser.
*  Defines which objects are cached.

The base `schema.graphqls` file, located in the `app/code/Magento/GraphQl/etc/` directory, defines the basic structure of GraphQL queries and mutations. It also includes definitions for comparison operators and paging information for search results. The `webonyx/graphql-php` library enforces the syntax of all `schema.graphqls` files.

## Define queries

A query definition can be one line, or it can be complex. If your module's query implements `searchCriteria`, then you must define arguments that define filters and pagination information, all of which adds complexity. However, if you expect a single result from your query, then its definition can be simple.

The following example shows the `products` query. The `type` is defined as a `Query`. The `products` definitions define the keywords that are used to construct a query, as shown in [Using queries]({{ page.baseurl }}/graphql/queries/index.html). The parameter definitions will be discussed in [Specify output attributes](#specify-output-attributes).

```text
type Query {
    products (
        search: String
        filter: ProductAttributeFilterInput
        pageSize: Int = 20
        currentPage: Int = 1
        sort: ProductAttributeSortInput
    ): Products @resolver(class: "Magento\\CatalogGraphQl\\Model\\Resolver\\Products")
}
```

In contrast, the `customer` query returns the `Customer` object associated with the current user. There is no need to define pagination information.

```text
type Query {
    customer: Customer @resolver(class: "Magento\\CustomerGraphQl\\Model\\Resolver\\Customer")
}
```

If all your module's attributes are extension attributes for existing modules, then no query definition is required. In this case, the attributes point to the other module's query definition.

### Declare input attributes

You must explicitly define each attribute that can be used as input in a GraphQL query. In the simplest cases, you can create a single `type` definition that includes all the input, output, and sorting attributes for an object. This might not be possible if your module performs calculations, or otherwise has attributes that aren't available at the time of the query.

The following example shows the `products` query, which has multiple optional attributes:

```graphql
products(
  search: String
  filter: ProductAttributeFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductAttributeSortInput
): Products
```

The `ProductAttributeFilterInput` object used in the `filter` attribute is a custom input type that determines which attributes can be used to narrow the results in a `products` query. The attributes of this object are of type `FilterEqualTypeInput`. (These entities are defined in the `etc/schema.graphqls` files of the `GraphQl` and `CatalogGraphQl` modules). In other use cases, you would be required to create your own input type in the `<magento_root>/app/code/<vendor_name>/<module_name>/etc/schema.graphqls` file.

The following attributes can be used as filters using the `ProductAttributeFilterInput` object.

```graphql
input ProductAttributeFilterInput {
    category_id: FilterEqualTypeInput
}
```

The `FilterEqualTypeInput` type defines a filter that matches the input exactly.

```graphql
input FilterEqualTypeInput {
    in: [String]
    eq: String
}
```

The following example filter searches for products whose `category_id` equals 1.

```graphql
{
  products(filter: {category_id: {eq: "1"}}) {
    total_count
    items {
      name
    }
  }
}
```

The search returns products whose `category_id` equals 1.

```json
{
  "data": {
    "products": {
      "total_count": 2,
      "items": [
        {
          "name": "Josie Yoga Jacket"
        },
        {
          "name": "Selene Yoga Hoodie"
        }
      ]
    }
  }
}
```

### Specify output attributes {#specify-output-attributes}

You must know the data type of each attribute, whether it is scalar or an object, and whether it can be part of an array. In addition, each attribute within an object must be defined in the same manner.

In a `schema.graphqls` file, the output `Interface` defines top-level attributes. Each object returned is defined in a `type` definition.

The following example shows the `products` query. The query returns a `Products` object containing the attributes of the specified data types.

Attribute | Data type | Description
--- | --- | ---
`aggregations` | [[Aggregation]]({{ page.baseurl }}/graphql/queries/products.html#Aggregation) | Layered navigation aggregations
`items` | [[ProductInterface]]({{ page.baseurl }}/graphql/queries/products.html#ProductInterface) | An array of products that match the specified search criteria
`page_info` | [SearchResultPageInfo]({{ page.baseurl }}/graphql/queries/products.html#SearchResultPageInfo) | An object that includes the `page_info` and `currentPage` values specified in the query
`sort_fields` |  [SortFields]({{ page.baseurl }}/graphql/queries/products.html#SortFields) | An object that includes the default sort field and all available sort fields
`total_count` | Int | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not

### Define the output interface

In many cases, the response contains data that was either not available as input, or was transformed in some manner from the input. For example, when you specify a price in an input filter, Magento evaluates it as a Float value. However, `Price` output objects contain a Float value, a currency value, and possibly minimum/maximum values and tax adjustments. You can define a `typeResolver` to point to the Resolver object, which interprets the GraphQL query. If your module contains only attributes that extend another module, then this parameter is optional. Otherwise, it is required. See [Resolvers]({{ page.baseurl }}/graphql/develop/resolvers.html) for more information.

Output types that represent entities that can be manipulated (created, updated, or removed) and/or can be cached on the client MUST have `id` field. The type of the field SHOULD be `ID`.

The following example shows the `products` query. The `page_info` attribute contains the `SearchResultPageInfo` data type which is defined in the `schema.graphqls` file under `ModuleGraphQl`. In other use cases, you would be required to create your own output type in the `<magento_root>/app/code/<vendor_name>/<module_name>/etc/schema.graphqls` file.

The SearchResultPageInfo provides navigation for the query response.

```text
type SearchResultPageInfo {
    page_size: Int
    current_page: Int
    total_pages: Int
}
```

The following example uses the `page_info` output attribute which is of `SearchResultPageInfo` type to get all the information related to the page.

```graphql
{
  products(search: "Yoga pants", pageSize: 2) {
    total_count
    items {
      name
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

The search returns 45 items, but only the first two items are returned on the current page and all the information regarding the page is returned.

```json
{
  "data": {
    "products": {
      "total_count": 45,
      "items": [
        {
          "name": "Josie Yoga Jacket"
        },
        {
          "name": "Selene Yoga Hoodie"
        }
      ],
      "page_info": {
        "page_size": 2,
        "current_page": 1
      }
    }
  }
}
```

## Define mutations
A mutation definition contains the following information:

*  The mutation name
*  The input attributes and objects
*  The attributes and objects that can be returned in the output
*  The path to the resolver

The following mutation creates a customer.

```text
type Mutation {
    createCustomer (input: CustomerInput!): CustomerOutput @resolver(class: "\\Magento\\CustomerGraphQl\\Model\\Resolver\\CreateCustomer") @doc(description:"Create customer account")
}
```

This mutation requires the `CustomerInput` object, which defines the customers name, email, password, and other attributes, as input.

Input parameters can be optional when the context is provided in a header or other mechanism.

## Define enumerations

You can optionally define enumerations to help prevent input errors. Magento capitalizes all enumerated responses. If a value contains a dash (-), the system converts it to an underscore (_). This is done to maintain compliance with the GraphQL specification.

## Annotations

You can describe any attribute, type definition, or other entity within a `schema.graphqls` file by appending the following to the line:

`@doc(description: "<Text>")`

For example:

```text
sku: FilterTypeInput @doc(description: "A number or code assigned to a product to identify the product, options, price, and manufacturer")
url_key: String @doc(description: "The url key assigned to the product")
product_count: Int @doc(description: "The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not")
```

Use the `@deprecated` directive to deprecate attributes and enum values. The GraphQL specification does not permit deprecating input values or arguments. The `reason` keyword allows you to specify which attribute/field or enum value should be used instead.

For example:

```text
type Query {
    cmsPage (
        id: Int @doc(description: "Id of the CMS page") @deprecated(reason: "Use `identifier`") @doc(description: "The CMS page ...")
        identifier: String @doc(description: "Identifier of the CMS page")
...
```

## Query caching

The `@cache` directive defines whether the results of certain queries can be cached. Queries relating to products, categories, and CMS may be cached.

Define cachable queries in the following manner:

```text
@cache(cacheIdentity: "Magento\\CmsGraphQl\\Model\\Resolver\\Block\\Identity")
```

The `cacheIdentity` value points to the [class]({{page.baseurl}}/graphql/develop/identity-class.html) responsible for retrieving cache tags.

A query without a `cacheIdentity` will not be cached.

To disable caching for queries declared in another module with a `cacheIdentity` class, the `@cache(cacheable: false)` directive can be used.
This `cacheable` argument is intended to disable caching for queries that are defined in another module.

`@cache(cacheable: false)`

Specifying `@cache(cacheable: false)` or `@cache(cacheable: true)` on a query without a `cacheIdentity` class has no effect: the query will not be cached.
If a query should **not** be cached, do not specify the `@cache` directive. Specifying `@cache(cacheable: false)`  is superfluous when no `cacheIdentity` is present.

See [Create a cache type]({{page.baseurl}}/extension-dev-guide/cache/partial-caching/create-cache-type.html) for information about enabling caching for custom modules.
