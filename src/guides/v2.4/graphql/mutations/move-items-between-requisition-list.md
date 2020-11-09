---
group: graphql
title: moveItemsBetweenRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The moveItemsBetweenRequisitionList mutation moves items from one requisition list to another.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the btob_website_configuration_requisition_list_active attribute to determine whether requisition lists are supported.

## Syntax
```graphql
mutation {
  moveItemsBetweenRequisitionList(
    source_id: ID!
    destination_id: ID
    itemIds: [ID!]!
  ) {
    MoveItemsFromRequisitionListOutput
  }
}
```

## Example usage

The following example moves items from one requisition list to another.
**Request:**
``` graphql
mutation {
  moveItemsBetweenRequisitionList(
      source_id: "4"
      destination_id: "5"
      itemIds: ["2","3"]
    ) {
    source {
      uid
      items_count
    }
    destination {
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
    "moveItemsBetweenRequisitionList": {
      "source": {
          "uid": "4",
          "items_count": 0
        },
      "destination": {
          "uid": "5",
          "items_count": 2
        }
    }
  }
}
```

## Input attributes

The moveItemsBetweenRequisitionList mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
destination_id| ID! | The ID of the destination requisition list. If null, the mutation creates a new requisition list.
itemIds| [ID!]! | An array of selected requisition list items that are to be moved from source to destination.
source_id| ID! | The ID of the source requisition list.

## Output attributes

The moveItemsBetweenRequisitionList object returns the uid of the requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
items_count | Int! | The number of products in the requisition list.
uid | ID! | The unique ID of the modified requisition list.

## Related topics

*  [copyItemsBetweenRequisitionList mutation]({{page.baseurl}}/graphql/mutations/copy-items-between-requisition-list.html)
*  [removeRequisitionListItems mutation]({{page.baseurl}}/graphql/mutations/remove-requisition-list-items.html)