The `Return` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`available_shipping_carriers` | [ReturnShippingCarrier] | A list of shipping carriers available for returns
`comments`| [ReturnComment] | A list of comments posted for the return request
`created_at` | String! | The date the return was requested
`customer_email` | String! | Email of the person who created the return request
`customer` | [ReturnCustomer](#ReturnCustomer) | The name of the person who requested the return
`items`| [[ReturnItem]](#ReturnItem) | A list of items being returned
`number` | String! | Human-readable return number
`order` | [CustomerOrder]({{page.baseurl}}/graphql/queries/customer.html#orders) | The order associated with the return
`shipping` | [ReturnShipping](#ReturnShipping) | Shipping information for the return
`status` |  ReturnStatus | An enum indicating the status of the return request. Possible values are APPROVED, AUTHORIZED, CLOSED, DENIED, PARTIALLY_APPROVED, PARTIALLY_AUTHORIZED, PARTIALLY_RECEIVED, PARTIALLY_REJECTED, PENDING, PROCESSED_AND_CLOSED, RECEIVED, and REJECTED
`uid` | ID! | The encoded ID of a return request

#### CustomAttribute attributes {#CustomAttribute}

Attribute |  Data Type | Description
--- | --- | ---
label | String! | A description of the attribute
uid | ID! | The encoded ID of a custom attribute
value | String! | A JSON-encoded value of the attribute

#### ReturnComment attributes {#ReturnComment}

The ReturnComment object provides details about an individual comment in a refund request. Comments can be added by a customer or the merchant.

Attribute |  Data Type | Description
--- | --- | ---
`author_name` | String! | The name or author who posted the comment
`created_at` | String! | The date and time the comment was posted
`text` | String! | The contents of the comment
`uid` | ID! | An encoded ID assigned to the comment

#### ReturnCustomer attributes {#ReturnCustomer}

The ReturnCustomer object contains information about the person requesting a return.

Attribute |  Data Type | Description
--- | --- | ---
`email` | String! | The email address of the refund requester
`firstname` | String | The first name of the refund requester
`lastname` | String | The last name of the refund requester

#### ReturnItem attributes {#ReturnItem}

The ReturnItem object provides details about an individual item in a return request.

Attribute |  Data Type | Description
--- | --- | ---
`custom_attributes` | [[CustomAttribute]](#CustomAttribute) | Return item custom attributes that are visible on the storefront
`order_item` | [OrderItemInterface!]({{page.baseurl}}/graphql/interfaces/order-item-interface.html) | Provides access to the product being returned, including information about selected and entered options
`quantity` | Float! | The quantity of the item the merchant authorized to be returned
`request_quantity` | Float! | The quantity of the item requested to be returned
`status`| ReturnItemStatus! | An enum indicating the return status of the item. Possible values are APPROVED, AUTHORIZED, DENIED, PENDING, RECEIVED, and REJECTED
`uid`| ID! | The encoded ID of an item in a return request

#### ReturnShipping attributes {#ReturnShipping}

The ReturnShipping object can contain the merchant's shipping address and tracking information.

Attribute |  Data Type | Description
--- | --- | ---
`address`| [ReturnShippingAddress](#ReturnShippingAddress) | The merchant-defined return shipping address
`tracking(uid: ID)` | [[ReturnShippingTracking](#ReturnShippingTracking)] | If a single UID is specified, contains a single tracking record. Otherwise, contains all tracking information

#### ReturnShippingAddress attributes {#ReturnShippingAddress}

The ReturnShippingAddress object defines the merchant address for receiving returned items.

Attribute |  Data Type | Description
--- | --- | ---
`city` | String! | The city for product returns
`contact_name` | String | The merchant's contact person
`country` | Country! | An object that defines the country for product returns
`postcode` | String! | The postal code for product returns
`region` | Region! | An object that defines the state or province for product returns
`street` | [String]! | The street address for product returns
`telephone` | String | The telephone number for product returns

#### ReturnShippingCarrier attributes {#ReturnShippingCarrier}

The ReturnShippingCarrier object contains details about the shipping carrier used to return a product.

Attribute |  Data Type | Description
--- | --- | ---
`label` | String! | A description of the shipping carrier
`uid` | ID! | An encoded ID assigned to the shipping carrier

#### ReturnShippingTracking attributes {#ReturnShippingTracking}

The ReturnShippingTracking object contains tracking information for an approved return.

Attribute |  Data Type | Description
--- | --- | ---
`carrier` | [ReturnShippingCarrier!](#ReturnShippingCarrier) | Contains details of a shipping carrier
`status` | [ReturnShippingTrackingStatus](#ReturnShippingTrackingStatus) | Contains details about the status of a shipment
`tracking_number` | String! | A tracking number assigned by the carrier
`uid` | ID! | An encoded ID assigned to the tracking item

#### ReturnShippingTrackingStatus attributes {#ReturnShippingTrackingStatus}

The ReturnShippingTrackingStatus object contains tracking status information for an approved return.

Attribute |  Data Type | Description
--- | --- | ---
`text` | String! | Text that describes the status
`type` | ReturnShippingTrackingStatusType! | An enum indicating whether the status type is INFORMATIONAL or an ERROR
