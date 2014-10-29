---
layout: howtom2devgde_chapters_fedg
title: Cascading style sheets (CSS)
---

<h1 id="fedg_css-overview">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/css/css-overview.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

You can use CSS to customize Magento themes. You can add your own images and fonts to the CSS.

Do not use CSS visibility properties to hide Magento blocks and content.

To add or remove blocks in Magento, use <a href="{{ site.gdeurl }}m2fedg/layout/layout-xml-instrux.html">XML in themes</a> instead.

You can customize Magento themes in these ways:

*	Use the built-in Leaner CSS (LESS) preprocessor and the Magento UI library.
    This is the most effective way to customize your theme, by simply changing the value of required variables from the predefined Blank theme as described here.
    Doing this causes a new set of CSS parameters set to be compiled from LESS.
*	Build your own LESS theme using the built-in LESS preprocessor.
    Optionally, you can use Magento UI library alongside your theme.
*	Create your own CSS.
*	Include and use another preprocessor such as SASS.


#### Related topics:

*	<a href="{{ site.gdeurl }}m2fedg/css/css-preprocess.html">CSS preprocessing</a>
*	<a href="{{ site.gdeurl }}m2fedg/css/css-themes.html">CSS in themes</a>
*	<a href="{{ site.gdeurl }}m2fedg/layout/layout-theme-bestpr.html">Best practices for theme design</a>
*	<a href="{{ site.gdeurl }}m2fedg/rwd/rwd_overview.html">Responsive web design</a>
