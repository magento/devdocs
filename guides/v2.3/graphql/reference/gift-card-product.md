---
group: graphql
title: GiftCardProduct endpoint
version: 2.3
github_link: graphql/reference/gift-card-product.md
---

The `GiftCardProduct` endpoint defines which gift card-specific attributes are returned when performing a `products` search.

## GiftCardProduct object

Field | Type | Description
--- | --- | ---
`giftcard_amounts` |  `GiftCardAmounts` | An array that contains information about the values and ID of a gift card.
`allow_open_amount` | Boolean | Indicates whether customers have the ability to set the value of the gift card.
`open_amount_min` | Float | The minimum acceptable value of an open amount gift card.
`open_amount_max` | Float | The maximum acceptable value of an open amount gift card.
`giftcard_type`"  | `GiftCardTypeEnum` | Either VIRTUAL, PHYSICAL, or COMBINED
`is_redeemable` | Boolean | Indicates whether the customer can redeem the value on the card for cash.
`lifetime` | Int | The number of days after purchase until the gift card expires. A null value means there is no limit.
`allow_message` | Boolean | Indicates whether the customer can provide a message to accompany the gift card.
`message_max_length` | Int | The maximum number of characters a gift card message can contain
`color` | Int | The color of the product
`size` |  String | The size of the product
`manufacturer` | Int | The manufacturer of the product

## GiftCardAmounts object

Field | Type | Description
--- | --- | ---
`value_id` | Int | An ID that is  assigned to each unique gift card amount.
website_id` | Int | ID of the website that generated the gift card
`value` | Float | The value of the gift card
`attribute_id` | Int | An internal attribute ID.
`website_value` | Float |The value of the gift card

## Sample Query

The following query returns information about gift card product `GiftCard25`. (It is not defined in the sample data.)

{% highlight json %}
{
   products(filter: {sku: {eq: "GiftCard25"}})
   {
       items{
           id
           type_id
           name
           sku
           }
           ... on GiftCardProduct {
            allow_message
            message_max_length
            allow_open_amount
            open_amount_min
            open_amount_max
            is_returnable
            is_redeemable
            giftcard_type
            giftcard_amounts{
              value_id
              website_id
              value
              attribute_id
              website_value
           }
       }
   }
}
{% endhighlight %}
