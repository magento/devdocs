---
group: frontend-developer-guide
title: Override a layout
functional_areas:
  - Frontend
---

## What's in this topic {#fedg_layout_override_overview}

Not all layout customizations can be performed by [extending layouts]. If the amount of customizations is large, you can use the overriding function for the needed layout file. This means that the new file that you place in the theme will be used instead of the parent [theme] layout file of [base] layout file.

In this article, [page layouts], [page configurations], and [generic layouts] are referred to as *layout files*, as the mechanism of overriding is similar for all of them.

Layout files with instructions that override the default or parent theme files are referred to as *overriding layout files*.

## Examples of customizations that involve overriding layouts

Examples of customizations that involve overriding layouts:

*  Suppressing method invocation.

    {:.bs-callout-info}
   Overriding is not necessary if a block has a method that cancels the effect of the originally invoked method. In this case, you can customize the layout by adding a layout file where the canceling method is invoked.

*  Modifying method arguments.
*  Canceling block/container removal using the `remove` attribute.
*  Setting XML attributes of blocks and containers.

 {:.bs-callout-info}
Certain attributes, like `htmlClass`, `htmlId`, `label` attributes can be changed in [extending layouts].

*  Removing block arguments.
*  Modifying and suppressing [handles] inclusion.
*  Removing all handle instructions by declaring an overriding layout file with an empty handle.

## How to override a layout {#fedg_layout_override_howto}

This section discusses how to override:

*  [Base layout]
*  [Theme layout]

### Override base layouts {#fedg_layout_override_default}

To add an overriding base layout file (to override a base layout provided by the module):

1. Put a layout file with the same name in the following location:

   ```tree
    <theme_dir>
      |__/<Namespace_Module>
        |__/layout
          |__/override
             |__/base
               |--<layout1>.xml
               |--<layout2>.xml
   ```

These files override the following layouts:

*  `<module_dir>/view/frontend/layout/<layout1>.xml`
*  `<module_dir>/view/frontend/layout/<layout2>.xml`

For example, `<theme_dir>/Magento_Checkout/layout/override/base/checkout_cart_index.xml` will override `Magento_Checkout/view/frontend/layout/checkout_cart_index.xml`.

### Override theme layouts {#fedg_layout_override_theme}

To add an overriding theme file (to override a parent theme layout):

1. Put a layout file with the same name in the following location:

```tree
<theme_dir>
  |__/<Namespace_Module>
    |__/layout
      |__/override
         |__/theme
            |__/<Parent_Vendor>
               |__/<parent_theme>
                  |--<layout1>.xml
                  |--<layout2>.xml
```

These files override the following layouts:

*  `<parent_theme_dir>/<Namespace>_<Module>/layout/<layout1>.xml`
*  `<parent_theme_dir>/<Namespace>_<Module>/layout/<layout2>.xml`

For example, `<theme_dir>/Magento_Checkout/layout/override/theme/Magento/luma/checkout_cart_index.xml` will override `app/design/frontend/Magento/luma/Magento_Checkout/layout/checkout_cart_index.xml`.

{:.bs-callout-info}
To override page layout files, use the `page_layout` directory name instead of `layout`.

## Customization mistakes {#override-mistake}

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend you not make the following changes:

*  Changing block name or alias. The name of a block should not be changed, and neither should the alias of a block remaining in the same parent element.
*  Changing handle inheritance. For example, you should not change the page type parent handle.

{:.ref-header}
Related topics

*  [Extend a layout]({{ page.baseurl }}/frontend-dev-guide/layouts/layout-extend.html)
*  [Create a theme]({{ page.baseurl }}/frontend-dev-guide/themes/theme-create.html)
*  [Layout instructions]({{ page.baseurl }}/frontend-dev-guide/layouts/xml-instructions.html)

[extending layouts]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-extend.html
[theme]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-loc
[base]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-loc
[page layouts]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-page
[page configurations]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-conf
[generic layouts]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-types.html#layout-types-gen
[handles]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-over-terms
[Base layout]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-loc
[Theme layout]: {{page.baseurl}}/frontend-dev-guide/layouts/layout-overview.html#layout-loc
