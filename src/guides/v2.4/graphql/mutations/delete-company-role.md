---
group: graphql
title: deleteCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `deleteCompanyRole` mutation to delete a company role by ID.

You can get the role ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    deleteCompanyRole(
        id: ID!
    ) {
        DeleteCompanyRoleOutput
    }
}
```

## Example usage

The following example deletes the specified company role.

**Request:**

```graphql
mutation {
  deleteCompanyRole(
    id: "Mg=="
  ) {
    success
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteCompanyRole": {
      "success": true
    }
  }
}
```

## Input attributes

The `deleteCompanyRole` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded role ID to delete

## Output attributes

The `deleteCompanyRole` mutation returns a Boolean value that indicates whether the operation was successful.
