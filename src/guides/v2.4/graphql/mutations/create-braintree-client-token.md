---
group: graphql
title: createBraintreeClientToken mutation
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/checkout/mutations/create-braintree-client-token/
layout: migrated
---

The `createBraintreeClientToken` mutation creates the client token for Braintree Javascript SDK initialization.

## Syntax

```graphql
mutation {
  createBraintreeClientToken {
    String
  }
}
```

## Example usage

**Request:**

```graphql
mutation {
  createBraintreeClientToken
}
```

**Response:**

```json
{
  "data": {
    "createBraintreeClientToken": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C" #gitleaks:allow
  }
}
```

## Errors

Error | Description
--- | ---
`The Braintree payment method is not active.` | The [Braintree](https://docs.magento.com/m2/ee/user_guide/payment/braintree.html) payment method is disabled in admin.
