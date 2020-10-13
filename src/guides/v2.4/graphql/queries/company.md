---
group: graphql
title: company query
b2b_only: true
---

The `company` query returns details about the user's company. The request must include the customer token of a company user.

A company structure can contain multiple levels of teams, with company users assigned at each level. To query on a company structure, specify fragments on the `Customer` and `CompanyTeam` objects. Magento returns a [union](https://graphql.org/learn/schema/#union-types) of these objects. Specify the `__typename` attribute to distinguish the object types in the response.

## Syntax

`{company: {Company}}`

## Example usage

### Return information about a newly-created company

The following call returns basic information about the customer's company.

**Request:**

```graphql
query{
  company{
    company_admin {
      firstname
      lastname
      email
    }
    email
    id
    legal_address {
      street
       city
      region {
        region_id
        region_code
      }
      postcode
      country_code
      telephone
    }
    legal_name
    name
  }
}
```

**Response:**

```json
{
  "data": {
    "company": {
      "company_admin": {
        "firstname": "Taina",
        "lastname": "Garofalo",
        "email": "tgarofalo@example.com"
      },
      "email": "tgarofalo@example.com",
      "id": "MQ==",
      "legal_address": {
        "street": [
          "265 Cambridge Ave"
        ],
        "city": "Palo Alto",
        "region": {
          "region_id": 12,
          "region_code": "CA"
        },
        "postcode": "94306",
        "country_code": "US",
        "telephone": "555 867-5309"
      },
      "legal_name": "TestCo Inc.",
      "name": "TestCo"
    }
  }
}
```

### Return the company structure

The following query returns the customer's company structure.

<!--- To do: Replace the response after creating a proper structure and add a tree depicting the structure -->

**Request:**

```graphql
query{
  company{
    id
    name
    structure{
      items {
        entity {
          __typename
          ... on Customer {
            firstname
            lastname
            email
          }
          ... on CompanyTeam {
            name
            description
            id
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
    "company": {
      "id": "Ng==",
      "name": "TestCo2",
      "structure": {
        "items": [
          {
            "entity": {
              "__typename": "Customer",
              "firstname": "Taina",
              "lastname": "Garofalo",
              "email": "donadmin@example.com"
            }
          },
          {
            "entity": {
              "__typename": "CompanyTeam",
              "name": "Y Team",
              "description": "Y Team description",
              "id": "Ng=="
            }
          },
          {
            "entity": {
              "__typename": "Customer",
              "firstname": "B",
              "lastname": "BB",
              "email": "bbb@example.com"
            }
          },
          {
            "entity": {
              "__typename": "CompanyTeam",
              "name": "X team",
              "description": "X team description",
              "id": "Nw=="
            }
          },
          {
            "entity": {
              "__typename": "Customer",
              "firstname": "A",
              "lastname": "AA",
              "email": "aa@example.com"
            }
          },
          {
            "entity": {
              "__typename": "CompanyTeam",
              "name": "Z Team",
              "description": "Z team description",
              "id": "NQ=="
            }
          },
          {
            "entity": {
              "__typename": "Customer",
              "firstname": "C",
              "lastname": "CC",
              "email": "ccc@example.com"
            }
          }
        ]
      }
    }
  }
}
```

## Output attributes

The `company` object returns the `Company` object.

{% include graphql/company.md %}
