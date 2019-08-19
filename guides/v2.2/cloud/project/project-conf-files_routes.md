---
group: cloud-guide
title: Configure routes
functional_areas:
  - Cloud
  - Setup
---

The `routes.yaml` file in the `.magento/routes.yaml` directory defines routes for your {{ site.data.var.ece }} Integration, Staging, and Production environments. Routes determine how Magento processes incoming HTTP requests.

{% include cloud/note-pro-missing-self-service-options.md %}

The default `routes.yaml` file contains the following code:

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
{: .no-copy}

## Route templates

The `routes.yaml` file is a list of templated routes and their configurations. You can use the following placeholders in route templates:

- `{default}` represents the qualified domain name configured as the default for the project. For example, if you have a project with the default domain `example.com`, the route templates `http://www.{default}/` and `https://{default}/blog` resolve to the following URLs in a production environment:

  ```text
  http://www.example.com/

  https://www.example.com/blog
  ```
  {: .no-copy}

  In a non-production branch, the project ID and environment ID replace the `{default}` placeholder when the project is deployed.

- `{all}` represents all the domain names configured for the project. For example, if you have a project with `example.com` and `example1.com` domains, the route templates `http://www.{all}/` and `https://{all}/blog` resolve to routes for all domains in the project:

  ```text
  http://www.example.com/

  http://www.example.com/blog

  https://www.example1.com/

  https://www.example1.com/blog
  ```
  {: .no-copy}

  The `{all}` placeholder is useful for projects configured for multiple domains. In a non-production branch `{all}` is replaced with the project ID and environment ID for each domain.

  If a project does not have any domains configured, which is common during development, the `{all}` placeholder behaves in the same way as the `{default}` placeholder.

{{site.data.var.ee}} also generates routes for every active Integration environment. For Integration environments, `{default}` is replaced with the following domain name:

```text
[branch]-[project-id].[region].magentosite.cloud
```
{: .no-copy}

For example, the `refactorcss` branch for the `mswy7hzcuhcjw` project hosted in the `us` cluster has the following the domains:

```text
http://www-refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/

https://refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/blog
```
  {: .no-copy}

{:.bs-callout-info}
{{site.data.var.ece}} also supports [multiple applications]({{ page.baseurl }}/cloud/project/project-multi-sites.html) per project. Each project has a single `routes.yaml` file that defines which request is routed to which application.

## Route options

Configure each route separately using the following properties:

Property         | Description
---------------- | -----------
`type: upstream` | Serves an application. Also, it has an `upstream` property that specifies the name of the application (as defined in `.magento.app.yaml`) followed by the `:http` endpoint.
`type: redirect` | Redirects to another route. It is followed by the `to` property, which is an HTTP redirection to another route identified by its template.
`cache:`         | Controls [caching for the route]({{ page.baseurl }}/cloud/project/project-routes-more-cache.html).
`redirects:`     | Controls [redirect rules]({{ page.baseurl }}/cloud/project/project-routes-more-redir.html).
`ssi:`           | Controls enabling of [Server Side Includes]({{ page.baseurl }}/cloud/project/project-routes-more-ssi.html).

## Simple routes

The following sample routes the apex domain and the `www` subdomain to the `frontend`application. This route does not redirect HTTPS requests:

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
{: .no-copy}

```terminal
https://*.add-theme-projectID.us.magentosite.cloud/
```
{: .no-copy}

{: .bs-callout-info }
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
