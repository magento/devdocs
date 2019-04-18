---
group: graphql
title: GraphQL caching
---

You can cache pages rendered from the results of certain GraphQL queries with [full-page caching]({{page.baseurl}}/extension-dev-guide/cache/page-caching.html). Full-page caching improves response time and reduces the load on the server. Without caching, each page might need to run blocks of code and run retrieve large amounts of information from the database.

## Cached queries

The definitions for some queries include cache tags. Full page caching uses these tags to keep track of cached content. They also allow public content to be invalidated. Private content invalidation is handled on the client side.

Magento caches the following queries:

* `category`
* `cmsBlocks`
* `cmsPage`
* `products`

Magento explicitly disallows caching the following queries.

* `cart`
* `country`
* `countries`
* `currency`
* `customAttributeMetadata`
* `customer`
* `customerDownloadableProducts`
* `customerOrders`
* `customerPaymentTokens`
* `storeConfig`
* `urlResolver`
* `wishlist`

## Caching with Varnish

We recommend setting up Varnish as a reverse proxy to serve the full page cache in a production environment. See [Configure and use Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html) for more information.

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

[Configure Varnish and your web server]({{page.baseurl}}/config-guide/varnish/config-varnish-configure.html) describes how to configure the `default.vcl` file.

## X-Magento-Vary 
The `X-Magento-Vary` cache cookie is not supported for GraphQL. The `Store` and `Content-Currency`  headers, along with the content language (which is deduced) determine the context.

## Response headers

In developer mode, Magento returns several headers that could be useful for debugging caching problems. These headers are not specific to GraphQL.

Header | Description
--- |---
`X-Magento=Cache-Debug` | HIT (the page was loaded from cache) or MISS (the page was not loaded from cache.
`X-Magento-Tags` | A list of cache tags that correspond to the catalog, category, or CMS items returned in the query. Magento caches these items.

## Cache invalidation