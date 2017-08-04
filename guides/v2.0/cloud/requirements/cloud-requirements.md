---
layout: default
group: cloud
subgroup: 010_welcome
title: Requirements
menu_title: Requirements
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


This topic lists requirements for using Magento Enterprise Cloud Edition. Review them carefully before you start developing.

## Prerequisites {#cloud-req-pre}
Following are requirements you should already have:

*	Must know how to use [Git](https://git-scm.com/docs/user-manual.html){:target="_blank"}
*	Must know how to use [Composer](https://getcomposer.org/doc){:target="_blank"}
*	Must be familiar with Magento 2
*	Must have familiarity with [Continuous Integration Best Practices](https://www.google.com/search?q=Continuous+Integration+Best+Practices){:target="_blank"}
*	Understand the three types of systems and how they’re used: [integration]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-stage), [production]({{ page.baseurl }}cloud/reference/discover-arch.html#cloud-arch-prod)
*	Must set up a [local development environment]({{ page.baseurl }}cloud/before/before-setup-env-1_get-start.html)

    The integration environment (sometimes referred to as _Platform as a Service (PaaS))_ can help with integration testing but is not for developing for a production server. Among the differences are that, in integration, Magento is set for developer mode and not all directories are read-only.
*	Must have working [`repo.magento.com` credentials]({{ page.baseurl }}install-gde/prereq/connect-auth.html) in your account

{% include cloud/split-db-nosupport.md %}

## Required testing configurations {#cloud-req-test}
Before you test any custom code in your local Magento Enterprise Cloud Edition environment, you must do all of the following:

*	Set the Magento application docroot to `pub/index.php`
*	Set MySQL [`auto_increment_increment` to 3]({{ page.baseurl }}cloud/before/before-workspace-php.html#cloud-mysql)
*	Must test with the correct file permissions in production mode

	Correct permissions include no write access outside of `var`, `pub/static, pub/media`, and `app/etc`
*	Test with minification for HTML, JavaScript, and {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} enabled
*	Test with [Redis enabled for page cache and session cache]({{ page.baseurl }}config-guide/redis/config-redis.html)
*	Install the [Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html) {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %}
*	Test using [Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) for the page {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}

## Development and testing {#cloud-req-devtest}
For development and testing, we require the following:

*	You should test using either the integration or the staging environment (or both) on a regular basis throughout the project

	You can enable and test individual features or extensions on different environments to make sure they are working before merging
*	You must make sure that [`magento setup:install`]({{ page.baseurl }}install-gde/install/cli/install-cli-install.html)  and [`magento setup:upgrade`]({{ page.baseurl }}comp-mgr/cli/cli-upgrade.html) work and that any extensions and customizations compile correctly in production mode
*	You must test the application, including any extensions and customizations, against Varnish and/or Fastly well in advance of going live

	In particular, verify that content is being cached as expected
*	You must make sure the Fastly VCL is uploaded to Fastly
*	You must make sure that the Fastly SSL certificate is setup for your domain(s)
*	If you have any custom deploy hooks in integration, open a Support ticket to have them added to the staging and production deployment process
*	You should profile key flows and customizations using Blackfire.io

## Before you go live {#cloud-req-live}
Before you go live, you must:

*	Review [our documentation]({{ page.baseurl }}cloud/live/live.html) about going live
*	Schedule the Go Live Preparation call with the support team
*	Adjust DNS TTL in advance
*	Change the default {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} password
*	Optimize all images for the web
*	Enable minification for JS, CSS, and HTTP
*	Make sure that pages are being correctly cached in the page cache and Fastly

	*	Make sure the Fastly Extension is up-to-date
	*	Make sure the Fastly VCL is up-to-date
*	Make sure that the Fastly SSL certificate is setup for your domain(s)

## License and authentication requirements
You must have all of the following to use Magento Enterprise Cloud Edition:

*	[An account]({{ page.baseurl }}cloud/before/before-project-owner.html#cloud-first-acct)
*	An [authentication key]({{page.baseurl}}cloud/before/before-project-owner.html#cloud-owner-keys) for each user who needs to contribute to the project

Your Magento Enterprise Cloud Edition account must *authenticate* using any of the following:

*	GitHub
*	Bitbucket
*	Google
*	Create your own Cloud account



#### Related topics
*	[Git requirements]({{ page.baseurl }}cloud/requirements/cloud-requirements-git.html)
*	[License and authentication requirements]({{ page.baseurl }}cloud/requirements/cloud-requirements-license.html)
