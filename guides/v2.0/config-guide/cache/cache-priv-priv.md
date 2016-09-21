---
layout: default
group: config-guide
subgroup: 08_Caching
title: Public and private content
menu_title: Public and private content
menu_order: 19
menu_node: 
level3_menu_node: level3child
level3_subgroup: cache-priv
version: 2.0
github_link: config-guide/cache/cache-priv-priv.md
---

## Public and private content {#config-cache-priv-over}
The Magento page cache stores *entire* cacheable pages; where pages are stored depends on whether the content is private or public. These terms are defined as follows:

*	*Public*, which can display to many customers. 

	Public content is stored in your cache storage (file system, database, or Redis), or by Varnish. Examples of public content includes the header, footer, and category listing.
*	*Private*, which is not stored in the Magento server cache; instead, it's stored on the client only. 

	Examples of private content include the wishlist, shopping cart, customer name, and addresses. Private content should be limited to a small portion of the total content on a page.

## Specify private content {#config-cache-priv-how}
To specify a block as private and have the Magento application render it in the browser, do the following:

*   [Step 1: Create a section source](#config-cache-priv-how-source)
*   [Step 2: Create a block and template](#config-cache-priv-how-block)
*   [Step 3: Configure a UI component](#config-cache-priv-how-ui) 
*   [Step 4: Invalidate private content](#config-cache-priv-how-inval)

### Step 1: Create a section source {#config-cache-priv-how-source}
The section source class is responsible for retrieving data for the section. As a best practice, we recommend you put your code under the `Vendor/ModuleName/CustomerData` namespace. Your classes must implement the [`Magento\Customer\CustomerData\SectionSourceInterface`]({{ site.mage2000url }}app/code/Magento/Customer/CustomerData/SectionSourceInterface.php){:target="_blank"} interface. 

The public method `getSectionData` must return an array with data for private block. 

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/CustomerData/CompareProducts.php#L36-L45){:target="_blank"}

Add the following to your component's dependency injection configuration (`di.xml`):

{% highlight xml %}
<type name="Magento\Customer\CustomerData\SectionPoolInterface">
    <arguments>
        <argument name="sectionSourceMap" xsi:type="array">
            <item name="compare-products" xsi:type="string">Magento\Catalog\CustomerData\CompareProducts</item>
        </argument>
    </arguments>
</type>
{% endhighlight %}

### Step 2: Create a block and template {#config-cache-priv-how-block}
To render private content, create a block and a template to display user-agnostic data; this data is replaced with user-specific data by the UI component.

<div class="bs-callout bs-callout-info" id="info">
  <p>Do <em>not</em> use the <code>$_isScopePrivate</code> property in your blocks. This property is obsolete and won't work properly.</p>
</div>

Replace private data in blocks with placeholders (using [Knockout](http://knockoutjs.com/documentation/introduction.html){:target="_blank"} syntax). The init scope on the root element is `data-bind="scope: 'compareProducts'"`, where you define the scope name (`compareProducts` in this example) in your layout.

Initialize the component as follows:

{% highlight javascript %}
<script type="text/x-magento-init">
    {"<css-selector>": {"Magento_Ui/js/core/app": <?php echo $block->getJsLayout();?>}}
</script>
{% endhighlight %}

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/templates/product/compare/sidebar.phtml#L46-L48){:target="_blank"}

### Step 3: Configure a UI component {#config-cache-priv-how-ui}
The UI component renders block data on the Magento storefront. To initialize the UI component, you must call the initialization method `_super()`. 

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/web/js/view/compare-products.js){:target="_blank"}

All properties are available in the template. 

[Example of defining a UI component in a layout]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/default.xml#L11-L22){:target="_blank"}

### Step 4: Invalidate private content {#config-cache-priv-how-inval}
Specify actions that trigger cache invalidation for private content blocks in a `sections.xml` configuration file in the `Vendor/ModuleName/etc/frontend` directory. Cache is invalidated on a POST or PUT request, such as a customer adding items to a cart.

The following example adds comments to [app/code/Magento/Catalog/etc/frontend/sections.xml]({{ site.mage2000url }}app/code/Magento/Catalog/etc/frontend/sections.xml){:target="_blank"} to show you what happens.

{% highlight xml %}
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
{% endhighlight %}

Other examples:

*   [Checkout]({{ site.mage2000url }}app/code/Magento/Checkout/etc/frontend/sections.xml){:target="_blank"}
*   [Customer]({{ site.mage2000url }}app/code/Magento/Customer/etc/frontend/sections.xml){:target="_blank"}

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Use only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">POST</a> or <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6" target="_blank">PUT</a> methods to change state (for example, adding to a shopping cart, adding to a wishlist, and so on.) </li>
    <li>For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</li>

  </ul>
</div>

#### Next
[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)
