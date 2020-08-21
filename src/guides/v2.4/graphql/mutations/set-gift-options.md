---
group: graphql
title: setGiftOptionsOnCart mutation
---

The `setGiftOptionsOnCart` mutation allows the buyer to set the following gift options on the cart level:

*  Gift messages
*  Gift wrapping
*  A gift receipt to accompany the order
*  A printed card to accompany the order

{:.bs-callout-info}
Gift messages are a feature of {{site.data.var.ce}}. All other gift options require {{site.data.var.ee}}.

To remove a gift message, set the `gift_message` object to null. To remove gift wrapping, set the `gift_wrapping_id` attribute to null.

Use the [updateCartItems mutation]({{page.baseurl}}/graphql/mutations/update-cart-items.html) to set gift messages and gift wrapping on individual items.

These options are configured on the **Stores** > Configuration > **Sales** > **Sales** > **Gift Options** screen. To determine whether these options are enabled, specify these attributes in the [`storeConfig` query]({{page.baseurl}}/graphql/queries/store-config.html).

*  `allow_gift_receipt`
*  `allow_gift_wrapping_on_order`
*  `allow_printed_card`
*  `cart_gift_wrapping`
*  `cart_printed_card`
*  `printed_card_price`
*  `sales_gift_wrapping`
*  `sales_printed_card`

Gift wrapping is available for simple, configurable, bundle products as well as physical gift cards.

## Syntax

`mutation: {setGiftOptionsOnCart(input: SetGiftOptionsOnCartInput): SetGiftOptionsOnCartOutput}`

## Example usage

The following example adds a gift message, gift wrapping, and a gift receipt to the cart.

**Request:**

```graphql
mutation {
  setGiftOptionsOnCart(
    input: {
      cart_id: "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz"
      gift_message: {
        to: "Alex"
        from: "Veronica"
        message: "Happy Birthday!"
      }
      gift_wrapping_id: "Mg=="
      gift_receipt_included: true
      printed_card_included: false
    }
  ) {
    cart {
      id
      gift_message {
        to
        from
        message
      }
      gift_wrapping {
        id
      }
      gift_receipt_included
      printed_card_included
      items {
        quantity
        prices {
          price {
            value
            currency
          }
        }
      }
      prices {
        gift_options {
          gift_wrapping_for_order {
            value
            currency
          }
        }
        grand_total {
          value
          currency
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
    "setGiftOptionsOnCart": {
      "cart": {
        "id": "8k0Q4MpH2IGahWrTRtqM61YV2MtLPApz",
        "gift_message": {
            "to": "Alex"
            "from": "Veronica"
            "message": "Happy Birthday!"
        }
        "gift_wrapping": {
          "id": "2"
        },
        "gift_receipt_included": true,
        "printed_card_included": false,
        "items": [
          {
            "quantity": 1,
            "prices": {
              "price": {
                "value": 32,
                "currency": "USD"
              }
            }
          },
          {
            "quantity": 1,
            "prices": {
              "price": {
                "value": 84,
                "currency": "USD"
              }
            }
          }
        ],
        "prices": {
          "gift_options": {
            "gift_wrapping_for_order": {
              "value": 7,
              "currency": "USD"
            }
          },
          "grand_total": {
            "value": 132.57,
            "currency": "USD"
          }
        }
      }
    }
  }
}
```

## Input attributes

The `SetGiftOptionsOnCartInput` object can contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`cart_id` | String! | The unique ID that identifies the shopper's cart
`gift_message` | [GiftMessageInput](#GiftMessageInput) | Gift message details for the cart
`gift_receipt_included` | Boolean! | Indicates whether the customer requested a gift receipt for the cart
`gift_wrapping_id` | ID | The unique identifier of the gift wrapping to be used for the cart
`printed_card_included` | Boolean! | Indicates whether the customer requested a printed card for the cart

### GiftMessageInput {#GiftMessageInput}

The `GiftMessageInput` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`from` | String! | The name of the gift sender
`message` | String! | The text of the gift message
`to` | String! | The name of the gift recipient

## Output attributes

The `SetGiftOptionsOnCartOutput` object contains the `Cart` object.

Attribute |  Data Type | Description
--- | --- | ---
`cart` |[Cart!](#CartObject) | Describes the contents of the specified shopping cart

### Cart object {#CartObject}

{% include graphql/cart-object-24.md %}

[Cart query output]({{page.baseurl}}/graphql/queries/cart.html#cart-output) provides more information about the `Cart` object.
