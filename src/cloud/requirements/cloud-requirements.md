---
group: cloud-guide
title: Technologies and requirements
functional_areas:
  - Cloud
  - Install
migrated_to: https://experienceleague.adobe.com/docs/commerce-cloud-service/user-guide/develop/overview.html
layout: migrated
---

This topic describes technologies, knowledge, accounts, and steps to complete when working with your {{site.data.var.ece}} code, environments, stores, and sites. If you are not experienced with a technology, links to information and resources are provided below to help get you started.

## Technologies {#cloud-req-pre}

The following technologies are requirements for developing and deploying your store code:

*  Git
*  Composer
*  {{site.data.var.ee}}
*  Continuous Integration
*  Architectures including Starter or Pro architecture

Below are advanced technologies that you should become familiar with:

*  [Bitbucket]({{ site.baseurl }}/cloud/integrations/bitbucket-integration.html) if you need a Git repo
*  [Fastly]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html) for CDN (Content Delivery Network) and caching (based on Varnish)
*  [GitHub]({{ site.baseurl }}/cloud/integrations/github-integration.html) if you need a Git repo
*  [GitLab]({{ site.baseurl }}/cloud/integrations/gitlab-integration.html) if you need a Git repo
*  [New Relic]({{ site.baseurl }}/cloud/project/new-relic.html) for performance testing

{% include cloud/split-db-nosupport.md %}

### What is Git {#git}

Git is the heart of all your code in repositories. Git acts as a version control system through branches from a parent. Multiple developers can work together in personal branches all merging into the same parent. You can work on features at the same time in multiple branches.

If you need help with Git, resource links are provided below.

*  [Git documentation](https://git-scm.com/documentation) and [videos](https://git-scm.com/videos) from the makers of Git
*  [Git cheatsheet](https://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf) and [quick guide](https://rogerdudler.github.io/git-guide/) from Roger Dudler
*  [Git video](https://www.youtube.com/watch?v=8KCQe9Pm1kg) with DevForge to understand how people use the repo and commands with a fun story

To get started with Git, [download](https://git-scm.com/downloads) and install Git on your local.

 {:.bs-callout-info}
In addition to Git requirements for valid branch names, {{site.data.var.ee}} adds two additional requirements:
The `/` character is not allowed. Branch names must be case-insensitively unique. In other words, if you have a branch named `CaSe`, you cannot create another branch named `case`.

To clone the Git repository, use the Secure Shell (SSH) access method. Do not use HTTPS. For a walk through of configuring SSH with your local, see [Enable SSH keys]({{ site.baseurl }}/cloud/before/before-workspace-ssh.html).

## Supported software and services {#cloud-arch-software}

{{site.data.var.ece}} uses:

*  Operating system: Debian GNU/Linux
*  Web server: [Nginx](https://glossary.magento.com/nginx)
*  Database: MySQL (MariaDB)
*  Content Delivery Network (CDN): Fastly CDN
*  Search: Elasticsearch, OpenSearch

You cannot upgrade the software, but you can [configure the following services]({{ site.baseurl }}/cloud/project/services.html#default-and-supported-services):

*  [PHP]({{ site.baseurl }}/cloud/project/magento-app.html)
*  [MySQL]({{ site.baseurl }}/cloud/project/services-mysql.html)
*  [Redis]({{ site.baseurl }}/cloud/project/services-redis.html)
*  [RabbitMQ]({{ site.baseurl }}/cloud/project/services-rabbit.html)
*  [Elasticsearch]({{ site.baseurl }}/cloud/project/services-elastic.html). Elasticsearch 7.11 and later  is not supported for {{site.data.var.ece}}.
*  [OpenSearch]({{ site.baseurl }}/cloud/project/services-opensearch.html). Adobe Commerce and Magento Open Source versions 2.3.7-p3, 2.4.3-p2, 2.4.4 and later support the OpenSearch service.

{:.bs-callout-info}
See [System requirements]({{ site.baseurl }}/guides/v2.4/install-gde/system-requirements.html) in the _Installation guide_ for recommended versions.

For Staging and Production environments, you use the Fastly CDN module for Magento 2 for CDN and caching services. See [Configure Fastly services]({{ site.baseurl }}/cloud/cdn/cloud-fastly.html#fastly-cdn-module-for-magento-2).

For information about configuring the software versions to use in your implementation, see the following {{ site.data.var.ece }} configuration files:

*  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/magento-app.html)
*  [`routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html)
*  [`services.yaml`]({{ site.baseurl }}/cloud/project/services.html)

## Requirements to get started {#requirements}

To get started as a developer in a {{site.data.var.ece}} project, you need to set up the following:

*  Get [`repo.magento.com` credentials]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html) in your account.

*  Get a [project invitation]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#users) from the Account Owner or a super user.

*  Set up a [local Docker development environment]({{ site.baseurl }}/cloud/docker/docker-development.html).

   {{ site.data.var.ece }} environments are **Read Only**, including all Starter environments and all Pro Integration, Staging, and Production environments. In a local development environment, you write and test code before pushing it to an Integration environment for further testing, followed by deployment to Staging and Production.

   In the local development environment, you develop in branches to add modules, extensions, third-party integrations, and configurations. We recommend reading over develop and deploy process for your [Starter]({{ site.baseurl }}/cloud/architecture/starter-develop-deploy-workflow.html) or [Pro]({{ site.baseurl }}/cloud/architecture/pro-develop-deploy-workflow.html) plan.

## Project configurations {#cloud-req-test}

{:.bs-callout-info}
{{ site.data.var.ece }} deploys the application in [Production mode]({{ site.baseurl }}{{ site.gdeurl }}/config-guide/bootstrap/magento-modes.html#production-mode) by default.
{{ site.data.var.ece }} does not support `Developer` mode.

Before you test any custom code in your local {{site.data.var.ee}} environment, you must do all of the following:

*  For Pro, set the database [`auto_increment_increment` to 3]({{ site.baseurl }}/cloud/docker/docker-containers.html#service-containers) when you generate the Docker configuration file

*  Test with the correct file permissions in [Production mode]({{ site.baseurl }}/cloud/docker/docker-mode-production.html)

   Correct permissions only allow write access to `var`, `pub/static, pub/media`, and `app/etc`

*  Test with minification for HTML, JavaScript, and CSS enabled. See [Static content deployment strategies]({{ site.baseurl }}/cloud/env/variables-global.html#skip_html_minification)

*  Test with [Redis enabled for page cache and session cache]({{ site.baseurl }}/guides/v2.3/config-guide/redis/config-redis.html)

*  Test using [Varnish]({{ site.baseurl }}/guides/v2.3/config-guide/varnish/config-varnish.html) for the page [cache](https://glossary.magento.com/cache)

## Development and testing {#cloud-req-devtest}

For development and testing, Adobe recommends the following:

*  Test your site in an Integration (development) and Staging (near-production) environment as you complete modifications

   You can enable and test individual features, new extensions, and third-party integrations on different environments before you merge into a single environment.

*  Verify [`magento setup:install`]({{ site.baseurl }}/guides/v2.3/install-gde/install/cli/install-cli-install.html) and [`magento setup:upgrade`](https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/implementation/perform-upgrade.html) commands work during the build and deploy process and that any extensions and customizations compile correctly in [Production mode]({{ site.baseurl }}/guides/v2.3/config-guide/bootstrap/magento-modes.html#production-mode)

   You can set an environment variable or enter a CLI command for this specific mode.

*  Fully [test your site]({{ site.baseurl }}/cloud/live/stage-prod-test.html) in Staging as a merchant and as a customer before deployment to Production
*  [Set up Fastly]({{ site.baseurl }}/cloud/cdn/configure-fastly.html) and verify that the Fastly Varnish Configuration Language (VCL) is uploaded
*  Before you begin the site launch process, submit a support ticket to provide all storefront domains and subdomains for Staging and Production environments. This information is required to provision SSL/TLS certificates for each environment. See [Information that you need to launch your site]({{ site.baseurl }}/cloud/live/live.html#prerequisites-for-site-launch).
*  For custom deploy hooks in Integration, submit a [Support ticket](https://support.magento.com/hc/en-us/articles/360000913794#support-tickets) to add the hooks to the Staging and Production deployment process.

## License and authentication requirements

When you purchase a {{site.data.var.ece}} subscription, Adobe creates an account for the License Owner and sends an invitation to the License Owner email address with account verification and login instructions. The License Owner has the Account owner role with permission to create user accounts and assign roles for technical staff, consultants, and Adobe partners involved in the code and production of the stores to the project.

To work with and deploy stores, you need the following:

*  A [{{site.data.var.ece}} account]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#cloud-first-acct) already created or created through an invitation
*  [Project invitation]({{ site.baseurl }}/cloud/onboarding/onboarding-tasks.html#users) for contributing developers from the Account Owner or a super user
*  [Authentication keys]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/connect-auth.html) for each user who contributes to the project

Your {{site.data.var.ee}} account must *authenticate* using any of the following:

*  GitHub
*  Bitbucket
*  Google
*  Create your own Cloud account
