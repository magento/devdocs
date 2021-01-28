---
group: graphql
title: giftRegistryIdSearch query
ee_only: true   
---

The `giftRegistryIdSearch` query returns a list of gift registries that match the specified registry URL key.

## Syntax

```graphql
giftRegistryIdSearch(giftRegistryUid: String!): [GiftRegistrySearchResult]
```

## Example usage

The following example

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `giftRegistryIdSearch` query requires the `giftRegistryUid` attribute as input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid` | ID! | The unique ID of the gift registry to search for

## Output attributes

{% include graphql/gift-registry-search-result.md %}
