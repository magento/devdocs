---
layout: default
group: 
subgroup: B_Layouts
title: Common layout customization tasks
menu_title: Common layout customization tasks
menu_order: 5
github_link: frontend-dev-guide/layouts/layout-xml.md
---

<h2>Introduction</h2>

This topic shows you how to customize layout by using <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">merging</a> layout files:

<p class="q">Question to reviewer: Do we only use page configuration files, or page layouts as well? </p>

*	<a href="#layout_markup_bad">Important things to remember before you start</a>
*	<a href="#layout_markup_columns">Set the page layout</a>
*	<a href="#layout_markup_css">Add CSS and JavaScript in &lt;head&gt;</a>
*	<a href="#layout_markup_css_remove">Remove CSS and JavaScript in &lt;head&gt;</a>
*	<a href="#layout_markup_rearrange">Rearrange elements</a>
*	<a href="#layout_markup_remove_elements">Remove elements</a>
*	<a href="#layout_markup_replace_elements">Replace elements</a>
*	<a href="#create_cont">Create a container</a>
*	<a href="#ref_container">Reference container</a>
*	<a href="#xml-manage-block">Create a block</a>
*	<a href="#set_template">Set the template used by a block</a>
*	<a href="#layout_markup_modify-block">Modify block arguments</a>
*	<a href="#apply_css">Apply a CSS class to a block</a>
*	<a href="#xml-manage-ref-block">Reference block</a>
*	<a href="#layout_markup_block-properties">Use block object methods to set block properties</a>
*	*	<a href="#fedg_xml-instrux_order-block">Change blocks and containers order</a>



<h2 id="layout_markup_bad">Before you start customizing layout</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. Magento strongly recommends you not make the following changes:

* Editing system files. To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box Magento module and theme layouts. 
*	Changing a block name or alias. Neither the name of a block should not be changed nor the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the <a href="{{site.gdeurl}}architecture/view/page-type.html" target="_blank">page type</a> parent handle.

<h2 id="layout_markup_columns">Set the page layout</h2>

The type of page layout to be used for a certain page is defined in the page configuration file, in the `layout` attribute of the root `<page>` node.

Example: 
Change the layout of Advanced Search page from default "1-column" to "2-column with left bar". To do this, extend `catalogsearch_advanced_index.xml` in your theme by adding the following layout:

**app/design/frontend/<theme_path>/<Vendor>_CatalogSearch/layout/catalogsearch_advanced_index.xml**
<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;layout=&quot;2columns-left&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
...
&lt;/page&gt
</pre>

<h2 id="layout_markup_css">Add JavaScript and CSS</h2>

Make the following change in your theme merging file:
<pre>
&lt;page&nbsp;layout=&quot;3columns&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;css&nbsp;src=&quot;css/styles.css&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;link&nbsp;src=&quot;Magento_Doc::jumly/coffee-script.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;src=&quot;Magento_Rule::rules.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&lt;/page&gt;
</pre>


<h2 id="layout_markup_css_remove">Remove JavaScript and CSS</h2>

To remove the JavaScript and CSS resources linked in page `<head>`, make a change similar to the following in a theme merging file:
<pre>
&lt;page&gt;
&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;src=&quot;css-styles-css&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;src=&quot;coffe-script-js&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&lt;/page&gt;
</pre>
<p class="q"> In removing file names might be wrong file names. </p>


<h2 id="layout_markup_rearrange">Rearrange elements</h2>

Using layout files you can change the elements order on a page. 

Example:
In the custom Orange theme you need to place the stock availability and SKU blocks next to the product price on a product page.

In the Magento Blank theme these elements are located as follows:

<img src="{{ site.baseurl }}common/images/layout_image1.png" />

Let's place the stock availability and SKU blocks after product price block on a product page, and move the review block out of the product-info-price container.
To do this, add a catalog_product_view.xml in the `app/design/frontend/OrangeCo/orange/Magento_Catalog/layout/` directory:
<pre>
&lt;page&nbsp;layout=&quot;1column&quot;&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;product.info.stock.sku&quot;&nbsp;destination=&quot;product.info.price&quot;&nbsp;after=&quot;product.price.final&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;move&nbsp;element=&quot;product.info.review&quot;&nbsp;destination=&quot;product.info.main&quot;&nbsp;before=&quot;product.info.price&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

This would make the product page look like following:

<img src="{{ site.baseurl }}common/images/layout_image2.png" />

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>To learn how to locate the layout file you need to customize, refer to the <a href="{{site.gdeurl}} frontend-dev-guide/themes/debug-theme.html" target="_blank">Locate templates, layouts, and styles</a> article.</p></span>
</div>




<h2 id="layout_markup_remove_elements">Remove elements</h2>

Remove a shopping cart sidebar block from a page.

Original:
<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;right&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Mage_Checkout_Block_Cart_Sidebar&quot;&nbsp;name=&quot;cart_sidebar&quot;&nbsp;template=&quot;cart/sidebar.phtml&quot;&nbsp;before=&quot;-&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;simple&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;grouped&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer_Grouped&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;addItemRender&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;type&quot;&nbsp;xsi:type=&quot;string&quot;&gt;configurable&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;block&quot;&nbsp;xsi:type=&quot;object&quot;&gt;Mage_Checkout_Block_Cart_Item_Renderer_Configurable&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;template&quot;&nbsp;xsi:type=&quot;string&quot;&gt;cart/sidebar/default.phtml&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;container&nbsp;name=&quot;cart_sidebar.extra_actions&quot;&nbsp;as=&quot;extra_actions&quot;&nbsp;label=&quot;Shopping&nbsp;Cart&nbsp;Sidebar&nbsp;Extra&nbsp;Actions&quot;&nbsp;module=&quot;Mage_Checkout&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
&lt;/layout&gt;
</pre>

<p class="q">Please help to modify the sample above</p>
<!--
<script src="https://gist.github.com/xcomSteveJohnson/faa16e16f157a50823a3.js"></script>
-->

To change it, make a customization similar to the following merging theme layout:

<pre>&lt;layout>
    &lt;remove name="cart_sidebar"/>
&lt;/layout></pre>

<h2 id="layout_markup_replace_elements">Replace elements</h2>

To replace an element, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html#layout_markup_remove_elements">remove it</a> and add a new one.


<h2 id="create_cont">Create a container</h2>

<p><b>Example:</b></p>
<pre>&lt;container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" /></pre>
<p>Replace the values with your own. For more information, see the earlier sections in this topic.</p>


   <h2 id="ref_container">Reference a container</h2>
   
   	<h2 id="xml-manage-block">Create a block</h2>
	
	h2 id="set_template">Set the template used by a block</h2>
<p><b>Example:</b></p>
<pre>&lt;block class="Magento\Theme\Block\Html\Title" name="page.main.title" template="html/title.phtml"/></pre>
<p>To use this code, replace the block class, name, and path to the template.</p>
   
   <h2 id="layout_markup_modify-block">Modify block arguments</h2>

This section discusses how to modify the declared block argument and to add a new one.

Original:

<pre>
&lt;block&nbsp;class=&quot;Namespace_Module_Block_Type&quot;&nbsp;name=&quot;block.example&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Block&nbsp;Label&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/block&gt;
</pre>


To modify it, make a customization similar to the following in a theme merging file:
<pre>
&lt;referenceBlock&nbsp;name=&quot;block.example&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&lt;!--&nbsp;Modified&nbsp;block&nbsp;argument&nbsp;-&gt;
&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;New&nbsp;Block&nbsp;Label&lt;/argument&gt;
&lt;!-&nbsp;Newly&nbsp;added&nbsp;block&nbsp;argument&nbsp;-&gt;
&lt;argument&nbsp;name=&quot;custom_label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Custom&nbsp;Block&nbsp;Label&lt;/argument&gt;
&lt;/arguments&gt;
&lt;/referenceBlock&gt;
</pre>

   <h2 id="apply_css">Apply a CSS class to a block</h2>


   <div>
      <p>You can use the following example for any block that has the <code>css_class</code> property.</p>
      <p><b>Example:</b></p>
`css-class-block_layout.xml`
<pre>
&lt;!--&nbsp;apply&nbsp;a&nbsp;CSS&nbsp;class&nbsp;to&nbsp;a&nbsp;block&nbsp;--&gt;
&nbsp;
&lt;referenceBlock&nbsp;name=&quot;footer_links&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;css_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;links&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/referenceBlock&gt;
</pre>
      <p>To use this code, replace the following:</p>
      <ul>
         <li>the name of the block <code>footer_links</code> in <code>&lt;referenceBlock name=""></code></li>
         <li>the name of the CSS class <code>links</code> in <code>&lt;argument name="css_class">&lt;/argument></code></li>
      </ul>
   </div>


   <h2 id="fedg_xml-instrux_order-block">Change block order</h2>
   <div>
      <p>The following examples show how to:</p>
      <ul>
         <li>Place a block before all other blocks</li>
         <li>Place a block after a particular block</li>
      </ul>
      <p>The examples are basically interchangeable; for example, if you use the dash character with <code>after</code>, the block is ordered after all other blocks. For more information, see <a href="#fedg_xml-instrux_before-after">before and after attributes</a>.</p>
      <p>Examples:</p>
      <script src="https://gist.github.com/xcomSteveJohnson/1a7904f730e62050a918.js"></script>
      <p>To use these examples, replace the value of <code>before</code> or <code>after</code> with either dash (before or after all other blocks) or with the name of an existing block.</p>
   </div>
   
<h2 id="xml-manage-ref-block">Reference a block</h2>







<h2 id="layout_markup_block-properties">Use block object methods to set block properties</h2>

To set a page title using the `setTitle()` method, make a customization similar to the following in a theme merging file:

<pre>
&lt;layout&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceBlock&nbsp;name=&quot;head&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setTitle&quot;&nbsp;module=&quot;Enterprise_Wishlist&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;title&quot;&nbsp;xsi:type=&quot;string&quot;&gt;My&nbsp;Wish&nbsp;Lists&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceBlock&gt;
&lt;/layout&gt;
</pre>

<!--
<script src="https://gist.github.com/xcomSteveJohnson/bc7583f5e2ac5835a250.js"></script>
-->

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
