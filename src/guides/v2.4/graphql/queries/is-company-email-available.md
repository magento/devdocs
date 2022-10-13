---
group: graphql
title: isCompanyEmailAvailable query
b2b_only: true
---

The `isCompanyEmailAvailable` query checks whether the specified email is valid for company registration. The specified email can be the same as an existing customer or company administrator. If the email matches an existing company email, the query returns a `false` value.

## Syntax

`isCompanyEmailAvailable ( email String! ) IsCompanyEmailAvailableOutput`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to register a company.

**Request:**

```graphql
query{
  isCompanyEmailAvailable(email: "roni_cost@example.com"){
    is_email_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyEmailAvailable": {
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
`is_email_available` | Boolean! | A value of `true` indicates the email address is available

## Related topics

*  [isCompanyAdminEmailAvailable query]({{page.baseurl}}/graphql/queries/is-company-admin-email-available.html)
*  [isCompanyUserEmailAvailable query]({{page.baseurl}}/graphql/queries/is-company-user-email-available.html)
