---
group: graphql
title: createCustomer mutation
---

Use the `createCustomer` mutation to create a new customer.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}`

## Example usage

The following call creates a new customer.

**Request**

```graphql
mutation {
  createCustomer(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
    }
  ) {
    customer {
      id
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
```

**Response**

```json
{
  "data": {
    "createCustomer": {
      "customer": {
        "id": 5,
        "firstname": "Bob",
        "lastname": "Loblaw",
        "email": "bobloblaw@example.com",
        "is_subscribed": true
      }
    }
  }
}
```

## Input attributes

The following table lists the attributes you can use as input for the `createCustomer` mutation. The [Customer attributes]({{page.baseurl}}/graphql/queries/customer.html#customerAttributes) table lists the attributes Magento returns.

{% include graphql/create-customer.md %}

## Output attributes

The `createCustomer` mutation returns the `CustomerOutput` object.

{% include graphql/customer-output.md %}

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
