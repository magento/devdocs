---
group: b2b-developer-guide
title: Negotiable quote checkout
ee_only: true
functional_areas:
  - B2B
  - Integration
---

When the seller and buyer user agree on the quoted products and their prices, the negotiated quote is ready to be converted to an order.

During the standard checkout process, Magento refreshes and recalculates all product and shipping prices as well as taxes. This process is different for the quote that has a negotiated price (discounted offer from the seller). The system keeps the quoted price, but checks the tax amounts. If the tax amounts are outdated, Magento recalculates them and updates the quote totals. These tax adjustments can change the order grand total. The order and invoice are created with the recalculated taxes and new grand total. All other prices in the quote remain unchanged.

The same rule is applied when the quote has the proposed shipping price and the shipping taxes change on the checkout. The buyer pays the updated price, but this does not affect the other quote amounts.

The following diagram illustrates the workflow for {{site.data.var.b2b}} negotiable quote checkouts:

![Checkout process]({{ site.baseurl }}/common/images/b2b/quote-checkout-process.png)

## Manage shipping addresses

A negotiated quote can be initiated without a shipping address. However, before the order can be placed, the shipping address must be provided.

**REST Endpoints:**

```json
POST /V1/negotiable-carts/:cartId/estimate-shipping-methods
POST /V1/negotiable-carts/:cartId/estimate-shipping-methods-by-address-id
POST /V1/negotiable-carts/:cartId/shipping-information
```

### Estimate shipping costs specifying an address

This call takes a full shipping address as input and estimates shipping fees. It returns a list of available shipping methods.

**Service Name:**

`negotiableQuoteShipmentEstimationV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/estimate-shipping-methods`

**Payload:**

```json
{
  "address": {
  "street": [
      "100 Big Tree Avenue"
    ],
  "city": "San Francisco",
  "country_id": "US",
  "region": "California",
  "region_id": "12",
  "postcode": "99999",
  "telephone": "4155551212",
  "firstname": "John",
  "lastname": "Doe"
  }
}
```

**Response:**

```json
[
  {
    "carrier_code": "flatrate",
    "method_code": "flatrate",
    "carrier_title": "Flat Rate",
    "method_title": "Fixed",
    "amount": 5,
    "base_amount": 5,
    "available": true,
    "error_message": "",
    "price_excl_tax": 5,
    "price_incl_tax": 5
  }
]
```

### Estimate shipping costs specifying an address ID

This call takes an address ID as input and estimates shipping fees. It returns a list of available shipping methods.

**Service Name:**

`negotiableQuoteShippingMethodManagementV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/estimate-shipping-methods-by-address-id`

**Payload:**

```json
{
  "addressId": 2
}
```

**Response:**

```json
[
  {
    "carrier_code": "flatrate",
    "method_code": "flatrate",
    "carrier_title": "Flat Rate",
    "method_title": "Fixed",
    "amount": 5,
    "base_amount": 5,
    "available": true,
    "error_message": "",
    "price_excl_tax": 5,
    "price_incl_tax": 5
  }
]
```

### Set the shipping and billing information

In this call, you specify the shipping and billing addresses, as well as the selected `shipping_carrier_code` and `shipping_method_code`. Magento returns a list of payment options and calculates the order totals.

**Service Name:**

`negotiableQuoteShippingMethodManagementV1`

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/shipping-information`

**Payload:**

```json
{
  "addressInformation": {
    "shipping_address": {
      "region": "California",
      "region_id": 12,
      "country_id": "US",
      "street": [
        "100 Big Tree Avenue"
      ],
      "postcode": "99999",
      "city": "San Francisco",
      "telephone": "512-555-1111",
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "billing_address": {
      "region": "New York",
      "region_id": 43,
      "region_code": "NY",
      "country_id": "US",
      "street": [
        "123 Oak Ave"
      ],
      "postcode": "10577",
      "city": "Purchase",
      "firstname": "Jane",
      "lastname": "Doe",
      "email": "jdoe@example.com",
      "telephone": "512-555-1111"
    },
    "shipping_carrier_code": "flatrate",
    "shipping_method_code": "flatrate"
  }
}
```

**Response:**

{% collapsible Show code sample %}

```json
{
  "payment_methods": [
    {
      "code": "checkmo",
      "title": "Check / Money order"
    }
  ],
  "totals": {
    "grand_total": 5.95,
    "base_grand_total": 5.95,
    "subtotal": 0.95,
    "base_subtotal": 0.95,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 0.95,
    "base_subtotal_with_discount": 0.95,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 0.95,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 1,
    "items": [
      {
        "item_id": 13,
        "price": 0.95,
        "base_price": 0.95,
        "qty": 1,
        "row_total": 0.95,
        "base_row_total": 0.95,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 0.95,
        "base_price_incl_tax": 0.95,
        "row_total_incl_tax": 0.95,
        "base_row_total_incl_tax": 0.95,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "extension_attributes": {
          "negotiable_quote_item_totals": {
            "cost": 0,
            "catalog_price": 0.95,
            "base_catalog_price": 0.95,
            "catalog_price_incl_tax": 0.95,
            "base_catalog_price_incl_tax": 0.95,
            "cart_price": 0.95,
            "base_cart_price": 0.95,
            "cart_tax": 0,
            "base_cart_tax": 0,
            "cart_price_incl_tax": 0.95,
            "base_cart_price_incl_tax": 0.95
          }
        },
        "name": "Simple Product 2"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 0.95
      },
      {
        "code": "giftwrapping",
        "title": "Gift Wrapping",
        "value": null,
        "extension_attributes": {
          "gw_item_ids": [],
          "gw_price": "0.00",
          "gw_base_price": "0.00",
          "gw_items_price": "0.00",
          "gw_items_base_price": "0.00",
          "gw_card_price": "0.00",
          "gw_card_base_price": "0.00",
          "gw_base_tax_amount": "0.00",
          "gw_tax_amount": "0.00",
          "gw_items_base_tax_amount": "0.00",
          "gw_items_tax_amount": "0.00",
          "gw_card_base_tax_amount": "0.00",
          "gw_card_tax_amount": "0.00",
          "gw_price_incl_tax": "0.00",
          "gw_base_price_incl_tax": "0.00",
          "gw_card_price_incl_tax": "0.00",
          "gw_card_base_price_incl_tax": "0.00",
          "gw_items_price_incl_tax": "0.00",
          "gw_items_base_price_incl_tax": "0.00"
        }
      },
      {
        "code": "shipping",
        "title": "Shipping & Handling (Flat Rate - Fixed)",
        "value": 5
      },
      {
        "code": "tax",
        "title": "Tax",
        "value": 0,
        "extension_attributes": {
          "tax_grandtotal_details": []
        }
      },
      {
        "code": "grand_total",
        "title": "Grand Total",
        "value": 5.95,
        "area": "footer"
      },
      {
        "code": "customerbalance",
        "title": "Store Credit",
        "value": 0
      },
      {
        "code": "reward",
        "title": "0 Reward points",
        "value": 0
      }
    ],
    "extension_attributes": {
      "negotiable_quote_totals": {
        "items_count": 1,
        "quote_status": "submitted_by_admin",
        "created_at": "2017-05-30 20:41:00",
        "updated_at": "2017-05-30 20:41:00",
        "customer_group": 10,
        "base_to_quote_rate": 1,
        "cost_total": 0,
        "base_cost_total": 0,
        "original_total": 0.95,
        "base_original_total": 0.95,
        "original_tax": 0,
        "base_original_tax": 0,
        "original_price_incl_tax": 0.95,
        "base_original_price_incl_tax": 0.95,
        "negotiated_price_type": null,
        "negotiated_price_value": null
      },
      "reward_points_balance": 0,
      "reward_currency_amount": 0,
      "base_reward_currency_amount": 0
    }
  }
}
```

{% endcollapsible %}

## Manage billing addresses

If the billing address isn't provided through another call, use the `POST /V1/negotiable-carts/:cartId/billing-address` to specify it.

**Service Name:**

`negotiableQuoteBillingAddressManagementV1`

**REST Endpoints:**

```json
POST /V1/negotiable-carts/:cartId/billing-address
GET /V1/negotiable-carts/:cartId/billing-address
```

### Set the billing address

This call assigns a billing address to the specified negotiable quote.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/billing-address`

**Payload:**

```json
{  "address": {
      "region": "New York",
      "region_id": 43,
      "region_code": "NY",
      "country_id": "US",
      "street": [
        "123 Oak Ave"
        ],
      "postcode": "10577",
      "city": "Purchase",
      "firstname": "Jane",
      "lastname": "Doe",
      "customer_id": 4,
      "email": "jdoe@example.com",
      "telephone": "(512) 555-1111",
      "same_as_billing": 1
  }
}
```

**Response:**

[]

### Return the billing address

This call returns the billing address for the specified negotiable quote.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/negotiable-carts/86/billing-address`

**Payload:**

Not applicable

**Response:**

```json
{
  "id": 192,
  "region": "New York",
  "region_id": 43,
  "region_code": "NY",
  "country_id": "US",
  "street": [
    "123 Oak Ave"
  ],
  "telephone": "(512) 555-1111",
  "postcode": "10577",
  "city": "Purchase",
  "firstname": "Jane",
  "lastname": "Doe",
  "customer_id": 1,
  "email": "jdoe@example.com",
  "same_as_billing": 0,
  "save_in_address_book": 0
}
```

## Manage cart coupons

B2B allows coupons to be used toward payment.

**Service Name:**

`negotiableQuoteCouponManagementV1`

**REST Endpoints:**

```json
PUT /V1/negotiable-carts/:cartId/coupons/:couponCode
DELETE /V1/negotiable-carts/:cartId/coupons
```

### Apply a coupon to a negotiable quote

If the initial quote applies a coupon to the totals, Magento ignores the coupon when it converts the quote to a negotiable quote. However, you can apply a coupon at checkout.

**Sample Usage:**

`PUT <host>/rest/<store_code>/V1/negotiable-carts/6/coupons/SAVE5`

**Payload:**

Not applicable

**Response:**

`true`, indicting the request was successful

## Manage gift cards

B2B allows gift cards to be used as payment.

**Service Name:**

`negotiableQuoteGiftCardAccountManagementV1`

**REST Endpoints:**

```json
POST /V1/negotiable-carts/:cartId/giftCards
DELETE /V1/negotiable-carts/:cartId/giftCards/:giftCardCode
```

### Apply a gift card to a negotiable quote

If the initial quote applies a gift card to the totals, Magento ignores the gift card when it converts the quote to a negotiable quote. However, you can apply a gift card at checkout.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/6/giftCards`

**Payload:**

```json
{
  "giftCardAccountData": {
    "gift_cards": [
      "00HELHQED6RV"
    ]
  }
}
```

**Response:**

`true`

### Delete a gift card from at checkout

This call removes a gift card that has been applied to a negotiable quote.

**Sample Usage:**

`DELETE <host>/rest/<store_code>/V1/negotiable-carts/6/giftCards/00HELHQED6RV`

**Payload:**

Not applicable

**Response:**

`true`, indicating the request was successful

## Manage payment information

When you submit payment information, Magento creates an order and sends an order confirmation to the buyer.

**Service Name:**

`negotiableQuotePaymentInformationManagementV1`

**REST Endpoints:**

```json
POST /V1/negotiable-carts/:cartId/payment-information
GET /V1/negotiable-carts/:cartId/payment-information
POST /V1/negotiable-carts/:cartId/set-payment-information
```

### Set payment information without placing the order

This call sets payment information and the billing address for the negotiable quote. However, Magento does not create an order afterward.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/set-payment-information`

**Payload:**

```json
{  "paymentMethod": {
   "po_number": "A123456",
   "method": "checkmo"
  },
  "billing_address": {
   "region": "New York",
    "region_id": 43,
    "region_code": "NY",
    "country_id": "US",
    "street": [
      "123 Oak Ave"
    ],
    "postcode": "10577",
    "city": "Purchase",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jdoe@example.com",
    "telephone": "512-555-1111"
  }
}
```

**Response:**

`true`, indicating the payment information was set

### Set payment information and place the order

This call sets payment information and the billing address for the negotiable quote, then creates an order.

**Sample Usage:**

`POST <host>/rest/<store_code>/V1/negotiable-carts/86/payment-information`

**Payload:**

```json
{  "paymentMethod": {
    "po_number": "A123456",
    "method": "checkmo"
  },
  "billing_address": {
   "region": "New York",
    "region_id": 43,
    "region_code": "NY",
    "country_id": "US",
    "street": [
      "123 Oak Ave"
    ],
    "postcode": "10577",
    "city": "Purchase",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "jdoe@example.com",
    "telephone": "512-555-1111"
  }
}
```

**Response:**

An order ID, such as `83`

### Return payment information

This call returns returns payment information and all information from the `totals` object.

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/negotiable-carts/86/payment-information`

**Payload:**

Not applicable

**Response:**

{% collapsible Show code sample %}

```json
{
  "payment_methods": [
    {
      "code": "checkmo",
      "title": "Check / Money order"
    }
  ],
  "totals": {
    "grand_total": 5.95,
    "base_grand_total": 5.95,
    "subtotal": 0.95,
    "base_subtotal": 0.95,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 0.95,
    "base_subtotal_with_discount": 0.95,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 0.95,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 1,
    "items": [
      {
        "item_id": 13,
        "price": 0.95,
        "base_price": 0.95,
        "qty": 1,
        "row_total": 0.95,
        "base_row_total": 0.95,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 0.95,
        "base_price_incl_tax": 0.95,
        "row_total_incl_tax": 0.95,
        "base_row_total_incl_tax": 0.95,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "extension_attributes": {
          "negotiable_quote_item_totals": {
            "cost": 0,
            "catalog_price": 0.95,
            "base_catalog_price": 0.95,
            "catalog_price_incl_tax": 0.95,
            "base_catalog_price_incl_tax": 0.95,
            "cart_price": 0.95,
            "base_cart_price": 0.95,
            "cart_tax": 0,
            "base_cart_tax": 0,
            "cart_price_incl_tax": 0.95,
            "base_cart_price_incl_tax": 0.95
          }
        },
        "name": "Simple Product 2"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 0.95
      },
      {
        "code": "giftwrapping",
        "title": "Gift Wrapping",
        "value": null,
        "extension_attributes": {
          "gw_item_ids": [],
          "gw_price": "0.00",
          "gw_base_price": "0.00",
          "gw_items_price": "0.00",
          "gw_items_base_price": "0.00",
          "gw_card_price": "0.00",
          "gw_card_base_price": "0.00",
          "gw_base_tax_amount": "0.00",
          "gw_tax_amount": "0.00",
          "gw_items_base_tax_amount": "0.00",
          "gw_items_tax_amount": "0.00",
          "gw_card_base_tax_amount": "0.00",
          "gw_card_tax_amount": "0.00",
          "gw_price_incl_tax": "0.00",
          "gw_base_price_incl_tax": "0.00",
          "gw_card_price_incl_tax": "0.00",
          "gw_card_base_price_incl_tax": "0.00",
          "gw_items_price_incl_tax": "0.00",
          "gw_items_base_price_incl_tax": "0.00"
        }
      },
      {
        "code": "shipping",
        "title": "Shipping & Handling (Flat Rate - Fixed)",
        "value": 5
      },
      {
        "code": "tax",
        "title": "Tax",
        "value": 0,
        "extension_attributes": {
          "tax_grandtotal_details": []
        }
      },
      {
        "code": "grand_total",
        "title": "Grand Total",
        "value": 5.95,
        "area": "footer"
      },
      {
        "code": "customerbalance",
        "title": "Store Credit",
        "value": 0
      },
      {
        "code": "reward",
        "title": "0 Reward points",
        "value": 0
      }
    ],
    "extension_attributes": {
      "negotiable_quote_totals": {
        "items_count": 1,
        "quote_status": "submitted_by_admin",
        "created_at": "2017-05-30 20:41:00",
        "updated_at": "2017-06-09 20:26:49",
        "customer_group": 10,
        "base_to_quote_rate": 1,
        "cost_total": 0,
        "base_cost_total": 0,
        "original_total": 0.95,
        "base_original_total": 0.95,
        "original_tax": 0,
        "base_original_tax": 0,
        "original_price_incl_tax": 0.95,
        "base_original_price_incl_tax": 0.95,
        "negotiated_price_type": null,
        "negotiated_price_value": null
      },
      "reward_points_balance": 0,
      "reward_currency_amount": 0,
      "base_reward_currency_amount": 0
    }
  }
}
```

{% endcollapsible %}

## Review cart totals

This call is similar to `GET /V1/negotiable-carts/:cartId/payment-information`, except it does not return payment information.

**Service Name:**

`negotiableQuoteCartTotalRepositoryV1`

**REST Endpoints:**

```json
GET /V1/negotiable-carts/:cartId/totals
```

**Sample Usage:**

`GET <host>/rest/<store_code>/V1/negotiable-carts/86/totals`

**Payload:**

Not applicable

**Response:**

{% collapsible Show code sample %}

```json
{
  "totals": {
    "grand_total": 5.95,
    "base_grand_total": 5.95,
    "subtotal": 0.95,
    "base_subtotal": 0.95,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 0.95,
    "base_subtotal_with_discount": 0.95,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 0.95,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 1,
    "items": [
      {
        "item_id": 13,
        "price": 0.95,
        "base_price": 0.95,
        "qty": 1,
        "row_total": 0.95,
        "base_row_total": 0.95,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 0.95,
        "base_price_incl_tax": 0.95,
        "row_total_incl_tax": 0.95,
        "base_row_total_incl_tax": 0.95,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "extension_attributes": {
          "negotiable_quote_item_totals": {
            "cost": 0,
            "catalog_price": 0.95,
            "base_catalog_price": 0.95,
            "catalog_price_incl_tax": 0.95,
            "base_catalog_price_incl_tax": 0.95,
            "cart_price": 0.95,
            "base_cart_price": 0.95,
            "cart_tax": 0,
            "base_cart_tax": 0,
            "cart_price_incl_tax": 0.95,
            "base_cart_price_incl_tax": 0.95
          }
        },
        "name": "Simple Product 2"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 0.95
      },
      {
        "code": "giftwrapping",
        "title": "Gift Wrapping",
        "value": null,
        "extension_attributes": {
          "gw_item_ids": [],
          "gw_price": "0.00",
          "gw_base_price": "0.00",
          "gw_items_price": "0.00",
          "gw_items_base_price": "0.00",
          "gw_card_price": "0.00",
          "gw_card_base_price": "0.00",
          "gw_base_tax_amount": "0.00",
          "gw_tax_amount": "0.00",
          "gw_items_base_tax_amount": "0.00",
          "gw_items_tax_amount": "0.00",
          "gw_card_base_tax_amount": "0.00",
          "gw_card_tax_amount": "0.00",
          "gw_price_incl_tax": "0.00",
          "gw_base_price_incl_tax": "0.00",
          "gw_card_price_incl_tax": "0.00",
          "gw_card_base_price_incl_tax": "0.00",
          "gw_items_price_incl_tax": "0.00",
          "gw_items_base_price_incl_tax": "0.00"
        }
      },
      {
        "code": "shipping",
        "title": "Shipping & Handling (Flat Rate - Fixed)",
        "value": 5
      },
      {
        "code": "tax",
        "title": "Tax",
        "value": 0,
        "extension_attributes": {
          "tax_grandtotal_details": []
        }
      },
      {
        "code": "grand_total",
        "title": "Grand Total",
        "value": 5.95,
        "area": "footer"
      },
      {
        "code": "customerbalance",
        "title": "Store Credit",
        "value": 0
      },
      {
        "code": "reward",
        "title": "0 Reward points",
        "value": 0
      }
    ],
    "extension_attributes": {
      "negotiable_quote_totals": {
        "items_count": 1,
        "quote_status": "submitted_by_admin",
        "created_at": "2017-05-30 20:41:00",
        "updated_at": "2017-06-09 20:26:49",
        "customer_group": 10,
        "base_to_quote_rate": 1,
        "cost_total": 0,
        "base_cost_total": 0,
        "original_total": 0.95,
        "base_original_total": 0.95,
        "original_tax": 0,
        "base_original_tax": 0,
        "original_price_incl_tax": 0.95,
        "base_original_price_incl_tax": 0.95,
        "negotiated_price_type": null,
        "negotiated_price_value": null
      },
      "reward_points_balance": 0,
      "reward_currency_amount": 0,
      "base_reward_currency_amount": 0
    }
  }
}
```

{% endcollapsible %}

## Related information

*  [Integrate with the NegotiableQuote module]({{ page.baseurl }}/b2b/negotiable-quote.html)
*  [Manage negotiable quotes]({{ page.baseurl }}/b2b/negotiable-manage.html)
*  [Update a negotiable quote]({{ page.baseurl }}/b2b/negotiable-update.html)
*  [Place a negotiable quote order]({{ page.baseurl }}/b2b/negotiable-order-workflow.html)
