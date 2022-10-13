---
group: graphql
title: Gift card product data types
ee_only: True
redirect_from:
  - /guides/v2.4/graphql/product/gift-card-product.html
---

The `GiftCardProduct` data type defines properties of a gift card, including the minimum and maximum values and an array that contains the current and past values on the specific gift card

It implements the following interfaces:

-  [ProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html)
-  [PhysicalProductInterface]({{page.baseurl}}/graphql/interfaces/product-interface.html#PhysicalProductInterface)
-  [CustomizableProductInterface]({{page.baseurl}}/graphql/interfaces/customizable-option-interface.html)
-  [RoutableInterface]({{page.baseurl}}/graphql/interfaces/routable-interface.html)

## GiftCardProduct object

The `GiftCardProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`allow_message` | Boolean | Indicates whether the customer can provide a message to accompany the gift card
`allow_open_amount` | Boolean | Indicates whether customers have the ability to set the value of the gift card
`giftcard_amounts` | [`GiftCardAmounts`] | An array that contains information about the values and ID of a gift card
`gift_card_options` | [CustomizableOptionInterface!]! | An array of gift card options
`giftcard_type` | `GiftCardTypeEnum` | Either VIRTUAL, PHYSICAL, or COMBINED
`is_redeemable` | Boolean | Indicates whether the customer can redeem the value on the card for cash
`lifetime` | Int | The number of days after purchase until the gift card expires. A null value means there is no limit
`message_max_length` | Int | The maximum number of characters a gift card message can contain
`open_amount_max` | Float | The maximum acceptable value of an open amount gift card
`open_amount_min` | Float | The minimum acceptable value of an open amount gift card

## GiftCardAmounts object

The `GiftCardAmounts` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`attribute_id` | Int | An internal attribute ID
`uid` | ID! | The unique ID for a `GiftCardAmounts` object
`value_id` | Int | Deprecated. Use `uid` instead. An ID that is  assigned to each unique gift card amount
`value` | Float | The value of the gift card
`website_value` | Float |The value of the gift card
`website_id` | Int | ID of the website that generated the gift card

## Sample Query

The following query returns information about gift card product `GiftCard25`. (It is not defined in the sample data.)

**Request:**

```graphql
{
  products(filter: { sku: { eq: "GiftCard25" } }) {
    items {
      uid
      __typename
      name
      sku
      ... on GiftCardProduct {
        allow_message
        message_max_length
        allow_open_amount
        open_amount_min
        open_amount_max
        is_returnable
        is_redeemable
        giftcard_type
        giftcard_amounts {
          uid
          website_id
          value
          attribute_id
          website_value
        }
      }
    }
  }
}
```
**Response:**

```json
{
  "data": {
    "products": {
      "items": [
        {
          "uid": "MjA0OQ==",
          "__typename": "GiftCardProduct",
          "name": "GiftCard25",
          "sku": "GiftCard25",
          "allow_message": true,
          "message_max_length": 255,
          "allow_open_amount": false,
          "open_amount_min": null,
          "open_amount_max": null,
          "is_returnable": "2",
          "is_redeemable": true,
          "giftcard_type": "VIRTUAL",
          "giftcard_amounts": [
            {
              "value_id": "Mg==",
              "website_id": 0,
              "value": 25,
              "attribute_id": 129,
              "website_value": 25
            }
          ]
        }
      ]
    }
  }
}
```

## Related topics

-  [applyGiftCardToCart mutation]({{page.baseurl}}/graphql/mutations/apply-giftcard.html)
-  [redeemGiftCardBalanceAsStoreCredit mutation]({{page.baseurl}}/graphql/mutations/redeem-giftcard-balance.html)
-  [removeGiftCardFromCart mutation]({{page.baseurl}}/graphql/mutations/remove-giftcard.html)
