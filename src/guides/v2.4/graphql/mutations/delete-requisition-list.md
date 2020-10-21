---
group: graphql
title: deleteRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `deleteRequisitionList` mutation deletes a requisition list of the logged in customer.

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the `btob_website_configuration_requisition_list_active` attribute to determine whether requisition lists are supported.

## Syntax

```graphql
mutation {
  deleteRequisitionList(
    uid: ID!
  ) {
    deleteRequisitionListOutput
  }
}
```

## Example usage

The following example deletes the requisition list with `uid` 4.

**Request:**

```graphql
mutation {
  deleteRequisitionList(
    uid: "4"
  ) {
    result
  }
}
```

**Response:**

```json
{
  "data": {
    "deleteRequisitionList": {
      "result": true
    }
  }
}
```

## Input attributes

The `deleteRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The ID of the requisition list to delete

## Output attributes

The `deleteRequisitionListOutput` object returns the `uid` of the new requisition list as well as the input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`result` | Boolean | Indicates whether the requisition list was deleted

## Related topics

*  [createRequisitionList mutation]({{page.baseurl}}/graphql/mutations/create-requisition-list.html)
*  [renameRequisitionList mutation]({{page.baseurl}}/graphql/mutations/rename-requisition-list.html)
