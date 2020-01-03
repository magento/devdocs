---
group: b2b-developer-guide
title: Place a negotiable quote order
ee_only: true
---

This topic describes how REST calls can be used to place items in a shopping cart, initiate and complete the process of negotiating a quote, and reimbursing the buyer's credit upon receipt of payment.

## Prerequisites

*  You have [installed and enabled]({{ site.baseurl }}/extensions/b2b/) {{site.data.var.b2b}}.
*  You have [created a company]({{ page.baseurl }}/b2b/company-object.html) and a [company user]({{ page.baseurl }}/b2b/company-object.html).
*  You have an integration or [admin authorization token]({{ page.baseurl }}/rest/tutorials/orders/order-admin-token.html) to make calls on behalf of seller, and a [customer token]({{ page.baseurl }}/rest/tutorials/orders/order-create-customer.html#get-token) to make calls on behalf of the company user.

## Prepare the order

The steps in this section are similar to those in the [Order processing tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html), except that different products are added to the cart.

### Create a shopping cart

In this example, the customer is a company user (buyer).

**Endpoint:**

`POST /V1/carts/mine`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload:**

None

**Response:**

The response is the `quoteId`: `5`

### Add items

This example adds 15 Pursuit Lumaflex Tone Bands and 10 Harmony Lumaflex Strength Band Kits to the cart. You must make two calls to add these products.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload 1:**

```json
{
  "cartItem": {
    "sku": "24-UG02",
    "qty": 15,
    "quote_id": "5"
  }
}
```

**Response 1:**

```json
{
    "item_id": 12,
    "sku": "24-UG02",
    "qty": 15,
    "name": "Pursuit Lumaflex&trade; Tone Band",
    "price": 16,
    "product_type": "simple",
    "quote_id": "5"
}
```

**Payload 2:**

```json
{
  "cartItem": {
    "sku": "24-UG03",
    "qty": 10,
    "quote_id": "5"
  }
}
```

**Response 2:**

```json
{
    "item_id": 13,
    "sku": "24-UG03",
    "qty": 10,
    "name": "Harmony Lumaflex&trade; Strength Band Kit ",
    "price": 22,
    "product_type": "simple",
    "quote_id": "5"
}
```

### Set the shipping address

You can determine shipping costs after initiating a negotiable quote, but doing it now provides a more detailed picture of the final costs to the buyer. If you want to defer setting the shipping address until after the negotiable quote has been created, use the `/V1/negotiable-carts/:cartId/estimate-shipping-methods` call.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/estimate-shipping-methods`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload:**

```json
{  "address": {
      "region": "California",
      "region_id": 12,
      "region_code": "CA",
      "country_id": "US",
      "street": [
        "100 Big Tree Avenue"
        ],
      "postcode": "99999",
      "city": "San Francisco",
      "firstname": "Melanie",
      "lastname": "Shaw",
      "customer_id": 2,
      "email": "mshaw@example.com",
      "telephone": "(415) 555-1212",
      "same_as_billing": 1
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
        "amount": 125,
        "base_amount": 125,
        "available": true,
        "error_message": "",
        "price_excl_tax": 125,
        "price_incl_tax": 125
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

### Set shipping and billing information

You can also set shipping and billing information after initiating a negotiable quote by calling  `POST /V1/negotiable-carts/:cartId/shipping-information`.

**Endpoint:**

`POST /V1/carts/mine/shipping-information`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload:**

```json
{
"addressInformation": {
  "shipping_address": {
    "region": "California",
    "region_id": 12,
    "region_code": "CA",
    "country_id": "US",
    "street": [
      "100 Big Tree Avenue"
    ],
    "postcode": "99999",
    "city": "San Francisco",
    "firstname": "Melanie",
    "lastname": "Shaw",
    "email": "mshaw@example.com",
    "telephone": "415-555-1212"
  },
  "billing_address": {
   "region": "California",
    "region_id": 12,
    "region_code": "CA",
    "country_id": "US",
    "street": [
      "100 Big Tree Avenue"
    ],
    "postcode": "99999",
    "city": "San Francisco",
    "firstname": "Melanie",
    "lastname": "Shaw",
    "email": "mshaw@example.com",
    "telephone": "415-555-1212"
  },
  "shipping_carrier_code": "tablerate",
  "shipping_method_code": "bestway"
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
        },
        {
            "code": "companycredit",
            "title": "Payment on Account"
        }
    ],
    "totals": {
        "grand_total": 373,
        "base_grand_total": 373,
        "subtotal": 460,
        "base_subtotal": 460,
        "discount_amount": -92,
        "base_discount_amount": -92,
        "subtotal_with_discount": 368,
        "base_subtotal_with_discount": 368,
        "shipping_amount": 5,
        "base_shipping_amount": 5,
        "shipping_discount_amount": 0,
        "base_shipping_discount_amount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "weee_tax_applied_amount": null,
        "shipping_tax_amount": 0,
        "base_shipping_tax_amount": 0,
        "subtotal_incl_tax": 460,
        "shipping_incl_tax": 5,
        "base_shipping_incl_tax": 5,
        "base_currency_code": "USD",
        "quote_currency_code": "USD",
        "items_qty": 25,
        "items": [
            {
                "item_id": 12,
                "price": 16,
                "base_price": 16,
                "qty": 15,
                "row_total": 240,
                "base_row_total": 240,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 48,
                "base_discount_amount": 48,
                "discount_percent": 20,
                "price_incl_tax": 16,
                "base_price_incl_tax": 16,
                "row_total_incl_tax": 240,
                "base_row_total_incl_tax": 240,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Pursuit Lumaflex&trade; Tone Band"
            },
            {
                "item_id": 13,
                "price": 22,
                "base_price": 22,
                "qty": 10,
                "row_total": 220,
                "base_row_total": 220,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 44,
                "base_discount_amount": 44,
                "discount_percent": 20,
                "price_incl_tax": 22,
                "base_price_incl_tax": 22,
                "row_total_incl_tax": 220,
                "base_row_total_incl_tax": 220,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Harmony Lumaflex&trade; Strength Band Kit "
            }
        ],
        "total_segments": [
            {
                "code": "subtotal",
                "title": "Subtotal",
                "value": 460
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
                "title": "Shipping & Handling (Best Way - Table Rate)",
                "value": 5
            },
            {
                "code": "discount",
                "title": "Discount",
                "value": -92
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
                "value": 373,
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

{% endcollapsible %}

### View the cart

This is an optional step to show the status of the cart before you begin the negotiable quote process.

**Endpoint:**

`GET /V1/carts/mine`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <customer token>
```

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
{
    "id": 5,
    "created_at": "2017-09-14 21:14:15",
    "updated_at": "2017-09-15 16:15:54",
    "is_active": true,
    "is_virtual": false,
    "items": [
        {
            "item_id": 12,
            "sku": "24-UG02",
            "qty": 15,
            "name": "Pursuit Lumaflex&trade; Tone Band",
            "price": 16,
            "product_type": "simple",
            "quote_id": "5"
        },
        {
            "item_id": 13,
            "sku": "24-UG03",
            "qty": 10,
            "name": "Harmony Lumaflex&trade; Strength Band Kit ",
            "price": 22,
            "product_type": "simple",
            "quote_id": "5"
        }
    ],
    "items_count": 2,
    "items_qty": 25,
    "customer": {
        "id": 2,
        "group_id": 1,
        "default_billing": "2",
        "default_shipping": "2",
        "created_at": "2017-09-11 17:55:52",
        "updated_at": "2017-09-14 19:05:40",
        "created_in": "Default Store View",
        "email": "mshaw@example.com",
        "firstname": "Melanie",
        "lastname": "Shaw",
        "gender": 3,
        "store_id": 1,
        "website_id": 1,
        "addresses": [
            {
                "id": 2,
                "customer_id": 2,
                "region": {
                    "region_code": "CA",
                    "region": "California",
                    "region_id": 12
                },
                "region_id": 12,
                "country_id": "US",
                "street": [
                    "100 Big Tree Avenue"
                ],
                "telephone": "(415) 555-1212",
                "postcode": "99999",
                "city": "San Francisco",
                "firstname": "Melanie",
                "lastname": "Shaw",
                "default_shipping": true,
                "default_billing": true
            }
        ],
        "disable_auto_group_change": 0,
        "extension_attributes": {
            "company_attributes": {
                "customer_id": 2,
                "company_id": 1,
                "status": 1
            }
        }
    },
    "billing_address": {
        "id": 12,
        "region": "California",
        "region_id": 12,
        "region_code": "CA",
        "country_id": "US",
        "street": [
            "100 Big Tree Avenue"
        ],
        "telephone": "415-555-1212",
        "postcode": "99999",
        "city": "San Francisco",
        "firstname": "Melanie",
        "lastname": "Shaw",
        "customer_id": 2,
        "email": "mshaw@example.com",
        "same_as_billing": 0,
        "save_in_address_book": 0
    },
    "orig_order_id": 0,
    "currency": {
        "global_currency_code": "USD",
        "base_currency_code": "USD",
        "store_currency_code": "USD",
        "quote_currency_code": "USD",
        "store_to_base_rate": 0,
        "store_to_quote_rate": 0,
        "base_to_global_rate": 1,
        "base_to_quote_rate": 1
    },
    "customer_is_guest": false,
    "customer_note_notify": true,
    "customer_tax_class_id": 3,
    "store_id": 1,
    "extension_attributes": {
        "shipping_assignments": [
            {
                "shipping": {
                    "address": {
                        "id": 13,
                        "region": "California",
                        "region_id": 12,
                        "region_code": "CA",
                        "country_id": "US",
                        "street": [
                            "100 Big Tree Avenue"
                        ],
                        "telephone": "415-555-1212",
                        "postcode": "99999",
                        "city": "San Francisco",
                        "firstname": "Melanie",
                        "lastname": "Shaw",
                        "customer_id": 2,
                        "email": "mshaw@example.com",
                        "same_as_billing": 0,
                        "save_in_address_book": 0
                    },
                    "method": "tablerate_bestway"
                },
                "items": [
                    {
                        "item_id": 12,
                        "sku": "24-UG02",
                        "qty": 15,
                        "name": "Pursuit Lumaflex&trade; Tone Band",
                        "price": 16,
                        "product_type": "simple",
                        "quote_id": "5"
                    },
                    {
                        "item_id": 13,
                        "sku": "24-UG03",
                        "qty": 10,
                        "name": "Harmony Lumaflex&trade; Strength Band Kit ",
                        "price": 22,
                        "product_type": "simple",
                        "quote_id": "5"
                    }
                ]
            }
        ],
        "negotiable_quote": {
            "quote_id": null,
            "is_regular_quote": null,
            "status": null,
            "negotiated_price_type": null,
            "negotiated_price_value": null,
            "shipping_price": null,
            "quote_name": null,
            "expiration_period": null,
            "email_notification_status": null,
            "has_unconfirmed_changes": null,
            "is_shipping_tax_changed": null,
            "is_customer_price_changed": null,
            "notifications": null,
            "applied_rule_ids": null,
            "is_address_draft": null,
            "deleted_sku": null,
            "creator_id": null,
            "creator_type": null
        }
    }
}
```

{% endcollapsible %}

## Complete a Negotiable Quote

In this example, the buyer requests a negotiable quote. The seller applies a discount to the quote and returns the quote to the buyer. The buyer accepts the discount and completes the order.

 {:.bs-callout-info}
All negotiable quote calls require an admin authorization token.

### Initiate a negotiable quote

In this example, the buyer initiates a negotiable quote, asking for a 2.5% discount.

Initiating a negotiable quote places it in the `processing_by_admin` state.

**Endpoint:**

`POST <host>/rest/default/V1/negotiableQuote/request`

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Payload:**

```json
{
  "quoteId": 5,
  "quoteName": "Discount request",
  "comment": "Requesting a 2.5% discount"
}
```

**Response:**

`true`

### Adjust the negotiable quote

The seller accepts the buyer's request for a 2.5% discount. The `negotiated_price_type` value of `1` indicates a percentage discount.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`PUT /V1/negotiableQuote/5`

**Payload:**

```json
{
  "quote": {
      "id": 5,
      "extension_attributes": {
        "negotiable_quote": {
         "negotiated_price_type": 1,
          "negotiated_price_value": 2.5
        }
      }
    }
}
```

**Response:**

`[]`

### Return the negotiable quote to the buyer

Now that the seller has updated the quote, it must be returned to the buyer. The buyer will then be able to either accept the offer and begin the checkout process, or request further negotiations.

This call places the quote in the `submitted_by_admin` state.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/negotiableQuote/submitToCustomer`

**Payload:**

```json
{
  "quoteId": 5,
  "comment": "We have applied a 2.5% discount to your order."
}
```

**Response:**

`true`

### Get the quote with the new amounts

The price of each item has been reduced by 2.5 percent. In addition, the `negotiable_quote` section of the response has been updated.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`GET` /V1/carts/5

**Payload:**

None

**Response:**

{% collapsible Show code sample %}

```json
{
    "id": 4,
    "created_at": "2017-09-14 20:30:38",
    "updated_at": "2017-09-14 20:46:20",
    "is_active": true,
    "is_virtual": false,
    "items": [
        {
            "item_id": 10,
            "sku": "24-UG02",
            "qty": 15,
            "name": "Pursuit Lumaflex&trade; Tone Band",
            "price": 12.48,
            "product_type": "simple",
            "quote_id": "4",
            "extension_attributes": {
                "negotiable_quote_item": {
                    "item_id": 10,
                    "original_price": 16,
                    "original_tax_amount": 0,
                    "original_discount_amount": 3.2
                }
            }
        },
        {
            "item_id": 11,
            "sku": "24-UG03",
            "qty": 10,
            "name": "Harmony Lumaflex&trade; Strength Band Kit ",
            "price": 17.16,
            "product_type": "simple",
            "quote_id": "4",
            "extension_attributes": {
                "negotiable_quote_item": {
                    "item_id": 11,
                    "original_price": 22,
                    "original_tax_amount": 0,
                    "original_discount_amount": 4.4
                }
            }
        }
    ],
    "items_count": 2,
    "items_qty": 25,
    "customer": {
        "id": 2,
        "group_id": 1,
        "default_billing": "2",
        "default_shipping": "2",
        "created_at": "2017-09-11 17:55:52",
        "updated_at": "2017-09-14 19:05:40",
        "created_in": "Default Store View",
        "email": "mshaw@example.com",
        "firstname": "Melanie",
        "lastname": "Shaw",
        "gender": 3,
        "store_id": 1,
        "website_id": 1,
        "addresses": [
            {
                "id": 2,
                "customer_id": 2,
                "region": {
                    "region_code": "CA",
                    "region": "California",
                    "region_id": 12
                },
                "region_id": 12,
                "country_id": "US",
                "street": [
                    "100 Big Tree Avenue"
                ],
                "telephone": "(415) 555-1212",
                "postcode": "99999",
                "city": "San Francisco",
                "firstname": "Melanie",
                "lastname": "Shaw",
                "default_shipping": true,
                "default_billing": true
            }
        ],
        "disable_auto_group_change": 0,
        "extension_attributes": {
            "company_attributes": {
                "customer_id": 2,
                "company_id": 1,
                "status": 1
            }
        }
    },
    "billing_address": {
        "id": 7,
        "region": null,
        "region_id": null,
        "region_code": null,
        "country_id": null,
        "street": [
            ""
        ],
        "telephone": null,
        "postcode": null,
        "city": null,
        "firstname": null,
        "lastname": null,
        "customer_id": 2,
        "email": "mshaw@example.com",
        "same_as_billing": 0,
        "save_in_address_book": 0
    },
    "orig_order_id": 0,
    "currency": {
        "global_currency_code": "USD",
        "base_currency_code": "USD",
        "store_currency_code": "USD",
        "quote_currency_code": "USD",
        "store_to_base_rate": 0,
        "store_to_quote_rate": 0,
        "base_to_global_rate": 1,
        "base_to_quote_rate": 1
    },
    "customer_is_guest": false,
    "customer_note_notify": true,
    "customer_tax_class_id": 3,
    "store_id": 1,
    "extension_attributes": {
        "shipping_assignments": [
            {
                "shipping": {
                    "address": {
                        "id": 8,
                        "region": null,
                        "region_id": null,
                        "region_code": null,
                        "country_id": null,
                        "street": [
                            ""
                        ],
                        "telephone": null,
                        "postcode": null,
                        "city": null,
                        "firstname": null,
                        "lastname": null,
                        "customer_id": 2,
                        "email": "mshaw@example.com",
                        "same_as_billing": 1,
                        "save_in_address_book": 0
                    },
                    "method": null
                },
                "items": [
                    {
                        "item_id": 10,
                        "sku": "24-UG02",
                        "qty": 15,
                        "name": "Pursuit Lumaflex&trade; Tone Band",
                        "price": 12.48,
                        "product_type": "simple",
                        "quote_id": "4",
                        "extension_attributes": {
                            "negotiable_quote_item": {
                                "item_id": 10,
                                "original_price": 16,
                                "original_tax_amount": 0,
                                "original_discount_amount": 3.2
                            }
                        }
                    },
                    {
                        "item_id": 11,
                        "sku": "24-UG03",
                        "qty": 10,
                        "name": "Harmony Lumaflex&trade; Strength Band Kit ",
                        "price": 17.16,
                        "product_type": "simple",
                        "quote_id": "4",
                        "extension_attributes": {
                            "negotiable_quote_item": {
                                "item_id": 11,
                                "original_price": 22,
                                "original_tax_amount": 0,
                                "original_discount_amount": 4.4
                            }
                        }
                    }
                ]
            }
        ],
        "negotiable_quote": {
            "quote_id": 4,
            "is_regular_quote": true,
            "status": "processing_by_admin",
            "negotiated_price_type": 1,
            "negotiated_price_value": 2.5,
            "shipping_price": null,
            "quote_name": "Discount request",
            "expiration_period": null,
            "email_notification_status": 0,
            "has_unconfirmed_changes": false,
            "is_shipping_tax_changed": false,
            "is_customer_price_changed": false,
            "notifications": null,
            "applied_rule_ids": "2,3",
            "is_address_draft": false,
            "deleted_sku": null,
            "creator_id": 1,
            "creator_type": 2,
            "original_total_price": 368,
            "base_original_total_price": 368,
            "negotiated_total_price": 358.8,
            "base_negotiated_total_price": 358.8
        }
    }
}
```

{% endcollapsible %}

### Set the payment information and place the order

The buyer is now ready to complete the purchase. Since the buyer has already specified the billing address, only the `paymentMethod` information must be included.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`/V1/negotiable-carts/3/payment-information`

**Payload:**

```json
{  "paymentMethod": {
    "po_number": "12345",
    "method": "companycredit"
  }
}
```

**Response:**

The response is the order `id`: `4`

## Reimburse company credit

Now that the negotiable quote has been converted into an order, you can issue an invoice and create a shipment in the same manner as a standard B2C order. However, when the company pays for the order, the company's outstanding balance must be credited.

In this example, the `companyId` is `1`.

**Headers:**

```terminal
Content-Type application/json
Authorization Bearer <admin token>
```

**Endpoint:**

`POST /V1/companyCredits/1/increaseBalance`

**Payload:**

```json
{
  "value": 363.80,
  "currency": "USD",
  "operationType": 4,
  "comment": "Order #3 reimbursed"
}
```

**Response:**

`true`, indicating the reimbursement was successfully applied. Magento sends an email to the buyer.

## Related information

*  [Order processing tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html)
*  [Integrate with the NegotiableQuote module]({{ page.baseurl }}/b2b/negotiable-quote.html)
*  [Manage negotiable quotes]({{ page.baseurl }}/b2b/negotiable-manage.html)
*  [Update a negotiable quote]({{ page.baseurl }}/b2b/negotiable-update.html)
*  [Negotiable quote checkout]({{ page.baseurl }}/b2b/negotiable-checkout.html)
