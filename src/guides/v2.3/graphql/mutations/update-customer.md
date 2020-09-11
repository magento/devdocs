---
group: graphql
title: updateCustomer mutation
---

Use the `updateCustomer` mutation to update the customer's personal information.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

```graphql
mutation {
  updateCustomer(
    input: CustomerInput!
  ) {
    CustomerOutput
  }
}
```

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
`A customer with the same email address already exists in an associated website.` | You cannot set a new email to a current customer, because another user has the specified email.
`Invalid date` | An incorrect value was provided in the `date_of_birth` argument.
`Invalid login or password.` | The value specified in the `password` argument is incorrect.
`Provide the current "password" to change "email".` | To change an email address, specify the correct customer password in the `password` argument.
`Required parameters are missing: First Name` | The customer first name cannot have an empty value.
`Required parameters are missing: Last Name` | The customer last name cannot have an empty value.
`The account is locked.` | You cannot modify a locked customer account.
`The current customer isn't authorized.` | The current customer is not currently logged in, or the customer's token does not exist in the `oauth_token` table.

## Related topics

*  [customer query]({{page.baseurl}}/graphql/queries/customer.html)
*  [createCustomer mutation]({{page.baseurl}}/graphql/mutations/create-customer.html)
*  [createCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/create-customer-address.html)
*  [updateCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/update-customer-address.html)
*  [deleteCustomerAddress mutation]({{page.baseurl}}/graphql/mutations/delete-customer-address.html)
