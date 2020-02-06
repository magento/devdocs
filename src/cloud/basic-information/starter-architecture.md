---
group: cloud-guide
title: Starter architecture
functional_areas:
  - Cloud
---

All of your code is contained in the {{site.data.var.ece}} Starter project. The _project_ is your Magento store code, extensions, and integrations on a `master` branch. Each project supports up to 4 total environments including up to three active Integration *environments* and a Production environment using the `master` branch.

All environments are in PaaS (Platform-as-a-Service) containers. These containers are deployed inside highly restricted containers on a grid of servers. These environments are read-only, accepting deployed code changes from branches pushed from your local workspace.

You can use any development and branching methodology you like. We strongly recommend creating a Staging environment and branch as one of the Integration environments.

![High-level view of Starter project]({{ site.baseurl }}/common/images/cloud_arch-starter.png)

## Production with a master branch {#cloud-arch-prod}

The Production environment is your live store(s) and site(s). The environment includes your `master` branch, a web server, database, and configured services to fully test your site.

The Production environment runs your public-facing Magento single and multi-site storefronts. This system is read-only, requiring deployment across the architecture from the Integration environment to the Staging environment, and finally to the Production environment.

We walk you through [deploying to Production]({{ site.baseurl }}/cloud/live/stage-prod-live.html) and [Go Live]({{ site.baseurl }}/cloud/live/live.html) requirements and processes.

We highly recommend fully testing in your Staging environment and branch before pushing to the `master` branch which deploys to the Production environment.

## Staging branch and environment {#cloud-arch-stage}

We recommend creating a branch called `staging` from `master`. The Staging environment is created from the `staging` branch to provide a pre-production environment to test code, modules and extensions, payment gateways, shipping, product data, and much more. This environment provides the configuration for all services to match the Production environment including Fastly, New Relic APM, Blackfire, and search.

Additional sections in this guide provide instructions and walk-throughs for final code deployments and testing production level interactions in a safe Staging environment. For best performance and feature testing, replicate your Production database into the Staging environment.

We walk you through [deploying to Staging]({{ site.baseurl }}/cloud/live/stage-prod-live.html) and [testing your store(s)]({{ site.baseurl }}/cloud/live/stage-prod-test.html) requirements and processes.

{:.bs-callout-warning}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Deploy your store]({{ site.baseurl }}/cloud/live/stage-prod-live.html) and [Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html).

## Integration environment {#cloud-arch-int}

Developers use the Integration environment to develop, deploy, and test:

-  Magento application code
-  Custom code
-  Extensions
-  Services

You can have up to **two** active Integration environments on a grid for **two** active branches. Each Integration environment matches the name of the branch and includes a web server, database, and configured services to fully test your site.

You can have an unlimited number of inactive branches to store code. To access, view, and test inactive branches, you must activate them.

{:.bs-callout-info}
The Integration environment does not support all services. For example, Fastly CDN is not accessible in an Integration environment.

The process for developing in Integration requires the following process:

-  Branch and develop off of the `staging` branch
-  Develop all work on your local workspace in these branches
-  Push code to Git to build and deploy on an Integration environment for testing
-  As work is completed, merge to the `staging` branch

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{ site.baseurl }}/cloud/before/before-workspace.html), working with branches, and [deploying code]({{ site.baseurl }}/cloud/live/stage-prod-live.html).

## Production and Staging technology stack {#technology}

The Production and Staging environments include the following technologies. You can modify and configure these technologies through the [.magento.app.yaml file]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html).

-  Fastly for HTTP caching and CDN
-  Nginx web server speaking to PHP-FPM, one instance with multiple workers
-  Redis server
-  Elasticsearch for searching for {{site.data.var.ece}} 2.2 and later

### Services {#cloud-arch-services}

{{site.data.var.ece}} currently supports the following services: PHP, MySQL (MariaDB), Elasticsearch (Magento 2.2.x and later), Redis, and RabbitMQ.

Each service runs in its own secure container. Containers are managed together in the project. Some services are built-in, such as the following:

-  HTTP router (handling incoming requests, but also caching and redirects)
-  PHP application server
-  Git
-  Secure Shell (SSH)

You can even have multiple applications running in the same project. Building a microservice oriented architecture with {{site.data.var.ee}} is as easy as managing a monolithic application.

### Software versions {#cloud-arch-software}

{{site.data.var.ece}} uses:

-  Operating system: Debian GNU/Linux
-  Web server: [nginx](https://glossary.magento.com/nginx)

You cannot upgrade the operating system and web server software to a new version, but you can configure versions for the following software:

-  [PHP]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html)
-  [MySQL]({{ site.baseurl }}/cloud/project/project-conf-files_services-mysql.html)
-  [Redis]({{ site.baseurl }}/cloud/project/project-conf-files_services-redis.html)
-  [RabbitMQ]({{ site.baseurl }}/cloud/project/project-conf-files_services-rabbit.html)
-  [Elasticsearch]({{ site.baseurl }}/cloud/project/project-conf-files_services-elastic.html)

In the Staging and Production environments, you use Fastly for CDN and caching. When your environment is initially provisioned, we install the latest version of the Fastly CDN extension for Magento. You can upgrade the extension to get the latest bug fixes and improvements. See [Fastly CDN module for Magento 2]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2).

You use the following files to configure the software versions that you want to use in your implementation.

-  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/project-conf-files_magento-app.html)
-  [`routes.yaml`]({{ site.baseurl }}/cloud/project/project-conf-files_routes.html)
-  [`services.yaml`]({{ site.baseurl }}/cloud/project/project-conf-files_services.html)

### Backup and disaster recovery {#backup}

You can create a snapshot of your database and file system using the Project Web Interface or the CLI. The snapshot includes your deployed code, installed software and services, and data. See [Snapshots and backup management]({{ site.baseurl }}/cloud/project/project-webint-snap.html).

## Prepare for development {#develop}

{:.procedure}
To branch and develop your Magento store:

-  Set up your local environment
-  Clone the `master` branch from the Project to your local environment
-  Create a `staging` branch from `master`
-  Create branches for development from `staging`
-  Push code to Git that builds and deploys to an environment for testing

Additional sections in this guide provide instructions and walk-throughs for setting up your [local workspace]({{ site.baseurl }}/cloud/before/before-workspace.html), working with branches, [deploying code]({{ site.baseurl }}/cloud/live/stage-prod-live.html), and [going live]({{ site.baseurl }}/cloud/live/live.html).
