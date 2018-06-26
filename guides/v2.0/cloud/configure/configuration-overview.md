---
group: cloud
subgroup: 090_configure
title: Configure your store
menu_title: Configure your store
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/configure/configuration-overview.md
functional_areas:
  - Cloud
  - Configuration
---

The following information walks you through the options for configuring your store on your local and in all environments. You may need to configure files and settings in your local, pushing settings with your code. For specific services, you configure settings directly in Staging and Production environments.

You can set up [multiple websites and stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html) in your Magento instance, creating and configuring them in your local branch and deploying the settings across your environments.

## Store configuration {#store}
The following options, tools, and features can be set up and configured in your store:

* [Fastly]({{ page.baseurl }}/cloud/access-acct/fastly.html) for caching and CDN in Staging and Production environments
* [cron jobs]({{ page.baseurl }}/cloud/configure/setup-cron-jobs.html) details how to create and configure Magento cron jobs in all environments
* [Multiple websites or stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html) details how to create and configure multi-sites for your store, for example multiple locales including English, French, and Spanish
* [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html) mo
* [Install a theme]({{ page.baseurl }}/cloud/howtos/custom-theme.html) for your site and store

## Configure your deploy: build hooks, services, and routes {#deploy}
After fully configuring your store, you should configure your deployment. This includes specific files to manage builds, deployments, services, and routes:

* [.magento.app.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) configures how the Magento application is built and deployed including services, hooks, cron jobs, and more
* [routes.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html) configures how Magento processes an incoming URL for your Integration environment
* [services.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_services.html) configures the services you use in your stores and sites including name, version, and allocated disk space

## Configure integrations {#integrations}
We also provide integrations with:

* [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) configuration for tracking and investigating issues for bottleneck issues in processes, method calls, queries, loads, and so on
* [New Relic APM]({{ page.baseurl }}/cloud/project/new-relic.html) configuration for application and performance analysis in 3 instances or environments
* [Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html) configuration for CDN and caching
* [GitHub]({{ page.baseurl }}/cloud/project/project-integrate-github.html) for managing your Git branches and code
