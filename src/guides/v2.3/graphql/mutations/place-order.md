---
group: graphql
title: placeOrder mutation
redirect from:
  - /guides/v2.3/graphql/reference/quote-place-order.html
---

The `placeOrder` mutation converts the cart into an order and returns an order ID. You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

Perform the following actions before using the `placeOrder` mutation:

-  Create an empty cart
-  Add one or more products to the cart
-  Set the billing address
-  Set the shipping address
-  Set the shipping method
-  Set the payment method
-  For guest customers, assign an email to the cart

## Syntax

`mutation: {placeOrder(input: PlaceOrderInput): {PlaceOrderOutput}}`

## Example usage

**Request:**

``` text
mutation {
  placeOrder(
    input: {
      cart_id: "IeTUiU0oCXjm0uRqGCOuhQ2AuQatogjG"
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
    "placeOrder": {
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

## Output attributes

The `placeOrderOutput` object returns an `order` object.

Attribute |  Data Type | Description
--- | --- | ---
`order` | Order! | The unique ID that identifies the order

### Order object

Attribute |  Data Type | Description
--- | --- | ---
`order_id` String | The unique ID that identifies the order
