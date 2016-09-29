---
layout: default
group: arch-guide
subgroup: Components
title: Modules and areas
menu_title: Modules and areas
menu_order: 4
level3_menu_node: level3child
level3_subgroup: modules
version: 2.0
github_link: architecture/archi_perspectives/components/modules/mod_and_areas.md
redirect_from: 
  - /guides/v1.0/architecture/modules/mod_and_areas.html
  - /guides/v2.0/architecture/modules/mod_and_areas.html
---

<h2 id="m2arch-module-areas-overview"> Overview</h2>
An <i>area</i> is a logical component that organizes code for optimized request processing. Magento uses areas to streamline web service calls by loading only the dependent code for the specified area.  Each of the default areas defined by Magento can contain completely different code on how to process URLs and requests. 


For example, if you are invoking a REST web service call, rather than load all the code related to generating user HTML pages, you can specify a separate area that loads code whose scope is limited to answering  REST calls. 



<h3>Magento area types</h3>

Magento is organized into these main areas:

*     **Magento Admin** (`adminhtml`): entry point for this area is `index.php` or `pub/index.php`. The Admin panel area includes the code needed for store management. The /app/design/adminhtml directory contains all the code for components you'll see while working in the Admin panel. 

*     **Storefront** (`frontend`): entry point for this area is `index.php` or `pub/index.php`. The storefront (or `frontend`)  contains template and layout files that define the appearance of your storefront. 

*     **Basic** (`base`): basic area contains files that are used for both `adminhtml` and `frontend` areas.


You can also send requests to Magento using the SOAP and REST APIs. These two areas 

*     **Web API REST** (`webapi_rest`): entry point for this area is `index.php` or `pub/index.php`. The REST area has a front controller that understands how to do URL lookups for REST-based URLs.

*     **Web API SOAP** (`webapi_soap`): entry point for this area is `index.php` or `pub/index.php`. 


<h2 id="m2arch-module-using">How areas work with modules</h2>

Modules define which resources are visible and accessible in an area, as well as an area's behavior. The same module can influence several areas. For instance, the RMA module is represented partly in the `adminhtml` area and partly in the `frontend` area.

If your extension works in several different areas, ensure it has separate behavior and view components for each area.

Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into the general application's routing process. If this module is disabled, Magento will not load an area's routers and, as a result, an area's resources and specific functionality are not available.


<h3>Quick view of module/area interactions</h3>


* Modules should not depend on other modules' areas.

* Disabling an area does not result in disabling the modules related to it.

* Areas are registered in the Dependency Injection framework `di.xml` file.


<h3>Note about Magento request processing</h3>

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. Magento uses the handle to identify which controller (a PHP class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.



<h2 id="m2arch-module-related"> Related topics</h2>

* <a href="{{page.baseurl}}architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>



