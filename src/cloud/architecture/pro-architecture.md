---
group: cloud-guide
title: Pro architecture
redirect_from:
  - /cloud/discover-arch.html
  - /cloud/reference/discover-arch.html
  - /cloud/architecture/pro-architecture-legacy.html
functional_areas:
  - Cloud
---

Your {{site.data.var.ece}} Pro architecture supports multiple environments that you can use to develop, test, and launch your store.

-  **Integration**—Provides a single environment branch, and you can create one additional, environment branch. This allows for up to two _active_ branches deployed to Platform-as-a-Service (PaaS) containers.
-  **Staging**—Provides a single environment branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.
-  **Production**—Provides a single environment branch deployed to dedicated Infrastructure-as-a-Service (IaaS) containers.
-  **Master**—Provides a `master` branch deployed to Platform-as-a-Service (PaaS) containers.

The following table summarizes the differences between environments:

<table>
  <tbody>
    <tr>
      <td class="blank"></td>
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
     <td>Includes New Relic</td>
     <td>No</td>
     <td>APM</td>
     <td>APM &plus; NRI</td>
   </tr>
  </tbody>
</table>

{:.bs-callout-info}
Magento also provides the {{site.data.var.mcd-prod}} solution to deploy Magento to a local Cloud Docker environment for developing and testing {{site.data.var.ee}} projects. See [Docker development]({{site.baseurl}}/cloud/docker/docker-development.html).

## Pro environment architecture

Your project is a single Git repository with three, main environment branches for Integration, Staging, and Production. The following diagram shows the hierarchical relationship of the environments:

![High-level view of Pro Environment architecture]({{ site.baseurl }}/common/images/cloud/cloud_pro-branch-architecture.png)

## Integration environment {#cloud-arch-int}

The Integration environment runs in a Linux container (LXC) on a grid of servers known as Platform-as-a-Service (PaaS). Each environment includes a web server and database to test your site.

**Recommended use cases:**

Integration environments are designed for limited testing and development before moving changes to Staging and Production. For example, you can use the Integration environment to complete the following tasks:

-  Ensure that changes to continuous integration (CI) processes are Cloud compatible

-  Test critical workflows on key pages like Home, Category, Product Details Page (PDP), Checkout, and Admin

For best performance in the Integration environment follow these best practices:

-  Restrict catalog size

-  Limit use to one or two concurrent users

-  Disable crons and manually run as needed

**Caveats:**

-  Fastly CDN and New Relic services are not accessible in an Integration environment

-  The Integration environment architecture does not match the Production and Staging architecture

-  Do not use the Integration environment for development testing, performance testing, or user acceptance testing (UAT)

-  Do not use the Integration environment to test {{site.data.var.b2b}} functionality

-  You cannot restore the Integration database from Production or Staging

{% include cloud/note-enhanced-integration-envs-kb.md%}

## Staging environment {#cloud-arch-stage}

The Staging environment provides a near-production environment to test your site. This environment, which is hosted on dedicated IaaS hardware, includes all services, such as Fastly CDN, New Relic APM, and search.

You cannot create a branch from the Staging environment branch. You must push code changes from the Integration environment branch to the Staging environment branch.

**Recommended use cases:**

The Staging environment matches the Production architecture and is designed for UAT, content staging, and final review before pushing features to the Production environment. For example, you can use the Staging environment to complete the following tasks:

-  Regression testing against production data

-  Performance testing with Fastly caching enabled

-  Test new builds instead of patching in Production

-  UAT testing for new builds

-  Test {{site.data.var.b2b}}

-  Customize cron configuration and test cron jobs

See [Deploy your store]({{ site.baseurl }}/cloud/live/stage-prod-live.html) and [Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html).

**Caveats:**

-  After launching the Production site, use the Staging environment primarily to test patches for Production-critical bug fixes.

-  You cannot create a branch from the Staging environment branch. You must push code changes from the Integration environment branch to the Staging environment branch.

## Production environment {#cloud-arch-prod}

The Production environment runs your public-facing Magento single and multi-site storefronts. This environment runs on dedicated IaaS hardware featuring redundant, high-availability nodes for continuous access and failover protection for your customers. The Production environment includes all services in the Staging environment, plus the [New Relic Infrastructure (NRI)](https://newrelic.com/products/infrastructure) service, which automatically connects with the application data and performance analytics to provide dynamic server monitoring.

You cannot create a branch from the Production environment branch. You must push code changes from the Staging environment branch to the Production environment branch.

### Redundant hardware

Rather than running a traditional, active-passive master or a master-slave setup, {{site.data.var.ece}} runs a redundant architecture where all three instances accept reads and writes. This architecture offers zero downtime when scaling and provides guaranteed transactional integrity.

Because of our unique, redundant hardware, we can provide you with three gateway servers. Most external services enable you to add multiple IP addresses to an [allowlist](https://glossary.magento.com/whitelist), so having more than one fixed IP address is not a problem.

The three gateways map to the three servers in your Production environment cluster and retain static IP addresses. It is fully redundant and highly available at every level:

-  DNS
-  Content Delivery Network (CDN)
-  Elastic load balancer (ELB)
-  Three-server cluster comprising all Magento services, including the database and web server

### Backup and disaster recovery

Your Pro plan backup and recovery approach uses a high-availability architecture combined with full-system backups. We replicate each Project—all data, code, and assets—across three separate AWS or Azure Availability Zones, each zone with a separate data center.

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

-  **Recovery Point Objective (RPO)**—is 1 hour for the first 24 hours; after which, the RPO is 6 hours (maximum time to last backup).
-  **Recovery Time Objective (RTO)**—depends on the size of the storage. Large EBS volumes take more time to restore.

{:.bs-callout-tip}
On Pro Staging and Production environments, you must submit a support ticket to restore an environment from an automatic backup. You can backup the database and code for your Production and Staging environments using CLI commands. See [Dump your database]({{site.baseurl}}/cloud/project/project-webint-snap.html#db-dump) and [bin/magento setup:backup]({{site.baseurl }}/guides/v2.4/reference/cli/magento-commerce.html#setupbackup). For Integration environments, we highly recommend that you create a snapshot as a first step after accessing your {{site.data.var.ece}} project and before applying any major changes. See [Snapshots and backup management]({{site.baseurl}}/cloud/project/project-webint-snap.html).

### Production technology stack

The Production environment has three virtual machines (VMs) behind an Elastic Load Balancer managed by an HAProxy per VM. Each VM includes the following technologies:

-  **Fastly CDN**—HTTP caching and CDN
-  **NGINX**—web server using PHP-FPM, one instance with multiple workers
-  **GlusterFS**—file server for managing all static file deployments and synchronization with four directory mounts:
   -  `var`
   -  `pub/media`
   -  `pub/static`
   -  `app/etc`
-  **Redis**—one server per VM with only one active and the other two as replicas
-  **Elasticsearch**—search for {{site.data.var.ece}} 2.2 and later
-  **Galera**—database cluster with one MariaDB MySQL database per node with an auto-increment setting of three for unique IDs across every database

The following figure shows the technologies used in the Production environment:

![Production technology stack]({{ site.baseurl }}/common/images/cloud/cloud_stack-diagram.png)

### Pro cluster scaling

{{site.data.var.ee}} can scale from the smallest Pro12 cluster to the largest Pro120 cluster.

-  Pro12 offers a 12-CPU (4 x 3 nodes) and 48GB RAM (16 x 3 nodes)
-  Pro120 offers 120 CPU (40 x 3 nodes) up to 480GB RAM (160 x 3 nodes)

Our redundant architecture means we can offer upscaling without downtime. When upscaling, we rotate each of the three instances to upgrade capacity without impacting site operation.

For example, you can add extra web servers to an existing cluster should the constriction be at the PHP level rather than the database level. This provides _horizontal scaling_ to complement the vertical scaling provided by extra CPUs on the database level. See [Scaled architecture]({{ site.baseurl }}/cloud/architecture/scaled-architecture.html).

## Master environment

On Pro plan projects, the Master branch provides an active PaaS environment with your Production environment. Always push a copy of the Production code to the Master environment in case you need to debug the Production environment without interrupting services.

**Caveats:**

-  Do **not** create a branch from Master. Use the Integration environment branch to create new, active branches.
-  Do not use the Master environment for development, UAT or performance testing

## Software versions {#cloud-arch-software}

{{site.data.var.ece}} uses the Debian GNU/Linux operating system and the [NGINX](https://glossary.magento.com/nginx) web server. You cannot upgrade this software, but you can configure versions for the following:

-  [PHP]({{ site.baseurl }}/cloud/project/magento-app.html)
-  [MySQL]({{ site.baseurl }}/cloud/project/services-mysql.html)
-  [Redis]({{ site.baseurl }}/cloud/project/services-redis.html)
-  [RabbitMQ]({{ site.baseurl }}/cloud/project/services-rabbit.html)
-  [Elasticsearch]({{ site.baseurl }}/cloud/project/services-elastic.html)

For the Staging and Production environments, we recommend installing the latest version of the Fastly CDN module. See [Fastly in Cloud]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2).

Edit the following YAML files to configure specific software versions to use in your implementation.

-  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/magento-app.html)—application build and deployment
-  [`routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html)—url processing
-  [`services.yaml`]({{ site.baseurl }}/cloud/project/services.html)—supported services
-  [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html)—unified configs for {{site.data.var.ece}} 2.2 and later
