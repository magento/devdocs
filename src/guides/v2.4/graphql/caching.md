---
group: graphql
title: GraphQL caching
migrated_to: https://developer.adobe.com/commerce/webapi/graphql/usage/caching/
layout: migrated
---

Magento can cache pages rendered from the results of certain GraphQL queries with [full-page caching]({{page.baseurl}}/extension-dev-guide/cache/page-caching.html). Full-page caching improves response time and reduces the load on the server. Without caching, each page might need to run blocks of code and retrieve large amounts of information from the database. Only queries submitted with an HTTP GET operation can be cached. POST queries cannot be cached.

The GraphQL schema is cached in the Configuration cache, which can be refreshed from the Cache Management page (**System** > **Tools** > **Cache Management**).

## Cached and uncached queries

The definitions for some queries include cache tags. Full page caching uses these tags to keep track of cached content. They also allow public content to be invalidated. Private content invalidation is handled on the client side.

{:.bs-callout-info}
GraphQL allows you to make multiple queries in a single call. If you specify any uncached query, the system bypasses the cache for all queries in the call.

Magento caches the following queries:

*  `categories`
*  `category` (deprecated)
*  `categoryList`
*  `cmsBlocks`
*  `cmsPage`
*  `products`
*  `route`
*  `urlResolver` (deprecated)

Magento explicitly disallows caching the following queries.

*  `cart`
*  `country`
*  `countries`
*  `currency`
*  `customAttributeMetadata`
*  `customer`
*  `customerDownloadableProducts`
*  `customerOrders`
*  `customerPaymentTokens`
*  `storeConfig`
*  `wishlist` (deprecated)

[Define the GraphQL schema for a module]({{page.baseurl}}/graphql/develop/create-graphqls-file.html) describes the syntax of a valid query.

## Caching for logged-in customers {#customers}

In general, guest shoppers see the same products, categories, and prices. Guest queries are easy to cache because content can be cached based on the URL and query alone. However, once the guest logs in as a customer, factors such their customer group or status as a B2B merchant can significantly affect what they see on the storefront.

To enable caching for logged-in customers, {{site.data.var.ce}} 2.4.4 introduces the `X-Magento-Cache-Id` response header. This header is returned with every GraphQL GET and POST request. Its value is an SHA hash comprised of several factors that are specific to the customer's context. The following values are concatenated prior to being hashed:

*  The store ID
*  The currency code of the store, such as USD or EUR
*  A Boolean value indicating whether the customer is logged in (true or false)
*  The customer's group ID
*  The customer's tax rate, expressed as a percentage, such as 0.0875
*  A salt value generated the first time any GraphQL request cache status is `Miss`

The resultant hash is calculated as follows:

```php
SHA256(Store ID + Currency + Is-Logged-In + Customer group + Customer tax rate + Salt value)
```

Magento caches the results of all applicable queries. If you specify the resultant hash as the input value for the `X-Magento-Cache-Id` header of a GraphQL request, then the cached results can be loaded. Although POST requests are not cached, the resultant hashed value provide more opportunities to obtain updated cache IDs.

To define additional factors for computing `X-Magento-Cache-Id` hash values, add a section similar to the following to the [di.xml file]({{page.baseurl}}/extension-dev-guide/build/di-xml-file.html) of a custom module. The `argument name` must be set to `idFactorProviders`, with the additional attribute names assigned as `item names`.

```xml
<type name="Magento\GraphQlCache\Model\CacheId\CacheIdCalculator">
    <arguments>
        <argument name="idFactorProviders" xsi:type="array">
            <item name="currency" xsi:type="object">Magento\StoreGraphQl\CacheIdFactorProviders\CurrencyProvider</item>
            <item name="store" xsi:type="object">Magento\StoreGraphQl\CacheIdFactorProviders\StoreProvider</item>
        </argument>
    </arguments>
</type>
```

{:.bs-callout-info}
Adding factors could generate too many unique cache keys, thereby reducing the number of caching hits and affecting performance.

## Caching with Varnish

For on-premise installations, we recommend setting up Varnish as a reverse proxy to serve the full page cache in a production environment. The template `vcl` file that ships with each release configures support for GraphQL caching. We recommend that you review the template file each release to determine whether you need to update the `default.vcl` on your system. To view the contents of the latest template file, you can [download a template file from the Admin](https://docs.magento.com/user-guide/system/cache-full-page.html) or review the `app/code/Magento/PageCache/etc/varnish6.vcl` file in the code base.

See [Configure and use Varnish]({{page.baseurl}}/config-guide/varnish/config-varnish.html) and [Configure Varnish and your web server]({{page.baseurl}}/config-guide/varnish/config-varnish-configure.html) for more information.

## Caching with Fastly

To cache guest and customer GraphQL query results on {{ site.data.var.ece }}, the Cloud project must be running the Fastly CDN module for Magento 2 version 1.2.160 or later.

{:.procedure}
To enable GraphQL caching on Fastly:

1. Upgrade the Fastly CDN Module for Magento 2.x to version 1.2.160 or later.
1. Upload the updated VCL code to the Fastly servers.

[Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) describes how to perform both of these tasks.

By default, the Fastly module for Magento provides the following VCL configuration for caching guest queries:

```text
if (req.request == "GET" && req.url.path ~ "/graphql" && req.url.qs ~ "query=") {
....
```

Fastly will only cache GET requests that contain a query parameter in the request URL.

For logged-in customer requests, the `Authorization Bearer` token is always present. If the `X-Magento-Cache-Id` header is also present, then any cookie headers will be ignored in favor of the value in `X-Magento-Cache-Id`.

```text
if (req.http.graphql && !req.http.X-Magento-Cache-Id && req.http.Authorization ~ "^Bearer" ) {
....
```

### Example

```text
http://example.com/graphql?query={ products(filter: {sku: {eq: "Test"}}) { items { name } } }&variables={}
....
```

{:.bs-callout-info}
If you call GraphQL queries in the query body rather than the url (for example, as `--data-raw '{"query" .... }'`), the request is not cached.

## X-Magento-Vary cache cookie

The `X-Magento-Vary` cache cookie is not supported for GraphQL. The `Store` and `Content-Currency`  headers, along with the content language (which is deduced) determine the context.

## Response headers

In developer mode, Magento returns several headers that could be useful for debugging caching problems. These headers are not specific to GraphQL.

Header | Description
--- |---
`X-Magento-Cache-Debug` | HIT (the page was loaded from cache) or MISS (the page was not loaded from cache.
`X-Magento-Tags` | A list of cache tags that correspond to the catalog, category, or CMS items returned in the query. Magento caches these items.

## Cache invalidation

Magento invalidates the cache when any of the following events occur:

*  A change occurs to a specific entity or entities in aggregate. An increase in a product's price is a direct and obvious change. Applying a new tax class tax to products changes a set of products in aggregate.
*  The `Preview-Version` header is specified in a query that supports caching.
*  The system configuration changes.
*  An administrator flushes or disables the cache from the Admin or with the `bin/magento cache` command.
