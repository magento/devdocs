---
layout: default
group: cloud
subgroup: 010_welcome
title: Requirements for Cloud
menu_title: Requirements for Cloud
menu_order: 40
menu_node:
version: 2.0
github_link: cloud/cloud-requirements.md
redirect from:
  -  /guides/v2.0/cloud/cloud-requirements-license.html
  -  /guides/v2.1/cloud/cloud-requirements-license.html
  -  /guides/v2.1/cloud/cloud-requirements-license.html
  -  /guides/v2.0/cloud/requirements/cloud-requirements-git.html
  -  /guides/v2.1/cloud/requirements/cloud-requirements-git.html
  -  /guides/v2.1/cloud/requirements/cloud-requirements-git.html
---

The following requirements detail technologies, knowledges, accounts, and steps to complete when working with your Magento Commerce code and store in the Cloud.

## Prerequisite technologies and knowledges {#cloud-req-pre}
The following technologies are requirements for developing and deploying your store code:

*	Experienced with [Git](https://git-scm.com/docs/user-manual.html){:target="_blank"} | [videos](https://git-scm.com/videos){:target="_blank"}
*	Experienced with [Composer](https://getcomposer.org/doc){:target="_blank"}
*	Familiar with [Magento 2]({{ page.baseurl }}cloud/bk-cloud.html#magento2)
*	Familiar with [Continuous Integration Best Practices](https://www.google.com/search?q=Continuous+Integration+Best+Practices){:target="_blank"}
*	Understand [cloud architecture]({{ page.baseurl }}cloud/reference/discover-arch.html) for Magento Commerce
*	Set up a [local development environment]({{ page.baseurl }}cloud/before/before-workspace.html)

  Your local workspace works best as a virtual system (VM or container) with all prerequisities installed and the project `master` Git branch cloned. Develop in branches to add modules, extensions, 3rd party integrations, and configurations.
*	Obtain [`repo.magento.com` credentials]({{ page.baseurl }}install-gde/prereq/connect-auth.html) in your account
*	Obtain an invite by the Account Owner or a super user to the project

{% include cloud/split-db-nosupport.md %}

## Testing configurations {#cloud-req-test}
Before you test any custom code in your local Magento Commerce environment, you must do all of the following:

*	Set the database [`auto_increment_increment` to 3]({{ page.baseurl }}cloud/before/before-workspace-magento-prereqs.html#database)
*	Test with the correct file permissions in [PRODUCTION mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production)

	Correct permissions only allow write access to `var`, `pub/static, pub/media`, and `app/etc`
*	Test with minification for HTML, JavaScript, and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} enabled
*	Test with [Redis enabled for page cache and session cache]({{ page.baseurl }}config-guide/redis/config-redis.html)
*	Install and configure [Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html)
*	Test using [Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) for the page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}

## Development and testing {#cloud-req-devtest}
For development and testing, we recommend the following:

*	Test your site in an Integration (development) and Staging (near-production) environment as you complete modifications

	You can enable and test individual features, new extensions, and 3rd party integration on different environments prior to merging into a single environment.
*	Verify [`magento setup:install`]({{ page.baseurl }}install-gde/install/cli/install-cli-install.html) and [`magento setup:upgrade`]({{ page.baseurl }}comp-mgr/cli/cli-upgrade.html) commands work during the build and deploy process and that any extensions and customizations compile correctly in [PRODUCTION mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production)

  You can set an environment variable or enter a CLI command for this specific mode.
*	Fully [test your site]({{ page.baseurl }}cloud/live/stage-prod-test.html) in Staging as a merchant and customer prior to Production deployment
*	Verify the Fastly VCL is uploaded to Fastly
*	Send a ticket with all storefront domains when going live (to be added to the shared SSL (HTTPS) certificate)
*	For custom deploy hooks in Integration, open a Support ticket to have them added to the Staging and Production deployment process
*	Profile key flows and customizations using Blackfire.io

## Before you go live {#cloud-req-live}
For full details on going live, see our [checklist and guide]({{ page.baseurl }}cloud/live/live.html).

*	Schedule the Go Live Preparation call with the support team
*	Adjust DNS TTL in advance
*	Change the default {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} password
*	Optimize all images for the web
*	Enable minification for JS, CSS, and HTTP
*	Verify pages are being correctly cached in the page cache and Fastly

	*	Verify the Fastly Extension is up-to-date
	*	Verify the Fastly VCL is up-to-date
*	Verify that the Fastly SSL certificate is setup for your domain(s)

## License and authentication requirements
The [Account Owner]({{page.baseurl}}cloud/before/before-project-owner.html) creates the initial Magento Commerce account with a purchased subscription. This owner should invite all technical staff, consultants, and Magento partners involved in the code and production of the stores to the project. The invitation provides access to the Git code, environments, and ticketing for the project.

To work with and deploy stores, you must have all of the following to use Magento Commerce:

*	[An account]({{ page.baseurl }}cloud/before/before-project-owner.html#cloud-first-acct) already created or created via an invitation
*	An [authentication key]({{page.baseurl}}cloud/before/before-project-owner.html#cloud-owner-keys) for each user who needs to contribute to the project

Your Magento Commerce account must *authenticate* using any of the following:

*	GitHub
*	Bitbucket
*	Google
*	Create your own Cloud account

#### Related topics
*	[Cloud Architexture]({{ page.baseurl }}cloud/reference/discover-arch.html)
*	[Develop and Deploy Workflow]({{ page.baseurl }}cloud/welcome/discover-workflow.html)
