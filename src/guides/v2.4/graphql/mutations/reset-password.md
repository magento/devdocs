---
group: graphql
title: resetPassword mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `resetPassword` mutation resets customer password using a reset password token and the customer's email address. Use it to set a new password for the registered customer after calling the [requestPasswordResetEmail]({{page.baseurl}}/graphql/mutations/request-password-reset-email.html) mutation.

## Syntax

`mutation: {resetPassword(email: String!, resetPasswordToken: String!, newPassword: String!): Boolean}`

## Example usage

The following call sets a new customer password.

**Request:**

```graphql
mutation {
  resetPassword(
    email: "roni_cost@example.com",
    resetPasswordToken: "gh80pkjGdsPyiXc0sUUXswX1uGN7crUr",
    newPassword: "new_password"
  )
}
```

**Response:**

```json
{
  "data": {
    "resetPassword": true
  }
}
```

## Input arguments

The `resetPassword` mutation must contain the following arguments:

Argument | Type | Description
--- | --- | ---
`email` | String! | Specifies the customer account that needs a password reset
`resetPasswordToken` | String! | A runtime token. You can find it in the reset email URL (see [requestPasswordResetEmail]({{page.baseurl}}/graphql/mutations/request-password-reset-email.html) mutation) or in the `customer_entity`.`rp_token` database table.
`newPassword` | String! | The new password

{:.bs-callout-info}
The new password must satisfy the password policies set for the store.

## Output

The `resetPassword` mutation returns `true` if the request was successful. Otherwise, it returns `false`.

## Errors

Error | Description
--- | ---
`Cannot set the customer's password` | A general error message that appears on some internal system errors. The original error is logged and can be found in the Magento logs.
`newPassword must be specified` | The `newPassword` argument is empty.
`resetPasswordToken must be specified` | The `resetPasswordToken` argument is empty.
`The account is locked` | You cannot modify a locked customer account.
`The email address has an invalid format.` | The value provided in the `email` argument has an invalid format.
`You must specify an email address.` | The `email` argument is empty.

## Related topics

-  [requestPasswordResetEmail mutation]({{page.baseurl}}/graphql/mutations/request-password-reset-email.html)
