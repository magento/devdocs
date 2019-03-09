---
group: cloud-guide
title: Configure routes
functional_areas:
  - Cloud
  - Setup
---

{{site.data.var.ee}} processes an incoming URL using a *route*. The `routes.yaml` file—located at `.magento/routes.yaml` in your project—defines routes for the Integration environment. The deploy script uses values defined in the configuration files in the `.magento` directory and deletes the directory after deployment. Your local workspace is not affected.

{% include cloud/note-pro-using-yaml-support.md %}

The following is the default `routes.yaml` file:

```yaml
"http://{default}/":
    type: upstream
    upstream: "mymagento:php"
```

If you do not create a custom `routes.yaml` file, the automated deployment uses the default file.

#### To list the configured routes:

```bash
magento-cloud environment:routes

+-------------------+----------+---------------+
| Route             | Type     | To            |
+-------------------+----------+---------------+
| http://{default}/ | upstream | mymagento:php |
+-------------------+----------+---------------+
```

## Route templates

The `routes.yaml` file is a list of templated routes and their configurations. A route template looks similar to this: `http://www.{default}/` or `https://{default}/blog`, where `{default}` is the qualified domain name configured for the project. For example, the routes for `example.com` domain resolve to the following:

-  `http://www.example.com/`
-  `https://example.com/blog`

{{site.data.var.ee}} also generates URLs for every active environment, so you can test that system. In a test system, `{default}` is replaced with the following:

```
[branch]-[project-id].[region].magentosite.cloud
```

For example, if the project ID is `mswy7hzcuhcjw` on a branch called `refactorcss` hosted in the `us` cluster, the domains are: 

-  `http://www-refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/`
-  `https://refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/blog`

<!-- {{site.data.var.ece}} also supports [multiple applications]({{ page.baseurl }}/cloud/project/project-conf-multi.html) per project. Each project has a single `routes.yaml` file that defines which request is routed to which application. -->

## Route options

Configure each route separately using the following properties:

Property         | Description
---------------- | -----------
`type: upstream` | Serves an application. Also, it has an `upstream` property that specifies the name of the application (as defined in `.magento.app.yaml`) followed by the `:http` endpoint.
`type: redirect` | Redirects to another route. It is followed by the `to` property, which is an HTTP redirection to another route identified by its template.
`cache:`         | Controls [caching for the route]({{ page.baseurl }}/cloud/project/project-routes-more-cache.html).
`redirects:`     | Controls [redirect rules]({{ page.baseurl }}/cloud/project/project-routes-more-redir.html).
`ssi:`           | Controls enabling of [Server Side Includes]({{ page.baseurl }}/cloud/project/project-routes-more-ssi.html).
{:style="table-layout:auto;"}

## Simple routes

The following sample routes the apex domain and the `www` subdomain to the `frontend`application. This route does not redirect HTTPS:

```yaml
"http://{default}/":
    type: upstream
    upstream: "frontend:http"

"http://www.{default}/":
    type: redirect
    to: "http://{default}/"
```

The following sample route does not redirect from the `www` to the apex domain; instead, it serves from both:

```yaml
"http://{default}/":
    type: upstream
    upstream: "frontend:http"

"http://www.{default}/":
    type: upstream
    upstream: "frontend:http"
```

In the first sample, the server responds directly to a request of the form `http://example.com/hello`, but it issues a _301 redirect_ for `http://www.example.com/mypath` (to `http://example.com/mypath`).

## Wildcard routes
{{site.data.var.ece}} supports wildcard routes, so you can map multiple subdomains to the same application. This works for {% glossarytooltip 510de766-1ebd-4546-bf38-c618c9c945d2 %}redirect{% endglossarytooltip %} and upstream routes. You prefix the route with an asterisk (\*). For example, the following routes to the same application:

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

```terminal
https://*.add-theme-projectID.us.magentosite.cloud/
```

{: .bs-callout .bs-callout-info}
Some projects provisioned before December 8, 2017, use the triple dash (\-\-\-) as a separator for the subdomain.

See more information about [caching]({{ page.baseurl }}/cloud/project/project-routes-more-cache.html).

## Redirects

As discussed in more detail in [Redirects]({{ page.baseurl }}/cloud/project/project-routes-more-redir.html), you can manage complex redirection rules, such as *partial redirects*:

```yaml
http://www.{default}/:
    to: https://{default}/
    type: redirect
http://{default}/:
    to: https://{default}/
    type: redirect
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
    upstream: php:http
```
