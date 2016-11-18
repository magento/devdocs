---
layout: default
group: fedg
subgroup: D_CSS
title: Magento UI library
menu_order: 4
version: 2.0
github_link: frontend-dev-guide/css-topics/theme-ui-lib.md
redirect_from: /guides/v1.0/frontend-dev-guide/css-topics/theme-ui-lib.html
---

<h2 id="fedg_using-ui-lib_overview">What's in this topic</h2>

The Magento UI library is a flexible <a href="http://lesscss.org/" target="_blank">LESS</a>-based frontend library designed to assist Magento theme developers. It employs a set of mixins for base elements to ease frontend theme development and customization. 

This topic describes how the library is organized, and how to use it. 

**Contents**:


## Components provided by the UI library {#library_elements}
The Magento UI library provides the ability to customize and reuse the following user interface elements and properties:

*	actions-toolbar
*	breadcrumbs
*	buttons
*	drop-downs
*	forms
*	icons
*	layout
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

The following illustration shows a storefront product page containing some of the preceding elements:

<div style="border: 1px solid #ABABAB">
<img src="{{ site.baseurl }}common/images/ui_lib1.png" alt="A product page with user interface elements specified">
</div>

## Mixin location {#fedg_using-ui-lib_mixins}

 You can find the Magento UI library under <a href="{{site.mage2000url}}lib/web/css" target="_blank"><code>lib/web/css</code></a>. Library source `.less` files are stored under the `source` directory, each file contains mixins for configuring a certain element, and in most cases the element coincides with the file name:

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

If your theme <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherits</a> from any Magento out-of-the-box theme, for example Blank, you can easily customize any element of a store page without changing any CSS code or templates. Customization can be performed by simply changing in your theme the values of the predefined variables used in the UI library or parent theme mixins.

The complete list of these variables and their default values are stored in <a href="{{site.mage2000url}}lib/web/css/source/lib/variables" target="_blank"><code>lib/web/css/source/lib/variables</code></a>. This directory contains a set of files, corresponding to the set of UI library elements, and each of the files lists element-specific variables. For example, <a href="{{site.mage2000url}}lib/web/css/source/lib/variables/_breadcrumbs.less" target="_blank"><code>lib/web/css/source/lib/variables/_breadcrumbs.less</code></a> contains variables used in the `breadcrumbs()` mixin.

To change the default library variables values, specify the new values for the required variables in the <code>&lt;theme_dir&gt;/web/css/source/_theme.less</code> file.

<div class="bs-callout bs-callout-info" id="info">
<p>Please mind, that your <code>&lt;theme_dir&gt;/web/css/source/_theme.less</code> file overrides <code>_theme.less</code> of the parent theme (if your theme has a parent). So if you want to inherit the parent theme's variable values additionally to your changes, add the content of parent’s <code>_theme.less</code> to your file as well.</p>
</div>

The following figure shows the product page shown earlier in this topic, after a custom theme was applied. The theme customized Blank by redefining variables only.

<img src="{{site.baseurl}}common/images/ui_lib2.png" alt="Changing design by redefining variables">

## Your custom variables {#fedg_using-ui-lib_vars}

When naming custom variables, please follow the [Magento naming convention for the LESS variables]({{page.baseurl}}coding-standards/code-standard-less.html#naming).

## Using mixins {#fedg_using-ui-lib_customize}

You can use a mixin with default variables values, or you can redefine them when calling a mixin. The following paragraphs describe the both ways to call a mixin.

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

Variables starting with `@_` are private mixin variables used only in this mixin. Variables starting with `@` (without the underscore) are global, and are listed in <a href="{{site.mage2000url}}lib/web/css/source/lib/variables" target="_blank"><code>lib/web/css/source/lib/variables/</code></a>.

## UI library documentation {#docs}

You can find detailed information about the Magento UI library in the documentation provided together with the code:

* <a href="{{ site.mage2000url }}lib/web/css/docs/source/README.md" target="_blank"><code>lib/web/css/docs/source/README.md</code></a>: describes the Magento UI library structure, naming conventions, and code style.
* <a href="{{ site.mage2000url }}lib/web/css/docs" target="_blank"><code>lib/web/css/docs</code></a>: contains a set of `.html` files with detailed information about the library mixins. Each file is named after the mixin it describes, and contains detailed mixin description and navigation controls to access documentation for other mixins. The documentation is available in a convenient HTML view in the following location in your Magento installation: <code>pub/static/frontend/Magento/blank/en_US/css/docs/index.html</code>
