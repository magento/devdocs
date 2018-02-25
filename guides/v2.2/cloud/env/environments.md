---
layout: default
group: cloud
title: Configure your environments
version: 2.2
github_link: cloud/env/environments.md
redirect_from:
  - /guides/v2.0/cloud/deploy/configure-deploy.html
  - /guides/v2.1/cloud/deploy/configure-deploy.html
  - /guides/v2.2/cloud/deploy/configure-deploy.html
  - /guides/v2.3/cloud/deploy/configure-deploy.html
functional_areas:
  - Cloud
---

Environments in {{site.data.var.ece}} include containers with applications, services, a database, and much more to provide a complete system for your Magento application (codebase and files). You can configure environment variables, settings, routes, and more to support your code branches per project environment.

We provide options to:

* Export configuration settings to a file for cross-environment deployment
* Set environment variables per environment

{% include cloud/wings-management.md %}

## Environments and branches {#env-branches}
Every {{site.data.var.ece}} project starts with a `master` environment that corresponds to the `master` branch in Git. Each environment has an associated active Git branch of code.

* For [Pro]({{page.baseurl}}cloud/architecture/pro-develop-deploy-workflow.html), we recommend branching from the `integration` branch.
* For [Starter]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html), we recommend creating a `staging` branch, then creating additional code branches from `staging`.

We recommend using GitHub for maintaining your code branches.

<div class="bs-callout bs-callout-info" id="info">
  <p>Your project must have a <code>master</code> branch; it won't function properly without one.</p>
</div>

You can create branches using the Project Web Interface or Git CLI commands. For this information, examples use Git or [Magento Cloud CLI]({{page.baseurl}}cloud/reference/cli-ref-topic.html) commands.

## Active and inactive branches {#active-inactive}
You have access to a limited number of _active_ Git branches per plan. When you push this branch, an active environment is provisioned as a container, updating when you push per the configurations of .magento.app.yaml, .magento/services.yaml, and .magento/routes.yaml.

You begin by creating active branches and pushing code. You can use the following command to create an active branch from a parent branch:

	magento-cloud environment:branch

You have unlimited inactive Git branches. These branches do not receive an environment until it is made active. You can use the following command to activate an inactive branch:

	magento-cloud environment:activate

When you activate an inactive branch, or create a new active branch, the command deploys a new active environment with a web server and services.

## Branch hierarchy, development, and deployment {#hierarchy}
For Starter and Pro plans, the `master` environment is ultimately the source or parent for all code in {{site.data.var.ece}}.

* For Starter, `master` is your Production environment and branch. You create branches from `master` as your Integration environment.
* For Pro, you have a `master` branch in Integration for creating your code branches. You deploy this branch to a matching `master` branch in Staging and Production environments.

In your Integration, you have a number of branches and environments available to you per plan. When you branch from `master`, you create a child relationship to this parent. Every branching creates a parent-child relationship. Each child environment can sync code, data, or both from its parent. Syncing data to an environment results in a byte-for-byte copy of all services and media files.

You fully develop on your in these branches. When ready, you push the code to build and deploy to an Integration enviornment. In these Integration environments, you can test custom code, extensions, third party integrations, and more. When ready, you merge this child Integration branch up to a parent. When merged, he parent environment is redeployed with the code changes of the child environment. For Pro, this is the Integration `master`. For Starter, it is an environment and branch of your choice.

For extensive details, see the following:

*	Starter:

	* [Starter architecture]({{page.baseurl}}cloud/basic-information/starter-architecture.html)
	*	[Starter develop and deploy workflow]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html)
*	Pro:

	* [Pro architecture]({{page.baseurl}}cloud/architecture/pro-architecture.html)
	*	[Pro develop and deploy workflow]({{page.baseurl}}cloud/architecture/pro-develop-deploy-workflow.html)
*	[Deployment process]({{page.baseurl}}cloud/reference/discover-deploy.html)

## Environment services {#services}
Your cloud environments for Starter and Pro configure the available and used database, web server, caching, and services per the settings entered for a series of YAML files. When you push Git code from your local, these services and more configure automatically in the environments hosted in the cloud (PaaS). For Pro Staging and Production environments (IaaS), you need to enter a ticket for those files to be migrated to configure those environment services and more. For details, see [Configure your environments](#configenv).

Additional services and drivers are automatically included in your environments, including the following.

### SQL Server extension driver {#sqldriver}
We include updated [Microsoft PHP drivers](https://docs.microsoft.com/en-us/sql/connect/php/microsoft-php-driver-for-sql-server) for MS SQL Server extension to enable connecting between {{site.data.var.ece}} and off cloud MS SQL Servers. No additional installation is necessary to use these drivers. You will need to complete a couple configurations before using the connection and external SQL.

These drivers are included in all Starter environments and Pro Integration environments. To enable in Pro plan Staging and Production environments, please enter a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html) with the request.

To configure, you need to configure and provide the following:

* SSL certificate on the MS SQL Server: The connection between the cloud cluster and the remote SQL server must be SSL secured.  Customers must provide an SSL-enabled connection to their MS SQL server in order to connect to their project.
* An MS SQL Server for testing: Please include a Microsoft SQL server for us to test the connection. Include this information in a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html).

If you have questions or issues regarding connectivity or configuration for MS SQL Server, enter a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
The drivers and supported service only includes configuration and updates in {{site.data.var.ece}} environments. We cannot provide support for client MS SQL Servers or applications utilizing these external systems and services outside of the cloud hosting enviornments.
</div>

## Configure your environments {#configenv}
After fully configuring your store, you should configure your environments. This includes specific files to manage builds, deployments, services, and routes.

For Starter, you can push these files across all environments including Production `master`.

For Pro, you can push these files across all Integration environments, but you must enter a support ticket to push these changes to your Staging and Production environments.

* [.magento.app.yaml]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html)—defines how to build and deploy Magento, including services, hooks, cron jobs, and more.
* [.magento.env.yaml](http://devdocs.magento.com/guides/v2.2/cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables. You do not need to open a support ticket to push these changes to Staging and Production environments.
* [.magento/services.yaml]({{ page.baseurl }}cloud/project/project-conf-files_services.html)—defines the services Magento uses by name and version. For example, this file may include versions of MySQL, PHP extensions, and Elasticsearch. These are referred to as *services*.

  * [MySQL]({{ page.baseurl }}cloud/project/project-conf-files_services-mysql.html)—configure the database.
  * [Redis]({{ page.baseurl }}cloud/project/project-conf-files_services-redis.html)—configure Redis for backend caching.
  * [Elasticsearch]({{ page.baseurl }}cloud/project/project-conf-files_services-elastic.html)
  * [RabbitMQ]({{ page.baseurl }}cloud/project/project-conf-files_services-rabbit.html)
* [.magento/routes.yaml]({{ page.baseurl }}cloud/project/project-conf-files_routes.html)

  * [Caching]({{ page.baseurl }}cloud/project/project-routes-more-cache.html)
  * [Redirects]({{ page.baseurl }}cloud/project/project-routes-more-redir.html)
  * [Server side includes]({{ page.baseurl }}cloud/project/project-routes-more-ssi.html)
