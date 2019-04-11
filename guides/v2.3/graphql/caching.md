---
group: graphql
title: GraphQL caching
---

Magento uses [full-page caching]({{ page.baseurl }}/extension-dev-guide/cache/page-caching.html) on the server to quickly display product, category, and CMS pages. Full-page caching improves response time and reduces the load on the server. Without caching, each page might need to run blocks of code and retrieve information from the database. However, with full-page caching enabled, a fully-generated page can be read directly from the cache.

The definitions for the `products` and `category` queries now include cache tags. These tags enable Magento to cache pages that include results from those queries. 

You can cache queries using either Varnish or with Magento's built-in caching mechanism or wit. Magento recommends using Varnish in a production environment.

## Caching with Varnish

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

[Configure Varnish and your web server]({{ page.baseurl }}/config-guide/varnish/config-varnish-configure.html) provides more information about the `default.vcl` file.

## Caching with the built-in mechanism
