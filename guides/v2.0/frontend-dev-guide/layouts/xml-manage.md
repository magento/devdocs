---
layout: default
group: fedg
subgroup: B_Layouts
title: Common layout customization tasks
menu_title: Common layout customization tasks
menu_order: 6
version: 2.0
github_link: frontend-dev-guide/layouts/xml-manage.md
redirect_from: /guides/v1.0/frontend-dev-guide/layouts/xml-manage.html
---

<h2>What's in this topic</h2>

This article describes the following typical layout customization tasks:

*	<a href="#layout_markup_columns">Set the page layout</a>
*	<a href="#layout_markup_css">Include static resources (JavaScript, CSS, fonts) in &lt;head&gt;</a>
*	<a href="#layout_markup_css_remove">Remove static resources (JavaScript, CSS, fonts) in &lt;head&gt;</a>
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

{%highlight xml%}
<page layout="2columns-left" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
...
</page>
{%endhighlight xml%}


<h2 id="layout_markup_css">Include static resources (JavaScript, CSS, fonts)</h2>

JavaScript, CSS and other static assets are added in the `<head>` section of a <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configuration</a> file. The default look of a Magento store page `<head>` is defined by `app/code/Magento/Theme/view/frontend/layout/default_head_blocks.xml`. The recommended way to add CSS and JavaScript is to extend this file in your custom theme, and add the assets there.
The following file is a sample of a file you must add:

<code>&lt;theme_dir&gt;/Magento_Theme/layout/default_head_blocks.xml</code>

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <!-- Add local resources -->
    	<css src="css/my-styles.css"/>
    
        <!-- The following two ways to add local JavaScript files are equal -->
        <script src="Magento_Catalog::js/sample1.js"/>
        <link src="js/sample.js"/>
		
    	<!-- Add external resources -->
	    <css src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css" src_type="url" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js" src_type="url" />
        <link src="http://fonts.googleapis.com/css?family=Montserrat" src_type="url" /> 
    </head>
</page>
{%endhighlight xml%}


When adding external resources, specifying the <code>src_type="url"</code> argument value is a must.


You can use either `<link src="js/sample.js"/>` or `<script src="js/sample.js"/>` instruction to add a locally stored JavaScript file to your theme.

The path to assets is specified relatively to one the following locations:
<ul>
<li><code>&lt;theme_dir&gt;/web</code></li>
<li><code>&lt;theme_dir&gt;/&lt;Namespace&gt;_&lt;Module&gt;/web</code></li>

</ul>

<h3>Adding conditional comments</h3>
<a href="http://en.wikipedia.org/wiki/Conditional_comment" target="_blank">Conditional comments</a> are meant to give special instructions for Internet Explorer. 
In the terms of adding assets, you can add CSS files to be included for a specific version of Internet Explorer. 
A sample follows:

{%highlight xml%}
    <head>
        <css src="css/ie-9.css" ie_condition="IE 9" />
    </head>
</page>
{%endhighlight xml%}

This adds an IE conditional comment in the generated HTML, like in the following example:

{%highlight html%}
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" media="all" href="<your_store_web_address>/pub/static/frontend/OrangeCo/orange/en_US/css/ie-9.css" />
<![endif]-->
{%endhighlight html%}

In this example, <code>orange</code> is a custom theme created by the OrangeCo vendor.

<h2 id="layout_markup_css_remove">Remove static resources (JavaScript, CSS, fonts)</h2>

To remove the static resources, linked in a page `<head>`, make a change similar to the following in a theme extending file:

`app/design/frontend/<Vendor>/<theme>/Magento_Theme/layout/default_head_blocks.xml`

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
   <head>
        <!-- Remove local resources -->
        <remove src="css/styles-m.css" />
        <remove src="my-js.js"/>
        <remove src="Magento_Catalog::js/compare.js" />
								
	<!-- Remove external resources -->
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css"/>
        <remove src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"/>
        <remove src="http://fonts.googleapis.com/css?family=Montserrat" /> 
   </head>
{%endhighlight xml%}

Note, that if a static asset is added with a module path (for example `Magento_Catalog::js/sample.js`) in the initial layout, you need to specify the module path as well when removing the asset.

<h2 id="create_cont">Create a container</h2>

Use the following sample to create (declare) a container:

{%highlight xml%}
<container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" />
{%endhighlight xml%}

<h2 id="ref_container">Reference a container</h2>

To update a container use the <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref" target="_blank">`<referenceContainer>`</a> instruction.

Example: add links to the page header panel.

{%highlight xml%}
<referenceContainer name="header.panel">
        <block class="Magento\Framework\View\Element\Html\Links" name="header.links">
            <arguments>
                <argument name="css_class" xsi:type="string">header links</argument>
            </arguments>
        </block>
</referenceContainer>
{%endhighlight xml%}

<h2 id="xml-manage-block">Create a block</h2>

Blocks are created (declared) using the <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_block" target="_blank">`<block>`</a> instruction.

Example: add a block with a product SKU information.

{%highlight xml%}
<block class="Magento\Catalog\Block\Product\View\Description" name="product.info.sku" template="product/view/attribute.phtml" after="product.info.type">
    <arguments>
        <argument name="at_call" xsi:type="string">getSku</argument>
        <argument name="at_code" xsi:type="string">sku</argument>
        <argument name="css_class" xsi:type="string">sku</argument>
    </arguments>
</block>
{%endhighlight xml%}


<h2 id="xml-manage-ref-block">Reference a block</h2>

To update a block use the <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref" target="_blank">`<referenceBlock>`</a> instruction.

Example: pass the image to the `logo` block.

{%highlight xml%}
<referenceBlock name="logo">
        <arguments>
            <argument name="logo_file" xsi:type="string">images/logo.png</argument>
        </arguments>
</referenceBlock>
{%endhighlight xml%}

## Set the template used by a block {#set_template}

There are two ways to set the template for a block:

- using the `template` attribute
- using the `<argument>` instruction

Both approaches are demonstrated in the following examples of changing the template of the page title block.

**Example 1:**

{%highlight xml%}
 <referenceBlock name="page.main.title" template="%Namespace_Module::new_template.phtml%"/>
{%endhighlight%}

**Example 2:** 

{%highlight xml%}
 <referenceBlock name="page.main.title">
        <arguments>
            <argument name="template" xsi:type="string">%Namespace_Module::new_template.phtml%</argument>
        </arguments>
 </referenceBlock>
{%endhighlight%}

In both example, the template is specified according to the following:

 * `Namespace_Module:` defines the module the template belongs to. For example, `Magento_Catalog`.
 * `new_template.phtml`: the path to the template relatively to the `templates` directory. It might be `<module_dir>/view/<area>/templates` or `<theme_dir>/<Namespace_Module>/templates`.


<div class="bs-callout bs-callout-info" id="info">
  <p>Template values specified as attributes have higher priority during layout generation, than the ones specified using <code>&lt;argument&gt;</code>. It means, that if for a certain block, a template is set as attribute, it will override the value you specify in <code>&lt;argument&gt;</code> for the same block.</p>
</div>

<h2 id="layout_markup_modify-block">Modify block arguments</h2>

To modify block arguments, use the `<referenceBlock>` instruction.

Example: change the value of the existing block argument and add a new argument.

Initial block declaration:

{%highlight xml%}
...
<block class="Namespace_Module_Block_Type" name="block.example">
    <arguments>
        <argument name="label" xsi:type="string">Block Label</argument>
    </arguments>
</block>
...
{%endhighlight xml%}

Extending layout:

{%highlight xml%}
...
<referenceBlock name="block.example">
    <arguments>
        <!-- Modified block argument -->
        <argument name="label" xsi:type="string">New Block Label</argument>
        <!- Newly added block argument -->
        <argument name="custom_label" xsi:type="string">Custom Block Label</argument>
    </arguments>
</referenceBlock> 
...
{%endhighlight xml%}

<h2 id="layout_markup_block-properties">Use block object methods to set block properties</h2>

There are two ways to access block object methods:

- using the <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#argument"><code>&lt;argument&gt;</code></a> instruction for `<block>` or `<referenceBlock>`
- using the <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_act"><code>&lt;action&gt;</code></a> instruction. This way is not recommended, but can be used for calling those methods, which are not refactored yet to be accessed through `<argument>`. 

Example 1: Set a CSS class and add an attribute for the product page using `<argument>`.

Extending layout:

{%highlight xml%}
	<referenceBlock name="page.main.title">
		<arguments>
		    <argument name="css_class" xsi:type="string">product</argument>
		    <argument name="add_base_attribute" xsi:type="string">itemprop="name"</argument>
		</arguments>
	</referenceBlock>
{%endhighlight xml%}

Example 2: Set a page title using `<action>`. 

<div class="bs-callout bs-callout-warning" id="info">
<span class="glyphicon-class">
 <p>Do not use <code>&lt;action&gt;</code>, if the method implementation allows calling it using <code>&lt;argument&gt;</code></a> for <code>&lt;block&gt;</code> or <code>&lt;referenceBlock&gt;</code>.</p></span>
</div>


Extending layout:

{%highlight xml%}
	...
	<referenceBlock name="page.main.title">
	    <action method="setPageTitle">
	        <argument translate="true" name="title" xsi:type="string">Catalog Advanced Search</argument>
	    </action>
	</referenceBlock>
	...
{%endhighlight xml%}

<h2 id="layout_markup_rearrange">Rearrange elements</h2>

In layout files you can change the elements order on a page. This can be done using one of the following:

* <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_mv" target="_blank">`<move>` instruction</a>: allows changing elements' order and parent.
* <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_xml-instrux_before-after" target="_blank">`before` and `after` attributes of `<block>`</a>: allows changing elements' order within one parent.

<p></p>
Example of `<move>` usage:
put the stock availability and SKU blocks next to the product price on a product page.

In the Magento Blank theme these elements are located as follows:

<img src="{{ site.baseurl }}common/images/layout_image1.png" />

Let's place the stock availability and SKU blocks after product price block on a product page, and move the review block out of the product-info-price container.
To do this, add the extending `catalog_product_view.xml` in the `app/design/frontend/OrangeCo/orange/Magento_Catalog/layout/` directory:

{%highlight xml%}
<page layout="1column" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <move element="product.info.stock.sku" destination="product.info.price" after="product.price.final"/>
        <move element="product.info.review" destination="product.info.main" before="product.info.price"/>
    </body>
</page>

{%endhighlight xml%}

This would make the product page look like following:

<img src="{{ site.baseurl }}common/images/layout_image2.png" />

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>To learn how to locate the layout file you need to customize, see <a href="{{page.baseurl}}frontend-dev-guide/themes/debug-theme.html" target="_blank">Locate templates, layouts, and styles</a>.</p></span>
</div>

<h2 id="layout_markup_remove_elements">Remove elements</h2>

Elements are removed using the `remove` attribute for the `<referenceBlock>` and `<referenceContainer>`. 

**Example**: remove the Compare Products sidebar block from all store pages. 

This block is declared in `app/code/Magento/Catalog/view/frontend/layout/default.xml`:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
...
        <referenceContainer name="sidebar.additional">
            <block class="Magento\Catalog\Block\Product\Compare\Sidebar" name="catalog.compare.sidebar" template="product/compare/sidebar.phtml"/>
        </referenceContainer>
...
    </body>
</page>
{%endhighlight xml%}


To remove the block, add the extending `default.xml` in your theme:
`<theme_dir>/Magento_Catalog/layout/default.xml`

In this file, reference the element having added the `remove` attribute:

{%highlight xml%}

<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
...
        <referenceBlock name="catalog.compare.sidebar" remove="true" />
...
    </body>
</page>

{%endhighlight xml%}


<h2 id="layout_markup_replace_elements">Replace elements</h2>

To replace an element, <a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_rem" target="_blank">remove it</a> and add a new one.


#### Related topics:

*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html" target="_blank">Layout instructions</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a>

