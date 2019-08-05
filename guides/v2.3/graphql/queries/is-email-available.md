---
group: graphql
title: isEmailAvailable query
---

The `isEmailAvailable` query checks whether the specified email has already been used to create a customer account. A value of `true` indicates the email address is available, and the customer can use the email address to create an account.

To return or modify information about a customer, Magento recommends you use customer tokens in the header of your GraphQL calls. However, you also can use [session authentication]({{ page.baseurl }}/get-started/authentication/gs-authentication-session.html).

## Syntax

`{isEmailAvailable (email): {IsEmailAvailableOutput}}`

## Example usage

The following example checks whether the email address `customer@example.com` is available to create a customer account.

**Request**

```graphql
{
  isEmailAvailable(email: "customer@example.com") {
    is_email_available
  }
}
```

**Response**

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
