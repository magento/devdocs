---
group: graphql
title: updateCompanyUser mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `updateCompanyUser` mutation to update an existing company user.

You can get the user ID and role ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    updateCompanyUser(
        input: CompanyUserUpdateInput!
    ) {
        UpdateCompanyUserOutput
    }
}
```

## Example usage

The following example changes the job title of the specified company user.

**Request:**

```graphql
mutation {
  updateCompanyUser(
    input: {
      id: "Mg=="
      job_title: "Company User"
    }
  ) {
    user {
      email
      firstname
      lastname
      job_title
      telephone
      status
      role {
        id
        name
        users_count
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyUser": {
      "user": {
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "Company User",
        "telephone": "1234567890",
        "status": "ACTIVE",
        "role": {
          "id": "MQ==",
          "name": "Default User",
          "users_count": 1
        }
      }
    }
  }
}
```

This example deactivates the company user and assigns a different role.

**Request:**

```graphql
mutation {
  updateCompanyUser(
    input: {
      id: "Mg=="
      role_id: "MQ=="
      status: INACTIVE
    }
  ) {
    user {
      email
      firstname
      lastname
      job_title
      telephone
      status
      role {
        id
        name
        users_count
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyUser": {
      "user": {
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "Company User",
        "telephone": "1234567890",
        "status": "INACTIVE",
        "role": {
          "id": "MQ==",
          "name": "Default User",
          "users_count": 1
        }
      }
    }
  }
}
```

## Input attributes

The `CompanyUserUpdateInput` input object defines the company user data.

### CompanyUserUpdateInput attributes {#CompanyUserUpdateInput}

The `CompanyUserUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded user ID of the company user to be updated
`email` | String | The company user's email address
`firstname` | String | The company user's first name
`lastname` | String | The company user's last name
`job_title` | String | The company user's job title or function
`role_id` | ID | The ID of the role assigned to the company user
`status` | CompanyUserStatusEnum | Indicates whether the company user is ACTIVE or INACTIVE
`telephone` | String | The company user's phone number

## Output attributes

The `UpdateCompanyUserOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`user` | Customer! | Contains company user data

### Customer attributes {#Customer}

{% include graphql/customer-output-24.md %}

## Errors

Error | Description
--- | ---
`You do not have authorization to perform this action.` | The user with the ID provided in the `input`.`id` argument is not assigned to your company.
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.
`A customer with the same email address already exists in an associated website` | The email provided in the `input`.`email` argument belongs to another user.
