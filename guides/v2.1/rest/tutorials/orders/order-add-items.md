---
layout: tutorial
group: rest
title: Step 5. Add items to the cart
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 5
level3_subgroup: order-tutorial
version: 2.1
redirect_from:
  - /guides/v2.1/get-started/order-tutorial/order-add-items.html
  - /guides/v2.2/get-started/order-tutorial/order-add-items.html
  - /guides/v2.3/get-started/order-tutorial/order-add-items.html
functional_areas:
  - Integration
  - Orders
  - Catalog
---

This article shows how to add a simple product, a downloadable product, and a {% glossarytooltip fbcfce51-68e2-482f-84d5-f28d84404cff %}bundle product{% endglossarytooltip %} to the cart.

All calls are performed on behalf of a customer, and the customer's token is specified in the {% glossarytooltip 34ecb0ab-b8a3-42d9-a728-0b893e8c0417 %}authorization{% endglossarytooltip %} header.

### Add a simple product to a cart {#add-simple}

To add a {% glossarytooltip f85f36ad-2942-446e-b711-39f2a16f6364 %}simple product{% endglossarytooltip %} to a cart, you must provide a `sku`, the quantity, and the {% glossarytooltip 77e19d0d-e7b1-4d3d-9bad-e92fbb9fb59a %}quote{% endglossarytooltip %} ID, which was generated when the cart was created.

The following example adds an orange medium-sized Radiant women's t-shirt (`sku`: `WS12-M-Orange`) to the cart.

**Endpoint**

`POST http://<host>/rest/default/V1/carts/mine/items`

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

### Add a downloadable product to a cart {#add-downloadable}

The requirements for adding a {% glossarytooltip 38fc3629-ee25-4de5-ac7a-72db8e8de6de %}downloadable product{% endglossarytooltip %} to a cart are the same as a simple product. You must specify the `sku`, the quantity, and quote ID.

The following example adds the downloadable product Advanced Pilates & Yoga (`sku`: 240-LV08)

**Endpoint**

`POST http://<host>/rest/default/V1/carts/mine/items`

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

### Add a configurable product to a cart {#add-configurable}

To add a configurable product to a cart, you must specify the `sku` as well as the set of `option_id`/`option_value` pairs that make the product configurable.

In this example, we'll add the Chaz Kangeroo Hoodie (`sku: MH01`) configurable product to the cart. This product comes in three colors (black, gray, and orange) and five sizes (XS, S, M, L, XL). In the sample data, the `option_id` values for Size and Color are `141` and `93`, respectively. You can use the `GET /V1/configurable-products/:sku/options/all` call to determine the `option_id` values for the given SKU.

The `GET /V1/configurable-products/:sku/children` call returns information about each combination of color and size, 15 in all for `MH01`. The following sample shows the returned values for `size` and `color` for a small gray Chaz Kangeroo Hoodie.

{% highlight json %}
{
  "custom_attributes": [
    {
      "attribute_code": "size",
      "value": "168"
    },
    {
      "attribute_code": "color",
      "value": "52"
    }
  ]
}
{% endhighlight %}

We now know the values for `option_value` for `size` and `color` are `168` and `52`, so we're ready to add the product to the cart.

**Endpoint**

`POST http://<host>/rest/default/V1/carts/mine/items`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

{% highlight json %}
{
  "cartItem": {
    "sku": "MH01",
    "qty": 1,
    "quote_id": "4",
    "product_option": {
      "extension_attributes": {
        "configurable_item_options": [
          {
            "option_id": "93",
            "option_value": 52
          },
          {
            "option_id": "141",
            "option_value": 168
          }
        ]
      }
    },
    "extension_attributes": {}
  }
}
{% endhighlight %}

**Response**

{% highlight json %}
{
    "item_id": 13,
    "sku": "MH01-S-Gray",
    "qty": 1,
    "name": "Chaz Kangeroo Hoodie",
    "price": 52,
    "product_type": "configurable",
    "quote_id": "4",
    "product_option": {
        "extension_attributes": {
            "configurable_item_options": [
                {
                    "option_id": "93",
                    "option_value": 52
                },
                {
                    "option_id": "141",
                    "option_value": 168
                }
            ]
        }
    }
}
{% endhighlight %}

### Add a bundle product to a cart {#add-bundle}

The sample data provides one bundled product, the Sprite Yoga Companion Kit (`sku`: `24-WG080`). The kit contains the following items:

* Sprite Statis Ball in sizes 55 cm (`sku`: `24-WG081-blue`), 65 cm (`sku`: `24-WG082-blue`), or 75 cm (`sku`: `24-WG083-blue`)
* Sprite Foam Yoga brick (`sku`: `24-WG084`)
* Sprite Yoga Strap in lengths 6 ft (`sku`: `24-WG085`), 8 ft (`sku`: `24-WG086`), or 10 ft (`sku`: `24-WG087`)
* Sprite Foam Roller (`sku`: `24-WG088`)

To add a bundle product to a cart, you must specify the `sku` of the bundle product, but not the individual items. You add individual items to the bundle product by specifying the `id` defined in the item's `product_links` object. The `product_links` object primarily describes the ordering and placement of options on the customization page, but it also links an item's `sku` and `id` to the `sku` of the bundle product.

The `GET http://<host>/rest/default/V1/bundle-products/24-WG080/options/all` call returns `id` values, as shown in the following simplified response:

{% collapsible Show code sample %}
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

`POST http://<host>/rest/default/V1/carts/mine/items`

**Headers**

`Content-Type` `application/json`

`Authorization` `Bearer <customer token>`

**Payload**

{% collapsible Show code sample %}
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

{% collapsible Show code sample %}
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

### Verify this step {#verify-step}

{% glossarytooltip c3ce6f9b-a66a-4d81-ad4c-700f9dfaa9e2 %}Sign in{% endglossarytooltip %} as the customer and click on the {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %}. All the items you added are displayed.
