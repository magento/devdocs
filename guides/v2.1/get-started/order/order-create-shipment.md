---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 10. Create a shipment
menu_order: 29
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-create-shipment.md
---

Previous Step: [Create an invoice]({{page.baseurl}}/get-started/order/order-create-invoice.html) | Next Step: [Issue a partial refund]({{page.baseurl}}/get-started/order/order-issue-refund.html)

## Step 10. Create a shipment

To create a shipment, you need the `order_item_id` of each item to be shipped. Since the Sprite Yoga Companion Kit is a bundle item, you only need to include the top-level `order_item_id` (`5`). The `order_item_id` for the Radiant Tee-M-Orange is `3`.

To create a partial shipment, specify only those `order_item_id`s that are to be shipped now.

If the call is successful on a full shipment, Magento changes the status of an order to Complete.

**Endpoint**

`POST /V1/order/3/ship`

where `3` is the order id.

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <administrator token>`

**Payload**

The `tracks` array optionally allows you to include one or more tracking numbers for the shipment.

{% collapsible Click to show/hide %}
{% highlight json %}

{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    },
    {
      "order_item_id": 5,
      "qty": 1
    }
  ],
  "notify": true,
  "appendComment": false,
  "tracks": [
    {
      "track_number": "1Y-9876543210",
      "title": "United Parcel Service",
      "carrier_code": "ups"
    }
  ]
}

{% endhighlight %}
{% endcollapsible %}

**Response**

A shipment ID, such as `3`.

Previous Step: [Create an invoice]({{page.baseurl}}/get-started/order/order-create-invoice.html) | Next Step: [Issue a partial refund]({{page.baseurl}}/get-started/order/order-issue-refund.html)
