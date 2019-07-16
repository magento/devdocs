---
group: graphql
title: DownloadableProduct endpoint
---

The `DownloadableProduct` endpoint defines a query that returns a list of purchased downloadable products for the [logged-in customer](#customerDownloadProduct). It also extends the `ProductInterface` so that attributes that are specific to downloadable products can be queried in a `products` search.

## Customer Downloadable Product {#customerDownloadProduct}
Use the `CustomerDownloadableProduct` query to retrieve the list of purchased downloadable products for the logged-in customer.

### Syntax
`{customerDownloadableProducts: {CustomerDownloadableProducts}}`

### Customer downloadable products object
The `CustomerDownloadableProducts` object contains the following attribute.

Attribute | Type | Description
--- | --- | ---
`items` | [[CustomerDownloadableProduct]](#custDownloadProduct) | List of purchased downloadable items

### Customer downloadable product object {#custDownloadProduct}
The `CustomerDownloadableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`date` | String | The date and time the purchase was made
`download_url` | String | The fully qualified URL to the download file
`order_increment_id` | String | The purchase order ID
`remaining_downloads` | String | Determines the number of times the customer can download the product
`status` | String | Determines the stage in the order workflow when the download becomes available. Options are `Pending` and `Invoiced`

### Example usage
The following example returns the list of purchased downloadable products for the logged-in customer.

**Request**

```text
{
  customerDownloadableProducts {
    items {
      date
      download_url
      order_increment_id
      remaining_downloads
      status
    }
  }
}
```

**Response**
```json
{
  "data": {
    "customerDownloadableProducts": {
      "items": [
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "http://magento2.vagrant93/downloadable/download/link/id/MC44NTcwMTEwMCAxNTUxNzMyNTEyMTExNTE%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        },
        {
          "date": "2019-03-04 20:48:32",
          "download_url": "http://magento2.vagrant93/downloadable/download/link/id/MC44NzM0OTkwMCAxNTUxNzMyNTEyMjEyNTA%2C/",
          "order_increment_id": "000000004",
          "remaining_downloads": "Unlimited",
          "status": "pending"
        }
      ]
    }
  }
}
```

## Downloadable product query
The `DownloadableProduct` query returns downloadable product information when you perform a `products` search.

### Syntax
Add the following inline fragment to the output section of your `products` query to return information specific to downloadable products:

```text
... on DownloadableProduct {
  items {
   <attributes>
  }
}
```

## Downloadable product
The `DownloadableProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`downloadable_product_links` | [`DownloadableProductLinks`] | An array containing information about the links for this downloadable product
`downloadable_product_samples` | [`DownloadableProductSamples`] | An array containing information about samples of this downloadable product
`links_purchased_separately` | Int | A value of 1 indicates that each link in the array must be purchased separately
`links_title` | String | The heading above the list of downloadable products

## Downloadable product samples
The `DownloadableProductSamples` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The unique ID for the downloadable product sample
`sample_file` | String | The relative path to the downloadable sample
`sample_type` | DownloadableFileTypeEnum | Either FILE or URL
`sample_url` | String | The relative URL to the downloadable sample
`sort_order` | Int | A number indicating the sort order
`title` | String | The display name of the sample

## Downloadable productLinks
The `DownloadableProductLinks` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`id` | Int | The unique ID for the link to the downloadable product
`is_shareable` | Boolean | Indicates whether the link is shareable
`link_type` | DownloadableFileTypeEnum | Either FILE or URL
`number_of_downloads` | Int | The maximum number of times the product can be downloaded. A value of 0 means unlimited.
`price` | Float | The price of the downloadable product
`sample_file` | String | The relative path to the downloadable sample
`sample_type` | DownloadableFileTypeEnum | Either FILE or URL
`sample_url` | String | The relative URL to the downloadable sample
`sort_order` | Int | A number indicating the sort order
`title` | String | The display name of the link

## Example usage

The following query returns information about downloadable product `240-LV04`, which is defined in the sample data.

**Request**

```text
{
  products(filter: { sku: { eq: "240-LV04" } }) {
    items {
      id
      name
      sku
      type_id
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
      ... on DownloadableProduct {
        links_title
        links_purchased_separately

        downloadable_product_links {
          id
          sample_url
          sample_type
          is_shareable
          number_of_downloads
          sort_order
          title
          link_type
          price
        }
        downloadable_product_samples {
          title
          sort_order
          sort_order
          sample_type
          sample_file
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
          "id": 47,
          "name": "Beginner's Yoga",
          "sku": "240-LV04",
          "type_id": "downloadable",
          "price": {
            "regularPrice": {
              "amount": {
                "value": 6,
                "currency": "USD"
              }
            }
          },
          "links_title": "Downloads",
          "links_purchased_separately": 0,
          "downloadable_product_links": [
            {
              "id": 1,
              "sample_url": null,
              "sample_type": null,
              "is_shareable": false,
              "number_of_downloads": 0,
              "sort_order": 1,
              "title": "Beginner's Yoga",
              "link_type": "FILE",
              "price": 6
            }
          ],
          "downloadable_product_samples": [
            {
              "title": "Trailer #1",
              "sort_order": 1,
              "sample_type": "FILE",
              "sample_file": "/l/u/luma_background_-_model_against_fence_4_sec_.mp4"
            },
            {
              "title": "Trailer #2",
              "sort_order": 1,
              "sample_type": "FILE",
              "sample_file": "/l/u/luma_background_-_model_against_fence_4_sec_.mp4"
            },
            {
              "title": "Trailer #3",
              "sort_order": 1,
              "sample_type": "FILE",
              "sample_file": "/l/u/luma_background_-_model_against_fence_4_sec_.mp4"
            }
          ]
        }
      ]
    }
  }
}
```