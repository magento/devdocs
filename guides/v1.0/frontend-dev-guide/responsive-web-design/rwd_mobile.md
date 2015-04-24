---
layout: default
group: fedg
subgroup: E_rwd
title: Create a responsive mobile theme
menu_title: Create a responsive mobile theme
menu_order: 4
github_link: frontend-dev-guide/responsive-web-design/rwd_css.md
---
<h2>Overview</h2>
This topic describes how to create a responsive mobile-specific theme using the default Magento approaches. 

<h2>Creating a mobile-specific theme</h2>

To use all the responsive approaches used in Magento default Blank and Luma themes, your theme should declare one of them as a <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a>. 

To create a mobile-specific theme:
<ol>
<li>Create a theme as described in <a href="{{site.gdeurl}}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a>, having specified Blank or Luma as a parent theme.</li>
<li>Add a <code>app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;/Magento_Theme/layout/default_head_blocks.xml</code> layout file with the following content:
<pre>
&lt;page xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot; xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
    &lt;head&gt;
        &lt;remove src=&quot;css/styles-l.css&quot; /&gt;
    &lt;/head&gt;
&lt;/page&gt;
</pre>

This will remove the desktop-specific files from your theme.
</li>
</ol>

<h2>Recommended reading</h2>
<ul>
<li><a href="{{site.gdeurl}}frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a></li>
</ul>