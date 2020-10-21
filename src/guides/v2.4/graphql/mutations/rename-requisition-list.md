---
group: graphql
title: renameRequisitionList mutation
b2b_only: true
---
The `renameRequisitionList` mutation updates the name and, optionally, the description of a requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the following attributes to determine whether requisition lists are supported:

*  `btob_website_configuration_requisition_list_active`

## Syntax

```graphql
mutation {
  renameRequisitionList(
    uid: ID!
    name: String!
    description: String
  ) {
    renameRequisitionListOutput
  }
}
```

## Example usage

The following example renames the `Frequently Ordered Products` requisition list.

**Request:**

``` graphql
mutation {
  renameRequisitionList(
    uid: 4
    name: "Frequently Ordered Essential Products",
    description: "Frequently ordered essential products list"
  ) {
    list {
      uid
      name
      description
  }
}
```

**Response:**

```json
{
  "data": {
    "renameRequisitionList": {
      "list": {
          "uid": "4",
          "name": "Frequently Ordered Essential Products",
          "description": "Frequently ordered essential products list"
        }
    }
  }
}
```

## Input attributes

The `renameRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The ID of the new requisition list
`name` | String! | The name of the customer's requisition list
`description`| String | Description of the customer's requisition list

## Output attributes

The `renameRequisitionListOutput` object returns the `uid` of the new requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`name` | String! | The requisition list name
`uid` | ID! | The ID of the new requisition list
`description` | String | The requisition list description

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)
