---
layout: howtom2devgde_chapters_fedg
title: Best Practices for Theme Design
---
 
<h1 id="layout_theme_bestpr">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/layout/layout-theme-bestpr.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="layout_theme_bestpr_rwd">Using Responsive Web Design</h2>

Responsive web design crafts web sites to provide an optimal viewing experience&mdash;easy reading and navigation with a minimum of resizing, panning, and scrolling, across a wide range of devices (from large, high-resolution desktop computer monitors to mobile phones).

Your main tool in responsive design is CSS. A responsive site usually uses <a href="http://en.wikipedia.org/wiki/Media_queries" target="_blank">CSS3 media queries</a>, an extension of the `@media` rule, to adapt the layout to the viewing environment. A well-designed responsive site has with fluid, proportion-based grids and flexible images. 

There are also scripts like <a href="http://headjs.com" target="_blank">HeadJS</a> that assign class names relevant to the current browser, resolution, portrait or landscape viewing, and so on. This allows specifying different CSS instructions for each combination of these characteristics. 

<h2 id="layout_theme_bestpr_browser">Solving Browser-Specific Issues</h2>

Internet Explorer has the most CSS combatility or behavior issues of all modern web browsers. Before responsive web design, to make CSS work in Internet Explorer, you could use a separate `styles-ie.css` that contained extra styles and instructions. In Magento 2 we use <a href="http://headjs.com" target="_blank">HeadJS</a>, a script that detects the browser type and assigns the corresponding value to the class attribute of the `<html>` tag. 

Now the browser-specific overrides for all browsers can be done in `style.css` using the corresponding classes.

The class name for Internet Explorer is `ie`. USe the following classes to override CSS behavior for Internet Explorer:

*	`.ie` (all versions of Internet Explorer)
*	`.gt-ie6` (Internet Explorer 6 or later)
*	`.gt-ie7` (Internet Explorer 7 or later)
*	`.eq-ie8` (Internet Explorer 8)
*	`.lt-ie9` (Internet Explorer 9 or earlier)
*	`.lt-ie10` (Internet Explorer 10 or earlier)

**Note**: HeadJS supports class names for various browsers, but in the configuration used in Magento 2, only `ie` class names are added by default. Consult the <a href="http://headjs.com/site/api/v2.00.html" target="_blank">HeadJS documentation</a> for information about using similar overrides for other browsers.

	
#### Related Topics:

*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-how-to-theme.html">How To Create a Theme</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/magento-ui-lib.html">Using the Magento 2 UI Library</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/rwd/rwd_overview.html">Magento 2 Responsive Web Design</a>