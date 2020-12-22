---
layout: tutorial
group: rest-api
title: Step 8. Prepare for checkout
subtitle: Order processing with Inventory Management
menu_title: Step 8. Prepare for checkout
menu_order: 80
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Now that all the items have been added to the cart, we can prepare the quote for [checkout](https://glossary.magento.com/checkout). This process includes the following steps:

*  Estimate shipping costs
*  Set shipping and billing information

### Estimate shipping costs {#estimate-shipping}

Magento calculates shipping costs for each shipping method that can be applied to the order. In this tutorial, the `flatrate` ($5 per item) shipping method is active.

**Endpoint:**

`POST <host>/rest/us/V1/carts/mine/estimate-shipping-methods`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload:**

The payload contains the shipping address.

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
      "customer_id": 5,
      "email": "jdoe@example.com",
      "telephone": "(512) 555-1111",
      "same_as_billing": 1
  }
}
```

**Response:**

The cost for the `flatrate` shipping method is $350 (70 items x $5 each). The downloadable item does not have a shipping charge because it is not a physical product.

```json
[
    {
        "carrier_code": "flatrate",
        "method_code": "flatrate",
        "carrier_title": "Flat Rate",
        "method_title": "Fixed",
        "amount": 350,
        "base_amount": 350,
        "available": true,
        "error_message": "",
        "price_excl_tax": 350,
        "price_incl_tax": 350
    }
]
```

### Set shipping and billing information {#set-addresses}

In this call, you specify the shipping and billing addresses, as well as the selected `carrier_code` and `method_code`. The customer has selected the Flat Rate shipping method.

Magento returns a list of payment options and calculates the order totals.

**Endpoint:**

`POST <host>/rest/us/V1/carts/mine/shipping-information`

**Scope:**

`us` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload:**

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
    "shipping_carrier_code": "flatrate",
    "shipping_method_code": "flatrate"
    }
}
```

**Response:**

The subtotal of the order is $2462, and shipping charges are $350. The grand total is $2812.

The available payment methods are `banktransfer` and `checkmo`. The customer will specify a [payment method](https://glossary.magento.com/payment-method) in the next step.

```json
{
    "payment_methods": [
        {
            "code": "banktransfer",
            "title": "Bank Transfer Payment"
        },
        {
            "code": "checkmo",
            "title": "Check / Money order"
        }
    ],
    "totals": {
        "grand_total": 2812,
        "base_grand_total": 2812,
        "subtotal": 2462,
        "base_subtotal": 2462,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "subtotal_with_discount": 2462,
        "base_subtotal_with_discount": 2462,
        "shipping_amount": 350,
        "base_shipping_amount": 350,
        "shipping_discount_amount": 0,
        "base_shipping_discount_amount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "weee_tax_applied_amount": null,
        "shipping_tax_amount": 0,
        "base_shipping_tax_amount": 0,
        "subtotal_incl_tax": 2462,
        "shipping_incl_tax": 350,
        "base_shipping_incl_tax": 350,
        "base_currency_code": "USD",
        "quote_currency_code": "USD",
        "items_qty": 71,
        "items": [
            {
                "item_id": 5,
                "price": 32,
                "base_price": 32,
                "qty": 20,
                "row_total": 640,
                "base_row_total": 640,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 32,
                "base_price_incl_tax": 32,
                "row_total_incl_tax": 640,
                "base_row_total_incl_tax": 640,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Voyage Yoga Bag"
            },
            {
                "item_id": 6,
                "price": 36,
                "base_price": 36,
                "qty": 50,
                "row_total": 1800,
                "base_row_total": 1800,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 36,
                "base_price_incl_tax": 36,
                "row_total_incl_tax": 1800,
                "base_row_total_incl_tax": 1800,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Driven Backpack"
            },
            {
                "item_id": 7,
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
                "options": "[{\"value\":\"Yoga Adventure\",\"label\":\"Downloads\"}]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Yoga Adventure"
            }
        ],
        "total_segments": [
            {
                "code": "subtotal",
                "title": "Subtotal",
                "value": 2462
            },
            {
                "code": "giftwrapping",
                "title": "Gift Wrapping",
                "value": null,
                "extension_attributes": {
                    "gw_item_ids": [],
                    "gw_price": "0.0000",
                    "gw_base_price": "0.0000",
                    "gw_items_price": "0.0000",
                    "gw_items_base_price": "0.0000",
                    "gw_card_price": "0.0000",
                    "gw_card_base_price": "0.0000"
                }
            },
            {
                "code": "shipping",
                "title": "Shipping & Handling (Flat Rate - Fixed)",
                "value": 350
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
                "value": 2812,
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
            "reward_points_balance": 0,
            "reward_currency_amount": 0,
            "base_reward_currency_amount": 0
        }
    }
}
```

### Verify this step {#verify-step}

[Sign in](https://glossary.magento.com/sign-in-sign-out) to the US store (`http://<host>/us`) as the customer and go to the checkout page.

The payment method is Bank Transfer, the billing and shipping addresses are displayed, and the shipping charges and shipping charges calculate and display.
