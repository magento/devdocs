---
group: cloud-guide
title: Pro architecture (legacy)
functional_areas:
  - Cloud
---

Each _Pro_ plan project supports a total of eight environments that you can use to develop, test, and launch your store. To modify files on these remote environments, you must push changes from your local workspace using Git branches.

-   **Integration**—Provides up to six environments, including the `master` branch, deployed to Platform-as-a-Service (PaaS) containers. You deploy code from the Integration `master` branch to the Staging and Production `master` branches.
-   **Staging**—Provides a single environment and `master` branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.
-   **Production**—Provides a single environment and `master` branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.

{:.bs-callout .bs-callout-info}
To manage Staging and Production environment settings through the Project Web Interface for Pro projects **created before October 23, 2017**, you must [request an update]({{ page.baseurl }}/cloud/trouble/pro-env-management.html). If you do not request the update, you must submit tickets to modify settings, variables, and routes.

![High-level view of Pro architecture (legacy) flow]({{ site.baseurl }}/common/images/cloud_pro-branch-architecture-legacy.png)  

The following table summarizes the differences between environments:

<table>
  <tbody>
    <tr>
      <td class="blank" />
      <th>Integration</th>
      <th>Staging</th>
      <th>Production</th>
    </tr>
    <tr>
      <td>Supports settings management in the UI?</td>
      <td>Yes</td>
      <td>Not by default (<a href="{{ page.baseurl }}/cloud/trouble/pro-env-management.html">requires an update</a>)</td>
      <td>Not by default (<a href="{{ page.baseurl }}/cloud/trouble/pro-env-management.html">requires an update</a>)</td>
    </tr>
    <tr>
      <td>Supports multiple environments/branches?</td>
      <td>Yes</td>
      <td>No (<code>master</code> only)</td>
      <td>No (<code>master</code> only)</td>
    </tr>
    <tr>
      <td>Uses YAML files for configuration?</td>
      <td>Yes</td>
      <td>Requires support ticket for deployment settings</td>
      <td>Requires support ticket for deployment settings</td>
    </tr>
    <tr>
      <td>Runs on dedicated IaaS hardware?</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Includes Fastly, Blackfire, and New Relic?</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Integration environment {#cloud-arch-int}

Developers use the Integration environment to develop, deploy, and test:

-   Magento application code
-   Custom code
-   Extensions
-   Services

The Integration environment runs in a Linux container (LXC) on a grid of servers known as Platform-as-a-Service (PaaS). It provides up to six environments, each as an active Git branch with the same name as the environment. Each environment includes a web server, database, and configured services to fully test your site.

{: .bs-callout .bs-callout-info}
The Integration environment does not support all services. For example, Fastly is not accessible in Integration.

#### Branches

You can have an unlimited number of _inactive_ Git branches to store code, but to access, view, and test inactive branches you must activate them. Use the `magento-cloud environment:activate` command to activate the environment.

When you update your project to manage the [Staging and Production environments through the Project Web Interface]({{ page.baseurl }}/cloud/trouble/pro-env-management.html), all active and inactive branches continue as children of the `master` branch.

Developing in the Integration environment requires the following Git process:

1.  Clone the `master` branch from the project environment to your local workspace
1.  Create a new branch and develop on your local workspace
1.  Push code changes, which automatically build and deploy to the Integration environment for testing

{: .bs-callout .bs-callout-info}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html) and [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html).

## Staging environment {#cloud-arch-stage}

The Staging environment provides a near-production environment to test your site. This environment includes all services used in the Production environment, including Fastly, New Relic, Blackfire, and search, and shares the same dedicated IaaS hardware as the Production environment.

#### Branches

The Staging environment contains a default `master` branch. You cannot branch from the Staging environment `master` branch. You must push code changes from the Integration environment `master` branch to Staging environment `master` branch.

When you update your project to manage the [Production and Staging environments through the Project Web Interface]({{ page.baseurl }}/cloud/trouble/pro-env-management.html), we create a branch from the Integration environment `master` branch called `staging` that contains all user access settings and environment variables for your Staging environment.

{: .bs-callout .bs-callout-info}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html) and [Test  deployment]({{ page.baseurl }}/cloud/live/stage-prod-test.html).

## Production environment {#cloud-arch-prod}

The Production environment runs your public-facing Magento single and multi-site storefronts. This environment runs on dedicated IaaS hardware featuring redundant, high-availability nodes for continuous access and failover protection for your customers.

#### Branches

The Production environment contains a default `master` branch. You cannot branch from the Production environment `master` branch. You must push code changes from the Staging environment `master` branch to Production environment `master` branch.

When you update your project to manage the [Production and Staging environments through the Project Web Interface]({{ page.baseurl }}/cloud/trouble/pro-env-management.html), we create a branch from the Integration environment `master` branch called `production` that contains all user access settings and environment variables for your Production environment.

{: .bs-callout .bs-callout-info}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html) and [Go Live and launch]({{ page.baseurl }}/cloud/live/live.html).

### Advantage of redundant hardware

Rather than running a traditional, active-passive master or a master-slave setup, {{site.data.var.ece}} runs a redundant, multi-master architecture where all three instances accept reads and writes. This architecture offers zero downtime when scaling and provides guaranteed transactional integrity.

Because of our unique, redundant hardware, we can provide you with a set of three gateway servers. Most external services enable you to [whitelist](https://glossary.magento.com/whitelist) multiple IP addresses, so having more than one fixed IP address is not a problem.

These three gateways map to the three servers in your Production environment cluster and retain static IP addresses. It is fully redundant and highly available at every level:

-   DNS
-   Content Delivery Network (CDN)
-   Elastic load balancer (ELB)
-   Three-server cluster comprising all Magento services, including the database and web server

### Backup and disaster recovery

Each production system cluster can withstand the loss of an entire server and all services running on it. A backup of your production system occurs automatically every six hours. 

The coordinating agent that monitors your production system:

-   Detects failures at the service level (for example, MySQL)
-   Fully automates and coordinates recovery where an automated recovery is possible

### Production technology stack

The Production environment has three virtual machines (VMs) behind an Elastic Load Balancer managed by an HAProxy per VM. Each VM includes the following technologies:

-   Fastly for HTTP caching and CDN
-   NGINX web server using PHP-FPM, one instance with multiple workers
-   GlusterFS file server for managing all static file deployments and synchronization with four directory mounts:
    -   `var`
    -   `pub/media`
    -   `pub/static`
    -   `app/etc`
-   Redis server, one per VM with only one active and the other two as replicas
-   Elasticsearch for searching, {{site.data.var.ece}} 2.1 and later
-   Solr search is supported for {{site.data.var.ece}} 2.0
-   Galera database cluster with one MariaDB MySQL database per node with an auto-increment setting of three for unique IDs across every database

The following figure shows the technology used in the Production environment:

![Production technology stack]({{ site.baseurl }}/common/images/cloud_stack-diagram.png)

{{site.data.var.ee}} seamlessly scales from the smallest 6 CPU cluster with 11.25GB of RAM to the largest 96 CPU cluster with 180GB of RAM. Our redundant architecture means we can offer upscaling without downtime. When upscaling, we rotate each of the three instances to upgrade without downtime of your site.

In addition, extra web servers can be added to an existing cluster should the constriction be at the [PHP](https://glossary.magento.com/php) level rather than the database level. This provides [*horizontal scaling*](https://en.wikipedia.org/wiki/Scalability#Horizontal_and_vertical_scaling) to complement the vertical scaling provided by extra CPUs on the database level.

## Services {#cloud-arch-services}
{{site.data.var.ece}} currently supports the following services:

-   PHP
-   MySQL (MariaDB)
-   Solr (Magento 2.0.x)
-   Elasticsearch (Magento 2.1.x and later)
-   Redis
-   RabbitMQ

Each service runs in a secure container managed in the project. Some projects include built-in services, such as the following:

-   HTTP router (handling incoming requests, but also caching and redirects)
-   PHP application server
-   Git
-   Secure Shell (SSH)

You can have multiple applications running in the same project. Building a microservice-oriented architecture with {{site.data.var.ee}} is as easy as managing a monolithic application.

## Software versions {#cloud-arch-software}
{{site.data.var.ece}} uses:

-   Operating system: Debian GNU/Linux 8 (jessie)
-   Web server: [NGINX](https://glossary.magento.com/nginx) 1.8

This software is *not* upgradable but versions for the following software is configurable:

-   [PHP]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)
-   [MySQL]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-   [Redis]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-   [RabbitMQ]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)
-   [Elasticsearch]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html)

For Staging and Production environments, use Fastly for CDN and caching. We recommend installing the Fastly module 1.2.33 or later. See [Fastly in Cloud]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html).

Edit the following YAML files to configure specific software versions to use in your implementation.

-   [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—application build and deployment
-   [`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—url processing
-   [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—supported services

## Prepare for development {#develop}

To branch and develop your Magento store:

1.   Set up your local environment
1.   Clone the `master` branch from the Project to your local workspace
1.   Branch and develop in a new Git branch on your local workspace
1.   Push code to Git to build and deploy to an environment for testing

