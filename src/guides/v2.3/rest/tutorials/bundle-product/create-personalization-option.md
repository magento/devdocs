---
layout: tutorial
group: rest-api
title: Step 5. Create the personalization option
subtitle: Create a configurable product tutorial
menu_title: Step 5. Create the personalization option
menu_order: 50
level3_subgroup: configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: Ziffity
contributor_link: https://ziffity.com/
---

Let's add a simple product for the created bundle product

The `sku` specified in the payload is a string that is appended to the `option` when a customer decides to purchase this option. Likewise, the `title` supplied in the payload is added to the bundle product title.

**Endpoint:**

`POST <host>/rest/default/V1/bundle-products/options/add`

**Payload:**

```json
{
   "option":{
      "option_id":26,
      "title":"Jumbo Kit",
      "required":true,
      "type":"radio",
      "position":1,
      "sku":"24-UG00",
      "product_links":[
         {
            "sku":"24-UG01",
            "option_id":26,
            "qty":1,
            "position":1,
            "is_default":true,
            "price":19,
            "price_type":null,
            "can_change_quantity":1
         },
         {
            "sku":"24-UG04",
            "option_id":26,
            "qty":1,
            "position":2,
            "is_default":false,
            "price":12,
            "price_type":null,
            "can_change_quantity":1
         },
         {
            "sku":"24-UG07",
            "option_id":26,
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
"27"
```
* Returns random integer.

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. Click on the **Quest Pursuit Jump Cardo Ball Kit** configurable product and expand the **Bundle Items** section.

  ![Product page with simple products]({{ page.baseurl }}/rest/images/new-bundle-product-option.png)

*  On the Luma storefront page, search for `Quest`. Then click on the Quest Pursuit Jump Cardo Ball Kit product.

  ![Search results]({{ page.baseurl }}/rest/images/new-bundle-product-option-storefront.png)

  {:.bs-callout-info}
  If the personalization option is not displayed, go to the **Quest Pursuit Jump Cardo Ball Kit** configuration product page in Admin and set  **Stock Status** to **In Stock**.

## Congratulations! You've finished.
{:.no_toc}

{:.ref-header}
Related topic

[Order Processing with REST APIs Tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html)
