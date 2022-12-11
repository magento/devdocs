---
group: graphql
title: copyItemsBetweenRequisitionLists mutation
b2b_only: true
contributor_name: EY
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/requisition-list/mutations/copy-items/
layout: migrated
---
The `copyItemsBetweenRequisitionLists` mutation copies items from one requisition list to another.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  copyItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!,
    destinationRequisitionListUid: ID,
    requisitionListItem: CopyItemsBetweenRequisitionListsInput
  ) {
    CopyItemsFromRequisitionListsOutput
  }
}
```

## Example usage

The following example copies an item from one requisition list to another.

**Request:**

``` graphql
mutation {
  copyItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Mg==",
      destinationRequisitionListUid: "Mw==",
      requisitionListItem: {
        requisitionListItemUids: [
          "Nw=="
        ]
      }
    ) {
    requisition_list {
      uid
      name
      items_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "copyItemsBetweenRequisitionLists": {
      "requisition_list": {
        "uid": "Mw==",
        "name": "Rarely ordered items",
        "items_count": 3
      }
    }
  }
}
```

## Input attributes

The `copyItemsBetweenRequisitionLists` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationRequisitionListUid`| ID | The unique ID of the destination requisition list. If null, a new requisition list will be created
`requisitionListItem`| [[CopyItemsBetweenRequisitionListsInput](#CopyItemsBetweenRequisitionListsInput)] | An array of selected requisition list items that are to be copied
`sourceRequisitionListUid`| ID! | The unique ID of the source requisition list

### CopyItemsBetweenRequisitionListsInput attributes {#CopyItemsBetweenRequisitionListsInput}

The `CopyItemsBetweenRequisitionListsInput` type contains the list of products to copy from one requisition list to other.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids` | [ID!]! | An array of IDs representing products copied from one requisition list to another

## Output attributes

The `copyItemsBetweenRequisitionLists` mutation returns the requisition list object to which the products were copied to.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The destination requisition list after the items were copied

### RequisitionList attributes {#RequisitionList}
{% include graphql/requisition-list.md %}

## Related topics

*  [moveItemsBetweenRequisitionLists mutation]({{page.baseurl}}/graphql/mutations/move-items-between-requisition-lists.html)
*  [deleteRequisitionListItems mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list-items.html)