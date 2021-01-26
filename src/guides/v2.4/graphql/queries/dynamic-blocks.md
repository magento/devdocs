---
group: graphql
title: dynamicBlocks query
ee_only: true
---

The `dynamicBlocks` query returns a list of dynamic blocks, filtered by any combination of type, location, and UID.

## Syntax

```graphql
dynamicBlocks(
    input: DynamicBlocksFilterInput
    pageSize: Int
    currentPage: Int
    ): DynamicBlocks!
```

## Example usage

The following query :

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`dynamic_block_uids` | [ID!] |
`locations` | [DynamicBlockLocationEnum!] | An array indicating the locations the dynamic block can be placed
`type` | DynamicBlockTypeEnum! | A value indicating the type of dynamic block to filter on. Possible values are CART_PRICE_RULE_RELATED, CATALOG_PRICE_RULE_RELATED, and SPECIFIED

## Output attributes

Attribute | Data type | Description
--- | --- | ---

## Related topics

*  [country query]({{page.baseurl}}/graphql/queries/directory-country.html)
*  [currency query]({{page.baseurl}}/graphql/queries/directory-currency.html)
