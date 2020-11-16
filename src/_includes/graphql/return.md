The `Return` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`available_shipping_carriers` | [ReturnShippingCarrier] | A list of shipping carriers available for returns
`comments`| [ReturnComment] | A list of comments posted for the return request
`creation_date` | String! | The date the return was requested
`customer_email` | String! | Email of the person who created the return request
`customer_name` | String | The name of the person who requested the return
`items`| [ReturnItem] | A list of items being returned
`number` | String! | Human-readable return number
`order` | CustomerOrder | The order associated with the return
`shipping` | ReturnShipping | Shipping information for the return
`status` |  ReturnStatus | An enum indicating the status of the return request. Possible values are APPROVED, AUTHORIZED, CLOSED, DENIED, PARTIALLY_APPROVED, PARTIALLY_AUTHORIZED, PARTIALLY_RECEIVED, PARTIALLY_REJECTED, PENDING, PROCESSED_AND_CLOSED, RECEIVED, and REJECTED
`uid` | ID! | The encoded ID of a return request

### ReturnComment attributes {#ReturnComment}

Attribute |  Data Type | Description
--- | --- | ---
`author_name` | String! | The name or author who posted the comment
`created_at` | String! | The date and time the comment was posted
`text` | String! | The contents of the comment
`uid` | ID! | An encoded ID assigned to the comment

### ReturnItem attributes {#ReturnItem}

Attribute |  Data Type | Description
--- | --- | ---
`custom_attributes` | [CustomAttribute] Return item custom attributes that are visible on the storefront
`order_item` | OrderItemInterface! | Provides access to the product being returned, including information about selected and entered options
`quantity` | Float! | The quantity of the item the merchant authorized to be returned
`request_quantity` | Float! | The quantity of the item requested to be returned
`status`| ReturnItemStatus! | An enum indicating the return status of the item. Possible values are APPROVED, AUTHORIZED, DENIED, PENDING, RECEIVED, and REJECTED
`uid`| ID! | The encoded ID of an item in a return request

### ReturnShipping attributes {#ReturnShipping}

Attribute |  Data Type | Description
--- | --- | ---
`address`| ReturnShippingAddress | The merchant-defined return shipping address
`tracking(uid: ID)` | [ReturnShippingTracking] | If a single UID is specified, contains a single tracking record. Otherwise, contains all tracking information

### ReturnShippingCarrier attributes {#ReturnShippingCarrier}

Attribute |  Data Type | Description
--- | --- | ---
`label` | String! | A description of the shipping carrier
`uid` | ID! | An encoded ID assigned to the shipping carrier

### ReturnShippingTracking attributes {#ReturnShippingTracking}

Attribute |  Data Type | Description
--- | --- | ---
`carrier` | ReturnShippingCarrier! | Contains details of a shipping carrier
`status` | ReturnShippingTrackingStatus | Contains details about the status of a shipment
`tracking_number` | String! | A tracking number assigned by the carrier
`uid` | ID! | An encoded ID assigned to the tracking item

### ReturnShippingTrackingStatus attributes {#ReturnShippingTrackingStatus}

Attribute |  Data Type | Description
--- | --- | ---
text | String! | Text that describes the status
type | ReturnShippingTrackingStatusType! | Indicates whether the status type is informational or an error
