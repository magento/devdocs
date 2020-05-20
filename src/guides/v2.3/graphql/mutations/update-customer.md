---
group: graphql
title: updateCustomer mutation
---

Use the `updateCustomer` mutation to update the customer's personal information.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`mutation: {updateCustomer(input: CustomerInput!) {CustomerOutput}}`

## Example usage

The following call updates the first name and email address for a specific customer.

**Request:**

```graphql
mutation {
  updateCustomer(
    input: {
      firstname: "Rob"
      email: "robloblaw@example.com"
    }
  ) {
    customer {
      firstname
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCustomer": {
      "customer": {
        "firstname": "Rob",
        "email": "robloblaw@example.com"
      }
    }
  }
}
```

## Input attributes

The following table lists the attributes you can use as input for the `updateCustomer` mutation. The [Customer attributes]({{page.baseurl}}/graphql/queries/customer.html#customerAttributes) table lists the attributes Magento returns.

{% include graphql/create-customer.md %}

## Output attributes

The `updateCustomer` mutation returns the `CustomerOutput` object.

{% include graphql/customer-output.md %}

## Errors

Error | Description
--- | ---
`"input" value should be specified` | The `input` argument is empty.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`A customer with the same email address already exists in an associated website.` | You can not set a new email to a current customer because a provided email already exists for another user.
`Invalid date` | Incorrect value is provided in the `date_of_birth` argument.
`Invalid login or password.` | Specified in the `password` argument customer password is incorrect.
`Provide the current "password" to change "email".` | Specify a customer password to change an email in the `password` argument.
`Required parameters are missing: First Name` | Customer first name can not have an empty value.
`Required parameters are missing: Last Name` | Customer last name can not have an empty value.
`The account is locked.` | You can not modify a locked customer account.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
