---
layout: default
group: cloud
subgroup: 40_live
title: Build and deploy before pushing to staging or production
menu_title: Build and deploy before pushing to staging or production
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/live/live-sanity-check.md
---

This topic discusses tasks we strongly recommend you perform before pushing code from an [integration system]({{ page.baseurl}}cloud/discover-arch.html#cloud-arch-int) to either [staging]({{ page.baseurl}}cloud/discover-arch.html#cloud-arch-stage}}) or [production]({{ page.baseurl}}cloud/discover-arch.html#cloud-arch-prod}}). Failure to perform these tasks can result in additional debugging and delays in testing your site.

As discussed in [Deployment process]({{ page.baseurl }}cloud/discover-deploy.html), building and deployment is a five-phase process. This topic discusses how to simulate build and deploy steps locally, which can expose issues early in your development process when they're easier to debug and fix.

<div class="bs-callout bs-callout-warning" markdown="1">
Do your testing in an integration or staging environment _only_. Do not do any testing in production; the production environment is your live site; it shouldn't be used for testing.

Your staging environment is better for testing because it has Fastly, New Relic, and so on. Your integration environment typically does not have Fastly or New Relic.
</div>

## Step 1: Push code to the Cloud server
Before you continue, make sure you push all current code to the remote Cloud server so that, in event of issues, you can recover the state of the Magento application.

### Get started

{% collapsible To get started: %}

{% include cloud/cli-get-started.md %}

{% endcollapsible %}

### Push code to the remote server

{% collapsible To push code to your remote server: %}

1.	If you haven't already done so, change to your project root directory.
2.	Enter the following commands:

		git add -A && git commit -m "<comment>"
		git push origin <branch name>
3.	Wait for deployment to complete.

{% endcollapsible %}

## Step 2: Build phase
During the [build phase]({{ page.baseurl }}cloud/discover-deploy.html#cloud-deploy-over-phases-build), we perform the following tasks:

*	Apply patches distributed to all Magento Enterprise Cloud Edition customers
*	Apply patches we provided specifically to you
*	Enable all modules
*	Compile code and the dependency injection configuration

Before you continue, you must know the file system path to any patch we provided specifically to you. Typically, hot fixes are in the `<Magento root dir>/m2-hotfixes` directory.

{% collapsible To build your site: %}

1.	Apply patches distributed to all Magento Enterprise Cloud Edition customers.

	Enter the following command from the project root directory:

		php vendor/magento/magento-cloud-configuration/patch.php

	Output includes the following:

		[2016-11-30 15:05:15] Copying static.php to front-static.php
		[2016-11-30 15:05:15] Command:git apply /var/www/html/magento2/vendor/magento/magento-cloud-configuration/patches/000-MAGETWO-57719-2.1.2.patch
		[2016-11-30 15:05:15] Status:0
		[2016-11-30 15:05:15] Output:array (
		)
		[2016-11-30 15:05:15] Command:git apply /var/www/html/magento2/vendor/magento/magento-cloud-configuration/patches/MAGETWO-52660-scd-improvement.patch
		[2016-11-30 15:05:15] Status:0
		[2016-11-30 15:05:15] Output:array (
		)

		... more ...
							)
3.	Apply hot fixes and other patches provided to you:

		git apply <path to patch>

	For example, to apply hot fixes:

		git apply m2-hotfixes/<patch file name>

	If the `m2-hotfixes` directory is empty, skip this step.

	If patches are present, output from this command is similar to the preceding command.
4.	Enable all modules:

		php bin/magento module:enable --all

5.	Compile code and the dependency injection configuration:

		php bin/magento  setup:di:compile

	This command can take several minutes to complete.

	Messages similar to the following are displayed:

		Compilation was started.
		0% 1 sec 54.0 MiB%message% 0/7 [>---------------------------] 
		0% 1 sec 54.0 MiBProxies code generation... 
		0/7 [>---------------------------]   
		0% 1 sec 54.0 MiB
		Proxies code generation... 1/7 [====>-----------------------]  14% 1 sec 58.0 MiB
		Repositories code generation... 1/7 [====>-----------------------]  14% 1 sec 58.0 MiB
		Repositories code generation... 2/7 [========>-------------------]  28% 30 secs 176.0 MiB

		... more ...
		Interception cache generation... 7/7 [============================] 100% 5 mins 324.0 MiB

If errors display, debug them if possible or open a [support ticket]({{ page.baseurl }}cloud/get-help.html) to get additional assistance.

We strongly recommend you do all your testing in an integration or staging environment only, and _not_ in production.

{% endcollapsible %}

## Step 3: Deploy phase
During the [deployment phase]({{ page.baseurl }}cloud/discover-deploy.html#cloud-deploy-over-phases-hook), we perform the following tasks:

*	Installs the Magento application if it isn't already
*	If the Magento application is installed, upgrades components
*	Clears the cache
*	Sets the Magento application for [`production`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production) mode

{% collapsible To deploy your site: %}

1.	If you haven't done so already, log in as or switch to the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your project root directory.
3.	Enter the following command:

		php bin/magento setup:upgrade

	(If you haven't installed the Magento application yet, use the [`magento setup:install`]({{ page.baseurl }}install-gde/install/cli/install-cli.html) command instead.)
4.	Clean the Magento cache:

		php bin/magento cache:clean
5.	Set the Magento application for [production mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production):

		php bin/magento deploy:mode:set production

If errors display, debug them if possible or open a [support ticket]() to get additional assistance.

We strongly recommend you do all your testing in an integration or staging environment only, and _not_ in production.

{% endcollapsible %}

#### Next step
[Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html)
