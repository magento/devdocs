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

Magento Enterprise Cloud Edition enables you to use the following three types of systems.

### Integration systems {#cloud-arch-int}
This is the type of system on which individual developers customize the Magento application.

An integration system runs in a Linux container. You can have up to eight active *environments* (that is, Git branches) at a time to do your development and testing.

Use an integration system to write custom code and test it. Push your code to staging or production for iterative development.

### Staging system {#cloud-arch-stage}
This system runs on hardware similar to production.

Staging is where you test your finalized code before deploying to your live production system.

### Production system {#cloud-arch-prod}
This system runs your public-facing store on triple-redundant hardware.

#### Advantage of redundant hardware
Rather than running a traditional active-passive master or master-slave setup, Magento Enterprise Cloud Edition runs a triple-redundant multimaster where all three instances accept reads and writes. This architecture offers zero downtime when scaling, and also provides guaranteed transactional integrity.

Because of our unique triple-redundant hardware, we can provide you with a set of three gateway servers. Most external services enable you to whitelist multiple IPs, so having more than one fixed IP isn't usually a problem.

These three gateways map to the three servers in your Magento Enterprise Cloud Edition cluster and retain permanent addresses.

Furthermore, Magento Enterprise Cloud Edition is fully redundant and highly available at every level:

*	DNS 
*	Content Delivery Network (CDN)
*	Elastic load balancer (ELB)
*	Three-server cluster comprising all Magento services, including the database and web server.

#### Backup and disaster recovery
We automatically back up your production system every six hours. Each production system cluster is designed to withstand the loss of an entire server and all of the services running on it.

The coordinating agent that monitors your production system detects failures at the service level (for example, MySQL), and for all cases where an automated recovery is possible, fully automates and coordinates that recovery.

## Scalability {#cloud-arch-scale}
Magento Enterprise Cloud Edition seamlessly scales from the smallest six CPU cluster with 11.25GB of RAM to the largest 96 CPU cluster with 180GB of RAM. Our triple-redundant architecture means that upscaling can be conducted swiftly and without downtime: each of the three instances in the cluster is taken out of rotation in turn, upgraded to the new size and returned to rotation.

In addition, extra web servers can be added to an existing cluster should the constriction be at the PHP level rather than the database level. This provides [*horizontal scaling*](https://en.wikipedia.org/wiki/Scalability#Horizontal_and_vertical_scaling){:target="_blank"} to complement the vertical scaling provided by extra CPUs on the database level.

## Projects {#cloud-arch-projects}
The container for your Magento application is a *project*. The project is your Magento store. Each project has one or more *environments*, which are Git branches that enable developers to work on new features or perform testing. Each environment is comprised of *services*, which are deployed inside highly restricted containers on a grid of servers.

Monitoring and failover happen automatically, behind the scenes.

<div class="bs-callout bs-callout-info" id="info">
  <p>Magento Enterprise Cloud Edition currently supports the following services: PHP, MySQL (MariaDB), Solr, Elasticsearch, Redis and RabbitMQ.</p>
</div>

## Services {#cloud-arch-services}
Each service runs in its own secure container; containers are managed together in the project. 
Some services are built-in, such as the following:

*	HTTP router (handling incoming requests, but also caching and redirects)
*	PHP application server
*	Git 
*	Secure Shell (SSH)

You can even have multiple applications running in the same project. Building 
a microservice oriented architecture with Magento Enterprise Cloud Edition is
as easy as managing a monolithic application.

## Software versions used {#cloud-arch-software}
Magento Enterprise Cloud Edition uses:

*	Operating system: Debian GNU/Linux 8 (jessie)
*	Web server: nginx 1.8

The preceding software is *not* upgradable but versions of [PHP]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html), [MySQL]({{page.baseurl}}cloud/project/project-conf-files_services-mysql.html), [Solr]({{page.baseurl}}cloud/project/project-conf-files_services-solr.html), [Redis]({{page.baseurl}}cloud/project/project-conf-files_services-redis.html), [RabbitMQ]({{page.baseurl}}cloud/project/project-conf-files_services-rabbit.html), and [Elasticsearch]({{page.baseurl}}cloud/project/project-conf-files_services-elastic.html) are configurable.

#### Related topics
*	[Workflow]({{page.baseurl}}cloud/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/discover-deploy.html)
*	[Tooling]({{page.baseurl}}cloud/discover-tools.html)
*	[Magento Enterprise Cloud Edition requirements]({{page.baseurl}}cloud/cloud-requirements.html)


