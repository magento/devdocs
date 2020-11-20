---
group: graphql
title: addReturnTracking mutation
---

The `addReturnTracking` mutation adds customer-entered shipping tracking information to the specified return request. Use the `available_shipping_carriers` object in the [`customer` query]({{page.baseurl}}/graphql/queries/customer.html) to retrieve valid `carrier_uid` values.

## Syntax

```graphql
mutation: {
    addReturnTracking(input: AddReturnTrackingInput!): AddReturnTrackingOutput
}
```

## Example usage

The following example adds the shipping carrier and a tracking number for the specified return request.

**Request:**

```graphql
mutation{
  addReturnTracking(input: {
    return_uid: "Mw=="
    carrier_uid: "dXBzLTE="
    tracking_number: "1Z9876543"
  }){
    return_shipping_tracking {
      uid
      carrier {
        uid
        label
      }
      tracking_number
    }
  }
}
```

**Response:**

```json
{
  "data": {
    "addReturnTracking": {
      "return_shipping_tracking": {
        "uid": "Mw==",
        "carrier": {
          "uid": "dXBzLTE=",
          "label": "United Parcel Service"
        },
        "tracking_number": "1Z9876543"
      }
    }
  }
}
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

## Related topics

*  [`requestReturn` mutation]({{page.baseurl}}/graphql/mutations/request-return.html)
*  [`addReturnComment` mutation]({{page.baseurl}}/graphql/mutations/add-return-comment.html)
*  [`removeReturnTracking` mutation]({{page.baseurl}}/graphql/mutations/remove-return-tracking.html)
