---
layout: tutorial
group: graphql
title: Step 9. Set the payment method
subtitle: GraphQL checkout tutorial
level3_subgroup: graphql-checkout
return_to:
  title: GraphQL Overview
  url: graphql/index.html
menu_order: 90
functional_areas:
  - Integration
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

{:.bs-callout-tip}
You must always set a payment method.

Use the following `cart` query to determine which payment methods which are available for your order.

`{ CART_ID }` is the unique shopping cart ID from [Step 2. Create empty cart]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-add-product-to-cart.html).

**Request:**

{:.bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

```text
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
          "code": "checkmo",
          "title": "Check / Money order"
        }
      ]
    }
  }
}
```

There are two mutation queries in GraphQl which can be use to set the payment method for your order:

|Mutation|Description|
|--- |--- |
|`setPaymentMethodOnCart`|Sets the payment method for your order.|
|`setPaymentMethodAndPlaceOrder`| **Deprecated** Sets the payment method and then immediately places your order. In this case ["Step 10. Place the order"]({{ page.baseurl }}/graphql/tutorials/checkout/checkout-place-order.html) can be skipped.|

### Set payment method on cart {#setPaymentMethodOnCart}

Use the `setPaymentMethodOnCart` mutation to set the payment method for your order. The value `checkmo` ("Check / Money order" payment method code) was returned in the query.

**Request:**

{: .bs-callout-info}
For logged-in customers, send the customer's authorization token in the `Authorization` parameter of the header. See [Authorization tokens]({{page.baseurl}}/graphql/authorization-tokens.html) for more information.

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

### Set payment method and place order {#setPaymentMethodAndPlaceOrder}

Use the `setPaymentMethodAndPlaceOrder` mutation to set the payment method and place the order.

{:.bs-callout-warning}
The `setPaymentMethodAndPlaceOrder` mutation has been deprecated.

**Request:**

```graphql
mutation {
  setPaymentMethodAndPlaceOrder(input: {
      cart_id: "{ CART_ID }"
      payment_method: {
          code: "checkmo"
      }
  }) {
    order {
      order_id
    }
  }
}
```

**Response:**

If the operation is successful, the response contains the order ID.

```json
{
  "data": {
    "setPaymentMethodAndPlaceOrder": {
      "order": {
        "order_id": "000000001"
      }
    }
  }
}
```

## Verify this step {#verify-step}

1. Sign in as a customer to the website using the email `john.doe@example.com` and password `b1b2b3l@w+`.

1. Go to Checkout.

1. The selected payment method is displayed in the Payment Method section on the Review & Payments step.
