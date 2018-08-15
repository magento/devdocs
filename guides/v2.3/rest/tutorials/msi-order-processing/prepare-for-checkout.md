---
layout: tutorial
group: rest
title: Step 9. Prepare for checkout
subtitle: Order processing with MSI
menu_title: Step 9. Prepare for checkout
menu_order: 90
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Now that all the items have been added to the cart, we can prepare the quote for {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}checkout{% endglossarytooltip %}. This process includes the following steps:

* Estimate shipping costs
* Set shipping and billing information

### Estimate shipping costs {#estimate-shipping}

Magento calculates shipping costs for each shipping method that can be applied to the order. In this tutorial, the `flatrate` ($5 per item) shipping method is active.

**Endpoint**

`POST http://<host>/rest/us/V1/carts/mine/estimate-shipping-methods`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload**

The payload contains the shipping address.

``` json
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

**Response**

The cost for the `flatrate` shipping method is $400 (80 items x $5 each). The virtual item does not have a shipping charge because it is not a physical product.

``` json
[
    {
        "carrier_code": "flatrate",
        "method_code": "flatrate",
        "carrier_title": "Flat Rate",
        "method_title": "Fixed",
        "amount": 400,
        "base_amount": 400,
        "available": true,
        "error_message": "",
        "price_excl_tax": 400,
        "price_incl_tax": 400
    }
]
```

### Set shipping and billing information {#set-addresses}

In this call, you specify the shipping and billing addresses, as well as the selected `carrier_code` and `method_code`. The customer has selected the Flat Rate shipping method.

Magento returns a list of payment options and calculates the order totals.

**Endpoint**

`POST http://<host>/rest/us/V1/carts/mine/shipping-information`

**Scope**

`us` store view

**Headers**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload**

``` json
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
  "shipping_carrier_code": "flatrate",
  "shipping_method_code": "flatrate"
  }
}
```

**Response**

The subtotal of the order is $720, and shipping charges are $400. The grand total is $1120.

The available payment methods are `banktransfer` and `checkmo`. The customer will specify a {% glossarytooltip 422b0fa8-b181-4c7c-93a2-c553abb34efd %}payment method{% endglossarytooltip %} in the next step.


``` json
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
        "grand_total": 1120,
        "base_grand_total": 1120,
        "subtotal": 720,
        "base_subtotal": 720,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "subtotal_with_discount": 720,
        "base_subtotal_with_discount": 720,
        "shipping_amount": 400,
        "base_shipping_amount": 400,
        "shipping_discount_amount": 0,
        "base_shipping_discount_amount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "weee_tax_applied_amount": null,
        "shipping_tax_amount": 0,
        "base_shipping_tax_amount": 0,
        "subtotal_incl_tax": 720,
        "shipping_incl_tax": 400,
        "base_shipping_incl_tax": 400,
        "base_currency_code": "USD",
        "quote_currency_code": "USD",
        "items_qty": 81,
        "items": [
            {
                "item_id": 1,
                "price": 5,
                "base_price": 5,
                "qty": 20,
                "row_total": 100,
                "base_row_total": 100,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 5,
                "base_price_incl_tax": 5,
                "row_total_incl_tax": 100,
                "base_row_total_incl_tax": 100,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Simple Product 1"
            },
            {
                "item_id": 2,
                "price": 10,
                "base_price": 10,
                "qty": 60,
                "row_total": 600,
                "base_row_total": 600,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 10,
                "base_price_incl_tax": 10,
                "row_total_incl_tax": 600,
                "base_row_total_incl_tax": 600,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Simple Product 2"
            },
            {
                "item_id": 3,
                "price": 20,
                "base_price": 20,
                "qty": 1,
                "row_total": 20,
                "base_row_total": 20,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 20,
                "base_price_incl_tax": 20,
                "row_total_incl_tax": 20,
                "base_row_total_incl_tax": 20,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Gold Club Membership"
            }
        ],
        "total_segments": [
            {
                "code": "subtotal",
                "title": "Subtotal",
                "value": 720
            },
            {
                "code": "shipping",
                "title": "Shipping & Handling (Flat Rate - Fixed)",
                "value": 400
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
                "value": 1120,
                "area": "footer"
            }
        ]
    }
}

```

### Verify this step {#verify-step}

{% glossarytooltip c3ce6f9b-a66a-4d81-ad4c-700f9dfaa9e2 %}Sign in{% endglossarytooltip %} to the US store (`http://<host>/us`) as the customer and go to the checkout page.

The payment method is Bank Transfer, the billing and shipping addresses are displayed, and the shipping charges and shipping charges calculate and display.
