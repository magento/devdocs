---
group: graphql
title: updateCustomerAddress mutation
---

Use the `updateCustomerAddress` mutation to update the customer's address.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {updateCustomerAddress(id: Int!input: CustomerAddressInput) {CustomerAddress}}`

## Example usage

The following call updates the customer's city and postcode.

**Request**

```graphql
mutation {
  updateCustomerAddress(id:3, input: {
    city: "New City"
    postcode: "55555"
  }) {
    id
    city
    postcode
  }
}
```

**Response**

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

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
