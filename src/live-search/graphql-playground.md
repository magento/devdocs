---
group: live-search
title: GraphQL Playground
ee_only: True
---

The GraphQL Playground is available in the Magento Admin and gives you the ability to compose and test read-only queries with actual catalog data.

## Execute a query

1. In the Admin, go to **Marketing** > SEO & Search > **Live Search**.
1. For multiple stores, set **Scope** to the store view where the settings apply.
1. Click the **GraphQL** tab.
1. Enter the query code.
1. Click **Play**.

   ![graphQL example]({{ page.baseurl }}/live-search/images/graphql-example.png)
   _GraphQL - example product query_

## Scenarios

|**Scenario**|**Query**|
|---|---|

|Product search<br />Product Details page|`productSearch`<br />`products` (deprecated)|
|Search by phrase (includes faceted navigation with filters, ordered by relevancy, highlights, variation preselect, suggestions.)|New query|

## Examples

### Create client

```text
import MagentoLiveSearch from "@magento/search-sdk";

const search = new MagentoLiveSearch({
    environmentId: "beb38e17-2969-46bb-b294-e140ec60c212",
    websiteCode: "base",
    storeCode: "main_website_store",
    storeViewCode: "default",
    apiKey: "search_gql",
});
```

### Search by phrase

```graphql
productSearch(phrase: "Bags") {
    items {
       product {
            id
            name
            sku
            thumbnail {
                url
            }
       }
       highlights {
           attribute_code
           value
       }
    }
}
```

### Category browse

```graphql
category(id: 17) {
    products {
        items {
            id
            name
            sku
            thumbnail {
                url
            }
        }
    }
}
```

### Product details page

```graphql
product(id: 18) {
    id
    name
    sku
    media_gallery_entries {
        url
        media_type
        content
    }
}
```

### Product search

`productSearch` returns catalog products that match the search query, ordered by relevance. They can also be sorted by price (`asc`/`desc`) by passing in an optional sort query parameter.

```graphql
search.productSearch({ phrase: "yoga" });
```

Filters can be defined as part of the query using existing product attributes that have been defined as facets in the Magento Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute. Filters support ranges for numeric attributes (for example for price) or `eq`/`in` values for numeric and text attributes.

-  Only facets specified in Live Search are returned.
-  The values of dynamic facets are returned if 10% or more of products in the result set contain the attribute.

#### Request example

```graphql
query {
  productSearch(
    phrase: "red pants"
  )
  {
    total_count
    items {
        product {
            __typename
            uid
            name
            sku
            description {
              html
            }
            short_description {
              html
            }
            meta_title
            meta_keyword
            meta_description
            image {
              url
              label
            }
            small_image {
              url
              label
            }
            thumbnail {
              url
              label
            }
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
                }
            }
            canonical_url
            ... on SimpleProduct {
                weight
            }
        }
        highlights {
            attribute
            value
            matched_words
        }
    }      
    facets {
        title
        attribute
        buckets {
            __typename
            title
            ... on ScalarBucket {
                id
                count
            }
            ... on RangeBucket {
                from
                to
                count
            }
            ... on StatsBucket {
                min
                max
            }
        }
    }
    suggestions
    page_info {
        current_page
        page_size
        total_pages
    }
  }
}
```

## Headers

|**Function**|**Header**|
|---|---|
|`productSearch`| - `MagentoEnvironmentId`<br />- `MagentoWebsiteCode`<br />- `MagentoStoreCode`<br />- `MagentoStoreViewCode`<br />- `x-api-key:{Magento api key}`<br />- `x-gw-signature:{jwt}`|
|`attributeMetadata`| (same as above)`|

## Input validation

|**Function**|**Input field**|**Validation**|
|---|---|---|
|`productSearch`| `phrase`| Max allowed: 255|
| |`page_size`| Default: 20 if not null. Otherwise can be from 1 - 500
| |`SearchClauseinput`|attribute|Max allowed: 255|
| |`SearchClauseinput`|`in` and `eq`| Max allowed: 255|
| |`ProductSearchSortinput`|attribute|Max allowed: 255|

## Error Codes

|**Error Code**|**Query**|
|---|---|
|1000 |Catches any other error that is not recognized by the service.|
|1001 |`index_not_found_exception`<br />Elasticsearch exception message|
|1002 |`search_phase_execution_exception`<br />Elasticsearch exception message|
|1003 |`mapper_parsing_exception`<br />Elasticsearch exception message|
