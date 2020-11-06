---
group: graphql
title: requestReturn mutation
ee_only: true
---

The `requestReturn` mutation initiates a buyer's request to return an item for replacement or refund.

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the `returns_enabled` attribute to determine whether returned merchandise authorization (RMAs) are enabled.

type Mutation {
    requestReturn(input: RequestReturnInput!): RequestReturnOutput @doc(description: "Initiates a buyer's  request to return an item for replacement or refund") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\RequestReturn")
    addReturnComment(input: AddReturnCommentInput!): AddReturnCommentOutput @doc(description: "Add a comment to an existing return") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\AddReturnComment")
    addReturnTracking(input: AddReturnTrackingInput!): AddReturnTrackingOutput @doc(description: "Add tracking information to the return") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\AddReturnTracking")
    removeReturnTracking(input: RemoveReturnTrackingInput!): RemoveReturnTrackingOutput @doc(description: "Remove a tracked shipment from a return") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\RemoveReturnTracking")
}


input AddReturnCommentInput {
    return_uid: ID! @doc(description: "The encoded ID of the return request")

    comment_text: String! @doc(description: "The text added to the return request")
}

type AddReturnCommentOutput {
    return: Return @doc(description: "Contains details about the modified return")
}

input AddReturnTrackingInput {
    return_uid: ID! @doc(description: "The encoded ID of the return request")
    carrier_uid: ID! @doc(description: "The encoded ID of the selected shipping carrier")
    tracking_number: String! @doc(description: "The shipping tracking number for this return request")
}

type AddReturnTrackingOutput {
    return: Return @doc(description: "Contains details about the modified return")
    return_shipping_tracking: ReturnShippingTracking @doc(description: "Contains details about shipping for a return")
}

input RemoveReturnTrackingInput {
    return_shipping_tracking_uid: ID! @doc(description: "The encoded ID of the tracking item to delete")
}

type RemoveReturnTrackingOutput {
    return: Return @doc(description: "Contains details about the modified return")
}

type Customer {
    returns(
        pageSize: Int = 20 @doc(description: "Specifies the maximum number of results to return at once. The default value is 20"),
        currentPage: Int = 1 @doc(description: "Specifies which page of results to return. The default value is 1"),
    ): Returns @doc(description: "Information about the customer's return requests.") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\Returns")
    return(uid: ID!): Return @doc(description: "Gets details about the specified return request") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\Rma")
}

type CustomerOrder {
    returns(
        pageSize: Int = 20 @doc(description: "Specifies the maximum number of results to return at once. The default value is 20"),
        currentPage: Int = 1 @doc(description: "Specifies which page of results to return. The default value is 1"),
    ): Returns @doc(description: "Return requests associated with this order.") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\CustomerOrder\\Returns")
    items_eligible_for_return: [OrderItemInterface] @doc(description: "A list of order items eligible to be in a return request") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\CustomerOrder\\EligibleItems")
}

interface OrderItemInterface {
    eligible_for_return: Boolean @doc(description: "Indicates whether the order item is eligible is eligible to be in a return request") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\CustomerOrder\\Item\\IsEligible")
}

type Returns {
    items: [Return] @doc(description: "A list of return requests")
    page_info: SearchResultPageInfo @doc(description: "Pagination metadata")
    total_count: Int @doc(description: "The total number of return requests")
}



type ReturnItem {
    uid: ID! @doc(description: "The encoded ID of an item in a return request")
    order_item: OrderItemInterface! @doc(description: "Provides access to the product being returned, including information about selected and entered options") @resolver(class: "Magento\\SalesGraphQl\\Model\\Resolver\\OrderItem")
    custom_attributes: [CustomAttribute] @doc(description: "Return item custom attributes that are visible on the storefront")
    request_quantity: Float! @doc(description: "The quantity of the item requested to be returned")
    quantity: Float! @doc(description: "The quantity of the item the merchant authorized to be returned")
    status: ReturnItemStatus! @doc(description: "The return status of the item")
}

type CustomAttribute {
    uid: ID! @doc(description: "The encoded ID of a custom attribute")
    label: String! @doc(description: "A description of the attribute")
    value: String! @doc(description: "A JSON-encoded value of the attribute")
}

type ReturnComment {
    uid: ID! @doc(description: "An encoded ID assigned to the comment")
#    author_firstname: String! @doc(description: "First name of the user who posted the comment.")
#    author_lastname: String! @doc(description: "Last name of the user who posted the comment.")
    created_at: String! @doc(description: "The date and time the comment was posted")
    created_by: String! @doc(description: "Indicates who posted the comment")
    text: String! @doc(description: "The contents of the comment")
}

type ReturnShipping {
    address: ReturnShippingAddress @doc(description: "The merchant-defined return shipping address")
    tracking(uid: ID): [ReturnShippingTracking] @doc(description: "If a single UID is specified, contains a single tracking record. Otherwise, contains all tracking information") @resolver(class: "Magento\\RmaGraphQl\\Model\\Resolver\\Tracking")
}

type ReturnShippingCarrier {
    uid: ID! @doc(description: "An encoded ID assigned to the shipping carrier")
    label: String! @doc(description: "A description of the shipping carrier")
}

type ReturnShippingTracking {
    uid: ID! @doc(description: "An encoded ID assigned to the tracking item")
    carrier: ReturnShippingCarrier! @doc(description: "Contains details of a shipping carrier")
    tracking_number: String! @doc(description: "A tracking number assigned by the carrier")
    status: ReturnShippingTrackingStatus @doc(description: "Contains details about the status of a shipment")
}

type ReturnShippingTrackingStatus {
    text: String! @doc(description: "Text that describes the status")
    type: ReturnShippingTrackingStatusType! @doc(description: "Indicates whether the status type is informational or an error")
}

enum ReturnShippingTrackingStatusType {
    INFORMATION
    ERROR
}

type ReturnShippingAddress {
    contact_name: String @doc(description: "The merchant's contact person")
    street: [String]! @doc(description: "The street address for product returns")
    city: String! @doc(description: "The city for product returns")
    region: Region! @doc(description: "An object that defines the state or province for product returns")
    postcode: String! @doc(description: "The postal code for product returns")
    country: Country! @doc(description: "An object that defines the country for product returns")
    telephone: String @doc(description: "The telephone number for product returns")
}

enum ReturnStatus {
    PENDING
    AUTHORIZED
    PARTIALLY_AUTHORIZED
    RECEIVED
    PARTIALLY_RECEIVED
    APPROVED
    PARTIALLY_APPROVED
    REJECTED
    PARTIALLY_REJECTED
    DENIED
    PROCESSED_AND_CLOSED
    CLOSED
}

enum ReturnItemStatus {
    PENDING
    AUTHORIZED
    RECEIVED
    APPROVED
    REJECTED
    DENIED
}

## Syntax

```graphql
mutation {
requestReturn(input: RequestReturnInput!): RequestReturnOutput
```

## Example usage

The following example 

**Request:**

``` graphql

```

**Response:**

```json

```

## Input attributes

The `requestReturn` mutation requires the following input.

Attribute |  Data Type | Description
--- | --- | ---
`comment_text` | String | Text the buyer entered that describes the reason for the refund request
`contact_email` | String | An email address the buyer enters to receive notifications about the status of the return
`items`| [RequestReturnItemInput!]! |An array of items to be returned
`order_uid` | ID! | The encoded order ID containing an item to be returned

### RequestReturnItemInput attributes {#RequestReturnItemInput}

The RequestReturnItemInput object

Attribute |  Data Type | Description
--- | --- | ---
`entered_custom_attributes`| [EnteredCustomAttributeInput!] | Contains details about a custom attribute that was entered, such as text or a file
`order_item_uid` | ID! | The encoded ID of the order item to be returned
`quantity_to_return` | Float! | The quantity of the item to be returned")
`selected_custom_attributes` | [SelectedCustomAttributeInput!] | An array of selected custom option IDs associated with the item to be returned. For example, the IDs for the selected color and size of a configurable product

### EnteredCustomAttributeInput attributes {#EnteredCustomAttributeInput}

The EnteredCustomAttributeInput object

Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String! | A string that identifies the entered custom attribute
`value` | String! | The text or other entered value

### SelectedCustomAttributeInput attributes {#SelectedCustomAttributeInput}

The SelectedCustomAttributeInput object
Attribute |  Data Type | Description
--- | --- | ---
`attribute_code` | String! | A string that identifies the selected attribute
`value` | ID! | The encoded ID of a selected custom attribute

## Output attributes

The `RequestReturnOutput` object can contain the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`return` | Return | Contains details about a single return request")
`returns(pageSize, currentPage)` | Returns | Contains an array of return requests

### Return attributes {#Return}

Attribute |  Data Type | Description
--- | --- | ---
`available_shipping_carriers` | [ReturnShippingCarrier] | A list of shipping carriers available for returns
`comments`| [ReturnComment] | A list of comments posted for the return request
`creation_date`: String! | The date the return was requested
`customer_email`: String! | Email of the person who created the return request
`customer_name`: String | The name of the person who requested the return
`items`: [ReturnItem] | A list of items being returned
`number`: String! | Human-readable return number
`order`: CustomerOrder | The order associated with the return
`shipping`: ReturnShipping | Shipping information for the return
`status`: ReturnStatus | The status of the return request
`uid`: ID! | The encoded ID of a return request

Attribute |  Data Type | Description
--- | --- | ---

Attribute |  Data Type | Description
--- | --- | ---
