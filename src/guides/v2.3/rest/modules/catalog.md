---
group: rest-api
title: Catalog module
functional_areas:
  - Integration
  - Catalog
---

The `Catalog` module provides functionality for creating and maintaining products and categories.

## Categories

When you create a [category](https://glossary.magento.com/category) from Admin, you have the option to configure display and [search engine optimization](https://glossary.magento.com/search-engine-optimization) settings. To configure these settings using `POST V1/categories`, you can specify the following parameters as `attribute_code` values:

```text
all_children
children
children_count
custom_apply_to_products
custom_design
custom_design_from
custom_design_to
custom_layout_update
custom_use_parent_settings
default_sort_by
description
display_mode
filter_price_range
image
is_anchor
landing_page
meta_description
meta_keywords
meta_title
page_layout
path
path_in_store
url_key
url_path
```

Third-party modules may define other custom attributes.

The following example uses the `POST V1/categories` call to assign four custom attributes to the "My New Category" category.

## Request

```json
{
    "category": {
        "parent_id": 2,
        "name": "Kids",
        "is_active": true,
        "level": 2,
        "include_in_menu": true,
        "custom_attributes": [
            {
                "attribute_code": "description",
                "value": "kids category description"
            },
            {
                "attribute_code": "meta_title",
                "value": "Kids meta title"
            },
            {
                "attribute_code": "meta_keywords",
                "value": "Kids meta keywords"
            },
            {
                "attribute_code": "meta_description",
                "value": "Kids meta description"
            },
            {
                "attribute_code": "url_key",
                "value": "kids"
            },
            {
                "attribute_code": "url_path",
                "value": "kids"
            }
        ]
    }
}
```

## Response

```json
{
    "id": 42,
    "parent_id": 2,
    "name": "Kids",
    "is_active": true,
    "position": 9,
    "level": 2,
    "children": "",
    "created_at": "2020-12-18 08:50:47",
    "updated_at": "2020-12-18 08:50:47",
    "path": "1/2/43",
    "available_sort_by": [],
    "include_in_menu": true,
    "custom_attributes": [
        {
            "attribute_code": "description",
            "value": "kids category description"
        },
        {
            "attribute_code": "meta_title",
            "value": "Kids meta title"
        },
        {
            "attribute_code": "meta_keywords",
            "value": "Kids meta keywords"
        },
        {
            "attribute_code": "meta_description",
            "value": "Kids meta description"
        },
        {
            "attribute_code": "is_anchor",
            "value": "1"
        },
        {
            "attribute_code": "path",
            "value": "1/2/43"
        },
        {
            "attribute_code": "children_count",
            "value": "0"
        },
        {
            "attribute_code": "url_key",
            "value": "kids"
        },
        {
            "attribute_code": "url_path",
            "value": "kids"
        }
    ]
}
```
