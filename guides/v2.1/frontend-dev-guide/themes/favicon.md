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

## Adding custom favicons in Admin

Allowed file types: ico, png, gif, jpg, jpeg, apng, svg. Not all browsers support all these formats!The most widely supported file format to use for a favicon is ICO. 

<p class="q">is it the same for 2.0 and 2.1?</p>

1. In the Admin, navigate to **CONTENT** > (Design) **Configuration**.
2. In the scope grid, decide the on which level you will configure favicon and click **Edit**.
<div>
    <img style="border: 1px solid #ABABAB" src="{{site.baseurl}}common/images/favicon_2.png">
</div>

3. Under the **Other Settings** title expand the HTML Head options.
4. Next to **Favicon Icon** click **Upload**, and select the file.
5. Click **Save Configuration** in the upper right corner to save the changes.

The image you download here will override the default favicon and is used as a favicon of two sizes:....

<p class="q">what sizes</p>

If you want to have favicons of other sizes as well, you need to add them in the file system and define in layout, as described in the following section.

## Add custom favicons manually

To override the default favicons, used in a and b sizes, add your custom `favicon.ico` in the `<your_theme_dir>/Magento_Theme/web/ `directory. 


To add favicon icons of other sizes, take the following steps:

1. Add your icons in the `<your_theme_dir>/Magento_Theme/web/`directory.
2. In `<your_theme_dir>/Magento_Theme/layout/default_head_blocks.xml` specify the path to the icons and sizes. 
For example, if you added a `favicon-32x32.png` icon and want it to be used as 32x32 icon, your `default_head_blocks.xml` would be like following:

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <head>
        <link src="Magento_Theme::favicon-32x32.png" rel="icon" sizes="32x32" />
    </head>
</page>

{%endhighlight%}

For your changes to be applied, clear the cache.

<p class="q">what cache</p>