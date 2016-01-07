---
layout: default
group: arch-guide
subgroup: Components
title: Modules and areas
menu_title: Modules and areas
menu_order: 4
level3_menu_node: level3child
level3_subgroup: modules
github_link: architecture/components/modules/mod_and_areas.md
redirect_from: /guides/v1.0/architecture/modules/mod_and_areas.html
---

<h2 id="m2arch-module-areas-overview"> Overview</h2>
An <i>area</i> is a logical component that organizes code for optimized request processing. Magento uses areas to streamline web service calls by loading only the dependent code for the specified area. 


For example, if you are invoking a REST web service call, rather than load all the code related to generating user HTML pages, you can specify a separate area that loads code whose scope is limited to answering  REST calls.  Each of the default areas defined by Magento can contain completely different code on how to process URLs and requests.


<h3>Magento area structure</h3>
Areas are defined in `di.xml` in the `areas` argument of `Magento\Framework\App\AreaList`. Typically, an area has behavior and view components, which operate separately. 

<h3>Magento area types</h3>

Magento is organized into the following main areas:

*     **Magento Admin** (`adminhtml`): entry point for this area is `index.php` or `pub/index.php`. The Admin panel area includes the code needed for store management.  
`
*     **Storefront** (`frontend`): entry point for this area is `index.php` or `pub/index.php` 

*     **Web API REST** (`webapi_rest`): entry point for this area is `index.php` or `pub/index.php`

*     **Web API SOAP** (`webapi_soap`): entry point for this area is `index.php` or `pub/index.php`


<h3>Note about Magento request processing</h3>

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the part of the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. Magento uses the handle to identify the controller (a PHP class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.


<h2 id="m2arch-module-using">Use areas in modules</h2>

Modules define which resources are visible and accessible in an area, as well as an area's behavior.


The resources visible and accessible in an area as well as area's behavior are defined by modules. The same module can influence several areas. For instance, the RMA module is represented partly in the `adminhtml` area and partly in the `frontend` area.

If your extension works in several different areas, ensure it has separate behavior and view components for each area.

Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into the general application's routing process. If this module is disabled, Magento will not load an area's routers and, as a result, an area's resources and specific functionality are not available.


<div class="bs-callout bs-callout-warning" id="warning">
	<p>Note: Modules should not depend on other modules' areas.</p>
</div>


<div class="bs-callout bs-callout-info" id="info">
  <p>Note: Disabling an area does not result in disabling the modules related to it.</p>
</div>




<h2 id="m2arch-module-related"> Related topics</h2>

* <a href="{{ site.gdeurl }}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>



