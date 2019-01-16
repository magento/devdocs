---
layout: tutorial
group: rest-api
title: Step 3. Define configurable product options
subtitle: Create a configurable product tutorial
menu_title: Step 3. Define configurable product options
menu_order: 30
level3_subgroup: bulk-configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

Now that we've created all the Champ Tee products, we need to assign `size` as the configurable attribute and link the simple products to the configurable product.

## Set the configurable attribute

The `POST async/bulk/V1/configurable-products/bySku/options` call assigns the specified `attribute_id` to be the configurable attribute. The `sku` of the configurable product have to be specified in each object payload as separate attribute.

The value assigned to the `value_index` must be unique within the system.

**Endpoint**

`POST <host>/rest/default/async/bulk/V1/configurable-products/bySku/options`

**Payload**

``` json
[{
  "sku": "MS-Champ",
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
}]
```

**Response**

``` json
{
    "bulk_uuid": "98c46050-cd66-4b49-9d45-69bfa04efc78",
    "request_items": [
        {
            "id": 0,
            "data_hash": null,
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Link the simple products to the configurable product

To link all simple products to configurable is enough to execute one call where payload contains array of simple products

**Endpoint**

`POST <host>/rest/default/async/bulk/V1/configurable-products/MS-Champ/child`

**Payload**

``` json
[
  {
    "sku": "MS-Champ",
    "childSku": "MS-Champ-S"
  },
  {
    "sku": "MS-Champ",
    "childSku": "MS-Champ-M"
  },
  {
    "sku": "MS-Champ",
    "childSku": "MS-Champ-L"
  },
  // .... you can link as many products at the same time as required ....
]
```

**Response**

``` json
{
    "bulk_uuid": "98c46050-cd66-4b49-9d45-69bfa04efc98",
    "request_items": [
        {
            "id": 0,
            "data_hash": null,
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Verify this step

* Log in to the Luma website and select **Catalog > Products**. Click on the **Champ Tee** configurable product and expand the **Configurations** section.

![Product page with configurable and simple products]({{ page.baseurl }}/rest/images/configurations-section.png)

* On the Luma storefront page, search for `Champ`.

![Search results]({{ page.baseurl }}/rest/images/search-results.png)

* Call `GET /V1/products/MS-Champ`. The response includes the `configurable_product_options` and `configurable_product_links` arrays.

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
