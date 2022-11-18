---
group: graphql
title: addProductsToRequisitionList mutation
b2b_only: true
contributor_name: EY
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/requisition-list/mutations/add-products/
layout: migrated
---
The `addProductsToRequisitionList` mutation adds products to a requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  addProductsToRequisitionList(
    requisitionListUid: ID!
    requisitionListItems: [RequisitionListItemsInput!]!
  ) {
    AddProductsToRequisitionListOutput
  }
}
```

## Example usage

The following example adds products to a requisition list.

**Request:**

``` graphql
mutation {
  addProductsToRequisitionList(
      requisitionListUid: "Mg=="
      requisitionListItems: [
        {
            sku: "MS10"
            quantity: 1
            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUw","Y29uZmlndXJhYmxlLzE2MC8xNjg"]
        }
      ]
    ) {
    requisition_list {
      uid
      items {
        items {
          ... on RequisitionListItemInterface {
            uid
            product {
              uid
              sku
              name
            }
            quantity
          }
        }
      }
      items_count
    }
  }
}
```

**Response:**

``` json
{
  "data": {
    "addProductsToRequisitionList": {
      "requisition_list": {
        "uid": "Mg==",
        "items": {
          "items": [
            {
              "uid": "Mw==",
              "product": {
                "uid": "NTk2",
                "sku": "MS10",
                "name": "Logan  HeatTec&reg; Tee"
              },
              "quantity": 1
            }
          ]
        },
        "items_count": `
      }
    }
  }
}
```

## Input attributes

The `addProductsToRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItems`| [[RequisitionListItemsInput](#RequisitionListItemsInput)!]! | An array of products to be added to the requisition list
`requisitionListUid`| ID! | The unique ID of the requisition list

### RequisitionListItemsInput attributes {#RequisitionListItemsInput}

The `RequisitionListItemsInput` type contains the list of products to add to a requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`entered_options` | [EnteredOptionInput!] | An array of customer entered option IDs
`parent_sku` | String | For configurable products, the SKU of the parent product
`quantity` | Float | The quantity of the product to add
`selected_options` | [String!] | An array of selected option IDs
`sku` | String! | The product SKU

## Output attributes

The `addProductsToRequisitionList` object returns the requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The requisition list after the items were added

### RequisitionList attributes {#RequisitionList}

{% include graphql/requisition-list.md %}
