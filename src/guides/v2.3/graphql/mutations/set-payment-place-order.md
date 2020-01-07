---
group: graphql
title: setPaymentMethodAndPlaceOrder mutation
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
redirect from:
  - /guides/v2.3/graphql/reference/quote-set-payment-place-order.html
---

{:.bs-callout-warning}
The `setPaymentMethodAndPlaceOrder` mutation has been deprecated. Use the [setPaymentMethodOnCart]({{page.baseurl}}/graphql/mutations/set-payment-method.html) and [placeOrder]({{page.baseurl}}/graphql/mutations/place-order.html) mutations instead. You can run the two methods in the same call if your use case allows it.

The `setPaymentMethodAndPlaceOrder` mutation sets the cart payment method and converts the cart into an order. The
mutation returns the resulting order ID. You cannot manage orders with GraphQL, because orders are part of the backend.
You can use REST or SOAP calls to manage orders to their completion.

Perform the following actions before using the `setPaymentMethodAndPlaceOrder` mutation:

-  Create an empty cart
-  Add one or more products to the cart
-  Set the billing address
-  Set the shipping address (non-virtual carts only)
-  Set the shipping method (non-virtual carts only)
-  For guest customers, assign an email to the cart

## Syntax

`mutation: {setPaymentMethodAndPlaceOrder(input: SetPaymentMethodAndPlaceOrderInput): PlaceOrderOutput}`

## Example usage

**Request:**

```graphql
mutation {
  setPaymentMethodAndPlaceOrder(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
      payment_method: {
        code: "checkmo"
      }
    }
  ) {
    order {
      order_id
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodAndPlaceOrder": {
      "order": {
        "order_id": "000000006"
      }
    }
  }
}
```

## Input attributes

The `placeOrderInput` object must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the customer’s cart
`payment_method` | [PaymentMethodInput!](#PaymentMethodInput) | The payment method data for the cart

### PaymentMethodInput attributes {#PaymentMethodInput}

{% include graphql/quote-payment-input.md %}

## Output attributes

The `placeOrderOutput` object contains the `order` object, which contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`order_id` | String! | The unique ID that identifies the order
