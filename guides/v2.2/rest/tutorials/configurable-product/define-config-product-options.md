---
layout: tutorial
group: rest-api
title: Step 4. Define configurable product options
subtitle: Create a configurable product tutorial
menu_title: Step 4. Define configurable product options
menu_order: 40
level3_subgroup: configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Now that we've created all the Champ Tee products, we need to assign `size` as the configurable attribute and link the simple products to the configurable product.

## Set the configurable attribute

The `POST V1/configurable-products/:sku/options` call assigns the specified `attribute_id` to be the configurable attribute. Specify the `sku` of the configurable product in the URI.

The value assigned to the `value_index` must be unique within the system.

**Endpoint:**

`POST <host>/rest/default/V1/configurable-products/MS-Champ/options`

**Payload:**

```json
{
  "option": {
    "attribute_id": "141",
    "label": "Size",
    "position": 0,
    "is_use_default": true,
    "values": [
      {
        "value_index": 9
      }
    ]
  }
}
```

**Response:**

A configurable option ID number, such as `"335"`.

## Link the simple products to the configurable product

The call to link a simple (child) product to the configurable product accepts only one `childSku` value. You must repeat this call for the `MS-Champ-M` and `MS-Champ-L` products.

**Endpoint:**

`POST <host>/rest/default/V1/configurable-products/MS-Champ/child`

**Payload:**

```json
{
  "childSku": "MS-Champ-S"
}
```

**Response:**

`true`

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. Click on the **Champ Tee** configurable product and expand the **Configurations** section.

![Product page with configurable and simple products]({{ page.baseurl }}/rest/images/configurations-section.png)

*  On the Luma storefront page, search for `Champ`.

![Search results]({{ page.baseurl }}/rest/images/search-results.png)

*  Call `GET /V1/products/MS-Champ`. The response includes the `configurable_product_options` and `configurable_product_links` arrays.

```json
...
"configurable_product_options": [
    {
        "id": 338,
        "attribute_id": "141",
        "label": "Size",
        "position": 0,
        "values": [
            {
                "value_index": 168
            },
            {
                "value_index": 169
            },
            {
                "value_index": 170
            }
        ],
        "product_id": 2078
    }
],
"configurable_product_links": [
    2079,
    2080,
    2081
]
},
...
```
