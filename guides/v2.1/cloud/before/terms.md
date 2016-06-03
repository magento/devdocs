---
layout: default
group: cloud
subgroup: 02_before
title: Common terms
menu_title: Common terms
menu_order: 2
menu_node: 
github_link21: cloud/before/terms.md
---

## Common terms
This topic provides definitions for common terms.
 
Project
:	A container for your Magento cloud deployment, representing your Magento store. A project contains a live deployment and one or more *environments* that enable developers to work on features, fix bugs, or test your site.

The project always has a `master` branch, which corresponds to your live site. In addition, you can create up to eight other active branches for development and testing. (Additional branches are available for additional cost.) Branches are also referred to as *environments*.

You configure the details of your project using configuration files.

Magento Enterprise Cloud Edition project configuration files
:	A set of `yaml` files located in the project root directory that define the project. These files are the only way to configure or reconfigure the project. In particular,

	*	[`<project root dir>/.magento.app.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_magento-app.html), which configures things like the project name, access roles, service relationships, web server configuration (such as docroot), disk space, mount points, and cron.
	*	[`<project root dir>/.magento/routes.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_routes.html), which specifies routes for your environments, URL redirects, server side includes, caching, and so on.
	*	[`<project root dir>/.magento/services.yaml`]({{ site.gdeurl21 }}cloud/project/project-conf-files_services.html), which defines available services and their disk space allocations.

Environment
:	A project's Git branch. You can use environments for development and testing, and use a standard Git workflow to synchronize (pull) and merge (push) to its parent. Merging an environment with the `master` enables you to deploy the changes to your live site.

<div class="bs-callout bs-callout-info" id="info">
  <p>Manual tasks are required for live deployment.</p>
</div>

Service
:	Third-party software for your Magento store. For example, PHP, MySQL, Elasticsearch, Solr, Redis, Varnish, and Fastly are all examples of services. You configure services using `services.yaml` and use them in your environments for development, testing, and in your live deployment.

