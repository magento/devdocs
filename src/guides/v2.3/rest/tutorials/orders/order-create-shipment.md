---
layout: tutorial
group: rest-api
title: Step 9. Create a shipment
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 9
level3_subgroup: order-tutorial
redirect_from:
  - /guides/v2.3/get-started/order-tutorial/order-create-shipment.html
functional_areas:
  - Integration
  - Orders
  - Sales
  - Shipping
---

To create a shipment, you need the `order_item_id` of each item to be shipped. Since the Sprite Yoga Companion Kit is a bundle item, you only need to include the top-level `order_item_id` (`5`). The `order_item_id` for the Radiant Tee-M-Orange is `3`.

To create a partial shipment, specify only those `order_item_id`s that are to be shipped now.

If the call is successful on a full shipment, Magento changes the status of an order to Complete.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/order/3/ship`

where `3` is the order id.

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <administrator token>`

**Payload:**

The `tracks` array optionally allows you to include one or more tracking numbers for the [shipment](https://glossary.magento.com/shipment).

{% collapsible Show code sample %}

```json
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    },
    {
      "order_item_id": 5,
      "qty": 1
    },
    {
      "order_item_id": 11,
      "qty": 1
    }
  ],
  "tracks": [
    {
      "track_number": "1Y-9876543210",
      "title": "United Parcel Service",
      "carrier_code": "ups"
    }
  ]
}
```

{% endcollapsible %}

**Response:**

A shipment ID, such as `3`.

## Verify this step

Log in to [Admin](https://glossary.magento.com/admin). Click **Sales** > **Shipments**. The shipment is displayed in the grid. Then click **Sales** > **Orders**. The status is Complete.
