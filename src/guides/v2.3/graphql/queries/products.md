---
group: graphql
title: products query
redirect_from:
  - /guides/v2.3/graphql/reference/products.html
---

The `products` query allows you to search for catalog items.

## Syntax

```graphql
products(
  search: String
  filter: ProductFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductSortInput
): Products
```

## Input attributes

Each query attribute is defined below:

Attribute |  Description
--- | ---
`search` | Performs a full-text search using the specified key words. This attribute is optional. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`filter` | Identifies which attributes to search for and return. This attribute is required. See [ProductFilterInput](#ProductFilterInput) for more information.
`pageSize` | Specifies the maximum number of results to return at once. The default value is 20. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`currentPage` | Specifies which page of results to return. The default value is 1. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`sort` | Specifies which attribute to sort on, and whether to return the results in ascending or descending order. See [Queries]({{ page.baseurl }}/graphql/queries/index.html) for more information.
`Products` | An output object that contains the results of the query. See [Output attributes](#Response) for details.

### search attribute

The `search` element causes Magento to perform a full text search on the specified keywords. (This is the same type of search that is performed from the storefront.) If multiple keywords are specified, each keyword is evaluated separately.

The `search` element is optional, but it can be used with or without filters. Each query must contain a `search` or `filter` element.

### filter attribute {#ProductFilterInput}

The `ProductFilterInput` object defines the filters to be used in the search. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that has a `sku` that contains the string `24-MB` with a `price` that's less than `50`.

```graphql
filter: {
  sku: {
    like: "24-MB%"
  }
  price: {
    lt: "50"
  }
}
```

Search filters are logically ANDed unless an `or` statement is specified. The search query can contain unlimited number of nested `or` clauses. However, you cannot perform a logical `or` across two AND clauses, such as (A AND B) OR (X AND Y).

Magento processes the attribute values specified in  a `ProductFilterInput` as  simple data types (strings, integers, booleans). However, returned attributes can be a different, complex, data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

The following attributes can be used to create filters. See the [Output attributes](#Response) section for information about each attribute.

```text
category_id
country_of_manufacture
created_at
custom_layout
custom_layout_update
description
gift_message_available
has_options
image
image_label
manufacturer
max_price
meta_description
meta_keyword
meta_title
min_price
name
news_from_date
news_to_date
options_container
or
price
required_options
short_description
sku
small_image
small_image_label
special_from_date
special_price
special_to_date
swatch_image
thumbnail
thumbnail_label
tier_price
updated_at
url_key
url_path
weight
```

The following attributes are not used in responses:

*  `or` - The keyword required to perform a logical OR comparison.
*  `news_from_date` - This attribute is transformed to `new_from_date` in a response.
*  `news_to_date` - This attribute is transformed to `new_to_date` in a response.

{%
include note.html
type="info"
content="GraphQL automatically filters out a product attribute if ALL of the following fields are set to **No** on the attribute's Storefront Properties page in Admin:

*  Comparable on Storefront
*  Use in Layered Navigation
*  Use in Search Results Layered Navigation
*  Visible on Catalog Pages on Storefront
*  Used in Product Listing
*  Used for Sorting in Product Listing"

%}

#### Condition types and search values

The following table lists available condition types and provides the SQL statement equivalents.

Magento GraphQL clause | SQL equivalent
--- | ---
`eq: "value"` | <code><i>field</i> = 'value'</code>
`neq: "value"` |<code><i>field</i> != 'value'</code>
`like: "value%"` | <code><i>field</i> LIKE 'value%'</code>
`nlike: "value%"` |<code><i>field</i> NOT LIKE 'value%'</code>
`in: [1, 2, 3]` | <code><i>field</i> IN (1, 2, 3)</code>
`nin: [1, 2, 3]` | <code><i>field</i> NOT IN (1, 2, 3)</code>
`notnull: true` | <code><i>field</i> IS NOT NULL</code>
`null: true` | <code><i>field</i> IS NULL</code>
`lt: "value"` | <code><i>field</i> < 'value'</code>
`gt: "value"` | <code><i>field</i> > 'value'</code>
`gteq: "value"` | <code><i>field</i> >= 'value'</code>
`lteq: "value"` | <code><i>field</i> <= 'value'</code>
`moreq: "value"` | <code><i>field</i> >= 'value'</code>
`from: "value1"` `to: "value2"` | <code><i>field</i> BETWEEN 'value1' AND 'value2'</code>

`to` and `from` must always be used together. These condition types can be used in the same search term. For example, `quantity: {from: "10" to: "20"}`.

`gt` and `lt` can be used in the same search term. For example, `quantity: {gt: "10" lt: "20"}`.

### pageSize attribute {#pageSize}

Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP API requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

### currentPage attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. Magento returns an error if you specify a value that is greater than the number of available pages.

### sort attribute

The `sort` object allows you to specify which field or fields to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field.  The value for each field can be set to either `ASC` or `DESC`.

In the following example, Magento returns a list of items that are sorted in order of decreasing price. If two or more items have the same price, the items are listed in alphabetic order by name.

```graphql
sort: {
  price: DESC
  name:  ASC
}
```

## Output attributes {#Response}

The system returns a `Products` object containing the following information:

```json
items: [ProductInterface]
page_info: SearchResultPageInfo
total_count: Int
filters: [LayerFilter]
sort_fields: SortFields
```

Each attribute is described below:

Attribute |  Data type | Description
--- | --- | ---
`filters` | [LayerFilter] | An array of layered navigation filters. These filters can be used to implement layered navigation on your app.
`items` | [ProductInterface] | An array of products that match the specified search criteria. [ProductInterface]({{page.baseurl}}/graphql/product/product-interface.html) describes the possible contents of this object.
`page_info` | SearchResultPageInfo | An object that includes the `page_info` and `currentPage` values specified in the query
`sort_fields` | SortFields | An object that includes the default sort field and all available sort fields
`total_count` | Int | The number of products returned

When a product requires a filter attribute that is not a field on its output schema, inject the attribute name into the class in a module's `di.xml` file.

```xml
<type name="Magento\CatalogGraphQl\Model\Resolver\Products\FilterArgument\ProductEntityAttributesForAst" >
  <arguments>
    <argument name="additionalAttributes" xsi:type="array">
      <item name="field_to_sort" xsi:type="string">field</item>
      <item name="other_field_to_sort" xsi:type="string">other_field</item>
    </argument>
  </arguments>
</type>
```

This example adds `field_to_sort` and `other_field_to_sort` attributes to the `additionalAttributes` array defined in the `ProductEntityAttributesForAst` class. The array already contains the `min_price`, `max_price`, and `category_ids` attributes.

## Sample queries

### Full text search

The following search returns items that contain the word `yoga` or `pants`. The Catalog Search index contains search terms taken from the product `name`, `description`, `short_description` and related attributes.

```graphql
{
  products(
    search: "Yoga pants"
    pageSize: 10
  )
  {
    total_count
    items {
      name
      sku
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

The search returns 45 items.

### Full text search with filters

The following sample query returns a list of products that meets the following criteria:

*  The product name, product description, or related field contains the string `Messenger` (which causes it to be available for full text searches).
*  The SKU begins with `24-MB`
*  The price is less than $50.

The response for each item includes the `name`, `sku`, `price` and `description` only. Up to 25 results are returned at a time, in decreasing order of price.

```graphql
{
  products(
    search: "Messenger"
    filter: {
      sku: {
        like: "24-MB%"
      }
      price: {
        lt: "50"
      }
    }
    pageSize: 25
    sort: {
      price: DESC
    }
  )
  {
    items {
      name
      sku
      description {
        html
      }
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
    }
    total_count
    page_info {
      page_size
    }
  }
}
```

The query returns the following:

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05",
          "description": {
            "html": "<p>Perfect for class, work or the gym, the Wayfarer Messenger Bag is packed with pockets. The dual-buckle flap closure reveals an organizational panel, and the roomy main compartment has spaces for your laptop and a change of clothes. An adjustable shoulder strap and easy-grip handle promise easy carrying.</p>\n<ul>\n<li>Multiple internal zip pockets.</li>\n<li>Made of durable nylon.</li>\n</ul>"
          },
          "price": {
            "regularPrice": {
              "amount": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Rival Field Messenger",
          "sku": "24-MB06",
          "description": {
            "html": "<p>The Rival Field Messenger packs all your campus, studio or trail essentials inside a unique design of soft, textured leather - with loads of character to spare. Two exterior pockets keep all your smaller items handy, and the roomy interior offers even more space.</p>\n<ul>\n<li>Leather construction.</li>\n<li>Adjustable fabric carry strap.</li>\n<li>Dimensions: 18\" x 10\" x 4\".</li>\n</ul>"
          },
          "price": {
            "regularPrice": {
              "amount": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 2,
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

### Simple search using a timestamp

The following search finds all products that were added after the specified time (midnight, November 1, 2017).

```graphql
{
  products(
    filter: {
      created_at: {
        gt: "2017-11-01 00:00:00"
      }
    }
    pageSize: 25
    sort: {
      price: DESC
    }
  )
  {
    total_count
    items {
      name
      sku
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

### Simple Logical OR search

The following example searches for all products whose `sku` begins with the string `24-MB` or whose `name` ends with `Bag`.

```graphql
{
  products(
    filter: {
      or: {
        sku: {
          like: "24-MB%"
        }
        name: {
          like: "%Bag"
        }
      }
    }
    pageSize: 25
    sort: {
      price: DESC
    }
  )
  {
    total_count
    items {
      name
      sku
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

The query returns 8 items.

### Logical AND and OR search

This query searches for products that have `name` that ends with `Short` or has a `sku` that indicates the product is a pair of women’s pants (`WP%`). The system performs a logical AND to restrict the results to those that cost from $40 to $49.99.

```graphql
{
  products(
    filter: {
      price: {
        from: "40" to: "49.99"
      }
      or: {
        name: {
          like: "%Short"
        }
        sku: {
          like: "WP%"
        }
      }
    }
    pageSize: 25
    sort: {
      price: DESC
    }
  )
  {
    total_count
    items {
      name
      sku
      price {
        regularPrice {
          amount {
            value
          }
        }
      }
    }
    page_info {
      page_size
      current_page
    }
  }
}
```

The query returns 14 items.

### Retrieve related products, Up-sells and Cross-sells

The following query shows how to get related products, Up-sells and Cross-sells for the particular product:

```graphql
{
  products(filter: { sku: { eq: "24-WB06" } }) {
    items {
      id
      name
      related_products {
        id
        name
      }
      upsell_products {
        id
        name
      }
      crosssell_products {
        id
        name
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "id": 11,
          "name": "Endeavor Daytrip Backpack",
          "related_products": [],
          "upsell_products": [
            {
              "id": 1,
              "name": "Joust Duffle Bag"
            },
            {
              "id": 3,
              "name": "Crown Summit Backpack"
            },
            {
              "id": 4,
              "name": "Wayfarer Messenger Bag"
            },
            {
              "id": 5,
              "name": "Rival Field Messenger"
            },
            {
              "id": 6,
              "name": "Fusion Backpack"
            },
            {
              "id": 7,
              "name": "Impulse Duffle"
            },
            {
              "id": 12,
              "name": "Driven Backpack"
            },
            {
              "id": 13,
              "name": "Overnight Duffle"
            },
            {
              "id": 14,
              "name": "Push It Messenger Bag"
            }
          ],
          "crosssell_products": [
            {
              "id": 18,
              "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            {
              "id": 21,
              "name": "Sprite Foam Yoga Brick"
            },
            {
              "id": 32,
              "name": "Sprite Stasis Ball 75 cm"
            },
            {
              "id": 45,
              "name": "Set of Sprite Yoga Straps"
            }
          ]
        }
      ]
    }
  }
}
```

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

**Request:**

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

**Response:**

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

**Request:**

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

**Response:**

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

**Request:**

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

**Response:**

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
