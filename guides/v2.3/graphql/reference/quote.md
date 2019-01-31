---
group: graphql
title: quote endpoint
---

A quote represents the contents of a customer's shopping cart. It is responsible for performing tasks such as:

* Tracking each item in the cart, including the quantity and base cost
* Determining estimated shipping costs
* Calculating subtotals, computing additional costs, applying coupons, and determining the payment method

## Mutations

Magento 2.3.0  supports the `createEmptyCart` mutation only.

### Create an empty cart

The `createEmptyCart` mutation creates an empty shopping cart for a guest or logged in customer. If you are creating a cart for a logged in customer, you must include the customer's authorization token in the header of the request.

**Request**

``` json
mutation {
  createEmptyCart
}
```

**Response**

The response is the quote ID, which is sometimes called the cart ID.

```json
{
  "data": {
    "createEmptyCart": "6XZA7q1ooLEI0jLz8DfFrfruEqgxGzlt"
  }
}
```
