---
layout: default
group: cloud
subgroup: 010_welcome
title: Cloud Architecture
menu_title: Cloud Architecture
menu_order: 20
menu_node:
version: 2.0
github_link: cloud/reference/discover-arch.md
---

{{site.data.var.<ece>}} provides three environments to develop, test, and launch your store. These environments are read-only, accepting deployed code changes from Git branches in your project and supporting any development and branching methodology.

## Integration environment {#cloud-arch-int}
Developers use the Integration environment to develop, deploy, and test the Magento application, custom code, extensions, and services. This environment is a PAAS (Platform as a Service) providing up to eight active environments for eight active Git branches. Each branch deploys to an environment with a web server, database, and configured services to fully test your site.

The Integration environments run in a Linux container (LXC) on a grid of servers as a PAAS (Platform as a Service). You can have up to eight active *environments* (Git branches) at a time to development and test code. You can have more than eight branches, but not all will be active to access, view, and test in Integration. This environment does not support all services, for example, Fastly is not accessible in Integration. All environments are read-only.

The process for developing in Integration requires the following process:

* Clone the Master branch of Magento code from a Git repository
* Branch and develop in a new Git Git branch on your local workspace
* Push code to Git that builds and deploys to an Integration environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and deploying code.

## Staging environment {#cloud-arch-stage}
The Staging environment provides a near-Production environment to test your site. This environment includes all services used in Production including Fastly, New Relic, Blackfire, and search. All code in Staging is read-only, requiring deploys of Git repositories. This environment shares the same dedicated server with Production.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into Staging.

We highly recommend fully testing every merchant and customer interaction in Staging prior to pushing to Production.

## Production environment {#cloud-arch-prod}
The Production environment runs your public-facing Magento single and multisite storefronts. This environment include triple-redundant High Availability nodes for continuous access and failover protection for your customers. This system is read-only, requiring deployment across the architecture from Integration to Staging and finally Production.

Additional sections in this guide provide walk-throughs for deploying to Production and Go Live requirements and processes.

We highly recommend fully testing in Staging prior to pushing to Production.

### Advantage of redundant hardware
Rather than running a traditional active-passive master or master-slave setup, {{site.data.var.<ece>}} runs a triple-redundant multimaster where all three instances accept reads and writes. This architecture offers zero downtime when scaling, and also provides guaranteed transactional integrity.

Because of our unique triple-redundant hardware, we can provide you with a set of three gateway servers. Most external services enable you to {% glossarytooltip 34f8f61d-2b48-4628-be06-aaa6e32ddc1f %}whitelist{% endglossarytooltip %} multiple IPs, so having more than one fixed IP isn't usually a problem.

These three gateways map to the three servers in your Production cluster and retain permanent addresses. It is fully redundant and highly available at every level:

*	DNS
*	Content Delivery Network (CDN)
*	Elastic load balancer (ELB)
*	Three-server cluster comprising all Magento services, including the database and web server.

### Backup and disaster recovery
We automatically back up your production system every six hours. Each production system cluster is designed to withstand the loss of an entire server and all of the services running on it.

The coordinating agent that monitors your production system:

* Detects failures at the service level (for example, MySQL)
* Fully automaties and coordinates recovery where an automated recovery is possible

### Production technology stack
The Production environment has three VMs behind an Elastic Load Balancer managed by an HAProxy per VM. Each VM includes the following technologies:

* Fastly for http caching and CDN
* Nginx web server speaking to PHP-FPM, one instance with multiple workers
* GlusterFS file server for managing all static file deployments and syncs with four directoris mounted: `var`, `pub/media`, `pub/static`, and `app/etc`
* Redis server, one per VM with only one active and the other two as replicas
* Elasticsearch
* Galara database cluster with a MariaDB MySQL database per node with an auto-increment setting of 3 for unique IDs across every database

The following figure shows the technology used in the Production environment:

![Production technology stack]({{ site.baseurl }}common/images/cloud_stack-diagram.png)

{{site.data.var.<ee>}} seamlessly scales from the smallest six CPU cluster with 11.25GB of RAM to the largest 96 CPU cluster with 180GB of RAM. Our triple-redundant architecture means that upscaling can be conducted swiftly and without downtime. When upscaling, we rotate each of the three instances to upgrade without downtime of your site.

In addition, extra web servers can be added to an existing cluster should the constriction be at the {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} level rather than the database level. This provides [*horizontal scaling*](https://en.wikipedia.org/wiki/Scalability#Horizontal_and_vertical_scaling){:target="_blank"} to complement the vertical scaling provided by extra CPUs on the database level.

## Differences in environments
The following table details the differences:

<table>
    <tbody>

    <tr>
        <td class="blank"></td>
        <th>Integration</th>
        <th>Staging</th>
        <th>Production</th>
    </tr>
    <tr><td>Managed by a UI</td>
    <td>Yes</td>
    <td>No</td>
    <td>No</td>
    </tr>
    <tr><td>Uses <code>.yaml</code> files for configuration</td>
    <td>Yes</td>
    <td>Requires support ticket for deployment settings</td>
    <td>Requires support ticket for deployment settings</td>
    </tr>
    <tr><td>Multiple environments</td>
    <td>Yes</td>
    <td>No (master only)</td>
    <td>No (master only)</td>
    </tr>
    <tr><td>Runs on dedicated hardware</td>
    <td>No</td>
    <td>Yes</td>
    <td>Yes</td>
    </tr>

</tbody>
</table>

## Projects {#cloud-arch-projects}
The container for your Magento application is a *project*. The project is your Magento store code, extensions, and integrations in a Master Git branch. Each project supports up to eight active Integration *environments* with an associated active Git branch. Consider each of the eight Integration environments your development environment, allowing you to develop and test different branches simultaneously. Each environment is comprised of *services*, which are deployed inside highly restricted containers on a grid of servers.

When the project is deployed into Production, monitoring and failover happen automatically behind the scenes.

<div class="bs-callout bs-callout-info" id="info">
  <p>{{site.data.var.<ece>}} currently supports the following services: PHP, MySQL (MariaDB), Solr (Magento 2.0.x), Elasticsearch (Magento 2.1.x and later), Redis, and RabbitMQ.</p>
</div>

## Services {#cloud-arch-services}
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
