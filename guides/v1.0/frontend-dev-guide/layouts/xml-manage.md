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

This topic shows you how to customize layout by using <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> layout files:

<p class="q">Question to reviewer: Do we only use page configuration files, or page layouts as well? </p>

*	<a href="#layout_markup_bad">Important things to remember before you start</a>
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




<h2 id="layout_markup_bad">Before you start customizing layout</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend that you not make the following changes:

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

Javascript, CSS and other static assets are added in the `<head>` section of a page layout. The default look of a Magento store page `<head>` is defined by `app/code/Magento/Theme/view/frontend/layout/default_head_blocks.xml`. The recommended way to add CSS and Javascript is to extend this file in your custom theme, and add the assets there. 
Following is a sample of a file you need to add:

`app/design/frontend/<Vendor>/<theme>/Magento_Theme/layout/default_head_blocks.xml`

<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;css&nbsp;src=&quot;css/my-styles.css&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;link&nbsp;src=&quot;sample.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;script&nbsp;src=&quot;Magento_Catalog::js/sample1.js&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;
&lt;/page&gt;

</pre>

You can use either `<link src="sample.js"/>` or `<script src="sample.js"/>` instruction to add a JavaScript file to your theme



<h2 id="layout_markup_css_remove">Remove JavaScript and CSS</h2>

To remove the JavaScript and CSS resources linked in page `<head>`, make a change similar to the following in a theme extending file:

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
<p>Replace the values with your own. For more information, see the earlier sections in this topic.</p>

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

Example: add a page title block

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

Example: Set a page title using the `setTitle()` method.

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

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#edg_layout_xml-instruc_ex_mv" target="_blank">`<move>` instruction</a>: allows changing an element's parent. 
* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_xml-instrux_before-after" target="_blank">`before` and `after` attributes of `<block>`</a>: allows changing the elementes order within one parent.

Example of `<move>` usage:
put the stock availability and SKU blocks next to the product price on a product page.

In the Magento Blank theme these elements are located as follows:

<img src="{{ site.baseurl }}common/images/layout_image1.png" />

Let's place the stock availability and SKU blocks after product price block on a product page, and move the review block out of the product-info-price container.
To do this, add an extending `catalog_product_view.xml` in the `app/design/frontend/OrangeCo/orange/Magento_Catalog/layout/` directory:
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

Elements are removed using the `<remove>` instruction.

For example, remove the Compare Products sidebar block from all store pages. This block is declared in `app/code/Magento/Catalog/view/frontend/layout/default.xml`:

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

To remove the block, add an extending `default.xml` in your theme: 
`app/design/frontend/<Vendor>/<theme>/Magento_Catalog/frontend/layout/default.xml`
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

To replace an element, <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html#layout_markup_remove_elements">remove it</a> and add a new one.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
