---
group: graphql
title: changeCustomerPassword mutation
---

Use the `changeCustomerPassword` mutation to change the password for the logged-in customer.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {changeCustomerPassword(currentPassword: String! newPassword: String!) {Customer}}`

## Example usage

The following call updates the customer's password.

**Request**

```graphql
mutation {
  changeCustomerPassword(
    currentPassword: "roni_cost3@example.com"
    newPassword: "roni_cost4@example.com"
  ) {
    id
    email
  }
}
```

**Response**

```json
{
  "data": {
    "changeCustomerPassword": {
      "id": 1,
      "email": "roni_cost@example.com"
    }
  }
}
```

## Input attributes

The `changeCustomerPassword` mutation requires the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`currentPassword` | String | The customer's current password
`newPassword` | String | The customer's new password

## Output attributes

The `changeCustomerPassword` mutation returns the `customer` object.

{% include graphql/customer-output.md %}

## Related topics

* [customer query]({{page.baseurl}}/graphql/queries/customer.html)
* [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
* [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
