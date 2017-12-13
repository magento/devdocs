---
layout: default
group: cloud
subgroup: 010_welcome
title: Pro architecture
menu_title: Pro architecture
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/reference/discover-arch.md
redirect_from:
  - /guides/v2.0/cloud/discover-arch.html
  - /guides/v2.1/cloud/discover-arch.html
  - /guides/v2.2/cloud/discover-arch.html
functional_areas:
  - Cloud
---

{{site.data.var.ece}} Pro _projects_ provide three complete environments to develop, test, and launch your store. These environments are read-only, accepting deployed code changes from Git branches pushed from your local workspace. You can use any development and branching methodology you like.

All of your code is contained in the {{site.data.var.ece}} project. Each project supports up to eight active Integration *environments* with an associated active Git branch in PAAS (Platform as a Service) containers, including `master`. These containers are deployed inside highly restricted containers on a grid of servers.

Pro also provides a dedicated Infrastructure-as-a-Service (IaaS) for Production and Staging. You deploy the Integration `master` Git branch to these dedicated environments. Production includes a three-node high availability infrastructure to ensure your site is always available. When the project is deployed into Production, monitoring and failover happen automatically behind the scenes.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
For existing Pro projects, you need to have your Project Web Interface updated to manage Staging and Production through the interface. For more information adding this management to existing Pro projects, see [Add Staging and Production to Pro projects UI]({{page.baseurl}}cloud/trouble/pro-env-management.html).

If you do not request this update, you must use CLI commands or tickets to modify settings, variables, routes, and more for Pro plan Staging and Production environments.
</div>

![High-level view of Pro architecture flow]({{ site.baseurl }}common/images/cloud_pro-branch-architecture.png)

## Project Web Interface and branches {#branches}
For new or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html) projects, you may see the following branches in the Project Web Interface.

![Pro branch hierarchy]({{ site.baseurl }}common/images/cloud_project-pro.png)

These branches associate to cloud environments.

<table>
<thead>
<tr>
<th style="width: 125px;">Branch</th>
<th style="width: 100px;">Environment</th>
<th>Description</th>
</tr></thead>
<tbody>
<tr>
<td>(no branch)</td>
<td>Global Master</td>
<td>This "branch" captures global project changes including adding user accounts and variables. <b>Important:</b> Do not create branches from or merge to Global Master.
</td>
</tr>
<tr>
<td><code>production</code></td>
<td>Production</td>
<td><p>This is a child branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to go live with updated configurations and code.</p>
<p>When you convert, the Integration <code>master</code> is branched into a <code>production</code> branch with the users access and environment variables.</p></td>
</tr>
<tr>
<td><code>staging</code></td>
<td>Staging</td>
<td><p>This is a child branch from <code>master</code> with a deployment target. You cannot branch from this branch. You merge code from <code>master</code> to this branch to test in a pre-production environment.</p>
<p>When you convert, the Integration <code>master</code> is branched into a <code>staging</code> branch with the users access and environment variables.</p></td>
</tr>
<tr>
<td><code>master</code></td>
<td>Integration</td>
<td><p>The master branch of the single repository. In the Project Web Interface, this is called Integration. You branch from <code>master</code> for your development on your local, generating an environment when you push code.</p>
<p>When you convert, all active and inactive branches continue as children to the <code>master</code> branch.</p></td>
</tr>
</tbody>
</table>

## Integration environment {#cloud-arch-int}
Developers use the Integration environment to develop, deploy, and test the Magento application, custom code, extensions, and services. This environment is a Platform-as-a-Servie (PaaS) providing up to eight active environments on a grid for eight active Git branches. Each Integration environment matches the name of the branch and includes a web server, database, and configured services to fully test your site.

The Integration environments run in a Linux container (LXC) on a grid of servers as a PAAS (Platform as a Service). You can have up to eight active Git branches with an associated environments to development and test code. You can have an unlimited number of inactive Git branches to store code. To access, view, and test inactive branches, you must activate them.

This environment does not support all services. For example, Fastly is not accessible in Integration.

The process for developing in Integration requires the following process:

* Clone the `master` branch from the Project to your local
* Branch and develop in a new Git branch on your local workspace
* Push code to Git that builds and deploys to an Integration environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{page.baseurl}}cloud/live/stage-prod-live.html).

## Staging environment {#cloud-arch-stage}
The Staging environment provides a near-Production environment to test your site. This environment includes all services used in Production including Fastly, New Relic, Blackfire, and search. All code in Staging is read-only, requiring deploys of Git repositories. This environment shares the same dedicated server with Production.

* For projects created **before October 23, 2017**, this environment has a `master` branch in a Staging repository. You push code from the Integration `master` to this branch.
* For projects created **after October 23, 2017** or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html), this environment has a `staging` branch. This is a child of the `master` branch with a deployment target. You merge code from `master` this this branch.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into Staging.

We walk you through [deploying to Staging]({{page.baseurl}}cloud/live/stage-prod-live.html) and [testing your store(s)]({{page.baseurl}}cloud/live/stage-prod-test.html) requirements and processes.

We highly recommend fully testing every merchant and customer interaction in Staging prior to pushing to Production.

## Production environment {#cloud-arch-prod}
The Production environment runs your public-facing Magento single and multisite storefronts. This environment include triple-redundant High Availability nodes for continuous access and failover protection for your customers. This system is read-only, requiring deployment across the architecture from Integration to Staging and finally Production.

* For projects created **before October 23, 2017**, this environment has a `master` branch in a Staging repository. You push code from the Integration `master` to this branch.
* For projects created **after October 23, 2017** or [updated]({{page.baseurl}}cloud/trouble/pro-env-management.html), this environment has a `production` branch. This is a child of the `master` branch with a deployment target. You merge code from `master` this this branch.

We walk you through [deploying to Production]({{page.baseurl}}cloud/live/stage-prod-live.html) and [Go Live]({{page.baseurl}}cloud/live/live.html) requirements and processes.

We highly recommend fully testing in Staging prior to pushing to Production.

### Advantage of redundant hardware
Rather than running a traditional active-passive master or master-slave setup, {{site.data.var.ece}} runs a triple-redundant multimaster where all three instances accept reads and writes. This architecture offers zero downtime when scaling, and also provides guaranteed transactional integrity.

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
* GlusterFS file server for managing all static file deployments and syncs with four directories mounted: `var`, `pub/media`, `pub/static`, and `app/etc`
* Redis server, one per VM with only one active and the other two as replicas
* Elasticsearch for searching for {{site.data.var.ece}} 2.1 and later
* Solr search is supported for {{site.data.var.ece}} 2.0
* Galera database cluster with a MariaDB MySQL database per node with an auto-increment setting of 3 for unique IDs across every database

The following figure shows the technology used in the Production environment:

![Production technology stack]({{ site.baseurl }}common/images/cloud_stack-diagram.png)

{{site.data.var.ee}} seamlessly scales from the smallest six CPU cluster with 11.25GB of RAM to the largest 96 CPU cluster with 180GB of RAM. Our triple-redundant architecture means that upscaling can be conducted swiftly and without downtime. When upscaling, we rotate each of the three instances to upgrade without downtime of your site.

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

## Services {#cloud-arch-services}
{{site.data.var.ece}} currently supports the following services: PHP, MySQL (MariaDB), Solr (Magento 2.0.x), Elasticsearch (Magento 2.1.x and later), Redis, and RabbitMQ.

Each service runs in its own secure container. containers are managed together in the project. Some services are built-in, such as the following:

*	HTTP router (handling incoming requests, but also caching and redirects)
*	PHP application server
*	Git
*	Secure Shell (SSH)

You can even have multiple applications running in the same project. Building a microservice oriented architecture with {{site.data.var.ee}} is as easy as managing a monolithic application.

## Software versions {#cloud-arch-software}
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

For Staging and Production, you will use Fastly for CDN and caching. We recommend installing Fastly module 1.2.33 or later. For details, see [Fastly in Cloud]({{page.baseurl}}cloud/basic-information/cloud-fastly.html).

For detailed information on supported versions and extensions, see the following information. These files allow you to configure software versions you want to use in your implementation.

*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)

## Prepare for development {#develop}
To branch and develop your Magento store:

* Set up your local environment
* Clone the `master` branch from the Project to your local
* Branch and develop in a new Git branch on your local workspace
* Push code to Git that builds and deploys to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{page.baseurl}}cloud/before/before-workspace.html), working with Git branches, and [deploying code]({{page.baseurl}}cloud/live/stage-prod-live.html).

We walk you through the entire process from [deployment]({{page.baseurl}}cloud/live/stage-prod-live.html) to [going live]({{page.baseurl}}cloud/live/live.html) requirements and processes.

#### Related topics
*	[Pro Develop and Deploy Workflow]({{page.baseurl}}cloud/welcome/discover-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)
*	[{{site.data.var.ee}} requirements]({{page.baseurl}}cloud/requirements/cloud-requirements.html)
