---
layout: default-arch
title: Areas
---

<h1 id="m2devgde-area">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}architecture/areas/areas.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-area-intro">Introduction</h2>

Magento areas facilitate integrating with and extending Magento. To extend Magento, you must understand what the areas serve and how to use modules in the areas.

This article describes areas and their practical use in Magento.

<p class="q">Reviewer: The definition of area doesn't make sense. Please clarify.</p>

Magento is divided into several conditional parts, which are not interdependent but use the same data. Each of these parts serves to delimit representation of the data to different user groups depending on the behavior logic of the system. These parts are referred to as *areas*.

Usually, an area has behavior and view components, which operate separately.

However, an area can have only one component, for instance, the `cron` area, which has no view component.

The Magento areas are:

<p class="q">Reviewer: Please verify all of the following.</p>

* Admin panel: entry point for this area is <code>index.php</code>
* Storefront: entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
* Crontab (crontab): entry point for this area is <code>pub/cron.php</code>
* Install (install): entry point for this area is <code>setup/index.php</code>. `setup` contains `composer.json` that resolves dependencies and manages packages that comprise the Magento software
* Web API REST (webapi_rest): entry point for this area is `index.php` or `pub/index.php`
* Web API SOAP (webapi_soap): entry point for this area is `index.php` or `pub/index.php`

If your extension works in several areas, you should ensure it has separate behavior and view components for each area.
You can add a new area if needed as discussed in TBD.

<p class="q">Reviewer: Are there instructions for creating a new area? If so, where?</p>
