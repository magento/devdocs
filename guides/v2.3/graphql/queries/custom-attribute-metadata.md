---
group: graphql
title: customAttributeMetadata query
redirect_from:
  - /guides/v2.3/graphql/reference/custom-attribute-metadata.html
---

The `customAttributeMetadata` query returns the attribute type, given an attribute code and entity type. All entity attributes can be added to an equivalent GraphQL type, including custom, extension, and EAV (which have precedence set in that order for collisions). The GraphQL query consumer does not have the ability to know a field's attribute type.

## Syntax

`customAttributeMetadata(attributes: [AttributeInput!]!): CustomAttributeMetadata`

## Example usage

The following query returns the attribute type for various custom and EAV attributes.

**Request:**

```graphql
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

**Response:**

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

## Input attributes

The `customAttributeMetadata` query requires the following attributes as input.

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`entity_type` | String | The type of entity that defines the attribute

## Output attributes

The `CustomAttributeMetadata` object is an array of `items`. The `items` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String | The unique identifier for an attribute code. This value should be in lowercase letters without spaces
`attribute_options` | [`AttributeOption`] | An array of attribute options
`attribute_type` | String | The data type of the attribute
`entity_type` | String | The type of entity that defines the attribute
`input_type` | String | The frontend input type of the attribute

### AttributeOption object

The `AttributeOption` object contains the name and value of the option.

Attribute |  Data Type | Description
--- | --- | ---
`label` | String | The name of an attribute option
`value` | String | The value assigned to an attribute option
