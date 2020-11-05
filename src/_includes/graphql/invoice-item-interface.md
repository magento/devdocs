Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Contains information about the final discount amount for the base product, including discounts on options
`id` | ID! | The unique ID of the invoice item
`order_item` | OrderItemInterface | Contains details about an individual order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product including selected options
`product_sku` | String! | The SKU of the base product
`quantity_invoiced` | Float |The number of invoiced items