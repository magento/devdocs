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

Use the `createCompanyTeam` mutation to create a new team for your company.

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

### Input attributes

The `CompanyTeamCreateInput` input object defines the company team data.

#### CompanyTeamCreateInput attributes {#CompanyTeamCreateInput}

The `CompanyTeamCreateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | An optional description of the team
`name` | String! | The display name of the team
`target_id` | ID | The ID of a node within a company's structure. This ID will be the parent of the created team

### Output attributes

The `CreateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | CompanyTeam! | Contains company team data

#### CompanyTeam attributes {#CompanyTeam}

{% include graphql/company-team.md %}

## updateCompanyTeam mutation

Use the `updateCompanyTeam` mutation to update the company team data.

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

### Input attributes

The `CompanyTeamUpdateInput` input object defines the company team data.

#### CompanyTeamUpdateInput attributes {#CompanyTeamUpdateInput}

The `CompanyTeamUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | An optional description of the team
`id` | ID! | The encoded team ID for updating
`name` | String | The display name of the team

### Output attributes

The `UpdateCompanyTeamOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`team` | [CompanyTeam!](#CompanyTeam) | Contains company team data

## deleteCompanyTeam mutation

Use the `deleteCompanyTeam` mutation to delete a company team by ID. You can get the team ID with the [`company` query]({{page.baseurl}}/graphql/queries/company.html).

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

### Input attributes

The `deleteCompanyTeam` mutation requires the following input:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded team ID to delete

### Output attributes

The `deleteCompanyTeam` mutation returns a Boolean value that indicates whether the operation was successful.

## updateCompanyStructure mutation

Use the `updateCompanyStructure` mutation to change the parent node of a company team.

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
`parent_tree_id` | ID! | The ID of a company that will be the new parent
`tree_id` | ID! | The ID of the company team that is being moved to another parent

### Output attributes

The `UpdateCompanyStructureOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`company` | [Company!](#company-link-from-company-query) | Contains company data
