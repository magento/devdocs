---
group: b2b-developer-guide
title: Update a negotiable quote
ee_only: true
functional_areas:
  - B2B
  - Integration
---

Sellers and buyers can edit a negotiable quote at various times during the quote's lifecycle. Both use the `PUT /V1/negotiableQuote/:quoteId` call to update the quote. This call is defined in the
`quoteCartRepositoryV1` service and is functionally similar to the
`PUT /V1/carts/mine` call.

The `quote` object now contains a set of `negotiable_quote` extension attributes that can be used to update a quote.

Name | Description | Format | Requirements
--- | --- | --- | ---
`quote_id` | Negotiable quote ID | integer | Required to create or update a negotiable quote
`is_regular_quote` | Flag for the negotiable quote | boolean | Optional
`status` | One of `created`, `submitted_by_customer`, `submitted_by_admin`, `processing_by_customer`, `processing_by_admin`, `ordered`, `expired`, `declined`, `closed` | string | Optional
`negotiated_price_type` | 1 - Percentage discount; 2 - Fixed price; 3 - proposed total | integer | Required to set a negotiated price
`negotiated_price_value` | Discount amount defined by the seller | number | Required to set a negotiated price
`shipping_price` | Custom price for shipping defined by the seller | number | Optional
`quote_name` | Name assigned to the negotiable quote | string | Optional
`expiration_period` | Expiration date for the quote. The format must be `YYYY-MM-DD`. | string | Optional
`email_notification_status`  | Recent notifications that have been sent | integer | Optional
`has_unconfirmed_changes`  | Indicates there are some changes that the Admin has not seen yet | boolean | Optional
`is_shipping_tax_changed`  | Indicates whether shipping taxes have changed | boolean | Optional
`is_customer_price_changed`  | Indicates whether the price for the product has changed | boolean | Optional
`notifications`  | Binary mask where the current notifications are stored | integer | Optional
`applied_rule_ids`  | Applied shopping cart rules | string | Optional
`is_address_draft`  | Drop the address if the checkout is not completed. | boolean | Optional
`deleted_sku`  | The SKUs of any deleted products | string | Optional
`creator_id`  | Quote creator ID | integer | Optional
`creator_type`  | 1 - Integration; 2 - Admin; 3 - Customer; 4 - Guest | integer | Optional
`original_total_price`  | Original total price | number | Optional
`base_original_total_price`  | Base original total price | number | Optional
`negotiated_total_price`  | Negotiated total price | number | Optional
`base_negotiated_total_price`  | Base negotiated total price | number | Optional

### Set a negotiated price

In every successful negotiate quote, the seller must set the negotiated price.

The `negotiated_price_type` can have one of the following values:

`1` - Apply a percentage discount to the quote. The `negotiated_price_value` parameter indicates the percentage.

`2` - Apply a fixed amount as a discount for the quote. The `negotiated_price_value` parameter specifies the amount of the discount.

`3` - Set a proposed price for the entire quote. The `negotiated_price_value` parameter specifies the proposed price.

**Service Name:**

`quoteCartRepositoryV1`

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/negotiableQuote/6`

**Payload:**

```json
{
  "quote": {
      "id": 6,
      "extension_attributes": {
        "negotiable_quote": {
         "negotiated_price_type": 1,
          "negotiated_price_value": 5
        }
      }
    }
}
```

### Add a new quote item to the negotiable quote

The buyer can add, update, or delete items from the quote under the following conditions:

*  The quote is in one of the following system states: `created`, `processing_by_admin`, or `submitted_by_customer`.
*  The quote doesn't have a negotiated price.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/carts/mine/items`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload:**

```json
{
  "cartItem": {
    "sku": "24-MB01",
    "qty": 1,
    "quote_id": "7"
  }
}
```

**Response:**

```json
{
    "item_id": 18,
    "sku": "24-MB01",
    "qty": 1,
    "name": "Joust Duffle Bag",
    "price": 34,
    "product_type": "simple",
    "quote_id": "7",
    "extension_attributes": {
        "negotiable_quote_item": {
            "item_id": 18,
            "original_price": 34,
            "original_tax_amount": 0,
            "original_discount_amount": 0
        }
    }
}
```

### Change the quote expiration date

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/negotiableQuote/6`

**Payload:**

```json
{
  "quote": {
      "id": 6,
      "extension_attributes": {
        "negotiable_quote": {
         "expiration_period": "2017-09-30"
        }
      }
    }
}
```

**Response:**

`[]`

## Related information

*  [Integrate with the NegotiableQuote module]({{ page.baseurl }}/b2b/negotiable-quote.html)
*  [Manage negotiable quotes]({{ page.baseurl }}/b2b/negotiable-manage.html)
*  [Negotiable quote checkout]({{ page.baseurl }}/b2b/negotiable-checkout.html)
*  [Place a negotiable quote order]({{ page.baseurl }}/b2b/negotiable-order-workflow.html)
