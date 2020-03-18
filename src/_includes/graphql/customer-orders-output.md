### CustomerOrders attributes

Attribute | Data type | Description
--- | --- | ---
`items` | [CustomerOrder]! | An array of customer orders
`page_info` | SearchResultPageInfo | An object that includes the `current_page`, `page_info`, and `page_size` values specified in the query
`total_count` | Int | The total count of customer orders

### CustomerOrder attributes

The `CustomerOrder` object

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | Unique identifier for the order
`items` | [OrderItem]! | An array containing the items purchased in this order
`number` | String! | The order number
`order_date` | String! | The Tdate the order was placed
`status` | String! | The current status of the order
`totals` | OrderTotals! | Contains details about the calculated totals for this order

**Deprecated attributes:**

Attribute | Data type | Description
--- | --- | ---
`created_at` | String | Deprecated. Use the `order_date` attribute instead
`grand_total` | Float  | Deprecated. Use the `totals.grand_total` attribute instead
`increment_id` | String | Deprecated. Use the `id` attribute instead
`order_number` | String! | Deprecated. Use the number `attribute` instead
`status` | String  | Deprecated. Use the orders from customer order instead

### OrderItem attributes

The `OrderItem` data type implements the `SalesItemInterface`. It also supports the following attribute:

Attribute | Data type | Description
--- | --- | ---
`quantity_ordered` | Float | The number of units ordered for this item

### OrderTotals attributes

The `OrderTotals` contains details about the subtotals used to calculate the final price. It implements `SalesTotalsInterface`. It also supports the following attribute:

Attribute | Data type | Description
--- | --- | ---
`shipping_handling` | Money! | The shipping and handling costs for the order

### SalesItemInterface

`entered_options` | [SalesItemOption] | The entered option for the base product, such as a logo or image
`parent_product_sku` | String | For configurable or bundle products, the SKU of the parent product
`product_name` | String | Name of the base product
`product_sale_price` | Money! | The sale price of the base product, including selected options
`product_sku` | String! | SKU of the base product
`product_url` | String | URL of the base product
`selected_options` | [SalesItemOption] | The selected options for the base product, such as color or size

### SalesTotalsInterface

`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the order
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`subtotal` | Money! | The subtotal of the order, excluding shipping, discounts, and taxes
`tax` | Money! | The amount of tax applied to the order
