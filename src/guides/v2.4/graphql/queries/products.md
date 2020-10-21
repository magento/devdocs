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
  filter: ProductAttributeFilterInput
  pageSize: Int
  currentPage: Int
  sort: ProductAttributeSortInput
): Products
```

## Input attributes

Each query attribute is defined below:

Attribute |  Data type | Description
--- | --- | ---
`search` | String | Performs a full-text search using the specified key words
`filter` | ProductAttributeFilterInput | Identifies which attributes to search for and return. See [filter attribute](#ProductFilterInput) object for more information
`pageSize` | Int | Specifies the maximum number of results to return at once. The default value is 20
`currentPage` | Int | Specifies which page of results to return. The default value is 1
`sort` | ProductAttributeSortInput | Specifies which attribute to sort on, and whether to return the results in ascending or descending order

### search attribute

The `search` attribute causes Magento to perform a full text search on the specified keywords. This is the same type of search that is performed from the storefront. If multiple keywords are specified, each keyword is evaluated separately.

Each query must contain a `search` or `filter` attribute, or both.

### filter attribute {#ProductFilterInput}

The `ProductAttributeFilterInput` object determines which attributes will be used to narrow the results in a `products` query. A filter contains at least one attribute, a comparison operator, and the value that is being searched for. The following example filter searches for products that have a `name` that contains the string `Bag` with a `price` that's less than or equal to `40`.

```graphql
filter: {
  name: {
    match: "Bag"
  }
  price: {
    to: "40"
  }
}
```

Magento processes the attribute values specified in a `ProductAttributeFilterInput` as simple data types (strings, integers, Booleans). However, returned attributes can be a different, complex data type. For example, in a response, `price` is an object that contains a monetary value and a currency code.

By default, you can use the following attributes as filters. To define a custom filter, see [Filtering with custom attributes]({{page.baseurl}}/graphql/custom-filters.html). Use the `input_type` output attribute of the [`customAttributeMetadata` query]({{page.baseurl}}/graphql/queries/custom-attribute-metadata.html) to determine whether your custom filter should include the `FilterEqualTypeInput`, `FilterMatchTypeInput`, or `FilterRangeTypeInput` data type.

Attribute | Data type | Description
--- | --- | ---
`category_id` | FilterEqualTypeInput | Filters by category ID
`description` | FilterMatchTypeInput | Filters on the Description attribute
`name` | FilterMatchTypeInput | Filters on the Product Name attribute
`price` | FilterRangeTypeInput | Filters on the Price attribute
`short_description` | FilterMatchTypeInput | Filters on the Short Description attribute
`sku` | FilterEqualTypeInput | Filters on the SKU attribute
`url_key` | FilterEqualTypeInput | The part of the URL that identifies the product

#### FilterEqualTypeInput attributes

The `category_id`, `sku`, and `url_key` filters require a `FilterEqualTypeInput` object as input. You must specify a `FilterEqualTypeInput` object to filter on a custom product attribute of the following types:

-  Boolean
-  Select
-  Multiple select

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific category ID, specify a value like `5`
`in` | [String] | Use this attribute to filter on an array of values. For example, to filter on category IDs 4, 5, and 6, specify a value of `["4", "5", "6"]`

#### FilterMatchTypeInput attributes

Use the `FilterMatchTypeInput` object to construct a filter that returns products that exactly match a string or contain the specified pattern.

Attribute | Data type | Description
--- | --- | ---
`match` | String | Use this attribute to exactly match the specified string. For example, to filter on a specific SKU, specify a value such as `24-MB01`

You must specify a `FilterMatchTypeInput` object to filter on a custom product attribute of the following types:

-  Text field
-  Text area
-  Any other type not explicitly listed in `FilterEqualTypeInput`, `FilterMatchTypeInput`, or `FilterRangeTypeInput`

#### FilterRangeTypeInput attributes

Use the `FilterRangeTypeInput` object to construct a filter that returns products that fall within a range of prices or dates.

Attribute | Data type | Description
--- | --- | ---
`from` | String | Use this attribute to specify the lowest possible value in the range
`to` | String | Use this attribute to specify the highest possible value in the range

### pageSize attribute {#pageSize}

Magento's GraphQL implementation of pagination uses offsets so that it operates in the same manner as REST and SOAP API requests.

The `pageSize` attribute specifies the maximum number of items to return. If no value is specified, 20 items are returned.

### currentPage attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. Magento returns an error if you specify a value that is greater than the number of available pages.

### sort attribute

The `sort` attribute allows you to specify which field or fields to use for sorting the results. If you specify more than one field, Magento sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field. The value for each field can be set to either `ASC` or `DESC`.

If you do not specify a `sort` object, Magento sorts as follows:

-  If you specify the `search` attribute, the query sorts by relevance, in descending order.
-  If you specify the `filter` attribute without specifying the  `search` attribute, the query sorts by position, in ascending order.

In previous versions, the `sort` attribute required a `ProductSortInput` object as input. The `sort` attribute now requires a `ProductAttributeSortInput` object, which can contain the following attributes:

Attribute | Data type | Description
--- | --- | ---
`name` | SortEnum | Sorts by Product Name
`position` | SortEnum | Sorts by the position of products
`price` | SortEnum | Sorts by Price
`relevance` | SortEnum | (Default) Sorts by the search relevance score

To enable sorting by an attribute that is not in the `ProductAttributeSortInput` object, set the **Stores** > Attributes > **Product** > <Attribute Name> > **Storefront Properties** > **Use in Search** and **Used in Sorting in Product Listing** fields to Yes.

## Deprecated input attributes

The `filter` and `sort` attributes require new input objects. The following sections list the deprecated attributes.

### ProductFilterInput attributes

The `filter` attribute previously required a `ProductFilterInput` object as input. This object has been deprecated. The replacement input object, `ProductAttributeFilterInput` is more restrictive about what attributes can be used in a `products` query by default. The following attributes can no longer be used in default filters. See [Filtering with custom attributes]({{page.baseurl}}/graphql/custom-filters.html) for more information.

```text
country_of_manufacture
created_at
custom_layout
custom_layout_update
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
news_from_date
news_to_date
options_container
or
required_options
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

{:.bs-callout-info}
The `or` attribute cannot be used in a `products` query. Logical OR searches are no longer supported.

-  `or` - The keyword required to perform a logical OR comparison.
-  `news_from_date` - This attribute is transformed to `new_from_date` in a response.
-  `news_to_date` - This attribute is transformed to `new_to_date` in a response.

The following condition types have been deprecated:

```text
from
gt
gteq
like
lt
lteq
moreq
neq
nin
nlike
notnull
null
to
```

{:.bs-callout-info}
Wildcards are no longer supported in `products` queries.

### ProductSortInput attributes

The following sorting attributes have been deprecated:

```text
country_of_manufacture
created_at
custom_layout_update
custom_layout
description
gift_message_available
has_options
image_label
image
manufacturer
meta_description
meta_keyword
meta_title
news_from_date
news_to_date
options_container
required_options
short_description
sku
small_image_label
small_image
special_from_date
special_price
special_to_date
thumbnail_label
thumbnail
tier_price
updated_at
weight
```

## Output attributes {#Response}

The query returns a `Products` object containing the following information:

Attribute | Data type | Description
--- | --- | ---
`aggregations` | [[Aggregation]](#Aggregation) | Layered navigation aggregations
`filters` | LayerFilter | Deprecated. Use `aggregations` instead
`items` | [[ProductInterface]](#ProductInterface) | An array of products that match the specified search criteria
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | An object that includes the `page_info` and `currentPage` values specified in the query
`sort_fields` |  [SortFields](#SortFields) | An object that includes the default sort field and all available sort fields
`total_count` | Int | The number of products in the category that are marked as visible. By default, in complex products, parent products are visible, but their child products are not

### Aggregation attributes {#Aggregation}

Each aggregation within the `aggregations` object is a separate bucket that contains the attribute code and label for each filterable option (such as price, category ID, and custom attributes). It also includes the number of products within the filterable option that match the specified search criteria.

{:.bs-callout-info}
To enable a custom attribute to return layered navigation and aggregation data from the Admin, set the **Stores** > Attributes > **Product** > <attribute name> > **Storefront Properties** > **Use in Layered Navigation** field to **Filterable (with results)** or **Filterable (no results)**.

Attribute | Data type | Description
--- | --- | ---
`attribute_code` | String! | Attribute code of the filter item
`count` | Int | The number of filter items in the filter group
`label` | String | The filter name displayed in layered navigation
`options` | [AggregationOption] | Describes each aggregated filter option

#### AggregationOption attributes {#AggregationOption}

The `AggregationOption` array contains a list of possible options for the `attribute_code` defined in the aggregation. For example, if the `attribute_code` is `category_id`, the return options could include tops, bottoms, gear, and so on.

Attribute | Data type | Description
--- | --- | ---
`count` | Int | The number of items returned by the filter
`label` | String | The label of the filter
`value` | String! | The internal ID representing the value of the option

### ProductInterface attributes {#ProductInterface}

The `items` object contains information about each product that match the search criteria. [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html) describes the possible contents of this object.

### SearchResultPageInfo attributes {#SearchResultPageInfo}

The `SearchResultPageInfo` object provides navigation for the query response.

Attribute | Data type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | The total number of pages returned

### SortFields attributes {#SortFields}

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

## Deprecated output attributes

The `filters` output object has been deprecated in favor of the `aggregations` object. The following sections list the deprecated attributes.

### LayerFilter object

The `LayerFilter` object can be returned in a response to help create layered navigation on your app.

Attribute | Type | Description
--- | --- | ---
`filter_items` |  [LayerFilterItemInterface] | An array of filter items
`filter_items_count` | Int | The number of filter items in filter group
`name` | String | The layered navigation filter name
`request_var` | String | The request variable name for the filter query

### LayerFilterItemInterface

`LayerFilterItemInterface` contains an array of items that match the terms defined in the filter.

Attribute | Type | Description
--- | --- | ---
`items_count` | Int | The number of items the filter returned
`label` | String | The label applied to a filter
`value_string` | String | The value for filter request variable to be used in a query

## Sample queries

This section illustrates some of the many ways that you can use the `products` query.

### Full text search

The following search returns items that contain the word `yoga` or `pants`. The Catalog Search index contains search terms taken from the product `name`, `description`, `short_description` and related attributes.

**Request:**

```graphql
{
  products(search: "Yoga pants", pageSize: 2) {
    total_count
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
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

**Response:**

The search returns 45 items, but only the first two items are returned on the current page.

```json
{
  "data": {
    "products": {
      "total_count": 45,
      "items": [
        {
          "name": "Josie Yoga Jacket",
          "sku": "WJ02",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 56.25,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Selene Yoga Hoodie",
          "sku": "WH05",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 42,
                "currency": "USD"
              }
            }
          }
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

### Full text search with filter

The following sample query returns a list of products that meets the following criteria:

-  The product name, product description, or related field contains the string `Messenger` (which causes it to be available for full text searches).
-  The SKU begins with `24-MB`
-  The price is less than $50.

The response for each item includes the `name`, `sku`, and `price` only. Up to 25 results are returned at a time, in decreasing order of price.

**Request:**

```graphql
{
  products(
    search: "Messenger"
    filter: { price: { to: "50" } }
    pageSize: 25
    sort: { price: DESC }
  ) {
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
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

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Rival Field Messenger",
          "sku": "24-MB06",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Push It Messenger Bag",
          "sku": "24-WB04",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Wayfarer Messenger Bag",
          "sku": "24-MB05",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 45,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "total_count": 3,
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

### Query with layered navigation

The following query returns aggregations for a query that filters on items with these characteristics:

-  Women's pants (category ID `27`)
-  In the price range of $30 - $39.99
-  Comes in black (color `49`)

{:.bs-callout-info}
By default, you cannot filter on the `color` attribute. [Filtering with custom attributes]({{page.baseurl}}/graphql/custom-filters.html) describes how to enable this attribute for filtering. You can also run the following query without enabling the attribute by deleting `, color: {eq: "49"}`.

**Request:**

```graphql
{
  products(filter: {category_id: {eq: "27"}, price: {from: "30", to: "39.99"}, color: {eq: "49"}}, pageSize: 25, sort: {name: DESC}) {
    aggregations {
      attribute_code
      count
      label
      options {
        label
        value
        count
      }
    }
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
        }
      }
    }
    page_info {
      page_size
    }
  }
}
```

**Response:**

{% collapsible Show sample response %}

```json
{
  "data": {
    "products": {
      "aggregations": [
        {
          "attribute_code": "price",
          "count": 1,
          "label": "Price",
          "options": [
            {
              "label": "30-*",
              "value": "30_*",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "category_id",
          "count": 5,
          "label": "Category",
          "options": [
            {
              "label": "New Luma Yoga Collection",
              "value": "8",
              "count": 1
            },
            {
              "label": "Bottoms",
              "value": "22",
              "count": 4
            },
            {
              "label": "Pants",
              "value": "27",
              "count": 4
            },
            {
              "label": "Pants",
              "value": "32",
              "count": 4
            },
            {
              "label": "Performance Fabrics",
              "value": "35",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "color",
          "count": 8,
          "label": "Color",
          "options": [
            {
              "label": "Black",
              "value": "49",
              "count": 4
            },
            {
              "label": "Blue",
              "value": "50",
              "count": 2
            },
            {
              "label": "Gray",
              "value": "52",
              "count": 1
            },
            {
              "label": "Green",
              "value": "53",
              "count": 1
            },
            {
              "label": "Orange",
              "value": "56",
              "count": 1
            },
            {
              "label": "Purple",
              "value": "57",
              "count": 1
            },
            {
              "label": "Red",
              "value": "58",
              "count": 1
            },
            {
              "label": "White",
              "value": "59",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "material",
          "count": 7,
          "label": "Material",
          "options": [
            {
              "label": "Nylon",
              "value": "37",
              "count": 1
            },
            {
              "label": "Rayon",
              "value": "39",
              "count": 1
            },
            {
              "label": "LumaTech&trade;",
              "value": "148",
              "count": 1
            },
            {
              "label": "Microfiber",
              "value": "150",
              "count": 2
            },
            {
              "label": "Spandex",
              "value": "151",
              "count": 2
            },
            {
              "label": "Organic Cotton",
              "value": "154",
              "count": 2
            },
            {
              "label": "CoolTech&trade;",
              "value": "156",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "size",
          "count": 2,
          "label": "Size",
          "options": [
            {
              "label": "28",
              "value": "172",
              "count": 4
            },
            {
              "label": "29",
              "value": "173",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "eco_collection",
          "count": 2,
          "label": "Eco Collection",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 3
            },
            {
              "label": "1",
              "value": "1",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "performance_fabric",
          "count": 2,
          "label": "Performance Fabric",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 2
            },
            {
              "label": "1",
              "value": "1",
              "count": 2
            }
          ]
        },
        {
          "attribute_code": "erin_recommends",
          "count": 1,
          "label": "Erin Recommends",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "new",
          "count": 2,
          "label": "New",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 3
            },
            {
              "label": "1",
              "value": "1",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "sale",
          "count": 1,
          "label": "Sale",
          "options": [
            {
              "label": "0",
              "value": "0",
              "count": 4
            }
          ]
        },
        {
          "attribute_code": "style_bottom",
          "count": 5,
          "label": "Style Bottom",
          "options": [
            {
              "label": "Capri",
              "value": "107",
              "count": 2
            },
            {
              "label": "Leggings",
              "value": "109",
              "count": 1
            },
            {
              "label": "Parachute",
              "value": "110",
              "count": 1
            },
            {
              "label": "Sweatpants",
              "value": "113",
              "count": 1
            },
            {
              "label": "Track Pants",
              "value": "115",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "pattern",
          "count": 2,
          "label": "Pattern",
          "options": [
            {
              "label": "Color-Blocked",
              "value": "195",
              "count": 3
            },
            {
              "label": "Solid",
              "value": "197",
              "count": 1
            }
          ]
        },
        {
          "attribute_code": "climate",
          "count": 5,
          "label": "Climate",
          "options": [
            {
              "label": "Indoor",
              "value": "205",
              "count": 4
            },
            {
              "label": "Mild",
              "value": "206",
              "count": 4
            },
            {
              "label": "Spring",
              "value": "208",
              "count": 1
            },
            {
              "label": "Warm",
              "value": "209",
              "count": 2
            },
            {
              "label": "Hot",
              "value": "212",
              "count": 3
            }
          ]
        }
      ],
      "items": [
        {
          "name": "Karmen Yoga Pant",
          "sku": "WP01",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 39,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Ida Workout Parachute Pant",
          "sku": "WP03",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Bardot Capri",
          "sku": "WP08",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        },
        {
          "name": "Aeon Capri",
          "sku": "WP07",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 48,
                "currency": "USD"
              }
            }
          }
        }
      ],
      "page_info": {
        "page_size": 25
      }
    }
  }
}
```

{% endcollapsible %}

### Return minimum and maximum prices and discount information

In the following example, a catalog price rule that provides a 10% discount on all fitness equipment is in effect. The product queried, `24-WG080`, is the Sprite Yoga Companion Kit bundle product. This product has two user-selected options that cause the price to vary. If you choose to query a product that is not a composite (bundle, group, or configurable) product, the minimum and maximum prices are the same.

**Request:**

```graphql
{
  products(filter: {sku: {eq: "24-WG080"}}, sort: {name: ASC}) {
    items {
      name
      sku
      price_range {
        minimum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
        maximum_price {
          regular_price {
            value
            currency
          }
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
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
    "products": {
      "items": [
        {
          "name": "Sprite Yoga Companion Kit",
          "sku": "24-WG080",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 61,
                "currency": "USD"
              },
              "final_price": {
                "value": 61,
                "currency": "USD"
              },
              "discount": {
                "amount_off": 0,
                "percent_off": 0
              }
            },
            "maximum_price": {
              "regular_price": {
                "value": 77,
                "currency": "USD"
              },
              "final_price": {
                "value": 77,
                "currency": "USD"
              },
              "discount": {
                "amount_off": 0,
                "percent_off": 0
              }
            }
          }
        }
      ]
    }
  }
}
```

### Sort by a custom attribute

In this example, the `description` attribute has been enabled by setting the **Stores** > Attributes > **Product** > description > **Storefront Properties** > **Use in Search** and **Used for Sorting in Product Listing** fields to Yes. The query returns all products with a price range of $28 to $30, sorted by the description.

**Request:**

```graphql
{
  products(filter: { price: { from: "28" to: "30"} }
  sort: {
    description: ASC
  }) {
    total_count
    items {
      name
      sku
      description {
        html
      }
      price_range {
        maximum_price {
          regular_price {
            value
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
    "products": {
      "total_count": 25,
      "items": [
        {
          "name": "Erikssen CoolTech&trade; Fitness Tank",
          "sku": "MT01",
          "description": {
            "html": "<p>A good running tank helps make the miles pass by keep you cool. The Erikssen CoolTech&trade; Fitness Tank completes that mission, with performance fabric engineered to wick perspiration and promote airflow.</p>\n<p>&bull; Red performance tank.<br />&bull; Slight scoop neckline. <br />&bull; Reflectivity. <br />&bull; Machine wash/dry.</p>"
          },
          "price_range": {
            "maximum_price": {
              "regular_price": {
                "value": 29
              }
            }
          }
        },
        {
          "name": "Primo Endurance Tank",
          "sku": "MT03",
          "description": {
            "html": "<p>Chances are your workout goes beyond free weights, which is why the Primo Endurance Tank employs maximum versatility. Run, lift or play ball &ndash; this breathable mesh top will keep you cool during all your activities.</p>\n<p>&bull; Red heather tank with gray pocket.<br />&bull; Chafe-resistant flatlock seams. <br />&bull; Relaxed fit. <br />&bull; Contrast topstitching.<br />&bull; Machine wash/dry.</p>"
          },
          "price_range": {
            "maximum_price": {
              "regular_price": {
                "value": 29
              }
            }
          }
        },
        ...
    }
  }
}
```
### Retrieve related products, up-sells, and cross-sells

The following query shows how to get related products, up-sells, and cross-sells for a product:

**Request:**

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
