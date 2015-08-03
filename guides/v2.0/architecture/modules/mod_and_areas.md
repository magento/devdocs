---
layout: default
group: 
subgroup: 
title: Modules and areas
menu_title: Modules and areas
menu_order:
github_link: architecture/modules/mod_and_areas.md
redirect_from: /guides/v1.0/architecture/modules/mod_and_areas.html
---

<h2 id="m2arch-module-areas-overview"> Overview</h2>
Modules define which resources are visible and accessible in an area, as well as an area's behavior.

In Magento there are the following areas:

*     **Magento Admin** (`adminhtml`)
*     **Storefront** (`frontend`)
*     **Web API REST** (`webapi_rest`)


Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into general application's routing process. If this module is disabled, an area's routers are not loaded and, as a result, an area's resources and specific functionality are not available.

<div class="bs-callout bs-callout-warning" id="warning">
	<p>No module should  depend on another module's area.</p>
</div>

Magento uses areas to efficiently make web service calls, loading only the dependent code for that area. 

The purpose of areas is efficiency. If you are invoking a REST web service call, for example, rather than load up all the code related to generating user HTML pages, there is a separate area (such as `/rest`) which loads code that knows only how to answer the REST call (and not generate HTML pages using layouts). Each area can have completely different code on how to process URLs and requests.

Typically, an area has behavior and view components, which operate separately.

<h2 id="m2arch-module-using">Use areas in modules</h2>

The resources visible and accessible in an area as well as area's behavior are defined by modules. The same module can influence several areas, for instance RMA [note: this module is available in EE only] module is represented partly in the adminhtml area and partly in the frontend area.

<div class="bs-callout bs-callout-info" id="info">
  <p>Disabling an area does not result in disabling the modules related to it.</p>
</div>

Magento uses *areas* to efficiently make web service calls, loading only the dependent code for that area. Examples of areas include the storefront (`frontend`), Magento Admin (`adminhtml`, the administration interface), and the WebAPI framework (`webapi_rest`).

<div class="bs-callout bs-callout-info" id="info">
  <p>Although <code>frontend</code> and <code>adminhtml</code> are common in layout paths, layouts are not used by web services. Currently, layouts are used only by HTML generated for the storefront and administration interfaces.</p>
</div>

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the part of the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. The handle is used to identify the controller (a PHP class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.

Typically, an area has behavior and view components, which operate separately.

If your extension works in several different areas, you should make sure it has separate behavior and view components for each area.


<h2 id="m2arch-module-related"> Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Module dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_conventions.html">Module location and naming conventions</a>



