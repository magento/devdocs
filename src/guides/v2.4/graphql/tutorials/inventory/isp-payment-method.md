---
layout: tutorial
group: graphql
title: Step 5. Set the payment method
subtitle: GraphQL In-store pickup tutorial
level3_subgroup: graphql-inventory
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 50
functional_areas:
  - Integration
---

You must always set a payment method for an order.

Use the following `cart` query to determine which payment methods are available for your order.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: default`

**Request:**

```graphql
query {
  cart(cart_id: "{ CART_ID }") {
    available_payment_methods {
      code
      title
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "cart": {
      "available_payment_methods": [
        {
          "code": "banktransfer",
          "title": "Bank Transfer Payment"
        },
        {
          "code": "checkmo",
          "title": "Check / Money order"
        }
      ]
    }
  }
}
```

### Set payment method on cart {#setPaymentMethodOnCart}

Use the `setPaymentMethodOnCart` mutation to set the payment method for your order. The value `checkmo` ("Check / Money order" payment method code) was returned in the `cart` query.

**Headers:**

`Authorization: Bearer <customer token>`

`Store: us`

**Request:**

```graphql
mutation {
  setPaymentMethodOnCart(input: {
      cart_id: "{ CART_ID }"
      payment_method: {
          code: "checkmo"
      }
  }) {
    cart {
      selected_payment_method {
        code
      }
    }
  }
}
```

**Response:**

If the operation is successful, the response contains the code of the selected payment method.

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "selected_payment_method": {
          "code": "checkmo"
        }
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `jdoe@example.com` and password `Password1`.

1. Go to Checkout.

1. The selected payment method is displayed in the Payment Method section on the Review & Payments step.
