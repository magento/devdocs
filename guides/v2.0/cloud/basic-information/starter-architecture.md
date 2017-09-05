---
layout: default
group: cloud
subgroup: 010_welcome
title: Starter architecture
menu_title: Starter architecture
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/basic-information/starter-architecture.md
---

All of your code is contained in the {{site.data.var.ece}} Starter project. The _project_ is your Magento store code, extensions, and integrations in a Master Git branch. Each project supports up to four active *environments* including `master` with an associated active Git branch in PAAS (Platform as a Service) containers. These containers are deployed inside highly restricted containers on a grid of servers.

These environments are read-only, accepting deployed code changes from Git branches pushed from your local workspace.

These four environments include Production, Staging, and two remaining. Consider each of the remaining environments for development to develop and test different branches simultaneously. You can use any development and branching methodology you like.

## How the environments work {#how-work}
You have up to four full, active environments that generate in containers for your project. When we first provision your project, we create a `master` Git branch with a full environment. You automatically get a `master` branch and environment. This is your live site.

You have up to three active Git branches you can create from `master`. Each Git branch has an associated environment with a web server, database, and configured services. For these three remaining active environments, we recommend creating a branch from `master` called `staging`. Create your remaining two active Git branches from `staging` for development.

When you deactivate (or delete) a Git branch, you open a slot for an active Git branch. When activated, a new environment container generates for the code.

![High-level view of Starter project]({{ site.baseurl }}common/images/cloud_arch-starter.png)

To branch and develop your Magento store:

* Set up your local environment
* Clone the `master` branch from the Project to your local
* Branch and develop in a new Git branch on your local workspace
* Push code to Git that builds and deploys to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{page.baseurl}}cloud/live/stage-prod-live.html).

All code in these environments is read-only, requiring deploys of Git repositories. To make changes, install extensions, and make significant changes, you need to make them on your local and push code to the remote Git branch. The changes are pushed to those environments and finally Production in the `master` branch.

## Production with a master branch {#cloud-arch-int}
The Production environment is your live store(s) and site(s). The environment includes your `master` Git branch, a web server, database, and configured services to fully test your site.

The Production environment runs your public-facing Magento single and multisite storefronts. This environment include triple-redundant High Availability nodes for continuous access and failover protection for your customers. This system is read-only, requiring deployment across the architecture from Integration to Staging and finally Production.

We walk you through [deploying to Production]({{page.baseurl}}cloud/live/stage-prod-live.html) and [Go Live]({{page.baseurl}}cloud/live/live.html) requirements and processes.

We highly recommend fully testing in your Staging environment and branch prior to pushing to Production.

## Staging branch and environment {#cloud-arch-stage}
We recommend creating a branch called `staging` from `master`. Use this Staging environment and Git branch as your pre-production environment to test code, modules and extensions, payment gateways, shipping, product data, and much more. This environment includes all services used in Production and `master` including Fastly, New Relic, Blackfire, and search.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into Staging.

We walk you through [deploying to Staging]({{page.baseurl}}cloud/live/stage-prod-live.html) and [testing your store(s)]({{page.baseurl}}cloud/live/stage-prod-test.html) requirements and processes.

We highly recommend fully testing every merchant and customer interaction in Staging prior to pushing to Production.

## Development branches and environments {#dev}
From `staging`, create branches for your development code. Add extensions, work in agile sprints, resolve issues all through these branches. When completed and tested, you can merge up to `staging`, test in Staging, then merge to `master` to go live.

We do not recommend branching these environments directly from `master` if you have a `staging` branch. Having a Staging branch and environment allows you to fully test and verify every code change before pushing to Production.

## Production and Staging technology stack {#technology}
The Production and Staging environments include the following technologies. You can modify and configure these technologies through the [.magento.app.yaml file]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html).

* Fastly for http caching and CDN
* Nginx web server speaking to PHP-FPM, one instance with multiple workers
* Redis server
* Elasticsearch for searching for {{site.data.var.ece}} 2.1 and later
* Solr search is supported for {{site.data.var.ece}} 2.0

### Services {#cloud-arch-services}
{{site.data.var.ece}} currently supports the following services: PHP, MySQL (MariaDB), Solr (Magento 2.0.x), Elasticsearch (Magento 2.1.x and later), Redis, and RabbitMQ.

Each service runs in its own secure container. containers are managed together in the project. Some services are built-in, such as the following:

*	HTTP router (handling incoming requests, but also caching and redirects)
*	PHP application server
*	Git
*	Secure Shell (SSH)

You can even have multiple applications running in the same project. Building a microservice oriented architecture with Magento Commerce is as easy as managing a monolithic application.

### Software versions {#cloud-arch-software}
{{site.data.var.ece}} uses:

*	Operating system: Debian GNU/Linux 8 (jessie)
*	Web server: {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} 1.8

This software is *not* upgradable but versions for the following software is configurable:

* [PHP]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
* [MySQL]({{page.baseurl}}cloud/project/project-conf-files_services-mysql.html)
* [Solr]({{page.baseurl}}cloud/project/project-conf-files_services-solr.html)
* [Redis]({{page.baseurl}}cloud/project/project-conf-files_services-redis.html)
* [RabbitMQ]({{page.baseurl}}cloud/project/project-conf-files_services-rabbit.html)
* [Elasticsearch]({{page.baseurl}}cloud/project/project-conf-files_services-elastic.html)

For Staging and Production, you will use Fastly for CDN and caching. We recommend installing Fastly module 1.2.27 or later. For details, see [Fastly in Cloud]({{page.baseurl}}cloud/basic-information/cloud-fastly.html).

### Backup and disaster recovery {#backup}
We automatically back up your Production environment every six hours. This snapshot and backup includes your deployed code, installed software and services, and data. You can also perform [snapshots]({{page.baseurl}}cloud/project/project-webint-snap.html) and database dumps with CLI commands.

## Prepare for development {#develop}
To branch and develop your Magento store:

* Set up your local environment
* Clone the `master` branch from the Project to your local
* Branch and develop in a new Git branch on your local workspace
* Push code to Git that builds and deploys to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{page.baseurl}}cloud/live/stage-prod-live.html).

We walk you through the entire process from [deployment]({{page.baseurl}}cloud/live/stage-prod-live.html) to [going live]({{page.baseurl}}cloud/live/live.html) requirements and processes.


#### Related topics
*	[Starter Develop and Deploy Workflow]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
*	[{{site.data.var.ece}} requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
