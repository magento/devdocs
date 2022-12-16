---
group: graphql
title: placeNegotiableQuoteOrder mutation
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/negotiable-quote/mutations/place-order/
status: migrated
---

The `placeNegotiableQuoteOrder` mutation converts a negotiable quote into an order and returns an order ID.

The negotiable quote must have one of the following statuses:

-  SUBMITTED
-  DECLINED
-  EXPIRED

If the status is DECLINED or EXPIRED, the negotiable quote is processed like a standard cart, without applying any discounts. The negotiable quote is not converted to a standard cart.

Perform the following actions before using the `placeNegotiableQuoteOrder` mutation. It might be necessary to perform additional steps during the process of coming to an agreement during the negotiable quote lifecycle.

-  [Create an empty cart]({{page.baseurl}}/graphql/mutations/create-empty-cart.html)
-  [Add one or more products]({{page.baseurl}}/graphql/mutations/add-products-to-cart.html) to the cart
-  [Request a negotiable quote]({{page.baseurl}}/graphql/mutations/request-negotiable-quote.html)
-  [Set the billing address]({{page.baseurl}}/graphql/mutations/set-negotiable-quote-billing-address.html)
-  [Set the shipping address]({{page.baseurl}}/graphql/mutations/set-negotiable-quote-shipping-address.html)
-  Set the shipping method
-  [Set the payment method]({{page.baseurl}}/graphql/mutations/set-negotiable-quote-payment-method.html)

You cannot manage orders with GraphQL, because orders are part of the backend. You can use REST or SOAP calls to manage orders to their completion.

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
