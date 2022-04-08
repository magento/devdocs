---
group: graphql
title: PWA implementations and attributes
pwa_only: True
---

## Interfaces

### ProductAttributeMetadata

`ProductAttributeMetadata` implements [`AttributeMetadataInterface`]({{ page.baseurl }}/graphql/interfaces/attribute-metadata.html).

Attribute | Data Type | Description
--- | --- | ---
`used_in_components` | [CustomAttributesListsEnum!] | Places in the store front where the attribute is used

### UiInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`is_html_allowed` | Boolean | Indicates whether the attribute value is allowed to have html content
`ui_input_type` | UiInputTypeEnum | The frontend input type of the attribute

### AttributeOptionsInterface

Attribute | Data Type | Description
--- | --- | ---
`attribute_options`| [AttributeOptionInterface] | An array of attribute options

### SelectableInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`attribute_options` | [AttributeOptionInterface] | An array of attribute options

## Types

### StoreLabels

Attribute | Data Type | Description
--- | --- | ---
`label`| String | The label assigned to the attribute
`store_code`| String | The assigned store code

### CustomAttribute

Attribute | Data Type | Description
--- | --- | ---
`attribute_metadata` | AttributeMetadataInterface | Attribute metadata details
`entered_attribute_value` | EnteredAttributeValue | Attribute value represented as entered data using input type like text field
`selected_attribute_options` | SelectedAttributeOption | Attribute value represented as selected options using input type like select

### SelectedAttributeOption

Attribute | Data Type | Description
--- | --- | ---
`attribute_option` | [AttributeOptionInterface!] | Selected attribute option details

### EnteredAttributeValue

Attribute | Data Type | Description
--- | --- | ---
`value` | String | Attribute value

Type | Implements
--- | ---
AttributeOptions | AttributeOptionsInterface
AttributeOption | AttributeOptionInterface
UiAttributeTypeSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeMultiSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeBoolean | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeAny | UiInputTypeInterface
UiAttributeTypeFixedProductTax | UiInputTypeInterface
