---
group: cloud-guide
title: Redirects
functional_areas:
  - Cloud
  - Setup
---

Managing redirection rules is a common requirement for web applications, especially in cases where you do not want to lose incoming links that have changed or been removed over time. The following demonstrates how to manage redirection rules on your {{site.data.var.ece}} projects.

If the redirection methods discussed in this topic do not work for you, you can use caching headers to do the same thing.

## Whole-route redirects {#cloud-route-whole}

Using whole-route redirects, you can define very basic routes using the `routes.yaml` file. For example, you can redirect from a naked domain to a `www` subdomain as follows:

```yaml
http://{default}/:
    type: redirect
    to: http://www.{default}/
```

## Partial redirects {#cloud-route-partial}

In the [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html) file you can also add partial [redirect](https://glossary.magento.com/redirect) rules
to existing routes:

```yaml
http://{default}/:
    redirects:
        expires: 1d
        paths:
            "/from": { "to": "http://example.com/" }
            "/regexp/(.*)/matching": { "to": "http://example.com/$1", regexp: true }
```

This format is more rich and works with any type of route, including routes served directly by the application.

Two keys are available under `redirects`:

-  `expires`: Optional, the duration that the redirect is cached.
    Examples of valid values include `3600s`, `1d`, `2w`, `3m`.

-  `paths`: The paths to apply the redirects to.

The following defines each rule under `paths`:

-  A key that describes the expression to match against the request path
-  A value object describing both the destination to redirect to with detail on how to handle the redirection.

The value object is defined with the following keys:

-  [`to`](#cloud-route-partial-to)
-  [`regexp`](#cloud-route-partial-regexp)
-  [`prefix`](#cloud-route-partial-prefix)
-  [`append_suffix`](#cloud-route-partial-append)
-  [`code`](#cloud-route-partial-code)

### `to` {#cloud-route-partial-to}

Required, a partial (`"/destination"` or `"//destination"`) or full URL (`"http://example.com/"`).

### `regexp` {#cloud-route-partial-regexp}

Optional, defaults to `false`. Specifies whether the path key should be interpreted asa PCRE regular expression.

{% collapsible Click to show/hide content %}

In the following example, a request to `http://example.com/regexp/a/b/c/match` redirects to `http://example.com/a/b/c`:

```yaml
http://{default}/:
    type: upstream
    redirects:
        paths:
            "/regexp/(.*)/match":
                to: "http://example.com/$1"
                regexp: true
```

{% endcollapsible %}

### `prefix` {#cloud-route-partial-prefix}
Specifies whether or not to redirect both the path and all its children or just the path itself. Defaults to `true`, but is not supported if `regexp` is `true`.

{% collapsible Click to show/hide content %}

For example,

```yaml
http://{default}/:
    type: upstream
    redirects:
        paths:
            "/from":
                to: "http://{default}/to"
                prefix: true
```

In the preceding example, if `prefix` is set to `true`, `/from` redirects to `/to` and `/from/another/path` will redirect to `/to/another/path`

If `prefix` is set to `false`, `/from` triggers a redirect, but `/from/another/path` does not.

{% endcollapsible %}

### `append_suffix` {#cloud-route-partial-append}
Determines if the suffix is carried over with the redirect. Defaults to `true`, but not supported if `regexp` is `true` *or* if `prefix` is `false`.

{% collapsible Click to show/hide content %}

For example,

```yaml
http://{default}/:
    type: upstream
    redirects:
        paths:
            "/from":
                to: "http://{default}/to"
                append_suffix: false
```

The preceding example results in `/from/path/suffix` redirecting to just `/to`.

If `append_suffix` is set to its default value of `true`, `/from/path/suffix` redirects to `/to/path/suffix`.

{% endcollapsible %}

### `code` {#cloud-route-partial-code}

Specifies the HTTP status code. Valid status codes are [`301` (Moved Permanently)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.2), [`302`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.3), [`307`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.8), and [`308`](https://tools.ietf.org/html/rfc7238). Defaults to `302`.

### `expires` {#cloud-route-partial-expires}

Optional, the duration to cache redirect. Defaults to the `expires` value defined directly under the `redirects` key, but at this level you can fine-tune the expiration of individual partial redirects:

```yaml
http://{default}/:
    type: upstream
    redirects:
        expires: 1d
        paths:
            "/from": { "to": "http://example.com/" }
            "/here": { "to": "http://example.com/there", "expires": "2w" }
```

In the preceding example, redirects from `/from` expire in one day, but redirects from `/here` expire in two weeks.
