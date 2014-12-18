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

In this article, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-page" target="_blank">page layouts</a>, <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-conf" target="_blank">page configurations</a>, and <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-types.html#layout-types-gen" target="_blank">generic layouts</a> are referred to as *layout files*, as the mechanism of overriding is similar for all of them.


Layout files with instructions that override the default or parent theme files are referred to as *overriding layout files*.


<h2>Examples of customizations that involve overriding layouts</h2>
Examples of customizations that involve overriding layouts:

*	Suppressing method invocation.

	<div class="bs-callout bs-callout-info" id="info">
		<p>Overriding is not necessary if a block has a method that cancels the effect of the originally invoked method. In this case, you can customize the layout by adding a layout file where the canceling method is invoked.</p>
	</div>

*	Modifying method arguments.
*	Canceling block/container removal using the remove directive.
*	Setting XML attributes of blocks and containers.

	<div class="bs-callout bs-callout-info" id="info">
		<p>Certain attributes, like <code>htmlClass</code>, <code>htmlId</code>, <code>label</code> attributes can be changed in <a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending layouts</a>.</p>
	</div>
<p class="q">Question to reviewer: Are there any attributes that cannot be set/changed in extending layouts?</p>
*	Removing block arguments.
*	Modifying and suppressing handles inclusion.
*	Removing all handle instructions by declaring an overriding layout file with an empty handle.


Although the layout overriding mechanism provides great customization flexibility, it's possible to use it to add logically irrelevant changes. We strongly recommend you not make the following changes:

*	Changing block name or alias. The name of a block should not be changed, and neither should the alias of a block remaining in the same parent element.
*	Changing handle inheritance. For example, you should not change the page type parent handle.


<h2 id="fedg_layout_override_howto">How to override a layout</h2>

This section discusses how to override:

*	<a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#location" target="_blank">Base layout</a>
*	<a href="{{site.gdeurl}}frontend-dev-guide/layouts/layout-overview.html#location" target="_blank">Theme layout</a>

<h3 id="fedg_layout_override_default">Override base layouts</h3>

To add an overriding base layout file (to override a base layout provided by the module):


2.	Put the layout file in the following location:

<pre>
__app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;
&nbsp;&nbsp;|__/&lt;Namespace_Module&gt;
&nbsp;&nbsp;&nbsp;&nbsp;|__/layout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/override
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/base
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout1&gt;.xml
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout2&gt;.xml

</pre>

These files override the following layouts:
- 	`app/code/<Vendor>/<Namespace>/<Module>/layout/<layout1>.xml`
-   `app/code/<Vendor>/<Namespace>/<Module>/layout/<layout2>.xml`


<h3 id="fedg_layout_override_theme">Override theme layouts</h3>

To add an overriding theme file (to override a parent theme layout):

2.	Put the layout file in the following location:

<pre>
__app/design/frontend/&lt;Vendor&gt;/&lt;theme&gt;
&nbsp;&nbsp;|__/&lt;Namespace_Module&gt;
&nbsp;&nbsp;&nbsp;&nbsp;|__/layout
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/override
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/theme
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/&lt;Vendor&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|__/&lt;ancestor_theme&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout1&gt;.xml
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--&lt;layout2&gt;.xml
</pre>


#### Related topics:

*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/themes/theme-create.html" target="_blank">Create a theme</a>
*	<a href="{{ site.gdeurl }}frontend-dev-guide/layouts/xml-instructions.html" target="_blank">Layout instructions</a>
