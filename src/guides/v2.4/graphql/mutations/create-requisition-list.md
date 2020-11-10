---
group: graphql
title: createRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `createRequisitionList` mutation creates a requisition list for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  createRequisitionList(
    name: String!
    description: String
  ) {
    CreateRequisitionListOutput
  }
}
```

## Example usage

The following example creates the `Frequently Ordered Products` requisition list.

**Request:**

```graphql
mutation {
  createRequisitionList(
    name: "Frequently Ordered Products",
    description: "Frequently ordered products list"
  ) {
    list {
      uid
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
    "createRequisitionList": {
      "list": {
          "uid": "4",
          "name": "Frequently Ordered Products",
          "description": "Frequently ordered products list"
        }
    }
  }
}
```

## Input attributes

The `createRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`description`| String | Description of the customer's requisition list
`name` | String! | The name of the customer's requisition list

## Output attributes

The `createRequisitionListOutput` object returns the `uid` of the new requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | The requisition list description
`name` | String! | The requisition list name
`uid` | ID! | The ID of the new requisition list

## Related topics

*  [renameRequisitionList mutation]({{page.baseurl}}/graphql/mutations/rename-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)
