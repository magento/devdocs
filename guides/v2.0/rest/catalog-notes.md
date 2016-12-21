---
layout: default
group: rest
subgroup: Notes
title: Catalog module
menu_title: Catalog module
menu_order: 2
version: 2.0
github_link: rest/catalog-notes.md

---

## POST V1/categories

When you create a category from Admin, you have the option to configure display and search engine optimization settings. The `POST V1/categories` API does not accept any of these parameters directly, but they can be defined as custom attributes, as shown in the following example.

{% highlight json %}

{
"category": {
    "parent_id": 2,
    "name": "My New Category",
    "is_active": true,
    "level": 2,
    "include_in_menu": true
    "custom_attributes":[
         {
            "attribute_code":"description",
            "value":"Women category description"
         },
         {
            "attribute_code":"meta_title",
            "value":"Women meta title"
         },
         {
            "attribute_code":"meta_keywords",
            "value":"Women meta keywords"
         },
         {
            "attribute_code":"meta_description",
            "value":"Women meta description"
         },
         {
            "attribute_code":"url_key",
            "value":"women-test-key"
         }
      ]
    }
}
{% endhighlight %}
