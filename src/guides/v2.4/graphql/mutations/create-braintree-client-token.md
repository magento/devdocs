---
group: graphql
title: createBraintreeClientToken mutation
contributor_name: Something Digital
contributor_link: https://www.somethingdigital.com/
---

The `createBraintreeClientToken` mutation creates the client token for Braintree Javascript SDK initialization.

## Syntax

`mutation: {createBraintreeClientToken}: String`

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
    "createBraintreeClientToken": "4JQaNVJokOpFxrykGVvYrjhiNv9qt31C"}
  }
}
```

