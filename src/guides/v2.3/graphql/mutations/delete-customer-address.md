---
group: graphql
title: deleteCustomerAddress mutation
---

Use the `deleteCustomerAddress` mutation to delete the specified customer address.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

```graphql
mutation {
  deleteCustomerAddress(
    id: Int!
  ) {
    Boolean
  }
}
```

## Example usage

The following call deletes a customer's address.

**Request:**

```graphql
mutation {
  deleteCustomerAddress(id: 4)
}
```

**Response:**

```json
{
  "data": {
    "deleteCustomerAddress": true
  }
}
```

## Input attributes

The `deleteCustomerAddress` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | The ID assigned to the address object

## Output attributes

The `deleteCustomerAddress` mutation returns a Boolean value that indicates whether the operation was successful.

## Errors

Error | Description
--- | ---
`Address "id" value should be specified` | The `id` argument is zero.
`Could not find a address with ID "XXX"` | The customer address specified in the `id` argument does not exist.
`Customer Address XXX is set as default billing address and cannot be deleted` | You cannot delete a default billing address.
`Customer Address XXX is set as default shipping address and cannot be deleted` | You cannot delete a default shipping address.
`Field "deleteCustomerAddress" argument "id" requires type Int!, found "XXX".` | The specified `id` argument value has the wrong type.
`Syntax Error: Expected Name, found )` | The `id` argument was omitted or does not have a value.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
