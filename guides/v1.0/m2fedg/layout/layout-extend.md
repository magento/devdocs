---
layout: howtom2devgde_chapters_fedg
title: Extending a Page Layout
---
 
<h1 id="layout_extend">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/m2fedg/layout/layout-extend.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_layout_extend_merge">Creating a Theme Merging File</h2>

Rather than copy extensive layout code and modify what you want to change, in Magento 2 you must only create a *theme merging file* that contains the changes you want.

To add a theme merging file:

1.	Create a layout file following our <a href="{{ site.githuburl }}guides/v1.0/m2fedg/layout/layout-overview#layout_conventions">layout file conventions</a>.
2.	Place the theme merging file according to our location conventions; that is:

<pre>__app/design/[area]/[theme path]
 |__/[your namespace]_[your module name]
   |__/layout
     |--&lt;layout1>.xml
     |--&lt;layout2>.xml</pre>
	 
Where:

*	`[theme_path]` is a path to the theme relative to the themes directory
*	`[area]` is the code of the application area to which the theme applies (typically, `adminhtml` or `frontend`)

<h2 id="fedg_layout_extend_merge">Merging Layout Files</h2>

Magento merges layout files as follows:

1.	For each layout file in the list:

	a.	Loads layout handle declaration and layout instructions.
	
	b.	Appends to the result in the following format:
	
	<script src="https://gist.github.com/xcomSteveJohnson/6c2e7a15fba5d8f14fad.js"></script>
	
	Where a `handle ID` is defined by the name of the corresponding layout file, and handle attributes are defined by the attributes of the root layout node of this layout file.
	
2.	Replaces the base URL placeholders in the result.


#### Related Topics:

*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-override.html">Overriding a Page Layout</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-theme-bestpr.html">Best Practices for Theme Design</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/magento-ui-lib.html">Using the Magento 2 UI Library</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-xml-page-markup.html">Using XML to Manage Your Page Markup</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-xml-instrux.html">Using XML Instructions In Your Theme</a>