---
group: graphql
title: deleteCompareList mutation
contributor_name: Atwix
contributor_link: https://www.atwix.com/
---

The `deleteCompareList` mutation deletes a compare list by provided unique ID.

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

The following example shows how to delete the comparison list with `uid` = "sssXyGZkTFksdPnxNoK1ut6OiV4bbchD".

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
`result` | Boolean! | A value of `true` indicates the compare list has been deleted successfully, otherwise a value returns `false`

## Related topics

*  [compareList query]({{page.baseurl}}/graphql/queries/compare-list.html)
*  [addProductsToCompareList mutation]({{page.baseurl}}/graphql/mutations/add-products-to-compare-list.html)
*  [assignCompareListToCustomer mutation]({{page.baseurl}}/graphql/mutations/assign-compare-list-to-customer.html)
*  [createCompareList mutation]({{page.baseurl}}/graphql/mutations/create-compare-list.html)
*  [removeProductsFromCompareList mutation]({{page.baseurl}}/graphql/mutations/remove-products-from-compare-list.html)
