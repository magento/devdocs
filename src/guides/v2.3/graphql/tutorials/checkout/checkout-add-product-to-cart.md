---
layout: tutorial
group: graphql
title: Step 3. Add products to the cart
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 30
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

GraphQL supports all product types, but this tutorial only demonstrates how to add a simple product and a virtual product to the shopping cart. You can find more details and examples in the following topics:

-  [Bundle products]({{ page.baseurl }}/graphql/mutations/add-bundle-products.html)
-  [Configurable products]({{ page.baseurl }}/graphql/mutations/add-configurable-products.html)
-  [Downloadable products]({{ page.baseurl }}/graphql/mutations/add-downloadable-products.html)
-  [Simple and grouped products]({{ page.baseurl }}/graphql/mutations/add-simple-products.html)
-  [Virtual products]({{ page.baseurl }}/graphql/mutations/add-virtual-products.html)

[Product interface implementations]({{ page.baseurl }}/graphql/interfaces/product-interface-implementations.html) also describes how to create queries that access product interfaces.

Use the `updateCartItems` mutation to update shopping cart items and `removeItemFromCart` to remove a product from the shopping cart.

{:.bs-callout .bs-callout-info}
If you add a product to the shopping cart as a registered customer, be sure to send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more details.

## Add a simple product into the shopping cart

The following mutation adds a simple product into the shopping cart.

Replace `{ CART_ID }` with the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

In this example, we will add the Aim Analog Watch (SKU 24-MG04) from the default Luma catalog to the cart. The SKU identifies the product to be added.

**Request:**

```graphql
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "{ CART_ID }"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "24-MG04"
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
            "id": "5",
            "product": {
              "sku": "24-MG04",
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

## Add a virtual product into the shopping cart

The following mutation adds a virtual product into the shopping cart.
In this example, we add the Beginner's Yoga video downloadable product (SKU 240-LV04).

**Request:**

```graphql
mutation {
  addVirtualProductsToCart(
    input: {
      cart_id: "{ CART_ID }"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "240-LV04"
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
    "addVirtualProductsToCart": {
      "cart": {
        "items": [
          {
            "id": "5",
            "product": {
              "sku": "24-MG04",
              "stock_status": "IN_STOCK"
            },
            "quantity": 1
          },
          {
            "id": "6",
            "product": {
              "sku": "240-LV04",
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

The response lists all items currently in the cart, including the just-added video download.

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to the shopping cart. All the items you added are displayed.
