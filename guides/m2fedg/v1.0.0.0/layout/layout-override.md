---
layout: howtom2devgde_chapters_fedg 
title: Overriding a Layout
---
 
<h1 id="fedg_layout_override">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}guides/m2fedg/v1.0.0.0/layout/layout-override.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="fedg_layout_override_overview">Overview of Overriding a Layout</h2>

Not all layout customizations can be performed by extending existing layouts.  If the amount of customizations is large, you can use the overriding function for the needed layout file. This means that the new file that you place in the theme will be used instead of the base or parent theme's file.

Layout files with instructions that override the base or parent theme files are referred to as *overriding layout files*.
 
Examples of customizations that involve overriding layouts:

*	Suppressing method invocation.

	**Note**: Overriding is not necessary if a block has an opposite method that cancels the effect of the originally invoked method. In this case, you can customize the layout by adding a layout file where the opposite method is invoked.
	
*	Modifying method arguments.
*	Cancelling block/container removal using the remove directive.
*	Setting XML attributes of blocks and containers.

	**Note**: Overriding is not needed to change the `htmlClass` of a container when `htmlClass` is defined in the original container. In this case, it is better to avoid changing the class (that is, renaming it). Instead, you should target CSS rules to the original class.
	
*	Removing block arguments.
*	Modifying and suppressing handles inclusion.
*	Removing all handle instructions by declaring an overriding layout file with the empty handle.

<h2 id="fedg_layout_override_howto">How to Override a Layout</h2>

This section discusses how to override:

*	Base layout
*	Theme layout

<h3 id="fedg_layout_override_base">Overriding Base Layouts</h3>

To add an overriding base layout file (to override a base layout provided by the module):

1.	Create a layout file following the layout files conventions.
2.	Put it according to the location convention, that is:

<pre>__app/design/[area]/[your theme path]
  |__/[your namespace]_[your module]
    |__/layout
      |__/override
        |--[ name1 ].xml
        |--[ name2 ].xml</pre>

Where:

`[your theme path]` is a path to the theme relative to the themes directory.
`[area]` is the code of the application area the theme applies to (typically, `frontend` or `adminhtml`)

<h3 id="fedg_layout_override_theme">Overriding Theme Layouts</h3>

To add an overriding theme file (to override parent layout):

1.	Create a layout file following the layout files conventions.
2.	Put it according to location convention, that is:

<pre>__app/design/area]/[your theme path]
  |__/[your namespace]_[your module]
    |__/layout
      |__/override
        |__/[parent _theme ]
          |--[ name1 ].xml  
          |--[ name1 ].xml</pre>

Where:

`[parent_theme]` is the code of the theme the new layout file belongs to. The parent theme can be a direct or indirect ancestor; that is, parent, grandparent, and so on.

<h2 id="layout_override_bad">Avoiding Layout Customization Mistakes</h2>

Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend you not make the following changes:

*	Changing block name or alias. The name of a block should not be changed, as well as the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.


#### Related Topics:

