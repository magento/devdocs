---
group: graphql
title: revokeCustomerToken mutation
---

Use the `revokeCustomerToken` mutation to revokes the customer's token.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {revokeCustomerToken: RevokeCustomerTokenOutput}`

## Example usage

The following call revokes the customer's token.

**Request**

```graphql
mutation {
  revokeCustomerToken {
    result
  }
}
```

**Response**

```json
{
  "data": {
    "revokeCustomerToken": {
      "result": true
    }
  }
}
```

## Output attributes

Attribute |  Data Type | Description
--- | --- | ---
`result` | Boolean! | Returns `true` if the token was successfully revoked

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [generateCustomerToken mutation]({{page.baseurl}}/graphql/mutations/generate-customer-token.html)
