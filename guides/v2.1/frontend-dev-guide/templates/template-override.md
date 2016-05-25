---
layout: default  
group: fedg
subgroup: C_Templates
title: Templates basic concepts
menu_title: Templates basic concepts
menu_order: 3
github_link: frontend-dev-guide/templates/template-override.md
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-override.html
---

<h2>What's in this topic</h2>
This topic discusses the main concepts of how default templates work in the Magento application.
The following topics are covered:

* <a href="#template-layout">How templates are initiated</a>
* <a href="#root">Root template</a>
* <a href="#template-convention">Conventional templates location</a>
* <a href="#override">Templates overriding</a>
* <a href="#getter">Getting argument values from layout</a>


<h2 id="template-layout">How templates are initiated</h2>

Templates are usually initiated in layout files.
Each layout block has an associated template.
The template is specified in the `template` attribute of the <block> layout instruction.
For example, from <code><a href="{{site.mage2100url}}app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml" target="_blank">&lt;Magento_Catalog_module_dir&gt;/view/frontend/layout/catalog_category_view.xml</a></code>:

<pre>
&lt;block class=&quot;Magento\Catalog\Block\Category\View&quot; name=&quot;category.image&quot; template=&quot;Magento_Catalog::category/image.phtml&quot;/&gt;
</pre>

This means that the `category.image` block is rendered by the `image.phtml` template, which is located in the `category` subdirectory of the `Magento_Catalog` module templates directory.

The templates directory of `Magento_Catalog` is `<Magento_Catalog_module_dir>/view/frontend/templates`.

The next section describes where templates can be located in general.

<h2 id="template-convention">Conventional templates location</h2> Templates are stored in the following locations:

* <span id="module">Module templates: <code>&lt;module_dir&gt;/view/frontend/templates/&lt;path_to_templates&gt;</code>
* <span id="theme">Theme templates: <code>&lt;theme_dir&gt;/&lt;Namespace&gt;_&lt;Module&gt;/templates/&lt;path_to_templates&gt;</code>

Here <code>&lt;path_to_templates&gt;</code> might have several levels of directory nesting, or might be empty. Examples:

* `<Magento_Catalog_module_dir>/view/frontend/templates/product/widget/new/content/new_grid.phtml`
* `<Magento_Checkout_module_dir>/view/frontend/templates/cart.phtml`

<h2 id="override">Templates overriding</h2>
For template files with the same name, the following is true:
theme templates override module templates, and those of a <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">child theme</a> override parent theme templates.

This mechanism is the basis of the template customization concept in Magento application: to change the output defined by a certain default template, you need to overriding one in your custom theme.

Overriding templates is described with more details in the <a href="{{site.gdeurl21}}frontend-dev-guide/themes/theme-inherit.html#theme-inherit-templates" target="_blank">Theme Inheritance article</a>.


<h2 id="root">Root template</h2>

In Magento there's a special template which serves as root template for all storefront pages in the application: `<Magento_Theme_module_dir>/view/base/templates/root.phtml`.

Unlike other templates, `root.phtml` contains the `doctype` specification and contributes to `<head>` and `<body>` sections of all pages rendered by Magento application. But similar to other templates, `root.phtml` can be overridden in a theme.



<h2 id="getter">Getting argument values from layout</h2>

Arguments values set in a layout file can be accessed in templates using the <code>get{ArgumentName}()</code> and <code>has{ArgumentName}()</code> methods. There are more details in the <a href="{{site.gdeurl21}}frontend-dev-guide/layouts/xml-instructions.html#getter" target="_blank">Layout instructions article.
