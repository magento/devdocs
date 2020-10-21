Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique ID of the shipment item
`order_item`| [OrderItemInterface]({{page.baseurl}}/graphql/interfaces/order-item-interface.html) | The shipped order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product
`product_sku` | String! | The SKU of the base product
`quantity_shipped` | Float! | The number of shipped items
