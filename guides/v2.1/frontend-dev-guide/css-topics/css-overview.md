---
layout: default
group: fedg
subgroup: D_CSS
title: Cascading style sheets (CSS)
menu_title: Cascading style sheets (CSS)
menu_order: 1
menu_node: parent
version: 2.1
github_link: frontend-dev-guide/css-topics/css-overview.md
---

## Overview

Magento 2 incorporates <a href="http://lesscss.org/" target="_blank">LESS</a>, a CSS pre-processor that simplifies the management of complex CSS files.
To define styles of a Magento store, you can use both - CSS and LESS stylesheets.

Magento application provides a built-in LESS UI library, which you can optionally extend. 

To customize storefront styles, you need to <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-create.html" target="_blank">create a custom design theme</a>. Then you can use one of the following approaches:

*	If your theme <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from the Magento out-of-the-box Blank or Luma theme, you can override the default LESS files; for example to <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/theme-ui-lib.html#fedg_using-ui-lib_predef-vars" target="_blank">change the values of the variables</a> used in the default files. 
*	Create your own LESS files using the built-in LESS preprocessor. 
*	Create your own CSS files, optionally having compiled them using third-party CSS preprocessor.

<h2 id="css_walk">Change styles: walkthrough</h2>

Here is a simple illustration of changing styles using the first approach: changing the color of the buttons of a certain class.
In the Blank theme, the buttons of the `.action.primary` class, so called *primary* buttons, are blue. The following image illustrates this:

<div style="border: 1px solid #ABABAB">
<img src="{{site.baseurl}}common/images/css_over1.png" alt="The default view of a product page, with the orange Add to Cart button">
</div>

OrangeCo wants to change the color of the primary buttons to orange. To achieve this, they do the following:

1. Create a new Orange theme, which inherits from the Blank theme.
2. In the Orange theme directory add the overriding <code>app/design/frontend/OrangeCo/orange/web/css/source/_theme.less</code> file with the following code:
<pre>
//  Primary button
@button-primary__color: @color-white;
@button-primary__hover__color: @color-white;
@button-primary__background: @color-orange-red1;
@button-primary__hover__background: @color-orange-red4;
@button-primary__border: 1px solid @color-orange-red2;
@button-primary__hover__border: 1px solid @color-orange-red2;
</pre>

When OrangeCo <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-apply.html" target="_blank">applies their theme</a>, the primary buttons will look like on the following image:

<div style="border: 1px solid #ABABAB">
<img src="{{site.baseurl}}common/images/css_over2.png" alt="The customized view of a product page, with the grey Add to Cart button">
</div>

<h2 id="css_topics">What's in this chapter</h2>
Other topics of this chapter describe the following:

* <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/css-themes.html" target="_blank">Including CSS</a>: how stylesheets are organized and included to be used for store pages in the Magento application. 
* <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS Preprocessing</a>: how stylesheets are preprocessed and compiled
* <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/theme-ui-lib.html" target="_blank">Magento UI Library</a>: how to use the Magento styles library in your custom themes
* <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/using-fonts.html" target="_blank">Using Custom Fonts</a>: how to add custom fonts 
* <a href="{{site.gdeurl21}}frontend-dev-guide/css-topics/css-practice.html" target="_blank">Customizing styles illustration</a>: how to change a theme's color scheme using Magento UI library. 


