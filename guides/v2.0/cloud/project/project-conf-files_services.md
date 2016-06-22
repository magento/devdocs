---
layout: default
group: cloud
subgroup: 07_project
title: services.yaml
menu_title: services.yaml
menu_order: 30
menu_node: 
level3_menu_node: level3child
level3_subgroup: services
version: 2.0
github_link: cloud/project/project-conf-files_services.md
---

#### Contents
*	[`services.yaml` overview](#cloud-yaml-services-over)
*	[Defaults](#cloud-yaml-services-default)
*	[`name`](#cloud-yaml-services-name) 
*	[`type`](#cloud-yaml-services-type)
*	[`disk`](#cloud-yaml-services-disk)  

## `services.yaml` overview {#cloud-yaml-services-over}
Magento Enterprise Cloud Edition provides [*services*](#cloud-yaml-services-type) such as MySQL, PHP, Redis, Solr, and so on. You don't need to subscribe to external service providers.

This file is located at `.magento/services.yaml` in your project.

[Sample `services.yaml` file](https://github.com/magento/magento-cloud/blob/master/.magento/services.yaml){:target="_blank"}

The following sections discuss properties in `services.yaml`.

## Defaults {#cloud-yaml-services-default}
If you do not provide a `services.yaml` file, the following defaults are used:

	mysql:
	   type: mysql:10.0
	   disk: 2048

	redis:
	   type: redis:3.0

	solr:
	   type: solr:4.10
	   disk: 1024

## `name` {#cloud-yaml-services-name}
`name` identifies the service in the project. `name` can consist only of lower case alphanumeric characters; that is, `a`&ndash;`z` and `0`&ndash;`9`.

Usually you will see in our examples that we simply call the mysql: `mysql`. Note that you can have multiple instances of each service.

<div class="bs-callout bs-callout-warning">
    <p>Because we support multiple services of the same type (for example, multiple databases), changing the name of a service in <code>services.yaml</code> causes the existing service to be <em>permanently removed</em> before creating a new service with the new name you specify. <em>Renaming a service results in the loss of all of that service's data</em>. We strongly recommend you <a href="{{page.baseurl}}cloud/admin/admin-snap.html">snapshot your environment</a> before you change the name of an existing service.</p>
</div>

### `type` {#cloud-yaml-services-type}
The `type` of your service in the format `type:version`

We support and deploy the following services for you:

*	`mysql` version `10.0`
*	`redis` versions `2.8` and `3.0`
*	`solr` version `4.0`
*	`elasticsearch` version `1.7`
*	`rabbitmq` version `3.5`

### `disk` {#cloud-yaml-services-disk}

`disk` specifies the size of the persistent disk storage (in MB) allocated to the service. 

For example, the current default storage amount per project is 5GB (meaning 5120MB), which you can distribute between your application and each of its services. (See [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html).)

## Using the services
For services to be available to an application in your project, you must specify [*relationships*]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html#cloud-yaml-platform-rel) between applications and services in `.magento.app.yaml`.

#### Related topics
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[Set up the mysql service]({{page.baseurl}}cloud/project/project-conf-files_services-mysql.html)
*	[Set up the redis service]({{page.baseurl}}cloud/project/project-conf-files_services-redis.html)
*	[Set up the solr service]({{page.baseurl}}cloud/project/project-conf-files_services-solr.html)
*	[Set up the elasticsearch service]({{page.baseurl}}cloud/project/project-conf-files_services-elastic.html)
*	[Set up the rabbitmq service]({{page.baseurl}}cloud/project/project-conf-files_services-rabbit.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
