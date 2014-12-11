---
layout: default
group: fedg
subgroup: E_rwd
title: Theme design best practices
menu_title: Theme design best practices
menu_order: 6
github_link: frontend-dev-guide/responsive-web-design/theme-best-practices.md
---

<h2 id="layout_theme_bestpr_rwd">Use responsive web design</h2>

Responsive web design crafts web sites to provide an optimal viewing experience&mdash;easy reading and navigation with a minimum of resizing, panning, and scrolling, across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

Your main tool in responsive design is CSS. A responsive site usually uses <a href="http://en.wikipedia.org/wiki/Media_queries" target="_blank">CSS3 media queries</a>, an extension of the `@media` rule, to adapt the layout to the viewing environment. A well-designed responsive site has with fluid, proportion-based grids and flexible images.

There are also scripts like <a href="http://headjs.com" target="_blank">HeadJS</a> that assign class names relevant to the current browser, resolution, portrait or landscape viewing, and so on. This allows specifying different CSS instructions for each combination of these characteristics.

<h2 id="layout_theme_bestpr_browser">Browser-specific issues</h2>

Internet Explorer has the most CSS compatibility or behavior issues of all modern web browsers. Before responsive web design, to make CSS work in Internet Explorer, you could use a separate `styles-ie.css` that contained extra styles and instructions. In the Magento system, we use <a href="http://headjs.com" target="_blank">HeadJS</a>, a script that detects the browser type and assigns the corresponding value to the class attribute of the `<html>` tag.

Now the browser-specific overrides for all browsers can be done in `style.css` Use the corresponding classes.

The class name for Internet Explorer is `ie`. Use the following classes to override CSS behavior for Internet Explorer:

*	`.ie` (all versions of Internet Explorer)
*	`.gt-ie6` (Internet Explorer 6 or later)
*	`.gt-ie7` (Internet Explorer 7 or later)
*	`.eq-ie8` (Internet Explorer 8)
*	`.lt-ie9` (Internet Explorer 9 or earlier)
*	`.lt-ie10` (Internet Explorer 10 or earlier)

<div class="bs-callout bs-callout-info" id="info">
  <p>HeadJS supports class names for various browsers, but in Magento 2, only `ie` class names are added by default. Consult the <a href="http://headjs.com/site/api/v2.00.html" target="_blank">HeadJS documentation</a> for information about Use similar overrides for other browsers.</p>
  </div>

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_overview.html">Responsive web design</a>