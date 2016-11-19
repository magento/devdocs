---
layout: default
group: cloud
subgroup: 02_requirements
title: Magento Enterprise Cloud Edition requirements
menu_title: Magento Enterprise Cloud Edition requirements
menu_order: 1
menu_node: parent
version: 2.0
github_link: cloud/cloud-requirements.md
---


## Magento Enterprise Cloud Edition requirements
This topic lists requirements for using Magento Enterprise Cloud Edition. Review them carefully before you start developing.

*	[Prerequisites](#cloud-req-pre)
*	[Required testing configurations](#cloud-req-test)
*	[Development and testing](#cloud-req-devtest)
*	[Before you go live](#cloud-req-live)
*	[Git requirements]({{ page.baseurl }}cloud/cloud-requirements-git.html)
*	[License and authentication requirements]({{ page.baseurl }}cloud/cloud-requirements-license.html)

### Prerequisites {#cloud-req-pre}
Following are requirements you should already have:

*	Must know how to use Git
*	Must know how to use Composer
*	Must be familiar with Magento 2
*	Must have familiarity with basic Continuous Integration Best Practices
*	Understand the three types of systems and how they’re used: [integration]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int), [staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage), [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod)
*	Must set up a [local development environment]({{ page.baseurl cloud/access-acct/set-up-env.html}})

    The integration environment (sometimes referred to as _Platform as a Service (PaaS))_ can help with integration testing but is not for developing for a production server. Among the differences are that, in integration, Magento is set for developer mode and not all directories are read-only.
*	Must have working [`repo.magento.com` credentials]({{ page.baseurl }}install-gde/prereq/connect-auth.html) in your account

### Required testing configurations {#cloud-req-test}
Before you test any custom code in any Magento Enterprise Cloud Edition environment, you must do all of the following:

*	Set the Magento application cocroot to `pub/index.php` 
*	Set MySQL [`auto_increment_increment` to 3]({{ page.baseurl }}cloud/before/before-workspace-php.html#cloud-mysql)
*	Must test with the correct file permissions in production mode

	Correct permissions include no write access outside of `var`, `pub/static, pub/media`, and `app/etc` 
*	Test with minification for HTML, JavaScript, and CSS enabled
*	Test with [Redis enabled for page cache and session cache]({{ page.baseurl }}config-guide/redis/config-redis.html)
*	Install the [Fastly]({{ page.baseurl }}cloud/access-acct/fastly.html) extension
*	Test using [Varnish]({{ page.baseurl }}config-guide/varnish/config-varnish.html) for the page cache

### Development and testing {#cloud-req-devtest}
For development and testing, we require the following:

*	You must push code to the staging or production environment before the database is uploaded the first time
*	You should test using either the integration or the staging environment (or both) on a regular basis throughout the project

	You can enable and test individual features or extensions on different environments to make sure they are working before merging
*	You must make sure that `composer:setup`  and `composer:install` work and that any extensions and customizations compile correctly in production mode
*	You must test the application, including any extensions and customizations, against Varnish and/or Fastly well in advance of going live

	In particular, verify that content is being cached as expected 
*	You must make sure the Fastly VCL is uploaded to Fastly 
*	You must make sure that the Fastly SSL certificate is setup for your domain(s)
*	If you have any custom deploy hooks in integration, open a Support ticket to have them added to the staging and production deployment process
*	You should profile key flows and customizations using Blackfire.io

### Before you go live {#cloud-req-live}
Before you go live, you must:

*	Schedule the Go Live Preparation call with the support team
*	Adjust DNS TTL in advance 
*	Change the default Magento Admin password
*	Optimize all images for the web
*	Enable minification for JS, CSS, and HTTP 
*	Make sure that pages are being correctly cached in the page cache and Fastly 

	*	Make sure the Fastly Extension is up-to-date
	*	Make sure the Fastly VCL is up-to-date
*	Make sure that the Fastly SSL certificate is setup for your domain(s)

#### Related topics
*	[Git requirements]({{ page.baseurl }}cloud/cloud-requirements-git.html)
*	[License and authentication requirements]({{ page.baseurl }}cloud/cloud-requirements-license.html)


