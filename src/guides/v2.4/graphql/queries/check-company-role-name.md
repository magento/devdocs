---
group: graphql
title: checkCompanyUserEmail query
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

The `checkCompanyRoleName` query checks whether a company role name is valid for creating into a company.

The query returns a `false` value if the specified role name has already found in a company.

## Syntax

```graphql
{
    checkCompanyRoleName(
        name: String!
    ) {
        isNameValid
    }
}
```

## Example usage

The following example checks whether the company role named "Company Admin" can be used to create a new company role.

**Request:**

```graphql
query {
  checkCompanyRoleName(name: "Company Admin") {
    isNameValid
  }
}
```

**Response:**

```json
{
  "data": {
    "checkCompanyRoleName": {
      "isNameValid": false
    }
  }
}
```

## Input attribute

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The company role name to check

## Output attribute

Attribute |  Data Type | Description
--- | --- | ---
`isNameValid` | Boolean | A value of `true` indicates the company role name is available
