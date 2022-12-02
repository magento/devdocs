---
group: graphql
title: GraphQL security configuration
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/usage/security-configuration/
layout: migrated
---

The Framework and `GraphQl` module `di.xml` files define several security-related configuration values that you should review to ensure they align with types of mutations and queries that you run.

To override these default values, create a custom module and provide a new value in the appropriate [di.xml]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html) file.

## Input limiting

In GraphQL, you can limit the maximum page size allowed. For information about how to enable and configure this feature, as well as additional arguments that are applicable to web APIs in general, see [API security]({{page.baseurl}}/get-started/api-security.html).

## GraphQl module configuration

The `GraphQl/etc/di.xml` file contains two arguments that can be overridden to enhance security and prevent performance bottlenecks:

Attribute | Default value | Description
--- | --- | ---
`queryComplexity` | 300 | Defines the maximum number of fields, objects, and fragments that a query can contain.
`queryDepth` | 20 | Defines the maximum depth of nodes that query can return.

### Query complexity

A complex GraphQL query, such as the [`cart`]({{page.baseurl}}/graphql/queries/cart.html) or [`products`]({{page.baseurl}}/graphql/queries/products.html) query, can potentially generate a heavy workload on the server. Complex queries can potentially be used to create distributed denial of service (DDoS) attacks by overloading the server with specious requests.

Each instance of the following items adds 1 to the complexity score:

*  A field and parent field in the body of the query.
*  A field in an inline fragment.
*  A field in a fragment spread. If a fragment spread is used multiple times, each field within is counted that number of times.

The following items do not count toward the complexity score:

*  The root `query` field
*  Fragment declarations
*  Fragment spread declarations

The following sample query contains all of the items listed above.

```graphql
query {
  countries {
    full_name_english
    name1: full_name_english
    ...on Country {
        two_letter_abbreviation
    }
    ...myFrag
    ...myFrag
  }
}
fragment myFrag on Country {
    three_letter_abbreviation
}
```

The complexity count for the query is 6. These lines contributed to the count:

*  `countries {}`
*  `full_name_english` (first instance)
*  `name1: full_name_english`
*  `two_letter_abbreviation`
*  `three_letter_abbreviation` (first instance of `...myFrag`)
*  `three_letter_abbreviation` (second instance of `...myFrag`)

Creating the `name1` alias did not cause the system to double count the entry.

If the count does not exceed the threshold set by the `queryComplexity` attribute, Magento validates and processes the query.

### Query depth

The `queryDepth` attribute specifies the maximum depth a query can return. This can be an issue for queries that return objects that show a hierarchy, such as [`CategoryTree`]({{page.baseurl}}/graphql/queries/categories.html), or queries that return detailed data on complex [products]({{page.baseurl}}/graphql/queries/products.html). The default value of 20 allows for deep hierarchies and products, but you might want to reduce this number if you know that legitimate queries will never reach that depth.

The following query has a maximum depth of 5.

```graphql
{
  categories(
    filters: {
      parent_id: {in: ["2"]}
    }
  ) {
    total_count
    items {
      uid
      level
      name
      path
      children_count
      children {
        uid
        level
        name
        path
        children_count
        children {
          uid
          level
          name
          path
          children_count
          children {
            uid
            level
            name
            path
          }
        }
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
  }
}
```

These fields contribute to the depth:

*  `items`
*  `children` (first instance)
*  `children` (second instance)
*  `children` (third instance)
*  `uid` and other fields in this node

If the depth of the query exceeds the value  `queryDepth`, the system returns an error.
