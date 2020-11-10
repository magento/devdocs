---
group: graphql
title: renameRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `renameRequisitionList` mutation updates the name and, optionally, the description of a requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

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

The following example renames the `Frequently Ordered Products` requisition list and updates its description.

**Request:**

```graphql
mutation {
  renameRequisitionList(
    uid: "4"
    name: "Frequently Ordered Essential Products",
    description: "Frequently ordered essential products list"
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
`description`| String | Description of the customer's requisition list
`name` | String! | The name of the customer's requisition list
`uid` | ID! | The ID of the new requisition list

## Output attributes

The `renameRequisitionListOutput` object returns the `uid` of the new requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`description` | String | The requisition list description
`name` | String! | The requisition list name
`uid` | ID! | The ID of the new requisition list

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)
