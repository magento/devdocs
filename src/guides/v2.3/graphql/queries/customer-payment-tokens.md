---
group: graphql
title: customerPaymentTokens query
redirect_from:
  - /guides/v2.3/graphql/reference/vault.html
---

When the [vault]({{page.baseurl}}/payments-integrations/vault/vault-intro.html) feature is supported by a payment integration and enabled, customers have the option during checkout to save their credit card information. (Braintree supports the vault feature. Third-party payment integrations may support this feature as well.) During subsequent checkouts, the customer is presented with a list of saved payment options. If Instant Purchase is enabled, customers can even by-pass the two-step checkout process and place the order from the product page.

The `customerPaymentTokens` query returns an array of stored payment methods. Use the [deletePaymentToken mutation]({{page.baseurl}}/graphql/mutations/delete-payment-token.html) to delete a payment token from the system.

{:.bs-callout-info}
You must specify the customer's authorization token in the header of the call.

## Syntax

`{customerPaymentTokens{CustomerPaymentTokens}}`

## Example usage

The following example returns all the current customer's payment tokens. The `public_hash` output values will be unique to your application.

**Request:**

```graphql
query {
  customerPaymentTokens {
    items {
      details
      public_hash
      payment_method_code
      type
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "customerPaymentTokens": {
      "items": [
        {
          "details": "{\"type\":\"VI\",\"maskedCC\":\"1111\",\"expirationDate\":\"09\\/2022\"}",
          "public_hash": "377c1514e0...",
          "payment_method_code": "braintree",
          "type": "card"
        },
        {
          "details": "{\"type\":\"DI\",\"maskedCC\":\"1117\",\"expirationDate\":\"11\\/2023\"}",
          "public_hash": "f5816fe2ab...",
          "payment_method_code": "braintree",
          "type": "card"
        }
      ]
    }
  }
}
```

## Output attributes

{% include graphql/customer-payment-tokens.md %}

## Related topics

[deletePaymentToken mutation]({{page.baseurl}}/graphql/mutations/delete-payment-token.html)
