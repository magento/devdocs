---
group: cloud-guide
title: Pro architecture
redirect_from:
  - /guides/v2.2/cloud/discover-arch.html
  - /guides/v2.2/cloud/reference/discover-arch.html
  - /guides/v2.3/cloud/reference/discover-arch.html
  - /guides/v2.2/cloud/architecture/pro-architecture-legacy.html
  - /guides/v2.3/cloud/architecture/pro-architecture-legacy.html

functional_areas:
  - Cloud
---

Your {{site.data.var.ece}} Pro architecture supports a maximum of **eight** environments that you can use to develop, test, and launch your store. Each environment contains a database and a web server:

- **Integration**—Provides a single environment branch, and you can create up to four additional, environment branches. This allows for a maximum of five _active_ branches deployed to Platform-as-a-Service (PaaS) containers.
- **Staging**—Provides a single environment branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.
- **Production**—Provides a single environment branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.
- **Global Master**—Provides a `master` branch deployed to Platform-as-a-Service (PaaS) containers.

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
      <td>Supports settings management in the UI</td>
      <td>Yes</td>
      <td>Limited</td>
      <td>Limited</td>
    </tr>
    <tr>
      <td>Supports multiple branches</td>
      <td>Yes</td>
      <td>No (Staging only)</td>
      <td>No (Production only)</td>
    </tr>
    <tr>
      <td>Uses YAML files for configuration</td>
      <td>Yes</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td>Runs on dedicated IaaS hardware</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>Includes Fastly CDN</td>
      <td>No</td>
      <td>Yes</td>
      <td>Yes</td>
    </tr>
   <tr>
     <td>Includes Blackfire.io</td>
     <td>Yes</td>
     <td>Yes</td>
     <td>Yes</td>
   </tr>
   <tr>
     <td>Includes New Relic</td>
     <td>No</td>
     <td>APM</td>
     <td>APM + NRI</td>
   </tr>
  </tbody>
</table>

Your project is a single Git repository with three, main environment branches for Integration, Staging, and Production. The following diagram shows the hierarchical relationship of the environments:

![High-level view of Pro Environment architecture]({{ site.baseurl }}/common/images/cloud_pro-branch-architecture-wings.png)

## Integration environment {#cloud-arch-int}

Developers use the Integration environment to develop, deploy, and test:

-   Magento application code
-   Custom code
-   Extensions
-   Services

The Integration environment runs in a Linux container (LXC) on a grid of servers known as Platform-as-a-Service (PaaS). Each environment includes a web server and database to test your site.

{: .bs-callout-info }
The Integration environment does not support all services. For example, the Fastly CDN is not accessible in an Integration environment.

### Global Master

The Global Master branch is a part of the Integration environment. You should always push a copy of the Production code to the Global Master in case there is an emergent need to debug the Production environment without interrupting services.

Do **not** create a branch from Global Master. Use the Integration environment branch to create new, active branches.

## Staging environment {#cloud-arch-stage}

The Staging environment provides a near-production environment to test your site. This environment includes all services, such as Fastly CDN, New Relic APM, Blackfire Profiler, and search—and shares the same dedicated IaaS hardware as the Production environment.

You cannot create a branch from the Staging environment branch. You must push code changes from the Integration environment branch to the Staging environment branch.

{: .bs-callout .bs-callout-warning}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Deploy your store]({{ page.baseurl }}/cloud/live/stage-prod-live.html) and [Test deployment]({{ page.baseurl }}/cloud/live/stage-prod-test.html).

## Production environment {#cloud-arch-prod}

The Production environment runs your public-facing Magento single and multi-site storefronts. This environment runs on dedicated IaaS hardware featuring redundant, high-availability nodes for continuous access and failover protection for your customers. The Production environment includes all services in the Staging environment, plus the [New Relic Infrastructure (NRI)](https://newrelic.com/products/infrastructure) service, which automatically connects with the application data and performance analytics to provide dynamic server monitoring.

You cannot create a branch from the Production environment branch. You must push code changes from the Staging environment branch to the Production environment branch.

### Redundant hardware

Rather than running a traditional, active-passive master or a master-slave setup, {{site.data.var.ece}} runs a redundant architecture where all three instances accept reads and writes. This architecture offers zero downtime when scaling and provides guaranteed transactional integrity.

Because of our unique, redundant hardware, we can provide you with three gateway servers. Most external services enable you to [whitelist](https://glossary.magento.com/whitelist) multiple IP addresses, so having more than one fixed IP address is not a problem.

The three gateways map to the three servers in your Production environment cluster and retain static IP addresses. It is fully redundant and highly available at every level:

-   DNS
-   Content Delivery Network (CDN)
-   Elastic load balancer (ELB)
-   Three-server cluster comprising all Magento services, including the database and web server

### Backup and disaster recovery

Your Pro plan backup and recovery approach uses a high-availability architecture combined with full-system backups. We replicate each Project—all data, code, and assets—across three separate AWS Availability Zones, each zone with a separate data center.

In addition to the redundancy of the high-availability architecture, {{site.data.var.ece}} provides
incremental backups, which include the file system and the database, every hour for the last 24 hours of operation. After the
24-hour period, we retain the backups according to the following schedule:

Time Period | Backup Retention Policy
--- | ---
Days 1 to 3 | Each backup
Days 4 to 6 | One backup per day
Weeks 2 to 6 | One backup per week
Weeks 8 to 12 | One bi-weekly backup
Weeks 12 to 22 | One backup per month

{{site.data.var.ece}} creates the backup using snapshots to encrypted elastic block storage (EBS) volumes. An EBS snapshot is immediate, but the time it takes to write to the simple storage service (S3) depends on the volume of changes.

-   **Recovery Point Objective (RPO)**—is 1 hour for the first 24 hours; after which, the RPO is 6 hours (maximum time to last backup).
-   **Recovery Time Objective (RTO)**—depends on the size of the storage. Large EBS volumes take more time to restore.

### Production technology stack

The Production environment has three virtual machines (VMs) behind an Elastic Load Balancer managed by an HAProxy per VM. Each VM includes the following technologies:

-   **Fastly CDN**—HTTP caching and CDN
-   **NGINX**—web server using PHP-FPM, one instance with multiple workers
-   **GlusterFS**—file server for managing all static file deployments and synchronization with four directory mounts:
    -   `var`
    -   `pub/media`
    -   `pub/static`
    -   `app/etc`
-   **Redis**—one server per VM with only one active and the other two as replicas
-   **Elasticsearch**—search for {{site.data.var.ece}} 2.1 and later
-   **Galera**—database cluster with one MariaDB MySQL database per node with an auto-increment setting of three for unique IDs across every database

The following figure shows the technologies used in the Production environment:

![Production technology stack]({{ site.baseurl }}/common/images/cloud_stack-diagram.png)

{{site.data.var.ee}} can scale from the smallest Pro12 cluster to the largest Pro120 cluster.
-   Pro12 offers a 12-CPU (4 x 3 nodes) and 48GB RAM (16 x 3 nodes)
-   Pro120 offers 120 CPU (40 x 3 nodes) up to 480GB RAM (160 x 3 nodes)

Our redundant architecture means we can offer upscaling without downtime. When upscaling, we rotate each of the three instances to upgrade capacity without impacting site operation.

<!-- [//]: # (HG—careful: In addition, you can add extra web servers to an existing cluster should the constriction be at the [PHP](https://glossary.magento.com/php) level rather than the database level. This provides _horizontal scaling_ to complement the vertical scaling provided by extra CPUs on the database level.) -->

## Software versions {#cloud-arch-software}
{{site.data.var.ece}} uses the Debian GNU/Linux 8 (jessie) operating system and the [NGINX](https://glossary.magento.com/nginx) 1.8 web server. You cannot upgrade this software, but you can configure versions for the following:

-   [PHP]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)
-   [MySQL]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-   [Redis]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-   [RabbitMQ]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)
-   [Elasticsearch]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html)

For the Staging and Production environments, we recommend installing the Fastly CDN module 1.2.33 or later. See [Fastly in Cloud]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html).

Edit the following YAML files to configure specific software versions to use in your implementation.

-   [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—application build and deployment
-   [`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—url processing
-   [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—supported services
-   [`.magento.env.yaml`]({{ page.baseurl }}/cloud/project/magento-env-yaml.html)—unified configs for {{site.data.var.ece}} 2.2 and later
