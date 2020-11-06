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
    attributes: [
      {
        attribute_code: "size"
        entity_type: "catalog_product"
      }
      {
        attribute_code: "color"
        entity_type: "catalog_product"
      }
    ]
  ) {
    items {
      attribute_code
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
          "attribute_code": "size",
          "attribute_type": "Int",
          "attribute_options": [
            {
              "value": "91",
              "label": "55 cm"
            },
            {
              "value": "169",
              "label": "XS"
            },
            {
              "value": "92",
              "label": "65 cm"
            },
            {
              "value": "170",
              "label": "S"
            },
            {
              "value": "93",
              "label": "75 cm"
            },
            {
              "value": "171",
              "label": "M"
            },
            {
              "value": "94",
              "label": "6 foot"
            },
            {
              "value": "172",
              "label": "L"
            },
            {
              "value": "95",
              "label": "8 foot"
            },
            {
              "value": "173",
              "label": "XL"
            },
            {
              "value": "96",
              "label": "10 foot"
            },
            {
              "value": "174",
              "label": "28"
            },
            {
              "value": "175",
              "label": "29"
            },
            {
              "value": "176",
              "label": "30"
            },
            {
              "value": "177",
              "label": "31"
            },
            {
              "value": "178",
              "label": "32"
            },
            {
              "value": "179",
              "label": "33"
            },
            {
              "value": "180",
              "label": "34"
            },
            {
              "value": "181",
              "label": "36"
            },
            {
              "value": "182",
              "label": "38"
            }
          ]
        },
        {
          "attribute_code": "color",
          "attribute_type": "Int",
          "attribute_options": [
            {
              "value": "49",
              "label": "Black"
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

The `AttributeInput` input object requires the following attributes.

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
