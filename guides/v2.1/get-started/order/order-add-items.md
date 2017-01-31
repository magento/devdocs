---
layout: default
group: get-started
subgroup: 20_REST
title: Order Processing Tutorial
menu_title: Step 6. Add items to the cart
menu_order: 26
level3_menu_node: level3child
level3_subgroup: order
version: 2.1
github_link: get-started/order/order-add-items.md
---

Previous Step: [Create a quote]({{page.baseurl}}/get-started/order/order-create-quote.html) | Next step: [Prepare for checkout]({{page.baseurl}}/get-started/order/order-prepare-checkout.html)

## Step 6. Add items to the cart {#add-items}

This article shows how to add a simple product, a downloadable product, and a bundle product to the cart.

All calls are performed on behalf of a customer, and the customer's token is specified in the authorization header.

### 1. Add a simple product to a cart {#add-simple}

To add a simple product to a cart, you must provide a `sku`, the quantity, and the quote ID, which was generated when the cart was created.

The following example adds an orange medium-sized  Radiant women's t-shirt (`sku`: `WS12-M-Orange`) to the cart.

**Endpoint**

`POST V1/carts/mine/items`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

{% highlight json %}
{
  "cartItem": {
    "sku": "WS12-M-Orange",
    "qty": 1,
    "quote_id": "4"
  }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
  "item_id": 7,
  "sku": "WS12-M-Orange",
  "qty": 1,
  "name": "Radiant Tee-M-Orange",
  "product_type": "simple",
  "quote_id": "4"
}
{% endhighlight %}

### 2. Add a downloadable product to a cart {#add-downloadable}

The requirements for adding a downloadable product to a cart are the same as a simple product. You must specify the `sku`, the quantity, and quote ID.

The following example adds the downloadable product Advanced Pilates & Yoga (`sku`: 240-LV08)

**Endpoint**

`POST V1/carts/mine/items`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

{% highlight json %}
{
  "cartItem": {
    "sku": "240-LV08",
    "qty": 1,
    "quote_id": "4"
  }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
  "item_id": 8,
  "sku": "240-LV08",
  "qty": 1,
  "name": "Advanced Pilates & Yoga (Strength)",
  "price": 18,
  "product_type": "downloadable",
  "quote_id": "4",
  "product_option": {
    "extension_attributes": {
      "downloadable_option": {
        "downloadable_links": [
          5
        ]
      }
    }
  }
}
{% endhighlight %}


### 3. Add a bundle product to a cart {#add-bundle}

The sample data provides one bundled product, the Sprite Yoga Companion Kit (`sku`: `24-WG080`). The kit contains the following items:

* Sprite Statis Ball in sizes 55 cm (`sku`: `24-WG081-blue`), 65 cm (`sku`: `24-WG082-blue`), or 75 cm (`sku`: `24-WG083-blue`)
* Sprite Foam Yoga brick (`sku`: `24-WG084`)
* Sprite Yoga Strap in lengths 6 ft (`sku`: `24-WG085`), 8 ft (`sku`: `24-WG086`), or 10 ft (`sku`: `24-WG087`)
* Sprite Foam Roller (`sku`: `24-WG088`)

To add a bundle product to a cart, you must specify the `sku` of the bundle product, but not the individual items. You add individual items to the bundle product by specifying the `id` defined in the item's `product_links` object. The `product_links` object primarily describes the ordering and placement of options on the customization page, but it also links an item's `sku` and `id` to the `sku` of the bundle product.

The `GET V1/bundle-products/24-WG080/options/all` call returns `id` values, as shown in the following simplified respose:

{% collapsible Click to show/hide %}
{% highlight json %}
[
  {
    "option_id": 1,
    "title": "Sprite Stasis Ball",
    "required": true,
    "type": "radio",
    "position": 1,
    "sku": "24-WG080",
    "product_links": [
      {
        "id": "1",
        "sku": "24-WG081-blue",
        "option_id": 1,
        "qty": 1
      },
      {
        "id": "2",
        "sku": "24-WG082-blue",
        "option_id": 1,
        "qty": 1
      },
      {
        "id": "3",
        "sku": "24-WG083-blue",
        "option_id": 1,
        "qty": 1
      }
    ]
  },
  {
    "option_id": 2,
    "title": "Sprite Foam Yoga Brick",
    "required": true,
    "type": "radio",
    "position": 2,
    "sku": "24-WG080",
    "product_links": [
      {
        "id": "4",
        "sku": "24-WG084",
        "option_id": 2,
        "qty": 1
      }
    ]
  },
  {
    "option_id": 3,
    "title": "Sprite Yoga Strap",
    "required": true,
    "type": "radio",
    "position": 3,
    "sku": "24-WG080",
    "product_links": [
      {
        "id": "5",
        "sku": "24-WG085",
        "option_id": 3,
        "qty": 1
      },
      {
        "id": "6",
        "sku": "24-WG086",
        "option_id": 3,
        "qty": 1
      },
      {
        "id": "7",
        "sku": "24-WG087",
        "option_id": 3,
        "qty": 1
      }
    ]
  },
  {
    "option_id": 4,
    "title": "Sprite Foam Roller",
    "required": true,
    "type": "radio",
    "position": 4,
    "sku": "24-WG080",
    "product_links": [
      {
        "id": "8",
        "sku": "24-WG088",
        "option_id": 4,
        "qty": 1
      }
    ]
  }
]
{% endhighlight %}
{% endcollapsible %}

For this example, we'll configure the Sprite Yoga Companion Kit as follows:


* 65 cm Sprite Stasis Ball (`id`: `2`)
* Sprite Foam Yoga Brick (`id`: `4`)
* 8 ft Sprite Yoga strap (`id`: `6`)
* Sprite Foam Roller (`id`: `8`)

**Endpoint**

`POST V1/carts/mine/items`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

{% collapsible Click to show/hide %}
{% highlight json %}

{
    "cartItem": {
        "sku": "24-WG080",
        "qty": "1",
        "quote_id": "4",
        "product_option": {
            "extension_attributes": {
                "bundle_options": [
                    {
                        "option_id": 1,
                        "option_qty": 1,
                        "option_selections": [2]
                    },
                    {
                        "option_id": 2,
                        "option_qty": 1,
                        "option_selections": [4]
                    },
                    {
                        "option_id": 3,
                        "option_qty": 1,
                        "option_selections": [6]
                    },
                    {
                        "option_id": 4,
                        "option_qty": 1,
                        "option_selections": [8]
                    }
                ]
            }
        }
    }
}

{% endhighlight %}
{% endcollapsible %}

**Response**

{% collapsible Click to show/hide %}
{% highlight json %}
{
  "item_id": 9,
  "sku": "24-WG080-24-WG084-24-WG088-24-WG082-blue-24-WG086",
  "qty": 1,
  "name": "Sprite Yoga Companion Kit",
  "price": 68,
  "product_type": "bundle",
  "quote_id": "4",
  "product_option": {
    "extension_attributes": {
      "bundle_options": [
        {
          "option_id": 1,
          "option_qty": 1,
          "option_selections": [
            2
          ]
        },
        {
          "option_id": 2,
          "option_qty": 1,
          "option_selections": [
            4
          ]
        },
        {
          "option_id": 3,
          "option_qty": 1,
          "option_selections": [
            6
          ]
        },
        {
          "option_id": 4,
          "option_qty": 1,
          "option_selections": [
            8
          ]
        }
      ]
    }
  }
}
{% endhighlight %}
{% endcollapsible %}

Previous Step: [Create a quote]({{page.baseurl}}/get-started/order/order-create-quote.html) | Next step: [Prepare for checkout]({{page.baseurl}}/get-started/order/order-prepare-checkout.html)
