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

The following example deletes a requisition list.

**Request:**

```graphql
mutation {
  deleteRequisitionList(
    requisitionListUid: "Mw=="
  ) {
    status
    requisition_list {
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
    "deleteRequisitionList": {
      "status": true,
      "requisition_list": {
        "uid": "Mw=="
        "name": "Frequently Ordered Products"
        "description": "Frequently ordered products list"
      }
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

The `deleteRequisitionList` mutation returns the status of the operation, and the requisition list, if it was successfully deleted.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | Details about the deleted requisition list
`status` | Boolean | Indicates whether the request to delete the requisition list was successful

### RequisitionList attributes {#RequisitionList}

{% include graphql/requisition-list.md %}

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [updateRequisitionList mutation]({{page.baseurl}}/graphql/mutations/update-requisition-list.html)
