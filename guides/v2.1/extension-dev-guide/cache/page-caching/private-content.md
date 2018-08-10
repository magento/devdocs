---
group: extension-dev-guide
subgroup: 09_Full page caching
title: Private content
menu_title: Private content
menu_order: 18
menu_node:
version: 2.1
redirect_from:
  - /guides/v2.0/config-guide/cache/cache-priv-priv.html
  - /guides/v2.1/config-guide/cache/cache-priv-priv.html
  - /guides/v2.2/config-guide/cache/cache-priv-priv.html
  - /guides/v2.0/config-guide/cache/cache-priv-context.html
  - /guides/v2.1/config-guide/cache/cache-priv-context.html
  - /guides/v2.2/config-guide/cache/cache-priv-context.html
  - /guides/v2.0/config-guide/cache/cache-priv-inval.html
  - /guides/v2.1/config-guide/cache/cache-priv-inval.html
  - /guides/v2.2/config-guide/cache/cache-priv-inval.html
---

{::options syntax_highlighter="rouge" /}

Since private content is specific to individual users, it's reasonable to handle it on the client (i.e., web browser).

Use our [customer-data](https://github.com/magento/magento2/blob/2.0/app/code/Magento/Customer/view/frontend/web/js/customer-data.js){:target="&#95;blank"} JS library to store private data in local storage, invalidate private data using customizable rules, and synchronize data with the backend.

This example shows a customer's name on a cacheable page.

## Create a section source {#config-cache-priv-how-source}

The section source class is responsible for retrieving data for the section. As a best practice, we recommend you put your code under the `Vendor/ModuleName/CustomerData` namespace. Your classes must implement the [`Magento\Customer\CustomerData\SectionSourceInterface`]({{ site.mage2000url }}app/code/Magento/Customer/CustomerData/SectionSourceInterface.php){:target=" &#95;blank"} interface.

The public method `getSectionData` must return an array with data for private block.

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/CustomerData/CompareProducts.php#L36-L45){:target=" &#95;blank"}

Add the following to your component's {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration (`di.xml`):

``` xml
<type name="Magento\Customer\CustomerData\SectionPoolInterface">
    <arguments>
        <argument name="sectionSourceMap" xsi:type="array">
            <item name="compare-products" xsi:type="string">Magento\Catalog\CustomerData\CompareProducts</item>
        </argument>
    </arguments>
</type>
```

## Create a block and template {#config-cache-priv-how-block}

To render private content, create a block and a template to display user-agnostic data; this data is replaced with user-specific data by the {% glossarytooltip 9bcc648c-bd08-4feb-906d-1e24c4f2f422 %}UI component{% endglossarytooltip %}.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Do _not_ use the `$_isScopePrivate` property in your blocks. This property is obsolete and won't work properly.
</div>

Replace private data in blocks with placeholders (using [Knockout](http://knockoutjs.com/documentation/introduction.html){:target="&#95;blank"} syntax). The init scope on the root element is `data-bind="scope: 'compareProducts'"`, where you define the scope name (`compareProducts` in this example) in your {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}.

Initialize the component as follows:

``` html
<script type="text/x-magento-init">
    {"<css-selector>": {"Magento_Ui/js/core/app": <?php echo $block->getJsLayout();?>}}
</script>
```

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/templates/product/compare/sidebar.phtml#L46-L48){:target="&#95;blank"}

## Configure a UI component {#config-cache-priv-how-ui}

The UI component renders block data on the Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}. To initialize the UI component, you must call the initialization method `_super()`.

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/web/js/view/compare-products.js){:target="&#95;blank"}

All properties are available in the template.

[Example of defining a UI component in a layout]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/default.xml#L11-L22){:target="&#95;blank"}

## Invalidate private content

Specify actions that trigger cache invalidation for private content blocks in a `sections.xml` configuration file in the `Vendor/ModuleName/etc/frontend` directory. Magento invalidates the cache on a POST or PUT request.

The following example adds comments to [app/code/Magento/Catalog/etc/frontend/sections.xml]({{ site.mage2000url }}app/code/Magento/Catalog/etc/frontend/sections.xml){:target="&#95;blank"} to show you what the code is doing.

``` xml
<?xml version="1.0"?>
<!--
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
-->
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Customer:etc/sections.xsd">
    <!-- invalidates the "compare-products" section when a user
    adds a product to the comparison, resulting in a "catalog/product_compare/add" POST request -->
    <action name="catalog/product_compare/add">
        <section name="compare-products"/>
    </action>
    <!-- invalidates the section when a customer removes a product from the comparison -->
    <action name="catalog/product_compare/remove">
        <section name="compare-products"/>
    </action>
    <!-- invalidates the section when a customer clears all products from the comparison -->
    <action name="catalog/product_compare/clear">
        <section name="compare-products"/>
    </action>
</config>
```

<div class="bs-callout bs-callout-warning" markdown="1">
Use only HTTP POST or PUT methods to change state (e.g., adding to a shopping cart, adding to a wishlist, etc.) and don't expect to see caching on these methods. Using GET or HEAD methods might trigger caching and prevent updates to private content. For more information about caching, see [RFC-2616 section 13](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html){:target="&#95;blank"}
</div>

Other examples:

-   [Checkout]({{ site.mage2000url }}app/code/Magento/Checkout/etc/frontend/sections.xml){:target="&#95;blank"}

-   [Customer]({{ site.mage2000url }}app/code/Magento/Customer/etc/frontend/sections.xml){:target="&#95;blank"}

## Version private content {#config-priv-vers}

Private content, which is stored in the browser local storage, uses the `private_content_version` cookie to store the version.

Versioning works as follows:

1.  The user performs some action, such as adding to a cart, that results in an POST or PUT request to the Magento application.
2.  The server generates the `private_content_version` cookie for this user and returns the response to the browser.
3.  {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} interprets the presence of the `private_content_version` cookie to mean that private content is present on the page, so it sends an AJAX request to the Magento server to get the current private content.
4.  The server's reply is cached in the browser's local storage.

    Subsequent requests with the same data version are retrieved from local storage.
5.  Any future HTTP POST or PUT request changes the value of `private_content_version` and results in the updated content being cached by the browser.

{% include cache/page-cache-checklists.md%}
