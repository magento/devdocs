---
layout: default
group: fedg
subgroup: D_CSS
title: Include CSS 
menu_order: 2
version: 2.0
github_link: frontend-dev-guide/css-topics/css-themes.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/css-themes.html
---

<h2 id="fedg_css-in-themes_overview">What's in this topic</h2>

<p>In the Magento application, CSS files are included in <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layout files</a>. </p>

Technically there is an option to include them in template files, but we strongly recommend avoiding this.

<div class="bs-callout bs-callout-info" id="info">
<p><span class="glyphicon-class">
The CSS class names can be assigned in both templates and layouts.</span></p>
</div>

This topic describes how stylesheets are located by default in the Magento application file system, and the recommended way to include CSS files in layouts.


<h2>How Magento stylesheet files are organized</h2>

Conventionally, CSS and LESS files are stored only in themes. Module directories do not contain any default styles.

<p>In a <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-structure.html" target="_blank">theme directory</a>, stylesheets are stored in the following locations:</p>


<table>
<tr>
<th>Directory, relative to <code>&lt;theme_dir&gt;</code></th>
<th>Description</th>
</tr>
<tr>
<td> <code>/&lt;Namespace&gt;_&lt;Module&gt;/web/css</code>
</td>
<td> Module-specific styles
</td>
</tr>
<tr>
<td> <code>/web/css</code>
   </td>
   <td> 
Contains the following:
<ul>
<li>
<code>print.less</code>: used to generate styles for the printed version of store pages.
</li>
<li><code>_styles.less</code> - a composite file, which includes all LESS files used in the theme. The underscore sign ("_") in a file name conventionally means that a file is not used independently, but is included in other files.
</li>
<li><code>styles-m.less</code>: used to generate mobile-specific styles, includes <code>_styles.less</code>
</li>
<li><code>styles-l.less</code>: used to generate desktop-specific styles, includes <code>_styles.less</code>.
</li>
<li><code>/source</code>: this subdirectory contains LESS configuration files that invoke mixins from the Magento UI library
</li>
<li>
<code>/source/_theme.less</code>: overrides the default Magento UI library variables values.
</li>

  </ul>
   </td>
</tr>

</table>


<h2 id="fedg_css-in-themes_xml">Include CSS</h2>

<p>In the Magento application, the recommended way to include stylesheets is to specify them in layout files. 

<p>Usually, the stylesheets you include should be available for all store pages. To achieve this, include your CSS in <code>default_head_blocks.xml</code> of the <code>Magento_Theme</code> module, which defines the default <code>&lt;head&gt;</code> page section for all Magento pages. 
The recommended way to do this is adding an <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> <code>default_head_blocks.xml</code> in your theme, and including the required stylesheets in this file. </p>

Your custom <code>default_head_blocks.xml</code> should be located as follows:

<code>&lt;theme_dir&gt;/Magento_Theme/layout/default_head_blocks.xml</code>.

<p>To include a CSS file, add the <code>&lt;css src=&quot;&lt;path&gt;/&lt;file&gt;&quot; media=&quot;print|&lt;option&gt;&quot;/&gt;</code> block in <code>&lt;head&gt;</code> section in a layout file. <code>&lt;path&gt;</code> is specified relative to the theme web directory (<code>&lt;theme_dir&gt;/web</code>)

For example, the following illustrates how stylesheets are included in the default Blank theme: </p>

<p><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank"><code>&lt;Magento_Blank_theme_dir&gt;/Magento_Theme/layout/default_head_blocks.xml</code></a></p>

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <css src="css/styles-m.css" />
        <css src="css/styles-l.css" media="screen and (min-width: 768px)"/>
        <css src="css/print.css" media="print" />
    </head>
</page>
{%endhighlight xml%}


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> If the system does not find the included CSS files, it searches for the same file names with a <code>.less</code> extension. This is part of the built-in preprocessing mechanism. You can find more information about it in the <a href="{{page.baseurl}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS Preprocessing</a> topic.
</p></span> 
</div>


