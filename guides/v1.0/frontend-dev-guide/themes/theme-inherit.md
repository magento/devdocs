---
layout: howtom2devgde_chapters_fedg
title: Theme inheritance concept
---

<h1 id="theme-inherit">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-inherit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-inherit-over">Overview</h2>
Theme inheritance is a mechanism allowing you to easily extend existing themes. If you update a store design for holidays, or simply use the default theme as a basis for your customizations, you do not have to duplicate all theme files, but only need to specify the basic theme as a parent one, and add overriding or extending files. 
The level of theme inheritance is not limited.

Theme inheritance is based on the fallback mechanism, which guarantees that if a view file is not found in the requested location, it will be looked for in other locations defined by the fallback scheme.
The fallback order is slightly different for static (CSS, Less, JavaScript, fonts and images) and dynamic (layouts, templates) theme files. The article describes the fallback levels for each kind of view files, as well as how to extend default or theme design by creating overriding and merging (in case of layout) files.
<h2>Setting a parent theme</h2>
The parent theme is specified in the configuration file, `theme.xml`, of the child, under `<parent></parent>`.
Example:
The Orange theme inherits from the blank theme by Magento:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Magento&nbsp;Orange&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>
A parent and child theme can belong to different vendors.


<h2 id="theme-inherit-static">Overriding static view files (styles, JavaScript, images, fonts)</h2>
Styles, JavaScript, images and fonts are static view files (according to Magento classification).
If you need to customize static view files defined in the parent theme or in the module view or library files, you can override them by adding a file with the same name in the relevant location according to the fallback schemes described further.

The fallback for static view files:

Without module context:

1. `app/design/<area>/<Vendor>/<theme>/web/<resource_type>`
2. `app/design/<area>/<Vendor>/<theme>/web` **<!-- ??**
3. Repeat these steps recursively for each parent theme, until theme with no parent is reached:
	1. `app/design/<area>/<Vendor>/<parent_theme>/web/<resource_type>`
	2. `app/design/<area>/<Vendor>/<parent_theme>/web` **<!-- ??**
3. `<base_lib_web_dir>` 

With module context:

1. `<base_design_dir>/<area>/<theme_path>/<Namespace>_<Module>/web/<resource_type>`
2. `<base_design_dir>/<area>/<theme_path>/<Namespace>_<Module>/web` **<!-- ??**
3. Repeat these steps recursively for each parent theme, until theme with no parent is reached:
	1. `<base_design_dir>/<area>/<parent_theme_path>/<Namespace>_<Module>/web/<resource_type>`
	2. `<base_design_dir>/<area>/<parent_theme_path>/<Namespace>_<Module>/web`
3. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web/<resource_type>`
4. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web`
 **<!-- ??**
*

<u>Example</u>


<h2 id="theme-inherit-static">Overriding Templates</h2>
Templates are dynamic view files (according to Magento classification). Templates cannot be executed without block scope, and as a result must belong to a particular module. So the module context is always known for them. The fallback scheme for templates is the following:

1. `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/templates`
2. For each parent theme, until a theme with no parent is reached: `app/design/frontend/<Vendor>/<parent_theme>/<Vendor>_<Module>/templates`
3. `app/code/<Vendor>/<Module>/view/frontend/templates`

So if you need to customize a certain template, you need to create an overriding one with the same name in the `../templates/<path_to_template>` sub-directory of the directory defined by the fallback scheme. <path_to_template> is the path to the original template. For example, if you need override the `app/code/Magento/Catalog/view/frontend/templates/category/widget/link/link_block.phtml` template, the `<path_to_template>` is `category/widget/link/`
 

<u>Example</u>

For more information about customizing templates refer to the Template section of this guide. <!--ADDLINK-->

 
<h2 id="theme-inherit-layout">Overriding and extending layouts</h2>
Layout files are dynamic view files, for which the module context is not always defined.
The fallback sheme for layouts if following:
Without module context:

1. `app/design/frontend/<Vendor>/<theme>/`  **<!-- No idea where**
2. For each parent theme, until theme with no parent is reached: `app/design/frontend/<Vendor>/<parent_theme>/`  **<!-- No idea where**

With module context:

1. `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout`
2. Repeat recursively until theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/layout`
3. `app/code/<Vendor>/<Module>/view/frontend/layout`

Unlike styles or templates, layout files can be not only overriden, but also extended in your custom theme. 
<h4 id="theme-inherit-layout-over">Overriding layouts</h4>

To override the layout instructions from a parent theme layout file:

 * Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/<parent_theme>/` directory.
 
To override a module layout file (<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">a base layout</a>):

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override` directory.
* 
For more information about overriding layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a> article.

<h4 id="theme-inherit-layout-extend">Extending layout</h4>
Rather than copy extensive layout code and modify what you want to change, you can create a theme merging file that contains the changes you want.

To add a theme merging file:

* Place your custom layout file in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/ directory`. 

For more information about extending layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a> article.

**<!-- Do we need to mention locales?**

