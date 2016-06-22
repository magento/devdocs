---
layout: default
group: cloud
subgroup: 01_welcome
title: Architecture
menu_title: Architecture
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/discover-arch.md
---

## Architecture
The container for your Magento application is a *project*. The project is your Magento store. Each project has one or more *environments*, which are Git branches that enable developers to work on new features or perform testing. Each environment is comprised of *services*, which are deployed inside highly restricted containers on a grid of servers.

Monitoring and fail-over happen automatically, behind the scenes.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento Enterprise Cloud Edition currently supports the following services: PHP, MySQL (MariaDB), Solr, Elasticsearch, Redis and RabbitMQ.</p>
</div>

## Services
Each service runs in its own secure container; containers are managed together in the project. 

Some services are built-in, such as the following:

*	HTTP router (handling incoming requests, but also caching and redirects)
*	PHP application server
*	Git 
*	Secure Shell (SSH)

You can even have multiple applications running in the same project. Building 
a microservice oriented architecture with Magento Enterprise Cloud Edition is
as easy as managing a monolithic application.

## Software versions used
Magento Enterprise Cloud Edition uses:

*	Operating system: Debian GNU/Linux 8 (jessie)
*	Web server: nginx 1.8

The preceding software is *not* upgradable but versions of [PHP]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html), [MySQL]({{page.baseurl}}cloud/project/project-conf-files_services-mysql.html), [Solr]({{page.baseurl}}cloud/project/project-conf-files_services-solr.html), [Redis]({{page.baseurl}}cloud/project/project-conf-files_services-redis.html), [RabbitMQ]({{page.baseurl}}cloud/project/project-conf-files_services-rabbit.html), and [Elasticsearch]({{page.baseurl}}cloud/project/project-conf-files_services-elastic.html) are configurable.

#### Related topics
*	[Workflow]({{page.baseurl}}cloud/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/discover-deploy.html)
*	[Tooling]({{page.baseurl}}cloud/discover-tools.html)
*	[Magento Enterprise Cloud Edition requirements]({{page.baseurl}}cloud/cloud-requirements.html)


