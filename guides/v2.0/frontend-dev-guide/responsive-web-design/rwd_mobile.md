---
group: fedg
subgroup: E_rwd
title: Create a responsive mobile theme based on a default theme
menu_title: Create a responsive mobile theme based on a default theme
menu_order: 4
version: 2.0
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_mobile.html
functional_areas:
  - Frontend
---
## What's in this topic

The topic describes how to create a responsive mobile-specific {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} using the default Magento approaches. 

## Creating a mobile-specific theme

To use all the responsive approaches implemented in the Magento out-of-the-box Blank and Luma themes, your theme should declare one of them as a <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html" target="_blank">parent</a>. 

To create a mobile-specific theme:

1. Create a theme as described in <a href="{{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a>, having specified Blank or Luma as a parent theme.
2. Add a <code>&lt;theme_dir&gt;/Magento_Theme/layout/default_head_blocks.xml</code> {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} file with the following content:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <remove src="css/styles-l.css" />
    </head>
</page>
{%endhighlight xml%}

This will remove the desktop-specific files from your theme.

## Recommended reading

<ul>
<li><a href="{{ page.baseurl }}/frontend-dev-guide/responsive-web-design/rwd_css.html" target="_blank">CSS in Magento responsive design</a></li>
</ul>
