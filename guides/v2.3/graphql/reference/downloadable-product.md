---
group: graphql
title: DownloadableProduct endpoint
version: 2.3
github_link: graphql/reference/downloadable-product.md
---

The `DownloadableProduct` endpoint defines which downloadable product-specific attributes are returned when performing a `products` search.


## DownloadableProduct object

Field | Type | Description
--- | --- | ---
`downloadable_product_samples` | `DownloadableProductSamples` | An array containing information about samples of this downloadable product
`downloadable_product_links` | `DownloadableProductLinks` | An array containing information about the links for this downloadable product
`links_purchased_separately` | Int | A value of 1 indicates that each link in the array must be purchased separately
`links_title` | String | The heading above the list of downloadable products

## DownloadableProductSamples object

Field | Type | Description
--- | --- | ---
`id` | Int | The unique ID for the downloadable product sample
`title` | String | The display name of the sample
`sort_order` | Int | A number indicating the sort order
`sample_type` | DownloadableFileTypeEnum | Either FILE or URL
`sample_file` | String | The relative path to the downloadable sample
`sample_url` | String | The relative URL to the downloadable sample

## DownloadableProductLinks object

Field | Type | Description
--- | --- | ---
`id` | Int | The unique ID for the link to the downloadable product
`title` | String | The display name of the link
`sort_order` | Int | A number indicating the sort order
`is_shareable` | Boolean | Indicates whether the link is shareable
`price` | Float | The price of the downloadable product
`number_of_downloads` | Int | The maximum number of times the product can be downloaded. A value of 0 means unlimited.
`link_type` | DownloadableFileTypeEnum | Either FILE or URL
`sample_type` | DownloadableFileTypeEnum | Either FILE or URL
`sample_file` | String | The relative path to the downloadable sample
`sample_url` | String | The relative URL to the downloadable sample

## Sample Query

The following query returns information about downloadable product `240-LV04`, which is defined in the sample data.

{% highlight json %}
{
  products(filter:
    {sku: {eq:"240-LV04"}}
  	)
  {
       items{
           id
           name
           sku
           type_id
        price{
        regularPrice{
          amount{
            value
            currency
          }
        }
      }
           ... on DownloadableProduct {
            links_title
            links_purchased_separately

            downloadable_product_links{
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
            downloadable_product_samples{
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
{% endhighlight %}
