---
layout: tutorial
group: rest-api
title: Step 1. Plan the product
contributor_name: Goivvy LLC
contributor_link: https://www.goivvy.com/magento-optimization-service
---

To create a bundle product with REST, you'll need to know the following:

*  The attribute names and values for the attribute set assigned to a bundle product.
*  The category IDs assigned to a bundle product.
*  Simple product SKUs assigned to a bundle product.

We will use a `Default` attribute set.

RAM and Monitor sizes will be the customizable aspect of the bundle product. We'll create a simple product for each size of RAM and Monitor (12G, 24G, 15' and 20').

## Define product characteristics

The table below has the general characteristics of a desktop computer we are creating:

Characteristic | Description
--- | ---
Attribute Set | Default
Product Name | Desktop Computer
SKU | Desktop-Computer
Tax Class | Taxable Goods
Visibility | Catalog, Search
Description | Desktop computer

## Find attribute values

We'll make several API calls to find values needed to create simple/bundle products. We'll use `default` store code.

### Find attribute set ID

We'll use `Default` attribute set. We'll need to find out corresponding `attribute_set_id`.

The following API call could be used to search for the attribute set named `Default` and `entity_type_id` equals to `4`. `catalog_product` entity has the `entity_type_id` value as `4`.

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/eav/attribute-sets/list?searchCriteria[filter_groups][0][filters][0][field]=attribute_set_name&searchCriteria[filter_groups][0][filters][0][value]=Default&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][1][filters][0][field]=entity_type_id&searchCriteria[filter_groups][1][filters][0][value]=4&searchCriteria[filter_groups][1][filters][0][condition_type]=eq
```

**Response:**

The `attribute_set_id` for the `Default` attribute set is `4`:

```json
{
    "items": [
        {
            "attribute_set_id": 4,
            "attribute_set_name": "Default",
            "sort_order": 1,
            "entity_type_id": 4
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "attribute_set_name",
                        "value": "Default",
                        "condition_type": "eq"
                    }
                ]
            },
            {
                "filters": [
                    {
                        "field": "entity_type_id",
                        "value": "4",
                        "condition_type": "eq"
                    }
                ]
            }
        ],
        "page_size": 20
    },
    "total_count": 1
}
```

### List attributes for the attribute set

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/products/attribute-sets/4/attributes
```

**Response:**

```json
[
    {
        "attribute_id": 87,
        "attribute_code": "image",
        "frontend_input": "media_image",
        "entity_type_id": "4",
        "is_required": false,
        "options": [],
        "is_user_defined": false,
        "default_frontend_label": "Base",
        "frontend_labels": [],
        "backend_type": "varchar",
        "is_unique": "0",
        "validation_rules": []
    },
    {
        "attribute_id": 125,
        "attribute_code": "shipment_type",
        "frontend_input": "select",
        "entity_type_id": "4",
        "is_required": true,
        "options": [
            {
                "label": "Together",
                "value": "0"
            },
            {
                "label": "Separately",
                "value": "1"
            }
        ],
        "is_user_defined": false,
        "default_frontend_label": "Ship Bundle Items",
        "frontend_labels": [],
        "backend_type": "int",
        "source_model": "Magento\\Bundle\\Model\\Product\\Attribute\\Source\\Shipment\\Type",
        "default_value": "0",
        "is_unique": "0",
        "validation_rules": []
    }
]
```

The response has over 2000 lines and the above is only a part of it. The table below has attributes that are relevant in this tutorial.

Admin label | Selected value | Attribute ID | attribute_code  | Attribute value
--- | --- | --- | --- | ---
Tax Class | Taxable Goods | 134 | `tax_class_id` | 2
Visibility | Catalog, Search | 99 | `visibility` | 4

{:.bs-callout-warning}
The attribute ID and value numbers might be different on your installation. Check the values carefully before using them in your calls.

### List category values

We will assign our Desktop Computer to `What's New` category.

Use the following endpoint to find out category's ID.

**Endpoint:**

```html
GET http://domain.com/rest/default/V1/categories?searchCriteria[filter_groups][0][filters][0][field]=id&searchCriteria[filter_groups][0][filters][0][value]=1&searchCriteria[filter_groups][0][filters][0][condition_type]=gte
```

**Response:**

```json
{
    "id": 2,
    "parent_id": 1,
    "name": "Default Category",
    "is_active": true,
    "position": 1,
    "level": 1,
    "product_count": 0,
    "children_data": [
        {
            "id": 32,
            "parent_id": 2,
            "name": "What's New",
            "is_active": true,
            "position": 1,
            "level": 2,
            "product_count": 0,
            "children_data": []
        }
    ]
}
```

*  What's New - `32`

## Verify this step

At this point, we're gathering information, so there is nothing to verify.
