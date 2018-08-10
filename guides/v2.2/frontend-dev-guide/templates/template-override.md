---
group: fedg
title: Templates basic concepts
version: 2.1
redirect_from: /guides/v1.0/frontend-dev-guide/templates/template-override.html
functional_areas:
  - Frontend
---

## What's in this topic

This topic explains how default templates work in the Magento application. 

## How templates are initiated {#template-layout}

Templates are initiated in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files, and
each layout block has an associated template. 

The template is specified in the `template` attribute of the `<block>` layout instruction. 

Take this example from [`app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml`]:

```
<block class="Magento\Catalog\Block\Category\View" name="category.image" template="Magento_Catalog::category/image.phtml">
```

The `category.image` block is rendered by the `image.phtml` template in the `category` subdirectory of the `Magento_Catalog` {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} templates directory.

The templates directory of `Magento_Catalog` is `app/code/Magento/Catalog/view/frontend/templates`.

## Template location {#template-convention}

 Templates are stored in the following locations:

* Module templates: `<module_dir>/view/frontend/templates/<path_to_templates>`
* Theme templates: `<theme_dir>/<Namespace>_<Module>/templates/<path_to_templates>`

`<path_to_templates>` indicates zero or more directory levels.

Examples:

* `app/code/Magento/Catalog/view/frontend/templates/product/widget/new/content/new_grid.phtml`
* `app/code/Magento/Checkout/view/frontend/templates/cart.phtml`

## Template overrides {#override}

For template files with the same name, the following override rules apply: 

* Theme templates override module templates
* [Child theme] templates override parent theme templates

To change the output defined by an existing template, override the template in your custom theme.
This concept is the basis of template customization in Magento.

See [Theme inheritance]

## Root template {#root}

`<Magento_Theme_module_dir>/view/base/templates/root.phtml` is the root template for all storefront pages in the Magento application.
This file can be overridden in a theme just like any other template file.

Unlike other templates, `root.phtml` contains the `doctype` specification and contributes to `<head>` and `<body>` sections of all pages rendered by Magento application.

## Getting argument values from layout {#getter}

Arguments values set in a layout file are accessed in templates using the `get{ArgumentName}()` and `has{ArgumentName}()` methods.

See [Layout instructions]

## Using PHP short tags in template PHTML files {#short-tags}

The `echo` command in PHP can be written using the short tag in Magento templates.

For example:
```phtml
<?= $block->getAdjustmentsHtml() ?>
```
is the same as writing 
```phtml
<?php echo $block->getAdjustmentsHtml() ?>
```

## Related reading

[Set a block's template]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-manage.html#set_template)

[`app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml`]: {{ site.mage2000url }}app/code/Magento/Catalog/view/frontend/layout/catalog_category_view.xml
[Child theme]: {{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html
[Theme inheritance]: {{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html#theme-inherit-templates
[Layout instructions]: {{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html#getter
