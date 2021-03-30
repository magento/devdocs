---
group: live-search
title: GraphQL Playground
ee_only: True
---

The GraphQL Playground is available in the Magento Admin and gives you the ability to compose and test read-only queries with actual catalog data.

### Execute a query

1.	In the Admin, go to **Marketing** > SEO & Search > **Live Search**.
1.	For multiple stores, set **Scope** to the store view where the settings apply.
1.	Click the **GraphQL** tab.
1.	Enter the query code.
1.	Click **Play**.

   ![graphQL example]({{ page.baseurl }}/live-search/images/graphql-example.png)
   _GraphQL - example product query_

## Scenarios

|**Scenario**|**Query**|
|---|---|
|Category search<br />Browse by category (includes faceted navigation with filters)|`categorySearch`|
|Product search<br />Product Details page|`productsSearch`<br />'products` (deprecated)|
|Category navigation||`categoryList`|
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

### Category listing

```text
categoryList {
    id
    name
    url_path
    children {
        id
        name
        url_path
        children {
            id
            name
            url_path
        }
    }
```

### Search by phrase

```text
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
       hightlights {
           attribute_code
           value
       }
    }
}
```

### Product details page

```text
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

### Category browse

```text
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

### Quick search

Quick Search combines category and product search into a single request.

```text
search.categorySearch({ phrase: "yoga" });
```

### Category search

`categorySearch` returns categories for products that match the search query. For example, you should expect pants to return categories such as mens clothing and womens clothing, and shoes to return categories such as sandals and sneakers.

```text
search.categorySearch({ phrase: "yoga" });
```

```text
query {
  categorySearch(phrase: "pants", category_size: 10) {
    categories {
      name
      url
    }
  }
}
```

### Product search

`productSearch` returns catalog products that match the search query, ordered by relevance. They can also be sorted by price (`asc`/`desc`) by passing in an optional sort query parameter.

```text
search.productSearch({ phrase: "yoga" });
```

Filters can be defined as part of the query using existing product attributes that have been defined as facets in the Magento Admin. For example, to filter results by color, a color facet must be defined in Live Search, based on the existing `color` attribute. Filters support ranges for numeric attributes (for example for price) or `eq`/`in` values for numeric and text attributes.

- Only facets specified in Live Search are returned.
- The values of dynamic facets are returned if 10% or more of products in the result set contain the attribute.

```text
query {
  productSearch(phrase: "pants") {
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
