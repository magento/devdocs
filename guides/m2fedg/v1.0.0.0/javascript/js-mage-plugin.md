---
layout: howtom2devgde_chapters_fedg
title: Using the Magento Mage JavaScript Plug-In
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/javascript/js-mage-plugin.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_using-ui-lib_overview">Overview of the Mage Plug-In</h2>

The Mage plug-in extends JavaScript and modifies initialization parameters on the fly in Magento.

Using the Mage plug-in, you can:

*	Modify the list of resources for existing components.
*	Add a new component.
*	Extend an existing component.
*	Modify arguments (options) of a component's initialization method, including modification of the component's name.
*	Manage the order in which components initialize.
*	Initialize components using the data attribute of a DOM element.

Using Mage plugin decreases the amount of inline JavaScript by loading only the necessary components for a page.

<h2 id="fedg_using-ui-lib_declare">Declaring Components</h2>

You can declare components for an entire Magento area or for specific pages as discussed in the sections that follow.

<h3 id="fedg_using-ui-lib_declare-area">Declaring Components for Application Areas</h3>

In a layout file, a block declaring components is added as child <code>&lt;head</code> block.

For example, in the following `main.xml`, the `head.components` block, which contains the template with components declaration, is the child block of the `head` block.

<script src="https://gist.github.com/xcomSteveJohnson/977c1bfe19337b30d111.js"></script>

The `head.components` block template can be like following:

<script src="https://gist.github.com/xcomSteveJohnson/2050338cfc1735de73fd.js"></script>

This template contains the declaration of all common components for the whole application area. In the template  the `$.mage.component helper` is called, which stores components' dependencies on resources.

`$.mage.component` accepts any of the following as arguments:

*	An object, where `key` is a component's name, and `value` is an array of resources' URLs
*	Two arguments: first is a component's name (string), and second an array of resource URLs.

	(In the preceding example, components and resources URLs are passed to `$.mage.component` as objects.)
	
<h3 id="fedg_using-ui-lib_declare-page">Declaring Components for Specific Pages</h3>

To declare a particular component for a specific page:

1.	Add a new child block for the `head.components` block in the module layout file.
2.	Declare a new component or extend the existing one in the `.phtml` template of the newly added block.

Example:
	
1.	 Add the `cms_page_head_components` block as a child block of `head.components`: 	<script src="https://gist.github.com/xcomSteveJohnson/60e6e8b7b9566c09ae22.js"></script>

2.	Extend the existing form and validation components by adding the components' resources to the template:

	<script src="https://gist.github.com/xcomSteveJohnson/b8918c00a29cd567506a.js"></script>
	



#### Related Topics:

