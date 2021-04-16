---
group: live-search
title: productSearch query
ee_only: True
---

Live Search uses the `productSearch` query to search for products instead of the `products` query, which is provided with {{site.data.var.ce}}. Although the two queries are functionally similar, they have different input requirements. The `products` query returns information relevant for layered navigation, while the `productSearch` query returns faceting data and other features specific to Live Search.

## Construct the query

The `productSearch` query accepts the following attributes as input.

-  `phrase` - The string of text to search for. This attribute is required.
-  `filter` - An object that defines one or more product attributes to use to narrow the search results. In Luma, the `sku`, `price`, and `size` attributes are among the product attributes that can be used to filter query results.
-  `sort` - An object that defines one or more product attributes to use to sort the search results. The default sortable product attributes in Luma are `price`, `name`, and `position`.
-  `page_size` and `current_page` - These optional attributes allow the search results to be broken down into smaller groups so that a limited number of items are displayed at a time.

The following sections describe these attributes in detail.

### phrase attribute

The `phrase` attribute contains the text that a shopper enters on the storefront. Live Search applies all configured rules, synonyms and other configuration settings to return determine the search results. All `productSearch` queries must contain the `phrase` attribute.

The following example sets `Watch` the phrase to search for.

```graphql
phrase: "Watch"
```

### filter attribute

Filters can be defined as part of the query using existing product attributes that have been defined as facets in the Magento Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute.

A filter consists of a product `attribute`, a comparison operator, and the value that is being searched for. Together, they help narrow down the search results, based on shopper input. For example, if you want to set up a filter for jackets based on size, you could set the product attribute to `size`. To filter on medium-sized jackets only, set the `eq` attribute to `M`. To filter on both medium- and large-sized jackets, set the `in` attribute to `["M", "L"]`. To filter on a price range, such as between $50 and $100, set the `attribute` to `price`, and assign the `range` attribute with `from` and `to` values as `50` and `100`, respectively.

You can define multiple filters in the same call. The following example filters on the price and size:

```graphql
filter: [
    {
      attribute: "price"
      range: {
        from: 50
        to: 100
      }
    },
    {
      attribute: "size"
      eq: "M"
    }
]
```

Only facets specified in Live Search are returned.

The values of dynamic facets are returned if 10% or more of products in the result set contain the attribute.

{:.bs-callout-tip}
Use the [`attributeMetadata` query]({{site.baseurl}}/live-search/attribute-metadata.html) to return a list of product attributes that can be used to define a filter.

### sort attribute

The `sort` attribute allows you to specify one or more product attributes to use for sorting the results. If you specify more than one attribute, Live Search sorts by the first field listed. Then, if any items have the same value, those items will be sorted by the secondary field. The value for each field can be set to either ASC or DESC.

The following example causes the query to filter by price, then by name.

```graphql
sort: [
    {
        attribute: "price"
        direction: DESC
    }
    {
        attribute: "name"
        direction: DESC
    }
]
```

{:.bs-callout-tip}
Use the [`attributeMetadata` query]({{site.baseurl}}/live-search/attribute-metadata.html) to return a list of product attributes that can be used to define a filter.

### page_size attribute

When you run a query, you do not know in advance how many items the query will return. The query could return a few items, or it could return hundreds. The `page_size` attribute determines how many items to return at one time. If you use the default value of 20, and there query returns 97 items, the results will be stored in four pages containing 20 items each, and one page containing 17 items.

The following example sets the page size to 10.

```graphql
page_size: 10
```

### current_page attribute

The `currentPage` attribute specifies which page of results to return. If no value is specified, the first page is returned. To continue with the values mentioned in the `page_size` attribute, page number `5` contains items 81 - 97.

Magento returns an error if you specify a value that is greater than the number of available pages.

The following example sets the current page to 5.

```graphql
current_page: 5
```

## Interpret the results

The response to the `productSearch` query can contain details about each product returned as well as information about the ordering of the results.

### Facets

[Facets]({{site.baseurl}}/live-search/facets.html) provide a method of high-performance filtering that uses multiple dimensions of attribute values as search criteria. Faceted search is similar, but considerably more advanced than Magento's native layered navigation functionality.

The `facets` object contains details about each facet that affected the search results. By default, Live Search provides **static facets** for the `categories` and `price` product attributes. These facets are pinned to the top of the Filters list in the storefront. The merchant can also pin other attributes to this list.

**Dynamic facets** appear only when relevant, and the selection changes according to the products returned. In the storefront Filters list, dynamic facets appear in alphabetic order after any pinned facets. To streamline search results, facets are set to `dynamic` by default.

Intelligent dynamic facets measure the frequency that an attribute appears in the results list and its prevalence throughout the catalog. Live Search uses this information to determine the order of returned products. This makes it possible to return two types of dynamic facets: Those that are most significant, followed by those that are most popular.

The `buckets` sub-object divides the data into manageable groups. For the `price` and similar numeric attributes, each bucket defines a price range and counts the items within that price range. Meanwhile, the buckets associated with the `categories` attribute lists details about each category a product is a member of. The contents of dynamic facet buckets vary.

The following snippet returns all information about the applicable facets for a search.

```graphql
facets {
    attribute
    title
    type
    buckets {
        title
        ... on RangeBucket {
          title
          to
          from
          count
        }
        ... on ScalarBucket {
          title
          id
          count
        }
        ... on StatsBucket {
          title
          min
          max
        }
    }
}
```

### Items list

The `items` object primarily provides details about each item returned. The [`productInterface`]({{ site.gdeurl }}/graphql/interfaces/product-interface.html), which is defined in {{site.data.var.ce}} and {{site.data.var.ee}}, gives you access to a large amount of details about the product. A typical query might return the product name, price, SKU and image.

The `items` object can also optionally return highlighted text that shows the matching searcg terms.

The following snippet returns relevant information about each item.

```graphql
items {
    product {
        name
        sku
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
    }
    highlights {
        attribute
        value
        matched_words
    }
}
```

### Other attributes and objects

The query response can also contain the following top-level attributes and objects:

-  `page_info` - An object that lists the `page_size` and `current_page` input arguments as well as the total number of pages available
-  `related_terms` - An array of strings that might include merchant-defined synonyms
-  `suggestions` - An array of strings that include spelling variations or other suggested search terms
-  `total_count` - The number of products returned

## Syntax

```graphql
productSearch(
    phrase: String!
    page_size: Int = 20
    current_page: Int = 1
    filter: [SearchClauseInput!]
    sort: [ProductSearchSortInput!]
): ProductSearchResponse!
```

## Example usage

The following example uses "Watch" as the search phrase.

**Request:**

```graphql
# {
#   attributeMetadata{
#     sortable {
#       attribute
#       label
#       numeric
#     }
#     filterableInSearch  {
#       attribute
#       label
#       numeric
#     }
#   }
# }

{
  productSearch (
    phrase: "bag"
    sort: [
      {
        attribute: "price"
        direction: DESC
      }
      {
        attribute: "name"
        direction: DESC
      }
    ]
    page_size: 9
  ){
    total_count
    page_info {
      current_page
      page_size
      total_pages
    }
    
    facets {
      attribute
      title
      type
      buckets {
        title
        __typename
        ... on RangeBucket {
          title
          to
          from
          count
        }
        ... on ScalarBucket {
          title
          id
          count
        }
        ... on StatsBucket {
          title
          min
          max
        }
      }
    }
    items {
      product {
        name
        sku
        price_range {
          maximum_price {
            final_price {
              value
              currency
            }
          }
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
      }
      highlights {
        attribute
        value
        matched_words
      }
      appliedQueryRule
    }
    suggestions
    related_terms
  }
}
```

**Response:**

```json
{
  "extensions": {
    "request-id": "ok6ZAHu7z3DcyU5L7vA2IlyXOfRmQXN7"
  },
  "data": {
    "productSearch": {
      "total_count": 17,
      "page_info": {
        "current_page": 1,
        "page_size": 9,
        "total_pages": 2
      },
      "facets": [
        {
          "attribute": "categories",
          "title": "categories",
          "type": "PINNED",
          "buckets": [
            {
              "title": "gear",
              "__typename": "ScalarBucket",
              "id": "3",
              "count": 16
            },
            {
              "title": "gear/bags",
              "__typename": "ScalarBucket",
              "id": "4",
              "count": 14
            },
            {
              "title": "collections",
              "__typename": "ScalarBucket",
              "id": "7",
              "count": 7
            },
            {
              "title": "collections/yoga-new",
              "__typename": "ScalarBucket",
              "id": "8",
              "count": 3
            },
            {
              "title": "gear/fitness-equipment",
              "__typename": "ScalarBucket",
              "id": "5",
              "count": 2
            },
            {
              "title": "men/tops-men",
              "__typename": "ScalarBucket",
              "id": "12",
              "count": 1
            },
            {
              "title": "men/tops-men/tanks-men",
              "__typename": "ScalarBucket",
              "id": "17",
              "count": 1
            }
          ]
        },
        {
          "attribute": "price",
          "title": "price",
          "type": "PINNED",
          "buckets": [
            {
              "title": "0.0-10.0",
              "__typename": "RangeBucket",
              "to": 10,
              "from": 0,
              "count": 1
            },
            {
              "title": "10.0-25.0",
              "__typename": "RangeBucket",
              "to": 25,
              "from": 10,
              "count": 3
            },
            {
              "title": "25.0-50.0",
              "__typename": "RangeBucket",
              "to": 50,
              "from": 25,
              "count": 11
            },
            {
              "title": "50.0-75.0",
              "__typename": "RangeBucket",
              "to": 75,
              "from": 50,
              "count": 2
            }
          ]
        },
        {
          "attribute": "activity",
          "title": "activity",
          "type": "INTELLIGENT",
          "buckets": [
            {
              "title": "Gym",
              "__typename": "ScalarBucket",
              "id": "Gym",
              "count": 11
            },
            {
              "title": "Yoga",
              "__typename": "ScalarBucket",
              "id": "Yoga",
              "count": 7
            },
            {
              "title": "School",
              "__typename": "ScalarBucket",
              "id": "School",
              "count": 6
            },
            {
              "title": "Travel",
              "__typename": "ScalarBucket",
              "id": "Travel",
              "count": 5
            },
            {
              "title": "Urban",
              "__typename": "ScalarBucket",
              "id": "Urban",
              "count": 5
            },
            {
              "title": "Hiking",
              "__typename": "ScalarBucket",
              "id": "Hiking",
              "count": 4
            },
            {
              "title": "Overnight",
              "__typename": "ScalarBucket",
              "id": "Overnight",
              "count": 4
            },
            {
              "title": "Trail",
              "__typename": "ScalarBucket",
              "id": "Trail",
              "count": 2
            },
            {
              "title": "Recreation",
              "__typename": "ScalarBucket",
              "id": "Recreation",
              "count": 1
            },
            {
              "title": "Sports",
              "__typename": "ScalarBucket",
              "id": "Sports",
              "count": 1
            }
          ]
        }
      ],
      "items": [
        {
          "product": {
            "name": "Impulse Duffle",
            "sku": "24-UB02",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 74,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 74,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Fusion Backpack",
            "sku": "24-MB02",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 59,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 59,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Wayfarer Messenger Bag",
            "sku": "24-MB05",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [
            {
              "attribute": "name",
              "value": "Wayfarer Messenger <em>Bag</em>",
              "matched_words": []
            }
          ],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Rival Field Messenger",
            "sku": "24-MB06",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Push It Messenger Bag",
            "sku": "24-WB04",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [
            {
              "attribute": "name",
              "value": "Push It Messenger <em>Bag</em>",
              "matched_words": []
            }
          ],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Overnight Duffle",
            "sku": "24-WB07",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 45,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Crown Summit Backpack",
            "sku": "24-MB03",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 38,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 38,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Driven Backpack",
            "sku": "24-WB03",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 36,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 36,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [],
          "appliedQueryRule": null
        },
        {
          "product": {
            "name": "Joust Duffle Bag",
            "sku": "24-MB01",
            "price_range": {
              "maximum_price": {
                "final_price": {
                  "value": 34,
                  "currency": "USD"
                }
              },
              "minimum_price": {
                "final_price": {
                  "value": 34,
                  "currency": "USD"
                }
              }
            }
          },
          "highlights": [
            {
              "attribute": "name",
              "value": "Joust Duffle <em>Bag</em>",
              "matched_words": []
            }
          ],
          "appliedQueryRule": null
        }
      ],
      "suggestions": [
        "bag",
        "it messenger bag",
        "messenger bag",
        "voyage yoga bag"
      ],
      "related_terms": null
    }
  }
}
```

## Input attributes

The `productSearch` query accepts the following attributes as input.

Attribute | Data Type | Description
--- | --- | ---
`phrase` | String! | The text to search for
`page_size` | Int | Specifies the maximum number of results to return at once. The default value is 20
`current_page` | Int | Specifies which page of results to return. The default value is 1
`filter` | [[SearchClauseInput!]](#SearchClauseInput) | Identifies which attributes to search for and return
`sort` | [[ProductSearchSortInput!]](#ProductSearchSortInput) | Specifies which attribute to sort on, and whether to return the results in ascending or descending order

### SearchClauseInput data type {#SearchClauseInput}

The `SearchClauseInput` object can contain the following attributes:

Attribute | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`eq` | String | A string value to filter on
`in` | [String] | An array of string values to filter on
`range` | [SearchRangeInput](#SearchRangeInput) | A range of numeric values to filter on

#### SearchRangeInput data type {#SearchRangeInput}

The `SearchRangeInput` object can contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`from` | Float | The minimum value to filter on. If not specified, the value of `0` is applied
`to` | Float | The maximum value to filter on

### ProductSearchSortInput data type {#ProductSearchSortInput}

The `ProductSearchSortInput` object can contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of a product attribute
`direction` | SortEnum! | ASC (ascending) or DESC (descending)

## Output attributes

The `AttributeMetadataResponse` return object can contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`facets` | [[Aggregation]](#Aggregation) | Provides details about the static and dynamic facets relevant to the search
`items` | [[ProductSearchItem]](#ProductSearchItem) | An array of products returned by the query
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | Contains information for rendering pages of search results
`related_terms` | [String] | An array of strings that might include merchant-defined synonyms
`suggestions` | [String] | An array of strings that include spelling variations or other suggested search terms
`total_count` | Int | The total number of items returned

### Aggregation data type {#Aggregation}

Attribute | Data Type | Description
--- | --- | ---
`attribute` | String! | The attribute code of the filter item
`buckets` | [[Bucket]!](#Bucket) | A container that divides the data into manageable groups. For example, attributes that can have numeric values might have buckets that define price ranges
`title` | String! | The filter name displayed in layered navigation
`type` | AggregationType | One of `INTELLIGENT`, `PINNED`, or `POPULAR`

### Bucket data type {#Bucket}

The `Bucket` object defines one attribute, `title`. However, the object has three implementations that can be used to provide greater detail

Attribute | Data Type | Description
--- | --- | ---
`title` | String! | A human-readable name of a bucket

#### RangeBucket implementation

Implement `RangeBucket` for numeric product attributes.

Attribute | Data Type | Description
--- | --- | ---
`count` | Int! | The number of items in the bucket
`from` | Float! | The minimum amount in a price range
`title` | String! | The display text defining the price range
`to` | Float | The maximum amount in a price range

#### ScalarBucket implementation

Implement `RangeBucket` for string and other scalar product attributes.

Attribute | Data Type | Description
--- | --- | ---
`count` | Int! | The number of items in the bucket
`id` | ID! | An identifier that could be used for filtering and may contain non-human readable data
`title` | String! | The display text defining the scalar value

#### StatsBucket implementation

Implement `StatsBucket` to retrieve statistics across multiple buckets.

Attribute | Data Type | Description
--- | --- | ---
`max` | Float! | The maximum quantity
`min` | Float! | The minimum quantity
`title` | String! | The display text defining the bucket

### ProductSearchItem data type {#ProductSearchItem}

The `ProductSearchItem` data type can contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`appliedQueryRule` | AppliedQueryRule | The query rule type that was applied to this product, if any (in preview mode only, returns null otherwise). Possible values are `BOOST`, `BURY`, and `PIN`
`highlights` | [[Highlight]](#Highlight) | An object that provides highlighted text for matched words
`product`m| ProductInterface! | Contains details about the product. See [`productInterface`]({{ site.gdeurl }}/graphql/interfaces/product-interface.html) for more information

#### Highlight data type {#Highlight}

Attribute | Data Type | Description
--- | --- | ---
`attribute` | String! | The product attribute that contains a match for the search phrase
`matched_words` | [String]! | An array a strings
`value` | String! | The matched text, enclosed within `<em></em>` tags

### SearchResultPageInfo data type {#SearchResultPageInfo}

The `SearchResultPageInfo` data type can contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Total pages
