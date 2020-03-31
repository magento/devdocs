---
layout: tutorial
group: rest-api
title: Step 5. Add items to the cart
subtitle: Order processing tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
menu_order: 5
level3_subgroup: order-tutorial
functional_areas:
  - Integration
  - Orders
  - Catalog
---

This step shows how to add a simple product, a downloadable product, and a [bundle product](https://glossary.magento.com/bundle-product) to the cart.

These calls are performed on behalf of a customer, and the customer's token is specified in the [authorization](https://glossary.magento.com/authorization) header.

{:.bs-callout-info}
Use the `V1/guest-carts/<cartId>/items` endpoint to add items to the cart on behalf of a guest. Do not include an authorization token. The payload and response is same as the logged-in customer for all product types, except for from quote ID in the payload.

### Add a simple product to a cart {#add-simple}

To add a [simple product](https://glossary.magento.com/simple-product) to a cart, you must provide a `sku`, the quantity, and the [quote](https://glossary.magento.com/quote) ID, which was generated when the cart was created.

The following example adds an orange medium-sized Radiant women's t-shirt (`sku`: `WS12-M-Orange`) to the cart.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/items`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

```json
{
  "cartItem": {
    "sku": "WS12-M-Orange",
    "qty": 1,
    "quote_id": "4"
  }
}
```

**Response:**

```json
{
  "item_id": 7,
  "sku": "WS12-M-Orange",
  "qty": 1,
  "name": "Radiant Tee-M-Orange",
  "price": 19.99,
  "product_type": "simple",
  "quote_id": "4"
}
```

### Add a downloadable product to a cart {#add-downloadable}

The requirements for adding a [downloadable product](https://glossary.magento.com/downloadable-product) to a cart are the same as a simple product. You must specify the `sku`, the quantity, and quote ID.

The following example adds the downloadable product Advanced Pilates & Yoga (`sku`: 240-LV08)

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/items`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

```json
{
  "cartItem": {
    "sku": "240-LV08",
    "qty": 1,
    "quote_id": "4"
  }
}
```

**Response:**

```json
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
```

### Add a configurable product to a cart {#add-configurable}

To add a configurable product to a cart, you must specify the `sku` as well as the set of `option_id`/`option_value` pairs that make the product configurable.

In this example, we'll add the Chaz Kangeroo Hoodie (`sku: MH01`) configurable product to the cart. This product comes in three colors (black, gray, and orange) and five sizes (XS, S, M, L, XL). In the sample data, the `option_id` values for Size and Color are `141` and `93`, respectively. You can use the `GET /V1/configurable-products/:sku/options/all` call to determine the `option_id` values for the given SKU.

The `GET /V1/configurable-products/:sku/children` call returns information about each combination of color and size, 15 in all for `MH01`. The following sample shows the returned values for `size` and `color` for a small gray Chaz Kangeroo Hoodie.

```json
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
```

We now know the values for `option_value` for `size` and `color` are `168` and `52`, so we're ready to add the product to the cart.

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/items`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

```json
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
```

**Response:**

```json
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
```

### Add a bundle product to a cart {#add-bundle}

The sample data provides one bundled product, the Sprite Yoga Companion Kit (`sku`: `24-WG080`). The kit contains the following items:

*  Sprite Statis Ball in sizes 55 cm (`sku`: `24-WG081-blue`), 65 cm (`sku`: `24-WG082-blue`), or 75 cm (`sku`: `24-WG083-blue`)
*  Sprite Foam Yoga brick (`sku`: `24-WG084`)
*  Sprite Yoga Strap in lengths 6 ft (`sku`: `24-WG085`), 8 ft (`sku`: `24-WG086`), or 10 ft (`sku`: `24-WG087`)
*  Sprite Foam Roller (`sku`: `24-WG088`)

To add a bundle product to a cart, you must specify the `sku` of the bundle product, but not the individual items. You add individual items to the bundle product by specifying the `id` defined in the item's `product_links` object. The `product_links` object primarily describes the ordering and placement of options on the customization page, but it also links an item's `sku` and `id` to the `sku` of the bundle product.

The `GET <host>/rest/<store_code>/V1/bundle-products/24-WG080/options/all` call returns `id` values, as shown in the following simplified response:

{% collapsible Show code sample %}

```json
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
```

{% endcollapsible %}

For this example, we'll configure the Sprite Yoga Companion Kit as follows:

*  65 cm Sprite Stasis Ball (`id`: `2`)
*  Sprite Foam Yoga Brick (`id`: `4`)
*  8 ft Sprite Yoga strap (`id`: `6`)
*  Sprite Foam Roller (`id`: `8`)

**Endpoint:**

`POST <host>/rest/<store_code>/V1/carts/mine/items`

**Headers:**

`Content-Type: application/json`

`Authorization: Bearer <customer token>`

**Payload:**

{% collapsible Show code sample %}

```json
{
  "cartItem": {
    "sku": "24-WG080",
    "qty": 1,
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
```

{% endcollapsible %}

**Response:**

{% collapsible Show code sample %}

```json
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
```

{% endcollapsible %}

### Verify this step {#verify-step}

[Sign in](https://glossary.magento.com/sign-in-sign-out) as the customer and click on the [shopping cart](https://glossary.magento.com/shopping-cart). All the items you added are displayed.
