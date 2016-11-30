---
layout: default
group: cloud
subgroup: 40_live
title: Sanity checks before pushing to staging or production
menu_title: Sanity checks before pushing to staging or production
menu_order: 2
menu_node: parent
version: 2.0
github_link: cloud/live/live-sanity-check.md
---

This topic discusses tasks we strongly recommend you perform before pushing code from an [integration system]() to either [staging]() or [production](). Failure to perform these tasks can result in additional debugging and delays in testing your site.

As discussed in [TBD](), build and deployment, used by integration, staging, and production, is a five-phase process. This topic discusses how to simulate build and deploy steps locally, which can expose issues early in your development process when they're easier to debug and fix.

## Step 1: Push code to the Cloud server
Before you continue, make sure you push all current code to the remote Cloud server so that, in event of issues, you can recover the state of the Magento application.

### Get started
TBD

### Push code to the remote server

{% collapsible To push code to your remote server: %}

1.	If you haven't already done so, change to your project root directory.
2.	Enter the following commands:

		git add -A && git commit -m "<comment>"
		git push origin <branch name>
3.	Wait for deployment to complete.

{% endcollapsible %}

## Build step

{% collapsible To build your site %}

1.	Enter the following command from the project root directory:

		php bin/magento magento-cloud:build

	Output includes the following (some portions omitted for brevity):

		[2016-11-30 21:04:54] Start build.
		[2016-11-30 21:04:54] Applying magento-cloud-configuration patches.
		[2016-11-30 21:04:54] Command:/usr/bin/php /var/www/html/magento2/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/../../../../../../vendor/magento/magento-cloud-configuration/patch.php
		[2016-11-30 21:04:54] Status:0
		[2016-11-30 21:04:54] Output:array (
  		0 => '[2016-11-30 15:04:54] Copying static.php to front-static.php',
  		1 => '[2016-11-30 15:04:54] Command:git apply /var/www/html/magento2/vendor/magento/magento-cloud-configuration/patches/000-MAGETWO-57719-2.1.2.patch',
  		2 => '[2016-11-30 15:04:54] Status:0',
  		... more ...

		[2016-11-30 21:04:54] Checking if patches exist under /var/www/html/magento2/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/../../../../../../m2-hotfixes/
		[2016-11-30 21:04:54] Command:rm -rf var/generation/*
		[2016-11-30 21:04:54] Status:0
		[2016-11-30 21:04:54] Output:array (
		)
		[2016-11-30 21:04:54] Command:rm -rf var/di/*
		[2016-11-30 21:04:54] Status:0
		[2016-11-30 21:04:54] Output:array (
		)
		[2016-11-30 21:04:54] Enabling all modules
		[2016-11-30 21:04:54] Command:cd bin/; /usr/bin/php ./magento module:enable --all
		[2016-11-30 21:04:55] Status:0
		[2016-11-30 21:04:55] Output:array (
		0 => 'No modules were changed.',
		)
		[2016-11-30 21:04:55] Running DI compilation
		[2016-11-30 21:04:55] Command:cd bin/; /usr/bin/php ./magento setup:di:compile
		[2016-11-30 21:09:07] Status:0
		[2016-11-30 21:09:07] Output:array (
		0 => 'Compilation was started.',
		1 => '%message% 0/7 [>---------------------------]   0% 1 sec 52.0 MiB%message% 0/7 [>---------------------------]   0% 1 sec 52.0 MiBProxies code generation... 0/7 [>---------------------------]   0% 1 sec 52.0 MiB',
		2 => 'Proxies code generation... 1/7 [====>-----------------------]  14% 1 sec 56.0 MiB',
		3 => 'Repositories code generation... 1/7 [====>-----------------------]  14% 1 sec 56.0 MiB',
		4 => 'Repositories code generation... 2/7 [========>-------------------]  28% 44 secs 176.0 MiB',
 		... more ...
		[2016-11-30 21:09:07] Clearing temporary directory.
		[2016-11-30 21:09:07] Command:rm -rf ../init/*
		[2016-11-30 21:09:07] Status:0
		... more ...
3.	Because the build command removes some files from `app/etc`, you must use the following command to recover them from the server:

		git reset --hard

If errors display, debug them if possible or open a [support ticket]() to get additional assistance.

{% endcollapsible %}

## Deploy phase
Unlike the build phase, there is no command for deployment; instead, you should execute the same commands we do when we deploy your Magento application to the Cloud server.

{% collapsible To deploy your site: %}

1.	If you haven't done so already, log in as or switch to the [Magento file system owner]().
2.	Change to your project root directory.
3.	Enter the following command:

		php bin/magento setup:upgrade

	(If you haven't installed the Magento application yet, use the [`magento setup:install`]() command instead.)
4.	Clean the Magento cache:

		TBD
5.	Set the Magento application for production mode:

		TBD

If errors display, debug them if possible or open a [support ticket]() to get additional assistance.


{% endcollapsible %}

#### Next step
[Overview of staging and production]({{ page.baseurl }}cloud/live/stage-prod-over.html)
