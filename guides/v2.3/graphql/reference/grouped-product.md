---
group: graphql
title: GroupedProduct endpoint
---

The `GroupedProduct` endpoint defines which grouped product-specific attributes are returned when performing a `products` search.

## GroupedProduct

Attribute | Type | Description
--- | --- | ---
`items` | [[GroupedProductItem]](#GroupedProductItem) | An array containing grouped product items

## GroupedProductItem {#GroupedProductItem}

Attribute | Type | Description
--- | --- | ---
`position` | Int | The relative position of this item compared to the other group items
`product` | <a href="{{ page.baseurl }}/graphql/reference/products.html#ProductInterface">ProductInterface</a> | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
 | The ProductInterface object, which contains details about this product option
`qty` | Float | The quantity of this grouped product item

## Sample Query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

``` text
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
```
