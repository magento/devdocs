---
layout: howtom2devgde_chapters_fedg
title: Using XML Instructions In Your Theme
---
 
<h1 id="fedg_layout_xml-instruct">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/layout/layout-xml-instrux.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_layout_xml-instruc_overview">Overview of XML Instructions</h2>

You use XML instructions to manipulate page elements that are represented as containers and blocks. By referencing these containers and blocks, you can:

*	Move a page element to another parent element 
*	Remove a page element
*	Set page properties 
*	Change some properties of an existing container or block by referencing it

The layout of a page is defined by a set of XML instructions that contain handles with attributes. These attributes set a design abstraction that is used by other XML files; for example, `default.xml` and `page_one_column.xml`, which in turn describe the abstraction for page the layout.

The page layout abstraction includes the names of all containers, blocks, and columns that will be rendered on the page. To add a block with best selling products, for example, you must add a block of this class to a specific reference container. 

In the example presented in this topic, these will be referred to as `< referenceContainer name = "content">`. The design abstraction is aware of this block in the content of the page, so after we refresh the page; namely, the block that displays best selling products. This is also true for any custom HTML block that you want to add a page.




#### Related Topics:

