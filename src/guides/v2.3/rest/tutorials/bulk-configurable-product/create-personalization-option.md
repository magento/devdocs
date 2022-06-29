---
layout: tutorial
group: rest-api
title: Step 4. Create the personalization option
subtitle: Create a configurable product using bulk APIs
menu_title: Step 4. Create the personalization option
menu_order: 40
level3_subgroup: bulk-configurable-product-tutorial
return_to:
  title: REST tutorials
  url: rest/tutorials/index.html
functional_areas:
  - Integration
contributor_name: comwrap GmbH
contributor_link: http://comwrap.com/
---

Let's add a text box to the product page that allows the customer to add his name (up to 15 characters) to the back of the shirt.

The `product_sku` is the `sku` of the configurable product. The `sku` specified in the payload is a string that is appended to the `product_sku` when a customer selects to purchase this item. Likewise, the `price` supplied in the payload is added to the configurable product price.

**Endpoint:**

`POST <host>/rest/default/async/bulk/V1/products/options`

**Payload:**

```json
[{
  "option": {
    "product_sku": "MS-Champ",
    "title": "Add Your Name (Max 15 Characters)",
    "type": "field",
    "sort_order": 1,
    "is_require": false,
    "price": 10,
    "price_type": "fixed",
    "sku": "Personalized",
    "max_characters": 15
  }
}]
 ```

 **Response:**

 ```json
{
    "bulk_uuid": "53ef1382-904a-4ba0-bb72-ebc5edd47da5",
    "request_items": [
        {
            "id": 0,
            "data_hash": "73170608b04187fe5939ece183711eff1bf9c4f4e30fc334db2affed1055c3f1",
            "status": "accepted"
        }
    ],
    "errors": false
}
```

## Verify this step

*  Log in to the Luma website and select **Catalog > Products**. Click on the **Champ Tee** configurable product and expand the **Customizable Options** section.

   ![Product page with configurable and simple products]({{ page.baseurl }}/rest/images/options-section.png)

*  On the Luma storefront page, search for `Champ`. Then click on the Champ Tee product.

   ![Search results]({{ page.baseurl }}/rest/images/add-your-name.png)

   {:.bs-callout-info}
   If the personalization option is not displayed, go to the **Champ Tee** configuration product page in Admin and set  **Stock Status** to **In Stock**.

## Congratulations! You've finished.
  {:.no_toc}

{:.ref-header}
Related topic

[Order Processing with REST APIs Tutorial]({{ page.baseurl }}/rest/tutorials/orders/order-intro.html)
