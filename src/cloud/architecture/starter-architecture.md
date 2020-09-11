---
group: cloud-guide
title: Starter architecture
functional_areas:
  - Cloud
redirect_from:
  - /cloud/basic-information/starter-architecture.html
---

Your {{site.data.var.ece}} Starter architecture supports up to **four** environments, including a Master environment that contains the initial project code, the Staging environment, and up to two Integration environments.

All environments are in PaaS (Platform-as-a-Service) containers. These containers are deployed inside highly restricted containers on a grid of servers. These environments are read-only, accepting deployed code changes from branches pushed from your local workspace.  Each environment provide a database and web server.

You can use any development and branching methodology you like. When you get initial access to your project, we strongly recommend that you create a Staging environment from the Master environment. Then, create the Integration environment by branching from Staging.

## Starter environment architecture

The following diagram shows the hierarchical relationships of the Starter environments.

![High-level view of Starter project]({{ site.baseurl }}/common/images/cloud/cloud_arch-starter.png)

## Production environment {#cloud-arch-prod}

The Production environment provides the source code to deploy Magento to the Cloud infrastructure that runs your public-facing Magento single and multi-site storefronts. The Production environment uses code from the `master` branch to configure and enable the web server, database, configured services, and your Magento application code.

Because the production environment is read-only, you must make changes in the Integration environment and deploy across the architecture from the Integration environment to Staging, and finally to the Production environment. See [Deploy your store][] and [Site launch][].

We highly recommend fully testing in your Staging environment and branch before pushing to the `master` branch which deploys to the Production environment.

## Staging environment {#cloud-arch-stage}

We recommend creating a branch called `staging` from `master`. The `staging` branch deploys code to the Staging environment to provide a pre-production environment to test code, modules and extensions, payment gateways, shipping, product data, and much more. This environment provides the configuration for all services to match the Production environment including Fastly, New Relic APM, and search.

Additional sections in this guide provide instructions for final code deployments and testing production level interactions in a secure Staging environment. For best performance and feature testing, replicate your Production database into the Staging environment.

{:.bs-callout-warning}
We highly recommend testing every merchant and customer interaction in the Staging environment prior to deploying to the Production environment. See [Deploy your store][] and [Test deployment][].

## Integration environment {#cloud-arch-int}

Developers use the Integration environment to develop, deploy, and test:

-  Magento application code
-  Custom code
-  Extensions
-  Services

You can have up to **two** active Integration environments. You create an Integration environment by creating a branch from the Staging branch. When you create an Integration environment, the environment name matches the branch name. An integration environment includes a web server and a database. It does not include all services, for example Fastly CDN and New Relic are not available.

You can have an unlimited number of inactive branches for code storage. To access, view, and test an inactive branch, you must activate it.

{% include cloud/note-enhanced-integration-envs-kb.md%}

## Production and Staging technology stack {#technology}

The Production and Staging environments include the following technologies. You can modify and configure these technologies through the [`.magento.app.yaml`][magento.app.yaml] file.

-  Fastly for HTTP caching and CDN
-  Nginx web server speaking to PHP-FPM, one instance with multiple workers
-  Redis server
-  Elasticsearch for searching for {{site.data.var.ece}} 2.2 and later

### Services {#cloud-arch-services}

{{site.data.var.ece}} currently supports the following services: PHP, MySQL (MariaDB), Elasticsearch (Magento 2.2.x and later), Redis, and RabbitMQ.

Each service runs in a separate, secure container. Containers are managed together in the project. Some services are standard, such as the following:

-  HTTP router (handling incoming requests, but also caching and redirects)
-  PHP application server
-  Git
-  Secure Shell (SSH)

You can have multiple applications running in the same project. Building a microservice-oriented architecture with {{site.data.var.ee}} is as easy as managing a monolithic application.

### Software versions {#cloud-arch-software}

{{site.data.var.ece}} uses the Debian GNU/Linux operating system and the [NGINX](https://glossary.magento.com/nginx) web server. You cannot upgrade this software, but you can configure versions for the following:

-  [PHP][]
-  [MySQL][]
-  [Redis][]
-  [RabbitMQ][]
-  [Elasticsearch][]

In the Staging and Production environments, you use Fastly for CDN and caching. When your environment is initially provisioned, we install the latest version of the Fastly CDN extension for Magento. You can upgrade the extension to get the latest bug fixes and improvements. See [Fastly CDN module for Magento 2][]. You also have access to [New Relic][] for performance management.

You use the following files to configure the software versions that you want to use in your implementation.

-  [`.magento.app.yaml`][magento.app.yaml]
-  [`routes.yaml`][routes.yaml]
-  [`services.yaml`][services.yaml]

### Backup and disaster recovery {#backup}

You can create a snapshot of your database and file system using the Project Web Interface or the CLI. The snapshot includes your deployed code, installed software and services, and data. See [Snapshots and backup management][].

## Prepare for development {#develop}

The following workflow summarizes the process to branch your code, develop, and deploy your store:

1. Set up your local environment
1. Clone the `master` branch from the Project to your local environment
1. Create a `staging` branch from `master`
1. Create branches for development from `staging`
1. Push code to Git that builds and deploys to an environment for testing

See the following sections for detailed instructions and walk-throughs to develop, test, and deploy your store:

-  [Starter develop and deploy workflow][]
-  [Docker development][] (local development environment enabled by {{site.data.var.mcd-prod}})
-  [Manage branches][]
-  [Deploy your store][]
-  [Site launch][]

<!--Link definitions-->
[Deploy your store]: {{ site.baseurl }}/cloud/live/stage-prod-live.html
[Docker development]: {{ site.baseurl }}/cloud/docker/docker-development.html
[Elasticsearch]: {{ site.baseurl }}/cloud/project/services-elastic.html
[Fastly CDN module for Magento 2]: {{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2
[Manage branches]: {{ site.baseurl }}/cloud/env/environments-start.html
[MySQL]: {{ site.baseurl }}/cloud/project/services-mysql.html
[New Relic]: {{site.baseurl}}/cloud/project/new-relic.html#configure-new-relic-for-starter-environments
[PHP]: {{ site.baseurl }}/cloud/project/magento-app.html
[RabbitMQ]: {{ site.baseurl }}/cloud/project/services-rabbit.html
[Redis]: {{ site.baseurl }}/cloud/project/services-redis.html
[Site launch]: {{ site.baseurl }}/cloud/live/live.html
[Snapshots and backup management]: {{ site.baseurl }}/cloud/project/project-webint-snap.html
[Starter develop and deploy workflow]: {{ site.baseurl}}/cloud/architecture/starter-develop-deploy-workflow.html
[Test deployment]: {{ site.baseurl }}/cloud/live/stage-prod-test.html
[launching your site]: {{ site.baseurl }}/cloud/live/live.html
[magento.app.yaml]: {{ site.baseurl }}/cloud/project/magento-app.html
[nginx]: https://glossary.magento.com/nginx
[routes.yaml]: {{ site.baseurl }}/cloud/project/routes.html
[services.yaml]: {{ site.baseurl }}/cloud/project/services.html
