---
layout: default
group: arch-guide
subgroup:
title: Magento areas
menu_title:
menu_order: 1
menu_node: parent
version: 2.0
github_link: architecture/areas/areas.md
redirect_from: /guides/v1.0/architecture/areas/areas.html
---

## Overview {#m2devgde-area-intro}

Magento uses *areas* to efficiently make web service calls, loading only the dependent code for that area. Examples of areas include the `storefront` (frontend), `Magento Admin` (adminhtml, the administration interface), and `web API REST` (webapi_rest).

<div class="bs-callout bs-callout-info" id="info">
  <p>Although <code>frontend</code> and <code>adminhtml</code> are common in {% glossarytooltip 73ab5daa-5857-4039-97df-11269b626134 %}layout{% endglossarytooltip %} paths, layouts are not used by web services. Currently, layouts are used only by {% glossarytooltip a2aff425-07dd-4bd6-9671-29b7edefa871 %}HTML{% endglossarytooltip %} generated for the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} and administration interfaces.</p>
</div>

Magento processes a {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area.

After the area name, the part of the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. The handle is used to identify the controller (a {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.

The purpose of areas is efficiency. If you are invoking a REST web service call, for example, rather than load up all the code related to generating user HTML pages, there is a separate area (such as `/rest`) which loads code that knows only how to answer the REST call (and not generate HTML pages using layouts). Each area can have completely different code on how to process URLs and requests.

Typically, an area has behavior and view components, which operate separately.

The Magento areas currently available are:

* {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} (adminhtml)

* Storefront (frontend)

* Web {% glossarytooltip 786086f2-622b-4007-97fe-2c19e5283035 %}API{% endglossarytooltip %} REST (webapi_rest)

If your {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} works in several different areas, you should make sure it has separate behavior and view components for each area.
