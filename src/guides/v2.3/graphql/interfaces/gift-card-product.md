---
group: graphql
title: Gift card product data types
ee_only: True
redirect_from:
  - /guides/v2.3/graphql/reference/gift-card-product.html
  - /guides/v2.3/graphql/product/gift-card-product.html
---

The `GiftCardProduct` data type defines properties of a gift card, including the minimum and maximum values and an array that contains the current and past values on the specific gift card

It implements the following interfaces:

-  `ProductInterface`
-  `PhysicalProductInterface`
-  `CustomizableProductInterface`

## GiftCardProduct object

The `GiftCardProduct` object contains the following attributes:

Attribute | Type | Description
--- | --- | ---
`allow_message` | Boolean | Indicates whether the customer can provide a message to accompany the gift card
`allow_open_amount` | Boolean | Indicates whether customers have the ability to set the value of the gift card
`giftcard_amounts` | [`GiftCardAmounts`] | An array that contains information about the values and ID of a gift card
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
`value_id` | Int | An ID that is  assigned to each unique gift card amount
`value` | Float | The value of the gift card
`website_value` | Float |The value of the gift card
`website_id` | Int | ID of the website that generated the gift card

## Sample Query

The following query returns information about gift card product `GiftCard25`. (It is not defined in the sample data.)

```graphql
{
  products(filter: { sku: { eq: "GiftCard25" } }) {
    items {
      id
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
          value_id
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

## Related topics

-  [applyGiftCardToCart mutation]({{page.baseurl}}/graphql/mutations/apply-giftcard.html)
-  [redeemGiftCardBalanceAsStoreCredit mutation]({{page.baseurl}}/graphql/mutations/redeem-giftcard-balance.html)
-  [removeGiftCardFromCart mutation]({{page.baseurl}}/graphql/mutations/remove-giftcard.html)
