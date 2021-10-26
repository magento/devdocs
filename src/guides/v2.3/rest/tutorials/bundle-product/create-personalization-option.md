---
layout: tutorial
group: rest-api
title: Step 2. Create the bundle option
subtitle: Create a bundle product tutorial
menu_title: Step 2. Create the bundle option
menu_order: 50
level3_subgroup: bundle-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: Ziffity
contributor_link: https://ziffity.com/
---

To add a product option for the created bundle product by SKU need to define bundle product options and product links.

## Set the bundle option

*  The `position` must be sorted in ascending.
*  The `sku` must be given for the bundle product option.
*  The `title` of the bundle product option.
*  The `type` must be `radio`, `select`, `checkbox` or `dropdown`.
*  The `required` must be `boolean`.
*  The `product_links` can add simple or virtual products.
*  The `qty` must be `integer`.
*  The `is_default` must be `boolean`.
*  The `can_change_quantity` must be either `0` or `1`.

**Endpoint:**

`POST <host>/rest/default/V1/bundle-products/options/add`

**Payload:**

```json
{
   "option":{
      "title":"Jumbo Kit",
      "required":true,
      "type":"radio",
      "position":1,
      "sku":"24-UG00",
      "product_links":[
         {
            "sku":"24-UG01",
            "qty":1,
            "position":1,
            "is_default":true,
            "price":19,
            "price_type":null,
            "can_change_quantity":1
         },
         {
            "sku":"24-UG04",
            "qty":1,
            "position":2,
            "is_default":false,
            "price":12,
            "price_type":null,
            "can_change_quantity":1
         },
         {
            "sku":"24-MB01",
            "qty":1,
            "position":2,
            "is_default":false,
            "price":12,
            "price_type":null,
            "can_change_quantity":1
         }
      ]
   }
}
```

**Response:**

```json
Return type
int
```

Returns random integer.

## Verify this step

   Log in to the Luma website and select **Catalog > Products**. Click on the **Quest Pursuit Jump Cardio Ball Kit** bundle product and expand the **Bundle Items** section.

  ![Product page with simple products]({{ page.baseurl }}/rest/images/new-bundle-product-option.png)

  {:.bs-callout-info}
  If the option is not displayed, go to the **Quest Pursuit Jump Cardio Ball Kit** bundle product page in Admin and set  **Stock Status** to **In Stock**.
