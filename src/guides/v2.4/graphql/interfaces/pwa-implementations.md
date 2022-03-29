---
group: graphql
title: PWA implementations and attributes
pwa_only: True
---

## Interfaces

### ProductAttributeMetadata

`ProductAttributeMetadata` implements `AttributeMetadataInterface`.

Attribute | Data Type | Description
`used_in_components` | [CustomAttributesListsEnum!] | Places in the store front where the attribute is used

### UiInputTypeInterface

Attribute | Data Type | Description
`ui_input_type` | UiInputTypeEnum | The frontend input type of the attribute
`is_html_allowed` | Boolean | Indicates whether the attribute value is allowed to have html content

### AttributeOptionsInterface

Attribute | Data Type | Description
`attribute_options`| [AttributeOptionInterface] | An array of attribute options

### SelectableInputTypeInterface

Attribute | Data Type | Description
`attribute_options` | [AttributeOptionInterface] | An array of attribute options

## Types

### StoreLabels

Attribute | Data Type | Description
`store_code`| String | The assigned store code
`label`| String | The label assigned to the attribute

### CustomAttribute

Attribute | Data Type | Description
`selected_attribute_options` | SelectedAttributeOption | Attribute value represented as selected options using input type like select
`entered_attribute_value` | EnteredAttributeValue | Attribute value represented as entered data using input type like text field
`attribute_metadata` | AttributeMetadataInterface | Attribute metadata details

### SelectedAttributeOption

Attribute | Data Type | Description
`attribute_option` | [AttributeOptionInterface!] | Selected attribute option details

### EnteredAttributeValue

Attribute | Data Type | Description
`value` | String | Attribute value

Type | Implements
AttributeOptions | AttributeOptionsInterface
AttributeOption | AttributeOptionInterface
UiAttributeTypeSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeMultiSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeBoolean | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeAny | UiInputTypeInterface
UiAttributeTypeFixedProductTax | UiInputTypeInterface
