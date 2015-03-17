---
layout: default
group: fedg
subgroup: D_CSS
title: Include CSS 
menu_order: 2
github_link: frontend-dev-guide/css-topics/css-themes.md
---

<h2 id="fedg_css-in-themes_overview">Overview</h2>

<p>In the Magento application, CSS files are included in <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html" target="_blank">layout files</a>. </p>

Technically there is an option to include them in template files, but we strongly recommend avoiding this.

<div class="bs-callout bs-callout-info" id="info">
<p><span class="glyphicon-class">
The CSS class names can be assigned in both, templates and layouts.</span></p>
</div>

This topic describes how stylesheets are conventionally organized in the Magento application file system, and the recommended way to include CSS files in layouts.


<h2>How Magento stylesheet files are organized</h2>

Conventionally, CSS and LESS files are stored only in themes. Modules do not contain any default styles.

<p>In a theme directory, stylesheets are stored in the following locations:</p>


<table>
<tr>
<th>Directory</th>
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
For the default Blank and Luma themes, contains the following:
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
<code>/source/_theme.less</code>: overrides the default LESS variables values.
</li>

  </ul>
   </td>
</tr>

</table>


<h2 id="fedg_css-in-themes_xml">Include CSS</h2>

<p>In the Magento application, the recommended way to include stylesheets is to specify them in layout files. To include CSS in the <code>&lt;head&gt;</code> section of a page, they should be specified in the <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html" target="_blank">page configuration files</a>. </p>

<p>Usually, the stylesheets you include should be available for all store pages. To achieve this, include your CCS in <code>default_head_blocks.xml</code> of the <code>Magento_Theme</code> module, which defines the default <code>&lt;head&gt;</code> page section for all Magento pages. </p>

<div class="bs-callout bs-callout-info" id="info">
<p><span class="glyphicon-class">
This is where the main <code>.css files</code>, <code>styles_m.css</code> and <code>styles-l.css</code> are included in the default Magento theme. For example, for the Blank theme, these main stylesheets are included in <code><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank">app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml</a></code>
</span>
</p>
</div>

<p> We strongly recommend not changing default files. So to make changes in <code>default_head_blocks.xml</code>, you need to add to add an <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> or <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-override.html" target="_blank">overriding</a> one in your theme. It must be located as follows (in case of extending):</p>

<p><code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default_head_blocks.xml</code>. </p>

Where <code>&lt;Vendor&gt;</code> is your company name (or similar), and <code>&lt;theme&gt;</code> is your theme name.

<p>To include a CSS file, add the <code>&lt;css src=&quot;&quot; media=&quot;&quot;/&gt;</code> block in <code>&lt;head&gt;</code> section in a layout file.
For example, the following illustrates how stylesheets are included in the default Blank theme: </p>

<p><a href="{{site.mage2000url}}app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml" target="_blank"><code>app/design/frontend/Magento/blank/Magento_Theme/layout/default_head_blocks.xml</code></a></p>

<pre>
&lt;head&gt;
    &lt;css src=&quot;css/styles-m.css&quot; /&gt;
    &lt;css src=&quot;css/styles-l.css&quot; media=&quot;screen and (min-width: 768px)&quot;/&gt;
    &lt;css src=&quot;css/print.css&quot; media=&quot;print&quot; /&gt; 
&lt;/head&gt;
</pre>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
 <p> If the system does not find the included CSS files, it will search for the same files having changed the extension from <code>.css</code> to <code>.less</code>. This is part of the built-in preprocessing mechanism. You can find more information about it in the <a href="{{site.gdeurl}}frontend-dev-guide/css-topics/css-preprocess.html" target="_blank">CSS Preprocessing</a> topic.
</p></span> 
</div>


