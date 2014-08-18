---
layout: howtom2devgde_chapters_fedg
title: Using XML to Manage Your Page Markup
---
 
<h1 id="layout_markup">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/layout/layout-xml-manage.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>


<h2 id="layout_markup_overview">Changing Columns in a Layout</h2>

This topic discusses how to override the base the layout defined by the `Mage_CatalogSearch` module from two columns to three columns. You can find the original layout <a href="https://github.com/magento/magento2/blob/master/app/code/Magento/CatalogSearch/view/frontend/layout/catalogsearch_result_index.xml" target="_blank">here</a>.

The base template uses `<update handle="page_two_columns_left"/>` to define the number of columns on the page.

<h2 id="layout_markup_bad">Avoiding Layout Customization Mistakes</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. Magento strongly recommends you not make the following changes:

*	Changing block name or alias. The name of a block should not be changed, as well as the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.

<h2 id="layout_markup_start">Getting Started</h2>

Because you can break other code and prevent successful upgrades, Magento strongly recommends you *not* change the base layout files. So the customization can be performed by adding a merging theme layout file: `app/design/frontend/[your theme]/Mage_CatalogSearch/layout/catalogsearch_result_index.xml`, with the following content:

<pre>&lt;layout>
    &lt;update handle="page_three_columns_left"/>
&lt;/layout></pre>

You have the following choices:

*	`page_empty`&mdash;Empty page used mostly for Ajax responses
*	`page_one_column`&mdash;One-column design used mostly for mobile devices
*	`page_two_columns_left`&mdash;Left-sided two-column design
*	`page_two_columns_right`&mdash;Right-sided two-column design
*	`page_three_columns`&mdash;Three columns

<h2 id="layout_markup_rearrange">Step 1: Rearranging Elements</h2>

For example, you can change the subordination of the product price block. 
 
Original declaration (might be in either base or theme layout file):

<script src="https://gist.github.com/xcomSteveJohnson/55ed6e850202bb0d5374.js"></script>

Desired result:

<script src="https://gist.github.com/xcomSteveJohnson/9771c824e65567bd0dd8.js"></script>

Change you should make in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/93666c8933206a55dd61.js"></script>

<h2 id="layout_markup_css">Step 2: Changing JavaScript, CSS and RSS</h2>

You can use layout instructions to link and remove CSS, JavaScript (JS) and RSS resources to a page's head block.

<h3 id="layout_markup_css_link">Linking JS, CSS and RSS files</h3>

This section discusses how to link the following resources:

*	`app/design/frontend/[theme path]/jquery/jquery.js`
*	`app/design/frontend/[theme path]/mui/reset.css`
*	`app/design/frontend/[theme path]/feeds/feed.xml`

Make the following change in your theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/a36ca0d74ae7af673fb2.js"></script>

Where:

*	The value of the name attribute of `<block>` is arbitrary.
*	The file name and path for the file (or URL in case of RSS) argument is relative to the theme root directory `app/design/[area[/[theme name]`, or the `view/[area]` directory of a custom module.

<h3 id="layout_markup_css_change">Changing JavaScript or CSS</h3>

To change a link, remove it then add the new one.

<h3 id="layout_markup_css_remove">Removing JavaScript or CSS</h3>

To remove the JavaScript and CSS resources used in a layout, make a change similar to the following in a theme merging file: 

<script src="https://gist.github.com/xcomSteveJohnson/2871e00f617d4e031014.js"></script>

<h2 id="layout_markup_remove_elements">Step 3: Removing Elements</h2>

This section discusses how to remove the shopping cart sidebar block from a page.

Original:

<script src="https://gist.github.com/xcomSteveJohnson/faa16e16f157a50823a3.js"></script>

To change it, make a customization similar to the following in a theme merging file:

<pre>&lt;layout>
    &lt;remove name="cart_sidebar"/>
&lt;/layout></pre>

<h2 id="layout_markup_replace_elements">Step 4: Replacing Elements</h2>

To replace an element, remove it and add a new one.

<h2 id="layout_markup_modify-block">Step 5: Modifying Block Arguments</h2>

This section discusses how to modify the declared block argument and to add a new one.

Original:

<script src="https://gist.github.com/xcomSteveJohnson/2822dfb55fc4620fb482.js"></script>

To modify it, make a customization similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/f942fac58ef97a39890f.js"></script>

<h2 id="layout_markup_block-properties">Step 6: Setting Block Properties Using Block Object Methods</h2>

To set a page title using the `setTitle()` method, make a customization similar to the following in a theme merging file:

<script src="https://gist.github.com/xcomSteveJohnson/bc7583f5e2ac5835a250.js"></script>





#### Related Topics:

