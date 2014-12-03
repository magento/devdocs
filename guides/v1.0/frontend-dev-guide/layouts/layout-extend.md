---
layout: default
group: fedg
subgroup: B_Layouts
title: Extend a layout
menu_title: Extend a layout
menu_order: 3
github_link: frontend-dev-guide/layouts/layout-extend.md
---

<h2 id="fedg_layout_extend_merge">Create a theme merging file</h2>

Rather than copy extensive layout code and modify what you want to change, in the Magento system, you must create only a *theme merging file* that contains the changes you want.

To add a theme merging file:

1.	Create a layout file following our <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html#layout_conventions">layout file conventions</a>.
2.	Place the theme merging file according to our location conventions; that is:

<pre>__app/design/[area]/[theme path]
 |__/[your namespace]_[your module name]
   |__/layout
     |--&lt;layout1>.xml
     |--&lt;layout2>.xml</pre>

Where:

*	`[theme_path]` is a path to the theme relative to the themes directory
*	`[area]` is the code of the application area to which the theme applies (typically, `adminhtml` or `frontend`)

<h2 id="fedg_layout_extend_merge">Merge layout files</h2>

Magento merges layout files as follows:

1.	For each layout file in the list:

	a.	Loads layout handle declaration and layout instructions.

	b.	Appends to the result in the following format:

	<script src="https://gist.github.com/xcomSteveJohnson/6c2e7a15fba5d8f14fad.js"></script>

	Where a `handle ID` is defined by the name of the corresponding layout file, and handle attributes are defined by the attributes of the root layout node of this layout file.

2.	Replaces the base URL placeholders in the result.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in layouts</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/theme-xml.html">XML in themes</a>