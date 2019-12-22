---
layout: tutorial
group: rest-api
title: Step 1. Plan the product
subtitle: Create a configurable product tutorial
menu_title: Step 1. Plan the product
menu_order: 10
level3_subgroup: configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
---

To create a configurable product programmatically, you'll need to know the following:

*  The attribute names and values defined in the attribute set assigned to the configurable product.
*  The categories numbers assigned to the configurable product.
*  Which attributes to use as the configuration options.

Since this tutorial uses the sample data, we can take advantage of the options that the Top attribute set provides. This attribute set contains attributes that describe the fabric, sleeve length, and other characteristics that are specific to clothing. It also includes EAV attributes such as size and color, which are commonly available to all types of physical products.

The size of the t-shirt will be the configurable aspect of this product. Therefore, we'll create a simple product for each size (Small, Medium, and Large).

## Define product characteristics

The following table lists the general characteristics of men's t-shirt we're creating. These items are among those listed on the New Product page in Admin when the Top attribute set is selected.

Characteristic | Description
--- | ---
Attribute Set | Top
Product Name | Champ Tee
SKU | MS-Champ
Price | 25.00
Tax Class | Taxable Goods
Weight | 0.5
Categories | Men, Tops, Tees
Visibility | Catalog, Search
Material | LumaTech
Pattern | Graphic Print
Color | Gray
Size | Configurable in small, medium, or large
Description | The Champ Tee keeps you cool and dry while you do your thing. Let everyone know who you are by adding your name on the back for only $10.

A merchant typically provides the product name, SKU, price, weight, and description. The other characteristics are defined by the system.

## Find the system-defined values

We'll make several calls to find the values needed to create the product

### Get the attribute set ID

The sample data provides multiple attribute sets, including Default, Top, and Bottom. To assign the Top attribute set to the product, we need to know the corresponding `attribute_set_id`.

Use the following call to search for the attribute set named `Top`.

**Endpoint:**

```html
GET <host>/rest/<store_code>/V1/eav/attribute-sets/list?
searchCriteria[filter_groups][0][filters][0][field]=attribute_set_name&
searchCriteria[filter_groups][0][filters][0][value]=Top&
searchCriteria[filter_groups][0][filters][0][condition_type]=eq
```

**Response:**

The `attribute_set_id` for the Top attribute set is `9`.

```json
{
    "items": [
        {
            "attribute_set_id": 9,
            "attribute_set_name": "Top",
            "sort_order": 0,
            "entity_type_id": 4
        }
    ],
    "search_criteria": {
        "filter_groups": [
            {
                "filters": [
                    {
                        "field": "attribute_set_name",
                        "value": "Top",
                        "condition_type": "eq"
                    }
                ]
            }
        ]
    },
    "total_count": 1
}
```

### Get the list of attributes defined in an attribute searchCriteria {#get-attributes}

Use the `GET V1/products/attribute-sets/:attributeSetId/attributes` call to return information about the attributes defined in the Top attribute set.

**Endpoint:**

`GET <host>/rest/default/V1/products/attribute-sets/9/attributes`

**Response:**

The response contains almost 3,000 lines. The following table provides a summary of the attributes that are relevant in this tutorial.

Admin label | Selected value | Attribute ID | attribute_code  | Attribute value
--- | --- | --- | --- | ---
Tax Class | Taxable Goods | 132 | `tax_class_id` | 2
Visibility | Catalog, Search | 99 | `visibility` | 4
Material | LumaTech  | 136 | `material` | 148
Pattern | Graphic Print | 152 | `pattern` | 196
Color | Gray | 93 | `color` | 52
Size | Not applicable | 141 | `size` | 168 (small), 169 (medium), 170 (large)

{:.bs-callout-warning}
The attribute ID and value numbers might be different on your installation. Check the values carefully before using them in your calls.

### Get the list of category values

You must assign the product to one or more categories to enable customers to find the product by browsing. We'll assign the Champ Tee to the Men, Tops, and Tees categories.

Use the following call to search for all categories (`id` is greater than or equal to `0`).

```html
GET <host>/rest/default/V1/categories?
searchCriteria[filter_groups][0][filters][0][field]=id&
searchCriteria[filter_groups][0][filters][0][value]=1&
searchCriteria[filter_groups][0][filters][0][condition_type]=gte
```

Note that women's tops and tees have different ids than men's tops and tees. The values for men's clothing are:

*  Men - `11`
*  Tops - `12`
*  Tees - `16`

## Verify this step

At this point, we're gathering information, so there is nothing to verify.
