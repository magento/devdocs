---
group: graphql
title: isCompanyAdminEmailAvailable query
b2b_only: true
---

The `isCompanyAdminEmailAvailable` query checks whether the specified email can be used to create a company administrator account. If the email matches an existing customer or another company administrator account, the query returns a `false` value. A value of `true` indicates the email address can be used to create a company administrator account.

## Syntax

`isCompanyAdminEmailAvailable ( email String! ) IsCompanyAdminEmailAvailableOutput`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company administrator account.

**Request:**

```graphql
query{
  isCompanyAdminEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyAdminEmailAvailable": {
      "is_email_available": false
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
`is_email_available` | Boolean! | A value of `true` indicates the email address is available

## Related topics

*  [isCompanyEmailAvailable query]({{page.baseurl}}/graphql/queries/is-company-email-available.html)
*  [isCompanyUserEmailAvailable query]({{page.baseurl}}/graphql/queries/is-company-user-email-available.html)
