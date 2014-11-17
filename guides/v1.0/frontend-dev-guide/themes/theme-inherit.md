---
layout: howtom2devgde_chapters_fedg
title: Theme inheritance concept
---

<h1 id="theme-inherit">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-inherit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-inherit-over">Overview</h2>
Theme inheritance is a mechanism allowing you to easily extend existing themes. If you update a store design for holidays, or simply use the default theme as a basis for your custmizations, you do not have to duplicate all theme files, but only need to spercify the basic theme as a parent one, and add overriding or extending files
The level of theme inheritance is not limited.
<h2>Setting a parent theme</h2>
The parent theme is specified in the configuration file, `theme.xml`, of the child, under `<parent></parent>`.
Example:
The Orange theme inherits from the Blank theme:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Magento&nbsp;Orange&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;
	&lt;media&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>
<h2 id="theme-inherit-fallback">Fallback</h2>
Theme inheritance is based on the fallback mechanism, which 

The fallback order is slightly different for static (.css, .js and images) and dynamic theme files (layouts, templates) 
<h3 id ="theme-inherit-static">Static view files fallback</h3> 
Whenever a static view file path is requested from view subsystem, Magento searches in the following locations:

1. Current theme directory.
2. Iteratively in parent theme(s) directories, if any.
3. Module view files or library files, depending on whether module context is known.

<h3 id="theme-inherit-dynamic">Dynamic view files fallback</h3>
Whenever a dynamic file is requested from view subsystem, Magento searches in the following locations:

1. Current theme directory.
2. Iteratively in parent theme(s) directories, if any.
3. Module view files, if module context is known.

For more details about fallback mechanism see View Files Fallback. <!--ADDLINK -->

<h2 id="theme-inherit-override">Overriding</h2>

<h3>Overriding CSS and Less files</h3>
 .css and .less files are static theme files, so are subject for the fallback mechanism. 
The fallabck for css/less looks like the following:
Without module contex:

1. `<base_design_dir>/<area>/<theme_path>/web/i18n/<locale>`
2. `<base_design_dir>/<area>/<theme_path>/web`
3. Repeat these steps recursively for each parent theme, until theme with no parent is reached:
	1. `<base_design_dir>/<area>/<parent_theme_path>/web/i18n/<locale>`
	2. `<base_design_dir>/<area>/<parent_theme_path>/web`
3. `<base_lib_web_dir>` 

With module context:

1. `<base_design_dir>/<area>/<theme_path>/web/i18n/<locale>/<Namespace>_<Module>`
2. `<base_design_dir>/<area>/<theme_path>/<Namespace>_<Module>/web`
3. Repeat these steps recursively for each parent theme, until theme with no parent is reached:
	1. `<base_design_dir>/<area>/<parent_theme_path>/i18n/<locale>/<Namespace>_<Module>/web`
	2. `<base_design_dir>/<area>/<parent_theme_path>/<Namespace>_<Module>/web`
3. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web/i18n/<locale>`
4. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web`

So if you need to customize styles defined in the parent theme or in the module view or library files, you can override them by adding a css or less file with the same name in the relevant location in your theme folder.  **<!-- Which folder?? **

<u>Example</u>

For more information about customizing styles refer to the CSS section of this guide. <!--ADDLINK-->

<h3>Overriding Templates</h3>
Templates are dynamic view files, for which the module context is always known as templates cannot be executed without block scope, and as a result must belong to a particular module. So for templates the fallback is:

1. `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/templates`
2. For each parent theme, until theme with no parent is reached: `app/design/frontend/<Vendor>/<parent_theme>/<Vendor>_<Module>/templates`
3. `app/code/<Vendor>/<Module>/view/frontend/templates`

So if you need to customize a certain template, you need to create an overriding one with the same name in `<Vendor>_<Module>/templates` inside your theme directory (the fisrt level of fallback). 

For more information about customizing templates refer to the Template section of this guide. <!--ADDLINK-->

<u>Example</u>
 
<h3 id="theme-inherit-layout">Overriding and extending layouts</h3>
Layout files are dynamic view files, for which the module context is not always defined.
So the fallback sheme for layouts if following:
Without module context:

1. `app/design/frontend/<Vendor>/<theme>/`  **<!-- No idea where**
2. For each parent theme, until theme with no parent is reached: `app/design/frontend/<Vendor>/<parent_theme>/`  **<!-- No idea where**

With module context:

1. `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout`
2. Repeat recursively until theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/layout`
3. `app/code/<Vendor>/<Module>/view/frontend/layout`

Unlike CSS. less or templates, layout files can be not only overriden, but also extended in your custom theme. 
<h4 id="theme-inherit-layout-over">Overriding layouts</h4>

To override the layout instructions from a parent theme layout file:

 * Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/<parent_theme>/` directory.
 
To override a module layout file (<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">a base layout</a>):

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override` directory.

<h4 id="theme-inherit-layout-extend">Extending layout</h4>
Rather than copy extensive layout code and modify what you want to change, you can create a theme merging file that contains the changes you want.

To add a theme merging file:

* Place your custom layout file in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/ directory`. 

For more information about extending layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout article.

**<!-- Do we need to mention some other file types? images? locales?**

