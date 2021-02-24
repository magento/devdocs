---
group: graphql
title: giftRegistryIdSearch query
ee_only: true   
---

The `giftRegistryIdSearch` query returns a list of gift registries that match the specified registry ID. The ID is included in the email Magento sends to invitees on behalf of the registrant.

## Syntax

```graphql
giftRegistryIdSearch(giftRegistryUid: String!): [GiftRegistrySearchResult]
```

## Example usage

The following example returns details about the specified gift registry.

**Request:**

```graphql
query{
  giftRegistryIdSearch(giftRegistryUid: "W9YcRai9JmzGglqP3p0USodTTM3BmjjY"){
    event_date
    event_title
    gift_registry_uid
    name
    type
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistryIdSearch": [
      {
        "event_date": "2021-01-28",
        "event_title": "Theo's 45th Birthday",
        "gift_registry_uid": "W9YcRai9JmzGglqP3p0USodTTM3BmjjY",
        "name": "Stacey Gaines",
        "type": "Birthday"
      }
    ]
  }
}
```

## Input attributes

The `giftRegistryIdSearch` query requires the `giftRegistryUid` attribute as input.

Attribute |  Data Type | Description
--- | --- | ---
`giftRegistryUid` | ID! | The unique ID of the gift registry to search for

## Output attributes

{% include graphql/gift-registry-search-result.md %}
