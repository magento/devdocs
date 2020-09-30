---
group: cloud-guide
title: Configure routes
functional_areas:
  - Cloud
  - Setup
redirect_from:
 - /cloud/project/project-conf-files_routes.html  
---

The `routes.yaml` file in the `.magento/routes.yaml` directory defines routes for your {{ site.data.var.ece }} Integration, Staging, and Production environments. Routes determine how Magento processes incoming HTTP and HTTPS requests.

{% include cloud/note-pro-missing-self-service-options.md %}

The default `routes.yaml` file specifies the route templates for processing HTTP requests as HTTPS on projects that have a single default domain and on projects configured for multiple domains:

```yaml
"http://{default}/":
    type: upstream
    upstream: "mymagento:http"
"http://{all}/":
    type: upstream
    upstream: "mymagento:http"
```

Use the `magento-cloud` CLI to view a list of the configured routes:

```bash
magento-cloud environment:routes

+-------------------+----------+---------------+
| Route             | Type     | To            |
+-------------------+----------+---------------+
| http://{default}/ | upstream | mymagento:php |
+-------------------+----------+---------------+
```
{:.no-copy}

## Route templates

The `routes.yaml` file is a list of templated routes and their configurations. You can use the following placeholders in route templates:

-  `{default}` represents the qualified domain name configured as the default for the project. For example, if you have a project with the default domain `example.com`, the route templates `https://www.{default}/` and `https://{default}/blog` resolve to the following URLs in a production environment:

   ```text
   https://www.example.com/

   https://example.com/blog
   ```
   {:.no-copy}

-  `{all}` represents all the domain names configured for the project. For example, if you have a project with `example.com` and `example1.com` domains, the route templates `https://www.{all}/` and `https://{all}/blog` resolve to routes for all domains in the project:

   ```text
   https://www.example.com/

   https://www.example1.com/

   https://example.com/blog

   https://example1.com/blog
   ```
   {:.no-copy}

   The `{all}` placeholder is useful for projects configured for multiple domains. In a non-production branch `{all}` is replaced with the project ID and environment ID for each domain.

   If a project does not have any domains configured, which is common during development, the `{all}` placeholder behaves in the same way as the `{default}` placeholder.

{{site.data.var.ee}} also generates routes for every active Integration environment. For Integration environments, `{default}` is replaced with the following domain name:

```text
[branch]-[per-environment-random-string]-[project-id].[region].magentosite.cloud
```
{:.no-copy}

For example, the `refactorcss` branch for the `mswy7hzcuhcjw` project hosted in the `us` cluster has the following the domain:

```text
https://refactorcss-oy3m2pq-mswy7hzcuhcjw.us.magentosite.cloud/
```
  {:.no-copy}

{:.bs-callout-info}
If your Cloud project supports multiple stores, follow the route configuration instructions for [multiple websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html).

## Route protocols

All environments support both HTTP and HTTPS automatically.

-  If the configuration specifies only the HTTP route, HTTPS routes are created automatically, allowing the site to be served from both HTTP and HTTPS without requiring redirects. For example, if you have project with the default domain `example.com`, the record `http://{default}/` resolves to the following URLs:

   ```text
   http://example.com/

   https://example.com/
   ```
   {:.no-copy}

-  If the configuration specifies only the HTTPS route, then all HTTP requests redirect to HTTPS. For example, for the default domain `example.com`, the route `https://{default}/` resolves to URL `https://example.com/` and redirects `http://example.com/` to `https://example.com/`.

We recommend serving all pages over TLS.  For this configuration, you must configure redirects for all unencrypted request to the TLS equivalent using one of the following methods:

-  Change protocol to HTTPS in `routes.yaml`.

```yaml
"https://{default}/":
    type: upstream
    upstream: "mymagento:http"
"https://{all}/":
    type: upstream
    upstream: "mymagento:http"
```

-  For Staging and Production environments, we recommend enabling the [Force TLS on Fastly](https://support.magento.com/hc/en-us/articles/360006296953-Redirect-HTTP-to-HTTPS-for-all-pages-on-Cloud-Force-TLS-) option from the Magento Admin UI.  When you use this option, Fastly handles the redirection to HTTPS, so you do not have to update the `routes.yaml` configuration.

## Route options

Configure each route separately using the following properties:

Property         | Description
---------------- | -----------
`type: upstream` | Serves an application. Also, it has an `upstream` property that specifies the name of the application (as defined in `.magento.app.yaml`) followed by the `:http` endpoint.
`type: redirect` | Redirects to another route. It is followed by the `to` property, which is an HTTP redirection to another route identified by its template.
`cache:`         | Controls [caching for the route]({{ site.baseurl }}/cloud/project/project-routes-more-cache.html).
`redirects:`     | Controls [redirect rules]({{ site.baseurl }}/cloud/project/project-routes-more-redir.html).
`ssi:`           | Controls enabling of [Server Side Includes]({{ site.baseurl }}/cloud/project/project-routes-more-ssi.html).

## Simple routes

In the following examples, the route configuration routes the apex domain and the `www` subdomain to the `mymagento` application. This route does not redirect HTTPS requests.

**Example 1:**

```yaml
"http://{default}/":
    type: upstream
    upstream: "mymagento:http"

"http://www.{default}/":
    type: redirect
    to: "http://{default}/"
```

In the following example, the route configuration does not redirect URLs from the www domain to the apex domain. Instead, requests are served from both the www and apex domain.

**Example 2:**

```yaml
"http://{default}/":
    type: upstream
    upstream: "mymagento:http"

"http://www.{default}/":
    type: upstream
    upstream: "mymagento:http"
```

In this example, the server responds directly to a request of the form `http://example.com/hello`, issuing a _301 redirect_ for requests with the URL pattern `http://www.example.com/mypath`. These requests redirect to the apex domain, for example `http://example.com/mypath`.

## Wildcard routes

{{site.data.var.ece}} supports wildcard routes, so you can map multiple subdomains to the same application. This works for redirect and upstream routes. You prefix the route with an asterisk (\*). For example, the following routes to the same application:

-  `*.example.com`
-  `www.example.com`
-  `blog.example.com`
-  `us.example.com`

This functions as a catch-all domain in a live environment.

### Routing a non-mapped domain

You can route to a system that is not mapped to a domain using a dot (\.) to separate the subdomain. For example, a project with an `add-theme` branch routes to `http://add-theme-projectID.us.magento.com/`.

If you define a `http://www.{default}/` route, the route becomes `http://www.add-theme-projectID.us.magento.com/`.

You can put any subdomain before the dot and the route resolves. In this example, the route is defined as `http://*.{default}/`, so both of the following URLs work:

-  `http://foo.add-theme-projectID.us.magentosite.cloud/`
-  `http://bar.add-theme-projectID.us.magentosite.cloud/`

If you examine the routes of this sample application, you see:

```bash
echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 --decode | json_pp
```
{:.no-copy}

```terminal
https://*.add-theme-projectID.us.magentosite.cloud/
```
{:.no-copy}

See more information about [caching]({{ site.baseurl }}/cloud/project/project-routes-more-cache.html).

## Redirects and caching

As discussed in more detail in [Redirects]({{ site.baseurl }}/cloud/project/project-routes-more-redir.html), you can manage complex redirection rules, such as *partial redirects*, and specify rules for route-based [caching]({{ site.baseurl }}/cloud/project/project-routes-more-cache.html):

```yaml
https://www.{default}/:
    type: redirect
    to: https://{default}/
https://{default}/:
    cache:
        cookies: [""]
        default_ttl: 0
        enabled: true
        headers:
            - Accept
            - Accept-Language
    ssi:
        enabled: false
    type: upstream
    upstream: mymagento:http
```
