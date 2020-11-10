---
group: graphql
title: isCompanyUserEmailAvailable query
b2b_only: true
---

The `isCompanyUserEmailAvailable` query checks whether an email is valid for registering a company user. The query returns a `false` value if the specified email matches the email of an existing customer or a company administrator.

## Syntax

`isCompanyUserEmailAvailable ( email String! ) IsCompanyUserEmailAvailableOutput`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company user.

**Request:**

```graphql
query{
  isCompanyUserEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyUserEmailAvailable": {
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
*  [isCompanyAdminEmailAvailable query]({{page.baseurl}}/graphql/queries/is-company-admin-email-available.html)
