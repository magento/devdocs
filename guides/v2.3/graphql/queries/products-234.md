---
group: graphql
title: products query (Magento 2.3.4 and later)
---

The `products` query allows you to search for catalog items.

## Syntax

```graphql
products(
  search: String
  filter: ProductAttributeFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductSortFilterInput
): Products
```

## Input attributes

Each query attribute is defined below:

Attribute |  Data type | Description
--- | --- | ---
`search` | String | Performs a full-text search using the specified key words. This attribute is optional. S
`filter` | ProductAttributeFilterInput | Identifies which attributes to search for and return. This attribute is required. See [ProductAttributeFilterInput](#ProductAttributeFilterInput) object for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`Products` | An output object that contains the results of the query. See [Response](#Response) for details.

### search attribute

The `search` element causes Magento to perform a full text search on the specified keywords. (This is the same type of search that is performed from the storefront. If multiple keywords are specified, each keyword is evaluated separately.)

The `search` element is optional, but it can be used with or without filters. Each query must contain a `search` or `filter` element.

### filter attribute {#filter}

The `ProductAttributeFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that have a `name` that contains the string `Bag` with a `price` that's less than `40`.

```graphql
filter: {
  name: {
    like: "Bag"
  }
  price: {
    from: "0"
    to: "40"
  }
}
```

Magento processes the attribute values specified in  a `ProductAttributeFilterInput` as simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

By default, you can use the following attributes as filters. To define a custom filter, see "Create a custom filter".

Attribute | Data type | Description
--- | --- | ---
`category_id` | FilterEqualTypeInput | Filters by category ID
`description` | FilterLikeTypeInput | Filters on the Description attribute
`name` | FilterLikeTypeInput | Filters on the Product Name attribute
`price` | FilterRangeTypeInput | Filters on the Price attribute
`short_description` | FilterLikeTypeInput | Filters on the Short Description attribute
`sku` | FilterLikeTypeInput | Filters on the SKU attribute

#### FilterEqualTypeInput attributes

The `cateogry_id` filter requires a `FilterEqualTypeInput` object as input. You must specify a `FilterEqualTypeInput` object to filter on a custom product attribute of the following types:

-  Boolean
-  Select
-  Mutliple select

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value like "5"
`in` | [String] | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]

#### FilterMatchTypeInput attributes

Use the `FilterMTypeInput` object to construct a filter that returns products that exactly match a string or contain the specified pattern.

Attribute | Data type | Description
--- | --- | --- 
`match` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as "24-MB01".

You must specify a `FilterLikeTypeInput` object to filter on a custom product attribute of the following types:

-  Text field
-  Text area
-  Any other type not explicitly listed in `FilterEqualTypeInput`, `FilterMatchTypeInput`, or `FilterRangeTypeInput`

#### FilterRangeTypeInput

Use the `FilterRangeTypeInput` object to construct a filter that returns products that fall within a range of prices or dates.

Attribute | Data type | Description
--- | --- | ---
`from` | String | Use this attribute to specify the lowest possible value in the range. 
`to` | String | Use this attribute to specify the lowest possible value in the range.

### pageSize attribute

Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP API requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

### currentPage attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. If you specify a value that is greater than the number of available pages, an error is returned.

### sort attribute

The `sort` object allows you to specify which field or fields to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field.  The value for each field can be set to either `ASC` or `DESC`.

Attribute | Data type | Description
--- | --- | ---
`name` | SortEnum | Sorts by Product Name
`position` | SortEnum | Sorts by the position of products
`price` | SortEnum | Sorts by Price
`relevance` | SortEnum | Sorts by the search relevance score. This is the defualt value

## Output attributes {#Response}

The query returns a `Products` object containing the following information:

Attribute | Data type | Description
--- | --- | ---
`aggregations` | [Aggregation] | Layered navigation aggregations
`filters` | LayerFilter | Deprecated. Use `aggregations` instead
`items` | [ProductInterface] | An array of products that match the specified search criteria
`page_info` | SearchResultPageInfo | An object that includes the `page_info` and `currentPage` values specified in the query
`sort_fields` |  SortFields | An object that includes the default sort field and all available sort fields
`total_count` | Int | The number of products returned

### Aggregation attributes

Each aggregation within the `aggregations` object is a separate bucket that contains the attribute code and label for each filterable option (such as price, category ID, and custom attributes). It also includes the number of products within the filterable option that match the specified search criteria.

Attribute | Data type | Description
--- | --- | ---
`attribute_code` | String! | Attribute code of the filter item
`count` | Int | The number of filter items in the filter group
`label` | String | The filter name displayed in layered navigation
`options` [AggregationOption] | Describes each aggregated filter option

#### AggregationOption attributes

The `AggregationOption` array contains a list of possible options for the `attribute_code` defined in the aggregation. For example, if the `attribute_code` is `category_id`, the return options could include tops, bottoms, gear, and so on.

Attribute | Data type | Description
--- | --- | ---
`count` | Int | The number of items returned by the filter
`label` | String! | The label of the filter
`value` | String! | The internal ID representing the value of the option

### items attributes {#ProductInterface}

The `items` object contains information about each product that match the search criteria. [ProductInterface]({{page.baseurl}}/graphql/product/product-interface.html) describes the possible contents of this object.

### sort_fields attributes

The `SortFields` object contains the default value for sort fields as well as all possible sort fields.

Attribute | Type | Description
--- | --- | ---
`default` | String | The default sort field
`options` | [SortField] | An array that contains all the fields that can be used for sorting

#### SortField attributes

The `SortField` object contains a list of all the attributes that can be used to sort query results.

Attribute | Type | Description
--- | --- | ---
`label` | String | The label of a sortable option
`value` | String | The attribute code of the sort field

## Sample query

You can review several general interest `products` queries at [Queries]({{ page.baseurl }}/graphql/queries/index.html).

### Layered navigation

The following query returns layered navigation for products that have a `sku` containing the string `24-WB`.

```graphql
{
  products(
    filter: { sku: { like: "24-WB%" } }
    pageSize: 20
    currentPage: 1
    sort: { name: DESC }
  ) {
    items {
      sku
    }
    filters {
      name
      filter_items_count
      request_var
      filter_items {
        label
        value_string
        items_count
      }
    }
  }
}
```

### Media gallery search

The following query returns media gallery information about the product with the `sku` of `24-MB01`.

**Request**

```graphql
query {
  productDetail: products(
    pageSize: 5
    filter: {
       sku: { eq: "24-MB01" }
    }
  ) {
    total_count
    items {
      sku
      id
      name
      image {
        url
        label
      }
      small_image{
          url
          label
      }
      media_gallery {
          url
          label
          ... on ProductVideo {
              video_content {
                  media_type
                  video_provider
                  video_url
                  video_title
                  video_description
                  video_metadata
              }
          }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "productDetail": {
      "total_count": 1,
      "items": [
        {
          "sku": "24-MB01",
          "id": 1,
          "name": "Joust Duffle Bag",
          "image": {
            "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/fd3509f20f1e8c87464fb5042a4927e6/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "small_image": {
            "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/fd3509f20f1e8c87464fb5042a4927e6/m/b/mb01-blue-0.jpg",
            "label": "Joust Duffle Bag"
          },
          "media_gallery": [
            {
              "url": "http://magento2.vagrant130/pub/media/catalog/product/cache/07660f0f9920886e0f9d3257a9c68f26/m/b/mb01-blue-0.jpg",
              "label": "Image"
            }
          ]
        }
      ]
    }
  }
}
```

### Include website information with `products` query results {#inclWebsiteInfoExample}

The [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html) can include information about the `Website` object.

**Request**

```graphql
{
    products(filter: {sku: {eq: "24-WB04"}})
    {
        items{
            websites {
              id
              name
              code
              sort_order
              default_group_id
              is_default
            }
        }
    }
}
```

**Response**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "websites": [
            {
              "id": 1,
              "name": "Main Website",
              "code": "base",
              "sort_order": 0,
              "default_group_id": "1",
              "is_default": true
            }
          ]
        }
      ]
    }
  }
}
```

### Query a URL's rewrite information {#urlRewriteExample}

The following product query returns URL rewrite information about the Joust Duffle Bag.

**Request**

```graphql
{
  products(search: "Joust") {
    items {
      name
      sku
      url_rewrites {
        url
        parameters {
          name
          value
        }
      }
    }
  }
}
```

**Response**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Joust Duffle Bag",
          "sku": "24-MB01",
          "url_rewrites": [
            {
              "url": "no-route",
              "parameters": [
                {
                  "name": "page_id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                }
              ]
            },
            {
              "url": "gear/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "3"
                }
              ]
            },
            {
              "url": "gear/bags/joust-duffle-bag.html",
              "parameters": [
                {
                  "name": "id",
                  "value": "1"
                },
                {
                  "name": "category",
                  "value": "4"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```
