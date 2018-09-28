---
group: frontend-developer-guide
title: Templates basic concepts
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-override.html
functional_areas:
  - Frontend
---

## What's in this topic

This topic discusses the main concepts of how default templates work in the Magento application. 

## How templates are initiated {#template-layout}

Templates are usually initiated in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files.
Each layout block has an associated template. 
The template is specified in the `template` attribute of the `<block>` layout instruction. 
For example, from [`<Magento_Catalog_module_dir>/view/frontend/layout/catalog_category_view.xml`]({{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml)

```xml
<block class="Magento\Catalog\Block\Category\View" name="category.image" template="Magento_Catalog::category/image.phtml"/>
```

This means that the `category.image` block is rendered by the `image.phtml` template, which is located in the `category` subdirectory of the `Magento_Catalog` {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} templates directory.

The templates directory of `Magento_Catalog` is `<Magento_Catalog_module_dir>/view/frontend/templates`.

The next section describes where templates can be located in general.

## Conventional templates location {#template-convention} 

Templates are stored in the following locations:

* Module templates: `<module_dir>/view/frontend/templates/<path_to_templates>`
* Theme templates: `<theme_dir>/<Namespace><Module>/templates/<path_to_templates>`

Here `<path_to_templates>` might have several levels of directory nesting, or might be empty. Examples:

* `<Magento_Catalog_module_dir>/view/frontend/templates/product/widget/new/content/new_grid.phtml`
* `<Magento_Checkout_module_dir>/view/frontend/templates/cart.phtml`

## Templates overriding {#override}

For template files with the same name, the following is true: 
theme templates override module templates, and those of a [child theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html) override parent {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} templates.

This mechanism is the basis of the template customization concept in Magento application: to change the output defined by a certain default template, you need to override one in your custom theme.

Overriding templates is described with more details in the [Theme Inheritance article]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-templates).

## Root template {#root}

In Magento there's a special template which serves as root template for all {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} pages in the application: `<Magento_Theme_module_dir>/view/base/templates/root.phtml`.

Unlike other templates, `root.phtml` contains the `doctype` specification and contributes to `<head>` and `<body>` sections of all pages rendered by Magento application. But similar to other templates, `root.phtml` can be overridden in a theme. 

## Getting argument values from layout {#getter}

Arguments values set in a layout file can be accessed in templates using the `get{ArgumentName}()` and `has{ArgumentName}()` methods. There are more details in the [Layout instructions article]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#getter).

## Related reading

[Set a block's template]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#set_template)
