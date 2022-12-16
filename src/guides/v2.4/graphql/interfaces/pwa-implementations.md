---
group: graphql
title: PWA implementations and attributes
pwa_only: True
redirect_to: https://developer.adobe.com/commerce/webapi/graphql/schema/products/interfaces/pwa-implementations/
status: migrated
---

## Interfaces

### AttributeOptionsInterface

Attribute | Data Type | Description
--- | --- | ---
`attribute_options`| [AttributeOptionInterface] | An array of attribute options

### SelectableInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`attribute_options` | [AttributeOptionInterface] | An array of attribute options

### UiInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`is_html_allowed` | Boolean | Indicates whether the attribute value is allowed to have html content
`ui_input_type` | UiInputTypeEnum | The frontend input type of the attribute

## Types

### CustomAttribute

Attribute | Data Type | Description
--- | --- | ---
`attribute_metadata` | AttributeMetadataInterface | Attribute metadata details
`entered_attribute_value` | EnteredAttributeValue | Attribute value represented as entered data using input type like text field
`selected_attribute_options` | SelectedAttributeOption | Attribute value represented as selected options using input type like select

### EnteredAttributeValue

Attribute | Data Type | Description
--- | --- | ---
`value` | String | Attribute value

### ProductAttributeMetadata

`ProductAttributeMetadata` implements [`AttributeMetadataInterface`]({{ page.baseurl }}/graphql/interfaces/attribute-metadata.html).

Attribute | Data Type | Description
--- | --- | ---
`used_in_components` | [CustomAttributesListsEnum!] | Places in the store front where the attribute is used

#### Example usage

**Request:**

```graphql
products(filter: { sku: { eq: "VA08" } }) {
    items {
      name
      sku
      custom_attributes {
        attribute_metadata {
          ... on ProductAttributeMetadata {
            label
            code
            data_type
            ... on AttributeMetadataInterface {
              attribute_labels {
                label
              }
            }
          }
          ui_input {
            ui_input_type
            ... on SelectableInputTypeInterface {
              attribute_options {
                label
                ... on AttributeOption {
                  value
                }
              }
            }
          }
        }
      }
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "name": "Thick Leather Braided Belt",
          "sku": "VA08",
          "custom_attributes": [
            {
              "attribute_metadata": {
                "label": "Fashion Color",
                "code": "fashion_color",
                "data_type": "INT",
                "attribute_labels": [
                  {
                    "label": "Fashion Color"
                  }
                ],
                "ui_input": {
                  "ui_input_type": "SELECT",
                  "attribute_options": [
                    {
                      "label": "Gold",
                      "value": "40"
                    },
                    {
                      "label": "Peach",
                      "value": "61"
                    },
                    {
                      "label": "Khaki",
                      "value": "64"
                    },
                    {
                      "label": "Silver",
                      "value": "43"
                    },
                    {
                      "label": "Lilac",
                      "value": "67"
                    },
                    {
                      "label": "Rain",
                      "value": "70"
                    },
                    {
                      "label": "Mint",
                      "value": "73"
                    },
                    {
                      "label": "Lily",
                      "value": "76"
                    },
                    {
                      "label": "Latte",
                      "value": "79"
                    },
                    {
                      "label": "Cocoa",
                      "value": "82"
                    }
                  ]
                }
              }
            },
            {
              "attribute_metadata": {
                "label": "Fashion Material",
                "code": "fashion_material",
                "data_type": "STRING",
                "attribute_labels": [
                  {
                    "label": "Fashion Material"
                  }
                ],
                "ui_input": {
                  "ui_input_type": "MULTISELECT",
                  "attribute_options": [
                    {
                      "label": "14K Gold",
                      "value": "46"
                    },
                    {
                      "label": "Acrylic",
                      "value": "118"
                    },
                    {
                      "label": "Cashmere",
                      "value": "121"
                    },
                    {
                      "label": "Sterling Silver",
                      "value": "49"
                    },
                    {
                      "label": "Cotton",
                      "value": "124"
                    },
                    {
                      "label": "Linen",
                      "value": "127"
                    },
                    {
                      "label": "Leather",
                      "value": "130"
                    },
                    {
                      "label": "Nylon",
                      "value": "133"
                    },
                    {
                      "label": "Organic Cotton",
                      "value": "136"
                    },
                    {
                      "label": "Polyester",
                      "value": "139"
                    },
                    {
                      "label": "Rayon",
                      "value": "142"
                    },
                    {
                      "label": "Silk",
                      "value": "145"
                    },
                    {
                      "label": "Spandex",
                      "value": "148"
                    },
                    {
                      "label": "Viscose",
                      "value": "151"
                    },
                    {
                      "label": "Wool",
                      "value": "154"
                    }
                  ]
                }
              }
            },
            {
              "attribute_metadata": {
                "label": "Fashion Size",
                "code": "fashion_size",
                "data_type": "INT",
                "attribute_labels": [
                  {
                    "label": "Fashion Size"
                  }
                ],
                "ui_input": {
                  "ui_input_type": "SELECT",
                  "attribute_options": [
                    {
                      "label": "10",
                      "value": "109"
                    },
                    {
                      "label": "12",
                      "value": "112"
                    },
                    {
                      "label": "2",
                      "value": "97"
                    },
                    {
                      "label": "4",
                      "value": "100"
                    },
                    {
                      "label": "6",
                      "value": "103"
                    },
                    {
                      "label": "8",
                      "value": "106"
                    },
                    {
                      "label": "L",
                      "value": "85"
                    },
                    {
                      "label": "M",
                      "value": "88"
                    },
                    {
                      "label": "S",
                      "value": "91"
                    },
                    {
                      "label": "XS",
                      "value": "94"
                    }
                  ]
                }
              }
            },
            {
              "attribute_metadata": {
                "label": "Has Video",
                "code": "has_video",
                "data_type": "INT",
                "attribute_labels": [],
                "ui_input": {
                  "ui_input_type": "BOOLEAN",
                  "attribute_options": [
                    {
                      "label": "Yes",
                      "value": "1"
                    },
                    {
                      "label": "No",
                      "value": "0"
                    }
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  }
}
```

### SelectedAttributeOption

Attribute | Data Type | Description
--- | --- | ---
`attribute_option` | [AttributeOptionInterface!] | Selected attribute option details

### StoreLabels

Attribute | Data Type | Description
--- | --- | ---
`label`| String | The label assigned to the attribute
`store_code`| String | The assigned store code

Type | Implements
--- | ---
AttributeOption | AttributeOptionInterface
AttributeOptions | AttributeOptionsInterface
UiAttributeTypeAny | UiInputTypeInterface
UiAttributeTypeBoolean | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeFixedProductTax | UiInputTypeInterface
UiAttributeTypeMultiSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypePageBuilder | UiInputTypeInterface
UiAttributeTypeSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeTextarea | UiInputTypeInterface
UiAttributeTypeTextEditor | UiInputTypeInterface
