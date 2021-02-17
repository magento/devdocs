---
group: graphql
title: updateCompanyStructure mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `updateCompanyStructure` mutation to change the parent node of a company team.

## Syntax

```graphql
mutation {
    updateCompanyStructure(
        input: CompanyStructureUpdateInput!
    ) {
        UpdateCompanyStructureOutput
    }
}
```

## Example usage

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

## Input attributes

The `CompanyStructureUpdateInput` input object defines the company team data.

### CompanyStructureUpdateInput attributes {#CompanyStructureUpdateInput}

The `CompanyStructureUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`parent_tree_id` | ID! | The ID of a company that will be the new parent
`tree_id` | ID! | The ID of the company team that is being moved to another parent

You can get the `parent_tree_id` and `tree_id` with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Output attributes

The `UpdateCompanyStructureOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`company` | Company! | Contains company data

{% include graphql/company.md %}
