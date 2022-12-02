---
group: graphql
title: Simple product data types
contributor_name: Atwix
contributor_link: https://www.atwix.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/types/simple/
layout: migrated
---

The `SimpleProduct` data type implements the following interfaces:

-  [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html)
-  [PhysicalProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html#PhysicalProductInterface)
-  [CustomizableProductInterface]({{page.baseurl}}/graphql/interfaces/customizable-option-interface.html)
-  [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html)

Attributes that are specific to the simple products can be used when performing a [`products`]({{page.baseurl}}/graphql/queries/products.html) query.

## SimpleProduct object

The `SimpleProduct` object contains attributes only from implemented interfaces:

## Sample Query

The following query returns information about simple product `24-MB01`, which is defined in the sample data.

```graphql
{
  products(
    filter: {
      sku: {
        eq: "24-MB01"
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
          "sku": "24-MB01",
          "__typename": "SimpleProduct",
          "uid": "MQ==",
          "name": "Joust Duffle Bag",
          "categories": [
            {
              "uid": "Mw==",
              "name": "Gear",
              "path": "1/2/3"
            },
            {
              "uid": "NA==",
              "name": "Bags",
              "path": "1/2/3/4"
            }
          ],
          "price_range": {
            "minimum_price": {
              "final_price": {
                "currency": "USD",
                "value": 34
              }
            },
            "maximum_price": {
              "final_price": {
                "currency": "USD",
                "value": 34
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

-  [addSimpleProductsToCart mutation]({{page.baseurl}}/graphql/mutations/add-simple-products.html)
