---
group: graphql
title: addRequisitionListItemsToCart mutation
b2b_only: true
contributor_name: EY
---
The `addRequisitionListItemsToCart` mutation adds requisition list items to the cart.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  addRequisitionListItemsToCart (
    requisitionListUid: ID
    requisitionListItemUids: [ID!]
  ) {
    AddRequisitionListItemsToCartOutput
  }
}
```

## Example usage

The following example adds products to requisition list.

**Request:**

``` graphql
mutation {
  addRequisitionListItemsToCart
      (
        requisitionListUid: "1"
        requisitionListItemUids: ["1","2"]
      ) {
      status
     }
}
```

**Response:**

``` json
{
  "data": {
    "addRequisitionListItemsToCart": {
        "status": "true"
    }
  }
}
```

## Input attributes

The `addRequisitionListItemsToCart` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`requisitionListItemUids`| [ID!] | An array of UIDs presenting products to be added to the cart. If no UIDs are specified, all items in the requisition list will be added to the cart
`requisitionListUid`| ID! | The unique ID of the requisition list

## Output attributes

The `addRequisitionListItemsToCart` object returns the status, cart and errors object.

Attribute |  Data Type | Description
--- | --- | ---
`add_requisition_list_items_to_cart_user_errors` | [[AddRequisitionListItemToCartUserError!](#AddRequisitionListItemToCartUserError)] | Indicates why the attempt to add items to the requistion list was not successful
`cart` | [Cart](#CartObject) | The cart after adding requisition list items.
`status` | Boolean! | Indicates whether the attempt to add items to the requisition list was successful

### AddRequisitionListItemToCartUserError attributes {#AddRequisitionListItemToCartUserError}

The `AddRequisitionListItemToCartUserError` type contains the list of errors which indicates why the attempt to add items to the requistion list was not successful.

Attribute |  Data Type | Description
--- | --- | ---
`message` | String! | A description of the error
`type` | [AddRequisitionListItemToCartUserErrorType!](#AddRequisitionListItemToCartUserErrorType) | The Error type

### AddRequisitionListItemToCartUserErrorType {#AddRequisitionListItemToCartUserErrorType}

Type | Description
--- | --- | ---
`LOW_QUANTITY` | The one of the item's quantity is low
`OPTIONS_UPDATED` | The options has been updated
`OUT_OF_STOCK` | The one of the items is out of stock
`UNAVAILABLE_SKU` | The one of the items SKU is unavailable

### Cart object {#CartObject}

The `Cart` object can contain the following attributes.

{% include graphql/cart-object-24.md %}
