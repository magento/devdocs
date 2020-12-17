---
group: graphql
title: createCustomerV2 mutation
---

The `createCustomerV2` mutation creates a customer account. Use the [`createCustomerAddress` mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html) to complete the customer profile and define billing and shipping addresses.

The `createCustomerV2` mutation supersedes the `createCustomer` mutation as the means to create a customer account. The input objects differ between these two mutations. The `createCustomer` mutation required the `CustomerInput` object, as did the `updateCustomer` mutation. The attributes required for creating a customer are different than those for updating a customer, but you could not determine this by looking at the schema. The `createCustomerV2` mutation requires the `CustomerCreateInput` object, which it does not share with the [`updateCustomerV2` mutation]({{page.baseurl}}/graphql/mutations/update-customer-v2.html).

## Syntax

`mutation: {createCustomerV2(input: CustomerCreateInput!) {CustomerOutput}}`

## Example usage

The following call creates a new customer.

**Request:**

```graphql
mutation {
  createCustomerV2(
    input: {
      firstname: "Bob"
      lastname: "Loblaw"
      email: "bobloblaw@example.com"
      password: "b0bl0bl@w"
      is_subscribed: true
    }
  ) {
    customer {
      firstname
      lastname
      email
      is_subscribed
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCustomer": {
      "customer": {
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

The following table lists the attributes you can use as input for the `createCustomerV2` mutation.

Attribute |  Data Type | Description
--- | --- | ---
`date_of_birth` | String | The customer’s date of birth
`dob` | String | Deprecated. Use `date_of_birth` instead. The customer’s date of birth
`email` | String! | The customer’s email address
`firstname` | String! | The customer’s first name
`gender` | Int | The customer's gender (Male - 1, Female - 2)
`is_subscribed` | Boolean | Indicates whether the customer subscribes to the store's newsletter
`lastname` | String! | The customer’s last name
`middlename` | String | The customer’s middle name
`password` | String | The customer's password
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`suffix` | String | A value such as Sr., Jr., or III
`taxvat` | String | The customer’s Tax/VAT number (for corporate customers)

## Output attributes

The `CustomerOutput` object contains the `Customer` object.

The following table lists the top-level attributes of the `customer` object. See the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) for complete details about this object.

{% include graphql/customer-output-24.md %}

## Errors

Error | Description
--- | ---
`A customer with the same email address already exists in an associated website.` | The email provided in the `input`.`email` argument belongs to an existing customer.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Field CustomerInput.email of required type String! was not provided` | The `input`.`email` argument was omitted.
`Field "xxx" is not defined by type CustomerInput.` | The `input`.`xxx` argument is undefined.
`Required parameters are missing: First Name` | The `input`.`firstname` argument was omitted or contains an empty value.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [updateCustomerV2 mutation]({{page.baseurl}}/graphql/mutations/update-customer-v2.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
