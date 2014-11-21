---
layout: howtom2devgde_chapters_fedg
title: Theme inheritance concept
---

<h1 id="theme-inherit">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}frontend-dev-guide/themes/theme-inherit.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="theme-inherit-over">Overview</h2>
Theme inheritance enables you to easily extend themes.You can use an existing theme as a basis for customizations, minor store design updates, like holidays decoration. Rather than copy extensive theme files and modify what you want to change, you can add overriding and extending files. 
The level of theme inheritance is not limited.

Theme inheritance is based on the fallback mechanism, which guarantees that if a view file is not found in the current theme, the system searches in the ancestor themes, module view files or library.
The fallback order is slightly different for static (CSS, Less, JavaScript, fonts and images) and dynamic (layouts, templates) theme files. The article describes the fallback for each type of theme files, and provides an overview of how to override ancestor themes and module designs.

For comprehensive information about developing theme components refer to the 
subsequent chapters of this guide.

<h2>Setting a parent theme</h2>
A parent theme is specified in the child theme configuration file<!--ADDLINK-->, under `<parent></parent>`.
Example:
The Orange theme inherits from the Blank theme:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Magento&nbsp;Orange&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>A parent and a child theme can belong to different vendors.</p></span>
</div>


<h2 id="theme-inherit-static">Overriding static view files (styles, JavaScript, images, fonts)</h2>
Styles, JavaScript, images and fonts are static view files (according to Magento classification).<!--ADDLINK-->
To customize static view files defined in the parent theme or in the module view or library files, you can override them by adding a file with the same name in the relevant location according to the fallback schemes described further.

The fallback for static view files:

If module context is not defined for a file:

1. Theme static files: `app/design/<area>/<Vendor>/<theme>/web/<resource_type>`<!-- `app/design/<area>/<Vendor>/<theme>/web` -->
2. Ancestor's static files, recursively, until a theme with no parent is reached:
	 `app/design/<area>/<parent_theme_path>/web/<resource_type>`
	<!-- 2. `app/design/<area>/<Vendor>/<parent_theme>/web` -->
3. Library static view files: `lib/web/<resource_type>` **<!--is it true about resource type?**

If module context is defined for a file:

1. Theme module static files `app/design/<area>/<Vendor>/<theme>/<Vendor>_<Module/>web/<resource_type>`<!--2. `<base_design_dir>/<area>/<theme_path>/<Namespace>_<Module>/web` -->
3. Ancestor theme's module static files, recursively, until a theme with no parent is reached:
	`app/design/<area>/<parent_theme_path>/<Vendor>_<Module/>web/<resource_type>`
	<!--2. `<base_design_dir>/<area>/<parent_theme_path>/<Namespace>_<Module>/web` -->
3. Module static view files: `app/code/<Vendor>/<Module>/view/<area>/web/<resource_type>`
<!-- 4. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web` -->
 


<u>Example</u>


<h2 id="theme-inherit-static">Overriding Templates</h2>
Templates are dynamic view files (according to Magento classification<!--ADDLINK-->). Module context is always known for them. The fallback scheme for templates is the following:

1. Theme templates: `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/templates`
2. Ancestors themes templates, recursively, until a theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/templates`
3. Module templates: `app/code/<Vendor>/<Module>/view/frontend/templates`


So if you need to customize a certain template, you need to create an overriding one with the same name in the `../templates/<path_to_template>` directory in the theme module files. Where <path_to_template> is the path to the original template.

For example, if you need override the `app/code/Magento/Catalog/view/frontend/templates/category/widget/link/link_block.phtml` template, the `<path_to_template>` is `category/widget/link/`
 

<u>Example</u>

For more information about customizing templates refer to the Template section of this guide. <!--ADDLINK-->

 
<h2 id="theme-inherit-layout">Overriding layouts</h2>
Layout files are dynamic view files, for which the module context is always defined.
The fallback scheme for layouts is following:


1. Theme layouts: `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout`
2. Ancestor themes layouts, recursively until a theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/layout`
3. Module layouts: `app/code/<Vendor>/<Module>/view/frontend/layout`


To override the instructions from an ancestor theme layout file: **<!--ancestor or parent?**

 * Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/<parent_theme>/` directory.
 
To override a module layout file (<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">a base layout</a>):

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/base` directory.

For more information about overriding layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a> article.



**<!-- Do we need to mention locales?**

