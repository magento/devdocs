---
group: graphql
title: checkCompanyEmail query
b2b_only: true
---

The `checkCompanyEmail` query checks whether the specified email is valid for company registration. The specified email can be the same as an existing customer or company administrator. If the email matches an existing company email, the query returns a `false` value.

## Syntax

`checkCompanyEmail ( email String! ) CompanyEmailCheckResponse`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to register a company.

**Request:**

```graphql
query{
  checkCompanyEmail(email: "roni_cost@example.com"){
    isEmailValid
  }
}
```

**Response:**

```json
{
  "data": {
    "checkCompanyEmail": {
      "isEmailValid": true
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
`isEmailValid` | Boolean | A value of `true` indicates the email address is available

## Related topics

*  [checkCompanyAdminEmail query]({{page.baseurl}}/graphql/queries/check-company-admin-email.html)
*  [checkCompanyUserEmail query]({{page.baseurl}}/graphql/queries/check-company-user-email.html)
