---
group: graphql
title: giftRegistryTypes query
ee_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/gift-registry/queries/types/
status: migrated
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
query{
  giftRegistryTypes{
    label
    uid
    dynamic_attributes_metadata {
      label
      input_type
      is_required
      code
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "giftRegistryTypes": [
      {
        "label": "Birthday",
        "uid": "MQ==",
        "dynamic_attributes_metadata": [
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Event Date",
            "input_type": "date",
            "is_required": true,
            "code": "event_date"
          }
        ]
      },
      {
        "label": "Baby Registry",
        "uid": "Mg==",
        "dynamic_attributes_metadata": [
          {
            "label": "Role",
            "input_type": "select",
            "is_required": true,
            "code": "role"
          },
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Baby Gender",
            "input_type": "select",
            "is_required": true,
            "code": "baby_gender"
          }
        ]
      },
      {
        "label": "Wedding",
        "uid": "Mw==",
        "dynamic_attributes_metadata": [
          {
            "label": "Role",
            "input_type": "select",
            "is_required": true,
            "code": "role"
          },
          {
            "label": "Country",
            "input_type": "country",
            "is_required": true,
            "code": "event_country"
          },
          {
            "label": "Wedding Date",
            "input_type": "date",
            "is_required": true,
            "code": "event_date"
          },
          {
            "label": "Location",
            "input_type": "text",
            "is_required": true,
            "code": "event_location"
          },
          {
            "label": "Number of Guests",
            "input_type": "text",
            "is_required": true,
            "code": "number_of_guests"
          }
        ]
      }
    ]
  }
}
```

## Output attributes

The `giftRegistryTypes` array returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`dynamic_attributes_metadata` | [[GiftRegistryDynamicAttributeMetadataInterface](#GiftRegistryDynamicAttributeMetadataInterface)] | An array of attributes that define elements of the gift registry. Each attribute is specified as a code-value pair
`label` | String! | The display name of the gift registry type
`uid` | ID! | The unique ID assigned to the gift registry

### GiftRegistryDynamicAttributeMetadataInterface attributes {#GiftRegistryDynamicAttributeMetadataInterface}

{% include graphql/gift-registry-dynamic-attribute-metadata-interface.md %}
