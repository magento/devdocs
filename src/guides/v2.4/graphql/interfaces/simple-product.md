---
group: graphql
title: Simple product data types
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `SimpleProduct` data type implements the following interfaces:

-  `ProductInterface`
-  `PhysicalProductInterface`
-  `CustomizableProductInterface`

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
          "sku": "24-MB01",
          "__typename": "SimpleProduct",
          "id": 1,
          "name": "Joust Duffle Bag",
          "categories": [
            {
              "id": 3,
              "name": "Gear",
              "path": "1/2/3"
            },
            {
              "id": 4,
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
