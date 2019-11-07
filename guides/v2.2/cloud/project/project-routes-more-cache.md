---
group: cloud-guide
title: Caching
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ee}} enables you to use caching in your environment. If you disable caching, {{site.data.var.ee}} directly serves the files.

{% include cloud/note-route-all-placeholder.md %}

## Set up caching {#cloud-cache-setup}

Enable caching for your Magento application by configuring cache rules in the `.magento/routes.yaml` file as follows:

```yaml
http://{default}/:
    type: upstream
    upstream: php:php
    cache:
        enabled: true
        headers: [ "Accept", "Accept-Language", "X-Language-Locale" ]
        cookies: ["*"]
        default_ttl: 60
```

## Route-based caching {#cloud-cache-route}

You can enable fine-grained caching by setting up caching rules for several routes separately as the following example shows:

```yaml
http://{default}/:
    type: upstream
    upstream: php:php
    cache:
        enabled: true

http://{default}/path/:
    type: upstream
    upstream: php:php
    cache:
        enabled: false

http://{default}/path/more/:
    type: upstream
    upstream: php:php
    cache:
        enabled: true
```

The preceding example caches the following routes:

-  `http://{default}/`
-  `http://{default}/path/more/`
-  `http://{default}/path/more/etc/`

And the following routes are **not** cached:

-  `http://{default}/path/`
-  `http://{default}/path/etc/`

{:.bs-callout-info}
Regular expressions in routes are **not** supported.

## Cache duration {#cloud-cache-ttl}

The cache duration is determined by the `Cache-Control` response header value. If no `Cache-Control` header is in the response, we use the `default_ttl` key.

## Cache key {#cloud-cache-key}

To decide how to [cache](https://glossary.magento.com/cache) a response, {{site.data.var.ee}} builds a cache key depending on several factors and store the response associated with this key. When a request comes with the same cache key, the response is reused. Its purpose is similar to the HTTP [`Vary` header](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.44).

The parameters `headers` and
`cookies` keys enable you to change this cache key.

The default value for these keys follows:

```yaml
cache:
    enabled: true
    headers: ["Accept-Language", "Accept"]
    cookies: ["*"]
```

## Cache attributes {#cloud-cache-attrib}

We support the following attributes:

-  [`enabled`](#cloud-cache-attrib-en)
-  [`headers`](#cloud-cache-attrib-head)
-  [`cookies`](#cloud-cache-attrib-cook)
-  [`default_ttl`](#cloud-cache-attrib-ttl)

### `enabled` {#cloud-cache-attrib-en}

When set to `true`, enable the cache for this route. When set to `false`, disable the cache for this route.

### `headers` {#cloud-cache-attrib-head}

Defines on which values the cache key must depend.

For example, if the `headers` key is the following:

```yaml
cache:
    enabled: true
    headers: ["Accept"]
```

Then {{site.data.var.ee}} will cache a different response for each value of the `Accept` HTTP header.

### `cookies` {#cloud-cache-attrib-cook}

The `cookies` key define on which values the cache key must depend.

For example:

```yaml
cache:
    enabled: true
    cookies: ["value"]
```

The cache key depends on the value of the `value` cookie in the request.

A special case exists if the `cookies` key has the `["*"]` value. This value means that any request with a cookie will bypass the cache. This is the default value.

{:.bs-callout-info}
You can't use wildcards in the cookie name. You must either use a precise cookie name, or match all cookies with asterisk (`*`). `SESS*` or `~SESS` are currently **not** valid values.

Magento cookies have the following restrictions:

-  You can set maximum of **50 cookies** in the system. Otherwise, Magento will throw an `Unable to send the cookie. Maximum number of cookies would be exceeded` exception.
-  A maximum cookie size is **4096 bytes**. Otherwise, Magento will throw an `Unable to send the cookie. Size of '%name' is %size bytes` exception.

### `default_ttl` {#cloud-cache-attrib-ttl}

If the response does not have a `Cache-Control` header, the `default_ttl` key is used to define the cache duration, in seconds. The default value is `0`, which means nothing is cached.
