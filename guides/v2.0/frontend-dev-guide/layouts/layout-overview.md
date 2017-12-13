---
layout: default
group: fedg
subgroup: B_Layouts
title: Layout overview
menu_title: Layout
menu_order: 1
menu_node: parent
version: 2.0
github_link: frontend-dev-guide/layouts/layout-overview.md
redirect_from: /guides/v1.0/frontend-dev-guide/layouts/layout-overview.html
functional_areas:
  - Frontend
---

<h2>Introduction</h2>

Magento application implements the <a href="http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank">Model-view-controller</a> architecture pattern; meaning, the Magento software is architected into *layers*, including the *view layer*.

The major part of the view layer of Magento application is {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %}. Functionally, layout is a page structure, represented by hierarchy of elements (element tree), which can be of two types: blocks and containers. Technically, layout is defined in the .xml files, which contain element declarations and element manipulation instructions.

This article describes the basic concepts you need to know to create layouts for your custom {% glossarytooltip d2093e4a-2b71-48a3-99b7-b32af7158019 %}theme{% endglossarytooltip %}.

## Terms used {#layout-over-terms}

<span id="handle">*Layout handle*</span>

A *layout handle* is a uniquely identified set of {% glossarytooltip bcbc9bf8-3251-4b3c-a802-07417770af3b %}layout instructions{% endglossarytooltip %} that serves as a name of a layout file.

There are three kinds of layout handles:

- **page type layout handles** – Synonyms of the page type identifiers. Correspond to "full action names" of controller actions, for example, catalog_product_view.
- **page layout handles** – Identifiers of specific pages. Correspond to controller actions with parameters that identify specific pages, for example, catalog_product_view_type_simple_id_128.
- **arbitrary handles** - Do not correspond to any page type, but other handles use them by including.

## Basic layout elements {#layout_overview_blocks}

The basic components of Magento page design are blocks and containers. 

A *container* exists for the sole purpose of assigning content structure to a page. A container has no additional content except the content of included elements. Examples of containers include the header, left column, main column, and footer.

The following figure shows an example:

<img src="{{ site.baseurl }}common/images/layouts_containers_defn.jpg" />

 A *block* represents each feature on a page and employs templates to generate the {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} to insert into its parent structural block. Examples of blocks include a {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} list, a mini cart, product tags, and product listing.

The following figure shows an example:

<img src="{{ site.baseurl }}common/images/layouts_block_defn.jpg"/>.

## Basic layouts 

The basic view of all Magento {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} pages is defined in two page configuration layout files located in the Magento_Theme module: 

* `<Magento_Theme_module_dir>/view/frontend/layout/default.xml`: defines the page layout. 
* `<Magento_Theme_module_dir>/view/frontend/layout/default_head_blocks.xml`: defines the scripts, images, and meta data included in pages' `<head>` section. 

These basic page configuration layouts are extended in other Magento modules and in Magento themes.

You can also [extend]({{page.baseurl}}frontend-dev-guide/layouts/layout-extend.html) or [override]({{page.baseurl}}frontend-dev-guide/layouts/layout-override.html) these files in your custom theme. 

## Layout files types and conventions

### Layout file types: by role

For a particular page, its layout is defined by two major layout components: *page layout* file and *page configuration* file (or *generic layout* for pages returned in AJAX requests, emails, and so on).

Following are the definitions of each layout file type:

* *Page layout*: an {% glossarytooltip 8c0645c5-aa6b-4a52-8266-5659a8b9d079 %}XML{% endglossarytooltip %} file declaring a page wireframe inside the `<body>` section of the HTML page markup, for example, two-column page layout. 
* *Page configuration*: an XML file declaring detailed structure, contents and meta-information of a page (includes the `<html>`, `<head>`, and `<body>` sections of the HTML page markup).
* *Generic layout*: an XML file declaring page detailed structure and contents inside the `body` section of the HTML page {% glossarytooltip 8f407f13-4350-449b-9dc5-217dcf01bc42 %}markup{% endglossarytooltip %}. Used for pages returned by AJAX requests, emails, HTML snippets, and so on.

For details, refer to <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-types.html" target="_blank">Layout file types</a>.

In this guide we use *layout files* when talking about concepts which are similarly applied to all of these types of layout files.

<h3 id="layout-loc">Module and theme layout files</h3>

The following terms are used to distinguish layouts provided by different application components:

* *Base layouts*: Layout files provided by modules. Conventional location: 
	* Page configuration and generic layout files: `<module_dir>/view/frontend/layout`
	* Page layout files: `<module_dir>/view/frontend/page_layout`
* *Theme layouts*: Layout files provided by themes. Conventional location:
	* Page configuration and generic layout files: `<theme_dir>/<Namespace>_<Module>/layout`
	* Page layout files: `<theme_dir>/<Namespace>_<Module>/page_layout`


## Customize layout {#layout-custom}

To ensure stability and secure your customizations from being deleted during upgrade, do not change out-of-the-box Magento {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} and theme layouts.

To make the necessary changes, create <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">extending</a> and <a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-override.html" target="_blank">overriding</a> layout files in your custom theme. 

## Layout files processing {#layout_processing}


The Magento application processes layout files in the following order:

1.	Collects all layout files from modules. The order is determined by the modules order in the module list from `app/etc/config.php`.
2.	Determines the sequence of <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html" target="_blank">inherited</a> themes `[<parent_theme>, ..., <parent1_theme>] <current_theme>`
3.	Iterates the sequence of themes from last ancestor to current:

	a.	Adds all extending theme layout files to the list.

	b.	Replaces overridden layout files in the list.


1.	Merges all layout files from the list.

<div class="bs-callout bs-callout-info" id="info">
  <p>Layout files that belong to inactive modules or modules with disabled output are ignored.</p>
</div>



## Related topics

*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-instructions.html" target="_blank">Layout instructions</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/xml-manage.html" target="_blank">Common layout customization tasks</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-extend.html" target="_blank">Extend a layout</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-override.html" target="_blank">Override a layout</a>
*	<a href="{{page.baseurl}}frontend-dev-guide/layouts/layout-practice.html" target="_blank">Customizing layout - step-by-step illustration</a>



