---
group: graphql
title: giftRegistryEmailSearch query
ee_only: true   
---

The `giftRegistryEmailSearch` query returns a list of gift registries that match the specified registrant email address.

## Syntax

```graphql
giftRegistryEmailSearch(email: String!): [GiftRegistrySearchResult]
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

The `giftRegistryEmailSearch` query requires the `email` attribute as input.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The registrant's email address

## Output attributes

{% include graphql/gift-registry-search-result.md %}
