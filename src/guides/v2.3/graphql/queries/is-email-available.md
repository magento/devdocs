---
group: graphql
title: isEmailAvailable query
---

The `isEmailAvailable` query checks whether the specified email has already been used to create a customer account. A value of `true` indicates the email address is available, and the customer can use the email address to create an account.

## Syntax

`{isEmailAvailable (email): {IsEmailAvailableOutput}}`

## Example usage

The following example checks whether the email address `customer@example.com` is available to create a customer account.

**Request:**

```graphql
{
  isEmailAvailable(email: "customer@example.com") {
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isEmailAvailable": {
      "is_email_available": true
    }
  }
}
```

## Input attribute

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address to check

## Output attribute

Attribute |  Data Type | Description
--- | --- | ---
`is_email_available` | Boolean | A value of `true` indicates the email address is available, and the customer can use the email address to create an account

## Related topics

[customer query]({{page.baseurl}}/graphql/queries/customer.html)

## Errors

Error | Description
--- | ---
`Email is invalid` | The given email-id is not in a proper format.
`Field isEmailAvailable.email of required type String! was not provided` | The value specified in the `isEmailAvailable.email` argument is empty.
