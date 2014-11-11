---
layout: howtom2devgde_chapters_fedg
title: CSS in themes
---

<h1 id="fedg_css-in-themes">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/css-topics/css-themes.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_css-in-themes_overview">Overview</h2>

To include style sheets in Magento themes, you can:

* Use theme templates
* Use theme XML files

Both approaches work. We recommend that you use theme XML files.

<h2 id="fedg_css-in-themes_template">Include CSS in templates</h2>

You can include CSS files by adding them to theme templates directly as follows:

<blockquote>
<pre>&lt;head>
    ...
    &lt;link rel="stylesheet" href="<?php echo $this->getViewFileUrl('css-topics/styles.css') ?>" media="all" />
    ...
&lt;/head></pre>
</blockquote>

This method is inefficient because you must add this code to every template file. Also, we strongly recommend against editing Magento core files because you must then override all page templates just to add a single CSS.

<h2 id="fedg_css-in-themes_xml">CSS in themes</h2>

A better option to include your CSS is to add them to either `default_head_blocks.xml` or `default.xml` files, which are located in `[your Magento install dir]\app\design\frontend\[your theme name]\Magento_Theme\layout\`.

`default.xml` does many things, such as relocating blocks. It is a large file, so it was divided into two files to separate redefinition and customization of the `<head>` block and to make it more flexible.

`<head>` block configuration is now located in `default_head_blocks.xml`. We strongly recommend you use it to customize your `<head>` block.

To include a style sheet in your theme, add appropriate blocks to `<referenceContainer name="head">`.

For example, you can include a style sheet by adding the following block of code:

<script src="https://gist.github.com/xcomSteveJohnson/47d6677cb28edfdd81a9.js"></script>

`<argument name="file">` specifies the path to the stylesheet file that you include in your theme.

The `<arguments>` node can contain additional attributes, such as conditional comments for Internet Explorer. To learn more about conditionals, see <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in themes</a>.

This example shows how to specify an Internet Explorer 9-specific stylesheet:

<script src="https://gist.github.com/xcomSteveJohnson/a39c112adc67b86bd376.js"></script>




#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-xml.html">XML in themes</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/css-overview.html">Cascading style sheets (CSS)</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-overview.html">Magento 2 theming</a>

