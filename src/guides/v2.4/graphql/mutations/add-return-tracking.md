---
group: graphql
title: addReturnTracking mutation
---

The `addReturnTracking` mutation adds shipping tracking information to the specified return request.

## Syntax

```graphql
mutation: {
    addReturnTracking(input: AddReturnTrackingInput!): AddReturnTrackingOutput
}
```

## Example usage

The following example

**Request:**

```graphql

```

**Response:**

```json

```

## Input attributes

The `AddReturnTrackingInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`carrier_uid`| ID! | The encoded ID of the selected shipping carrier
`return_uid` | ID! | The encoded ID of the return request
`tracking_number` | String! | The shipping tracking number for this return request

## Output attributes

The `AddReturnTrackingOutput` object contains the following attributes.

Attribute |  Data Type | Description
--- | --- | ---
`return` | [Return](#Return) | Contains details about the modified return
`return_shipping_tracking` | [ReturnShippingTracking](#ReturnShippingTracking) | Contains details about shipping for a return

### Return object {#Return}

{% include graphql/return.md %}
