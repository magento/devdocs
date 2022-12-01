---
group: graphql
title: createRequisitionList mutation
b2b_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/b2b/requisition-list/mutations/create/
layout: migrated
---
The `createRequisitionList` mutation creates a requisition list for the logged in customer.

This mutation requires a valid [customer authentication token]({{page.baseurl}}/graphql/mutations/generate-customer-token.html).

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the `is_requisition_list_active` attribute to determine whether requisition lists are enabled.

## Syntax

```graphql
mutation {
  createRequisitionList(
    name: String!
    description: String
  ) {
    CreateRequisitionListOutput
  }
}
```

## Example usage

The following example creates the `Frequently Ordered Products` requisition list.

**Request:**

```graphql
mutation {
  createRequisitionList(input:{
    name: "Frequently Ordered Products"
    description: "Frequently ordered products list"
  }
  ) {
    requisition_list {
      uid
      name
      description
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "createRequisitionList": {
      "requisition_list": {
          "uid": "Mw=="
          "name": "Frequently Ordered Products"
          "description": "Frequently ordered products list"
        }
    }
  }
}
```

## Input attributes

The `createRequisitionList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`description`| String | Description of the customer's requisition list
`name` | String! | The name of the customer's requisition list

## Output attributes

The `createRequisitionList` mutation returns the new requisition list.

Attribute |  Data Type | Description
--- | --- | ---
`requisition_list` | [[RequisitionList](#RequisitionList)] | The created requisition list

### RequisitionList attributes {#RequisitionList}

{% include graphql/requisition-list.md %}

## Related topics

*  [updateRequisitionList mutation]({{page.baseurl}}/graphql/mutations/update-requisition-list.html)
*  [deleteRequisitionList mutation]({{page.baseurl}}/graphql/mutations/delete-requisition-list.html)
