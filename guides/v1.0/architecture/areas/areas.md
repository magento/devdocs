---
layout: default-arch
title: Areas
---

<h1 id="m2devgde-area">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}architecture/areas/areas.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="m2devgde-area-intro">Introduction</h2>

Magento uses *areas* to efficiently make web service calls, loading only the dependent code for that area. Examples of areas include the `frontend` (storefront), `backend` (administration interface), and `webapi` (web services). 

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Although <code>frontend</code> and <code>adminhtml</code> are common in layout paths, layouts are not used by web services. Currently, layouts are used only by HTML generated for the storefront and administration interfaces.</p></span>
</div>

Magento processes a URL request by first stripping off the base URL. The first path segment of the remaining URL identifies the request area. 

After the area name, the part of the URI segment specifies the *full front name*. When an HTTP request arrives, the handle is extracted from the URL. The handle is used to identify the controller (a PHP class) and action (a PHP method in the class) to execute. A common action to display a HTML page is `index`, which returns an HTML page.

The purpose of areas is efficiency. If you are invoking a REST web service call, for examle, rather than load up all the code related to generating user HTML pages, there is a separate area (such as `/rest`) which loads code that knows only how to answer the REST call (and not generate HTML pages using layouts). Each area can have completely different code on how to process URLs and requests. 

For an illustration, see <a href="https://alankent.wordpress.com/2014/07/20/playing-around-with-magento-2-areas" target="_blank">Alan Kent's blog</a>.

Typically, an area has behavior and view components, which operate separately.

However, an area can have only one component, for instance, the `cron` area, which has no view component.

The Magento areas are:

* Admin panel: entry point for this area is <code>index.php</code>
* Storefront: entry point for this area is <code>index.php</code> or <code>pub/index.php</code>
* Crontab (crontab): entry point for this area is <code>pub/cron.php</code>
* Install (install): entry point for this area is <code>setup/index.php</code>. `setup` contains `composer.json` that resolves dependencies and manages packages that comprise the Magento software
* Web API REST (webapi_rest): entry point for this area is `index.php` or `pub/index.php`
* Web API SOAP (webapi_soap): entry point for this area is `index.php` or `pub/index.php`

If your extension works in several areas, you should make sure it has separate behavior and view components for each area.
