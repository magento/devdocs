---
group: graphql
title: createCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `createCompanyTeam` mutation to create a new team for your company.

The `target_id` input attribute allows you to specify which node in the company structure will be the parent node of the company team. If you do not specify a value, the team will be assigned to the top-level (root) node of the company structure.

You can get the `target_id` with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    createCompanyTeam(
        input: CompanyTeamCreateInput!
    ) {
        CreateCompanyTeamOutput
    }
}
```

## Example usage

The following example shows the minimal payload for adding a new team to a customer's company.

**Request:**

```graphql
mutation {
  createCompanyTeam(
    input: {
      name: "Test Team"
    }
  ) {
    team {
      id
      name
      description
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyTeam": {
      "team": {
        "id": "MQ==",
        "name": "Test Team",
        "description": null
      }
    }
  }
}
```

This example creates a child team of the parent team specified in the `target_id` field.

**Request:**

```graphql
mutation {
  createCompanyTeam(
    input: {
      name: "Test Child Team"
      description: "Test Child Team description"
      target_id: "MQ=="
    }
  ) {
    team {
      id
      name
      description
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompanyTeam": {
      "team": {
        "id": "Mg==",
        "name": "Test Child Team",
        "description": "Test Child Team description"
      }
    }
  }
}
```

## Input attributes

The `CompanyTeamCreateInput` input object defines the company team data.

### CompanyTeamCreateInput attributes {#CompanyTeamCreateInput}

The `CompanyTeamCreateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | An optional description of the team
`name` | String! | The display name of the team
`target_id` | ID | The ID of a node within a company's structure. This ID will be the parent of the created team

## Output attributes

The `CreateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | CompanyTeam! | Contains company team data

### CompanyTeam attributes {#CompanyTeam}

{% include graphql/company-team.md %}
