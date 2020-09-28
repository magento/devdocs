---
group: graphql
title: createCompany mutation
b2b_only: true
---

The `createCompany` mutation creates a company at the request of either a customer or a guest. The company definition includes the first name, last name, and email address of the company administrator. The email address assigned to the account cannot already exist in the system. Therefore, a customer attempting to create a company cannot use the same email address they used to log in to the storefront.

The company administrator cannot log in or perform additional company-related tasks until a Magento administrator approves the request to create a company.

## Syntax

```graphql
mutation {
  createCompany(
    input: CompanyCreateInput!
  ) {
    CreateCompanyOutput
  }
}
```
## Example usage

The following call creates a company on behalf of a guest.

**Request:**

```graphql
mutation {
  createCompany(input: {
    company_name: "TestCo"
    company_email: "tgarofalo@example.com"
    company_admin: {
      email: "tgarofalo@example.com"
      firstname: "Taina"
      lastname:"Garofalo"
    }
    legal_name: "TestCo Inc."
    legal_address: {
      street: [
        "100 Big Oak Tree Dr"
      ]
      city: "San Francisco"
      region: {
        region_code: "CA"
      }
      postcode: "99999"
      country_id: US
      telephone: "555 867-5309"
    }
  }){
    company {
      id
      name
      company_admin {
        email
        firstname
        lastname
      }
      legal_address {
        street
        city
        region {
          region_code
          region_id
        }
        postcode
        telephone
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createCompany": {
      "company": {
        "id": "MQ==",
        "name": "TestCo",
        "company_admin": {
          "email": "tgarofalo@example.com",
          "firstname": "Taina",
          "lastname": "Garofalo"
        },
        "legal_address": {
          "street": [
            "100 Big Oak Tree Dr"
          ],
          "city": "San Francisco",
          "region": {
            "region_code": "CA",
            "region_id": 12
          },
          "postcode": "99999",
          "telephone": "555 867-5309"
        }
      }
    }
  }
}
```

## Input attributes

The CompanyCreateInput object defines the schema for creating an entity.

Attribute |  Data Type | Description
--- | --- | ---
`company_admin` | [CompanyAdminInput!](#CompanyAdminInput) | Defines the company administrator
`company_email` | String! | The email address of the company contact
`company_name` | String! | The company name
`legal_address` | [CompanyLegalAddressCreateInput!](#CompanyLegalAddressCreateInput) | Defines legal address data of the company
`legal_name` | String | The full legal name of the company
`reseller_id` | String | The resale number that is assigned to the company for tax reporting purposes
`vat_tax_id` | String | The value-added tax number that is assigned to the company by some jurisdictions for tax reporting purposes

### CompanyAdminInput attributes {#CompanyAdminInput}

The `CompanyAdminInput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the company administrator
`firstname` | String! | The company administrator's first name
`gender` | Int | The company administrator's gender (Male - 1, Female - 2, Not Specified - 3)
`job_title` | String | The job title of the company administrator
`lastname` | String! | The company administrator's last name

### CompanyLegalAddressCreateInput attributes {#CompanyLegalAddressCreateInput}

The `CompanyLegalAddressCreateInput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city where the company is registered to conduct business
`country_id` | CountryCodeEnum! | Company's country ID. See the [`countries` query]({{page.baseurl}}/graphql/queries/directory-countries.html)
`postcode` | String! | The ZIP/postal code of the company
`region` | CustomerAddressRegionInput! | An object containing the region name and/or region ID where the company is registered to conduct business
`street` | [String!]! | An array of strings that define the street address where the company is registered to conduct business
`telephone` | String! | The primary phone number of the company

## Output attributes

The `CreateCompanyOutput` object contains the `Company` object.

{% include graphql/company.md %}

## Related topics

*  [updateCompany mutation]({{page.baseurl}}/graphql/mutations/update-company.html)