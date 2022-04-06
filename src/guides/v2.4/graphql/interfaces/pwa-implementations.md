---
group: graphql
title: PWA implementations and attributes
pwa_only: True
---

## Interfaces

### ProductAttributeMetadata

`ProductAttributeMetadata` implements `AttributeMetadataInterface`.

Attribute | Data Type | Description
--- | --- | ---
`USED_IN_COMPONENTS` | [CustomAttributesListsEnum!] | Places in the store front where the attribute is used

### UiInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`IS_HTML_ALLOWED` | Boolean | Indicates whether the attribute value is allowed to have html content
`UI_INPUT_TYPE` | UiInputTypeEnum | The frontend input type of the attribute

### AttributeOptionsInterface

Attribute | Data Type | Description
--- | --- | ---
`ATTRIBUTE_OPTIONS`| [AttributeOptionInterface] | An array of attribute options

### SelectableInputTypeInterface

Attribute | Data Type | Description
--- | --- | ---
`ATTRIBUTE_OPTIONS` | [AttributeOptionInterface] | An array of attribute options

## Types

### StoreLabels

Attribute | Data Type | Description
--- | --- | ---
`STORE_CODE`| String | The assigned store code
`LABEL`| String | The label assigned to the attribute

### CustomAttribute

Attribute | Data Type | Description
--- | --- | ---
`ATTRIBUTE_METADATA` | AttributeMetadataInterface | Attribute metadata details
`ENTERED_ATTRIBUTE_VALUE` | EnteredAttributeValue | Attribute value represented as entered data using input type like text field
`SELECTED_ATTRIBUTE_OPTIONS` | SelectedAttributeOption | Attribute value represented as selected options using input type like select

### SelectedAttributeOption

Attribute | Data Type | Description
--- | --- | ---
`ATTRIBUTE_OPTION` | [AttributeOptionInterface!] | Selected attribute option details

### EnteredAttributeValue

Attribute | Data Type | Description
--- | --- | ---
`VALUE` | String | Attribute value

Type | Implements
--- | --- 
AttributeOptions | AttributeOptionsInterface
AttributeOption | AttributeOptionInterface
UiAttributeTypeSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeMultiSelect | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeBoolean | UiInputTypeInterface, AttributeOptionsInterface, SelectableInputTypeInterface
UiAttributeTypeAny | UiInputTypeInterface
UiAttributeTypeFixedProductTax | UiInputTypeInterface
