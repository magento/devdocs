---
group: graphql
title: deletePaymentToken mutation
---

The `deletePaymentToken` mutation deletes a payment token from the system. Use the [customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html) to retrieve all stored payment methods associated with a particular customer.

{:.bs-callout-info}
You must specify the customer's authorization token in the header of the call.

## Syntax

```graphql
mutation {
  deletePaymentToken(
    public_hash: String!
  ) {
    DeletePaymentTokenOutput
  }
}
```

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
## Input attributes

The `deletePaymentToken` object must contain the following attributes.

Attribute | Data Type | Description
--- | --- | ---
`public_hash` | `String!` | The public hash of the token

## Output attributes

The top-level `DeletePaymentTokenOutput` object is listed first. All child objects are listed in alphabetical order.

### DeletePaymentTokenOutput attributes

The `DeletePaymentTokenOutput` object returns the result of the operation and details about the remaining customer payment tokens.

Attribute | Data Type | Description
--- | --- | ---
`customerPaymentTokens` | `CustomerPaymentTokens` | Contains an array of customer payment tokens
`result` | Boolean! | A value of `true` indicates the request was successful

{% include graphql/customer-payment-tokens.md %}

## Errors

Error | Description
--- | ---
`Could not find a token using public hash: xxxxxxxx` | The customer token specified in the `public_hash` argument does not exist in the `vault_payment_token` table.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

[customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html)
