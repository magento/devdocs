### orders input attributes {#orders}

The `orders` attribute defines a filter that returns details about one or more of the logged-in customer's previous orders. It takes the following attributes as input:

Attribute | Data type | Description
--- | --- | ---
`filter` | CustomerOrdersFilterInput | Defines the criteria to search for. If no filter is specified, the query returns the customer's first order
`currentPage` | Int | Specifies which page of results to return. The default value is 1
`pageSize` | Int | Specifies the maximum number of results to return at once. The default value is 20

The `customers` query returns a [`CustomerOrders`](#customerOrders) object.

The following example shows a fully-defined `orders` attribute:

```graphql
orders(filter: {number: {eq: "000000007"}}, pageSize: 25, currentPage: 1)
```

#### CustomerOrdersFilterInput attributes

Attribute | Data type | Description
--- | --- | ---
`number` | FilterStringTypeInput | Filter orders by order number

#### FilterStringTypeInput attributes

The `FilterStringTypeInput` object defines a filter for an input string.

Attribute | Data type | Description
--- | --- | ---
`eq` | String | Filters items that are exactly the same as the specified string. For example, to filter on a specific order number, specify a value like `5`
`in` | [String] | Filters items that are exactly the same as entries specified in an array of strings. For example, to filter on order number 4, 5, and 6, specify a value of `["4", "5", "6"]`
`match` | String | Defines a filter that performs a fuzzy search on the specified string. For example, if you specify a value of `20`, the query returns all order IDs that contain the string `20`

### orders output attributes (CustomerOrders) {#customerOrders}

The `CustomerOrders` object contains the results of the filter defined in the `orders` attribute.

Attribute | Data type | Description
--- | --- | ---
`items` | [[CustomerOrder]!](#customerOrder) | An array of items in an order
`page_info` | [SearchResultPageInfo](#SearchResultPageInfo) | An object that includes the `current_page`, `page_info`, and `page_size` values specified in the query
`total_count` | Int | The total count of customer orders

#### CustomerOrder attributes {#customerOrder}

The `CustomerOrder` object contains details about each order returned by the `orders` attribute.

Attribute | Data type | Description
--- | --- | ---

`billing_address` | [CustomerAddress](#customerAddressOutput) | The billing address for the order
`carrier` | String | The shipping carrier for the order delivery
`comments` | [CommentItem] | Comments on the order
`credit_memos` | [CreditMemo] Contains a list of credit memos for the order
`id` | ID! | Unique identifier for the order
`invoices` | [Invoice]! | Contains a list of invoices for the order
`items` | [OrderItemInterface] | An array containing the items purchased in this order
`number` | String! | The order number
`order_date` | String! | The date the order was placed
`payment_methods` | [PaymentMethod] | Payment details for the order
`shipments` | [OrderShipment] Shipment list for the order
`shipping_address` | [CustomerAddress](#customerAddressOutput) | shipping address for the order
`shipping_method` | String | Shipping method for the order
`status` | String! | The current status of the order
`total` | OrderTotal | Contains details about the calculated totals for this order

**Deprecated attributes:**

These attributes were previously defined in the `CustomerOrder` object in the `customerOrders` query, but have been deprecated for the `customer` query:

Attribute | Data type | Description
--- | --- | ---
`created_at` | String | Deprecated. Use the `order_date` attribute instead
`grand_total` | Float  | Deprecated. Use the `totals.grand_total` attribute instead
`increment_id` | String | Deprecated. Use the `id` attribute instead
`order_number` | String! | Deprecated. Use the number `attribute` instead
`status` | String  | Deprecated. Use the orders from customer order instead

#### CommentItem attributes

#### CreditMemo attributes

#### Invoice attributes

Attribute | Data type | Description
--- | --- | ---
id | Id! | The internal ID of the invoice
items | [InvoiceItem]! | Contains details about invoiced products
number | String! | The sequential number of the invoice
total | InvoiceTotal! | 

#### OrderItem attributes

The `OrderItem` data type implements the [`SalesItemInterface`](#SalesItemInterface). It also supports the following attribute:

Attribute | Data type | Description
--- | --- | ---
`quantity_ordered` | Float | The number of units ordered for this item

#### SalesItemInterface {#SalesItemInterface}

`SalesItemInterface` is implemented by the `OrderItem` data type.

Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Final discount information for the product
`entered_options` | [SalesItemOption] | The entered option for the base product, such as a logo or image
`parent_product_name` | String | Name of parent product, like configurable or bundle
`parent_product_sku` | String | For configurable or bundle products, the SKU of the parent product
`product_name` | String | Name of the base product
`product_sale_price` | Money! | The sale price of the base product, including selected options
`product_sku` | String! | SKU of the base product
`product_url` | String | URL of the base product
`selected_options` | [SalesItemOption] | The selected options for the base product, such as color or size

#### Discount attributes

`amount` | Money! | The amount of the discount
`label` | String! | A description of the discount

#### SalesItemOption attributes

The `SalesItemOption` data type contains the ID and value for the selected or entered options. 

Attribute | Data type | Description
--- | --- | ---
`id` | String! | The name of the option
`value` | String! | The value of the option

#### OrderTotals attributes

The `OrderTotals` data type contains details about the subtotals used to calculate the final price. It implements [`SalesTotalsInterface`](#SalesTotalsInterface). It also supports the following attribute:

Attribute | Data type | Description
--- | --- | ---
`shipping_handling` | Money! | The shipping and handling costs for the order

#### SalesTotalsInterface {#SalesTotalsInterface}

`SalesTotalInterface` is implemented by the `OrderTotals` data type.

Attribute | Data type | Description
--- | --- | ---
`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the order
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`subtotal` | Money! | The subtotal of the order, excluding shipping, discounts, and taxes
`taxes` | [TaxItem]! | An array containing information about taxes on individual orders
`total_tax` | Money! | The amount of tax applied to all orders

#### SearchResultPageInfo attributes {#SearchResultPageInfo}

The `SearchResultPageInfo` data type provides pagination for the items returned by the `orders` filter.

Attribute | Data type | Description
--- | --- | ---
`current_page` | Int |Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Total pages

#### TaxItem

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of tax applied to an order
`rate` | Float | The tax rate applied to an order
`title` | String! | A label that describes the tax
