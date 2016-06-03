---
layout: default
group: config-guide
subgroup: 09_Varnish
title: How Varnish caching works
menu_title: How Varnish caching works
menu_order: 105
menu_node: 
github_link: config-guide/varnish/use-varnish-cache-how.md
---

#### Contents
*	<a href="#config-varnish-cache-over">Overview of Varnish caching</a>
*	<a href="#config-varnish-cache-browser">Caching by browser request</a>
*	<a href="#config-varnish-cache-etag">How Magento uses Etag</a>

<h2 id="config-varnish-cache-over">Overview of Varnish caching</h2>
This topic discusses how Varnish caching works with Magento using:

*	<a href="{{ site.mage2000url }}nginx.conf.sample" target="_blank">`nginx.conf.sample`</a> from the Magento 2 GitHub repository
*	`.htaccess` distributed configuration file for Apache provided with Magento
*	`default.vcl` configuration for Varnish generated using the <a href="{{ site.gdeurl }}config-guide/varnish/config-varnish-magento.html">Magento Admin</a>

<div class="bs-callout bs-callout-info" id="info">
	<p>This topic covers only the default options in the preceding list. There are many other ways to configure caching in complex scenarios (for example, using a Content Delivery Network); those methods are beyond the scope of this guide.</p>
</div>

On the first browser request, cacheable assets are delivered to the client browser from Varnish and cached on the browser.  

In addition, Varnish uses an Entity Tag (<a href="https://en.wikipedia.org/wiki/HTTP_ETag" target="_blank">ETag</a>) for static assets. The ETag provides a way to determine when static files change on the server. As a result, static assets are sent to the client when they change on the server&mdash;either on a new request from a browser or when the client refreshes the browser cache, typically by pressing F5 or Control+F5.

More detail is provided in the sections that follow.

<h2 id="config-varnish-cache-browser">Caching by browser request</h2>
This section uses a browser inspector to show how assets are delivered to the browser in the first request and afterward loaded from the browser's local cache.

<h3 id="config-varnish-cache-browser-first">First browser request</h3>
`nginx.conf.sample` and `.htaccess` provide options for client caching. When the first request is made from a browser for a cacheable object, Varnish delivers it to the client.

The following figure shows an example using a browser inspector.

<img src="{{ site.baseurl }}common/images/varnish_apache_first_visit.png" alt="The first time a request is made for a cacheable object, Varnish delivers it to the browser">

The preceding example shows a request for the storefront main page (`m2_ce_my`). CSS and JavaScript assets are cached on the client browser.

<div class="bs-callout bs-callout-info" id="info">
	<p>Most static assets have an HTTP 200 (OK) status code, indicating the asset was retrieved from the server.</p>
</div>

<h3 id="config-varnish-cache-browser-second">Second browser request</h3>
If the same browser requests the same page again, these assets are delivered from the local browser cache, as the following figure shows.

<p><img src="{{ site.baseurl }}common/images/varnish_apache_second_visit.png" alt="The next time the same object is requested, assets load from the local browser cache"></p>

Note the difference in response time between the first and second request. Again, static assets have a 200 (OK) response code because they're delivered from local cache for the first time.

<h2 id="config-varnish-cache-etag">How Magento uses Etag</h2>
The following example shows response headers for a particular static asset. 

<p><img src="{{ site.baseurl }}common/images/varnish_etag.png" alt="The ETag makes it easier to determine whether a static asset has changed or not"></p>
`calendar.css` has an ETag response header which means the CSS file on the client browser can be compared to the one on the server.

In addition, static assets are returned with a 304 (Not Modified) HTTP status code, as the following figure shows.

<p><img src="{{ site.baseurl }}common/images/varnish_304.png" alt="The HTTP 304 (Not Modified) response code indicates the static asset in the local cache is the same as on the server"></p>

The 304 status code occurs because the user invalidated their local cache and the content on the server did not change. Because of the 304 status code, the static asset *content* is not transferred; only HTTP headers are downloaded to the browser. 

If the content changes on the server, the client downloads the static asset with an HTTP 200 (OK) status code and a new ETag.

