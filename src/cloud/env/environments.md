---
group: cloud-guide
title: Configure environments
redirect_from:
  - /cloud/deploy/configure-deploy.html
functional_areas:
  - Cloud
---
After fully configuring your store, you need to configure your environments. Environments in {{site.data.var.ece}} include containers with applications, services, and a database to provide a complete system for your {{site.data.var.ee}} application codebase and files.

You can configure application settings, routes, build and deploy actions, and notifications to support your project environments using the following configuration files:

-  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/magento-app.html)—defines how to build and deploy {{site.data.var.ee}}, including services, hooks, and cron jobs.
-  [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables.
-  [`.magento/routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html)—configure caching, redirects, and server-side includes.
-  [`.magento/services.yaml`]({{ site.baseurl }}/cloud/project/services.html)—defines the services {{site.data.var.ee}} uses by name and version. For example, this file may include versions of MariaDB, PHP extensions, Redis, RabbitMQ, and Elasticsearch or OpenSearch. You must open a support ticket to push these changes to Pro plan Staging and Production environments.
-  [`php.ini`]({{ site.baseurl }}/cloud/project/magento-app-php-ini.html)—an optional file that can be added to the project. The settings contained in this file are appended to the ones maintained by {{site.data.var.ece}}.

When you push code changes, the active environment provisions container updates using the YAML configuration files.

## Configuration updates to Pro environments

{% include cloud/note-pro-missing-self-service-options.md %}
