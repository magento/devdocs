---
group: graphql
title: removeRequisitionListItems mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `removeRequisitionListItems` mutation removes items from the specified requisiton list for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [storeConfig query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  removeRequisitionListItems(
    uid: ID!
    items: [ID!]!
  ) {
    RemoveRequisitionListItemsOutput
  }
}
```
## Example usage

The following example removes the Frequently Ordered Products requisition list item by ID.

**Request:**

``` graphql
mutation {
  removeRequisitionListItems(
    uid: "4",
    items: ["2","3"]
  ) {
    list {
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
    "removeRequisitionListItems": {
      "list": {
          "uid": "4",
          "items_count": 0
        }
    }
  }
}
```

## Input attributes

The `removeRequisitionListItems` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
items_count | [ID!]! | An array of items IDs corresponding to products to be removed from the requisition list.
uid| ID! | The unique ID of the requisition list to change.

## Output attributes

The `removeRequisitionListItems` object returns the uid of the requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
items_count | Int! | The number of products in the requisition list.
uid | ID! | The unique ID of the modified requisition list.

## Related topics

*  [renameRequisitionList mutation]({{page.baseurl}}/graphql/mutations/rename-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)