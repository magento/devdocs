---
group: graphql
title: createCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `createCompanyRole` mutation to create a new company role and permissions.

## Syntax

```graphql
mutation {
    createCompanyRole(
        input: CompanyRoleCreateInput!
    ) {
        CreateCompanyRoleOutput
    }
}
```

## Example usage

This example creates a new company role with a list of company permissions available to the company.

**Request:**

```graphql
mutation {
  createCompanyRole(
    input: {
      name: "Company Admin"
      permissions: [
        "Magento_Company::index"
        "Magento_Company::view"
        "Magento_Company::view_account"
        "Magento_Company::edit_account"
        "Magento_Company::view_address"
        "Magento_Company::edit_address"
        "Magento_Company::contacts"
        "Magento_Company::payment_information"
        "Magento_Company::shipping_information"
        "Magento_Company::user_management"
        "Magento_Company::roles_view"
        "Magento_Company::roles_edit"
        "Magento_Company::users_view"
        "Magento_Company::users_edit"
        "Magento_Company::credit"
        "Magento_Company::credit_history"
      ]
    }
  ) {
    role {
      id
      name
      permissions {
        id
        text
        sortOrder
        children {
          id
          text
          sortOrder
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
    "createCompanyRole": {
      "role": {
        "id": "Mg==",
        "name": "Company Admin",
        "permissions": [
          {
            "id": "Magento_Company::index",
            "text": "All",
            "sortOrder": 100,
            "children": [
              {
                "id": "Magento_Company::view",
                "text": null,
                "sortOrder": 100
              },
              {
                "id": "Magento_Company::user_management",
                "text": null,
                "sortOrder": 200
              },
              {
                "id": "Magento_Company::credit",
                "text": null,
                "sortOrder": 500
              }
            ]
          }
        ]
      }
    }
  }
}
```

## Input attributes

The `CompanyRoleCreateInput` input object defines the company role data for creating.

### CompanyRoleCreateInput attributes {#CompanyRoleCreateInput}

The `CompanyRoleCreateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | Role name.
`permissions` | [String!]! | A list of Role permission resources. Required array value for a field with strings as values of array.

### Available permissions

{% include b2b/company/company-acl.md %}

Also, you can get the list of all resources defined within the company using [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Output attributes

The `CreateCompanyRoleOutput` output object contains the following attribute:

Attribute |  Data Type | Description
--- | --- | ---
`role` | CompanyRole! | Contains company role data

### CompanyRole attributes {#CompanyRole}

{% include graphql/company-role.md %}

## Errors

Error | Description
--- | ---
`User role with this name already exists. Enter a different name to save this role.` | The company cannot have multiple company roles with the same names.
`Unable to set "allow" for the resource because its parent resource(s) is set to "deny".` | To allow permission for the company role, you must allow all the permissions of the parent tree.
