---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 11. Issue a partial refund
menu_order: 30
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-issue-refund.md
---

Previous Step: [Create an shipment]({{page.baseurl}}/get-started/order/order-create-shipment.html)

## Step 11. Issue a partial refund

Magento 2.1.3 introduced two endpoints that streamline the process of issuing a refund by creating a creditmemo and updating the order or invoice in one call.

Endpoint | Description
--- | ---
`POST /V1/order/<order_ID>/refund` | Issues an offline refund
`POST /V1/invoice/<order_ID>/refund` | Issue a refund with an online payment system

In this example, the customer did not like the fit of the Radiant T-M-Orange shirt and wants a refund.

Since the customer paid for the order with a bank transfer, we'll call `POST /V1/order/<order ID>/refund`. The `order_item_id` for the Radiant Tee-M-Orange is `3`.

The `arguments` object allows you to adjust the amount of the credit to be refunded. Since the customer used the `tablerate` shipping method, which applied to the whole order, we'll assume that a refund can't be applied to the shipping costs. Therefore, the shipping_amount is set to `0`.

If the customer had selected the `flatrate` shipping method ($5 per item), we would set the value of `shipping_amount` to `5`.

The `return_to_stock_items` array specifies which `order_item_id`s can be returned to stock and be resold.

**Endpoint**

`POST /V1/order/5/refund`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <administrator token>`

**Payload**

{% highlight json %}
{
  "items": [
    {
      "order_item_id": 3,
      "qty": 1
    }
  ],
  "notify": true,
  "arguments": {
    "shipping_amount": 0,
    "adjustment_positive": 0,
    "adjustment_negative": 0,
    "extension_attributes": {
      "return_to_stock_items": [
        3
      ]
    }
  }
}
{% endhighlight %}

**Response**

A credit memo id, such as `3`.

## Congratulations! You're finished.
{:.no_toc}

## Related topics

* First Step: [Order processing tutorial]({{page.baseurl}}/get-started/order/order-intro.html)
* Previous Step: [Create an shipment]({{page.baseurl}}/get-started/order/order-create-shipment.html)
