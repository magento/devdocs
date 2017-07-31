---
layout: default
group: cloud
subgroup: 160_live
title: Build and deploy on local
menu_title: Build and deploy on local
menu_order: 90
menu_node:
version: 2.0
github_link: cloud/live/live-sanity-check.md
---

You should complete development, prepare and push code, with a full build and deploy process on your local for an active [Integration environment]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-int) before fully deploying and testing to [Staging]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-stage}}) then [Production]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-prod}}). For more information on the full five step process, see the [Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html).

These tasks walk through building and deploying on your local, allowing you to test the process and expose any issues early for debugging. Fully testing builds and deploys along with full site testing can reduce the risk of issues or delays dfor your final site deployment.

<div class="bs-callout bs-callout-warning" markdown="1">
We highly recommend completing your testing in an Integration active environment and the Staging environment. Only complete final tests for going live in the Production environment. Your Staging environment is best for testing with code, data, and services including Fastly, New Relic, and others. To complete heavy testing, you should deploy all code from Integration Master branch and data from Production to Staging. </div>

## Push code to the Cloud server
Before you continue, make sure you push all current code to the remote Cloud server so that, in {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} of issues, you can recover the state of the Magento application.

To prepare your code and branch:

{% include cloud/cli-get-started.md %}

To push code to your remote server:

1.	If you haven't already done so, change to your project root directory.
2.	Enter the following commands to complete code commits:

		git add -A && git commit -m "<comment>"
		git push origin <branch name>
3.	Wait for deployment to complete.

## Build phase
During the [build phase]({{ page.baseurl }}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build), we perform the following tasks:

*	Apply patches distributed to all Magento Enterprise Cloud Edition customers
*	Apply patches we provided specifically to you
*	Enable all modules
*	Compile code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration

Before you continue, you must know the file system path to any patch we provided specifically to you. Typically, hot fixes are in the `<Magento root dir>/m2-hotfixes` directory.

To build your site:

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

	If patches are present, output from this command is similar to the patches command.
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

If errors display, debug them if possible or open a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to get additional assistance.

We strongly recommend you do all your testing in an integration or staging environment only, and _not_ in production.

## Deploy phase
We highly recommend having Magento already installed prior to deployment. During the [deployment phase]({{ page.baseurl }}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook), we perform the following tasks:

*	Install the Magento application if needed
*	If the Magento application is installed, upgrade components
*	Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}
*	Set the Magento application for [`production`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production) mode

To deploy your site:

1.	If you haven't done so already, log in as or switch to the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your project root directory.
3.	Enter the following command:

		php bin/magento setup:upgrade

	We highly recommend having Magento already installed. If you haven't installed the Magento application yet, use the [`magento setup:install`]({{ page.baseurl }}install-gde/install/cli/install-cli.html) command instead. Be advised, you may encounter issues with enables modules on a fresh installation.
4.	Clean the Magento cache:

		php bin/magento cache:clean
5.	Set the Magento application for [production mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production):

		php bin/magento deploy:mode:set production

If errors display, debug them if possible or open a [support ticket]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html) to get additional assistance.

We strongly recommend you do all your testing in an active Integration and Staging environment. Staging provides a near-production environment without being fully live to the public with all services and features available.

#### Next step
[Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html)
