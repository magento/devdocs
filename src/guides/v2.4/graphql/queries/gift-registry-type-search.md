---
group: graphql
title: giftRegistryTypeSearch query
ee_only: true   
---

The `giftRegistryTypeSearch` query returns a list of gift registries that match the specified registrant name and, optionally, registry type ID.


## Syntax

```graphql
giftRegistryTypeSearch(
    firstName: String!
    lastName: String!
    typeUid: String
): [GiftRegistrySearchResult]
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

The `giftRegistryTypeSearch` query accepts the following input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`firstName` | String! | The first name of the registrant
`lastName` | String! | The last name of the registrant
`typeUid` | String | The type UID of the registry

## Output attributes

{% include graphql/gift-registry-search-result.md %}
