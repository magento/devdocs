---
group: graphql
title: createCompanyUser mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `createCompanyUser` mutation to create a new company user or add a user from the existing customer for your company.

The `target_id` input attribute allows you to specify which node in the company structure will be the parent node of the company user. If you do not specify a value, the user will be assigned to the top-level (root) node of the company structure.

You can get the `target_id` and the `role_id` with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    createCompanyUser(
        input: CompanyUserCreateInput!
    ) {
        CreateCompanyUserOutput
    }
}
```

## Example usage

The following example shows the minimal payload for adding a new customer to a customer's company.

**Request:**

```graphql
mutation {
  createCompanyUser(
    input: {
      email: "john.doe@example.com"
      firstname: "John"
      lastname: "Doe"
      job_title: "User"
      role_id: "MQ=="
      status: ACTIVE
      telephone: "1234567890"
    }
  ) {
    user {
      created_at
      email
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyUser": {
      "user": {
        "created_at": "2020-10-15 23:33:49",
        "email": "john.doe@example.com"
      }
    }
  }
}
```

This example creates a new company user of the parent company team specified in the `target_id` field.

**Request:**

```graphql
mutation {
  createCompanyUser(
    input: {
      email: "jane.doe3@example.com"
      firstname: "Jane"
      lastname: "Doe3"
      job_title: "User"
      role_id: "NTc="
      status: ACTIVE
      telephone: "1234567890"
      target_id: "OA=="
    }
  ) {
    user {
      created_at
      email
      firstname
      lastname
      job_title
      role {
        id
        name
      }
      team {
        id
        name
        structure_id
      }
      status
      telephone
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyUser": {
      "user": {
        "created_at": "2020-10-15 23:39:11",
        "email": "jane.doe@example.com",
        "firstname": "Jane",
        "lastname": "Doe",
        "job_title": "User",
        "role": {
          "id": "NTc=",
          "name": "Default User"
        },
        "team": {
          "id": "MQ==",
          "name": "Test Team",
          "structure_id": "Mg=="
        },
        "status": "ACTIVE",
        "telephone": "1234567890"
      }
    }
  }
}
```

## Input attributes

The `CompanyUserCreateInput` input object defines the company user data.

### CompanyUserCreateInput attributes {#CompanyUserCreateInput}

The `CompanyUserCreateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | Company user's email address
`firstname` | String! | Company user's first name
`lastname` | String! | Company user's last name
`job_title` | String! | Company user's job title
`role_id` | ID! | Company user's role ID
`status` | CompanyUserStatusEnum! | Indicates whether the company user is ACTIVE or INACTIVE
`telephone` | String! | Company user's phone number
`target_id` | ID | The ID of a node within a company's structure. This ID will be the parent of the created company user

## Output attributes

The `CreateCompanyUserOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`user` | Customer! | Contains company user data

### Customer attributes {#Customer}

{% include graphql/customer-output-24.md %}

## Errors

Error | Description
--- | ---
`Invitation was sent to an existing customer, they will be added to your organization once they accept the invitation.` | The customer with email provided in the `input`.`email` argument belongs to an existing customer. The invitation was sent to an existing customer. The customer will assign to the company after accepting the invitation.
`A customer with the same email already assigned to company.` | The email provided in the `input`.`email` argument belongs to an existing customer and the customer has already assigned to the company.
`"Email" is not a valid email address.` | The value provided in the `input`.`email` argument has an invalid format.
`Field "createCompanyUser" argument "input" requires type String!, found xxx.` | The value specified in the one of the `input` arguments has an invalid type.
`Field "xxx" is not defined by type CompanyUserCreateInput.` | The `input`.`xxx` argument is undefined.
`Required parameters are missing: xxx` | The `input`.`xxx` argument was omitted or contains an empty value.
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.
