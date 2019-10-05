---
group: cloud-guide
title: Configure environments
redirect_from:
  - /guides/v2.2/cloud/deploy/configure-deploy.html
  - /guides/v2.3/cloud/deploy/configure-deploy.html
functional_areas:
  - Cloud
---
After fully configuring your store, you need to configure your environments. Environments in {{site.data.var.ece}} include containers with applications, services, and a database to provide a complete system for your Magento application codebase and files.

You can configure application settings, routes, build and deploy actions, and notifications to support your project environments using the following configuration files:

- [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—defines how to build and deploy Magento, including services, hooks, and cron jobs.
- [`.magento.env.yaml`]({{ page.baseurl }}/cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables.
- [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—configure caching, redirects, and server-side includes.
- [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—defines the services Magento uses by name and version. For example, this file may include versions of MySQL, PHP extensions, Redis, RabbitMQ, and Elasticsearch. You must open a support ticket to push these changes to Pro plan Staging and Production environments.

When you push code changes, the active environment provisions container updates using the YAML configuration files.
