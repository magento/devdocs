---
group: graphql
title: deletePaymentToken mutation
---

The `deletePaymentToken` mutation deletes a payment token from the system. Use the [customerPaymentTokens query](({{page.baseurl}}/graphql/queries/customer-payment-tokens.html)) to retrieve all stored payment methods associated with a particular customer.

{:.bs-callout .bs-callout-info}
You must specify the customer's authorization token in the header of the call.

## Syntax

`mutation: {deletePaymentToken(public_hash) {DeletePaymentTokenOutput}}`

## Example usage

The following example deletes the Discover Card listed in the results of the `customerPaymentTokens` query.

**Request**

``` text
mutation {
  deletePaymentToken(
    public_hash: "377c1514e0bce7107a9348ddf38bc059b2f1b9e0a8bedf168a98b04807e17ff5"
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

**Response**

```json
{
  "data": {
    "deletePaymentToken": {
      "result": true,
      "customerPaymentTokens": {
        "items": [
          {
            "details": "{\"type\":\"VI\",\"maskedCC\":\"1111\",\"expirationDate\":\"09\\/2022\"}",
            "public_hash": "f5816fe2ab7d200c3ff84d42804b65144f9cb0a2401ce1dad1b52d3b3115fd1a",
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

The `DeletePaymentTokenOutput`  object contains the result of the operation and details about the remaining customer payment tokens.

Attribute | Data Type | Description
--- | --- | ---
`customerPaymentTokens` | `CustomerPaymentTokens` | Contains an array of customer payment tokens
`result` | Boolean | A value of `true` indicates the request was successful

### CustomerPaymentTokens

{% include graphql/customer-payment-tokens.md %}

## Related topics

[customerPaymentTokens query]({{page.baseurl}}/graphql/queries/customer-payment-tokens.html)
