---
group: frontend-developer-guide
title: Extend a layout
functional_areas:
  - Frontend
---

## Create a theme extending file {#fedg_layout_extend_merge}

Rather than copy extensive page layout or page configuration code and then modify what you want to change, in the Magento system, you only need to create an *extending layout file* that contains the changes you want.

To add an extending [page configuration]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf) or [generic layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-gen) file:

1. Put the layout file in the following location:
    ```tree
    <theme_dir>
     |__/<Namespace>_<Module>
       |__/layout
         |--<layout1>.xml
         |--<layout2>.xml
    ```

For example, to customize the layout defined in `<Magento_Catalog_module_dir>/view/frontend/layout/catalog_product_view.xml`, you need to add a layout file with the same name in your custom theme, such as: `<theme_dir>/Magento_Catalog/layout/catalog_product_view.xml`

To add an extending [page layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-page) file:

1. Put the file in the following location:
    ```tree
    <theme_dir>
     |__/<Namespace>_<Module>
       |__/page_layout
         |--<layout1>.xml
         |--<layout2>.xml
    ```

## Processing extending layouts

Magento merges layout files as follows:

1. For each layout file in the list:
   1. Loads layout handle declaration and layout instructions.
   1. Appends to the result in the following format:

```xml
<layouts xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <handle id="checkout_cart_index" label="Shopping Cart" type="page" parent="default">
        <!-- Layout instructions from checkout_cart_index.xml -->
    </handle>
    <handle id="checkout_onepage_index" label="One Page Checkout" type="page" parent="default">
        <!-- Layout instructions from checkout_onepage_index.xml -->
    </handle>
    <!-- ... -->
</layouts>
```

Where a `handle ID` is defined by the name of the corresponding layout file, and handle attributes are defined by the attributes of the root layout node of this layout file.

1. Replaces the base URL placeholders in the result.

{:.ref-header}
Related topics

*  [Override a layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-override.html){:target="_blank"}
*  [XML instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html){:target="_blank"}
*  [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html){:target="_blank"}
*  [Magento UI library]({{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html){:target="_blank"}
