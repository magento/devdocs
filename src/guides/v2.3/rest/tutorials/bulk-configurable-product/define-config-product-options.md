---
layout: tutorial
group: rest-api
title: Step 3. Define configurable product options
subtitle: Create a configurable product using bulk APIs
menu_title: Step 3. Define configurable product options
menu_order: 30
level3_subgroup: bulk-configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
---

 Now that we've created all the Champ Tee products, we need to assign `size` as the configurable attribute and link the simple products to the configurable product.

## Set the configurable attribute

 The `POST async/bulk/V1/configurable-products/bySku/options` call assigns the specified `attribute_id` to be the configurable attribute.

 The value assigned to the `value_index` must be unique within the system.

 **Endpoint:**

 `POST <host>/rest/default/async/bulk/V1/configurable-products/bySku/options`

 **Payload:**

 ```json
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

 **Response:**

 ```json
{
    "bulk_uuid": "98c46050-cd66-4b49-9d45-69bfa04efc78",
    "request_items": [
        {
            "id": 0,
            "data_hash": "17c5e6b0d6fdf98ea83f600c8cc7e9f5a437e7f51e21a9c40070bb6208e1334c",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Link the simple products to the configurable product

Now that you have set the configurable attribute to be `sku`, you can link all simple products to the configurable product and execute a single call with a payload that contains an array of simple products. To do this, specify the `sku` of the configurable product, and the `childSku` of each simple product.

 **Endpoint:**

 {:.bs-callout-info}
Bulk endpoint routes cannot contain input parameters, such as a `sku` value.  You must replace input parameters with a string that begins with `by` and ends with the input parameter name, such as `bySku`. See [`bulk endpoints`]({{ page.baseurl }}/rest/bulk-endpoints.html) for more information.

 `POST <host>/rest/default/async/bulk/V1/configurable-products/bySku/child`

 **Payload:**

 ```json
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

 **Response:**

 ```json
{
    "bulk_uuid": "e78042d1-de13-4260-8f56-d5dd13f89e3c",
    "request_items": [
        {
            "id": 0,
            "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",
            "status": "accepted"
        },
        {
            "id": 1,
            "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",
            "status": "accepted"
        },
        {
            "id": 2,
            "data_hash": "b4cfe401d84fbfadc94dd86782f18104dcaa162649f032fe105420037a44f795",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. Click on the **Champ Tee** configurable product and expand the **Configurations** section.

   ![Product page with configurable and simple products]({{ page.baseurl }}/rest/images/configurations-section.png)

*  On the Luma storefront page, search for `Champ`.

   ![Search results]({{ page.baseurl }}/rest/images/search-results.png)

*  Call `GET <host>/rest/default/V1/products/MS-Champ`. The response includes the `configurable_product_options` and `configurable_product_links` arrays.

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