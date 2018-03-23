---
layout: default
group: cloud
title: Environments
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
After fully configuring your store, you need to configure your environments. Environments in {{site.data.var.ece}} include containers with applications, services, and a database to provide a complete system for your Magento application codebase and files. 

You can configure application settings, routes, build and deploy actions, and notifications to support your project environments using the following configuration files:

-  [`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)—defines how to build and deploy Magento, including services, hooks, and cron jobs.
-  [`.magento.env.yaml`]({{page.baseurl}}cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables. You do not need to open a support ticket to push these changes to Staging and Production environments.
-  [`.magento/routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)—configure caching, redirects, and server-side includes.
-  [`.magento/services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)—defines the services Magento uses by name and version. For example, this file may include versions of MySQL, PHP extensions, Redis, RabbitMQ, and Elasticsearch.

When you push code changes, the active environment provisions container updates using the YAML configuration files.

## Environment branches and services
Every {{site.data.var.ece}} project starts with a `master` environment that corresponds to the `master` branch in Git. Each environment has an associated active Git branch of code.

* For [Pro]({{page.baseurl}}cloud/architecture/pro-develop-deploy-workflow.html), we recommend branching from Integration.
* For [Starter]({{page.baseurl}}cloud/basic-information/starter-develop-deploy-workflow.html), we recommend creating a `staging` branch, then creating additional code branches from `staging`.

{% include cloud/wings-management.md %}

You can create branches using the Project Web Interface or Git CLI commands. See [Magento Cloud CLI]({{page.baseurl}}cloud/reference/cli-ref-topic.html). Additional services and drivers are automatically included in your environments, including the following:

### SQL Server extension driver
We include updated [Microsoft PHP drivers](https://docs.microsoft.com/en-us/sql/connect/php/microsoft-php-driver-for-sql-server) for MS SQL Server extension to enable connecting between {{site.data.var.ece}} and off cloud MS SQL Servers. No additional installation is necessary to use these drivers. You will need to complete a couple configurations before using the connection and external SQL.

These drivers are included in all Starter environments and Pro Integration environments. To enable in Pro plan Staging and Production environments, please enter a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html) with the request.

To configure, you need to configure and provide the following:

-  **SSL certificate on the MS SQL Server**—The connection between the cloud cluster and the remote SQL server must be SSL secured. Customers must provide an SSL-enabled connection to their MS SQL server in order to connect to their project.
-  **An MS SQL Server for testing**—Include a Microsoft SQL server for us to test the connection. Include this information in a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html).

If you have questions or issues regarding connectivity or configuration for MS SQL Server, enter a [Support ticket]({{page.baseurl}}cloud/trouble/trouble.html).

{% include note.html type="info" content="Magento does not provide support for client MS SQL Servers or applications utilizing these external systems and services outside of the cloud hosting environments."%}
