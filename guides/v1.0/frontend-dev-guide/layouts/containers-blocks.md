---
layout: howtom2devgde_chapters_fedg
title: Containers and blocks
---

<h1 id="fedg_layout_containers-blocks">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/layouts/containers-blocks.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

The basic components of Magento page design are blocks and containers. Simply put, containers contain blocks, other containers, and other layout elements.

A *container* exists for the sole purpose of assigning content structure to a page. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

The following figure shows an example:

![A container is basically an empty object that can be filled with visual content.]({{ site.baseurl }}common/images/layouts_containers_defn.jpg)

A *block* produces the actual content inside each structural block. A block represents each feature on a page and employs templates to generate the HTML to inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.

The following figure shows an example:

![A container is basically an empty object that can be filled with visual content.]({{ site.baseurl }}common/images/layouts_block_defn.jpg)

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml-instrux.html">XML in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-ui-lib.html">Magento 2 UI library</a>