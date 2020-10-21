---
group: graphql
title: deleteCompanyUser mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `deleteCompanyUser` mutation to deactivate a company user by ID.

You can get the user ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    deleteCompanyUser(
        id: ID!
    ) {
        DeleteCompanyUserOutput
    }
}
```

## Example usage

The following example deactivates the user specified in ID.

**Request:**

```graphql
mutation {
  deleteCompanyUser(
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
    "deleteCompanyUser": {
      "success": true
    }
  }
}
```

## Input attributes

The `deleteCompanyUser` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded user ID to deactivate

## Output attributes

The `deleteCompanyUser` mutation returns a Boolean value that indicates whether the operation was successful.

Attribute |  Data Type | Description
--- | --- | ---
`success` | Boolean! | A value of `true` indicates the company user has been deactivated successfully, otherwise a value returns `false`

## Errors

Error | Description
--- | ---
`You do not have authorization to perform this action.` | The user with ID provided in the `input`.`id` argument not available to your company or you have no permissions for this operation.
`You cannot delete yourself.` | You have no a possibility to deactivate yourself.
`A customer with the same email address already exists in an associated website` | The email provided in the `input`.`email` argument has already exist to another user.
`The user XXX is the company admin and cannot be set to inactive. You must set another user as the company admin first.` | The company owner cannot be deactivated. You must set another user as the company admin first.
