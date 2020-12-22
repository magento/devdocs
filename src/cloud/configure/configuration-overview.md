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

You can set up [multiple websites and stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html) in your Magento instance, creating and configuring them in your local branch and deploying the settings across your environments.

## Store configuration {#store}

The following options, tools, and features can be set up and configured in your store:

*  [Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) for caching and CDN in Staging and Production environments
*  [PayPal On-Boarding tool]({{ site.baseurl }}/cloud/live/paypal-onboarding.html) provides PayPal payment gateway checkout by connecting to your PayPal merchant account
*  [Magento B2B module]({{ site.baseurl }}/cloud/configure/setup-b2b.html) for Business to Business features, Pro plan only
*  [cron jobs]({{ site.baseurl }}/cloud/configure/setup-cron-jobs.html) details how to create and configure Magento cron jobs in all environments
*  [Multiple websites or stores]({{ site.baseurl }}/cloud/project/project-multi-sites.html) details how to create and configure multi-sites for your store, for example multiple locales including English, French, and Spanish
*  [Install, manage, and upgrade modules]({{ site.baseurl }}/cloud/howtos/install-components.html)
*  [Install a theme]({{ site.baseurl }}/cloud/howtos/custom-theme.html) for your site and store
*  Install Magento security extensions including [Google reCAPTCHA]({{ site.baseurl }}/guides/v2.3/security/google-recaptcha.html) and [Two-Factor Authentication]({{ site.baseurl }}/guides/v2.3/security/two-factor-authentication.html) to enhance secure access to the Magento Admin UI and storefront

## Configure your deploy: build hooks, services, and routes {#deploy}

After fully configuring your store, you should configure your deployment. This includes specific files to manage builds, deployments, services, and routes:

*  [.magento.app.yaml]({{ site.baseurl }}/cloud/project/magento-app.html) configures how the Magento application is built and deployed including services, hooks, cron jobs, and more
*  [routes.yaml]({{ site.baseurl }}/cloud/project/routes.html) configures how Magento processes an incoming URL for your Integration environment
*  [services.yaml]({{ site.baseurl }}/cloud/project/services.html) configures the services you use in your stores and sites including name, version, and allocated disk space

## Configure integrations {#integrations}

We also provide integrations with:

*  [New Relic]({{ site.baseurl }}/cloud/project/new-relic.html) configuration for application and performance analysis
*  [Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) configuration for CDN and caching
*  [Code collaboration and version control tools]({{site.baseurl}}/cloud/integrations/cloud-integrations.html) (GitHub, Bitbucket, and GitLab) for managing your Git branches and code

## Configuration management {#config-mgmt}

We strongly recommend configuring settings, services, and integrations then using specific commands to manage the configurations. This command exports all of your modified configurations from database values into a file. You add this file to your code repository and push it for deployment across all environments. For details, see [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html).
