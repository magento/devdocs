---
layout: default
group: cloud
subgroup: 07_project
title: routes.yaml
menu_title: routes.yaml
menu_order: 16
menu_node: 
level3_menu_node: level3child
level3_subgroup: routes
version: 2.1
github_link21: cloud/project/project-conf-files_routes.md
---

#### Contents
*	[`routes.yaml` overview](#cloud-yaml-routes-over)
*	[Defaults](#cloud-yaml-routes-default)
*	[Route templates](#cloud-yaml-routes-temp) 
*	[Route options](#cloud-yaml-routes-opts)
*	[Simple routes](#cloud-yaml-routes-sample-simple) 
*	[Wildcard routes](#cloud-yaml-routes-sample-wild) 
*	[Redirects](#cloud-yaml-routes-sample-redirects) 
*	[List routes](#cloud-yaml-routes-setup) 

## `routes.yaml` overview {#cloud-yaml-routes-over}
A *route* describes how an incoming URL is processed by
Magento Enterprise Cloud Edition. 

`routes.yaml` defines routes for development, testing, staging, and production
systems. This one configuration file handles routes for all systems.

This file is located at `.magento/routes.yaml` in your project.

[Sample `routes.yaml`](https://github.com/magento/magento-cloud/blob/master/.magento/routes.yaml){:target="_blank"}

## Defaults {#cloud-yaml-routes-default}
If you do not have a `routes.yaml` file, the following default is used:

	"http://{default}/":
	    type: upstream
	    upstream: "php:php"
	    cache:
	        enabled: true
	    ssi:
	        enabled: false

	"http://www.{default}/":
	    type: redirect
	    to: "http://{default}/"

## Route templates {#cloud-yaml-routes-temp}
`routes.yaml` is a list of templated routes and their 
configurations. A route  template can look like this: `http://www.{default}/` or 
`https://{default}/blog`, where `{default}` is the fully qualified domain 
name configured for the project. 

{% collapsible Click to show/hide content %}

If the domain is `example.com`, these 
routes resolve: `http://www.example.com/` and 
`https://example.com/blog` for the live environment (that is, the Master). 

Magento Enterprise Cloud Edition also generates URLs for every active environment that enable you 
to test that system. In a test system, `{default}` is replaced with 
`[branch]-[project-id].[region].magentosite.cloud`.

For example, if the project ID is `mswy7hzcuhcjw` on a branch called `refactorcss` hosted in the `na` cluster, the domains are: `http://www-refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/` and 
`https://refactorcss-mswy7hzcuhcjw.us.magentosite.cloud/blog` 

<div class="bs-callout bs-callout-info" id="info">
  <p>The <code>na</code> region is shown as an example; it's not currently available. Magento plans support for <code>na</code> first, then <code>au</code> and <code>eu</code> at a later date.</p>
</div>

<!-- Magento Enterprise Cloud Edition also supports [multiple applications]({{ site.gdeurl21 }}cloud/project/project-conf-multi.html) per project. Each project has a single `routes.yaml` file that defines which request is routed to which application. -->

{% endcollapsible %}

## Route options {#cloud-yaml-routes-opts} 
Each route can be configured separately with the following properties:

* `type` can be:
  * `upstream` serves an application
    * It also has an `upstream` property that specifies the name of 
    the application (as defined in `.magento.app.yaml`) followed by `:php` (see
     the following examples.
  * `redirect` redirects to another route
    * It is followed by `to` property, which is an HTTP redirection to 
    another route that will be identified by its template (see the following examples.
* `cache` controls [caching for the route]({{ site.gdeurl21 }}cloud/project/project-routes-more-cache.html).
* `ssi` controls whether [Server Side Includes](http://httpd.apache.org/docs/current/howto/ssi.html){:target="_blank"} are enabled. 
* `redirects` controls [redirect rules]({{ site.gdeurl21 }}cloud/project/project-routes-more-redir.html) associated with the route.

## Simple routes {#cloud-yaml-routes-sample-simple}

{% collapsible Click to show/hide content %}

Following is a sample `routes.yaml` file:

	"http://{default}/":
	  type: upstream
	  upstream: "frontend:php"
	"http://www.{default}/":
	  type: redirect
	  to: "http://{default}/"

The preceding sample routes both the naked domain and the `www` subdomain to an
application named `frontend`. This route does not redirect HTTPS.

The following route does not redirect from the `www` to the naked domain; instead,
it serves from both:

	"http://{default}/":
	    type: upstream
	    upstream: "php:php"

	"http://www.{default}/":
	    type: upstream
	    upstream: "php:php"

The difference between the two preceding examples is that for the first one the
server responds directly to a request of the form `http://example.com/hello`, 
but it will issue a 301 redirect for `http://www.example.com/mypath` (to 
`http://example.com/mypath`).

{% endcollapsible %}

## Wildcard routes {#cloud-yaml-routes-sample-wild}
Magento Enterprise Cloud Edition supports wildcard routes, so you can map multiple subdomains to the
same application. This works both for redirect and upstream routes. You can
simply prefix the route with a star (`*`), for example `*.example.com`, and
`www.example.com`, `blog.example.com`, and `us.example.com` all get routed to the
same application.

{% collapsible Click to show/hide content %}

For your live environment, this functions as a catch-all domain.

### Routing a non-mapped domain
You can also route to a system that is not mapped to a domain (basically anything other than
a live master). 

Suppose your project on the EU cluster has an ID `vmwklxcpbi6zq` and
a branch named `add-theme`. Magento Enterprise Cloud Edition automatically 
routes the URL `http://add-theme-vmwklxcpbi6zq.na.magento.com/` to this
environment. If, for example, you also defined a `http://www.{default}/` route,
you could visit `http://www---add-theme-vmwklxcpbi6zq.na.magento.com/` to see
 the same environment. 

<div class="bs-callout bs-callout-info" id="info">
  <p>The triple dash (<code>---</code>) is used as a separator for the subdomain.
> This is what replaces the dot (<code>.</code>).</p>
</div>

You can put anything before the triple dashes and the route resolves.
In this example, the route is defined as `http://*.{default}/` route, so both
`http://foo---add-theme-vmwklxcpbi6zq.na.magentosite.cloud/` and 
`http://bar---add-theme-vmwklxcpbi6zq.na.magentosite.cloud/` would work just fine.

If you examine the routes of your application (for example by running
`echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 --decode | json_pp` in an SSH session on your environment),
you will see a route such as `https://*---add-theme-vmwklxcpbi6zq.na.magentosite.cloud/`

[More information about caching]({{ site.gdeurl21 }}cloud/project/project-routes-more-cache.html).

{% endcollapsible %}

## Redirects {#cloud-yaml-routes-sample-redirects}
As discussed in more detail in [redirects]({{ site.gdeurl21 }}cloud/project/project-routes-more-redir.html), you can set up complex redirection rules including *partial redirects* like the following:

	http://www.{default}/:
	  to: https://{default}/
  	type: redirect
	http://{default}/:
	  to: https://{default}/
	  type: redirect
	https://{default}/:
	  cache:
	    cookies:
	    - '*'
	    default_ttl: 0
	    enabled: true
    	headers:
	    - Accept
	    - Accept-Language
	  ssi:
	    enabled: false
	  type: upstream
	  upstream: php:php

## List routes {#cloud-yaml-routes-setup}
You can get a list of the configured routes for an environment by using the following command:

	magento-cloud environment:routes

#### Related topics
*	[Get started with a project]({{ site.gdeurl21 }}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_magento-app.html)
*	[Caching]({{ site.gdeurl21 }}cloud/project/project-routes-more-cache.html)
*	[Redirects]({{ site.gdeurl21 }}cloud/project/project-routes-more-redir.html)
*	[Server side includes]({{ site.gdeurl21 }}cloud/project/project-routes-more-ssi.html)
*	[`services.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_services.html)
