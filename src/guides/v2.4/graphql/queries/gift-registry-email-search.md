---
group: graphql
title: giftRegistryEmailSearch query
ee_only: true
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/queries/email-search/
status: migrated
---

The `giftRegistryEmailSearch` query returns a list of gift registries that match the specified registrant email address. The query does not return registries based on owner email address.

## Syntax

```graphql
giftRegistryEmailSearch(email: String!): [GiftRegistrySearchResult]
```

## Example usage

The following example returns details about gift registries in which `staceyg@example.com` is a registrant.

**Request:**

```graphql
query{
  giftRegistryEmailSearch(email: "staceyg@example.com"){
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
    "giftRegistryEmailSearch": [
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

The `giftRegistryEmailSearch` query requires the `email` attribute as input.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String | The registrant's email address

## Output attributes

{% include graphql/gift-registry-search-result.md %}
