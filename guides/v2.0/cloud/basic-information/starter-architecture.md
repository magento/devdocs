---
group: cloud
subgroup: 010_welcome
title: Starter architecture
menu_title: Starter architecture
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/basic-information/starter-architecture.md
functional_areas:
  - Cloud
---

All of your code is contained in the {{site.data.var.ece}} Starter project. The _project_ is your Magento store code, extensions, and integrations in a Master Git branch. Each project supports up to 4 total environments including three active Integration *environments* and a Production environment using the `master` Git branch.

All environments are in PaaS (Platform-as-a-Service) containers. These containers are deployed inside highly restricted containers on a grid of servers. These environments are read-only, accepting deployed code changes from Git branches pushed from your local workspace.

You can use any development and branching methodology you like. We strongly recommend creating a Staging environment and branch as one of the Integration environments.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The following architecture information uses an architecture including Production, Staging, and Integration environments.
</div>

![High-level view of Starter project]({{ site.baseurl }}/common/images/cloud_arch-starter.png)

## Production with a master branch {#cloud-arch-prod}
The Production environment is your live store(s) and site(s). The environment includes your `master` Git branch, a web server, database, and configured services to fully test your site.

The Production environment runs your public-facing Magento single and multisite storefronts. This system is read-only, requiring deployment across the architecture from Integration to Staging and finally Production.

We walk you through [deploying to Production]({{ page.baseurl }}/cloud/live/stage-prod-live.html) and [Go Live]({{ page.baseurl }}/cloud/live/live.html) requirements and processes.

We highly recommend fully testing in your Staging environment and branch prior to pushing to Production.

## Staging branch and environment {#cloud-arch-stage}
We recommend creating a branch called `staging` from `master`. Use this Staging environment and Git branch as your pre-production environment to test code, modules and extensions, payment gateways, shipping, product data, and much more. This environment will receive all services to match Production including Fastly, New Relic, Blackfire, and search.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into Staging.

We walk you through [deploying to Staging]({{ page.baseurl }}/cloud/live/stage-prod-live.html) and [testing your store(s)]({{ page.baseurl }}/cloud/live/stage-prod-test.html) requirements and processes.

We highly recommend fully testing every merchant and customer interaction in Staging prior to pushing to Production.

## Integration environment {#cloud-arch-int}
Developers use the Integration environment to develop, deploy, and test the Magento application, custom code, extensions, and services. If you created a Staging environment, you have up to two active environments on a grid for two active Git branches. Each Integration environment matches the name of the branch and includes a web server, database, and configured services to fully test your site.

You can have an unlimited number of inactive Git branches to store code. To access, view, and test inactive branches, you must activate them. This environment does not support all services. For example, Fastly is not accessible in Integration.

The process for developing in Integration requires the following process:

* Branch and develop off of `staging`
* Develop all work on your local workspace in these branches
* Push code to Git to build and deploy on an Integration environment for testing
* As work is completed, merge to `staging`

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{ page.baseurl }}/cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

## Production and Staging technology stack {#technology}
The Production and Staging environments include the following technologies. You can modify and configure these technologies through the [.magento.app.yaml file]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html).

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

* [PHP]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)
* [MySQL]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
* [Solr](http://devdocs.magento.com/guides/v2.0/cloud/project/project-conf-files_services-solr.html)
* [Redis]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html)
* [RabbitMQ]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)
* [Elasticsearch]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html)

For Staging and Production, you will use Fastly for CDN and caching. We recommend installing Fastly module 1.2.33 or later. For details, see [Fastly in Cloud]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html).

For detailed information on supported versions and extensions, see the following information. These files allow you to configure software versions you want to use in your implementation.

*	[`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)

### Backup and disaster recovery {#backup}
You can create a snapshot of your database and file system using the Project Web Interface or the CLI. The snapshot includes your deployed code, installed software and services, and data. See [Snapshots and backup management]({{ page.baseurl }}/cloud/project/project-webint-snap.html).

## Prepare for development {#develop}
To branch and develop your Magento store:

* Set up your local environment
* Clone the `master` branch from the Project to your local
* Create a `staging` branch from `master`
* Create branches for development from `staging`
* Push code to Git that builds and deploys to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{ page.baseurl }}/cloud/before/before-workspace.html), working with Git branches, [deploying code]({{ page.baseurl }}/cloud/live/stage-prod-live.html), and [going live]({{ page.baseurl }}/cloud/live/live.html).
