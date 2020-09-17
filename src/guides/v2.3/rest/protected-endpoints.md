---
group: rest-api
title: REST usage notes
functional_areas:
  - Integration
---

You might encounter the following issues when using REST endpoints.

## Duplicate parameters in an REST call

In a REST call, it is possible that a route variable contains one value while the request body contains a different value.
Whenever this type of conflict occurs, Magento uses the value specified in the request body.

For example:

The REST URL to update a customer is `PUT /V1/customers/:id`. If you specify an ID value of `1` in the URL (`http://<host>/rest/<store_code>/V1/customers/1`), and a body of `{ "customer": { "id": 2, "attr": "value" }}`, the customer with ID of `2` will be modified.

This applies to all REST APIs where a parameter is passed in the URL. Any value specified in the URL with the same parameter name as in the request body is ignored.

## Create a bundle product

The following sample code creates a bundle product. The `price_type` attribute code defined in the `custom_attributes` object is set to `1` to allow the product to have a fixed price.

```json
{
   "product":{
      "sku":"box-of-watches",
      "name":"Box of Watches",
      "attribute_set_id":11,
      "price":100,
      "status":1,
      "visibility":4,
      "type_id":"bundle",
      "extension_attributes":{
         "website_ids":[
            1,
            2
         ],
         "category_links":[
            {
               "position":0,
               "category_id":"3"
            },
            {
               "position":0,
               "category_id":"6"
            }
         ],
         "bundle_product_options":[
            {
               "title":"Men's Watches",
               "required":true,
               "type":"radio",
               "position":1,
               "sku":"box-of-watches",
               "product_links":[
                  {
                     "sku":"24-MG04",
                     "qty":50,
                     "position":2,
                     "is_default":false,
                     "price":0,
                     "price_type":0,
                     "can_change_quantity":0
                  },
                  {
                     "sku":"24-MG05",
                     "qty":50,
                     "position":4,
                     "is_default":false,
                     "price":0,
                     "price_type":0,
                     "can_change_quantity":0
                  }
               ]
            },
            {
               "title":"Women's Watches",
               "required":true,
               "type":"radio",
               "position":2,
               "sku":"box-of-watches",
               "product_links":[
                  {
                     "sku":"24-WG01",
                     "qty":50,
                     "position":1,
                     "is_default":false,
                     "price":0,
                     "price_type":0,
                     "can_change_quantity":0
                  },
                  {
                     "sku":"24-WG09",
                     "qty":50,
                     "position":2,
                     "is_default":false,
                     "price":0,
                     "price_type":0,
                     "can_change_quantity":0
                  }
               ]
            }
         ]
      },
      "custom_attributes":[
         {
            "attribute_code":"price_type",
            "value":"1"
         },
         {
            "attribute_code":"price_view",
            "value":"0"
         },
         {
            "attribute_code":"required_options",
            "value":"1"
         },
         {
            "attribute_code":"has_options",
            "value":"1"
         },
         {
            "attribute_code":"meta_title",
            "value":"watch-test"
         },
         {
            "attribute_code":"sku_type",
            "value":"1"
         },
         {
            "attribute_code":"meta_description",
            "value":"watch-test This is a box of watches!"
         },
         {
            "attribute_code":"weight_type",
            "value":"0"
         },
         {
            "attribute_code":"category_ids",
            "value":[
               "3",
               "6"
            ]
         },
         {
            "attribute_code":"description",
            "value":"<p>This is a box of watches!</p>"
         },
         {
            "attribute_code":"short_description",
            "value":"<p>A box of watches</p>"
         }
      ]
   }
}
```

{:.ref-header}
Related topics

[Search using REST APIs]({{ page.baseurl }}/rest/performing-searches.html)
