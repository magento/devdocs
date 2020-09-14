
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
`comments` | [[SalesCommentItem](#SalesCommentItem)] | Comments on the order
`created_at` | String | Deprecated. Use the `order_date` attribute instead
`credit_memos` | [[CreditMemo](#CreditMemo)] | Contains a list of credit memos for the order
`grand_total` | Float  | Deprecated. Use the `totals.grand_total` attribute instead
`gift_message` | [GiftMessage](#GiftMessage) | The entered gift message for the order
`gift_receipt_included` | Boolean! | Indicates if the customer requested a gift receipt for the order
`gift_wrapping` | [GiftWrapping](#GiftWrapping) | The selected gift wrapping for the order
`id` | ID! | Unique identifier for the order
`increment_id` | String | Deprecated. Use the `id` attribute instead
`invoices` | [[Invoice](#Invoice)]! | Contains a list of invoices for the order
`items` | [[OrderItemInterface](#OrderItemInterface)] | An array containing the items purchased in this order
`number` | String! | The order number
`order_date` | String! | The date the order was placed
`order_number` | String! | Deprecated. Use the `number` attribute instead
`payment_methods` | [[PaymentMethod](#PaymentMethod)] | Payment details for the order
`printed_card_included` | Boolean! | Indicates if the customer requested a printed card for the order
`shipments` | [[OrderShipment](#OrderShipment)] | Shipment list for the order
`shipping_address` | [OrderAddress](#OrderAddress) | Shipping address for the order
`shipping_method` | String | Shipping method for the order
`status` | String! | The current status of the order
`total` | [OrderTotal](#OrderTotal) | Contains details about the calculated totals for this order

The deprecated attributes were previously defined in the `CustomerOrder` object in the `customerOrders` query, but have been deprecated for the `customer` query.

#### CreditMemo attributes {#CreditMemo}

The `CreditMemo` object contains details about credit memos applied to an order.

Attribute | Data type | Description
--- | --- | ---
`comments` | [[SalesCommentItem](#SalesCommentItem)] | Comments on the credit memo
`id` | ID! | The unique ID of the credit memo
`items` | [[CreditMemoItemInterface](#CreditMemoItemInterface)] | An array containing details about refunded items
`number` | String! | The sequential credit memo number
`total` | [CreditMemoTotal](#CreditMemoTotal) | Contains details about the total refunded amount

#### CreditMemoItemInterface attributes {#CreditMemoItemInterface}

`CreditMemoItemInterface` defines the following attributes.

{% include graphql/credit-memo-item-interface.md %}

[CreditMemoItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/credit-memo-item-interface.html) provides additional information about the implementations of this interface.

#### CreditMemoTotal attributes {#CreditMemoTotal}

The `CreditMemoTotal` object contains details about the totals of a credit memo.

Attribute | Data type | Description
--- | --- | ---
`adjustment` | Money! | An adjustment manually applied to the order
`base_grand_total` | Money! | The final base grand total amount in the base currency
`discounts` | [Discount] | The applied discounts to the order
`grand_total` | Money! | The final total amount, including shipping, discounts, and taxes
`shipping_handling` | [ShippingHandling](#ShippingHandling) | Contains details about the shipping and handling costs for the credit memo
`subtotal` | Money! | The subtotal of the order, excluding shipping, discounts, and taxes
`taxes` | [[TaxItem](#TaxItem)]! | An array containing information about taxes on individual orders
`total_shipping` | Money! | The shipping amount for the credit memo
`total_tax` | Money! | The amount of tax applied to all orders

#### Discount attributes {#Discount}

The `Discount` object contains a description of a discount and the amount.

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of the discount
`label` | String! | A description of the discount

### GiftMessage attributes {#GiftMessage}

{% include graphql/gift-message.md %}

### GiftWrapping attributes {#GiftWrapping}

{% include graphql/gift-wrapping.md %}

#### Invoice attributes {#Invoice}

The `Invoice` object provides details about a customer invoice.

Attribute | Data type | Description
--- | --- | ---
`comments` | [[SalesCommentItem](#SalesCommentItem)] | Comments on the invoice
`id` | ID! | The internal ID of the invoice
`items` | [[InvoiceItemInterface](#InvoiceItemInterface)]! | Contains details about invoiced products
`number` | String! | The sequential number of the invoice
`total` | [InvoiceTotal](#InvoiceTotal)! | Invoice total amount details

#### InvoiceItemInterface {#InvoiceItemInterface}

`InvoiceItemInterface` defines the following attributes.

{% include graphql/invoice-item-interface.md %}

[InvoiceItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/invoice-item-interface.html) provides additional information about the implementations of this interface.

`InvoiceItemInterface` is implemented by the `InvoiceItem` and `BundleInvoiceItem` data types.

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

#### OrderItemInterface {#OrderItemInterface}

`OrderItemInterface` defines the following attributes.

{% include graphql/order-item-interface.md %}

[OrderItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/order-item-interface.html) provides additional information about the implementations of this interface.

#### OrderItemOption attributes {#OrderItemOption}

Attribute | Data type | Description
--- | --- | ---
`label` | String! | The name of the option
`value` | String! | The value of the option

#### OrderShipment attributes {#OrderShipment}

Attribute | Data type | Description
--- | --- | ---
`comments` | [[SalesCommentItem](#SalesCommentItem)] | Comments added to the shipment
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

#### RewardPoints attributes {#RewardPoints}

The `RewardPoints` object provides details about the customer's reward points balance,  history, and related information.

Attribute | Data type | Description
--- | --- | ---
`balance`| [RewardPointsAmount](#RewardPointsAmount) | The current balance of reward points
`balance_history` | [[RewardPointsBalanceHistoryItem]](#RewardPointsBalanceHistoryItem) | The balance history of reward points. If the ability for customers to view the balance history has been disabled in the Admin, this field will be set to null
`exchange_rates`| [RewardPointsExchangeRates](#RewardPointsExchangeRates) | The current exchange rates for reward points
`subscription_status` | [RewardPointsSubscriptionStatus](#RewardPointsSubscriptionStatus) | The subscription status of emails related to reward points

#### RewardPointsAmount attributes {#RewardPointsAmount}

The `RewardPointsAmount` object lists the customer's current reward points balance.

Attribute | Data type | Description
--- | --- | ---
`money` | Money! | The amount of reward points, expressed in the currency of the store
`points` | Float! | The amount of reward points, expressed in points

#### RewardPointsBalanceHistoryItem {#RewardPointsBalanceHistoryItem}

The `RewardPointsBalanceHistoryItem` object contains details about individual events in which the customer earned or redeemed reward points.

Attribute | Data type | Description
--- | --- | ---
`balance` | [RewardPointsAmount](#RewardPointsAmount) | Reward points balance after the completion of the transaction
`change_reason` | String! | The reason the balance changed
`date` | String! | Transaction date
`points_change` | Float! | The number of points added or deducted in the transaction

#### RewardPointsExchangeRates attributes {#RewardPointsExchangeRates}

The `RewardPointsExchangeRates` object contains information needed to exchange reward points into the store's currency. Exchange rates depend on the customer group.

Attribute | Data type | Description
--- | --- | ---
`earning` | [RewardPointsRate](#RewardPointsRate) | The number of points earned for the amount spent
`redemption` | [RewardPointsRate](#RewardPointsRate) | The number points must be redeemed to get a currency discount at checkout

#### RewardPointsRate attributes {#RewardPointsRate}

The `RewardPointsRate` object contains details about reward points exchange rates.

Attribute | Data type | Description
--- | --- | ---
`currency_amount` | Float! | The monetary value of the exchange rate. For earnings, this is amount spent to earn the specified points. For redemptions, this is the amount of money the number of points represents
`points` | Float! | The number of points for the exchange rate. For earnings, this is the number of points earned. For redemptions, this is the number of points needed for to redeem points

#### RewardPointsSubscriptionStatus attributes {#RewardPointsSubscriptionStatus}

The `RewardPointsSubscriptionStatus` object indicates whether the customer is subscribed to newsletters that provide reward points balances and expiration notifications. The possible values of these attribtutes are `NOT SUBSCRIBED` and `SUBSCRIBED`.

Attribute | Data type | Description
--- | --- | ---
`balance_updates` | RewardPointsSubscriptionStatusesEnum! | Customer subscription status to 'Reward points balance updates' emails
`points_expiration_notifications` | RewardPointsSubscriptionStatusesEnum! | Customer subscription status to 'Reward points expiration notifications' emails

#### SalesCommentItem attributes {#SalesCommentItem}

The `SalesCommentItem` object contains details about a comment applied to an order.

Attribute | Data type | Description
--- | --- | ---
`message` | String!| The text of the message
`timestamp` | String! | The timestamp of the comment

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

#### ShipmentItemInterface attributes {#ShipmentItemInterface}

`ShipmentItemInterface` defines the following attributes.

{% include graphql/shipment-item-interface.md %}

[ShipmentItemInterface attributes and implementations]({{page.baseurl}}/graphql/interfaces/order-item-interface.html) provides additional information about the implementations of this interface.

#### ShipmentTracking attributes {#ShipmentTracking}

The ShipmentTracking object contains the shipping carrier name and other tracking details.

Attribute | Data type | Description
--- | --- | ---
`carrier` | String! | The shipping carrier for the order delivery
`number` | String | The tracking number of the order shipment
`title` | String! | The shipment tracking title

#### ShippingDiscount attributes {#ShippingDiscount}

The ShippingDiscount object defines an individual discount that can be applied to shipping.

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of the discount

#### ShippingHandling attributes {#ShippingHandling}

The `ShippingHandling` object provides details about shipping and handling charges.

Attribute | Data type | Description
--- | --- | ---
`amount_excluding_tax` | Money | The shipping amount, excluding tax
`amount_including_tax` | Money | The shipping amount, including tax
`discounts` | [ShippingDiscount] | The applied discounts to the shipping
`taxes` | [[TaxItem](#TaxItem)] | Contains details about taxes applied for shipping
`total_amount`| Money! | The total amount for shipping

#### TaxItem attributes {#TaxItem}

Attribute | Data type | Description
--- | --- | ---
`amount` | Money! | The amount of tax applied to an order
`rate` | Float | The tax rate applied to an order
`title` | String! | A label that describes the tax
