---
group: frontend-developer-guide
title: Common layout customization tasks
functional_areas:
  - Frontend
---

## What's in this topic

This article describes the following typical layout customization tasks:

- [Set the page layout](#layout_markup_columns) 
- [Include static resources (JavaScript, CSS, fonts)](#layout_markup_css) 
- [Remove static resources (JavaScript, CSS, fonts)](#layout_markup_css_remove) 
- [Create a container](#create_cont) 
- [Reference a container](#ref_container) 
- [Create a block](#xml-manage-block) 
- [Set a block\'s template](#set_template) 
- [Modify block arguments](#layout_markup_modify-block) 
- [Reference a block](#xml-manage-ref-block) 
- [Use block object methods to set block properties](#layout_markup_block-properties) 
- [Rearrange elements](#layout_markup_rearrange) 
- [Remove elements](#layout_markup_remove_elements) 
- [Replace elements](#layout_markup_replace_elements)

{:.bs-callout .bs-callout-info}
To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box Magento [module](https://glossary.magento.com/module) and [theme](https://glossary.magento.com/theme) layouts. To customize layout, create extending and overriding layout files in your custom theme.

## Set the page layout {#layout_markup_columns}

The type of page layout to be used for a certain page is defined in the page configuration file, in the `layout` attribute of the root `<page>` node.

Example:
Change the layout of Advanced Search page from default "1-column" to "2-column with left bar". To do this, extend `catalogsearch_advanced_index.xml` in your theme by adding the following layout:

`app/design/frontend/<Vendor>/<theme>/Magento_CatalogSearch/layout/catalogsearch_advanced_index.xml`

```xml
<page layout="2columns-left" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
...
</page>
```

## Include static resources (JavaScript, CSS, fonts) {#layout_markup_css}

JavaScript, CSS, and other static assets are added in the `<head>` section of a [page configuration]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf) file. The default look of a Magento store page `<head>` is defined by `app/code/Magento/Theme/view/frontend/layout/default_head_blocks.xml`. The recommended way to add CSS and JavaScript is to extend this file in your custom theme, and add the assets there.

The following file is a sample of a file you must add:

`<theme_dir>/Magento_Theme/layout/default_head_blocks.xml`

```xml
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
        <link rel="stylesheet" type="text/css" src="http://fonts.googleapis.com/css?family=Montserrat" src_type="url" /> 
    </head>
</page>
```


When adding external resources, specifying the `src_type="url"` argument value is a must.

If you'd like to include a google webfont, you have to add the `rel="stylesheet" type="text/css"` to the `<link>` tag, otherwise it won't work.


You can use either `<link src="js/sample.js"/>` or `<script src="js/sample.js"/>` instruction to add a locally stored JavaScript file to your theme.

The path to assets is specified relatively to one of the following locations:

- `<theme_dir>/web`
- `<theme_dir>/<Namespace>_<Module>/web`


### Adding conditional comments
[Conditional comments](http://en.wikipedia.org/wiki/Conditional_comment) are meant to give special instructions for Internet Explorer. 

In the terms of adding assets, you can add CSS files to be included for a specific version of Internet Explorer. 
A sample follows:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/ie-9.css" ie_condition="IE 9" />
    </head>
</page>
```

This adds an IE conditional comment in the generated HTML, like in the following example:

```html
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" media="all" href="<your_store_web_address>/pub/static/frontend/OrangeCo/orange/en_US/css/ie-9.css" />
<![endif]-->
```

In this example, `orange` is a custom theme created by the OrangeCo vendor.

## Remove static resources (JavaScript, CSS, fonts) {#layout_markup_css_remove}

To remove the static resources, linked in a page `<head>`, make a change similar to the following in a theme extending file:

`app/design/frontend/<Vendor>/<theme>/Magento_Theme/layout/default_head_blocks.xml`

```xml
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
</page>
```

Note, that if a static asset is added with a module path (for example `Magento_Catalog::js/sample.js`) in the initial layout, you need to specify the module path as well when removing the asset.

## Create a container {#create_cont}

Use the following sample to create (declare) a container:

```xml
<container name="some.container" as="someContainer" label="Some Container" htmlTag="div" htmlClass="some-container" />
```

## Reference a container {#ref_container}

To update a container use the [`<referenceContainer>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref) instruction.

Example: add links to the page header panel.

```xml
<referenceContainer name="header.panel">
    <block class="Magento\Framework\View\Element\Html\Links" name="header.links">
        <arguments>
            <argument name="css_class" xsi:type="string">header links</argument>
        </arguments>
    </block>
</referenceContainer>
```

## Create a block {#xml-manage-block}

Blocks are created (declared) using the [`<block>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_block) instruction.

Example: add a block with a product [SKU](https://glossary.magento.com/sku) information.

```xml
<block class="Magento\Catalog\Block\Product\View\Description" name="product.info.sku" template="product/view/attribute.phtml" after="product.info.type">
    <arguments>
        <argument name="at_call" xsi:type="string">getSku</argument>
        <argument name="at_code" xsi:type="string">sku</argument>
        <argument name="css_class" xsi:type="string">sku</argument>
    </arguments>
</block>
```

## Reference a block {#xml-manage-ref-block}

To update a block use the [`<referenceBlock>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_ref) instruction.

Example: pass the image to the `logo` block.

```xml
<referenceBlock name="logo">
    <arguments>
        <argument name="logo_file" xsi:type="string">images/logo.png</argument>
    </arguments>
</referenceBlock>
```

## Set a block template {#set_template}

There are two ways to set the template for a block:

- using the `template` attribute
- using the `<argument>` instruction

Both approaches are demonstrated in the following examples of changing the template of the page title block.

**Example 1:**

```xml
 <referenceBlock name="page.main.title" template="%Namespace_Module::new_template.phtml%"/>
```

**Example 2:** 

```xml
 <referenceBlock name="page.main.title">
     <arguments>
         <argument name="template" xsi:type="string">%Namespace_Module::new_template.phtml%</argument>
     </arguments>
 </referenceBlock>
```

In both example, the template is specified according to the following:

 * `Namespace_Module:` defines the module the template belongs to. For example, `Magento_Catalog`.
 * `new_template.phtml`: the path to the template relatively to the `templates` directory. It might be `<module_dir>/view/<area>/templates` or `<theme_dir>/<Namespace_Module>/templates`.


{:.bs-callout .bs-callout-info}
Template values specified as attributes have higher priority during layout generation, than the ones specified using `<argument>`. It means, that if for a certain block, a template is set as attribute, it will override the value you specify in `<argument>` for the same block.

## Modify block arguments {#layout_markup_modify-block}

To modify block arguments, use the `<referenceBlock>` instruction.

Example: change the value of the existing block argument and add a new argument.

Initial block declaration:

```xml
<block class="Namespace_Module_Block_Type" name="block.example">
    <arguments>
        <argument name="label" xsi:type="string">Block Label</argument>
    </arguments>
</block>
```

Extending layout:

```xml
<referenceBlock name="block.example">
    <arguments>
        <!-- Modified block argument -->
        <argument name="label" xsi:type="string">New Block Label</argument>
        <!-- Newly added block argument -->
        <argument name="custom_label" xsi:type="string">Custom Block Label</argument>
    </arguments>
</referenceBlock> 
```

## Use block object methods to set block properties {#layout_markup_block-properties}

There are two ways to access block object methods:

- using the [`<argument>`] instruction for `<block>` or `<referenceBlock>`
- using the [`<action>`] instruction. This way is not recommended, but can be used for calling those methods, which are not refactored yet to be accessed through `<argument>`. 

Example 1: Set a CSS class and add an attribute for the product page using `<argument>`.

Extending layout:

```xml
<referenceBlock name="page.main.title">
    <arguments>
        <argument name="css_class" xsi:type="string">product</argument>
        <argument name="add_base_attribute" xsi:type="string">itemprop="name"</argument>
    </arguments>
</referenceBlock>
```

Example 2: Set a page title using `<action>`. 

{:.bs-callout .bs-callout-info}
Do not use `<action>`, if the method implementation allows calling it using `<argument>` for `<block>` or `<referenceBlock>`.


Extending layout:

```xml
	<referenceBlock name="page.main.title">
	    <action method="setPageTitle">
	        <argument translate="true" name="title" xsi:type="string">Catalog Advanced Search</argument>
	    </action>
	</referenceBlock>
```

## Rearrange elements {#layout_markup_rearrange}

In layout files you can change the elements order on a page. This can be done using one of the following:

* [`<move>` instruction]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_mv): allows changing elements' order and parent.
* [`before` and `after` attributes of `<block>`]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_xml-instrux_before-after): allows changing elements' order within one parent.


Example of `<move>` usage:
put the stock availability and SKU blocks next to the product price on a product page.

In the Magento Blank theme these elements are located as follows:

![layout image1]

Let's place the stock availability and SKU blocks after product price block on a product page, and move the review block out of the product-info-price container.
To do this, add the extending `catalog_product_view.xml` in the `app/design/frontend/OrangeCo/orange/Magento_Catalog/layout/` directory:

```xml
<page layout="1column" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <move element="product.info.stock.sku" destination="product.info.price" after="product.price.final"/>
        <move element="product.info.review" destination="product.info.main" before="product.info.price"/>
    </body>
</page>

```

This would make the product page look like following:

![layout image2]

{:.bs-callout .bs-callout-info}
To learn how to locate the layout file you need to customize, see [Locate templates, layouts, and styles].

## Remove elements {#layout_markup_remove_elements}

Elements are removed using the `remove` attribute for the `<referenceBlock>` and `<referenceContainer>`. 

**Example**: remove the Compare Products [sidebar](https://glossary.magento.com/sidebar) block from all store pages. 

This block is declared in `app/code/Magento/Catalog/view/frontend/layout/default.xml`:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
...
        <referenceContainer name="sidebar.additional">
            <block class="Magento\Catalog\Block\Product\Compare\Sidebar" name="catalog.compare.sidebar" template="product/compare/sidebar.phtml"/>
        </referenceContainer>
...
    </body>
</page>
```


To remove the block, add the extending `default.xml` in your theme:
`<theme_dir>/Magento_Catalog/layout/default.xml`

In this file, reference the element having added the `remove` attribute:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
...
        <referenceBlock name="catalog.compare.sidebar" remove="true" />
...
    </body>
</page>

```

## Replace elements {#layout_markup_replace_elements}

To replace an element, [remove it]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_rmv) and add a new one.

#### Related topics:

*	[Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)
*	[Extend a layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html)



[`<argument>`]: {{page.baseurl}}/frontend-dev-guide/layouts/xml-instructions.html#argument
[`<action`]: {{page.baseurl}}/frontend-dev-guide/layouts/xml-instructions.html#fedg_layout_xml-instruc_ex_act
[layout image1]: {{site.baseurl}}/common/images/layout_image1.png
[layout image2]: {{site.baseurl}}/common/images/layout_image2.png
[Locate templates, layouts, and styles]: {{page.baseurl}}/frontend-dev-guide/themes/debug-theme.html