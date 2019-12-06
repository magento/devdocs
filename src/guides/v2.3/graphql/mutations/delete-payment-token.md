---
group: graphql
title: deletePaymentToken mutation
---

The `deletePaymentToken` mutation deletes a payment token from the system. Use the [customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html) to retrieve all stored payment methods associated with a particular customer.

{:.bs-callout-info}
You must specify the customer's authorization token in the header of the call.

## Syntax

`mutation: {deletePaymentToken(public_hash) {DeletePaymentTokenOutput}}`

## Example usage

The following example deletes the Discover Card listed in the results of the `customerPaymentTokens` query. The `public_hash` you specify will be unique to your application.

**Request:**

```graphql
mutation {
  deletePaymentToken(
    public_hash: "377c1514e0..."
  ) {
    result
    customerPaymentTokens {
      items {
        details
        public_hash
        payment_method_code
        type
      }
    }
  }
}

```

**Response:**

```json
{
  "data": {
    "deletePaymentToken": {
      "result": true,
      "customerPaymentTokens": {
        "items": [
          {
            "details": "{\"type\":\"VI\",\"maskedCC\":\"1111\",\"expirationDate\":\"09\\/2022\"}",
            "public_hash": "f5816fe2ab...",
            "payment_method_code": "braintree",
            "type": "card"
          }
        ]
      }
    }
  }
}
```

## Output attributes

The top-level `DeletePaymentTokenOutput` object is listed first. All child objects are listed in alphabetical order.

### DeletePaymentTokenOutput attributes

The `DeletePaymentTokenOutput` object returns the result of the operation and details about the remaining customer payment tokens.

Attribute | Data Type | Description
--- | --- | ---
`customerPaymentTokens` | `CustomerPaymentTokens` | Contains an array of customer payment tokens
`result` | Boolean | A value of `true` indicates the request was successful

{% include graphql/customer-payment-tokens.md %}

## Related topics

[customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html)
