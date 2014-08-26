---
layout: howtom2devgde_chapters_fedg
title: Using Blocks in Your Responsive Design
---
 
<h1 id="fedg_rwd_blocks">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/rwd/rwd_overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_rwd_blocks_overview">Overview of Blocks in a Responsive Design</h2>

This topic presents examples of the typical sequence of blocks on a page for both desktop and mobile versions of the responsive Blank theme, as well as common requirements for table markup responsiveness (HTML and CSS). There is also information about the specific form attributes you have to use to make form elements responsive on mobile devices.

In the Blank theme, the breakpoint is at a 768px viewport.

<h2 id="fedg_rwd_resp-table-class">Implementing Responsive Tables</h2>

If you want to make tables in storefront responsive, wrap your HTML code of each table in a `<div class=”table wrapper”>` tag as shown in the following example:

<pre>&lt;!-- HTML markup for table with a wrapper for RWD -->
&lt;div class="table wrapper">
    &lt;table class=" data table">
        ...
    &lt;/table>
&lt;/div></pre>

The Blank theme displays a horizontal scroll bar on a mobile device only when the table is wider than the screen size. The theme uses the following CSS to style the scroll bar:

<pre>.table.wrapper {
    overflow-x: auto;
}</pre>

The following figure shows the resulting scroll bar:

![Sample horizontal scroll bar that displays when the width of a table is larger than a mobile device screen size.]({{ site.baseurl }}common/images/rwd_blocks_scrollbar.png)

<h2 id="fedg_rwd_form">Using Responsive Forms</h2>

If you create custom forms, consider the type of data that the field in the form is expected to receive. If the expected data is e-mail, use `<input type=”email”>` instead of `<input type=”text”>`. 

When the user selects this field on a mobile device, a keyboard containing Latin characters and the `@` character displays.

<h2 id="fedg_rwd_images">Using Responsive Images</h2>

Product images on product pages in your store are also fully responsive, and can adapt to different screen sizes.

The image responsiveness is provided by the following CSS:

<pre>.product.media .product.photo .photo.image {
    display: block;
    height: auto;
    max-width: 100%;
}</pre>

For example, a 100% wide product image container in the mobile version adjusts to 57% to fit the desktop layout after the breakpoint is reached.

Mobile image:

![A responsive image is set at 100% the container width.]({{ site.baseurl }}common/images/rwd_images_mobile.png)

Desktop image:

![The same responsive image is set to 57% the container width on a desktop device.]({{ site.baseurl }}common/images/rwd_images_desktop.png)

#### Related Topics:

*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/containers-blocks.html">Understanding Containers and Blocks</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/rwd/rwd_css.html">Using CSS in Your Responsive Design</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/rwd/rwd_js.html">Using JavaScript in Your Responsive Design</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-theme-bestpr.html">Best Practices for Theme Design</a>



