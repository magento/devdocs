---
group: graphql
title: updateCompanyTeam mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `updateCompanyTeam` mutation to update the company team data.

## Syntax

```graphql
mutation {
    updateCompanyTeam(
        input: CompanyTeamUpdateInput!
    ) {
        UpdateCompanyTeamOutput
    }
}
```

## Example usage

The following example updates the name and description of a company team.

**Request:**

```graphql
mutation {
  updateCompanyTeam(
    input: {
      name: "My Test Team"
      description: "My Test Team description"
      id: "MQ=="
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
    "updateCompanyTeam": {
      "team": {
        "id": "MQ==",
        "name": "My Test Team",
        "description": "My Test Team description"
      }
    }
  }
}
```

## Input attributes

The `CompanyTeamUpdateInput` input object defines the company team data.

### CompanyTeamUpdateInput attributes {#CompanyTeamUpdateInput}

The `CompanyTeamUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | An optional description of the team
`id` | ID! | The encoded team ID for updating
`name` | String | The display name of the team

You can get the team ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Output attributes

The `UpdateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | CompanyTeam! | Contains company team data

### CompanyTeam attributes {#CompanyTeam}

{% include graphql/company-team.md %}
