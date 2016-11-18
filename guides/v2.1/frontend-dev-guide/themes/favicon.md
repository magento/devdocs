---
layout: default  
group: fedg 
subgroup: A_Themes
title: Adding custom favicons
menu_title:  Adding custom favicons
menu_order: 7
version: 2.1
github_link: frontend-dev-guide/themes/favicon.md
---
<h2 id="favicon-intro">What's in this topic</h2>

This topic describes how to add custom favicons.

**Contents**


## General overview

Magento provides a default 16px x 16px favicon that you can override by uploading a custom icon in the Magento Admin, or by adding it manually in a specific location in a theme directory.
If both favicons exist, the one you uploaded in the Admin takes precedence.

If you want to have favicons of different sizes, you need to add them manually in the file system and define in layout. 

Magento supports the following file types for favicon: `.ico`, `.png`, `.gif`, `.jpg`, `.jpeg`, `.apng`, `.svg`. Not all browsers support all these formats. The most widely supported file format to use for a favicon is `.ico`. 

See the following sections for details about adding favicons.

## Adding a custom favicon in Admin

To add a custom favicon in the Magento Admin, do the following:

1. Navigate to **CONTENT** > (**Design**) **Configuration**. 
2. In the scope grid, decide on which level you will configure the favicon and click **Edit**     in the corresponding row.
   
   <img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/favicon_2_21.png">
   
3. Under the **Other Settings** title, expand the **HTML Head** options.
4. Next to **Favicon Icon**, click **Upload**, and select the file.
   
   <img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/favicon_1_21.png">
   
5. Click **Save Configuration** in the upper right corner to save the changes.

If caching is enabled in your Admin, you get a notification that refreshing certain cache types is required. Click the link provided in the notification, and then click **Flush Magento Cache**.


## Add custom favicons manually

To override the default 16px x 16px favicon manually, add your custom `favicon.ico` in the `<your_theme_dir>/Magento_Theme/web/`directory. 

To add favicon icons of other sizes, take the following steps:

1. Add your icons in the `<your_theme_dir>/Magento_Theme/web/` directory.
2. In the `<your_theme_dir>/Magento_Theme/layout/default_head_blocks.xml` layout file specify the paths to the icons and their sizes. 

For example, if you added a `favicon-32x32.png` icon and want it to be used as a 32px x 32px favicon, your `default_head_blocks.xml` would be like following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <link src="Magento_Theme::favicon-32x32.png" rel="icon" sizes="32x32" />
    </head>
</page>

{%endhighlight%}

For your changes to be applied, clear the browser cache, and the following directories on the server (do not delete the `.htaccess` file!): 

- `pub/static`
- all directories under `var`

