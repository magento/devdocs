---
layout: tutorial
group: rest-api
title: Step 2. Create the configurable and simple products
subtitle: Create a configurable product using bulk APIs
menu_title: Step 2. Create the configurable and simple products
menu_order: 20
level3_subgroup: bulk-configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
---

By providing configurable and simple product information, you can use the bulk API to create all necessary products with a single call.

### Configurable product

Some notes about the configurable product payload example:

*  We have the information we need to create the Champ Tee configurable product.
*  The sample payload does not contain the price or the size, as these are defined in the simple products section.
*  The `visibility` attribute is set to 4, which allows customers to find the product by browsing or searching. Each simple product defined in the payload can override the `visibility` attribute.

### Simple products

 The payloads for creating a simple product and a configurable product are identical, with the following exceptions:

*  The simple product `sku` appends the configurable option (the size in this tutorial) to the configurable product `sku`.
*  The `name` indicates the size.
*  The `type_id` is set to `simple`.
*  The `visibility` is set to `1`, indicating the simple product should not be displayed on the store.
*  The `price` and `size` attributes are specified.

 Although it's not required, the simple product payload also includes `stock_item` information. By default, the Luma store hides out-of-stock items, so adding stock will make the Champ Tee visible on the website.

 {:.bs-callout-info}
Before you use this code sample, verify that the attribute values are the same in your installation. See [Get the list of attributes defined in an attribute searchCriteria]({{ page.baseurl }}/rest/tutorials/configurable-product/plan-product.html#get-attributes) for more information.

 {:.bs-callout-info}
The payload contains both the configurable product and the simple products.

 **Endpoint:**

 `POST <host>/rest/default/async/bulk/V1/products`

 **Payload:**

{% collapsible Show code sample %}

 ```json
[{
  "product": {
    "sku": "MS-Champ",
    "name": "Champ Tee",
    "attribute_set_id": 9,
    "status": 1,
    "visibility": 4,
    "type_id": "configurable",
    "weight": "0.5",
    "extension_attributes": {
      "category_links": [
        {
          "position": 0,
          "category_id": "11"
        },
        {
          "position": 1,
          "category_id": "12"
        },
        {
          "position": 2,
          "category_id": "16"
        }
      ]
    },
    "custom_attributes": [
      {
        "attribute_code": "description",
        "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "material",
        "value": "148"
      },
      {
        "attribute_code": "pattern",
        "value": "196"
      },
      {
        "attribute_code": "color",
        "value": "52"
      }
    ]
  }
},
{
  "product": {
    "sku": "MS-Champ-S",
    "name": "Champ Tee Small",
    "attribute_set_id": 9,
    "price": 25,
    "status": 1,
    "visibility": 1,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
      "category_links": [
        {
          "position": 0,
          "category_id": "11"
        },
        {
          "position": 1,
          "category_id": "12"
        },
        {
          "position": 2,
          "category_id": "16"
        }
      ],
      "stock_item": {
        "qty": "10",
        "is_in_stock": true
      }
    },
    "custom_attributes": [
      {
        "attribute_code": "description",
        "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "material",
        "value": "148"
      },
      {
        "attribute_code": "pattern",
        "value": "196"
      },
      {
        "attribute_code": "color",
        "value": "52"
      },
      {
        "attribute_code": "size",
        "value": "168"
      }
    ]
  }
},
{
  "product": {
    "sku": "MS-Champ-M",
    "name": "Champ Tee Medium",
    "attribute_set_id": 9,
    "price": 25,
    "status": 1,
    "visibility": 1,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
      "category_links": [
        {
          "position": 0,
          "category_id": "11"
        },
        {
          "position": 1,
          "category_id": "12"
        },
        {
          "position": 2,
          "category_id": "16"
        }
      ],
      "stock_item": {
        "qty": "10",
        "is_in_stock": true
      }
    },
    "custom_attributes": [
      {
        "attribute_code": "description",
        "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "material",
        "value": "148"
      },
      {
        "attribute_code": "pattern",
        "value": "196"
      },
      {
        "attribute_code": "color",
        "value": "52"
      },
      {
        "attribute_code": "size",
        "value": "169"
      }
    ]
  }
},
{
  "product": {
    "sku": "MS-Champ-L",
    "name": "Champ Tee Large",
    "attribute_set_id": 9,
    "price": 25,
    "status": 1,
    "visibility": 1,
    "type_id": "simple",
    "weight": "0.5",
    "extension_attributes": {
      "category_links": [
        {
          "position": 0,
          "category_id": "11"
        },
        {
          "position": 1,
          "category_id": "12"
        },
        {
          "position": 2,
          "category_id": "16"
        }
      ],
      "stock_item": {
        "qty": "10",
        "is_in_stock": true
      }
    },
    "custom_attributes": [
      {
        "attribute_code": "description",
        "value": "The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10."
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "material",
        "value": "148"
      },
      {
        "attribute_code": "pattern",
        "value": "196"
      },
      {
        "attribute_code": "color",
        "value": "52"
      },
      {
        "attribute_code": "size",
        "value": "170"
      }
    ]
  }
}
]
```

{% endcollapsible %}

 **Response:**

```json
{
    "bulk_uuid": "c08a2b99-4be2-4b28-af7e-56e9664e0b39",
    "request_items": [
        {
            "id": 0,
            "data_hash": "73170608b04187fe5939ece183711eff1bf9c4f4e30fc334db2affed1055c3f1",
            "status": "accepted"
        },
        {
            "id": 1,
            "data_hash": "73170608b04187fe5939ece183711eff1bf9c4f4e30fc334db2affed1055c3f1",
            "status": "accepted"
        },
        {
            "id": 2,
            "data_hash": "73170608b04187fe5939ece183711eff1bf9c4f4e30fc334db2affed1055c3f1",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

 {:.bs-callout-info}
For information about response fields, see the [Bulk API]({{ page.baseurl }}/rest/bulk-endpoints.html) section. To check the status of operations, see the API for [Bulk operation status endpoints]({{ page.baseurl }}/rest/operation-status-endpoints.html).

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. The product appears in the grid.

   ![Product page with configurable product]({{ page.baseurl }}/rest/images/products-page.png)

*  On the Luma storefront page, search for `Champ`. No results are returned.
