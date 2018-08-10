---
group: fedg
subgroup: A_Themes
title: Theme inheritance
menu_title: Theme inheritance
menu_order: 70
version: 2.0
redirect_from: /guides/v1.0/frontend-dev-guide/themes/theme-inherit.html
functional_areas:
  - Frontend
  - Theme
---

## What\'s in this topic   {#theme-inherit-over}

{% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}Theme{% endglossarytooltip %} inheritance enables you to easily extend themes and minimize the maintenance efforts. You can use an existing theme as a basis for customizations, or minor store design updates, like holidays decoration. Rather than copy extensive theme files and modify what you want to change, you can add overriding and extending files.

The level of theme inheritance is not limited.

Theme inheritance is based on the fallback mechanism, which guarantees that if a view file is not found in the current theme, the system searches in the ancestor themes, {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} view files or {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %}.

The fallback order is slightly different for static assets (CSS, JavaScript, fonts and images) and other theme files, layouts and templates. The article describes the fallback for each type of theme files, and provides an overview of how to override ancestor themes and module designs.

For comprehensive information about developing theme components, see
subsequent chapters in this guide.

## Set a parent theme

A parent theme is specified in the child theme `theme.xml` declaration file.

Example:
the Orange theme by OrangeCo inherits from the Magento Blank theme. The inheritance is declared in `app/design/frontend/OrangeCo/orange/theme.xml` as follows:

{% highlight xml %}
<theme xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Config/etc/theme.xsd">
     <title>Orange</title>
     <parent>Magento/blank</parent>
     <media>
         <preview_image>media/preview.jpg</preview_image>
     </media>
</theme>
{% endhighlight xml %}

<div class="bs-callout bs-callout-info" id="info">
  <p>A parent and a child theme can belong to different vendors. For example, your custom theme can inherit from the Magento Blank theme.</p>
</div>

## Override view.xml file

If your theme does not contain a `view.xml` configuration file, it will be inherited from the parent theme. If you add the `<theme_dir>/etc/view.xml` file in your theme, it overrides the parent's file.

## Override static assets {#theme-inherit-static}

Static assets, or static view files, are styles, JavaScript, images, and fonts.

To customize static view files defined in the parent theme, module view, or library files, you can override them by adding a file with the same name in the relevant location according to the fallback schemes described further. This also refers to the `.less` files, which technically are not static assets.

The particular directories, where the system searches in the course of the fallback, depend on whether module context is known for file. Following are the descriptions of both options.

If module context is not defined for a file:

1. Current theme {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} for a specific locale (the locale set for the storefront): `<theme_dir>/web/i18n/<locale>`
2. Current theme static files: `<theme_dir>/web/`
3. Ancestor's static files, recursively, until a theme with no parent is reached:
- `<parent_theme_dir>/web/i18n/<locale>`
- `<parent_theme_dir>/web/`
4. Library static view files: `lib/web/`

If module context is defined for a file:

1. Current theme and current locale module static files:`<theme_dir>/<Namespace>_<Module>/web/i18n/<locale>/`
2. Current theme module static files `<theme_dir>/<Namespace>_<Module>/web/`. Example: `app/design/frontend/OrangeCorp/orange/Magento_Catalog/web/`
3. Ancestor themes module static files, recursively, until a theme with no ancestor is reached:
- `<parent_theme_dir>/<Namespace>_<Module>/web/i18n/<locale>/`
- `<parent_theme_dir>/<Namespace>_<Module>/web/`
4. Module static view files for the current locale and `frontend` area: `<module_dir>/view/frontend/web/i18n/<locale>/`
5. Module static view files for the current locale and `base` area: `<module_dir>/view/base/web/i18n/<locale>/`
6. Module static view files for the `frontend` area: `<module_dir>/view/frontend/web/`
7. Module static view files for the `base` area: `<module_dir>/view/base/web/`


<u>Example</u>

A company named OrangeCo created a theme named Orange. The theme files are located in `app/design/frontend/OrangeCo/orange`.
Orange inherits from the Magento Blank theme.

Let's imagine OrangeCo needs to add some winter holidays decor. So it creates a new `orange_winter` theme, which inherits from Orange. The theme is located in `app/design/frontend/OrangeCo/orange_winter`.


In the Orange theme there is a footer background image located at `app/design/frontend/OrangeCo/orange/web/images/background.jpg`.

<img src="{{ site.baseurl }}/common/images/inh-background1.jpg"/>

OrangeCo wants it to be replaced with a holiday one, so it places a new background image with exactly the same name and {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} in `app/design/frontend/OrangeCo/orange_winter/web/images/background.jpg`

Once the Orange Winter theme is [applied]({{ page.baseurl }}/frontend-dev-guide/themes/theme-apply.html), the new holiday image overrides the one from Orange, so on {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} the holiday background is visible.

<img src="{{ site.baseurl }}/common/images/inh-background2.jpg"/>

## Override templates {#theme-inherit-templates}

The fallback scheme for templates is the following (module context is always known for them):

1. Current theme templates: `<theme_dir>/<Namespace>_<Module>/templates`
2. Ancestors themes templates, recursively, until a theme with no ancestor is reached: `<parent_theme_dir>/<Namespace>_<Module>/templates`
3. Module templates: `<module_dir>/view/frontend/templates`


So if you need to customize a certain template, you need to create an overriding one with the same name in the `../templates/<path_to_template>` directory in the theme module files. Where `<path_to_template>` is the path to the original template.

For example, if you must override the `<Magento_Catalog_module_dir>/view/frontend/templates/category/widget/link/link_block.phtml` template, the `<path_to_template>` is `category/widget/link/`

<u>Example</u>
By default, according to the module template, in the mini {% glossarytooltip c7ecb18d-cefe-452d-83e2-3c4d5e355db9 %}shopping cart{% endglossarytooltip %} products are listed under the Go to {% glossarytooltip 278c3ce0-cd4c-4ffc-a098-695d94d73bde %}Checkout{% endglossarytooltip %} button:
<p><img src="{{ site.baseurl }}/common/images/inherit_mini1.png" alt="In the minishopping cart products are listed under the Go to Checkout button"/></p>

The order is defined in the `<Magento_Checkout_module_dir>/view/frontend/templates/cart/minicart.phtml` module template. The Blank theme does not override this template.
OrangeCo decided they want the product list to be displayed before the Go to Checkout button.
To do this, they need to add an overriding template for the corresponding module in the Orange theme folder:
`app/design/frontend/OrangeCo/orange/Magento_Checkout/templates/cart/minicart.phtml`
Note, that the path to the template inside the `templates` directory in the theme corresponds to that in the module.
Having changed the order or elements in the templates, OrangeCo got the minicart look like following:
<p><img src="{{ site.baseurl }}/common/images/inherit_mini2.png" alt="In the minishopping cart products are listed above the Go to Checkout button"/></p>
You can find out what exactly code changes are required to perform this and other tasks in the <a href="{{ page.baseurl }}/frontend-dev-guide/templates/template-sample.html">Illustration of customizing templates topic</a>.

## Extend layouts {#theme-inherit-layout}

The layouts processing mechanism does not involve fallback. The system collects {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files in the following order:

1. Current theme layouts: `<theme_dir>/<Vendor>_<Module>/layout/`
2. Ancestor themes layouts, starting from the  most distant ancestor, recursively until a theme with no parent is reached: `<parent_theme_dir>/<Vendor>_<Module>/layout/`
3. Module layouts for the `frontend` area: `<module_dir>/view/frontend/layout/`
4. Module layouts for the `base` area: `<module_dir>/view/base/layout/`

Unlike templates or images, layout can be not only overridden, but also extended. And the recommended way to customize layout is to extend it by creating theme extending layout files.


To add an extending layout file:

* Put your custom layout file in the `<theme_dir>/<Vendor>_<Module>/layout/` directory.

<u>Example</u>

OrangeCo decided they should remove the "Report bugs" link from the footer, defined in `<Magento_Theme_module_dir>/view/frontend/layout/default.xml`
To do this, they added an extending layout in `app/design/frontend/OrangeCo/orange/Magento_Theme/layout/default.xml` :

{%highlight xml%}
<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">
    <body>
        <referenceBlock name='report.bugs' remove='true'/>
    </body>
</page>
{%endhighlight xml%}


For more information about extending layout refer to the <a href="{{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a> article.

## Override layouts {#theme-inherit-layout-over}

Though overriding layouts is not recommended, it is still possible, and might be a solution for certain customization tasks.
To override the instructions from an ancestor theme layout file:

* Create a layout file with the same name in the `<theme_dir>/<Vendor>_<Module>/layout/override/theme/<Vendor>/<ancestor_theme>` directory.

To override module {% glossarytooltip bcbc9bf8-3251-4b3c-a802-07417770af3b %}layout instructions{% endglossarytooltip %} (base layout):

* Create a layout file with the same name in the `<theme_dir>/<Vendor>_<Module>/layout/override/base` directory.

