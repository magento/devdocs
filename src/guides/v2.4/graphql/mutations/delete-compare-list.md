---
group: graphql
title: deleteCompareList mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/mutations/delete-compare-list/
layout: migrated
---

The `deleteCompareList` mutation deletes the specified comparison list. Run this mutation in the following circumstances:

*  When the guest or customer clears all entries from the comparison list.
*  After a guest's session expires.

## Syntax

```graphql
mutation {
    deleteCompareList(
        uid: ID!
    ) {
        DeleteCompareListOutput
    }
}
```

## Example usage

The following example deletes the comparison list with a `uid` value of `sssXyGZkTFksdPnxNoK1ut6OiV4bbchD`.

**Request:**

```graphql
mutation {
    deleteCompareList(
        uid: "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD"
    ) {
        result
    }
}
```

**Response:**

```json
{
  "data": {
    "deleteCompareList": {
      "result": true
    }
  }
}
```

## Input attributes

The `deleteCompareList` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`uid` | ID! | The unique ID of the compare list to delete

## Output attributes

The `DeleteCompareListOutput` object returns a Boolean value that indicates whether the operation was successful.

Attribute |  Data Type | Description
--- | --- | ---
`result` | Boolean! | A value of `true` indicates the compare list has been deleted successfully. Otherwise, the value is `false`

## Related topics

*  [compareList query]({{page.baseurl}}/graphql/queries/compare-list.html)
*  [addProductsToCompareList mutation]({{page.baseurl}}/graphql/mutations/add-products-to-compare-list.html)
*  [assignCompareListToCustomer mutation]({{page.baseurl}}/graphql/mutations/assign-compare-list-to-customer.html)
*  [createCompareList mutation]({{page.baseurl}}/graphql/mutations/create-compare-list.html)
*  [removeProductsFromCompareList mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-compare-list.html)
