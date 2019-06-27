---
group: cloud-guide
subgroup: 090_configure
title: Configure your store
menu_title: Configure your store
menu_order: 1
menu_node: parent
functional_areas:
  - Cloud
  - Configuration
---

The following information walks you through the options for configuring your store on your local and in all environments. You may need to configure files and settings in your local, pushing settings with your code. For specific services, you configure settings directly in Staging and Production environments.

You can set up [multiple websites and stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html) in your Magento instance, creating and configuring them in your local branch and deploying the settings across your environments.

## Store configuration {#store}

The following options, tools, and features can be set up and configured in your store:

* [Fastly CDN]({{ page.baseurl }}/cloud/cdn/configure-fastly.html) for caching, security, and image optimization services in Staging and Production environments
* [PayPal On-Boarding tool]({{ site.baseurl }}/guides/v2.1/cloud/live/paypal-onboarding.html) provides PayPal payment gateway checkout by connecting to your PayPal merchant account
* [cron jobs]({{ page.baseurl }}/cloud/configure/setup-cron-jobs.html) details how to create and configure Magento cron jobs in all environments
* [Multiple websites or stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html) details how to create and configure multi-sites for your store, for example multiple locales including English, French, and Spanish
* [Install, manage, and upgrade modules]({{ page.baseurl }}/cloud/howtos/install-components.html)
* [Install a theme]({{ page.baseurl }}/cloud/howtos/custom-theme.html) for your site and store
* Install Magento security extensions including [Google reCAPTCHA]({{ page.baseurl }}/security/google-recaptcha.html) and [Two-Factor Authentication]({{ page.baseurl }}/security/two-factor-authentication.html) to enhance secure access to the Magento Admin UI and storefront

## Configure your deployment: build hooks, services, and routes {#deploy}

After fully configuring your store, you should configure your deployment. This includes specific files to manage builds, deployments, services, and routes:

* [.magento.app.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) configures how the Magento application is built and deployed including services, hooks, cron jobs, and more
* [routes.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html) configures how Magento processes an incoming URL for your Integration environment
* [services.yaml]({{ page.baseurl }}/cloud/project/project-conf-files_services.html) configures the services you use in your stores and sites including name, version, and allocated disk space

## Configure integrations {#integrations}

We also provide integrations with:

* [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) configuration for tracking and investigating issues for bottleneck issues in processes, method calls, queries, loads, and so on
* [New Relic]({{ page.baseurl }}/cloud/project/new-relic.html) configuration for application and performance analysis
* [Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html) configuration for CDN and caching
* [GitHub]({{ page.baseurl }}/cloud/integrations/github-integration.html) for managing your Git branches and code

## Configuration management {#config-mgmt}

We strongly recommend configuring settings, services, and integrations then using specific commands to manage the configurations. This command exports all of your modified configurations from database values into a file. You add this file to your code repository and push it for deployment across all environments. For details, see [Configuration Management]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html).
