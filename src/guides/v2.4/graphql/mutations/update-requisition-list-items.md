---
group: graphql
title: updateRequisitionListItems mutation
b2b_only: true
contributor_name: EY
---
The `updateRequisitionListItems` mutation updates products in requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  updateRequisitionListItems(
    requisitionListUid: ID!
    requisitionListItems: [UpdateRequisitionListItemsInput!]!
  ) {
    UpdateRequisitionListItemsOutput
  }
}
```

## Example usage

The following example updates the specified product's quantity in the requisition list.

**Request:**

``` graphql
mutation {
  updateRequisitionListItems(
      requisitionListUid: "1",
      requisitionListItems: [
        {
            item_id: "1"
            quantity: 2
        }
      ]
    ) {
    requisition_list {
      uid
      items_count
      items {
        items {
            uid
            quantity
        }
      }
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "updateRequisitionListItems": {
      "requisition_list": {
          "uid": "1",
          "items_count": 1,
          "items": {
            "items": {
                "uid": "1",
                "quantity": 2
            }
          }
        }
    }
  }
}
```

## Input attributes

The `updateRequisitionListItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItems`| [[UpdateRequisitionListItemsInput](#UpdateRequisitionListItemsInput)!]! | An array of products to be updated in the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

## Output attributes

The `updateRequisitionListItems` object returns the requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The requisition list after the items were updated

### UpdateRequisitionListItemsInput attributes {#UpdateRequisitionListItemsInput}

The `UpdateRequisitionListItemsInput` type contains the list of products to be updated in the requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`entered_options` | [EnteredOptionInput!] | An array of customer entered option IDs
`item_id` | ID! | The ID of the requisition list item to update
`quantity` | Float | The new quantity of the item
`selected_options` | [String!] | An array of selected option IDs

### RequisitionList attributes {#RequisitionList}

The `RequisitionList` object can contain the following attributes.

{% include graphql/requisition-list.md %}
