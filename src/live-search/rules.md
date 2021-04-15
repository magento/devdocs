---
group: live-search
title: Rules
ee_only: True
---

Live Search rules trigger actions based on a variety of query conditions and give merchants the ability to shape the search experience for various scenarios.

This initial release of Live Search rules is based on the query string entered by the shopper, rather than on the result set. A query string can include alphanumeric characters and capitalization is ignored. As with facets and synonyms, rules are stored in protobuf dynamo. At query time, the search service retrieves rules through `grpc` calls to search-admin-service.

{:.bs-callout-info}
See [Rules](https://docs.magento.com/user-guide/live-search/rules.html) in the _Magento Commerce User Guide_ for information about rule setup and use.

## Example

The following example queries products with weighted results.

```
query {
  productSearch( 
    phrase: "red pants",
    page_size: 100,
  ) 
  {
	total_count
	items {
        product {
            __typename 
            id
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
            ... on ConfigurableProduct {
                weight
            }
            ... on GroupedProduct {
                weight
            }
            ... on BundleProduct {
                weight
            }
            ... on GiftCardProduct {
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
        type
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
