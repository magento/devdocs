---
group: graphql
title: updateCustomerAddress mutation
---

Use the `updateCustomerAddress` mutation to update the customer's address.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

```graphql
mutation {
  updateCustomerAddress(
    id: Int!
    input: CustomerAddressInput
  ) {
    CustomerAddress
  }
}
```

## Example usage

The following call updates the customer's city and postcode.

**Request:**

```graphql
mutation {
  updateCustomerAddress(
    id:3
    input: {
      city: "New City"
      postcode: "55555"
    }
  ) {
    id
    city
    postcode
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomerAddress": {
      "id": 3,
      "city": "New City",
      "postcode": 55555
    }
  }
}
```

## Input attributes

The `updateCustomerAddress` object contains the following inputs:

Attribute |  Data Type | Description
--- | --- | ---
`id` | Int! | The ID assigned to the address object
`CustomerAddressInput` | [CustomerAddress](#customerAddressInput)| An array containing the customer’s shipping and billing addresses

{% include graphql/customer-address-input.md %}

## Output attributes

The `updateCustomerAddress` mutation returns the `CustomerAddress` object.

{% include graphql/customer-address-output.md %}

## Errors

Error | Description
--- | ---
`Address "id" value should be specified` | The `id` argument is zero.
`Could not find a address with ID "XXX"` | The customer address specified in the `id` argument does not exist.
`Current customer does not have permission to address with ID "XXX"` | The customer tries to update the address of another customer.
`Field "updateCustomerAddress" argument "id" of type "Int!" is required but not provided.` | The `id` argument was omitted.
`Field "updateCustomerAddress" argument "id" requires type Int!, found "XXX".` | The specified `id` argument value has the wrong type.
`"input" value must be specified` | The `input` argument was omitted or was specified but is empty.
`Syntax Error: Expected Name, found )` | The `id` and `input` arguments are omitted.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
