---
group: graphql
title: addProductsToRequisitionList mutation
b2b_only: true
contributor_name: EY
---
The `addProductsToRequisitionList` mutation adds products to requisition list.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

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

The following example adds products to requisition list.

**Request:**

``` graphql
mutation {
  addProductsToRequisitionList(
      requisitionListUid: "1",
      requisitionListItems: [
        {
            sku: "sku"
            quantity: 1
            selected_options: ["Y29uZmlndXJhYmxlLzkzLzUz","Y29uZmlndXJhYmxlLzE0NC8xNzE="]
            entered_options: ["2","3"]
        }
      ]
    ) {
    requisition_list {
      uid,
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
          "uid": "1",
          "items_count": 1
        }
    }
  }
}
```

## Input attributes

The `addProductsToRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListUid`| ID! | The unique ID of the requisition list
`requisitionListItems`| [[RequisitionListItemsInput](#RequisitionListItemsInput)!]! | An array of products to be added to the requisition list

## Output attributes

The `addProductsToRequisitionList` object returns the requisition list object.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The requisition list after the items were added

### RequisitionListItemsInput attributes {#RequisitionListItemsInput}

The `RequisitionListItemsInput` type contains the list of products to add in requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`sku` | String! | The product SKU
`quantity` | Float | The quantity of the product to add
`parent_sku` | String | For configurable products, the SKU of the parent product
`selected_options` | [String!] | An array of selected option IDs
`entered_options` | [EnteredOptionInput!] | An array of customer entered option IDs

### RequisitionList attributes {#RequisitionList}

The `RequisitionList` object can contain the following attributes.

{% include graphql/requisition-list.md %}
