---
group: graphql
title: Grouped product data types
redirect_from:
  - /guides/v2.3/graphql/reference/grouped-product.html
---

The `GroupedProduct` data type implements `ProductInterface` and `PhysicalProductInterface`. As a result, attributes that are specific to grouped products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## GroupedProduct

The `GroupedProduct` object contains the `[items]` array:

Attribute | Type | Description
--- | --- | ---
`items` | [GroupedProductItem] | An array containing grouped product items

## GroupedProductItem {#GroupedProductItem}

The `GroupedProductItem` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`position` | Int | The relative position of this item compared to the other group items
`product` | [ProductInterface]({{ page.baseurl }}/graphql/product/product-interface.html) | The ProductInterface contains attributes that are common to all types of products. Note that descriptions may not be available for custom and EAV attributes
`qty` | Float | The quantity of this grouped product item

## Sample Query

The following query returns information about downloadable product `24-WG085_Group`, which is defined in the sample data.

```graphql
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

{% collapsible Response %}

```json
{
  "data": {
    "products": {
      "items": [
        {
          "id": 45,
          "name": "Set of Sprite Yoga Straps",
          "sku": "24-WG085_Group",
          "type_id": "grouped",
          "items": [
            {
              "qty": 0,
              "position": 0,
              "product": {
                "sku": "24-WG085",
                "name": "Sprite Yoga Strap 6 foot",
                "type_id": "simple",
                "url_key": "sprite-yoga-strap-6-foot"
              }
            },
            {
              "qty": 0,
              "position": 1,
              "product": {
                "sku": "24-WG086",
                "name": "Sprite Yoga Strap 8 foot",
                "type_id": "simple",
                "url_key": "sprite-yoga-strap-8-foot"
              }
            },
            {
              "qty": 0,
              "position": 2,
              "product": {
                "sku": "24-WG087",
                "name": "Sprite Yoga Strap 10 foot",
                "type_id": "simple",
                "url_key": "sprite-yoga-strap-10-foot"
              }
            }
          ]
        }
      ]
    }
  }
}
```

{% endcollapsible %}

