---
group: graphql
title: deleteRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `deleteRequisitionList` mutation deletes a requisition list of the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

## Syntax

```graphql
mutation {
  deleteRequisitionList(
    requisitionListUid: ID!
  ) {
    deleteRequisitionListOutput
  }
}
```

## Example usage

The following example deletes the requisition list with `uid` 4.

**Request:**

```graphql
mutation {
  deleteRequisitionList(
    requisitionListUid: "Y29uZmlndXJhYmxlLzkzLzUz"
  ) {
    list {
      uid
      name
      description
    }
    status
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteRequisitionList": {
      "list": {
        "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
        "name": "Frequently Ordered Products",
        "description": "Frequently ordered products list"
      },
      "status": true
    }
  }
}
```

## Input attributes

The `deleteRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListUid` | ID! | The ID of the requisition list to delete

## Output attributes

The `deleteRequisitionList` mutation returns the new requisition list after deleting a list for the logged in customer.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The requisition list after removing a list
`status` | Boolean | Indicates whether the request to delete the requisition list was successful

### RequisitionList attributes {#RequisitionList}
{% include graphql/requisition-list.md %}

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [updateRequisitionList mutation]({{page.baseurl}}/graphql/mutations/update-requisition-list.html)
