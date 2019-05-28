---
group: frontend-developer-guide
subgroup: D_CSS
title: Magento UI library
menu_order: 4
functional_areas:
  - Frontend
  - Theme
---

## What\'s in this topic   {#fedg_using-ui-lib_overview}

The Magento UI {% glossarytooltip 08968dbb-2eeb-45c7-ae95-ffca228a7575 %}library{% endglossarytooltip %} is a flexible [LESS](http://lesscss.org/){: target="_blank"}-based {% glossarytooltip b00459e5-a793-44dd-98d5-852ab33fc344 %}frontend{% endglossarytooltip %} library designed to assist Magento {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %} developers. It employs a set of mixins for base elements to ease frontend theme development and customization. 

This topic describes how the library is organized, and how to use it. 

## Components provided by the UI library {#library_elements}

The Magento UI library provides the ability to customize and reuse the following user interface elements and properties:

*	actions-toolbar
*	breadcrumbs
*	buttons
*	drop-downs
*	forms
*	icons
*	{% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}
*	loaders
*	messages
*	pagination
*	popups
*	ratings
*	sections
*	tabs and accordions
*	tables
*	tooltips
*	typography
*	list of theme variables

The following illustration shows a {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} product page containing some of the preceding elements:

![A product page with user interface elements specified]({{ site.baseurl }}/common/images/ui_lib1.png)

## Mixin location {#fedg_using-ui-lib_mixins}

 You can find the Magento UI library under [`lib/web/css`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css){: target="_blank"}. Library source `.less` files are stored under the `source` directory, each file contains mixins for configuring a certain element, and in most cases the element coincides with the file name:

<pre>lib/web
    ├── css/
    │    ├── docs/ (Library documentation)
    │    ├── source/
    │    │    ├── lib/ (Library source files)
    |    |    |    ├── variables/ (Predefined variables for each mixin)
    │    │    │    ├── _actions-toolbar.less
    │    │    │    ├── _breadcrumbs.less
    │    │    │    ├── _buttons.less
    │    │    │    ├── _dropdowns.less
    │    │    │    ├── _forms.less
    |    |    |    ├── _grids.less
    │    │    │    ├── _icons.less
    │    │    │    ├── _layout.less
    │    │    │    ├── _lib.less
    │    │    │    ├── _loaders.less
    │    │    │    ├── _messages.less
    │    │    │    ├── _navigation.less
    │    │    │    ├── _pages.less
    │    │    │    ├── _popups.less
    │    │    │    ├── _rating.less
    │    │    │    ├── _resets.less
    │    │    │    ├── _responsive.less
    │    │    │    ├── _sections.less
    │    │    │    ├── _tables.less
    │    │    │    ├── _tooltips.less
    │    │    │    ├── _typography.less
    │    │    │    ├── _utilities.less
    │    │    │    └── _variables.less
    │    │    └── _extend.less
    │    │    └── _theme.less
    │    │    └── _variables.less
    │    └── styles.less
    ├── fonts/
    │    └── Blank-Theme-Icons/ (Library custom icons font)
    ├── images/
    │    └── blank-theme-icons.png (Library icons sprite)
    └── jquery/ (Library javascript files)</pre>

## Predefined variables {#fedg_using-ui-lib_predef-vars}

If your theme [inherits]({{ page.baseurl }}/frontend-dev-guide/themes/theme-inherit.html){: target="_blank"} from any Magento out-of-the-box theme, for example Blank, you can easily customize any element of a store page without changing any {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} code or templates. Customization can be performed by simply changing in your theme the values of the predefined variables used in the UI library or parent theme mixins.

The complete list of these variables and their default values are stored in [`lib/web/css/source/lib/variables`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css/source/lib/variables){: target="_blank"}. This directory contains a set of files, corresponding to the set of UI library elements, and each of the files lists element-specific variables. For example, [`lib/web/css/source/lib/variables/_breadcrumbs.less`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css/source/lib/variables/_breadcrumbs.less){: target="_blank"} contains variables used in the `breadcrumbs()` {% glossarytooltip 1a305bdb-9be8-44aa-adad-98758821d6a7 %}mixin{% endglossarytooltip %}.

To change the default library variables values, specify the new values for the required variables in the <code>&lt;theme_dir&gt;/web/css/source/_theme.less</code> file.

{: .bs-callout .bs-callout-info }
Please mind, that your `<theme_dir>/web/css/source/_theme.less` file overrides `_theme.less` of the parent theme (if your theme has a parent). So if you want to inherit the parent theme's variable values additionally to your changes, add the content of parent’s `_theme.less` to your file as well.

The following figure shows the product page shown earlier in this topic, after a custom theme was applied. The theme customized Blank by redefining variables only.

![Changing design by redefining variables]({{ site.baseurl }}/common/images/ui_lib2.png)

## Your custom variables {#fedg_using-ui-lib_vars}

When naming custom variables, please follow the [Magento naming convention for the LESS variables]({{ page.baseurl }}/coding-standards/code-standard-less.html#naming).

## Using mixins {#fedg_using-ui-lib_customize}

You can use a mixin with default variables values, or you can redefine them when calling a mixin. The following paragraphs describe both ways to call a mixin.

To use a mixin with default values, call the mixin without specifying any parameters. For example:

<pre>.breadcrumbs {
    .breadcrumbs();
}</pre>

To call a mixin with parameter values different from default, set these values when calling the mixin, like in the following example:

<pre>.example-button {
    .button(
        @_button-padding: @button-padding,
        @_button-color: #fff,
        @_button-color-hover: #ccc
    );
}</pre>

Variables starting with `@_` are private mixin variables used only in this mixin. Variables starting with `@` (without the underscore) are global, and are listed in [`lib/web/css/source/lib/variables/`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css/source/lib/variables){: target="_blank"}.

## UI library documentation {#docs}

You can find detailed information about the Magento UI library in the documentation provided together with the code:

* [`lib/web/css/docs/source/README.md`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css/docs/source/README.md){: target="_blank"}: describes the Magento UI library structure, naming conventions, and code style.
* [`lib/web/css/docs`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/web/css/docs){: target="_blank"}: contains a set of `.html` files with detailed information about the library mixins. Each file is named after the mixin it describes, and contains detailed mixin description and navigation controls to access documentation for other mixins. The documentation is available in a convenient {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} view in the following location in your Magento installation: <code>pub/static/frontend/Magento/blank/en_US/css/docs/index.html</code>
