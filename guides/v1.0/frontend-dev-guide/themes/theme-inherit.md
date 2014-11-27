---
layout: default
group: fedg
subgroup: A_Themes
title: Theme inheritance concept
menu_title: Theme inheritance concept
menu_order: 5
github_link: frontend-dev-guide/themes/theme-inherit.md
---

<h2 id="theme-inherit-over">Overview</h2>
Theme inheritance enables you to easily extend themes and minimize the maintenance efforts. You can use an existing theme as a basis for customizations, or minor store design updates, like holidays decoration. Rather than copy extensive theme files and modify what you want to change, you can add overriding and extending files.
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
  <p>A parent and a child theme can belong to different vendors.</p>
</div>


<h2 id="theme-inherit-static">Overriding static view files (styles, JavaScript, images, fonts)</h2>
Styles, JavaScript, images and fonts are static view files (according to Magento classification).<!--ADDLINK-->
To customize static view files defined in the parent theme or in the module view or library files, you can override them by adding a file with the same name in the relevant location according to the fallback schemes described further.

The particular folders, where the system searches in the course of the fallback, depend on whether module context is known for file. Following are the descriptions of both options.

a. If module context is not defined for a file:

1. Theme static files: `app/design/<area>/<Vendor>/<theme>/web/<resource_type>`<!-- `app/design/<area>/<Vendor>/<theme>/web` -->
2. Ancestor's static files, recursively, until a theme with no parent is reached:
	 `app/design/<area>/<parent_theme_path>/web/<resource_type>`
	<!-- 2. `app/design/<area>/<Vendor>/<parent_theme>/web` -->
3. Library static view files: `lib/web/<resource_type>` **<!--is it true about resource type?**

b. If module context is defined for a file:

1. Theme module static files `app/design/<area>/<Vendor>/<theme>/<Vendor>_<Module/>web/<resource_type>`<!--2. `<base_design_dir>/<area>/<theme_path>/<Namespace>_<Module>/web` -->
3. Ancestor theme's module static files, recursively, until a theme with no parent is reached:
	`app/design/<area>/<parent_theme_path>/<Vendor>_<Module/>web/<resource_type>`
	<!--2. `<base_design_dir>/<area>/<parent_theme_path>/<Namespace>_<Module>/web` -->
3. Module static view files: `app/code/<Vendor>/<Module>/view/<area>/web/<resource_type>`
<!-- 4. `<base_code_dir>/<Namespace>/<Module>/view/<area>/web` -->

<u>Example</u>

A company named OrangeCo created a theme named Orange. The theme files are located in `app/design/frontend/OrangeCo/orange`.
Orange inherits from the Magento Blank theme.

Let's imagine OrangeCo needs to add some winter holidays decor. So it creates a new orange_winter theme, which inherits from Orange. The theme is located in `app/design/frontend/OrangeCo/orange_winter`
Orange_winter configuration file looks like following:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Orange&nbsp;Winter&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;OrangeCo/Orange&lt;/parent&gt;
	&lt;media&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>

In the Orange theme there is a footer background image located at `app/design/frontend/OrangeCo/orange/web/images/background.jpg`.

<!-- A background1.jpg screen here -->

OrangeCo wants it to be replaced with a holiday one, so it places a new background image with exactly the same name and extension in `app/design/frontend/OrangeCo/orange_winter/web/images/background.jpg` 

Once the Orange Winter theme is applied, the new holiday image overrides the one from Orange, so on storefront the holiday background is visible.

<!-- A background2.jpg screen here-->


<h2 id="theme-inherit-static">Overriding dynamic view files: templates</h2>
Templates are dynamic view files (according to Magento classification<!--ADDLINK-->). Module context is always known for templates. The fallback scheme for templates is the following:

1. Theme templates: `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/templates`
2. Ancestors themes templates, recursively, until a theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/templates`
3. Module templates: `app/code/<Vendor>/<Module>/view/frontend/templates`


So if you need to customize a certain template, you need to create an overriding one with the same name in the `../templates/<path_to_template>` directory in the theme module files. Where `<path_to_template>` is the path to the original template.

For example, if you need override the `app/code/Magento/Catalog/view/frontend/templates/category/widget/link/link_block.phtml` template, the `<path_to_template>` is `category/widget/link/`


<u>Example</u>
By default, according to the module template, in the mini shopping cart products are listed under the Go to Checkout button:
<p><img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="In the minishopping cart products are listed under the Go to Checkout button "></p>

The order is defined in the `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` module template. The Blank theme does not override this template.
OrangeCo decided they want the product list to be displayed before the the Go to Checkout button.
To do this, in the Orange theme they need to add an overriding template for the corresponding module in the Orange theme folder:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/templates/cart/minicart.phtml` 
Note, that the path to the template inside the `templates` directory in the theme corresponds to that in the module.
Having changed the order or elements in the templates, OrangeCo got the minicart look like following:
<p><img src="{{ site.baseurl }}common/images/inherit_mini2.png" alt="In the minishopping cart products are listed above the Go to Checkout button "></p>
You can find out what exactly code changes are required to perform this and other tasks in the Templates section. <!--ADDLINK-->


<h2 id="theme-inherit-layout">Overriding dynamic view files: layouts</h2>
Layout files are dynamic view files, for which the module context is always defined.
The fallback scheme for layouts is following:


1. Theme layouts: `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout`
2. Ancestor themes layouts, recursively until a theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/layout`
3. Module layouts: `app/code/<Vendor>/<Module>/view/frontend/layout`

Unlike templates or images, layout can be not only overridden, but also extended. 
<h3 id="theme-inherit-layout-over">Overriding layouts</h3>

To override the instructions from an ancestor theme layout file:

 * Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/<ancestor_theme>/` directory.

To override a module layout file (<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">a base layout</a>):

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/base` directory.

For more information about overriding layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-override.html">Override a layout</a> article.

<h3 id="theme-inherit-layout-extend">Extending layouts</h3>

Rather than copy extensive layout code and modify what you want to change, you can create
a theme merging file that contains the changes you want.

To add a theme merging file:

* Place your custom layout file in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/ directory`. 

For more information about extending layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a> article.

<u>Example</u>:

OrangeCo decided they should remove the “Report bugs” link from the footer, defined in **<!--**
To do this, they added a merging layout in `app/design/frontend/OrangeCo/orange/Magento_blank/layout/default.xml` : **<!--??**

<pre> &lt;remove&nbsp;name=&quot;report.bugs&quot;/&gt; </pre>


<h2 id="theme-inherit-locale">Overriding locales</h2>
Locales are CSV text documents containing translation strings for interface elements and system messages. 
Locales cab stored in modules and themes. 
The fallback scheme for locales is the following:

1. `app/design/frontend/<Vendor>/<theme>/i18n/`
2. Repeat these steps recursively for each parent theme, until theme with no parent is reached:
`app/design/frontend/<Vendor>/<parent_theme>/i18n/`

**<!-- Doesn't it search in module folders?**

To override ??

