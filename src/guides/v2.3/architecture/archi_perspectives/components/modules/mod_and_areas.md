---
group: architecture-guide
title: Modules and areas
menu_title: Modules and areas
---

## Overview {#m2arch-module-areas-overview}

An *area* is a logical component that organizes code for optimized request processing. Magento uses areas to streamline web service calls by loading only the dependent code for the specified area.  Each of the default areas defined by Magento can contain completely different code on how to process URLs and requests.

For example, if you are invoking a REST web service call, rather than load all the code related to generating user [HTML](https://glossary.magento.com/html) pages, you can specify a separate area that loads code whose scope is limited to answering  REST calls.

### Magento area types

Magento is organized into these main areas:

*  **Magento Admin** (`adminhtml`): entry point for this area is `index.php` or `pub/index.php`. The [Admin](https://glossary.magento.com/admin) panel area includes the code needed for store management. The /app/design/adminhtml directory contains all the code for components you'll see while working in the Admin panel.

*  **Storefront** (`frontend`): entry point for this area is `index.php` or `pub/index.php`. The storefront (or `frontend`)  contains template and [layout](https://glossary.magento.com/layout) files that define the appearance of your [storefront](https://glossary.magento.com/storefront).

*  **Basic** (`base`): used as a fallback for files absent in `adminhtml` and `frontend` areas.

*  **Cron** (`crontab`): In `pub/cron.php`, the [`\Magento\Framework\App\Cron`]({{ site.mage2bloburl }}/{{ page.guide_version }}/lib/internal/Magento/Framework/App/Cron.php#L68-L70){:target="_blank"} class always loads the 'crontab' area.

You can also send requests to Magento using the SOAP, REST and GraphQL APIs. These three areas

*  **Web API REST** (`webapi_rest`): entry point for this area is `index.php` or `pub/index.php`. The REST area has a front controller that understands how to do [URL](https://glossary.magento.com/url) lookups for REST-based URLs.

*  **GraphQL** (`graphql`): entry point for this area is `index.php` or `pub/index.php`.

*  **Web API SOAP** (`webapi_soap`): entry point for this area is `index.php` or `pub/index.php`.

## How areas work with modules {#m2arch-module-using}

Modules define which resources are visible and accessible in an area, as well as an area's behavior. The same [module](https://glossary.magento.com/module) can influence several areas. For instance, the RMA module is represented partly in the `adminhtml` area and partly in the `frontend` area.

If your [extension](https://glossary.magento.com/extension) works in several different areas, ensure it has separate behavior and view components for each area.

Each area declares itself within a module. All resources specific for an area are located within the same module as well.

You can enable or disable an area within a module. If this module is enabled, it injects an area's routers into the general application's routing process. If this module is disabled, Magento will not load an area's routers and, as a result, an area's resources and specific functionality are not available.

### Module/area interaction guidelines

*  Modules should not depend on other modules' areas.

*  Disabling an area does not result in disabling the modules related to it.

*  Areas are registered in the [Dependency Injection](https://glossary.magento.com/dependency-injection) framework `di.xml` file.

### Note about Magento request processing

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the URI segment specifies the *frontname*. When an HTTP request arrives, Magento extracts the handle from the URL and interprets it as follows:

```http
[frontName]/[controller folder]/[controller class]
```

The `frontName` is a value defined in the module. Using `catalog/product/view` as an example:

*  `catalog` is the [frontName]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/etc/frontend/routes.xml#L10) in the module area's `routes.xml` file
*  `product` is in the [controller folder]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Controller/Product)
*  `view` is the [controller class]({{ site.mage2bloburl }}/{{ page.guide_version }}/app/code/Magento/Catalog/Controller/Product/View.php)

For deeper directory structures, the controller folders are separated with an underscore (`_`). For example:

```text
catalog/product_compare/add = Magento/Catalog/Controller/Product/Compare/Add.php
```

Note that only the **execute()** method of any given controller is executed.

{:.ref-header}
Related topics

[Module overview]({{page.baseurl}}/architecture/archi_perspectives/components/modules/mod_intro.html)
