---
layout: default
group: cloud
subgroup: 010_welcome
title: Starter Architecture
menu_title: Starter Architecture
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/welcome/cloud-starter-architecture.md
---

{{site.data.var.<ece>}} Starter provides up to four active environments to develop, test, and launch your store. These environments are read-only, accepting deployed code changes from Git branches in your project. The flexibility of these environments supports any development and branching methodology you want to use. We provide examples to help you get started quickly to code, configure, and launch your store(s).

Helpful details about your environments:

* Environments run in a Linux container (LXC) on a grid of servers as a PAAS (Platform as a Service).
* You can have more than four code branches, but only `master` and three others can be active.
* Environments do not support all services. For example, Fastly is only available in `master` Production.
* All environments are read-only. You must make changes locally in your branch then push the code to the remote Git repository.

## How environments work {#env-intro}
In total, you have four active environments with one active Git branch associated to each environment. When you push code to an active Git branch, a build and deploy process runs on the remote branch and updates in a full environment. Each environment has a web server, database, and configured services to fully support your site and store(s).

The branches include:

* `master` cloned into your project when your {{site.data.var.<ece>}} account is created and project is provisioned
* Slots for three active Git branches with environments to create as you like

When you branch from the `master`, you take one of the active branches and environments. Every time you push code to the remote branch you made, it builds and deploys to the environment. You can view, manage, and access all of your environments and branches through the {{site.data.var.<ece>}} Project web interface. This includes your Production environment with the `master` branch. This interface provides URL and SSH access to the environment and configurations for environment variables, settings, and routes.

The following table details the differences:

<table>
    <tbody>

    <tr>
        <td class="blank"></td>
        <th>Development</th>
        <th>Production</th>
    </tr>
    <tr><td>Managed by a UI</td>
    <td>Yes</td>
    <td>Yes</td>
    </tr>
    <tr><td>Uses <code>.yaml</code> files for configuration</td>
    <td>Yes</td>
    <td>Yes</td>
    </tr>
    <tr><td>Multiple environments</td>
    <td>Yes, 3</td>
    <td>No (master only)</td>
    </tr>
    <tr><td>Runs on dedicated hardware</td>
    <td>No, PaaS</td>
    <td>No, PaaS</td>
    </tr>

</tbody>
</table>

## Development environment {#cloud-arch-int}
You have three active environments and Git branches available, not counting the `master` Git branch and environment. This environment is a PAAS (Platform as a Service) providing a limited number of environments created and available for each active Git branch you create. When you push and merge code to the remote active Git branch, the code is built and deployed into an environment with a web server, database, and configured services to fully test your site.

To begin developing your store:

* Set up your local workspace
* Clone the `master` branch from the Project to your local
* Branch and develop in a new Git branch on your local workspace
* Push code to the remote Git branch to build and deploy to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{page.baseurl}}cloud/live/stage-prod-live.html).

## Staging environment {#cloud-arch-stage}
The Staging environment provides a near-Production environment to test your site. This environment includes all services used in Production including Fastly, New Relic, Blackfire, and search. All code in Staging is read-only, requiring deploys of Git repositories. This environment shares the same dedicated server with Production.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into Staging.

## Production environment {#production}
The Production environment is also a PaaS environment dedicated to the `master` branch of your project code. Basically, when you merge code to the `master` branch, you are building and deploying directly to your live public-facing Magento single and multisite storefronts. This environment includes a database, web server, and all services available including Fastly, New Relic, and Blackfire.

We walk you through [deploying to Production]({{page.baseurl}}cloud/live/stage-prod-live.html) and [Go Live]({{page.baseurl}}cloud/live/live.html) requirements and processes.

We highly recommend fully testing in a testing environment and Git branch prior to pushing to Production.

### Production technology stack
The Production environment includes higher allocations for memory, size, and processing than the other PaaS environments in your project. This environment includes the following technologies:

* Fastly for http caching and CDN
* Nginx web server speaking to PHP-FPM, one instance with multiple workers
* GlusterFS file server for managing all static file deployments and syncs with four directoris mounted: `var`, `pub/media`, `pub/static`, and `app/etc`
* Redis server, one per VM with only one active and the other two as replicas
* Elasticsearch
* MariaDB MySQL database

## Projects {#cloud-arch-projects}
The container for your Magento application is a *project*. The project is your Magento store code, extensions, and integrations in a Master Git branch. Each project supports up to four active environments with an associated active Git branch. Consider each of the environments your development environment, allowing you to develop and test different branches simultaneously. Each environment is comprised of *services*, which are deployed inside highly restricted containers on a grid of servers.

When the project is deployed into Production, monitoring and failover happen automatically behind the scenes.

## Services {#cloud-arch-services}
{{site.data.var.<ece>}} currently supports the following services: PHP, MySQL (MariaDB), Solr (Magento 2.0.x), Elasticsearch (Magento 2.1.x and later), Redis, and RabbitMQ.

Each service runs in its own secure container. containers are managed together in the project. Some services are built-in, such as the following:

*	HTTP router (handling incoming requests, but also caching and redirects)
*	PHP application server
*	Git
*	Secure Shell (SSH)

You can even have multiple applications running in the same project. Building a microservice oriented architecture with {{site.data.var.<ee>}} is as easy as managing a monolithic application.

## Software versions {#cloud-arch-software}
{{site.data.var.<ee>}} uses:

*	Operating system: Debian GNU/Linux 8 (jessie)
*	Web server: {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} 1.8

This software is *not* upgradable but versions for the following software is configurable: [PHP]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html), [MySQL]({{page.baseurl}}cloud/project/project-conf-files_services-mysql.html), [Solr]({{page.baseurl}}cloud/project/project-conf-files_services-solr.html), [Redis]({{page.baseurl}}cloud/project/project-conf-files_services-redis.html), [RabbitMQ]({{page.baseurl}}cloud/project/project-conf-files_services-rabbit.html), and [Elasticsearch]({{page.baseurl}}cloud/project/project-conf-files_services-elastic.html).

#### Related topics
*	[Develop and deploy workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
*	[Magento Commerce requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
