---
layout: default  
group: fedg
subgroup: A_Themes
title: Theme inheritance
menu_title: Theme inheritance
menu_order: 5
github_link: frontend-dev-guide/themes/theme-inherit.md
---

<h2 id="theme-inherit-over">Overview</h2>

Theme inheritance enables you to easily extend themes and minimize the maintenance efforts. You can use an existing theme as a basis for customizations, or minor store design updates, like holidays decoration. Rather than copy extensive theme files and modify what you want to change, you can add overriding and extending files.

The level of theme inheritance is not limited.

Theme inheritance is based on the fallback mechanism, which guarantees that if a view file is not found in the current theme, the system searches in the ancestor themes, module view files or library.

The fallback order is slightly different for static assets (CSS, JavaScript, fonts and images) and other theme files, layouts and templates. The article describes the fallback for each type of theme files, and provides an overview of how to override ancestor themes and module designs.

For comprehensive information about developing theme components, see
subsequent chapters in this guide.

<h2>Set a parent theme</h2>

A parent theme is specified in the child theme `composer.json` file.

Example:
The Orange theme by OrangeCo inherits from the Magento Blank theme. The inheritance is declared in composer.json of the Orange theme as follows:
<pre>
&lt;theme&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../lib/internal/Magento/Framework/Config/etc/theme.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;OrangeCo&nbsp;Orange&lt;/title&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.1.0-alpha100&lt;/version&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;parent&gt;Magento/blank&lt;/parent&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;media&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;preview_image&gt;media/preview.jpg&lt;/preview_image&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/media&gt;&nbsp;
&lt;/theme&gt;
</pre>

<div class="bs-callout bs-callout-info" id="info">
  <p>A parent and a child theme can belong to different vendors. For example, your custom theme can inherit from the Magento Blank theme.</p>
</div>


<h2 id="theme-inherit-static">Override static assets</h2>

Static assets, or static view files, are styles, JavaScript, images, and fonts.<!--ADDLINK-->
To customize static view files defined in the parent theme, module view, or library files, you can override them by adding a file with the same name in the relevant location according to the fallback schemes described further. This also refers to the `.less` files, which technically are not static assets.

The particular directories, where the system searches in the course of the fallback, depend on whether module context is known for file. Following are the descriptions of both options.

If module context is not defined for a file:

1. Theme static files: `app/design/frontend/<Vendor>/<theme>/web/`
2. Ancestor's static files, recursively, until a theme with no parent is reached:
	 `app/design/frontend/<parent_theme_path>/web/`

3. Library static view files: `lib/web/`

If module context is defined for a file:

1. Current theme module static files `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module/>web/`. Example: `app/design/frontend/OrangeCorp/orange/Magento_Catalog/web/`
3. Ancestor themes module static files, recursively, until a theme with no ancestor is reached:
	`app/design/frontend/<parent_theme_path>/<Vendor>_<Module/>web/`

3. Module static view files: `app/code/<Namespace>/<Module>/view/frontend/web/`


<u>Example</u>

A company named OrangeCo created a theme named Orange. The theme files are located in `app/design/frontend/OrangeCo/orange`.
Orange inherits from the Magento Blank theme.

Let's imagine OrangeCo needs to add some winter holidays decor. So it creates a new orange_winter theme, which inherits from Orange. The theme is located in `app/design/frontend/OrangeCo/orange_winter`.

<!--
orange_winter configuration file looks like following:
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

-->

In the Orange theme there is a footer background image located at `app/design/frontend/OrangeCo/orange/web/images/background.jpg`.

<img src="{{ site.baseurl }}common/images/inh-background1.jpg"/>

OrangeCo wants it to be replaced with a holiday one, so it places a new background image with exactly the same name and extension in `app/design/frontend/OrangeCo/orange_winter/web/images/background.jpg`

Once the Orange Winter theme is applied, the new holiday image overrides the one from Orange, so on storefront the holiday background is visible.

<img src="{{ site.baseurl }}common/images/inh-background2.jpg"/>


<h2 id="theme-inherit-templates">Override templates</h2>

The fallback scheme for templates is the following (module context is always known for them):

1. Current theme templates: `app/design/frontend/<Vendor>/<theme>/<Namespace>_<Module>/templates`
2. Ancestors themes templates, recursively, until a theme with no ancestor is reached: `app/design/frontend/<parent_theme_path>/<Namespace>_<Module>/templates`
3. Module templates: `app/code/<Namespace>/<Module>/view/frontend/templates`


So if you need to customize a certain template, you need to create an overriding one with the same name in the `../templates/<path_to_template>` directory in the theme module files. Where `<path_to_template>` is the path to the original template.

For example, if you must override the `app/code/Magento/Catalog/view/frontend/templates/category/widget/link/link_block.phtml` template, the `<path_to_template>` is `category/widget/link/`

<u>Example</u>
By default, according to the module template, in the mini shopping cart products are listed under the Go to Checkout button:
<p><img src="{{ site.baseurl }}common/images/inherit_mini1.png" alt="In the minishopping cart products are listed under the Go to Checkout button "></p>

The order is defined in the `app/code/Magento/Checkout/view/frontend/templates/cart/minicart.phtml` module template. The Blank theme does not override this template.
OrangeCo decided they want the product list to be displayed before the Go to Checkout button.
To do this, they need to add an overriding template for the corresponding module in the Orange theme folder:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/templates/cart/minicart.phtml`
Note, that the path to the template inside the `templates` directory in the theme corresponds to that in the module.
Having changed the order or elements in the templates, OrangeCo got the minicart look like following:
<p><img src="{{ site.baseurl }}common/images/inherit_mini2.png" alt="In the minishopping cart products are listed above the Go to Checkout button "></p>
You can find out what exactly code changes are required to perform this and other tasks in the Templates section. <!--ADDLINK-->

<h2 id="theme-inherit-layout">Extend layouts</h2>

The layouts processing mechanism does not involve fallback. The system collects layout files in the following order:

1. Current theme layouts: `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout`
2. Ancestor themes layouts, starting from the  most distant ancestor, recursively until a theme with no parent is reached: `app/design/frontend/<parent_theme_path>/<Vendor>_<Module>/layout`
3. Module layouts: `app/code/<Vendor>/<Module>/view/frontend/layout`

Unlike templates or images, layout can be not only overridden, but also extended. And the recommended way to customize layout is to extend it by creating theme extending layout files.


To add an extending layout file:

* Put your custom layout file in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/ directory`.

<u>Example</u>


OrangeCo decided they should remove the “Report bugs” link from the footer, defined in `app/code/Magento/Theme/view/frontend/layout/default.xml`
To do this, they added an extending layout in `app/design/frontend/OrangeCo/orange/Magento_blank/layout/default.xml` :

<pre>
&lt;page&nbsp;xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;&nbsp;xsi:noNamespaceSchemaLocation=&quot;../../../../../../../lib/internal/Magento/Framework/View/Layout/etc/page_configuration.xsd&quot;&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;remove&nbsp;name=&quot;report.bugs&quot;/&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
&lt;/page&gt;
</pre>

For more information about extending layout refer to the <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a> article.

<h3 id="theme-inherit-layout-over">Override layouts</h3>

Though overriding layouts is not recommended, it is still possible, and might be a solution for certain customization tasks.
To override the instructions from an ancestor theme layout file:

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/theme/<Vendor>/<ancestor_theme>` directory.

To override module layout instructions (base layout): <!-- ADDLINK -->

* Create a layout file with the same name in the `app/design/frontend/<Vendor>/<theme>/<Vendor>_<Module>/layout/override/base` directory.









