---
group: graphql
title: Company Team mutations
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

Use these mutations to manage the structure of the company teams.

The main mutations for this provided below:

*  [createCompanyTeam mutation](#createcompanyteam-mutation)

*  [updateCompanyTeam mutation](#updatecompanyteam-mutation)

*  [deleteCompanyTeam mutation](#deletecompanyteam-mutation)

*  [updateCompanyStructure mutation](#updatecompanystructure-mutation)

## createCompanyTeam mutation

Use this mutation to create a new team for your company.

### Syntax

```graphql
mutation {
    createCompanyTeam(
        input: CompanyTeamCreateInput!
    ) {
        CreateCompanyTeamOutput
    }
}
```

### Example usage

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

In the next example, the team will be created in the parent team assigned from `target_id` field.

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

### Input attributes

The `CompanyTeamCreateInput` input object defines the company team data.

#### CompanyTeamCreateInput attributes {#CompanyTeamCreateInput}

The `CompanyTeamCreateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | Team Name. This is required attribute.
`description` | String | Team description.
`target_id` | ID | A target structure element ID within a company's structure for a team to be assigned to.

### Output attributes

The `CreateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | CompanyTeam! | Contains the company team data.

#### CompanyTeam attributes {#CompanyTeam}

{% include graphql/company-team.md %}

## updateCompanyTeam mutation

Use this mutation to update the company team data.

### Syntax

```graphql
mutation {
    updateCompanyTeam(
        input: CompanyTeamUpdateInput!
    ) {
        UpdateCompanyTeamOutput
    }
}
```

### Example usage

The following example shows how to update a team data of the customer's company.

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

### Input attributes

The `CompanyTeamUpdateInput` input object defines the company team data.

#### CompanyTeamUpdateInput attributes {#CompanyTeamUpdateInput}

The `CompanyTeamUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded team ID for updating. This is required attribute.
`name` | String | Team name.
`description` | String | Team description.

### Output attributes

The `UpdateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | [CompanyTeam!](#CompanyTeam) | Contains the company team data.

## deleteCompanyTeam mutation

Use this mutation to delete a company team by ID.

### Syntax

```graphql
mutation {
    deleteCompanyTeam(
        id: ID!
    ) {
        DeleteCompanyTeamOutput
    }
}
```

### Example usage

The following example shows how to delete a team of the customer's company.

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

### Input attributes

The `deleteCompanyTeam` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded team ID to delete.

You can get the team id using GraphQl query `company`

### Output attributes

The `deleteCompanyTeam` mutation returns a Boolean value that indicates whether the operation was successful.

## updateCompanyStructure mutation

Use this mutation to update the company structure element's parent node assignment.

### Syntax

```graphql
mutation {
    updateCompanyStructure(
        input: CompanyStructureUpdateInput!
    ) {
        UpdateCompanyStructureOutput
    }
}
```

### Example usage

The following example shows how to update the customer's company structure.

**Request:**

```graphql
mutation {
  updateCompanyStructure(
    input: {
      tree_id: "Mw=="
      parent_tree_id: "MQ=="
    }
  ) {
    company {
      structure(
        rootId: "MQ=="
      ) {
        items {
          id
          parent_id
          entity {
            ... on CompanyTeam {
              name
              id
              description
            }
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompanyStructure": {
      "company": {
        "structure": {
          "items": [
            {
              "id": "MQ==",
              "parent_id": "MA==",
              "entity": {}
            },
            {
              "id": "Mg==",
              "parent_id": "MQ==",
              "entity": {
                "name": "Test Team",
                "id": "MQ==",
                "description": "Test Team description"
              }
            },
            {
              "id": "Mw==",
              "parent_id": "Mg==",
              "entity": {
                "name": "Test Child Team",
                "id": "Mg==",
                "description": "Test Child Team dexription"
              }
            }
          ]
        }
      }
    }
  }
}
```

### Input attributes

The `CompanyStructureUpdateInput` input object defines the company team data.

#### CompanyStructureUpdateInput attributes {#CompanyStructureUpdateInput}

The `CompanyStructureUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`tree_id` | ID! | Company structure element's hierarchical ID that is being moved to another parent. Required.
`parent_tree_id` | ID! | A target parent element tree ID within a Company's Structure. Required.

### Output attributes

The `UpdateCompanyStructureOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`company` | [Company!](#company-link-from-company-query) | Contains the company data.
