---
layout: default
group: cloud
subgroup: 160_deploy
title: Build and deploy on local
menu_title: Build and deploy on local
menu_order: 30
menu_node:
version: 2.0
github_link: cloud/live/live-sanity-check.md
---

Before pushing your code to [Staging]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-stage}}) or [Production]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-prod}}), you should fully build on your local. Fully testing builds and deploys along with full site testing can reduce the risk of issues or delays for your final site deployment, and expose any issues early for debugging.

These tasks walk through:

* Complete development on your local
* Complete a full build and deploy process on your local (deploys to the associated active [Integration environment]({{ page.baseurl}}cloud/reference/discover-arch.html#cloud-arch-int))
* Test fully before continuing deployment to Staging

For more information on the full five step process, see the [Deployment process]({{ page.baseurl }}cloud/reference/discover-deploy.html).

<div class="bs-callout bs-callout-warning" markdown="1">
We highly recommend completing your testing in an Integration active environment and the Staging environment. Only complete final tests for going live in the Production environment. Your Staging environment is best for testing with code, data, and services including Fastly, New Relic, and others.
</div>

## Update composer if you add extensions {#composer}
If you modified your [composer.json]({{ page.baseurl }}cloud/cloud-composer.html) to add modules, we recommend running the `composer update` command in a terminal. This command updates any dependencies in the `composer.lock`. During the build phase, we run `composer install` on a fresh clone of your Git branch of code to retrieve the latest dependencies.

## Push code to Git and Cloud {#push}
Before you continue, make sure you push all current code to the remote Cloud server so that, in {% glossarytooltip c57aef7c-97b4-4b2b-a999-8001accef1fe %}event{% endglossarytooltip %} of issues, you can recover the state of the Magento application.

To prepare your code and branch:

{% include cloud/cli-get-started.md %}

To push code to your remote environment:

1.	If you haven't already, change to your project root directory.
2.	Enter the following commands to complete code commits in a terminal:

		git add -A && git commit -m "<comment>"
		git push origin <branch name>
3.	The build and deploy phases begin. Wait for the deployment to complete.

## Build phase {#build}
During the [build phase]({{ page.baseurl }}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build), we perform the following tasks:

*	Apply patches distributed to all Magento Commerce (Cloud) accounts
*	Apply patches we provided specifically to you
*	Enable all modules to build
*	Compile code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration

The build also checks for a [configuration file]({{page.baseurl}}cloud/live/sens-data-over.html). If the file exists, the static file deployment is also completed during the build stage. If not, it's completed in the deployment stage.

Before you continue, you must know the file system path to any patch we provided specifically to you. Typically, hot fixes are in the `<Magento root dir>/m2-hotfixes` directory.

To build your site:

1.	Apply patches distributed to all Magento Commerce (Cloud) accounts.

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
2.	Apply hot fixes and other patches provided to you:

		git apply <path to patch>

	For example, to apply hot fixes:

		git apply m2-hotfixes/<patch file name>

	If the `m2-hotfixes` directory is empty, skip this step.

	If patches are present, output from this command is similar to the patches command.
3.	Enable all modules:

		php bin/magento module:enable --all

4.	Compile code and the dependency injection configuration:

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

## Deploy phase {#deploy}
We highly recommend having Magento already installed prior to deployment. During the [deployment phase]({{ page.baseurl }}cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook), we perform the following tasks:

*	Install the Magento application if needed
*	If the Magento application is installed, upgrade components
*	Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}
*	Set the Magento application for [`production`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production) mode

To deploy your site:

1.	If you haven't already, log in as or switch to the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your project root directory.
3.	Enter the following command:

		php bin/magento setup:upgrade

	We highly recommend having Magento already installed if you followed the [First time deployment]({{ page.baseurl }}cloud/access-acct/first-time-deploy.html). If you haven't installed the Magento application yet, use the [`magento setup:install`]({{ page.baseurl }}install-gde/install/cli/install-cli.html) command instead. Be advised, you may encounter issues with enabled modules on a fresh installation.
4.	Clean the Magento cache:

		php bin/magento cache:clean
5.	Set the Magento application for [production mode]({{ page.baseurl }}config-guide/bootstrap/magento-modes.html#mode-production):

		php bin/magento deploy:mode:set production

If errors display, debug them if possible or open a [support ticket]({{ page.baseurl }}cloud/bk-cloud.html#gethelp) to get additional assistance.

#### Next step
[Prepare to deploy to Staging and Production]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)
