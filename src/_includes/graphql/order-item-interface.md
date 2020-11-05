Attribute |  Data Type | Description
--- | --- | ---
`discounts` | [Discount] | Final discount information for the product
`entered_options` | [OrderItemOption] | The entered option for the base product, such as a logo or image
`id` | ID! | The unique identifier for the order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price of the base product, including selected options
`product_sku` | String! | SKU of the base product
`product_type` | String | The type of product, such as simple or configurable
`product_url_key` | String | URL key of the base product
`quantity_canceled` | Float | The number of canceled items
`quantity_invoiced` | Float | The number of invoiced items
`quantity_ordered` | Float | The number of units ordered for this item
`quantity_refunded` | Float | The number of refunded items
`quantity_returned` | Float | The number of returned items
`quantity_shipped` | Float | The number of shipped items
`selected_options` | [OrderItemOption] | The selected options for the base product, such as color or size
`status` | String | The status of the order item