---
layout: default
group: fedg
subgroup: E_rwd
title: Create a responsive mobile theme based on a default theme
menu_title: Create a responsive mobile theme based on a default theme
menu_order: 4
version: 2.1
github_link: frontend-dev-guide/responsive-web-design/rwd_mobile.md
---

<h2>What's in this topic</h2>
The topic describes how to create a responsive mobile-specific theme using the default Magento approaches. 

<h2>Creating a mobile-specific theme</h2>

To use all the responsive approaches implemented in the Magento out-of-the-box Blank and Luma themes, your theme should declare one of them as a <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a>. 

To create a mobile-specific theme:

1. Create a theme as described in <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a>, having specified Blank or Luma as a parent theme.
2. Add a <code>&lt;theme_dir&gt;/Magento_Theme/layout/default_head_blocks.xml</code> layout file with the following content:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <remove src="css/styles-l.css" />
    </head>
</page>
{%endhighlight xml%}

This will remove the desktop-specific files from your theme.



<h2>Recommended reading</h2>
<ul>
<li><a href="{{site.gdeurl21}}frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a></li>
</ul>
