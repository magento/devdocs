---
group: graphql
title: DownloadableProduct endpoint
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

## Mutation Query
There are two possible scenarios to purchase a downloadable product.

**Scenario #1**
Links of downloadable product can be purchased separately (*Links can be purchased separately* option is checked).  

![Links can be purchased separately]({{ page.baseurl }}/graphql/images/graphql-downloadable-product-links.png)

Please use `downloadable_product_links` parameter to specify links of downloadable product which should be purchased. 

If you want to buy a downloadable product with a single particular link then please use this query:  
{% highlight json %}
mutation {
  addDownloadableProductsToCart(
    input: {
      cart_id: "{{CART_ID}}"
      cartItems: {
        data: {
          sku: "{{PRODUCT_SKU}}",
          qty: 1
        }
        downloadable_product_links: [
          {
          	link_id: {{LINK1_ID}}
          }          
        ]
      }
    }
  ) {
    cart {
      items {
        id
        qty
        ... on DownloadableCartItem {
          downloadable_product_links {
            title
            price
          }
        }
      }
    }
  }
}
{% endhighlight %}

Input parameters clarification

Value | Example | Description
--- | ---
{{CART_ID}} | cFgGG3t6cKbbXYatWrWYRkdbHxicOHZv | Cart unique id - `quote_id_mask`.`masked_id` 
{{PRODUCT_SKU}} | 240-LV09 | Product SKU
{{LINK1_ID}} | 12 | Link entity id - `downloadable_link`.`link_id`

If you want to buy a downloadable product with few links then the query is:
{% highlight json %}
mutation {
  addDownloadableProductsToCart(
    input: {
      cart_id: "{{CART_ID}}"
      cartItems: {
        data: {
          sku: "{{PRODUCT_SKU}}",
          qty: 1
        }
        downloadable_product_links: [
          {
          	link_id: {{LINK1_ID}}
          }          
          {
          	link_id: {{LINK2_ID}}
          }          
        ]
      }
    }
  ) {
    cart {
      items {
        id
        qty
        ... on DownloadableCartItem {
          downloadable_product_links {
            title
            price
          }
        }
      }
    }
  }
}
{% endhighlight %}

**Scenario #2**
Links of downloadable product can not be purchased separately (*Links can be purchased separately* option is unchecked) and when you add such downloadable product into cart then all assinged to this product links will be purchased automatically.

{% highlight json %}
mutation {
  addDownloadableProductsToCart(
    input: {
      cart_id: "{{CART_ID}}"
      cartItems: {
        data: {
          sku: "{{PRODUCT_SKU}}",
          qty: 1
        }
      }
    }
  ) {
    cart {
      items {
        id
        qty
        ... on DownloadableCartItem {
          downloadable_product_links {
            title
            price
          }
        }
      }
    }
  }
}
{% endhighlight %}
