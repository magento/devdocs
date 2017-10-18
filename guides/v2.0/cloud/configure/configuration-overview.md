---
layout: default
group: cloud
subgroup: 090_configure
title: Configure Magento Commerce
menu_title: Configure Magento Commerce
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/configure/configuration-overview.md
---

The following information walks you through the options for configuring your store on your local and in all environments. You may need to configure files and settings in your local, pushing settings with your code. For specific services, you configure settings directly in Staging and Production environments.

You can set up [multiple websites and stores]({{ page.baseurl }}cloud/project/project-multi-sites.html) in your Magento instance, creating and configuring them in your local branch and deploying the settings across your environments.

## Build hooks, services, and routes {#configurations}
Specific files manage your Magento configurations for builds, services, and routes:

* [.magento.app.yaml]({{ page.baseurl }}cloud/project/project-conf-files_magento-app.html) configures how the Magento application is built and deployed including services, hooks, cron jobs, and more
* [routes.yaml]({{ page.baseurl }}cloud/project/project-conf-files_routes.html) configures how Magento processes an incoming URL for your Development (Integration) environment

  * [Caching]({{ page.baseurl }}cloud/project/project-routes-more-cache.html) configuration options for caches set in routes.yaml
  * [Redirect]({{ page.baseurl }}cloud/project/project-routes-more-redir.html) configuration and rules for managing redirections set in routes.yaml
  * [Server side includes]({{ page.baseurl }}cloud/project/project-routes-more-ssi.html) configured set in routes.yaml
* [services.yaml]({{ page.baseurl }}cloud/project/project-conf-files_services.html) configures the services you use in your stores and sites including name, version, and allocated disk space

  * [MySQL service]({{ page.baseurl }}cloud/project/project-conf-files_services-mysql.html) configuration for the database set in services.yaml
  * [Redis service]({{ page.baseurl }}cloud/project/project-conf-files_services-redis.html) configuration for a backend caching solution set in services.yaml
  * [Solr service]({{ page.baseurl }}cloud/project/project-conf-files_services-solr.html) configuration for search engines supported for {{site.data.var.ee}} 2.0 set in services.yaml
  * [Elasticsearch service]({{ page.baseurl }}cloud/project/project-conf-files_services-elastic.html) configuration for searches supported for {{site.data.var.ee}} 2.1 and later set in services.yaml
  * [RabbitMQ]({{ page.baseurl }}cloud/project/project-conf-files_services-rabbit.html) configuration for a messaging broker set in services.yaml

You should also configure services directly in Staging and Production:

* [Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html) for caching and CDN in Staging and Production environments
* [PayPal On-Boarding tool]({{ page.baseurl }}cloud/live/paypal-onboarding.html) provides PayPal payment gateway checkout by connecting to your PayPal merchant account

## Integrations {#integrations}
We also provide integrations with:

* [Blackfire Profiler]({{ page.baseurl }}cloud/project/project-integrate-blackfire.html) configuration for tracking and investigating issues for bottleneck issues in processes, method calls, queries, loads, and so on
* [New Relic APM]({{ page.baseurl }}cloud/project/new-relic.html) configuration for application and performance analysis
* [Fastly]({{ page.baseurl }}cloud/basic-information/cloud-fastly.html) configuration for CDN and caching
* [GitHub]({{ page.baseurl }}cloud/project/project-integrate-github.html) for managing your Git branches and code

## Configuration management {#config-mgmt}
We strongly recommend configuring settings, services, and integrations then using the `magento-cloud:scd-dump` command to manage the configurations. This command exports all of your modified configurations from database values into a file. You add this file to your code repository and push it for deployment across all environments. For details, see [Configuration Management]({{ page.baseurl }}cloud/live/sens-data-over.html).
