---
group: graphql
title: attributesMetadata query
pwa_only: True
---

The `attributesMetadata` query returns metadata around product custom attributes.

## Syntax

```json
{ attributesMetadata(
      entityType: AttributeEntityTypeEnum!,
       attributeUids:[ID!],
       showSystemAttributes: Boolean):
        AttributesMetadata
}
```

## Example usage

**Request:**

```graphql
{
attributesMetadata(
    entityType: PRODUCT
  ) {
    items {
      attribute_labels {
        label
        store_code
      }
      code
      data_type
      sort_order
      ui_input {
          is_html_allowed
          ui_input_type
        __typename
        ... on SelectableInputTypeInterface {
          attribute_options {
            is_default
            label
            uid
          }
        }
      }
      uid
      __typename
    }
  }
}
```

**Response:**

```json
{"uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fY29sb3I=",
          "__typename": "ProductAttributeMetadata"
        },
        {
          "attribute_labels": [
            {
              "label": "Fashion Material",
              "store_code": "default"
            }
          ],
          "code": "fashion_material",
          "data_type": "STRING",
          "sort_order": 0,
          "ui_input": {
            "is_html_allowed": true,
            "ui_input_type": "MULTISELECT",
            "__typename": "UiAttributeTypeMultiSelect",
            "attribute_options": [
              {
                "is_default": false,
                "label": "14K Gold",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvNDY="
              },
              {
                "is_default": false,
                "label": "Acrylic",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvMTE4"
              },
              {
                "is_default": false,
                "label": "Cashmere",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvMTIx"
              },
              {
                "is_default": false,
                "label": "Sterling Silver",
                "uid": "Y2F0YWxvZ19wcm9kdWN0L2Zhc2hpb25fbWF0ZXJpYWwvNDk="
              }
            ]
          }
        }
```

## Input attributes

Attribute | Data type | Description
--- | --- | ---
`attributeUids` | [ID!] | An array of attribute IDs to search
`entityType` | AttributeEntityTypeEnum! | The type of entity to search
`showSystemAttributes` | Boolean | Indicates whether to also return matching system attributes

## Output attributes

{% include graphql/attribute-metadata.md %}
