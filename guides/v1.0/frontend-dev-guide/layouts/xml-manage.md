---
layout: default
group: fedg
subgroup: B_Layouts
title: Common layout customization tasks
menu_title: Common layout customization tasks
menu_order: 6
github_link: frontend-dev-guide/layouts/xml-manage.md
---

<h2>Introduction</h2>

This article describes the following typical layout customization tasks:

*	<a href="#layout_markup_columns">Set the page layout</a>
*	<a href="#layout_markup_css">Add CSS and JavaScript in &lt;head&gt;</a>
*	<a href="#layout_markup_css_remove">Remove CSS and JavaScript in &lt;head&gt;</a>
*	<a href="#create_cont">Create a container</a>
*	<a href="#ref_container">Reference a container</a>
*	<a href="#xml-manage-block">Create a block</a>
*	<a href="#set_template">Set the template used by a block</a>
*	<a href="#layout_markup_modify-block">Modify block arguments</a>
*	<a href="#xml-manage-ref-block">Reference a block</a>
*	<a href="#layout_markup_block-properties">Use block object methods to set block properties</a>
*	<a href="#layout_markup_rearrange">Rearrange elements</a>
*	<a href="#layout_markup_remove_elements">Remove elements</a>
*	<a href="#layout_markup_replace_elements">Replace elements</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box Magento module and theme layouts. To customize layout, create extending and overriding layout files in your custom theme.</p></span>
</div>

<h2 id="layout_markup_columns">Set the page layout</h2>

The type of page layout to be used for a certain page is defined in the page configuration file, in the `layout` attribute of the root <code>&lt;page&gt;</code> node.

Example:
Change the layout of Advanced Search page from default "1-column" to "2-column with left bar". To do this, extend `catalogsearch_advanced_index.xml` in your theme by adding the following layout:

<b><code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_CatalogSearch/layout/catalogsearch_advanced_index.xml</code></b>
<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;layout=&quot;2columns-left&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
...
&lt;/page&gt;
</pre>

<h2 id="layout_markup_css">Add JavaScript and CSS</h2>

JavaScript, CSS and other static assets are added in the `<head>` section of a <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configuration</a> file. The default look of a Magento store page `<head>` is defined by `app/code/Magento/Theme/view/frontend/layout/default_head_blocks.xml`. The recommended way to add CSS and JavaScript is to extend this file in your custom theme, and add the assets there.
The following file is a sample of a file you must add:

<code>app/design/frontend/<Vendor>/<theme>/Magento_Theme/layout/default_head_blocks.xml</code>

<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;css&nbsp;src=&quot;css/my-styles.css&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;link&nbsp;src=&quot;sample.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;src=&quot;Magento_Catalog::js/sample1.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&lt;/page&gt;

</pre>

You can use either `<link src="sample.js"/>` or `<script src="sample.js"/>` instruction to add a JavaScript file to your theme.

The files themselves should reside in one of the following locations:
<ul>
<li><code>app/design/frontend/<Vendor>/<theme>/web</code> directory in a corresponding</li>
<li></li>
<li></li>
</ul>

<h3>Adding conditional comments</h3>
<a href="http://en.wikipedia.org/wiki/Conditional_comment" target="_blank">Conditional comments</a> are meant to give special instructions for Internet Explorer. 
In the terms of adding assets, you can add CSS files to be included for a specific version of Internet Explorer only. 
A sample follows:


<h2 id="layout_markup_css_remove">Remove JavaScript and CSS</h2>

To remove the JavaScript and CSS resources linked in a page `<head>`, make a change similar to the following in a theme extending file:

`app/design/frontend/<Vendor>/<theme>/Magento_Theme/layout/default_head_blocks.xml`

<pre>
&lt;page&gt;
&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;src=&quot;css/styles-m.css&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;src=&quot;my-js.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;src=&quot;Magento_Catalog::js/compare.js&quot;&nbsp;/&gt;
&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&lt;/page&gt;

</pre>

Note, that if a static asset is added with a module path (for example `Magento_Catalog::js/sample.js`) in the initial layout, you need to specify the module path as well when removing the asset.

<h2 id="create_cont">Create a container</h2>

Use the following sample to create (declare) a container:

<pre>&lt;container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" /></pre>

<h2 id="ref_container">Reference a container</h2>

To update a container use the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref" target="_blank">`<referenceContainer>`</a> instruction.

Example: add links to the page header panel.

<pre>
&lt;referenceContainer&nbsp;name=&quot;header.panel&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Framework\View\Element\Html\Links&quot;&nbsp;name=&quot;header.links&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;css_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;header&nbsp;links&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/block&gt;
&lt;/referenceContainer&gt;
</pre>

<h2 id="xml-manage-block">Create a block</h2>

Blocks are created (declared) using the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_block" target="_blank">`<block>`</a> instruction.

Example: add a block with a product SKU information.

<pre>
&lt;block&nbsp;class=&quot;Magento\Catalog\Block\Product\View\Description&quot;&nbsp;name=&quot;product.info.sku&quot;&nbsp;template=&quot;product/view/attribute.phtml&quot;&nbsp;after=&quot;product.info.type&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;at_call&quot;&nbsp;xsi:type=&quot;string&quot;&gt;getSku&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;at_code&quot;&nbsp;xsi:type=&quot;string&quot;&gt;sku&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;css_class&quot;&nbsp;xsi:type=&quot;string&quot;&gt;sku&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/block&gt;

</pre>

<h2 id="xml-manage-ref-block">Reference a block</h2>

To update a block use the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref" target="_blank">`<referenceBlock>`</a> instruction.

Example: pass the image to the `logo` block.

<pre>
&lt;referenceBlock&nbsp;name=&quot;logo&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;logo_file&quot;&nbsp;xsi:type=&quot;string&quot;&gt;images/logo.png&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/referenceBlock&gt;
</pre>

<h2 id="set_template">Set the template used by a block</h2>

To setup template for a block, use the `template` attribute.

Example: change template of the page title block.

<pre>

&lt;referenceBlock&nbsp;name=&quot;page.main.title&quot;&nbsp;template=&quot;html/title_new.phtml&quot;/&gt;

</pre>

<h2 id="layout_markup_modify-block">Modify block arguments</h2>

To modify block arguments, use the `<referenceBlock>` instruction.

Example: change the value of the existing block argument and add a new argument.

Initial block declaration:
<pre>
...
&lt;block&nbsp;class=&quot;Namespace_Module_Block_Type&quot;&nbsp;name=&quot;block.example&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Block&nbsp;Label&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/block&gt;
...
</pre>

Extending layout:

<pre>
...
&lt;referenceBlock&nbsp;name=&quot;block.example&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;arguments&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;Modified&nbsp;block&nbsp;argument&nbsp;-&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;New&nbsp;Block&nbsp;Label&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!-&nbsp;Newly&nbsp;added&nbsp;block&nbsp;argument&nbsp;-&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;name=&quot;custom_label&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Custom&nbsp;Block&nbsp;Label&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/arguments&gt;
&lt;/referenceBlock&gt;&nbsp;
...
</pre>

<h2 id="layout_markup_block-properties">Use block object methods to set block properties</h2>

Block object methods are accessed using the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_act"><code>&lt;action&gt;</code></a> instruction.

Example: Set a page title using the `setPageTitle()` method.

Extending layout:

<pre>
...
&lt;referenceBlock&nbsp;name=&quot;page.main.title&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;action&nbsp;method=&quot;setPageTitle&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;argument&nbsp;translate=&quot;true&quot;&nbsp;name=&quot;title&quot;&nbsp;xsi:type=&quot;string&quot;&gt;Catalog&nbsp;Advanced&nbsp;Search&lt;/argument&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/action&gt;
&lt;/referenceBlock&gt;
...
</pre>

<h2 id="layout_markup_rearrange">Rearrange elements</h2>

In layout files you can change the elements order on a page. This can be done using one of the following:

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_mv" target="_blank">`<move>` instruction</a>: allows changing elements' order and parent.
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_xml-instrux_before-after" target="_blank">`before` and `after` attributes of `<block>`</a>: allows changing elements' order within one parent.

<p></p>
Example of `<move>` usage:
put the stock availability and SKU blocks next to the product price on a product page.

In the Magento Blank theme these elements are located as follows:

<img src="{{ site.baseurl }}common/images/layout_image1.png" />

Let's place the stock availability and SKU blocks after product price block on a product page, and move the review block out of the product-info-price container.
To do this, add the extending `catalog_product_view.xml` in the `app/design/frontend/OrangeCo/orange/Magento_Catalog/layout/` directory:
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
<span class="glyphicon-class">
  <p>To learn how to locate the layout file you need to customize, see <a href="{{site.gdeurl}}frontend-dev-guide/themes/debug-theme.html" target="_blank">Locate templates, layouts, and styles</a>.</p></span>
</div>

<h2 id="layout_markup_remove_elements">Remove elements</h2>

Elements are removed using the `<remove>` instruction.

Example: remove the Compare Products sidebar block from all store pages. This block is declared in `app/code/Magento/Catalog/view/frontend/layout/default.xml`:

<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;referenceContainer&nbsp;name=&quot;sidebar.additional&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;block&nbsp;class=&quot;Magento\Catalog\Block\Product\Compare\Sidebar&quot;&nbsp;name=&quot;catalog.compare.sidebar&quot;&nbsp;template=&quot;product/compare/sidebar.phtml&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/referenceContainer&gt;
...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

To remove the block, add the extending `default.xml` in your theme:
`app/design/frontend/<Vendor>/<theme>/Magento_Catalog/layout/default.xml`

In this file, add the `<remove>` instruction:
<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
...
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;catalog.compare.sidebar&quot;&nbsp;/&gt;
...
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

<h2 id="layout_markup_replace_elements">Replace elements</h2>

To replace an element, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_rem" target="_blank">remove it</a> and add a new one.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html" target="_blank">Layout instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html" target="_blank">Theme design best practices</a>
