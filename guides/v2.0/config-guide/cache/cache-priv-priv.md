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

#### Contents
*	[Public and private content](#config-cache-priv-over)
*	[Specify private content](#config-cache-priv-how)
*	[Considerations for public content](#config-cache-public)  

## Public and private content {#config-cache-priv-over}
Many Magento pages contain personal or sensitive information that should be delivered to only one specific user. To enable you to deliver private content in a public page, we define two broad types of content:

*	*Public*, which can display to many customers. 

	Public content is stored in your cache storage (file system, database, or Varnish). Examples of public content includes header, footer, and category listing.
*	*Private*, which is not stored in the server cache; instead, it's stored on the client only. 

	Examples of private content include the wishlist, shopping cart, customer name, and addresses. Private content should be limited to a small portion of the total content on a page.

## Specify private content {#config-cache-priv-how}
To specify a block as private and have the Magento application render it in browser, do the following:

*   [Step 1: Create a section source](#config-cache-priv-how-source)
*   [Step 2: Create a block and template](#config-cache-priv-how-block)
*   [Step 3: Configure a UI component](#config-cache-priv-how-ui) 
*   [Step 4: Invalidate private content](#config-cache-priv-how-inval)

### Step 1: Create a section source {#config-cache-priv-how-source}
The section source class is responsible for retrieving data for the section. As a best practice, we recommend you implement your code using the `Vendor/ModuleName/CustomerData` namespace. Your classes must implement the [`Magento\Customer\Model\CustomerData\SectionSourceInterface`]({{ site.mage2000url }}app/code/Magento/Customer/CustomerData/SectionSourceInterface.php){:target="_blank"} interface. 

The public method `getSectionData` must return an associative array with data for private block. 

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
To render private content, create a *template* to display user-agnostic information and *blocks* to contain private content.

The user-agnostic data will be replaced with user specific data by the UI component.

<div class="bs-callout bs-callout-info" id="info">
  <p>Do <em>not</em> use the <code>$_isScopePrivate</code> property in your blocks. This property is obsolete and won't work properly.</p>
</div>

Replace private data in blocks with placeholders (using [Knockout JavaScript](http://knockoutjs.com/documentation/introduction.html){:target="_blank"} syntax). The init scope on the root element is `data-bind="scope: 'compareProducts'"`, where you define the scope name (`compareProducts` in this example)in your layout.

Initialize the component as follows:

{% highlight javascript %}
<script type="text/x-magento-init">
    {"<css-selector>": {"Magento_Ui/js/core/app": <?php echo $block->getJsLayout();?>}}
</script>
{% endhighlight %}

[Example]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/templates/product/compare/sidebar.phtml){:target="_blank"}

### Step 3: Configure a UI component {#config-cache-priv-how-ui}
The UI component renders block data on the Magento storefront. To initialize the UI component, you must call the initialization method `_super()`. [Example]({{ site.mage2000url }}app/code/Magento_Catalog/view/frontend/web/js/view/compare-products.js){:target="_blank"}

All properties are available in the template. 

[Example of defining a UI component in a layout]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/default.xml#L11-L22){:target="_blank"}

### Step 4: Invalidate private content {#config-cache-priv-how-inval}
Specify actions that trigger cache invalidation for private content blocks in a `sections.xml` configuration file in the `Vendor/ModuleName/etc/frontend` directory. Cache is invalidated on a POST or PUT request, such as a customer adding items to a cart.

The following example adds comments to [app/code/Magento/Catalog/etc/frontend/sections.xml]({{ site.mage2000url }}app/code/Magento/Catalog/etc/frontend/sections.xml){:target="_blank"} to show you what happens.

{% highlight xml %}
<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="../../../../Magento/Customer/etc/sections.xsd">
 
    <!-- will invalidate "compare-products" section, when user perform "catalog/product_compare/add" POST request -->
    <action name="catalog/product_compare/add">
        <section name="compare-products"/>
    </action>
    
    <!-- will invalidate all sections -->
    <action name="customer/account/logout"/>
 
    <!-- will invalidate section for each POST request  -->
    <action name="*">
        <section name="message"/>
    </action>
 
</config>
{% endhighlight %}

<div class="bs-callout bs-callout-info" id="info">
  <ul><li>Use only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5" target="_blank">POST</a> or <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.6" target="_blank">PUT</a> methods to change state (for example, adding to a shopping cart, adding to a wishlist, and so on.) POST and PUT requests are <em>not</em> cached.</li>
    <li>Only HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3" target="_blank">GET</a> and <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.4" target="_blank">HEAD</a> requests are cacheable.</li>
    <li>For more information about caching, see <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html" target="_blank">RFC-2616 section 13</a>.</li>

  </ul>
</div>

#### Next
[HTTP context]({{ page.baseurl }}config-guide/cache/cache-priv-context.html)