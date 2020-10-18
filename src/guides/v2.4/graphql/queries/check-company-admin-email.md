---
group: graphql
title: checkCompanyAdminEmail query
b2b_only: true
---

The `checkCompanyAdminEmail` query checks whether the specified email can be used to create a company administrator account. If the email matches an existing customer or another company administrator account, the query returns a `false` value. A value of `true` indicates the email address can be used to create a company administrator account.

## Syntax

`checkCompanyAdminEmail ( email String! ) CompanyAdminEmailCheckResponse`

## Example usage

The following example checks whether the email address `roni_cost@example.com` can be used to create a company administrator account.

**Request:**

```graphql
query{
  checkCompanyAdminEmail(email: "roni_cost@example.com"){
    isEmailValid
  }
}
```

**Response:**

```json
{
  "data": {
    "checkCompanyAdminEmail": {
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
*  [checkCompanyUserEmail query]({{page.baseurl}}/graphql/queries/check-company-user-email.html)
