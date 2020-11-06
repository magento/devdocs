---
group: graphql
title: giftRegistryTypes query
ee_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---

The `giftRegistryTypes` query returns a list of available gift registry types.

## Syntax

```graphql
giftRegistryTypes: [GiftRegistryType]
```

## Example usage

The following example returns information about the list of available gift registry types.

**Request:**

```graphql
query {
  giftRegistryTypes {
    id
    label
    dynamic_attributes_metadata {
      code
      label
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistryTypes": {
      "id": 1,
      "label": "Christmas Gift Card",
      "dynamic_attributes_metadata": {
          "code": "role",
          "label": "coupon"
        }
    }
  }
}
```

## Output attributes

The `giftRegistryTypes` array returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`id` | ID! | The ID assigned to the gift registry
`label` | String! | The display name of the gift registry type

### GiftRegistryDynamicAttributeMetadataInterface attributes {#giftregistrydynamicattributemetadatainterface}
{% include graphql/gift-registry-dynamic-interface.md %}