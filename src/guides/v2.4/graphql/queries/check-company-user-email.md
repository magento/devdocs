---
group: graphql
title: checkCompanyUserEmail query
b2b_only: true
---

The `checkCompanyUserEmail` query checks whether an email is valid for registering a company user. The query returns a `false` value if the specified email matches the email of an existing customer or a company administrator.

## Syntax

`checkCompanyUserEmail ( email String! ) CompanyUserEmailCheckResponse`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company user.

**Request:**

```graphql
query{
  checkCompanyUserEmail(email: "roni_cost@example.com"){
    isEmailValid
  }
}
```

**Response:**

```json
{
  "data": {
    "checkCompanyUserEmail": {
      "isEmailValid": false
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

*  [checkCompanyEmail query]({{page.baseurl}}/graphql/queries/check-company-email.html)
*  [checkCompanyAdminEmail query]({{page.baseurl}}/graphql/queries/check-company-admin-email.html)
