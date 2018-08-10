---
group: fedg
subgroup: A_Themes
title: Adding custom favicons
menu_title: Adding custom favicons
version: 2.0
menu_order: 7
functional_areas:
  - Frontend
  - Theme
---
## What\'s in this topic   {#favicon-intro}

This topic describes how to add custom favicons.

## General overview

Magento provides a default 16px x 16px {% glossarytooltip d3f31654-a00f-498e-b41e-5ee1052c159b %}favicon{% endglossarytooltip %} that you can override by uploading a custom icon in the Magento Admin, or by adding it manually in a specific location in a {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} directory.
If both favicons exist, the one you uploaded in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} takes precedence.

If you want to have favicons of different sizes, you need to add them manually in the file system and define in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}. 

Magento supports the following file types for favicon: `.ico`, `.png`, `.gif`, `.jpg`, `.jpeg`, `.apng`, `.svg`. Not all browsers support all these formats. The most widely supported file format to use for a favicon is `.ico`. 

See the following sections for details about adding favicons.

## Adding a custom favicon in Admin

To add a custom favicon in the Magento Admin, do the following:

1. Navigate to **STORES** > (**Settings**) **Configuration**. 
2. In the **Store View** drop-down in the top left corner, select the scope for which you want to set a logo (a certain store view, the whole website, or default config).
3. On the **Design** tab, expand the **HTML Head** options.
4. Next to **Favicon Icon**, click **Choose file**, and select the file.
   <img style="border: 1px solid #ABABAB" src="{{ site.baseurl }}/common/images/favicon_1.png">

5. Click **Save Config** in the upper right corner to save the changes.

If caching is enabled in your Admin, you get a notification that refreshing certain {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %} types is required. Click the link provided in the notification, and then click **Flush Magento Cache**.

## Add custom favicons manually

To override the default 16x16 favicon manually, add your custom `favicon.ico` in the `<your_theme_dir>/Magento_Theme/web/ `directory. 

To add favicon icons of other sizes, take the following steps:

1. Add your icons in the `<your_theme_dir>/Magento_Theme/web/` directory.
2. In the `<your_theme_dir>/Magento_Theme/layout/default_head_blocks.xml` layout file specify the paths to the icons and their sizes. 

For example, if you added a `favicon-32x32.png` icon and want it to be used as a 32x32 favicon, your `default_head_blocks.xml` would be like following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <link src="Magento_Theme::favicon-32x32.png" rel="icon" sizes="32x32" />
    </head>
</page>

{%endhighlight%}

For your changes to be applied, clear the brower cache, and the following directories on the server (do not delete the `.htaccess` file!): 

- `pub/static`
- all directories under `var`

