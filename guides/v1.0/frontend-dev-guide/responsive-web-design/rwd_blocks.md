---
layout: default
group: fedg
subgroup: E_rwd
title: Blocks in a responsive design
menu_title: Blocks in a responsive design
menu_order: 2
github_link: frontend-dev-guide/responsive-web-design/rwd_blocks.md
---

<h2 id="fedg_rwd_blocks_overview">Overview of Blocks in a Responsive Design</h2>

This topic discusses:

*	Examples of the typical sequence of blocks on a page for both desktop and mobile versions of the responsive Blank theme
*	HTML and CSS requirements for responsive tables
	Specific form attributes you must use to make form elements responsive on mobile devices

In the Blank theme, the breakpoint is at a 768px viewport.

For more information about XML instructions related to blocks, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html#fedg_layout_xml-instruc_ex_block">&lt;block&lt;/></a>.

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

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/containers-blocks.html">Containers and blocks</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_css.html">CSS in a responsive design</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_js.html">JavaScript in a responsive design</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>



