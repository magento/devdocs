---
group: configuration-guide
title: How Varnish caching works
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of Varnish caching {#config-varnish-cache-over}

This topic discusses how Varnish caching works with Magento using:

*  [`nginx.conf.sample`]({{ site.mage2bloburl }}/{{ page.guide_version }}/nginx.conf.sample) from the Magento 2 GitHub repository
*  `.htaccess` distributed configuration file for Apache provided with Magento
*  `default.vcl` configuration for Varnish generated using the [Magento Admin]({{ page.baseurl }}/config-guide/varnish/config-varnish-magento.html)

{:.bs-callout-info}
This topic covers only the default options in the preceding list. There are many other ways to configure caching in complex scenarios (for example, using a Content Delivery Network); those methods are beyond the scope of this guide.

On the first browser request, cacheable assets are delivered to the client browser from Varnish and cached on the browser.

In addition, Varnish uses an [Entity](https://glossary.magento.com/entity) Tag ([ETag](https://en.wikipedia.org/wiki/HTTP_ETag)) for static assets. The ETag provides a way to determine when [static files](https://glossary.magento.com/static-files) change on the server. As a result, static assets are sent to the client when they change on the server---either on a new request from a browser or when the client refreshes the browser cache, typically by pressing F5 or Control+F5.

More detail is provided in the sections that follow.

## Caching by browser request {#config-varnish-cache-browser}

This section uses a browser inspector to show how assets are delivered to the browser in the first request and afterward loaded from the browser's local [cache](https://glossary.magento.com/cache).

### First browser request {#config-varnish-cache-browser-first}
`nginx.conf.sample` and `.htaccess` provide options for client caching. When the first request is made from a browser for a cacheable object, Varnish delivers it to the client.

The following figure shows an example using a browser inspector.

![The first time a request is made for a cacheable object, Varnish delivers it to the browser]({{ site.baseurl }}/common/images/varnish_apache_first_visit.png)

The preceding example shows a request for the [storefront](https://glossary.magento.com/storefront) main page (`m2_ce_my`). [CSS](https://glossary.magento.com/css) and [JavaScript](https://glossary.magento.com/javascript) assets are cached on the client browser.

{:.bs-callout-info}
Most static assets have an HTTP 200 (OK) status code, indicating the asset was retrieved from the server.

### Second browser request {#config-varnish-cache-browser-second}

If the same browser requests the same page again, these assets are delivered from the local browser cache, as the following figure shows.

![The next time the same object is requested, assets load from the local browser cache]({{ site.baseurl }}/common/images/varnish_apache_second_visit.png)

Note the difference in response time between the first and second request. Again, static assets have a 200 (OK) response code because they're delivered from local cache for the first time.

## How Magento uses Etag {#config-varnish-cache-etag}

The following example shows response headers for a particular static asset.

![The ETag makes it easier to determine whether a static asset has changed or not]({{ site.baseurl }}/common/images/varnish_etag.png)

`calendar.css` has an ETag response header which means the CSS file on the client browser can be compared to the one on the server.

In addition, static assets are returned with a 304 (Not Modified) HTTP status code, as the following figure shows.

![The HTTP 304 (Not Modified) response code indicates the static asset in the local cache is the same as on the server]({{ site.baseurl }}/common/images/varnish_304.png)

The 304 status code occurs because the user invalidated their local cache and the content on the server did not change. Because of the 304 status code, the static asset *content* is not transferred; only HTTP headers are downloaded to the browser.

If the content changes on the server, the client downloads the static asset with an HTTP 200 (OK) status code and a new ETag.
