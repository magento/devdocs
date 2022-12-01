---
group: graphql
title: Virtual product data types
contributor_name: Atwix
contributor_link: https://www.atwix.com/
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/types/virtual/
layout: migrated
---

The `VirtualProduct` data type implements the following interfaces:

-  [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html)
-  [CustomizableProductInterface]({{page.baseurl}}/graphql/interfaces/customizable-option-interface.html)
-  [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html)

Attributes that are specific to the virtual products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## VirtualProduct object

The `VirtualProduct` object contains attributes only from implemented interfaces:

## Sample Query

The following query returns information about virtual product.

```graphql
{
  products(
    filter: {
      sku: {
        eq: "test-virtual-product"
      }
    }
  ) {
    items {
      sku
      __typename
      uid
      name
      categories {
        uid
        name
        path
      }
      price_range {
        minimum_price {
          final_price {
            currency
            value
          }
        }
        maximum_price {
          final_price {
            currency
            value
          }
        }
      }
      stock_status
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
          "sku": "test-virtual-product",
          "__typename": "VirtualProduct",
          "uid": "MjA1MA==",
          "name": "test-virtual-product",
          "categories": [
            {
              "uid": "Mzg=",
              "name": "Sale",
              "path": "1/2/38"
            }
          ],
          "price_range": {
            "minimum_price": {
              "final_price": {
                "currency": "USD",
                "value": 123
              }
            },
            "maximum_price": {
              "final_price": {
                "currency": "USD",
                "value": 123
              }
            }
          },
          "stock_status": "IN_STOCK"
        }
      ]
    }
  }
}
```

{% endcollapsible %}

## Related topics

-  [addVirtualProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-virtual-products.html)
