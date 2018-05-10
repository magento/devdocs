---
group: styleguide
subgroup: Design
title: Admin Page Grids
menu_title: Page Grids
menu_order: 3
menu_node:
version: 2.1
github_link: design-styleguide/pagegrid/pagegrid.md
---
In the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}, a grid is used on all pages to establish global layouts for page templates. The grid assigns a set number of columns and rows for a page, and designers can create a layout by dividing the columns into sections, where design patterns and content can be placed.

<h2 id="page">Page Grid</h2>

<ul>
	<li>A 12-column fluid-width content grid is placed next to the page’s 1-column fixed-width left navigation</li>
	<li>The 12-column grid’s minimum width spans 984px. The grid expands its layout across larger screens.</li>
	<li>For views smaller than 984px, a page’s layout doesn’t change as the page shrinks to fit smaller screen widths.</li>
</ul>

<img src="img/PageGrid.png">

<h2 id="slide-out">Slide-Out Grid</h2>

A Slide-out panel, similar to a modal window, breaks apart and simplifies a complex subtask that is included within a primary task.

For example:
<ul>
	<li>On a product details form page, a user clicks "Add Attribute".</li>
	<li>A panel slides over the parent page and shows "Add Attribute" functionality.</li>
	<li>When the user finishes adding attributes, the panel disappears, and the user returns the 		product details form page.</li>
</ul>

<b>Layout and behavior:</b> When a panel spawns, it slides from right to left atop and almost completely over the parent page. A narrow gutter of space remains at left, showing the left navigation and a small sliver of the parent page.

Standard {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} within the edges of a browser screen

<img src="img/slideout-panel7.png">

(Panel position in relation to browser edge)

<b>Spacing:</b> Slide-out content is contained in a 12-column page grid, with additional 15px padding on the left edge. The gutter spacing at left is fluid, based on browser width.

<img src="img/slideout-panel8.png">

(Nested page-grid with additional padding)

<b>Nested Slide-outs:</b> For multiple panels displayed, additional gutter space is used at left to show a small sliver of a Slide-out below another Slide-out.

<img src="img/slideout-panel9.png">
