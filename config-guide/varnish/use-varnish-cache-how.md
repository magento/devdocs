---
group: configuration-guide
subgroup: 09_Varnish
title: How Varnish caching works
menu_title: How Varnish caching works
menu_order: 105
menu_node:
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of Varnish caching   {#config-varnish-cache-over}

This topic discusses how Varnish caching works with Magento using:

*	[`nginx.conf.sample`]({{ site.mage2bloburl }}/{{ page.guide_version }}/nginx.conf.sample){: target="_blank"} from the Magento 2 GitHub repository
*	`.htaccess` distributed configuration file for Apache provided with Magento
*	`default.vcl` configuration for Varnish generated using the [Magento Admin]({{ page.baseurl }}/config-guide/varnish/config-varnish-magento.html)

{: .bs-callout .bs-callout-info }
This topic covers only the default options in the preceding list. There are many other ways to configure caching in complex scenarios (for example, using a Content Delivery Network); those methods are beyond the scope of this guide.

On the first browser request, cacheable assets are delivered to the client browser from Varnish and cached on the browser.  

In addition, Varnish uses an {% glossarytooltip a9027f5d-efab-4662-96aa-c2999b5ab259 %}Entity{% endglossarytooltip %} Tag ([ETag](https://en.wikipedia.org/wiki/HTTP_ETag){: target="_blank"}) for static assets. The ETag provides a way to determine when {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} change on the server. As a result, static assets are sent to the client when they change on the server&mdash;either on a new request from a browser or when the client refreshes the browser cache, typically by pressing F5 or Control+F5.

More detail is provided in the sections that follow.

## Caching by browser request   {#config-varnish-cache-browser}

This section uses a browser inspector to show how assets are delivered to the browser in the first request and afterward loaded from the browser's local {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}.

### First browser request   {#config-varnish-cache-browser-first}

`nginx.conf.sample` and `.htaccess` provide options for client caching. When the first request is made from a browser for a cacheable object, Varnish delivers it to the client.

The following figure shows an example using a browser inspector.

![The first time a request is made for a cacheable object, Varnish delivers it to the browser]({{ site.baseurl }}/common/images/varnish_apache_first_visit.png)

The preceding example shows a request for the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} main page (`m2_ce_my`). {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} and {% glossarytooltip 312b4baf-15f7-4968-944e-c814d53de218 %}JavaScript{% endglossarytooltip %} assets are cached on the client browser.

{: .bs-callout .bs-callout-info }
Most static assets have an HTTP 200 (OK) status code, indicating the asset was retrieved from the server.

### Second browser request   {#config-varnish-cache-browser-second}

If the same browser requests the same page again, these assets are delivered from the local browser cache, as the following figure shows.

<p><img src="{{ site.baseurl }}/common/images/varnish_apache_second_visit.png" alt="The next time the same object is requested, assets load from the local browser cache"></p>

Note the difference in response time between the first and second request. Again, static assets have a 200 (OK) response code because they're delivered from local cache for the first time.

## How Magento uses Etag   {#config-varnish-cache-etag}

The following example shows response headers for a particular static asset. 

<p><img src="{{ site.baseurl }}/common/images/varnish_etag.png" alt="The ETag makes it easier to determine whether a static asset has changed or not"></p>
`calendar.css` has an ETag response header which means the CSS file on the client browser can be compared to the one on the server.

In addition, static assets are returned with a 304 (Not Modified) HTTP status code, as the following figure shows.

<p><img src="{{ site.baseurl }}/common/images/varnish_304.png" alt="The HTTP 304 (Not Modified) response code indicates the static asset in the local cache is the same as on the server"></p>

The 304 status code occurs because the user invalidated their local cache and the content on the server did not change. Because of the 304 status code, the static asset *content* is not transferred; only HTTP headers are downloaded to the browser. 

If the content changes on the server, the client downloads the static asset with an HTTP 200 (OK) status code and a new ETag.

