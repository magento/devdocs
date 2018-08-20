---
group: fedg
title: Create a responsive mobile theme based on a default theme
redirect_from: /guides/v1.0/frontend-dev-guide/responsive-web-design/rwd_mobile.html
functional_areas:
  - Frontend
---
## What's in this topic

The topic describes how to create a responsive mobile-specific theme using the default Magento approaches. 

## Creating a mobile-specific theme

To use all the responsive approaches implemented in the Magento out-of-the-box Blank and Luma themes, your theme should declare one of them as a [parent]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html). 

To create a mobile-specific theme:

1. Create a theme as described in [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html), having specified Blank or Luma as a parent theme.
2. Add a `<theme_dir>/Magento_Theme/layout/default_head_blocks.xml` {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} file with the following content:

```xml
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <remove src="css/styles-l.css" />
    </head>
</page>
```

This will remove the desktop-specific files from your theme.

## Recommended reading

[CSS in Magento responsive design]({{page.baseurl}}/frontend-dev-guide/responsive-web-design/rwd_css.html)

