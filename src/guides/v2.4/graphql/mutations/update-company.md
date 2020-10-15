---
group: graphql
title: updateCompany mutation
b2b_only: true
---

The `updateCompany` mutation allows you to update a company's address as well as top-level string attributes such as the name, legal name, and email. You cannot update the administrator or other objects such as teams, roles, or resources with this mutation.

## Syntax

```graphql
mutation {
  updateCompany(
    input: CompanyUpdateInput!
  ) {
    UpdateCompanyOutput
  }
}
```
## Example usage

The following call updates the legal address of a company

**Request:**

```graphql
mutation {
  updateCompany(
    input: {
      legal_address: {
        street: ["265 Cambridge Ave"]
        city: "Palo Alto"
        region: {
          region_code:"CA"
          region_id: 12
        }
        postcode: "94306"
      }
    }
  ) {
    company {
      legal_address {
        street
        city
        region {
          region_code
        }
        postcode
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "updateCompany": {
      "company": {
        "legal_address": {
          "street": [
            "265 Cambridge Ave"
          ],
          "city": "Palo Alto",
          "region": {
            "region_code": "CA"
          },
          "postcode": "94306"
        }
      }
    }
  }
}
```

## Input attributes

The CompanyUpdateInput object defines the schema for updating a company.

Attribute |  Data Type | Description
--- | --- | ---
`company_email` | String | The email address of the company contact
`company_name` | String | The company name
`legal_address` | [CompanyLegalAddressUpdateInput](#CompanyLegalAddressUpdateInput) | Defines legal address data of the company
`legal_name` | String | The full legal name of the company
`reseller_id` | String | The resale number that is assigned to the company for tax reporting purposes
`vat_tax_id` | String | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes

### CompanyLegalAddressUpdateInput attributes {#CompanyLegalAddressUpdateInput}

The `CompanyLegalAddressUpdateInput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String | The city where the company is registered to conduct business
`country_id` | CountryCodeEnum | Company's country ID. See the [`countries` query]({{page.baseurl}}/graphql/queries/directory-countries.html)
`postcode` | String | The ZIP/postal code of the company
`region` | CustomerAddressRegionInput! | An object containing the region name and/or region ID where the company is registered to conduct business
`street` | [String!] | An array of strings that define the street address where the company is registered to conduct business
`telephone` | String | The primary phone number of the company

## Output attributes

The `UpdateCompanyOutput` object contains the `Company` object.

{% include graphql/company.md %}

## Related topics

*  [createCompany mutation]({{page.baseurl}}/graphql/mutations/create-company.html)