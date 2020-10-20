---
group: graphql
title: updateCompanyRole mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
b2b_only: true
---

Use the `updateCompanyRole` mutation to update the company role and permissions.

You can get the role ID with the [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Syntax

```graphql
mutation {
    updateCompanyRole(
        input: CompanyRoleUpdateInput!
    ) {
        UpdateCompanyRoleOutput
    }
}
```

## Example usage

The following example updates the name of a company role.

**Request:**

```graphql
mutation {
  updateCompanyRole(
    input: {
      id: "Mg=="
      name: "Company Admin (updated)"
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
          children {
            id
            text
            sortOrder
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
    "updateCompanyRole": {
      "role": {
        "id": "Mg==",
        "name": "Company Admin (updated)",
        "permissions": [
          {
            "id": "Magento_Company::index",
            "text": "All",
            "sortOrder": 100,
            "children": [
              {
                "id": "Magento_Company::view",
                "text": null,
                "sortOrder": 100,
                "children": [
                  {
                    "id": "Magento_Company::view_account",
                    "text": null,
                    "sortOrder": 100
                  },
                  {
                    "id": "Magento_Company::view_address",
                    "text": null,
                    "sortOrder": 200
                  },
                  {
                    "id": "Magento_Company::contacts",
                    "text": null,
                    "sortOrder": 300
                  },
                  {
                    "id": "Magento_Company::payment_information",
                    "text": null,
                    "sortOrder": 400
                  },
                  {
                    "id": "Magento_Company::shipping_information",
                    "text": null,
                    "sortOrder": 450
                  }
                ]
              },
              {
                "id": "Magento_Company::user_management",
                "text": null,
                "sortOrder": 200,
                "children": [
                  {
                    "id": "Magento_Company::roles_view",
                    "text": null,
                    "sortOrder": 100
                  },
                  {
                    "id": "Magento_Company::users_view",
                    "text": null,
                    "sortOrder": 300
                  }
                ]
              },
              {
                "id": "Magento_Company::credit",
                "text": null,
                "sortOrder": 500,
                "children": [
                  {
                    "id": "Magento_Company::credit_history",
                    "text": null,
                    "sortOrder": 500
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
```

You can change or add permissions to the company role using "permissions" attribute.

{:.bs-callout-warning}
Pay attention, to add new or change current permissions, you also must transmit the current permissions. You must transmit all necessary permissions every time you use the "permissions" attribute.

## Input attributes

The `CompanyRoleUpdateInput` input object defines the company role data.

### CompanyRoleUpdateInput attributes {#CompanyRoleUpdateInput}

The `CompanyRoleUpdateInput` object contains the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`id` | ID! | The encoded company role ID for updating
`name` | String | Role name.
`permissions` | [String] | A list of Role permission resources. Required array value for a field with strings as values of array.

### Available permissions

{% include b2b/company/company-acl.md %}

Also, you can get the list of all resources defined within the company using [`company`]({{page.baseurl}}/graphql/queries/company.html) query.

## Output attributes

The `UpdateCompanyRoleOutput` output object contains the following attribute:

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
`No such entity with roleId = xxx` | The company role with ID `xxx` doesn't exist.