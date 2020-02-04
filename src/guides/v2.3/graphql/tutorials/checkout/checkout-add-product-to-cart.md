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

GraphQL supports [two types of product]({{ page.baseurl }}/graphql/product/product-interface-implementations.html) which can be added into shopping cart:

-  simple product
-  virtual product

{:.bs-callout-info}
If you add a product to the shopping cart as a registered customer, be sure to send the customer's authorization token in the `Authorization` parameter of the header. See ["Get customer authorization token"]({{ page.baseurl }}/graphql/get-customer-authorization-token.html) for more details.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

## Add a simple product into the shopping cart

The following mutation adds a **simple product** into shopping cart.

**Request:**

```text
mutation {
  addSimpleProductsToCart(
    input: {
      cart_id: "{ CART_ID }"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "simple-product"
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
            "id": "508",
            "product": {
              "sku": "simple-product",
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

The following mutation adds a **virtual product** into shopping cart.

**Request:**

```text
mutation {
  addVirtualProductsToCart(
    input: {
      cart_id: "{ CART_ID }"
      cart_items: [
        {
          data: {
            quantity: 1
            sku: "virtual-product"
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
            "id": "509",
            "product": {
              "sku": "virtual-product",
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

Use the `updateCartItems` mutation to update shopping cart items and `removeItemFromCart` to remove a product from the shopping cart.

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to the shopping cart. All the items you added are displayed.
