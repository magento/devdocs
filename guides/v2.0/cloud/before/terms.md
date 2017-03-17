---
layout: default
group: cloud
subgroup: 05_before
title: Common terms
menu_title: Common terms
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/before/terms.md
---

This topic provides definitions for common terms.
 
Project
:	A container for your Magento cloud deployment, representing your Magento store. A project contains a live deployment and one or more *environments* that enable developers to work on features, fix bugs, or test your site.

The project always has a `master` branch, which corresponds to your live site. 

You configure the details of your project using configuration files.

Magento Enterprise Cloud Edition project configuration files
:	A set of `yaml` files located in the project root directory that define the project. These files are the only way to configure or reconfigure the project. In particular,

	*	[`<project root dir>/.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html), which configures things like the project name, access roles, service relationships, web server configuration (such as docroot), disk space, mount points, and cron.
	*	[`<project root dir>/.magento/routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html), which specifies routes for your environments, URL redirects, server side includes, caching, and so on.
	*	[`<project root dir>/.magento/services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html), which defines available services and their disk space allocations.

Environment
:	A project's Git branch. You can use environments for development and testing, and use a standard Git workflow to synchronize (pull) and merge (push) to its parent. Merging an environment with the `master` enables you to deploy the changes to your staging and production systems.

In addition, you can create up to seven other active branches for development and testing. An active environment is a branch in the Cloud Git repo you're using for development and integration. (Additional environments are available for additional cost.) 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
You can have an unlimited number of *inactive* environments. An inactive environment is a Git branch you either deleted from the Cloud Git repository or one that is not associated with the Cloud Git repository at all. For example, you might already have several Git branches with Magento code that you don't need to use for Magento Enterprise Cloud Edition. As long as you don't add those environments to the Cloud Git repo, they don't count against your total of eight active environments.
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p><a href="{{ page.baseurl }}cloud/live/stage-prod-over.html">Manual tasks</a> are required for live deployment.</p>
</div>

Service
:	Third-party software for your Magento store. For example, PHP, MySQL, Elasticsearch, Solr, Redis, Varnish, and Fastly are all examples of services. You configure services using `services.yaml` and use them in your environments for development, testing, and in your live deployment.

