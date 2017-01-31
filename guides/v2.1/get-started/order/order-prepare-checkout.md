---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 7. Prepare for checkout
menu_order: 26
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-prepare-checkout.md
---

Previous Step: [Add items to the cart]({{page.baseurl}}/get-started/order/order-add-items.html) | Next step: [Create an invoice]({{page.baseurl}}/get-started/order/order-create-order.html)


## Step 7. Prepare for checkout {#prepare-checkout}

Now that all the items have been added to the cart, we can prepare the order for checkout. This process includes the following steps:

* Estimate shipping costs
* Set shipping and billing information

### 1. Estimate shipping costs {#estimate-shipping}

Magento calculates shipping costs for each shipping method that can be applied to the order. In this tutorial, the `flatrate` ($5 per item) and `tablerate` shipping methods are active.

**Endpoint**

`POST V1/carts/mine/estimate-shipping-methods`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

The payload contains the shipping address.

{% collapsible Click to show/hide %}
{% highlight json %}
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
{% endhighlight %}
{% endcollapsible %}

**Response**

Note that the cost for the `flatrate` shipping method is $10. The Sprite Yoga Companion Kit bundled product counts as one item. The Advanced Pilates & Yoga item does not have a shipping charge because the customer downloads this item.

{% collapsible Click to show/hide %}
{% highlight json %}

[
  {
    "carrier_code": "flatrate",
    "method_code": "flatrate",
    "carrier_title": "Flat Rate",
    "method_title": "Fixed",
    "amount": 10,
    "base_amount": 10,
    "available": true,
    "error_message": "",
    "price_excl_tax": 10,
    "price_incl_tax": 10
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
{% endhighlight %}
{% endcollapsible %}


### 2. Set shipping and billing information {#set-addresses}

In this call, you specify the shipping and billing addresses, as well as the selected `carrier_code` and `method_code`. Since the Table Rate shipping method costs only $5, the customer selected this option.

Magento returns a list of payment options and calculates the order totals.

**Endpoint**

`POST V1/carts/mine/shipping-information`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**
{% collapsible Click to show/hide %}
{% highlight json %}

{  "addressInformation": {
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
{% endhighlight %}
{% endcollapsible %}

**Response**

The subtotal of the order is $108, and shipping charges are $5. The grand total is $113.

The available payment methods are `banktransfer` and `checkmo`. The customer will specify a payment method in the next step.

{% collapsible Click to show/hide %}
{% highlight json %}

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
    "grand_total": 113,
    "base_grand_total": 113,
    "subtotal": 108,
    "base_subtotal": 108,
    "discount_amount": 0,
    "base_discount_amount": 0,
    "subtotal_with_discount": 108,
    "base_subtotal_with_discount": 108,
    "shipping_amount": 5,
    "base_shipping_amount": 5,
    "shipping_discount_amount": 0,
    "base_shipping_discount_amount": 0,
    "tax_amount": 0,
    "base_tax_amount": 0,
    "weee_tax_applied_amount": null,
    "shipping_tax_amount": 0,
    "base_shipping_tax_amount": 0,
    "subtotal_incl_tax": 108,
    "shipping_incl_tax": 5,
    "base_shipping_incl_tax": 5,
    "base_currency_code": "USD",
    "quote_currency_code": "USD",
    "items_qty": 3,
    "items": [
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
        "options": "[]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Radiant Tee-M-Orange"
      },
      {
        "item_id": 8,
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
        "item_id": 9,
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
        "options": "[{\"value\":\"1 x Sprite Stasis Ball 65 cm <span class=\"price\">$27.00<\\/span>\",\"label\":\"Sprite Stasis Ball\"},{\"value\":\"1 x Sprite Foam Yoga Brick <span class=\"price\">$5.00<\\/span>\",\"label\":\"Sprite Foam Yoga Brick\"},{\"value\":\"1 x Sprite Yoga Strap 8 foot <span class=\"price\">$17.00<\\/span>\",\"label\":\"Sprite Yoga Strap\"},{\"value\":\"1 x Sprite Foam Roller <span class=\"price\">$19.00<\\/span>\",\"label\":\"Sprite Foam Roller\"}]",
        "weee_tax_applied_amount": null,
        "weee_tax_applied": null,
        "name": "Sprite Yoga Companion Kit"
      }
    ],
    "total_segments": [
      {
        "code": "subtotal",
        "title": "Subtotal",
        "value": 108
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
        "code": "grand_total",
        "title": "Grand Total",
        "value": 113,
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

{% endhighlight %}
{% endcollapsible %}


<div class="bs-callout bs-callout-info" id="info" markdown="1">
If you tried this call on your own, and the value of the `shipping_amount` parameter is `0`, then you did not deactivate the "Spend $50 or more - shipping is free!" cart price rule. See [Deactivate a cart price rule]({{page.baseurl}}/get-started/order/order-prereq.html#price-rule) for details.
</div>

Previous Step: [Add items to the cart]({{page.baseurl}}/get-started/order/order-add-items.html) | Next step: [Create an invoice]({{page.baseurl}}/get-started/order/order-create-order.html)
