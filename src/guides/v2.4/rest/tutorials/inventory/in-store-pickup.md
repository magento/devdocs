---
layout: tutorial
group: rest-api
title: Step 14. Create an order for in-store pickup (optional)
subtitle: Order processing with Inventory Management
menu_title: Step 14. Bulk transfer products
menu_order: 140
level3_subgroup: msi-tutorial
return_to:
  title: REST Tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

The in-store pickup feature allows shoppers to select a physical location where they can pick up an entire order. As a result, any orders that are fulfilled with this method bypass the shipping steps in the standard workflow.

An order must meet the following requirements to be eligible for in-store pickup:

*  All physical products must be assigned to the source that serves as the in-store pickup location.
*  All items must be in stock.

In this step, we will create a second order from the same customer. In [Step 2. Create sources]({{page.baseurl}}/rest/tutorials/inventory/create-sources.html), we created three stores in the New York City area. The customer will be able to choose from these stores when she selects a pickup location. We will skip some of the steps we performed earlier that provides information we already know.

## Create a new cart

We must create a new cart for the customer.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload:**

None

**Response:**

The response is the `quoteId`: 6

## Add products to the new cart

This time, we will add two Voyage Yoga Bags (`24-WB01`).

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/items`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload:**

```json
{
  "cartItem": {
    "sku": "24-WB01",
    "qty": 2,
    "quote_id": "6"
  }
}
```

**Response:**

```json
{
    "item_id": 11,
    "sku": "24-WB01",
    "qty": 2,
    "name": "Voyage Yoga Bag",
    "price": 32,
    "product_type": "simple",
    "quote_id": "6"
}
```

## Search for pickup locations

The `GET /V1/inventory/in-store-pickup/pickup-locations` endpoint searches for locations, given a city name or postal code and a radius, in kilometers. You must also specify the sales channel code to search in the `scopeCode` parameter. The endpoint is described in detail in the [In-Store Pickup]({{page.baseurl}}/rest/modules/inventory/in-store-pickup.html) reference topic.

In this example, we will search for locations within 50 km of New York, New York that are pickup locations for product `24-WB01`.

**Endpoint:**

`GET http://<host>/rest/default/V1/inventory/in-store-pickup/pickup-locations/?
searchRequest[area][radius]=50&
searchRequest[area][searchTerm]=New%20York&
searchRequest[scopeCode]=base&
searchRequest[extensionAttributes][productsInfo][0][sku]=24-WB01`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

**Payload:**

Not applicable

**Response:**

The endpoint returns the Manhattan, Brooklyn, and Long Island stores. The Northeast warehouse is within the specified radius, but it is not listed, because it is not a pickup location.

In the previous step, we transferred the entire stock of Voyage Yoga Bags from the Long Island (`huntington`) store to the Northeast warehouse. Although the store is out of stock locally, it can still be used as a pick-up location.

```json
{
    "items": [
        {
            "pickup_location_code": "manhattan",
            "name": "Manhattan Store",
            "contact_name": "Kiara Smith",
            "description": "Greenwich Village, Manhattan",
            "latitude": 40.7346,
            "longitude": -73.99849,
            "country_id": "US",
            "region_id": 43,
            "region": "New York",
            "city": "New York",
            "street": "70 W. 10th St",
            "postcode": "10011",
            "phone": "555 838-4500"
        },
        {
            "pickup_location_code": "brooklyn",
            "name": "Brooklyn Store",
            "contact_name": "Tai Hozie",
            "description": "Williamsburg, Brooklyn",
            "latitude": 40.71007,
            "longitude": -73.95716,
            "country_id": "US",
            "region_id": 43,
            "region": "New York",
            "city": "Brooklyn",
            "street": "263 S 4th St",
            "postcode": "11211",
            "phone": "555 737-8088"
        },
        {
            "pickup_location_code": "huntington",
            "name": "Long Island Store",
            "contact_name": "Leslie Arzy",
            "description": "Huntington, Long Island",
            "latitude": 40.87251,
            "longitude": -73.429352,
            "country_id": "US",
            "region_id": 43,
            "region": "New York",
            "city": "Huntington",
            "street": "55 Gerard St,",
            "postcode": "11743",
            "phone": "555 939-4444"
        }
    ],
    "search_request": {
        "area": {
            "radius": 50,
            "search_term": "New York"
        },
        "current_page": 1,
        "scope_type": "website",
        "scope_code": "base",
        "extension_attributes": {
            "products_info": [
                {
                    "sku": "24-WB01"
                }
            ]
        }
    },
    "total_count": 3
}
```

## Set the shipping and billing information

The customer has chosen to pick up the order at the Brooklyn store. Once again, we will use the `POST /V1/carts/mine/shipping-information` endpoint to set the shipping and billing information. This time we will make the following changes to the payload:

*  The shipping address is that of the Brooklyn store but includes the customer's first and last name to help the store personnel identify who placed the order. The shipping address also includes the `pickup_location_code` extension attribute.

*  The billing address includes the customer's billing address ID. In [Step 6. Create a customer and generate a customer token]({{page.baseurl}}/rest/tutorials/inventory/create-customer.html), the `POST /V1/customers` endpoint returned an address ID of `2`.

*  The `shipping_method_code` and `shipping_carrier_code` attributes are set to `pickup` and `instore`, respectively.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/shipping-information`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer_token>`

**Payload:**

```json
{
"addressInformation": {
  "shipping_address": {
    "region_id": 43,
    "country_id": "US",
    "street": [
      "263 S 4th St"
    ],
    "postcode": "11211",
    "city": "Brooklyn",
    "firstname": "Jane",
    "lastname": "Doe",
    "telephone": "516-555-1111",
    "extension_attributes": {
      "pickup_location_code": "brooklyn"
    }
  },
    "billing_address": {
      "id": 2
    },
    "shipping_method_code": "pickup",
    "shipping_carrier_code": "instore"
   }
}
```

**Response:**

```json
{
    "payment_methods": [
        {
            "code": "checkmo",
            "title": "Check / Money order"
        },
        {
            "code": "banktransfer",
            "title": "Bank Transfer Payment"
        }
    ],
    "totals": {
        "grand_total": 64,
        "base_grand_total": 64,
        "subtotal": 64,
        "base_subtotal": 64,
        "discount_amount": 0,
        "base_discount_amount": 0,
        "subtotal_with_discount": 64,
        "base_subtotal_with_discount": 64,
        "shipping_amount": 0,
        "base_shipping_amount": 0,
        "shipping_discount_amount": 0,
        "base_shipping_discount_amount": 0,
        "tax_amount": 0,
        "base_tax_amount": 0,
        "weee_tax_applied_amount": null,
        "shipping_tax_amount": 0,
        "base_shipping_tax_amount": 0,
        "subtotal_incl_tax": 64,
        "shipping_incl_tax": 0,
        "base_shipping_incl_tax": 0,
        "base_currency_code": "USD",
        "quote_currency_code": "USD",
        "items_qty": 2,
        "items": [
            {
                "item_id": 11,
                "price": 32,
                "base_price": 32,
                "qty": 2,
                "row_total": 64,
                "base_row_total": 64,
                "row_total_with_discount": 0,
                "tax_amount": 0,
                "base_tax_amount": 0,
                "tax_percent": 0,
                "discount_amount": 0,
                "base_discount_amount": 0,
                "discount_percent": 0,
                "price_incl_tax": 32,
                "base_price_incl_tax": 32,
                "row_total_incl_tax": 64,
                "base_row_total_incl_tax": 64,
                "options": "[]",
                "weee_tax_applied_amount": null,
                "weee_tax_applied": null,
                "name": "Voyage Yoga Bag"
            }
        ],
        "total_segments": [
            {
                "code": "subtotal",
                "title": "Subtotal",
                "value": 64
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
                "title": "Shipping & Handling (In-Store Pickup Delivery - Brooklyn (Williamsburg) Store)",
                "value": 0
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
                "value": 64,
                "area": "footer"
            },
            {
                "code": "customerbalance",
                "title": "Store Credit",
                "value": -0
            },
            {
                "code": "reward",
                "title": "0 Reward points",
                "value": -0
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

## Send payment information {#send-payment}

Send the payment information to create an order.

**Endpoint:**

`POST <host>/rest/default/V1/carts/mine/payment-information`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <customer token>`

**Payload:**

```json
{
  "paymentMethod": {
    "method": "banktransfer"
  },
  "billing_address": {
    "email": "jdoe@example.com",
    "region": "New York",
    "region_id": 43,
    "region_code": "NY",
    "country_id": "US",
    "street": ["160 1st St."],
    "postcode": "11501",
    "city": "Mineola",
    "telephone": "516-555-1111",
    "firstname": "Jane",
    "lastname": "Doe"
  }
}
```

**Response:**

An `orderID`, such as `6`

## Mark the order as ready for pick-up

When the order is ready to be picked up, send a notification email to the customer. The payload contains an array of order IDs.

This call creates a shipment.

**Endpoint:**

`POST <host>/rest/default/V1/order/notify-orders-are-ready-for-pickup`

**Scope:**

`default` store view

**Headers:**

`Content-Type`: `application/json`

`Authorization`: `Bearer <admin token>`

**Payload:**

```json
{
  "orderIds": [
    6
  ]
}
```

**Response:**

The response includes the success status as well as an array of error messages for each failed order.

```json
{
  "successful": true,
  "failed": []
}
```
