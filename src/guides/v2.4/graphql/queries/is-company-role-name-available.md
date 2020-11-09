---
group: graphql
title: isCompanyRoleNameAvailable query
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

The `isCompanyRoleNameAvailable` query checks whether a company role name is valid for creating into a company.

The query returns a `false` value if the specified role name has already found in a company.

## Syntax

```graphql
{
    isCompanyRoleNameAvailable(
        name: String!
    ) {
        is_role_name_available
    }
}
```

## Example usage

The following example checks whether the company role named "Company Admin" can be used to create a new company role.

**Request:**

```graphql
query {
  isCompanyRoleNameAvailable(name: "Company Admin") {
    is_role_name_available
  }
}
```

**Response:**

```json
{
  "data": {
    "isCompanyRoleNameAvailable": {
      "is_role_name_available": false
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
`is_role_name_available` | Boolean | A value of `true` indicates the company role name is available
