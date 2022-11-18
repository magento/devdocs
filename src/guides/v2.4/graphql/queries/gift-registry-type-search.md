---
group: graphql
title: giftRegistryTypeSearch query
ee_only: true
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/queries/type-search/
layout: migrated
---

The `giftRegistryTypeSearch` query returns a list of gift registries that match the specified registrant name and, optionally, registry type ID. Use the [`giftRegistryTypes` query]({{page.baseurl}}/graphql/queries/gift-registry-types.html) to return list of registry type IDs.

## Syntax

```graphql
giftRegistryTypeSearch(
    firstName: String!
    lastName: String!
    giftRegistryTypeUid: String
): [GiftRegistrySearchResult]
```

## Example usage

The following example returns all gift registries in which the specified person is a registrant.

**Request:**

```graphql
query{
  giftRegistryTypeSearch(firstName: "Stacey", lastName: "Gaines"){
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
    "giftRegistryTypeSearch": [
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

The `giftRegistryTypeSearch` query accepts the following input attributes.

Attribute |  Data Type | Description
--- | --- | ---
`firstName` | String! | The first name of the registrant
`lastName` | String! | The last name of the registrant
`giftRegistryTypeUid` | String | The type UID of the registry

## Output attributes

{% include graphql/gift-registry-search-result.md %}
