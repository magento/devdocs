---
layout: default
group: config-guide
subgroup: Varnish
title: How Varnish caching works
menu_title: How Varnish caching works
menu_order: 105
menu_node: 
github_link: config-guide/varnish/use-varnish-cache-how.md
---

#### Contents
*	TBD
*	TBD
*	TBD

<h2 id="config-varnish-cache-over">Overview of Varnish caching</h2>
This topic discusses how Varnish caching works with Magento using:

*	<a href="{{ site.mage2000url }}nginx.conf.sample" target="_blank">`nginx.conf.sample`</a> from the Magento 2 GitHub repository
*	`.htaccess` distributed configuration file for Apache provided with Magento
*	`default.vcl` configuration for Varnish generated using the <a href="{{ site.gdeurl }}config-guide/varnish/config-varnish-magento.html">Magento Admin</a>

<div class="bs-callout bs-callout-info" id="info">
	<p>This topic covers only the default options in the preceding list. There are many other ways to configure caching in complex scenarios (for example, using a Content Delivery Network); those methods are beyond the scope of this guide.</p>
</div>

On the first browser request, cacheable assets are delivered to the client from Varnish. On the second request for the same object, the assets are cached in the client's browser.

In addition, Magento implements <a href="https://en.wikipedia.org/wiki/HTTP_ETag" target="_blank">ETags</a> for static assets.

More detail is provided in the sections that follow.

<h2 id="config-varnish-cache-browser">Caching by browser request</h2>
This section uses a browser inspector to show how assets are delivered to the browser in the first request and afterward loaded from the browser's local cache.

<h3 id="config-varnish-cache-browser-first">First browser request</h3>
`nginx.conf.sample` and `.htaccess` provide options for client caching. When the first request is made from a browser for a cacheable object, Varnish delivers it to the client.

The following figure shows an example using a browser inspector.

<img src="{{ site.baseurl }}common/images/varnish_apache_first_visit.png" alt="The first time a request is made for a cacheable object, Varnish delivers it to the browser">

The preceding example shows a request for the storefront main page (`m2_ce_my`). CSS and JavaScript assets are delivered to the client browser.

<h3 id="config-varnish-cache-browser-second">Second browser request</h3>
If the same browser requests the same page again, these assets are delivered from the local browser cache, as the following figure shows.

<img src="{{ site.baseurl }}common/images/varnish_apache_second_visit.png" alt="The next time the same object is requested, assets load from the local browser cache">

<h2 id="config-varnish-cache-etag">How Magento implements Etag</h2>
