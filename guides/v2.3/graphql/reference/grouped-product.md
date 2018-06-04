---
group: graphql
title: GroupedProduct endpoint
version: 2.3
github_link: graphql/reference/grouped-product.md
---

The `GroupedProduct` endpoint defines which grouped product-specific attributes are returned when performing a `products` search.

## GroupedProduct

Field | Type | Description
--- | --- | ---
`items` | `GroupedProductItem` | An array containing grouped product items

## GroupedProductItem

Field | Type | Description
--- | --- | ---
`qty` | Float | The quantity of this grouped product item
`position` | Int | The relative position of this item compared to the other group items
`product` | `ProductInterface` | The ProductInterface object, which contains details about this product option

## Sample Query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

{% highlight json %}
{
  products(filter:
    {sku: {eq: "24-WG085_Group"}}
  	)
  	{
    items {
      id
      name
      sku
      type_id
      ... on GroupedProduct {
        items{
          qty
          position
          product{
            sku
            name
            type_id
            url_key
          }
        }
      }
    }
  }
}
{% endhighlight %}
