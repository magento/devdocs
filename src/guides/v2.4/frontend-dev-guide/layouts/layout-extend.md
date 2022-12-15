---
group: frontend-developer-guide
title: Extend a layout
functional_areas:
  - Frontend
redirect_to: https://developer.adobe.com/commerce/frontend-core/guide/layouts/extend/
status: migrated
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

For example, to customize the layout defined in `<Magento_Catalog_module_dir>/view/frontend/layout/catalog_product_view.xml`, you need to add a layout file with the same name in your custom theme, such as: `<theme_dir>/Magento_Catalog/layout/catalog_product_view.xml`. Then do your customizations on the layout xml.

**Example:**

```xml
<page layout="1column" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <move element="product.info.stock.sku" destination="product.info.price" after="product.price.final"/>
    </body>
</page>
```

To add an extending [page layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-page) file:

1. Put the file in the following location:
    ```tree
    <theme_dir>
     |__/<Namespace>_<Module>
       |__/page_layout
         |--<layout1>.xml
         |--<layout2>.xml
    ```

For example, to customize the page layout defined in `<Magento_Theme_module_dir>/view/frontend/page_layout/1column.xml`, you need to add a page layout file with the same name in your custom theme, such as: `<theme_dir>/Magento_Theme/page_layout/1column.xml`. Then do your customizations on the page layout xml.

**Example:**

```xml
<layout xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_layout.xsd">
    <update handle="empty"/>
    <referenceContainer name="page.wrapper">
        <container name="page.top.after" label="After Page Top" after="page.top"/>
    </referenceContainer>
</layout>
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

*  [Override a layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-override.html)
*  [XML instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)
*  [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html)
*  [Magento UI library]({{ page.baseurl }}/frontend-dev-guide/css-topics/theme-ui-lib.html)
