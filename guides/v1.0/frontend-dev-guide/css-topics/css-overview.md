---
layout: default
group: fedg
subgroup: D_CSS
title: CSS
menu_title: CSS
menu_order: 1
menu_node: parent
github_link: frontend-dev-guide/css-topics/css-overview.md
---

## Overview

You can use CSS to customize Magento themes. You can add your own images and fonts to the CSS.

Do not use CSS visibility properties to hide Magento blocks and content.

To add or remove blocks in Magento, use <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in themes</a> instead.

You can customize Magento themes in these ways:

*	Use the built-in Leaner CSS (LESS) preprocessor and the Magento UI library.
    This is the most effective way to customize your theme, by simply changing the value of required variables from the predefined Blank theme as described here.
    Doing this causes a new set of CSS parameters set to be compiled from LESS.
*	Build your own LESS theme using the built-in LESS preprocessor.
    Optionally, you can use Magento UI library alongside your theme.
*	Create your own CSS.
*	Include and use another preprocessor such as SASS.


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/css-preprocess.html">CSS preprocessing</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/css-themes.html">CSS in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/rwd_overview.html">Responsive web design</a>
