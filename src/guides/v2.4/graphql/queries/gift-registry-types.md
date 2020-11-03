---
group: graphql
title: giftRegistryTypes query
ee_only: true
contributor_name: Zilker Technology
contributor_link: https://www.ztech.io/
---
The `giftRegistryTypes` query gets a list of available gift registry types.

## Syntax
```graphql
giftRegistryTypes: [GiftRegistryType]
```

## Example usage

The following example returns information about the list of available gift registry types.

**Request:**
``` graphql
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
``` json
{
  "data": {
    "giftRegistryTypes": {
      "id": 1
      "label": "Christmas Gift Card"
      "dynamic_attributes_metadata": {
          "code": "role",
          "label": "coupon",
        }
    }
  }
}
```

## Output attributes

The `giftRegistryTypes` object returns the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
id | ID! | Gift Card Registry ID.
label | String! | Gift Card Registry Label.
dynamic_attributes_metadata | [GiftRegistryDynamicAttributeMetadataInterface](#giftregistrydynamicattributemetadatainterface) | Additional attributes which are specified as a code-value pair.

### GiftRegistryDynamicAttributeMetadataInterface attributes {#giftregistrydynamicattributemetadatainterface}

The `GiftRegistryDynamicAttributeMetadataInterface` object contains the following attributes:

Attribute | Data type | Description
--- | --- | ---
code | String! | Gift Registry Dynamic Attribute code.
input_type | String! | Input type of the dynamic attribute.
attribute_group | String! | Attribute group of the dynamic attribute.
label | String! | GiftCard Dynamic attribute label.
is_required | Boolean! | Status of the Gift Card Registry if required or not.
sort_order | Int | SortOrder of the GiftCard Registry dynamic attributes.


