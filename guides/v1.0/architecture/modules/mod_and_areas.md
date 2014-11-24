---
layout: default
group: dev-guide
subgroup: Modules
title: Modules and Areas
menu_title: Modules and Areas
menu_order: 4
github_link: architecture/modules/mod_and_areas.md
---

<h2 id="m2arch-module-areas-overview"> Overview</h2>
Modules define which resources are visible and accessible in an area, as well as an area's behavior.

In Magento there are six Areas:

*     **Magento Admin** (adminhtml)
*     **Storefront** (frontend)
*     **Web API REST** (webapi_rest)
*     **Web API SOAP** (webapi_soap)
*     **Doc** (doc)


Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into general application's routing process. If this module is disabled, an area's routers are not loaded and, as a result, an area's resources and specific functionality are not available.

<div class="bs-callout bs-callout-warning" id="warning">
    <img src="{{ site.baseurl }}common/images/icon_important.png" alt="note" width="40" align="left">
	<span class="glyphicon-class">
    <p>Note: No module should  depend on another module's area.</p></span></div>
    

Magento uses areas to efficiently make web service calls, loading only the dependent code for that area. Examples of areas include the frontend (storefront), backend (administration interface), and webapi (web services).

The purpose of areas is efficiency. If you are invoking a REST web service call, for examle, rather than load up all the code related to generating user HTML pages, there is a separate area (such as /rest) which loads code that knows only how to answer the REST call (and not generate HTML pages using layouts). Each area can have completely different code on how to process URLs and requests.

Typically, an area has behavior and view components, which operate separately.

However, an area can have only one component, for instance, the cron area, which has no view component.


<h2 id="m2arch-module-related"> Related Topics</h2>

* <a href="{{ site.gdeurl }}devguide/___/___.html">Using Areas in Magento</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_depend.html">Understanding Module Dependencies</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_relationships.html">Module Relationships</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_and_areas.html">Modules and Areas</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_conventions.html">Module Location and Naming Conventions</a>
* <a href="{{ site.gdeurl }}architecture/modules/mod_specific.html">Specific Magento Modules</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Adding a New Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Disabling or Removing a Module</a>
* <a href="{{ site.gdeurl }}architecture/modules/____.html">Extending Modules</a>
* <a href="{{ site.gdeurl }}architecture/arch_libraries.html">Libraries</a>
* <a href="{{ site.gdeurl }}architecture/arch_themes.html">Themes</a>
* <a href="{{ site.gdeurl }}architecture/arch_translations.html">Language Packages</a>

