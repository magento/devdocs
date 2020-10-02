---
group: graphql
title: company query
b2b_only: true
---

The `company` query returns details about the user's company. The request must include the customer token of a company user.

## Syntax

`{company: {Company}}`

## Example usage

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

## Output attributes

The `company` object returns the `Company` object.

<!--- include graphql/company.md -->
