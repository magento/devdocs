---
group: graphql
title: createCustomer mutation
---

{:.bs-callout-warning}
Magento recommends using the [createCustomerV2 mutation]({{page.baseurl}}/graphql/mutations/create-customer-v2.html) to create a customer.

The `createCustomer` mutation creates a new customer.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {createCustomer(input: CustomerInput!) {CustomerOutput}}`

## Example usage

The following call creates a new customer.

**Request:**

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

The following table lists the attributes you can use as input for the `createCustomer` mutation. The [Customer attributes]({{page.baseurl}}/graphql/queries/customer.html#customerAttributes) table lists the attributes Magento returns.

{% include graphql/create-customer.md %}

## Output attributes

The `createCustomer` mutation returns the `CustomerOutput` object.

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
*  [updateCustomer mutation]({{page.baseurl}}/graphql/mutations/update-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
