---
layout: tutorial
group: rest-api
subgroup:
title: Step 6. Prepare for checkout
subtitle: Order Processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 6
level3_subgroup: order-tutorial
functional_areas:
  - Integration
  - Orders
  - Sales
  - Checkout
---

Now that all the items have been added to the cart, we can prepare the order for [checkout](https://glossary.magento.com/checkout). This process includes the following steps:

*  Estimate shipping costs
*  Set shipping and billing information

### Estimate shipping costs {#estimate-shipping}

Magento calculates shipping costs for each shipping method that can be applied to the order. In this tutorial, the `flatrate` ($5 per item) and `tablerate` shipping methods are active.

{:.bs-callout-info}
Use the `V1/guest-carts/<cartId>/estimate-shipping-methods` endpoint to estimate shipping costs on behalf of a guest. Do not include an authorization token.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/estimate-shipping-methods`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

The payload contains the shipping address.

{% collapsible Show code sample %}

```json
{
  "address": {
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

{% endcollapsible %}

**Response:**

Note that the cost for the `flatrate` shipping method is $15. The Sprite Yoga Companion Kit bundled product counts as one item. The Advanced Pilates & Yoga item does not have a shipping charge because the customer downloads this item.

{% collapsible Show code sample %}

```json
[
  {
    "carrier_code": "flatrate",
    "method_code": "flatrate",
    "carrier_title": "Flat Rate",
    "method_title": "Fixed",
    "amount": 15,
    "base_amount": 15,
    "available": true,
    "error_message": "",
    "price_excl_tax": 15,
    "price_incl_tax": 15
  },
  {
    "carrier_code": "tablerate",
    "method_code": "bestway",
    "carrier_title": "Best Way",
    "method_title": "Table Rate",
    "amount": 5,
    "base_amount": 5,
    "available": true,
    "error_message": "",
    "price_excl_tax": 5,
    "price_incl_tax": 5
  }
]
```

{% endcollapsible %}

### Set shipping and billing information {#set-addresses}

In this call, you specify the shipping and billing addresses, as well as the selected `carrier_code` and `method_code`. Since the Table Rate shipping method costs only $5, the customer selected this option.

Magento returns a list of payment options and calculates the order totals.

{:.bs-callout-info}
Use the `V1/guest-carts/<cartId>/shipping-information` endpoint to set the billing and shipping information on behalf of a guest. Do not include an authorization token.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/shipping-information`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

{% collapsible Show code sample %}

```json
{
  "addressInformation": {
    "shipping_address": {
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
    "shipping_carrier_code": "tablerate",
    "shipping_method_code": "bestway"
  }
}
```

{% endcollapsible %}

**Response:**

The subtotal of the order is $160, and shipping charges are $5. The grand total is $165.

The available payment methods are `banktransfer` and `checkmo`. The customer will specify a [payment method](https://glossary.magento.com/payment-method) in the next step.

{% collapsible Show code sample %}

```json
{
  "payment_methods": [
    {
      "code": "cashondelivery",
      "title": "Cash On Delivery"
    },
    {
      "code": "banktransfer",
      "title": "Bank Transfer Payment"
    },
    {
      "code": "purchaseorder",
      "title": "Purchase Order"
    },
    {
      "code": "checkmo",
      "title": "Check / Money order"
    }
  ],
  "totals": {
    "grand_total": 165,
    "base_grand_total": 165,
    "subtotal": 160,
    "base_subtotal": 160,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 160,
    "base_subtotal_with_discount": 160,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 160,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 4,
    "items": [
      {
        "item_id": 6,
        "price": 22,
        "base_price": 22,
        "qty": 1,
        "row_total": 22,
        "base_row_total": 22,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 22,
        "base_price_incl_tax": 22,
        "row_total_incl_tax": 22,
        "base_row_total_incl_tax": 22,
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Radiant Tee-M-Orange"
      },
      {
        "item_id": 7,
        "price": 18,
        "base_price": 18,
        "qty": 1,
        "row_total": 18,
        "base_row_total": 18,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 18,
        "base_price_incl_tax": 18,
        "row_total_incl_tax": 18,
        "base_row_total_incl_tax": 18,
        "options": "[{\"value\":\"Advanced Pilates & Yoga (Strength)\",\"label\":\"Downloads\"}]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Advanced Pilates & Yoga (Strength)"
      },
      {
        "item_id": 8,
        "price": 68,
        "base_price": 68,
        "qty": 1,
        "row_total": 68,
        "base_row_total": 68,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 68,
        "base_price_incl_tax": 68,
        "row_total_incl_tax": 68,
        "base_row_total_incl_tax": 68,
        "options": "[{\"value\":\"1 x Sprite Stasis Ball 65 cm <span class=\\\"price\\\">$27.00<\\/span>\",\"label\":\"Sprite Stasis Ball\"},{\"value\":\"1 x Sprite Foam Yoga Brick <span class=\\\"price\\\">$5.00<\\/span>\",\"label\":\"Sprite Foam Yoga Brick\"},{\"value\":\"1 x Sprite Yoga Strap 8 foot <span class=\\\"price\\\">$17.00<\\/span>\",\"label\":\"Sprite Yoga Strap\"},{\"value\":\"1 x Sprite Foam Roller <span class=\\\"price\\\">$19.00<\\/span>\",\"label\":\"Sprite Foam Roller\"}]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Sprite Yoga Companion Kit"
      },
      {
        "item_id": 13,
        "price": 52,
        "base_price": 52,
        "qty": 1,
        "row_total": 52,
        "base_row_total": 52,
        "row_total_with_discount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "tax_percent": 0,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "discount_percent": 0,
        "price_incl_tax": 52,
        "base_price_incl_tax": 52,
        "row_total_incl_tax": 52,
        "base_row_total_incl_tax": 52,
        "options": "[{\"value\":\"Gray\",\"label\":\"Color\"},{\"value\":\"S\",\"label\":\"Size\"}]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Chaz Kangeroo Hoodie"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 160
      },
      {
        "code": "shipping",
        "title": "Shipping & Handling (Best Way - Table Rate)",
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
        "value": 165,
        "area": "footer"
      }
    ]
  }
}
```

{% endcollapsible %}

{:.bs-callout-info}
If you tried this call on your own, and the value of the `shipping_amount` parameter is `0`, then you did not deactivate the "Spend $50 or more - shipping is free!" cart price rule. See [Deactivate a cart price rule](order-config-store.html#price-rule) for details.

### Verify this step {#verify-step}

[Sign in](https://glossary.magento.com/sign-in-sign-out) as the customer and go to the checkout page.

The payment method is Bank Transfer, the billing and shipping addresses are displayed, and the shipping charges have been calculated.
