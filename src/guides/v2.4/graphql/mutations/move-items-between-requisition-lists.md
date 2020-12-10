---
group: graphql
title: moveItemsBetweenRequisitionLists mutation
b2b_only: true
contributor_name: EY
---
The `moveItemsBetweenRequisitionLists` mutation moves items from one requisition list to another.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  moveItemsBetweenRequisitionLists(
    sourceRequisitionListUid: ID!
    destinationRequisitionListUid: ID
    requisitionListItem: MoveItemsBetweenRequisitionListsInput
  ) {
    MoveItemsBetweenRequisitionListsOutput
  }
}
```

## Example usage

The following example moves items from one requisition list to another.

**Request:**

``` graphql
mutation {
  moveItemsBetweenRequisitionLists(
      sourceRequisitionListUid: "Y29uZmlndXJhYmxlLzkzLzUz"
      destinationRequisitionListUid: "W16uZmlndXJhYmxlLakzLzUz"
      requisitionListItemUids: ["2","3"]
    ) {
      source_requisition_list {
        uid
        items_count
      }
      destination_requisition_list {
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
    "moveItemsBetweenRequisitionLists": {
      "source_requisition_list": {
          "uid": "Y29uZmlndXJhYmxlLzkzLzUz",
          "items_count": 0
        },
      "destination_requisition_list": {
          "uid": "W16uZmlndXJhYmxlLakzLzUz",
          "items_count": 2
        }
    }
  }
}
```

## Input attributes

The `moveItemsBetweenRequisitionLists` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`destinationRequisitionListUid`| ID! | The unique ID of the destination requisition list. If null, a new requisition list will be created
`requisitionListItem`| [[MoveItemsBetweenRequisitionListsInput](#MoveItemsBetweenRequisitionListsInput)]  | An array of selected requisition list items that are to be moved from the source to the destination list
`sourceRequisitionListUid`| ID! | The unique ID of the source requisition list

## Output attributes

The `moveItemsBetweenRequisitionLists` object returns the source requisition list and the destination requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`destination_requisition_list` | [[RequisitionList](#RequisitionList)] | The destination requisition list after moving items
`source_requisition_list` | [[RequisitionList](#RequisitionList)] | The source requisition list after moving items

### MoveItemsBetweenRequisitionListsInput attributes {#MoveItemsBetweenRequisitionListsInput}

The `MoveItemsBetweenRequisitionListsInput` type contains the list of products to move from one requisition list to other.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids` | [ID!]! | An array of IDs representing products moved from one requisition list to another

### RequisitionList attributes {#RequisitionList}
{% include graphql/requisition-list.md %}

## Related topics

*  [copyItemsBetweenRequisitionLists mutation]({{page.baseurl}}/graphql/mutations/copy-items-between-requisition-lists.html)
*  [deleteRequisitionListItems mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list-items.html)