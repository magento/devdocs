---
group: graphql
title: Virtual product data types
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `VirtualProduct` data type implements the following interfaces:

-  `ProductInterface`
-  `CustomizableProductInterface`

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
      id
      name
      categories {
        id
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
          "id": 2047,
          "name": "Test Virtual Product",
          "categories": [
            {
              "id": 37,
              "name": "Sale",
              "path": "1/2/37"
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
