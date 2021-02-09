Attribute |  Data Type | Description
--- | --- | ---
`entered_options` | [EnteredOptionInput!] | An array of entered options for the base product, such as personalization text
`parent_sku` | String | For child products, the SKU of its parent product
`quantity` | Float! | The quantity of the item to add to the cart
`selected_options` | [ID!] | The selected options for the base product, such as color or size, using the unique ID for a customizable or configurable object such as `CustomizableRadioOption`, `CustomizableDropDownOption`, or `ConfigurableProductOptionsValues`
`sku` | String! | The sku of the product to be added to the cart