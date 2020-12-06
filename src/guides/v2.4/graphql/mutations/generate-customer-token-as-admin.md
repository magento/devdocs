---
group: graphql
title: generateCustomerTokenAsAdmin mutation
contributor_name: EY 
---

Use the `generateCustomerTokenAsAdmin` mutation to generate a new customer token as an admin so that an administrator can perform remote shopping assistance.
The customer must have enabled the `allow_remote_shopping_assistance` feature while creating the customer profile.

## Syntax

```graphql
mutation {generateCustomerTokenAsAdmin(input: GenerateCustomerTokenAsAdminInput!) {GenerateCustomerTokenAsAdminOutput}}
```

## Example usage

The following call creates a new customer token.

**Request:**

```graphql
mutation{
  generateCustomerTokenAsAdmin(input: {
    customer_email: "customer1@mail.com"
  }){
    customer_token
  }
}
```

**Response:**

```json
{
  "data": {
    "generateCustomerTokenAsAdmin": {
      "customer_token": "cr0717abzoagxty1xjn4lj13kim36r6x"
    }
  }
}
```

## Input attributes

The `generateCustomerTokenAsAdmin` mutation requires the following input attribute:

Attribute |  Data Type | Description
--- | --- | ---
`customer_email` | String! | The customer's email address

## Output attributes

The `generateCustomerTokenAsAdmin` mutation returns a valid customer token as the output.

Attribute |  Data Type | Description
--- | --- | ---
`customer_token` | String! | The customer token

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [revokeCustomerToken mutation]({{page.baseurl}}/graphql/mutations/revoke-customer-token.html)
