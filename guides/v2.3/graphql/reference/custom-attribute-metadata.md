---
group: graphql
title: CustomAttributeMetadata endpoint
---

The `customAttributeMetadata` endpoint returns the attribute type, given an attribute code and entity type. All entity attributes can be added to an equivalent GraphQL type, including custom, extension, and EAV (which have precedence set in that order for collisions). The GraphQL query consumer does not have the ability to know a field's attribute type.

## Supported attributes

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces.
`attribute_options` | `AttributeOption` | A list of attribute options
`attribute_type` | String | The data type of the attribute (Response only)
`entity_type` | String | The type of entity that defines the attribute

### AttributeOption object

Attribute |  Data Type | Description
--- | --- | ---
`label` | String | The name of an attribute option
`value` | String | The value assigned to an attribute option

## Example usage

The following query returns the attribute type for various custom and EAV attributes.

**Request**

```text
{
 customAttributeMetadata(
   attributes: {
     attribute_code: "color"
     entity_type: "4"
   }
 ) {
   items {
     attribute_code
     entity_type
     attribute_type
     attribute_options {
       value
       label
     }
   }
 }
}
```

**Response**

```json
{
  "data": {
    "customAttributeMetadata": {
      "items": [
        {
          "attribute_code": "color",
          "entity_type": "4",
          "attribute_type": "Int",
          "attribute_options": [
            {
              "value": "49",
              "label": "Black"
            },
            {
              "value": "214",
              "label": "blue"
            },
            {
              "value": "215",
              "label": "green"
            },
            {
              "value": "213",
              "label": "red"
            },
            {
              "value": "50",
              "label": "Blue"
            },
            {
              "value": "51",
              "label": "Brown"
            },
            {
              "value": "52",
              "label": "Gray"
            },
            {
              "value": "53",
              "label": "Green"
            },
            {
              "value": "54",
              "label": "Lavender"
            },
            {
              "value": "55",
              "label": "Multi"
            },
            {
              "value": "56",
              "label": "Orange"
            },
            {
              "value": "57",
              "label": "Purple"
            },
            {
              "value": "58",
              "label": "Red"
            },
            {
              "value": "59",
              "label": "White"
            },
            {
              "value": "60",
              "label": "Yellow"
            }
          ]
        }
      ]
    }
  }
}
```
