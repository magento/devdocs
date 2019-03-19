---
group: graphql
title: CustomizableOptionInterface
---

Customizable options for a product provide a way to offer customers a selection of options with a variety of text, selection, and date input types. All product types can contain customizable options.

`CustomizableOptionInterface` is defined in the `CatalogGraphQl` module, and its attributes can be used in any `products` query. This interface returns basic information about a customizable option and can be implemented by several types of configurable options:

* Text area
* Date picker
* Drop-down menu
* Text field
* File picker
* Radio buttons

{: .bs-callout .bs-callout-info }
Magento has not implemented all possible customizable product options for GraphQL.

`CustomizableOptionInterface` can contain the following attributes:

Field | Type | Description
--- | --- | ---
`title` |  String | The display name for this option
`required` | Boolean | Indicates whether the option is required
`sort_order` | Int | The order in which the option is displayed
`option_id` | Int | Option ID

## CustomizableAreaOption object

`CustomizableAreaOption` contains information about a text area that is defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableAreaValue` | An object that defines a text area
`product_sku` | String | The Stock Keeping Unit of the base product

### CustomizableAreaValue object

`CustomizableAreaValue` defines the attributes of a product whose page contains a customized text area.

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option

## CustomizableDateOption object

`CustomizableDateOption` contains information about a date picker that is defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableDateValue` | An object that defines a date field in a customizable option.
`product_sku` | String | The Stock Keeping Unit of the base product

### CustomizableDateValue object

`CustomizableDateValue` defines the attributes of a product whose page contains a customized date picker.

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option

## CustomizableDropDownOption object

`CustomizableDropDownOption` contains information about a drop down menu that is defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableDropDownValue` | An array that defines the set of options for a drop down menu

### CustomizableDropDownValue object

`CustomizableDropDownValue` defines the attributes of a product whose page contains a customized drop down menu.

Field | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`title` | String | The display name for this option
`sort_order` | Int | The order in which the option is displayed

## CustomizableFieldOption object

`CustomizableFieldOption` contains information about a text field that is defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableFieldValue` | An object that defines a text field
`product_sku` | String | The Stock Keeping Unit of the base product

### CustomizableFieldValue object

`CustomizableFieldValue` defines the attributes of a product whose page contains a customized text field.

Field | Type | Description
--- | --- | ---
`price` | Float | The price of the custom value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option

## CustomizableFileOption object

`CustomizableFileOption` contains information about a file picker that is defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableFileValue` | An object that defines a file name
`product_sku` | String | The Stock Keeping Unit of the base product

### CustomizableFileValue object

`CustomizableFileValue` defines the attributes of a product whose page contains a customized file picker.

Field | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`file_extension` | String | The file extension to accept
`image_size_x` | Int | The maximum width of an image
`image_size_y` | Int | The maximum height of an image

## CustomizableRadioOption object

`CustomizableRadioOption` contains information about a set of radio buttons that are defined as part of a customizable option.

Field | Type | Description
--- | --- | ---
`value` | `CustomizableRadioValue` | An array that defines a set of radio buttons

### CustomizableRadioValue object

`CustomizableRadioValue` defines the attributes of a product whose page contains a customized set of radio buttons.

Field | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option
`title` | String | The display name for this option
`sort_order` | Int | The order in which the option is displayed

## Example usage
