---
layout: howtom2devgde_chapters_fedg
title: Understanding Containers and Blocks
---
 
<h1 id="fedg_layout_containers-blocks">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/m2fedg/layout/containers-blocks.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_layout_cont-block-overview">Overview of Containers and Blocks</h2>

Changing layout files is one of the two possible ways to customize page layout in Magento (the second way is altering templates). To manipulate page elements, you can use a set of XML instructions in layout files to be customized.

Magento functionality and design consists of containers and blocks that represent the platform's modularity. Both work together to deliver a visual output of the application.

This topic is a practical reference for a frontend developer: it contains code samples illustrating common layout customization tasks.

<h2 id="fedg_layout_containers-about">Understanding Containers</h2>

Containers exist for the sole purpose of assigning content structure to a page. 

A container contains other layout elements, such as blocks and other containers. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

The following figure shows an example:

![A container is basically an empty object that can be filled with visual content.]({{ site.baseurl }}common/images/layouts_containers_defn.jpg)


<h2 id="fedg_layout_blocks-about">Understanding Blocks</h2>

Blocks produce the actual content inside each structural block. They are representations of each feature on a page and employ template files to generate the HTML to be inserted into its parent structural block. Examples of blocks include a category list, a mini cart, product tags, and product listing.

The following figure shows an example:

![A container is basically an empty object that can be filled with visual content.]({{ site.baseurl }}common/images/layouts_block_defn.jpg)




#### Related Topics:

