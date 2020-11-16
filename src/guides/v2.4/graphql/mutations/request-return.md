---
group: graphql
title: requestReturn mutation
ee_only: true
---

The `requestReturn` mutation initiates a buyer's request to return an item for replacement or refund.

{:.bs-callout-info}
Use the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html) with the `returns_enabled` attribute to determine whether returned merchandise authorization (RMAs) are enabled.

The following examples illustrate how to retrieve retrieve the values needed to run the `requestReturn` mutation:

*  [Retrieve a summary of the customer's order history]({{page.baseurl/graphql/queries/customer.html#order-history}})
*  [Retrieve detailed information about a specific order]({{page.baseurl/graphql/queries/customer.html#order-details}})

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

{% include graphql/return.md %}
