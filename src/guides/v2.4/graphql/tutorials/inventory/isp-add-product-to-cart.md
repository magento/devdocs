---
layout: tutorial
group: graphql
title: Step 3. Add products to the cart
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 30
functional_areas:
  - Integration
---

GraphQL supports all product types, but this tutorial only demonstrates how to add simple products to the shopping cart.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/inventory/isp-add-product-to-cart.html).

The following mutation adds two simple products, 24-WB01 and 24-WB03, to the shopping cart.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: default`

**Request:**

```graphql
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "{ CART_ID }",
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "24-WB01"
          }
        }
        {
          data: {
            quantity: 1
            sku: "24-WB03"
          }
        }
      ]
    }
  ) {
    cart {
      items {
        id
        product {
          sku
          stock_status
        }
        quantity
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addSimpleProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "12",
            "product": {
              "sku": "24-WB01",
              "stock_status": "IN_STOCK"
            },
            "quantity": 1
          },
          {
            "id": "13",
            "product": {
              "sku": "24-WB03",
              "stock_status": "IN_STOCK"
            },
            "quantity": 1
          }
        ]
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `jdoe@example.com` and password `Password1`.

1. Go to the shopping cart. All the items you added are displayed.
