---
group: graphql
title: deleteCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/company/mutations/delete-team/
status: migrated
---

Use the `deleteCompanyTeam` mutation to delete a company team by ID. You can get the team ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    deleteCompanyTeam(
        id: ID!
    ) {
        DeleteCompanyTeamOutput
    }
}
```

## Example usage

The following example deletes the specified team.

**Request:**

```graphql
mutation {
  deleteCompanyTeam(
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
    "deleteCompanyTeam": {
      "success": true
    }
  }
}
```

## Input attributes

The `deleteCompanyTeam` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded team ID to delete

## Output attributes

The `deleteCompanyTeam` mutation returns a Boolean value that indicates whether the operation was successful.

Attribute |  Data Type | Description
--- | --- | ---
`success` | Boolean | Indicates whether the company team has been deleted successfully (`true` or `false`)
