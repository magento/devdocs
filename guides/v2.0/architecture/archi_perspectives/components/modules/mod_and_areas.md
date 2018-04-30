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

## Overview {#m2arch-module-areas-overview}

An *area* is a logical component that organizes code for optimized request processing. Magento uses areas to streamline web service calls by loading only the dependent code for the specified area.  Each of the default areas defined by Magento can contain completely different code on how to process URLs and requests.

For example, if you are invoking a REST web service call, rather than load all the code related to generating user {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} pages, you can specify a separate area that loads code whose scope is limited to answering  REST calls.

### Magento area types

Magento is organized into these main areas:

* **Magento Admin** (`adminhtml`): entry point for this area is `index.php` or `pub/index.php`. The {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %} panel area includes the code needed for store management. The /app/design/adminhtml directory contains all the code for components you'll see while working in the Admin panel.

* **Storefront** (`frontend`): entry point for this area is `index.php` or `pub/index.php`. The storefront (or `frontend`)  contains template and {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} files that define the appearance of your {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %}.

* **Basic** (`base`): used as a fallback for files absent in `adminhtml` and `frontend` areas.

You can also send requests to Magento using the SOAP and REST APIs. These two areas

* **Web API REST** (`webapi_rest`): entry point for this area is `index.php` or `pub/index.php`. The REST area has a front controller that understands how to do {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} lookups for REST-based URLs.

* **Web API SOAP** (`webapi_soap`): entry point for this area is `index.php` or `pub/index.php`.

## How areas work with modules {#m2arch-module-using}

Modules define which resources are visible and accessible in an area, as well as an area's behavior. The same {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} can influence several areas. For instance, the RMA module is represented partly in the `adminhtml` area and partly in the `frontend` area.

If your {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} works in several different areas, ensure it has separate behavior and view components for each area.

Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into the general application's routing process. If this module is disabled, Magento will not load an area's routers and, as a result, an area's resources and specific functionality are not available.

### Quick view of module/area interactions

* Modules should not depend on other modules' areas.

* Disabling an area does not result in disabling the modules related to it.

* Areas are registered in the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}Dependency Injection{% endglossarytooltip %} framework `di.xml` file.

### Note about Magento request processing

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. Magento uses the handle to identify which controller (a {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.

## Related topics {#m2arch-module-related}

* <a href="{{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_intro.html">Module overview</a>
