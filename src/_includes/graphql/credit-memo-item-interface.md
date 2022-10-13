Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Contains information about the final discount amount for the base product, including discounts on options
`id` | ID! | The unique ID of the credit memo item
`order_item` | [OrderItemInterface]({{page.baseurl}}/graphql/interfaces/order-item-interface.html) | The order item the credit memo is applied to
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product, including selected options
`product_sku` | String! | The SKU of the base product
`quantity_refunded` | Float | The number of refunded items
