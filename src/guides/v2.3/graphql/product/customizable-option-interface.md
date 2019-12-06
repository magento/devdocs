---
group: graphql
title: CustomizableOptionInterface
redirect_from:
  - /guides/v2.3/graphql/reference/customizable-option-interface.html
---

Customizable options for a product provide a way to offer customers a selection of options with a variety of text, selection, and date input types. All product types can contain customizable options.

`CustomizableOptionInterface` is defined in the `CatalogGraphQl` module, and its attributes can be used in any `products` query. This interface returns basic information about a customizable option and can be implemented by several types of configurable options:

*  Text area
*  Checkbox
*  Date picker
*  Drop-down menu
*  Text field
*  File picker
*  Multiple select box
*  Radio buttons

 {:.bs-callout-info}
Magento has not implemented all possible customizable product options for GraphQL.

`CustomizableOptionInterface` can contain the following attributes:

Attribute | Type | Description
--- | --- | ---
`option_id` | Int |  The ID assigned to the option
`required` | Boolean | Indicates whether the option is required
`sort_order` | Int | The order in which the option is displayed
`title` |  String | The display name for this option

## CustomizableAreaOption object

`CustomizableAreaOption` contains information about a text area that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`product_sku` | String | The Stock Keeping Unit of the base product
`value` | `CustomizableAreaValue` | An object that defines a text area

### CustomizableAreaValue object

`CustomizableAreaValue` defines the attributes of a product whose page contains a customized text area.

Attribute | Type | Description
--- | --- | ---
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option

## CustomizableCheckboxOption object

`CustomizableCheckboxOption` contains information about a set of checkbox values that are defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`value` | `CustomizableCheckboxValue` | An array that defines a set of checkbox values

### CustomizableCheckboxValue object

`CustomizableCheckboxValue`  defines the attributes of a product whose page contains a customized set of checkbox values.

Attribute | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option
`sort_order` | Int | The order in which the option is displayed
`title` | String | The display name for this option

## CustomizableDateOption object

`CustomizableDateOption` contains information about a date picker that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`product_sku` | String | The Stock Keeping Unit of the base product
`value` | `CustomizableDateValue` | An object that defines a date field in a customizable option.

### CustomizableDateValue object

`CustomizableDateValue` defines the attributes of a product whose page contains a customized date picker.

Attribute | Type | Description
--- | --- | ---
`price` | Float | The price assigned to this option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`sku` | String | The Stock Keeping Unit for this option

## CustomizableDropDownOption object

`CustomizableDropDownOption` contains information about a drop down menu that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`value` | `CustomizableDropDownValue` | An array that defines the set of options for a drop down menu

### CustomizableDropDownValue object

`CustomizableDropDownValue` defines the attributes of a product whose page contains a customized drop down menu.

Attribute | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option
`sort_order` | Int | The order in which the option is displayed
`title` | String | The display name for this option

## CustomizableFieldOption object

`CustomizableFieldOption` contains information about a text field that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`product_sku` | String | The Stock Keeping Unit of the base product
`value` | `CustomizableFieldValue` | An object that defines a text field

### CustomizableFieldValue object

`CustomizableFieldValue` defines the attributes of a product whose page contains a customized text field.

Attribute | Type | Description
--- | --- | ---
`max_characters` | Int | The maximum number of characters that can be entered for this customizable option
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price of the custom value
`sku` | String | The Stock Keeping Unit for this option

## CustomizableFileOption object

`CustomizableFileOption` contains information about a file picker that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`product_sku` | String | The Stock Keeping Unit of the base product
`value` | `CustomizableFileValue` | An object that defines a file name

### CustomizableFileValue object

`CustomizableFileValue` defines the attributes of a product whose page contains a customized file picker.

Attribute | Type | Description
--- | --- | ---
`file_extension` | String | The file extension to accept
`image_size_x` | Int | The maximum width of an image
`image_size_y` | Int | The maximum height of an image
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option

## CustomizableMultipleOption object

`CustomizableMultipleOption` contains information about a multiselect that is defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`value` | `CustomizableMultipleValue` | An array that defines the set of options for a multiselect

### CustomizableMultipleValue object

`CustomizableMultipleValue` defines the price and sku of a product whose page contains a customized multiselect

Attribute | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option
`sort_order` | Int | The order in which the option is displayed
`title` | String | The display name for this option

## CustomizableRadioOption object

`CustomizableRadioOption` contains information about a set of radio buttons that are defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`value` | `CustomizableRadioValue` | An array that defines a set of radio buttons

### CustomizableRadioValue object

`CustomizableRadioValue` defines the attributes of a product whose page contains a customized set of radio buttons.

Attribute | Type | Description
--- | --- | ---
`option_type_id` | Int | The ID assigned to the value
`price_type` | PriceTypeEnum | FIXED, PERCENT, or DYNAMIC
`price` | Float | The price assigned to this option
`sku` | String | The Stock Keeping Unit for this option
`sort_order` | Int | The order in which the option is displayed
`title` | String | The display name for this option## CustomizableRadioOption object

`CustomizableRadioOption` contains information about a set of radio buttons that are defined as part of a customizable option.

Attribute | Type | Description
--- | --- | ---
`value` | `CustomizableRadioValue` | An array that defines a set of radio buttons

## Example usage

The following query returns information about the customizable options configured for the product with a `sku` of `xyz`.

```text
  products(filter: {sku: {eq: "xyz"}}) {
    items {
      id
      name
      sku
      type_id
      ... on CustomizableProductInterface {
        options {
          title
          required
          sort_order
          option_id
        }
      }
    }
  }
}
```
