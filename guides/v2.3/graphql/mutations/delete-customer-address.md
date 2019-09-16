---
group: graphql
title: deleteCustomerAddress mutation
---

Use the `deleteCustomerAddress` mutation to delete the specified customer address.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {deleteCustomerAddress(id: Int!) {Boolean}}`

## Example usage

The following call deletes a customer's address.

**Request**

```graphql
mutation {
  deleteCustomerAddress(id: 4)
}
```

**Response**

```json
{
  "data": {
    "deleteCustomerAddress": true
  }
}
```

## Input attributes

The `deleteCustomerAddress` object requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | The ID assigned to the address object

## Related topics

* [customer query]({{page.baseurl}}/graphql/queries/customer.html)
* [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
* [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
* [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
* [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
