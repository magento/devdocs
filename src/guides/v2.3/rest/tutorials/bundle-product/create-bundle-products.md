---
layout: tutorial
group: rest-api
title: Step 2. Create the bundle product
subtitle: Create a bundle product tutorial
menu_title: Step 2. Create the bundle product
menu_order: 20
level3_subgroup: bundle-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: Ziffity
contributor_link: https://ziffity.com/
---

We have the information we need to create the Quest Pursuit Jump Cardo Ball Clone bundle product.

The `visibility` attribute is set to 4, meaning the product can be found by browsing or searching.

The below table shows the equivalent code for the visibility attribute

Visibility | Code
--- | ---
`Not Visible Individually` | 1
`Catalog` | 2
`Search` | 3
`Catalog, Search` | 4

**Endpoint:**

`POST <host>/rest/default/V1/products`

**Payload:**

```json
{
   "product":{
      "sku":"24-UG00",
      "name":"Quest Pursuit Jump Cardo Ball Kit",
      "attribute_set_id":11,
      "status":1,
      "visibility":4,
      "type_id":"bundle",
      "created_at":"2021-06-15 00:00:00",
      "extension_attributes":{
         "stock_item":{
            "is_in_stock":true,
            "qty":100
         },
         "website_ids":[
            1
         ],
         "category_links":[
            {
               "position":0,
               "category_id":"3"
            },
            {
               "position":1,
               "category_id":"5"
            }
         ]
      },
      "custom_attributes":[
         {
            "attribute_code":"price_view",
            "value":"0"
         },
         {
            "attribute_code":"meta_title",
            "value":"Quest Pursuit Jump Cardo Ball Kit"
         },
         {
            "attribute_code":"meta_keyword",
            "value":"Quest Pursuit Jump Cardo Ball Kit"
         },
         {
            "attribute_code":"meta_description",
            "value":" <p>Set of three products like  Quest Lumaflex™ Band,Pursuit Lumaflex™ Tone Band,Zing Jump Rope,Dual Handle Cardio Ball</p>"
         },
         {
            "attribute_code":"short_description",
            "value":"<p>The Quest Pursuit Jump Cardo Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardo ball. Choose what you want  . The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         },
         {
            "attribute_code":"description",
            "value":"<p>The Quest Pursuit Jump Cardo Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardo ball. Choose what you want  . The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         }
      ]
   },
   "saveOptions":true
}
```

**Response:**

{% collapsible Show code sample %}
```json
{
   "product":{
      "sku":"24-UG00",
      "name":"Quest Pursuit Jump Cardo Ball Kit",
      "attribute_set_id":11,
      "status":1,
      "visibility":4,
      "type_id":"bundle",
      "created_at":"2021-06-15 00:00:00",
      "extension_attributes":{
         "stock_item":{
            "is_in_stock":true,
            "qty":100
         },
         "website_ids":[
            1
         ],
         "category_links":[
            {
               "position":0,
               "category_id":"3"
            },
            {
               "position":1,
               "category_id":"5"
            }
         ]
      },
      "custom_attributes":[
         {
            "attribute_code":"price_view",
            "value":"0"
         },
         {
            "attribute_code":"meta_title",
            "value":"Quest Pursuit Jump Cardo Ball Kit"
         },
         {
            "attribute_code":"meta_keyword",
            "value":"Quest Pursuit Jump Cardo Ball Kit"
         },
         {
            "attribute_code":"meta_description",
            "value":" <p>Set of three products like  Quest Lumaflex™ Band,Pursuit Lumaflex™ Tone Band,Zing Jump Rope,Dual Handle Cardio Ball</p>"
         },
         {
            "attribute_code":"short_description",
            "value":"<p>The Quest Pursuit Jump Cardo Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardo ball. Choose what you want  . The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         },
         {
            "attribute_code":"description",
            "value":"<p>The Quest Pursuit Jump Cardo Ball Kit helps stock your studio with the basics you need for a full-range workout. The kit is composed of four best-selling Luma accessories in one easy bundle: quest, zing jump, dual handle cardo ball. Choose what you want  . The kit includes:</p><ul><li>Pursuit Lumaflex™ Tone Band</li><li>Zing Jump Rope</li><li>Dual Handle Cardio Ball</li></ul>"
         }
      ]
   },
   "saveOptions":true
}
```
{% endcollapsible %}

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. The product appears in the grid.

  ![Product page with bundle product]({{ page.baseurl }}/rest/images/new-bundle-product.png)