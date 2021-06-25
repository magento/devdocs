---
group: graphql
title: generateCustomerToken mutation
---

Use the `generateCustomerToken` mutation to create a new customer token.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

```graphql
mutation {
  generateCustomerToken(
    email: String!
    password: String!
  ) {
    CustomerToken
  }
}
```

## Example usage

The following call creates a new customer token.

**Request:**

```graphql
mutation {
  generateCustomerToken(
    email: "bobloblaw@example.com"
    password: "b0bl0bl@w"
  ) {
    token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerToken": {
      "token": "ar4116zozoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

## Input attributes

The `generateCustomerToken` mutation requires the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The customer's email address
`password` | String | The customer's password

## Output attributes

The `generateCustomerToken` mutation returns a valid token for the customer.

Attribute |  Data Type | Description
--- | --- | ---
`token` | String | The customer token

## Errors

Error | Description
--- | ---
`Specify the "email" value.` | The value specified in the `email` argument is empty.
`Specify the "password" value.` | The value specified value in the `password` argument is empty.
`The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.` | Authentication error. The email or password is incorrect, or the customer account is locked.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [revokeCustomerToken mutation]({{page.baseurl}}/graphql/mutations/revoke-customer-token.html)
