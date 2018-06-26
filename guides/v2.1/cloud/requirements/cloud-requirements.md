---
group: cloud
title: Technologies and requirements
version: 2.1
github_link: cloud/requirements/cloud-requirements.md
redirect_from:
  - /guides/v2.0/cloud/discover-tools.html
  - /guides/v2.1/cloud/discover-tools.html
  - /guides/v2.2/cloud/discover-tools.html
  - /guides/v2.0/cloud/cloud-requirements.html
  - /guides/v2.1/cloud/cloud-requirements.html
  - /guides/v2.2/cloud/cloud-requirements.html
  - /guides/v2.0/cloud/cloud-requirements-git.html
  - /guides/v2.1/cloud/cloud-requirements-git.html
  - /guides/v2.2/cloud/cloud-requirements-git.html
  - /guides/v2.0/cloud/cloud-requirements-license.html
  - /guides/v2.1/cloud/cloud-requirements-license.html
  - /guides/v2.2/cloud/cloud-requirements-license.html
  - /guides/v2.0/cloud/requirements/cloud-requirements-license.html
  - /guides/v2.1/cloud/requirements/cloud-requirements-license.html
  - /guides/v2.2/cloud/requirements/cloud-requirements-license.html
  - /guides/v2.0/cloud/requirements/cloud-requirements-git.html
  - /guides/v2.1/cloud/requirements/cloud-requirements-git.html
  - /guides/v2.2/cloud/requirements/cloud-requirements-git.html
functional_areas:
  - Cloud
  - Install
---

This topic describes technologies, knowledge, accounts, and steps to complete when working with your {{site.data.var.ece}} code, environments, and store(s) and site(s). If you are not experienced with a technology, we provide additional links and information to get you started.

## Technologies {#cloud-req-pre}
The following technologies are requirements for developing and deploying your store code:

*	Git
*	Composer
*	Magento 2
*	Continuous Integration
*	Architectures including Starter or Pro architecture

Here are some advanced technologies we recommend getting familiar with:

* [Fastly]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html) for CDN and caching (based on Varnish)
* [Blackfire Profiler]({{ page.baseurl }}/cloud/project/project-integrate-blackfire.html) for performance testing
* [New Relic APM]({{ page.baseurl }}/cloud/project/new-relic.html) for performance testing
* [GitHub]({{ page.baseurl }}/cloud/project/project-integrate-github.html) if you need a Git repo
* [Bitbucket]({{ page.baseurl }}/cloud/project/bitbucket-integration.html) if you need a Git repo

{% include cloud/split-db-nosupport.md %}

### What is Git {#git}
Git is the heart of all your code in repositories. It acts as a version control system through branches from a parent. Multiple developers can work together in personal branches all merging into the same parent. You can also work on features at the same time in multiple branches.

We hope you have a good working knowledge of Git. Need some help? Don't worry, we have you covered with some of our favorite links and information. We'll also include a Git guide to branching and developing soon.

*	[Git documentation](https://git-scm.com/documentation){:target="\_blank"} and [videos](https://git-scm.com/videos){:target="\_blank"} from the makers of Git
*	[Git cheatsheet](http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf){:target="\_blank"} and [quick guide](http://rogerdudler.github.io/git-guide/){:target="\_blank"} from Roger Dudler
*	[Git video](https://www.youtube.com/watch?v=8KCQe9Pm1kg){:target="\_blank"} with DevForge to understand how people use the repo and commands with a fun story

To get started with Git, you should have [Git installed](https://git-scm.com/downloads){:target="\_blank"} on your local.

<div class="bs-callout bs-callout-info" id="info">
  <p>In addition to Git's requirements for <a href="https://www.kernel.org/pub/software/scm/git/docs/git-check-ref-format.html">valid branch names</a>, {{site.data.var.ee}} adds two additional requirements:</p>
  <ul><li>The <code>/</code> character isn't allowed.</li>
  	<li>Branch names must be case-insensitively unique. In other words, if you have a branch named <code>_CaSe_</code>, you cannot create another branch named <code>_case_</code>.</li></ul>
</div>

You must use Secure Shell (SSH) and not HTTPS to connect to the Git repository. We walk you through the process of setting this up with your local.

## Supported software versions {#cloud-arch-software}
{{site.data.var.ece}} uses:

*	Operating system: Debian GNU/Linux 8 (jessie)
*	Web server: {% glossarytooltip b14ef3d8-51fd-48fe-94df-ed069afb2cdc %}nginx{% endglossarytooltip %} 1.8

This software is *not* upgradable but versions for the following software is configurable:

* [PHP]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) 5.5, 5.6, and 7.0
* [MySQL]({{ page.baseurl }}/cloud/project/project-conf-files_services-mysql.html) 5.6 and 5.7
* [Redis]({{ page.baseurl }}/cloud/project/project-conf-files_services-redis.html) 2.8 and 3.0
* [RabbitMQ]({{ page.baseurl }}/cloud/project/project-conf-files_services-rabbit.html) 3.5
* [Elasticsearch]({{ page.baseurl }}/cloud/project/project-conf-files_services-elastic.html) 1.4, 1.7, and 2.4

For Staging and Production, you will use Fastly for CDN and caching. We recommend installing Fastly module 1.2.33 or later. For details, see [Fastly in Cloud]({{ page.baseurl }}/cloud/basic-information/cloud-fastly.html).

For detailed information on supported versions and extensions, see the following information. These files allow you to configure software versions you want to use in your implementation.

*	[`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)

## Requirements to get started {#requirements}
To get started as a developer in a {{site.data.var.ece}} project, you need to set up the following:

*	Set up a [local development environment]({{ page.baseurl }}/cloud/before/before-workspace.html). Your local workspace works best as a virtual system (VM or container) with all prerequisites installed and the project `master` Git branch cloned. You'll develop in branches to add modules, extensions, 3rd party integrations, and configurations. We recommend reading over develop and deploy process for your [Starter]({{ page.baseurl }}/cloud/basic-information/starter-develop-deploy-workflow.html) or [Pro]({{ page.baseurl }}/cloud/architecture/pro-develop-deploy-workflow.html) plan.
*	Get [`repo.magento.com` credentials]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) in your account.
*	Get a [project invitation]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html#users) from the Project Owner or a super user.

We walk you through everything you need to do and know.

## Magento configurations {#cloud-req-test}
Before you test any custom code in your local {{site.data.var.ee}} environment, you must do all of the following:

*	For Pro, set the database [`auto_increment_increment` to 3]({{ page.baseurl }}/cloud/before/before-workspace-magento-prereqs.html#database)
*	Test with the correct file permissions in [PRODUCTION mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode)

	Correct permissions only allow write access to `var`, `pub/static, pub/media`, and `app/etc`
*	Test with minification for HTML, JavaScript, and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} enabled
*	Test with [Redis enabled for page cache and session cache]({{ page.baseurl }}/config-guide/redis/config-redis.html)
*	Install and configure [Fastly]({{ page.baseurl }}/cloud/access-acct/fastly.html)
*	Test using [Varnish]({{ page.baseurl }}/config-guide/varnish/config-varnish.html) for the page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}

## Development and testing {#cloud-req-devtest}
For development and testing, we recommend the following:

*	Test your site in an Integration (development) and Staging (near-production) environment as you complete modifications

	You can enable and test individual features, new extensions, and 3rd party integration on different environments prior to merging into a single environment.
*	Verify [`magento setup:install`]({{ page.baseurl }}/install-gde/install/cli/install-cli-install.html) and [`magento setup:upgrade`]({{ page.baseurl }}/comp-mgr/cli/cli-upgrade.html) commands work during the build and deploy process and that any extensions and customizations compile correctly in [Production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode)

    You can set an environment variable or enter a CLI command for this specific mode.
*	Fully [test your site]({{ page.baseurl }}/cloud/live/stage-prod-test.html) in Staging as a merchant and customer prior to Production deployment
*	Verify the Fastly VCL is uploaded to Fastly
*	Send a ticket with all storefront domains when going live (to be added to the shared SSL (HTTPS) certificate)
*	For custom deploy hooks in Integration, open a Support ticket to have them added to the Staging and Production deployment process
*	Profile key flows and customizations using Blackfire.io

## License and authentication requirements
The Account Owner creates the initial {{site.data.var.ece}} account with a purchased subscription. This owner should invite all technical staff, consultants, and Magento partners involved in the code and production of the stores to the project. The invitation provides access to the Git code, environments, and ticketing for the project.

To work with and deploy stores, you need the following:

*	[Magento Commerce (Cloud) account]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html#cloud-first-acct) already created or created via an invitation
*	[Project invitation]({{ page.baseurl }}/cloud/onboarding/onboarding-tasks.html#users) for contributing developers from the Account Owner or a super user
*	[Magento authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html) for each user who contributes to the project

Your {{site.data.var.ee}} account must *authenticate* using any of the following:

*	GitHub
*	Bitbucket
*	Google
*	Create your own Cloud account
