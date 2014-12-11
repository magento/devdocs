---
layout: default
group:
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




For the sake of stability and easy maintenance, do not edit the out-of-the-box Magento module and theme layouts. Create a custom theme instead, where you can extend or override module and parent theme layouts.

To customize the layout, add layout overrides or extensions in your theme.

<h2 id="layout_overview_blocks">Basic layout elements</h2>

The basic components of Magento page design are blocks and containers. Simply put, containers contain blocks, other containers, and other layout elements.

A *container* exists for the sole purpose of assigning content structure to a page. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

The following figure shows an example:

<img src="{{ site.baseurl }}common/images/layouts_containers_defn.jpg"/>

A *block* produces the actual content inside each structural block. A block represents each feature on a page and employs templates to generate the HTML to inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.

The following figure shows an example:

<img src="{{ site.baseurl }}common/images/layouts_block_defn.jpg"/>

<h2>Main concepts</h2>
Before you start to work on your theme, you must understand the following terms:

*Theme*

Any combination of layout, template, locale, and styles that create the visual experience of your storefront.


<u> Layout file types: by role </u>

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">Page layout</a>: declares high-level page structure using only containers and operation with them.

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">Page configuration</a>: "fills" the containers defined in a layout file by the particular functionality using blocks.

* <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#page-types-generic" target="_blank">Generic layouts</a>: a variation of page configuration used for pages loaded by AJAX requests.


<span id="handle">*Layout handle* </span>

A uniquely identified set of layout instructions that the Magento application uses to determine what to do with the updates nested by it.

Layout handles include:

* Page type layout handles: Synonyms of the page type identifiers. Corresponds to "full action names" of controller actions; for example, `catalog_product_view`
* Page layout handles: Identifies specific pages. Correspond to controller actions with parameters that identify specific pages; for example, `catalog_product_view_type_simple_id_128`
* Arbitrary handles: Does not correspond to any page type, but other handles use them by inclusion.

<p class=q>To reviewer: is it true about handle?</p>



<u id="location"> Layout file types: by location </u>

*Base layout*

Layout files provided by modules. Conventional location: `app/code/<Vendor>/<Module>/view/`

<!--
Default layout

:	Layout provided by Magento, extension provider, or in-house developer. A default layout defines the default look and feel of the storefront. Unlike earlier versions of Magento, you should not change the default layout directly and you do not have to copy the default layout to start developing a custom layout.

Instead, you override layout behavior by modifying only the page elements you want to change.

-->

*Theme layout*

Layout files provided by themes. Conventional location:` app/design/frontend/<theme_path>/<Vendor>_<Module>`

<u>By type of customization</u>

<a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">*Extending layout*</a>

You can provide additional instructions for the existing layout files layout files in addition to existing files. In these layout files you need to add layout instructions which Magento will merge with existing layouts. Layout instructions that are left unchanged are not duplicated.

<a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-override.html" target="_blank">*Overriding layout*</a>

A layout to be used instead a certain base or theme layout.


<h2 id="layout_conventions">Layout file conventions</h2>

To be processed correctly, all layout files must meet the following requirements:

*	A single layout file always declares a single layout handle and defines layout instructions for that layout handle.
*	The layout file name defines the name of the layout handle.
*	The layout file is located according to convention (`app/code/<Vendor>/<Module>/view/frontend/layout`); for example:

	<a href="{{ site.mage2000url }}app/code/Magento/Checkout/view/frontend/layout/checkout_cart_index.xml" target="_blank">Sample layout file</a>

`checkout_cart_index.xml` defines several handles, including `checkout_cart_item_renderers`.

Magento automatically detects layout files located according to convention.

<h2 id="layout_processing">Layout file processing</h2>

For more information about how Magento processes layout files, see the following sections:

*	<a href="#layout_processing_ordering">Ordering Layout Files</a>
*	<a href="#layout_processing_how">How the Magento Software Processes Layouts</a>
*	<a href="#layout_process_ex">Example of Layout Processing</a>

<h3 id="layout_processing_ordering">Precedence of layout files</h3>

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

1.	Extends layout files from the list. For details about layout extensions, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>.

<div class="bs-callout bs-callout-info" id="info">
  <p>Layout files that belong to inactive modules or modules with disabled output are ignored.</p>
</div>



#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">Containers and blocks</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-manage.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
*	<a href="{{ site.gdeurl }}architecture/behavior/xlate.html">Translation</a>

