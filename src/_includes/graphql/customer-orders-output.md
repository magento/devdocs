
The `orders` attribute defines a filter that returns details about one or more of the logged-in customer's previous orders. It takes the following attributes as input:

Attribute | Data type | Description
--- | --- | ---
`filter` | CustomerOrdersFilterInput | Defines the criteria to search for. If no filter is specified, the query returns and paginates all of the customer's orders
`currentPage` | Int | Specifies which page of results to return. The default value is 1
`pageSize` | Int | Specifies the maximum number of results to return at once. The default value is 20

The `customers` query returns a [`CustomerOrders`](#customerOrders) object.

#### CustomerOrdersFilterInput attributes

Attribute | Data type | Description
--- | --- | ---
`number` | FilterStringTypeInput | Filter orders by order number

#### FilterStringTypeInput attributes {#FilterStringTypeInput}

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

### CustomerOrder attributes {#customerOrder}

The `CustomerOrder` object contains details about each order returned by the `orders` attribute.

Attribute | Data type | Description
--- | --- | ---
`billing_address` | [OrderAddress](#OrderAddress) | The billing address for the order
`carrier` | String | The shipping carrier for the order delivery
`comments` | [[CommentItem](#CommentItem)] | Comments on the order
`created_at` | String | Deprecated. Use the `order_date` attribute instead
`credit_memos` | [[CreditMemo](#CreditMemo)] | Contains a list of credit memos for the order
`grand_total` | Float  | Deprecated. Use the `totals.grand_total` attribute instead
`id` | ID! | Unique identifier for the order
`increment_id` | String | Deprecated. Use the `id` attribute instead
`invoices` | [[Invoice](#Invoice)]! | Contains a list of invoices for the order
`items` | [[OrderItemInterface](#OrderItemInterface)] | An array containing the items purchased in this order
`number` | String! | The order number
`order_date` | String! | The date the order was placed
`order_number` | String! | Deprecated. Use the `number` attribute instead
`payment_methods` | [[PaymentMethod](#PaymentMethod)] | Payment details for the order
`shipments` | [[OrderShipment](#OrderShipment)] | Shipment list for the order
`shipping_address` | [OrderAddress](#OrderAddress) | Shipping address for the order
`shipping_method` | String | Shipping method for the order
`status` | String! | The current status of the order
`total` | [OrderTotal](#OrderTotal) | Contains details about the calculated totals for this order

The deprecated attributes were previously defined in the `CustomerOrder` object in the `customerOrders` query, but have been deprecated for the `customer` query.

#### BundleInvoiceItem {#BundleInvoiceItem}

The `BundleInvoiceItem` object implements the [`InvoiceItemInterface`](#InvoiceItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

#### BundleOrderItem {#BundleOrderItem}

The `BundleOrderItem` object implements the [`OrderItemInterface`](#OrderItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

#### BundleShipmentItem {#BundleShipmentItem}

The `BundleShipmentItem` object implements the [`ShipmentItemInterface`](#ShipmentItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`bundle_options` | [[ItemSelectedBundleOption]](#ItemSelectedBundleOption) | A list of bundle options that are assigned to the bundle product

#### CommentItem attributes {#CommentItem}

The `CommentItem` object contains details about a comment applied to an order.

Attribute | Data type | Description
--- | --- | ---
`message` | String!| The text of the message
`timestamp` | String! | The timestamp of the comment

#### CreditMemo attributes {#CreditMemo}

The `CreditMemo` object contains details about credit memos applied to an order.

Attribute | Data type | Description
--- | --- | ---
`comments` | [[CommentItem](#CommentItem)] | Comments on the credit memo
`id` | ID! | The unique ID of the credit memo
`items` | [[CreditMemoItem](#CreditMemoItem)] | An array containing details about refunded items
`number` | String! | The sequential credit memo number
`total` | [CreditMemoTotal](#CreditMemoTotal) | Contains details about the total refunded amount

#### CreditMemoItem attributes {#CreditMemoItem}

The `CreditMemoItem` object describes a specific credit memo.

Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | The final discount information for the base product, including discounts on options
`id` | ID! | The unique ID of the credit memo item
`order_item` | [OrderItemInterface](#OrderItemInterface) | Contains details about a refunded order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product, including selected options
`product_sku` | String! | The SKU of the base product
`quantity_invoiced` | Float | The number of invoiced items

#### CreditMemoTotal attributes {#CreditMemoTotal}

The CreditMemoTotal object contains details about the totals of a credit memo.

Attribute | Data type | Description
--- | --- | ---
`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the order
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`subtotal` | Money! | The subtotal of the order, excluding shipping, discounts, and taxes
`taxes` | [[TaxItem](#TaxItem)]! | An array containing information about taxes on individual orders
`total_tax` | Money! | The amount of tax applied to all orders

#### Discount attributes {#Discount}

The `Discount` object contains a description of a discount and the amount.

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of the discount
`label` | String! | A description of the discount

#### DownloadableCreditMemoItem attributes {#DownloadableCreditMemoItem}

The `DownloadableCreditMemoItem` object implements the `CreditMemoItemInterface`. It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were refunded from the downloadable product

#### DownloadableItemsLinks attributes {#DownloadableItemsLinks}

The `DownloadableProductLinks` object defines characteristics of a downloadable product.

Attribute | Data type | Description
--- | --- | ---
`sort_order` | Int | A number indicating the sort order
`title`| String | The display name of the link
`uid` | ID! | A string that encodes option details

#### DownloadableInvoiceItem attributes {#DownloadableInvoiceItem}

The `DownloadableInvoiceItem` object implements the [`InvoiceItemInterface`](#InvoiceItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were invoiced from the downloadable product

#### DownloadableOrderItem attributes {#DownloadableOrderItem}

The `DownloadableOrderItem` object implements the [`OrderItemInterface`](#OrderItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`downloadable_links` | [[DownloadableItemsLinks]](#DownloadableItemsLinks) | A list of downloadable links that were ordered from the downloadable product

#### GiftCardItem attributes {#GiftCardItem}

The `GiftCardItem` object contains selected buyer-entered gift card properties for an order item. Physical and virtual gift cards 

Attribute | Data type | Description
--- | --- | ---
`message`| String | A message provided by the sender to the recipient
`recipient_email` | String | The email provided for the recipient of a virtual gift card
`recipient_name` | String | The name provided for the recipient of a physical or virtual gift card
`sender_email` | String | The sender email provided for a virtual gift card
`sender_name` | String | The sender name provided for a physical or virtual gift card

#### GiftCardCreditMemoItem attributes {#GiftCardOrderItem}

The `GiftCardCreditMemoItem` object implements the `CreditMemoItemInterface`. It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for a refunded item

#### GiftCardInvoiceItem attributes {#GiftCardInvoiceItem}

The `GiftCardInvoiceItem` object implements the [`InvoiceItemInterface`](#InvoiceItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an invoiced item

#### GiftCardOrderItem attributes {#GiftCardOrderItem}

The `GiftCardOrderItem` object implements the [`OrderItemInterface`](#OrderItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for an order item

#### GiftCardShipmentItem attributes {#GiftCardShipmentItem}

The `GiftCardShipmentItem` object implements the [`ShipmentItemInterface`](#ShipmentItemInterface). It also defines the following attribute:

Attribute | Data type | Description
--- | --- | ---
`gift_card` | [GiftCardItem](#GiftCardItem) | Selected gift card properties for a shipped item

#### Invoice attributes {#Invoice}

The `Invoice` object provides details about a customer invoice.

Attribute | Data type | Description
--- | --- | ---
`comments` | [[CommentItem](#CommentItem)] | Comments on the invoice
`id` | ID! | The internal ID of the invoice
`items` | [[InvoiceItemInterface](#InvoiceItemInterface)]! | Contains details about invoiced products
`number` | String! | The sequential number of the invoice
`total` | [InvoiceTotal](#InvoiceTotal)! | Invoice total amount details

#### InvoiceItem attributes {#InvoiceItem}

The InvoiceItem object implements the `InvoiceItemInterface`. It does not add any attributes.

#### InvoiceItemInterface {#InvoiceItemInterface}

`InvoiceItemInterface` is implemented by the `InvoiceItem` and `BundleInvoiceItem` data types.

Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Contains information about the final discount amount for the base product, including discounts on options
`id` | ID! | The unique ID of the invoice item
`order_item` | OrderItemInterface | Contains details about an individual order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product including selected options
`product_sku` | String! | The SKU of the base product
`product_type` | String | The type of product, such as simple, configurable, or bundle
`quantity_invoiced` | Float |The number of invoiced items

#### InvoiceTotal attributes {#InvoiceTotal}

The InvoiceTotal object contains details about the totals of an invoice.

Attribute | Data type | Description
--- | --- | ---
`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the invoice
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`shipping_handling` | [ShippingHandling](#ShippingHandling) | Contains details about the shipping and handling costs for the invoice
`subtotal` | Money! | The subtotal of the invoice, excluding shipping, discounts, and taxes
`taxes` | [[TaxItem](#TaxItem)] | An array containing information about taxes on individual invoices
`total_shipping` | Money! | The shipping amount for the invoice
`total_tax` | Money! | The amount of tax applied to all invoices

#### ItemSelectedBundleOption attributes {#ItemSelectedBundleOption}

The ItemSelectedBundleOption object contains a list of bundle options that are assigned to the bundle product.

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique identifier of the option
`label` | String! | The label of the option
`values` | [[ItemSelectedBundleOptionValue!](#ItemSelectedBundleOptionValue)]! | A list of products that represent the values of the parent option

#### ItemSelectedBundleOptionValue attributes {#ItemSelectedBundleOptionValue}

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique identifier of the option
`price` | Money! | The price of the child bundle product
`product_name` | String! | The name of the child bundle product
`product_sku` | String! | The SKU of the child bundle product
`quantity` | Float! | Indicates how many of this bundle product were ordered

#### KeyValue attributes {#KeyValue}

The `KeyValue` object defines key/attribute pairs that are passed to or from the payment processor.

Attribute | Data type | Description
--- | --- | ---
`name` | String | The name part of the name/value pair
`value` | String | The value part of the name/value pair

#### OrderAddress attributes {#OrderAddress}

The `OrderAddress` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city or town
`company` | String | The customer's company
`country_code` | CountryCodeEnum | The customer's country
`fax` | String | The fax number
`firstname` | String! | The first name of the person associated with the shipping/billing address
`lastname` | String! | The family name of the person associated with the shipping/billing address
`middlename` | String | The middle name of the person associated with the shipping/billing address
`postcode` | String | The customer's ZIP or postal code
`prefix` | String | An honorific, such as Dr., Mr., or Mrs.
`region` | String | The state or province name
`region_id` | ID | The unique ID for a pre-defined region
`street` | [String!]! | An array of strings that define the street number and name
`suffix` | String | A value such as Sr., Jr., or III
`telephone` | String! | The telephone number
`vat_id` | String | The customer's Tax/VAT number (for corporate customers)

#### OrderItem attributes {#OrderItem}

The `OrderItem` data type implements the [`OrderItemInterface`](#OrderItemInterface).

#### OrderItemInterface {#OrderItemInterface}

`OrderItemInterface` is implemented by the `OrderItem` and `BundleOrderItem` data types.

Attribute | Data type | Description
--- | --- | ---
`discounts` | [Discount] | Final discount information for the product
`entered_options` | [[OrderItemOption](#OrderItemOption)] | The entered option for the base product, such as a logo or image
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

#### OrderItemOption attributes {#OrderItemOption}

Attribute | Data type | Description
--- | --- | ---
`id` | String! | The name of the option
`value` | String! | The value of the option

#### OrderShipment attributes {#OrderShipment}

Attribute | Data type | Description
--- | --- | ---
`comments` | [[CommentItem](#CommentItem)] | Comments added to the shipment
`id` | ID! | The unique ID of the shipment
`items` | [[ShipmentItemInterface](#ShipmentItemInterface)] | Contains items included in the shipment
`number` | String! | The sequential credit shipment number
`tracking` | [[ShipmentTracking](#ShipmentTracking)] | Contains shipment tracking detail

#### OrderTotal attributes {#OrderTotal}

The `OrderTotal` object contains details about the sales total amounts used to calculate the final price.

Attribute | Data type | Description
--- | --- | ---
`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the order
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`shipping_handling` | [ShippingHandling](#ShippingHandling) | The shipping and handling costs for the order
`subtotal` | Money! | The subtotal of the order, excluding shipping, discounts, and taxes
`taxes` | [[TaxItem](#TaxItem)]! | An array containing information about taxes on individual orders
`total_shipping` | Money! | The shipping costs for the order
`total_tax` | Money! | The amount of tax applied to the order

#### PaymentMethod attributes {#PaymentMethod}

The PaymentMethod data type contains details about the payment method used to pay for the order.

Attribute | Data type | Description
--- | --- | ---
`additional_data` | [[KeyValue](#KeyValue)] | Additional data per payment method type
`name` | String! | The label that describes the payment method
`type` | String! | The payment method code that indicates how the order was paid for

#### SalesItemOption attributes {#SalesItemOption}

The `SalesItemOption` data type contains the ID and value for the selected or entered options.

Attribute | Data type | Description
--- | --- | ---
`id` | String! | The name of the option
`value` | String! | The value of the option

#### SearchResultPageInfo attributes {#SearchResultPageInfo}

The `SearchResultPageInfo` data type provides pagination for the items returned by the `orders` filter.

Attribute | Data type | Description
--- | --- | ---
`current_page` | Int | Specifies which page of results to return
`page_size` | Int | Specifies the maximum number of items to return
`total_pages` | Int | Total pages

#### ShipmentItem attributes {#ShipmentItem}

The `ShipmentItem` data type implements the [`ShipmentItemInterface`](#ShipmentItemInterface).

#### ShipmentItemInterface attributes {#ShipmentItemInterface}

Attribute | Data type | Description
--- | --- | ---
`id` | ID! | The unique ID of the shipment item
`order_item`| [OrderItemInterface](#OrderItemInterface) | The shipped order item
`product_name` | String | The name of the base product
`product_sale_price` | Money! | The sale price for the base product
`product_sku` | String! | The SKU of the base product
`quantity_shipped` | Float! | The number of shipped items

#### ShipmentTracking attributes {#ShipmentTracking}

The ShipmentTracking object contains the shipping carrier name and other tracking details.

Attribute | Data type | Description
--- | --- | ---
`carrier` | String! | The shipping carrier for the order delivery
`number` | String | The tracking number of the order shipment
`title` | String! | The shipment tracking title

#### ShippingHandling attributes {#ShippingHandling}

The `ShippingHandling` object provides details about shipping and handling charges.

Attribute | Data type | Description
--- | --- | ---
`amount_excluding_tax` | Money | The shipping amount, excluding tax
`amount_including_tax` | Money | The shipping amount, including tax
`discounts` | [Discount] | The applied discounts to the shipping
`taxes` | [[TaxItem](#TaxItem)] | Contains details about taxes applied for shipping
`total_amount`| Money! | The total amount for shipping

#### TaxItem attributes {#TaxItem}

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of tax applied to an order
`rate` | Float | The tax rate applied to an order
`title` | String! | A label that describes the tax
