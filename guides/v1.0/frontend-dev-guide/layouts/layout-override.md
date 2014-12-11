---
layout: default
group: 
subgroup: B_Layouts
title: Override a layout
menu_title: Override a layout
menu_order: 4
github_link: frontend-dev-guide/layouts/layout-override.md
---

<h2 id="fedg_layout_override_overview">Overview</h2>

Not all layout customizations can be performed by <a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">extending</a> existing layouts. If the amount of customizations is large, you can use the overriding function for the needed layout file. This means that the new file that you place in the theme will be used instead of the parent theme's file.

Layout files with instructions that override the default or parent theme files are referred to as *overriding layout files*.

Examples of customizations that involve overriding layouts:

*	Suppressing method invocation.

	<div class="bs-callout bs-callout-info" id="info">
		<p>Overriding is not necessary if a block has an opposite method that cancels the effect of the originally invoked method. In this case, you can customize the layout by adding a layout file where the opposite method is invoked.</p>
	</div>

*	Modifying method arguments.
*	Canceling block/container removal using the remove directive.
*	Setting XML attributes of blocks and containers.

	<div class="bs-callout bs-callout-info" id="info">
		<p>Overriding is not needed to change the <code>htmlClass</code> of a container when <code>htmlClass</code> is defined in the original container. In this case, it is better to avoid renaming the class). Instead, you should target CSS rules to the original class.</p>
	</div>

*	Removing block arguments.
*	Modifying and suppressing handles inclusion.
*	Removing all handle instructions by declaring an overriding layout file with an empty handle.

<h2 id="layout_override_bad">Avoid layout customization mistakes</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend you not make the following changes:

*	Changing block name or alias. The name of a block should not be changed, as well as the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.


<h2 id="fedg_layout_override_howto">How to override a layout</h2>

This section discusses how to override:

*	Default layout
*	Theme layout

<h3 id="fedg_layout_override_default">Override default layouts</h3>

To add an overriding default layout file (to override a default layout provided by the module):

1.	Create a layout file following our <a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-general.html#layout_conventions">layout file conventions</a>.
2.	Put it according to the location convention, that is:

<pre>__app/design/<areaname>/[your theme path]
  |__/[your namespace]_[your module]
    |__/layout
      |__/override
        |--[ name1 ].xml
        |--[ name2 ].xml</pre>

Where:

`[your theme path]` is a path to the theme relative to the themes directory.
`<areaname>` is the code of the application area the theme applies to (typically, `frontend` or `adminhtml`)

<h3 id="fedg_layout_override_theme">Override theme layouts</h3>

To add an overriding theme file (to override parent layout):

1.	Create a layout file following the layout files conventions.
2.	Put it according to location convention, that is:

<pre>__app/design/area]/[your theme path]
  |__/[your namespace]_[your module]
    |__/layout
      |__/override
        |__/[parent _theme]
          |--[name1].xml
          |--[name2].xml</pre>

Where:

`[parent_theme]` is the code of the theme the new layout file belongs to. The parent theme can be a direct or indirect parent; that is, parent, grandparent, and so on.

#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/responsive-web-design/theme-best-practices.html">Theme design best practices</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/css-topics/theme-ui-lib.html">Magento UI library</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html">XML instructions</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-manage.html">XML instructions</a>