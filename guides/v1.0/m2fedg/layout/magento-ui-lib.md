---
layout: howtom2devgde_chapters_fedg
title: Using the Magento 2 UI Library
---
 
<h1 id="fedg_using-ui-lib">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/v1.0/m2fedg/css/magento-ui-lib.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_using-ui-lib_overview">Overview of the Magento 2 UI Library</h2>

The Magento UI library is a flexible, modular Magento frontend library that is designed to assist Magento theme developers. It employs a set of mixins for base elements to ease frontend theme development and customization. The Magento UI library offers the following characteristics for those who develop or customize Magento themes. It is:

*	Built-in LESS preprocessor
*	Focused on web standards
*	Customizable
*	Easy to maintain
*	Responsive
*	Accessible
*	The library provides the ability to customize all of the following user interface elements:
*	actions-toolbar
*	breadcrumbs
*	buttons
*	dropdowns
*	forms
*	icons
*	layout
*	loaders
*	messages
*	navigation
*	pagination
*	popups
*	ratings
*	tabs and accordions
*	tables
*	tooltips
*	typography
*	list of theme variables
	
The following figure shows a frontend page containing some of the above-mentioned elements you can customize.

![Here are all the things you can change on a Magento storefront page, including layout, breadcrumbs, ratings, buttons, icons, and text]({{ site.baseurl }}common/images/library_mixins_in_use.jpg)

Each Magento UI library mixins file is named after the block or element which is configured by this mixin. You can find the Magento UI library under:

<pre>pub/lib/
    ├── css/
    │    ├── docs/ (Library documentation)
    │    ├── source/
    │    │    ├── lib/ (Library source files)
    │    │    │    ├── abstract.less
    │    │    │    ├── actions-toolbar.less
    │    │    │    ├── breadcrumbs.less
    │    │    │    ├── buttons.less
    │    │    │    ├── dropdowns.less
    │    │    │    ├── forms.less
    │    │    │    ├── icons.less
    │    │    │    ├── layout.less
    │    │    │    ├── lib.less
    │    │    │    ├── loaders.less
    │    │    │    ├── messages.less
    │    │    │    ├── navigation.less
    │    │    │    ├── pages.less
    │    │    │    ├── popups.less
    │    │    │    ├── rating.less
    │    │    │    ├── resets.less
    │    │    │    ├── responsive.less
    │    │    │    ├── sections.less
    │    │    │    ├── tables.less
    │    │    │    ├── tooltips.less
    │    │    │    ├── typography.less
    │    │    │    ├── utilities.less
    │    │    │    └── variables.less
    │    │    └── theme.less
    │    └── styles.less
    ├── fonts/
    │    └── Blank-Theme-Icons/ (Library custom icons font)
    ├── images/
    │    └── blank-theme-icons.png (Library icons sprite)
    └── jquery/ (Library javascript files)</pre>
	
Following is an example of using a mixin for breadcrumbs in `/app/design/frontend/[your theme name]/css/source/breadcrumbs.less`:

<pre>.breadcrumbs {
    .breadcrumbs();
}</pre>

`/app/design/frontend/[your theme name]/css/source/theme.less` contains global theme customization options. 

Every mixin called without parameters uses variables from `/app/design/frontend/[your theme name]/css/source/lib/variables.less`. To call a mixin with custom variables, you must set their values. 

For example, to change the styling for all buttons on a page, the easiest way is to call the `.button` mixin and set new values for variables required for your customization.

A sample follows:

<pre>.example-button {
    .button(
        @_button-padding: @button-padding,
        @_button-color: #fff,
        @_button-color-hover: #ccc
    );
}</pre>

In the preceding example, variables starting with `@_` are private mixin variables used only in this mixin. Variables starting with `@` (without the underscore) are global, and are listed in /app/design/frontend/<theme_name>/css/source/lib/variables.less file. 

You can find the complete list of mixin private variables and their description in the library documentation under `pub/lib/css/docs`.

The Magento UI library has a specific file called `pub/lib/css/source/lib/variables.less` that includes a list of all predefined variables you can use for theme customization. Using variables and setting your desired value for them, you can easily customize every element on the page without changing any CSS code or templates.  

To override the default library variables for your theme customization, you have to copy `pub/lib/css/source/lib/variables.less` to your theme's `/app/design/frontend/[your custom theme]/css/source/lib/` directory. It overrides the library variables file so that you can use it.

The following figure shows how to customize a theme using only variables from `variables.less`.

![Example of customizing a theme using variables from variables.less]({{ site.baseurl }}common/images/library_variables_customization.jpg)

You can find more information on the Magento UI library specific mixins and the list of mixins variables in the <a href="https://github.com/magento/magento2/blob/master/lib/web/css/docs/source/README.md" target="_blank">library documentation on GitHub</a>.

`README.md` contains an overview and naming conventions for the documentation, as well as descriptions of the HTML files with mixins description and lists of their variables. Each *.html file is named after the elements block which is configured by this particular set of mixins.



#### Related Topics:

