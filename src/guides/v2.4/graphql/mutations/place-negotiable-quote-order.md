---
group: graphql
title: placeNegotiableQuoteOrder mutation
b2b_only: true
---

The `placeNegotiableQuoteOrder` mutation converts the cart into an order and returns an order ID. You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

Perform the following actions before using the `placeNegotiableQuoteOrder` mutation:

-  Create an empty cart
-  Add one or more products to the cart
-  Set the billing address
-  Set the shipping address
-  Set the shipping method
-  Set the payment method

## Syntax

```graphql
mutation {
  placeNegotiableQuoteOrder(
    input: PlaceNegotiableQuoteOrderInput
  ) {
    PlaceNegotiableQuoteOrderOutput
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  placeNegotiableQuoteOrder(
    input: {
      quote_uid: "xCA4wSZEHsb5QbFiKfoq5k1Dk8vIPBgb"
    }
  ) {
    order {
      order_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "placeNegotiableQuoteOrder": {
      "order": {
        "order_number": "000000006"
      }
    }
  }
}
```

## Input attributes

The `PlaceNegotiableQuoteOrderInput` object must contain the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`quote_uid` | String! | The unique ID of a `NegotiableQuote` object

## Output attributes

The `placeOrderOutput` object returns an `order` object.

Attribute |  Data Type | Description
--- | --- | ---
`order` | Order! | Contains the generated order number

### Order object

Attribute |  Data Type | Description
--- | --- | ---
`order_number` | String | The unique ID that identifies the order
