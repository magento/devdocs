---
layout: howtom2devgde_chapters_fedg
title: Using CSS in Themes
---
 
<h1 id="fedg_css-in-themes">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}m2fedg/css/css-themes.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_css-in-themes_overview">Overview of CSS in Themes</h2>

There are two ways you can include style sheets in Magento themes: using theme templates or theme XML files. Both approaches will work; however, we recommend theme XML files for the reasons discussed in this topic.

<h2 id="fedg_css-in-themes_template">Including CSS in Templates</h2>

You can include CSS files by adding them to theme templates directly as follows:

<pre>&lt;head>
    ...
    &lt;link rel="stylesheet" href="<?php echo $this->getViewFileUrl('css/styles.css') ?>" media="all" />
    ...
&lt;/head></pre>

This method is inefficient because you must add this code to every template file. Also, we strongly recommend against editing Magento core files because you must then override all page templates just to add a single CSS.

<h2 id="fedg_css-in-themes_xml">Including CSS in Theme XML</h2>

A better option to include your CSS is to add them to either `default_head_blocks.xml` or `default.xml` files, which are located in `[your Magento install dir]\app\design\frontend\[your theme name]\Magento_Theme\layout\`.  

`default.xml` does many things, such as relocating blocks. It is a large file, so it was divided into two files to separate redefinition and customization of the `<head>` block and to make it more flexible. 

`<head>` block configuration is now located in `default_head_blocks.xml`. We strongly recommend you use it to customize your `<head>` block.

To include a style sheet in your theme, add appropriate blocks to `<referenceContainer name="head">`. 

For example, you can include a style sheet by adding the following block of code:  

<script src="https://gist.github.com/xcomSteveJohnson/47d6677cb28edfdd81a9.js"></script>

`<argument name="file">` specifies the path to the stylesheet file that you include in your theme.

The `<arguments>` node can contain additional attributes, such as conditional comments for Internet Explorer. To learn more about conditionals, see <a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-xml-instrux.html">Using XML Instructions In Your Theme</a>.

<script src="https://gist.github.com/xcomSteveJohnson/a39c112adc67b86bd376.js"></script>

The preceding example shows how to specify an Internet Explorer 9-specific stylesheet.


#### Related Topics:

*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-xml-instrux.html">Using XML Instructions In Your Theme</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/css/css-overview.html">Using Cascading Style Sheets (CSS) with Magento 2</a>
*	<a href="{{ site.baseurl }}guides/v1.0/m2fedg/layout/layout-overview.html">Introduction to Magento 2 Theming</a>

