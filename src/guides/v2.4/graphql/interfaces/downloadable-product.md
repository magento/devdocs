---
group: graphql
title: Downloadable product data types
redirect_from:
  - /guides/v2.4/graphql/product/downloadable-product.html
---

The `DownloadableProduct` data type implements `ProductInterface` and `CustomizableProductInterface`. As a result, attributes that are specific to downloadable products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## Downloadable product

The `DownloadableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`downloadable_product_links` | [`DownloadableProductLinks`] | An array containing information about the links for this downloadable product
`downloadable_product_samples` | [`DownloadableProductSamples`] | An array containing information about samples of this downloadable product
`links_purchased_separately` | Int | A value of 1 indicates that each link in the array must be purchased separately
`links_title` | String | The heading above the list of downloadable products

### DownloadableProductSamples object

The `DownloadableProductSamples` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | Deprecated. This attribute is not applicable for GraphQL
`sample_file` | String | Deprecated. Use `sample_url` instead
`sample_type` | DownloadableFileTypeEnum | Deprecated. Use `sample_url` instead
`sample_url` | String | The URL to the downloadable sample
`sort_order` | Int | A number indicating the sort order
`title` | String | The display name of the sample

### DownloadableProductLinks object

The `DownloadableProductLinks` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | Deprecated. This information should not be exposed on frontend
`is_shareable` | Boolean | Deprecated. This attribute is not applicable for GraphQL
`link_type` | DownloadableFileTypeEnum | Deprecated. Use `sample_url` instead
`number_of_downloads` | Int | Deprecated. This attribute is not applicable for GraphQL
`price` | Float | The price of the downloadable product
`sample_file` | String | Deprecated. Use `sample_url` instead
`sample_type` | DownloadableFileTypeEnum | Deprecated. Use `sample_url` instead
`sample_url` | String | The URL to the downloadable sample
`sort_order` | Int | A number indicating the sort order
`title` | String | The display name of the link
`uid` | ID! | A string that encodes option details

## Example usage

Add the following inline fragment to the output section of your `products` query to return information specific to downloadable products:

```text
... on DownloadableProduct {
  items {
   <attributes>
  }
}
```

The following query returns information about downloadable product `240-LV04`, which is defined in the sample data.

**Request:**

```graphql
{
  products(filter: { sku: { eq: "240-LV04" } }) {
    items {
      id
      name
      sku
      __typename
      price_range{
        minimum_price{
          regular_price{
            value
            currency
          }
        }
      }
      ... on DownloadableProduct {
        links_title
        links_purchased_separately
        downloadable_product_links {
          sample_url
          sort_order
          title
          uid
          price
        }
        downloadable_product_samples {
          title
          sort_order
          sample_url
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
          "id": 47,
          "name": "Beginner's Yoga",
          "sku": "240-LV04",
          "__typename": "DownloadableProduct",
          "price_range": {
            "minimum_price": {
              "regular_price": {
                "value": 6,
                "currency": "USD"
              }
            }
          },
          "links_title": "Downloads",
          "links_purchased_separately": 0,
          "downloadable_product_links": [
            {
              "sample_url": "http://example.com/downloadable/download/linkSample/link_id/1/",
              "sort_order": 1,
              "title": "Beginner's Yoga",
              "uid": "ZG93bmxvYWRhYmxlLzE=",
              "price": 6
            }
          ],
          "downloadable_product_samples": [
            {
              "title": "Trailer #1",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/1/"
            },
            {
              "title": "Trailer #2",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/2/"
            },
            {
              "title": "Trailer #3",
              "sort_order": 1,
              "sample_url": "http://example.com/downloadable/download/sample/sample_id/3/"
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [customerDownloadableProducts query]({{page.baseurl}}/graphql/queries/customer-downloadable-products.html)
