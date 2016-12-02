---
layout: default
group:
subgroup:
title:
menu_title:
menu_order: 1
menu_node: parent
version: 2.0
github_link: architecture/areas/areas.md
redirect_from: /guides/v1.0/architecture/areas/areas.html
---

## Magento areas overview {#m2devgde-area-intro}

Magento uses *areas* to efficiently make web service calls, loading only the dependent code for that area. Examples of areas include the `storefront` (frontend), `Magento Admin` (adminhtml, the administration interface), and `web API REST` (webapi_rest).

<div class="bs-callout bs-callout-info" id="info">
  <p>Although <code>frontend</code> and <code>adminhtml</code> are common in layout paths, layouts are not used by web services. Currently, layouts are used only by HTML generated for the storefront and administration interfaces.</p>
</div>

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the part of the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. The handle is used to identify the controller (a PHP class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.

The purpose of areas is efficiency. If you are invoking a REST web service call, for example, rather than load up all the code related to generating user HTML pages, there is a separate area (such as `/rest`) which loads code that knows only how to answer the REST call (and not generate HTML pages using layouts). Each area can have completely different code on how to process URLs and requests.

Typically, an area has behavior and view components, which operate separately.

The Magento areas currently available are:

* Magento Admin (adminhtml)

* Storefront (frontend)

* Web API REST (webapi_rest)

If your extension works in several different areas, you should make sure it has separate behavior and view components for each area.
