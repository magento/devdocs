---
group: graphql
title: deleteRequisitionListItems mutation
b2b_only: true
contributor_name: EY
---
The `deleteRequisitionListItems` mutation removes items from the specified requisiton list for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  deleteRequisitionListItems(
    requisitionListUid: ID!
    requisitionListItemUids: [ID!]!
  ) {
    DeleteRequisitionListItemsOutput
  }
}
```
## Example usage

The following example removes the specified items from the requisition list.

**Request:**

``` graphql
mutation {
  deleteRequisitionListItems(
    requisitionListUid: "Mg==",
    requisitionListItemUids: ["NA==","NQ=="]
  ) {
    requisition_list {
      uid
      items_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "deleteRequisitionListItems": {
      "requisition_list": {
        "uid": "Mg==",
        "items_count": 1
      }
    }
  }
}
```

## Input attributes

The `deleteRequisitionListItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids`| [ID!]! | An array of UIDs representing products to be removed from the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

## Output attributes

The `deleteRequisitionListItems` object returns the requisition list after the deletion of items.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [RequisitionList](#RequisitionList) | The requisition list after removing items

### RequisitionList attributes {#RequisitionList}

{% include graphql/requisition-list.md %}
## Related topics

*  [updateRequisitionList mutation]({{page.baseurl}}/graphql/mutations/update-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)