---
layout: default
group: fedg
subgroup: B_Layouts
title: Layouts
menu_title: Layouts
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/layouts/layout-overview.md
---

Magento implements the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">Model-view-controller</a> architecture pattern; meaning, the Magento software is architected into *layers*, including the *view layer*.

<h2>Layout structure</h2>

The major part of the view layer of Magento application is layout. Functionally, layout is a page structure, represented by hierarchy of elements (element tree), which can be of two types: blocks and containers. Technically, layout is defined in the .xml files, which contain element declarations and element manipulation instructions.

 So what a layout file does is identify an existing block or container in a tree and change it in some way. Changes are to add some more content (e.g. there might be a side bar container to which some more content is added), or remove content (an extension might remove some core functionality, then add replacement functionality). Layouts are like wire-frames - they control the structure of the page tree. Blocks and PHTML files fill in the detailed markup within the tree. 

The basic components of Magento page design are blocks and containers. Simply put, containers contain blocks, other containers, and other layout elements.

A *container* exists for the sole purpose of assigning content structure to a page. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

The following figure shows an example:

![A container is basically an empty object that can be filled with visual content.]({{ site.baseurl }}common/images/layouts_containers_defn.jpg)

A *block* produces the actual content inside each structural block. A block represents each feature on a page and employs templates to generate the HTML to inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.

The following figure shows an example:

![A *block* produces the actual content inside each structural block.]({{ site.baseurl }}common/images/layouts_block_defn.jpg)



There are three types of layout files:

- Page layout: declares high-level page structure using only containers and operation with them: move, remove, update, referenceContainer.

- Page configuration: "fills" the containers defined in a layout file by the particular functionality using blocks.

- Generic layouts: a variation of page configuration used for pages loaded by AJAX requests.

For the sake of stability and easy maintenance, do not edit the out-of-the-box Magento module and theme layouts. Create a custom theme instead, where you can extend or overridde module and parent theme layouts.



The view layer is responsible for representing the data
<h2 id="layout_overview">Overview</h2>

To customize a theme layout for your store, you can:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend</a> a parent layout.
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override</a> a parent layout using a custom theme.

To perform either task, you must use <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML instructions</a>, which are directives that render your store layout according to your configuration. No PHP coding is required to work with themes.

  <div class="bs-callout bs-callout-warning" id="warning">
    <p>Although you can edit any layout file, Magento strongly recommends you not modify <a href="#layout_terms">default layouts</a>; instead, perform all customizations in theme layout files, which can either extend default layouts or override them.</p>
  </div>

Magento layouts can be provided by modules and by design themes. To change the appearance of your storefront, you need only to provide additional layout instructions. When Magento processes layout files, it merges them with other layouts or overrides them. Layout files with such instructions are called *extending layout files*.

<div class="bs-callout bs-callout-info" id="info">
  <p>Unlike previous versions of Magento, there is no need to duplicate any layout instructions that are left unchanged.</p>
</div>

Finally, you can also override a theme layout completely. Layout files with such instructions are called *overriding layout files*. These files override default layouts or parent theme layouts.

<h3 id="layout_overview_blocks">About blocks and containers</h3>

 for display on a web browser. To that end, your *page layout* is defined by a page structure that is in turn represented by hierarchy of <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">blocks and containers</a>.

Before you start to work on your theme, you must understand the following terms:

Theme

:	Any combination of layout, template, locale, and styles that create the visual experience of your storefront.

Layout

:	Defined in `.xml` layout files that contain element declarations and element manipulation instructions. A layout file can either define a particular layout or it can update another layout.

	To create a compatible, scalable, and easily supported Magento customization, you must know how layout files are organized and processed. For more information, see <a href="#layout_types">Layout File Types</a>.

Theme layout

:	Layouts for themes which can extend the default layout (these are referred to as <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">extending theme files</a> and override default layouts or parent themes (<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">overriding theme files</a>).

Layout handle

:	A uniquely identified set of layout instructions that the Magento application uses to determine what to do with the updates nested by it.

	There are three kinds of layout handles:

	*	Page type layout handles&mdash;Synonyms of the page type identifiers. Correspond to "full action names" of controller actions; for example, `catalog_product_view`
	*	Page layout handles&mdash;Identify specific pages. Correspond to controller actions with parameters that identify specific pages; for example, `catalog_product_view_type_simple_id_128`
	*	Arbitrary handles&mdash;Do not correspond to any page type, but other handles use them by inclusion.

Base layout

:	Layout provided by Magento that contains view files common for all areas (that is, common view files for `adminhtml`, `frontend`, and any other Magento areas). Each area also has its own default layout.

Default layout

:	Layout provided by Magento, extension provider, or in-house developer. A default layout defines the default look and feel of the storefront. Unlike earlier versions of Magento, you should not change the default layout directly and you do not have to copy the default layout to start developing a custom layout.

	Instead, you override layout behavior by modifying only the page elements you want to change.

Extending layout

:	Layouts with instructions to override selected elements of a default layout. Magento merges the extending layout with the default or parent layout, overriding the elements you want to change. For more information, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>.

Overriding layout

:	Alternative to Extend a layout; meaning, to completely change a default layout, you can override its behavior, including moving or removing blocks; modifying method arguments; removing all layout handle instructions; and setting XML attributes of blocks and containers. For more information, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>.

<h2 id="layout_types">Layout file types</h2>

Magento supports the following types of layouts:

*	Default layouts&mdash;Layout files provided by Magento. Do not change these files unless they are in your custom module.

	Example: <a href="{{ site.mage2000url }}blob/master/app/code/Magento/Checkout/view/frontend/layouts/checkout_cart_item_renderers.xml" target="_blank">app/code/Magento/Checkout/view/frontend/layouts/checkout_cart_item_renderers.xml</a>

	Following is where you create layout files for your namespace and module:

	<pre>__app/code/[your namespace]/[your module]
      |__/view
         |__/[area]
            |__/layout
               |--[layout_file1].xml
               |--[layout_file2].xml</pre>

*	Theme layouts&mdash;Layout files for themes. Theme layouts can extend the default layout (these are referred to as *extending theme files*) and override default layouts or parent theme layouts (referred to as *overriding default layouts* or *overriding theme layouts*).

	Example: <a href="{{ site.mage2000url }}blob/master/app/code/Magento/Checkout/view/frontend/layouts/checkout_cart_index.xml" target="_blank">app/design/frontend/magento_plushe/Magento_Checkout/layput/checkout_cart_index.xml</a>

	<pre>__app/design/[area]/[path to your theme]
  |__/[your namespace]/[your module]
		|__/layout
			|--[layout1].xml
			|--[layout2].xml
			|__/override/base/
				|--[layout1].xml</pre>

<h2 id="layout_conventions">Layout file conventions</h2>

To be processed correctly, all layout files must meet the following requirements:

*	A single layout file always declares a single layout handle and defines layout instructions for that layout handle.
*	The layout file name defines the name of the layout handle.
*	The layout file is located according to convention (`app/code/[vendor name]/[module name]/view/frontend/layout`); for example:

	<a href="{{ site.mage2000url }}blob/master/app/code/Magento/Checkout/view/frontend/layouts/checkout_cart_index.xml" target="_blank">Sample layout file</a>

`checkout_cart_index.xml` defines several handles, including `checkout_cart_item_renderers`.

Magento automatically detects layout files located according to convention.

<h2 id="layout_processing">Layout file processing</h2>

For more information about how Magento processes layout files, see the following sections:

*	<a href="#layout_processing_ordering">Ordering Layout Files</a>
*	<a href="#layout_processing_how">How the Magento Software Processes Layouts</a>
*	<a href="#layout_process_ex">Example of Layout Processing</a>

<h3 id="layout_processing_ordering">Ordering Layout Files</h3>

Magento processes layout files in the following precedence order:

*	Files from different modules:
	*	By module dependencies, that is, dependent module after modules on which it depends
	*	Alphabetically by module names, if module dependencies are not defined
*	Files in the same module load alphabetically by file name

<h3 id="layout_processing_how">Layout process flow</h3>

The Magento software:

1.	Collects all default layouts from modules. The order is determined by module dependencies and by alphabetical order of module names.
2.	Determines the sequence of inherited themes `[<parent_theme>, ..., <parent1_theme>] <current_theme>`
3.	Iterates the sequence of themes:

	a.	Adds all extending theme layouts to the list.

	b.	Replaces overridden default layouts.

	c. For all themes except the parent theme, replaces overridden theme layouts.

1.	Extends layout files from the list. For details about extending layouts, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>Layout files that belong to inactive modules or modules with disabled output are ignored.</p>
</div>

<h3 id="layout_process_ex">Layout processing example</h3>

Following is an illustration of how layout processing works for two modules and two themes:

![When Magento processes themes, it overrides layout 1 in module 1 because of a theme override. Layout 1 of the parent theme is also overriden the same way.]({{ site.baseurl }}common/images/layout_processing_dev.png)


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">Containers and blocks</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento 2 UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in layouts</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
*	<a href="{{ site.gdeurl }}architecture/behavior/xlate.html">Magento 2 localization</a>

