---
layout: default  
group: fedg 
subgroup: A_Themes
title: Adding custom favicons
menu_title:  Adding custom favicons
menu_order: 7
github_link: frontend-dev-guide/themes/favicon.md
---
<h2 id="favicon-intro">What's in this topic</h2>

This topic describes how to add custom favicons in your theme.

**Contents**

* TOC
{:toc}

## General overview

The default 16x16 favicon icon can be overriden by uploading a custom icon in the Admin, or by adding it manually in the specific location in the theme directory.
The favicon uploaded in the Admin has a higher priority, and will be used in case both are added.

If you want to have favicon icons of different sizes, you need to add them manually in the file system and define in layout. 

Magento supports the following file types for favicon: `.ico`, `.png`, `.gif`, `.jpg`, `.jpeg`, `.apng`, `.svg`. Not all browsers support all these formats. The most widely supported file format to use for a favicon is `.ico`. 

See the following sections for details about adding favicons.

## Adding a custom favicon in Admin

To add a custom favicon in the Magento Admin, do the following:
<ol>
<li>Navigate to <b>CONTENT</b> > (<b>Design</b>) <b>Configuration</b>. </li>
<li>In the scope grid, decide on which level you will configure the favicon and click <b>Edit</b>. 

</li>
<br>
<li>Under the <b>Other Settings</b> title, expand the <b>HTML Head</b> options.</li>
<li>Next to <b>Favicon Icon</b>, click <b>Upload</b>, and select the file.
<div>
    <img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/favicon_1.png">
</div>
<br>
</li>
<li>Click <b>Save Configuration</b> in the upper right corner to save the changes.</li>
<li>If caching is enabled in your Admin, you get a notification that refreshing certain cache types is required. Do it, to see the chagnes applied.</li>

</ol>
The image you upload in Admin overrides the default favicon and is used as a favicon of 16x16 size.

## Add custom favicons manually

To override the default 16x16 favicon manually, add your custom `favicon.ico` in the `<your_theme_dir>/Magento_Theme/web/ `directory. 

To add favicon icons of other sizes, take the following steps:

1. Add your icons in the `<your_theme_dir>/Magento_Theme/web/`directory.
2. In the `<your_theme_dir>/Magento_Theme/layout/default_head_blocks.xml` layout file specify the paths to the icons and their sizes. 

For example, if you added a `favicon-32x32.png` icon and want it to be used as a 32x32 favicon, your `default_head_blocks.xml` would be like following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <link src="Magento_Theme::favicon-32x32.png" rel="icon" sizes="32x32" />
    </head>
</page>

{%endhighlight%}

For your changes to be applied, clear the follwin`pub/static` directory and .

