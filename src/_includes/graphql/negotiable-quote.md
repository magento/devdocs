The `NegotiableQuote` object contains details of a negotiable quote, including its status, contents, and history.

Attribute | Data Type | Description
--- | --- | ---
`available_payment_methods` | [AvailablePaymentMethod] | An array of payment methods that can be applied to the negotiable quote
`billing_address` | NegotiableQuoteBillingAddress | The billing address applied to the negotiable quote
`buyer` | NegotiableQuoteUser! | The first and last name of the buyer
`comments` | [NegotiableQuoteComment!] | A list of comments made by the buyer and seller
`created_at` | String | Timestamp indicating when the negotiable quote was created
`email` String | The email address of the company user
`history` | [NegotiableQuoteHistoryEntry!] | A list of status and price changes for the negotiable quote
`is_virtual` | Boolean | Indicates whether the negotiable quote contains only virtual products
`items` | [CartItemInterface] | The list of items in the negotiable quote
`name` | String! | The title assigned to the negotiable quote
`prices` | CartPrices | A set of subtotals and totals applied to the negotiable quote
`selected_payment_method` | SelectedPaymentMethod | The payment method that was applied to the negotiable quote
`shipping_addresses` | [NegotiableQuoteShippingAddress]! | A list of shipping addresses applied to the negotiable quote.
`status` | NegotiableQuoteStatus! | The status of the negotiable quote. Possible values are SUBMITTED, PENDING, UPDATED, OPEN, ORDERED, CLOSED, DECLINED, and EXPIRED
`total_quantity` | Float! | The total number of items in the negotiable quote
`uid` | ID! | The unique ID of a NegotiableQuote object
`updated_at` | String | Timestamp indicating when the negotiable quote was updated

### NegotiableQuoteComment attributes {#NegotiableQuoteComment}

The `NegotiableQuoteComment` object contains details about a single comment made by the seller or the buyer.

Attribute | Data Type | Description
--- | --- | ---
`author` | [NegotiableQuoteUser!](#NegotiableQuoteUser) | The first and last name of the commenter
`created_at` | String! | Timestamp indicating when the comment was created
`creator_type` | NegotiableQuoteCommentCreatorType! | Indicates whether a buyer or seller commented
`text` | String! | The plain text comment
`uid` | ID! | The unique ID of a NegotiableQuoteComment object

### NegotiableQuoteCustomLogChange attributes {#NegotiableQuoteCustomLogChange}

The `NegotiableQuoteCustomLogChange` object contains changes to a negotiable quote that were made by a third-party extension.

Attribute | Data Type | Description
--- | --- | ---
new_value | String! | The new entry content
old_value | String | The previous entry in the custom log
title | String! | The title of the custom log entry

### NegotiableQuoteHistoryChanges attributes {#NegotiableQuoteHistoryChanges}

The `NegotiableQuoteHistoryChanges` object contains details about a single change in the history of a negotiable quote.

Attribute | Data Type | Description
--- | --- | ---
`comment_added` | [NegotiableQuoteHistoryCommentChange](#NegotiableQuoteHistoryCommentChange) | The comment provided with a change in the negotiable quote history
`custom_changes` | [NegotiableQuoteCustomLogChange](#NegotiableQuoteCustomLogChange) | Lists log entries added by third-party extensions
`expiration` | [NegotiableQuoteHistoryExpirationChange](#NegotiableQuoteHistoryExpirationChange) | The expiration date of the negotiable quote before and after a change in the quote history
`products_removed` | [NegotiableQuoteHistoryProductsRemovedChange](#NegotiableQuoteHistoryProductsRemovedChange) | Lists products that were removed as a result of a change in the quote history
`statuses` | [NegotiableQuoteHistoryStatusesChange](#NegotiableQuoteHistoryStatusesChange) | The status before and after a change in the negotiable quote history
`total` | [NegotiableQuoteHistoryTotalChange](#NegotiableQuoteHistoryTotalChange) | The total amount of the negotiable quote before and after a change in the quote history

### NegotiableQuoteHistoryCommentChange attributes {#NegotiableQuoteHistoryCommentChange}

The `NegotiableQuoteHistoryCommentChange` object contains a plain-text comment.

Attribute | Data Type | Description
--- | --- | ---
`comment` | String! | A simple (non-HTML) comment submitted by a seller or buyer

### NegotiableQuoteHistoryEntry attributes {#NegotiableQuoteHistoryEntry}

The `NegotiableQuoteHistoryEntry` object contains details about a change to a negotiable quote, including all previous changes made at that point.

Attribute | Data Type | Description
--- | --- | ---
`author` | [NegotiableQuoteUser!](#NegotiableQuoteUser) | The person who made a change in the status of the negotiable quote
`change_type` | NegotiableQuoteHistoryEntryChangeType! | An enum that describes why the entry in the negotiable quote history changed status. Possible values are CREATED, UPDATED, CLOSED, and UPDATED_BY_SYSTEM
`changes` | [NegotiableQuoteHistoryChanges](#NegotiableQuoteHistoryChanges) | The set of changes in the negotiable quote
`created_at` | String | Timestamp indicating when the negotiable quote entry was created
`uid` | ID! | The unique ID of a NegotiableQuoteHistoryEntry object

### NegotiableQuoteHistoryExpirationChange attributes {#NegotiableQuoteHistoryExpirationChange}

The `NegotiableQuoteHistoryExpirationChange` object lists the current expiration date of the negotiable quote, and the previous expiration date, if applicable.

Attribute | Data Type | Description
--- | --- | ---
`new_expiration` | String! | The expiration date after the change
`old_expiration` | String | The previous expiration date. The value will be 'null' if not previously set

### NegotiableQuoteHistoryProductsRemovedChange attributes {#NegotiableQuoteHistoryProductsRemovedChange}

The `NegotiableQuoteHistoryProductsRemovedChange` object provides details about products removed from a negotiable quote because of an action by a buyer or seller, or because the item was removed from the catalog.

Attribute | Data Type | Description
--- | --- | ---
`products_removed_from_catalog` | [ID]| A list of product IDs the seller removed from the catalog
`products_removed_from_quote` | [[ProductInterface]]({{page.baseurl}}/graphql/interfaces/product-interface.html) | A list of products removed from the quote by either the buyer or the seller

### NegotiableQuoteHistoryStatusChange attributes {#NegotiableQuoteHistoryStatusChange}

The `NegotiableQuoteHistoryStatusChange` object returns the status changes during the quote's life cycle.

Attribute | Data Type | Description
--- | --- | ---
`new_status` | NegotiableQuoteStatus! | The updated status
`old_status` | NegotiableQuoteStatus | The previous status. The value will be `null` for the first history entry in a negotiable quote

### NegotiableQuoteHistoryStatusesChange attributes {#NegotiableQuoteHistoryStatusesChange}

The `NegotiableQuoteHistoryStatusesChange` object contains an array of all previous modifications to the negotiable quote.

Attribute | Data Type | Description
--- | --- | ---
`changes` | [NegotiableQuoteHistoryStatusChange!]! | A list of status changes

### NegotiableQuoteHistoryTotalChange attributes {#NegotiableQuoteHistoryTotalChange}

The `NegotiableQuoteHistoryTotalChange` object contains the new total price of a negotiable quote after some change has been applied.

Attribute | Data Type | Description
--- | --- | ---
`new_price` | Money | The total price as a result of the change
`old_price` | Money | The previous total price on the negotiable quote

### NegotiableQuoteUser attributes {#NegotiableQuoteUser}

The `NegotiableQuoteUser` contains the first and last name of a buyer or seller.

Attribute | Data Type | Description
--- | --- | ---
`firstname` | String! | The first name of the buyer or seller making a change
`lastname` | String! | The buyer's or seller's last name
