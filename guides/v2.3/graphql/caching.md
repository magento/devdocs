---
group: graphql
title: GraphQL caching
---

You can cache pages rendered from the results of certain GraphQL queries with [full-page caching]({{page.baseurl}}/extension-dev-guide/cache/page-caching.html). Full-page caching improves response time and reduces the load on the server. Without caching, each page might need to run blocks of code and run retrieve large amounts of information from the database. However, with full-page caching enabled, a fully-generated page can be retrieved directly from the cache.

## Cached queries

The definitions for some queries include cache tags. Full page caching uses these tags to keep track of cached content. They also allow public content to be invalidated. Private content invalidation is handled on the client side.

Magento caches the following queries:

* `category`
* `cmsBlocks`
* `cmsPage`
* `products`

The following queries cannot be cached:

* `cart`

## Caching with Varnish

We recommend setting up Varnish as a reverse proxy to serve the full page cache in a production environment. See [Configure and use Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html)for more information.

Magento 2.3.2 updates the `vcl_hash` subroutine in the template `varnish.vcl` file for both Varnish 4.x and 5.x. If you are upgrading to Magento 2.3.2, edit the `default.vcl` file on your system so that it matches the following sample:

```text
sub vcl_hash {
    if (req.http.cookie ~ "X-Magento-Vary=") {
        hash_data(regsub(req.http.cookie, "^.*?X-Magento-Vary=([^;]+);*.*$", "\1"));
    }

    # For multi site configurations to not cache each other's content
    if (req.http.host) {
        hash_data(req.http.host);
    } else {
        hash_data(server.ip);
    }

    if (req.http.Store) {
        hash_data(req.http.Store);
    }
    if (req.http.Content-Currency) {
        hash_data(req.http.Content-Currency);
    }

    # To make sure http users don't see ssl warning
    if (req.http./* {{ ssl_offloaded_header }} */) {
        hash_data(req.http./* {{ ssl_offloaded_header }} */);
    }
}
```

{:.bs-callout .bs-callout-tip}
The `X-Magento-Vary` cache cookie is no

[Configure Varnish and your web server]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html) provides more information about the `default.vcl` file.

## Caching with 
