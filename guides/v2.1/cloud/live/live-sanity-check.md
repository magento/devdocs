---
group: cloud-guide
title: Build and deploy on local
functional_areas:
  - Cloud
  - Testing
---

Before pushing your code to your [Starter]({{ page.baseurl }}/cloud/basic-information/starter-architecture.html) or [Pro]({{ page.baseurl }}/cloud/architecture/pro-architecture.html) Staging and Production environments, you should fully build on your local. Fully testing builds and deploys along with full site testing can reduce the risk of issues or delays for your final site deployment, and expose any issues early for debugging.

These tasks walk through:

* Complete development on your local
* Complete a full build and deploy process on your local (deploys to the associated active development environment)
* Test fully before continuing deployment to Staging

For more information on the full five step process, see the [Deployment process]({{ page.baseurl }}/cloud/reference/discover-deploy.html).

{:.bs-callout .bs-callout-warning}
We highly recommend completing your testing in an Integration active environment and the Staging environment. Only complete final tests for going live in the Production environment. Your Staging environment is best for testing with code, data, and services including Fastly, New Relic, and others.

## Update composer if you add extensions {#composer}

If you modified your `composer.json` file to add modules, we recommend running the `composer update` command in a terminal. This command updates any dependencies in the `composer.lock`. During the build phase, we run `composer install` on a fresh clone of your Git branch of code to retrieve the latest dependencies.

## Verify all required files in Git {#files}

Your Git branch must have the following files for building and deploying for your local and to Integration, Staging, and Production environments:

* `auth.json` in the root Magento directory. This file includes the Magento authentication keys entered when creating the project. If you need to verify the file and settings, see [Troubleshoot deployment]({{ page.baseurl }}/cloud/access-acct/trouble.html).
* `config.local.php` if you used [Configuration Management]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html) for 2.1.X
* `config.php` if you used [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) for 2.2.X
* [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) is updated and saved in the root directory
* [`services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html) is updated and saved in `magento/`
* [`routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html) is updated and saved in `magento/`

## Test build your code locally before pushing {#test-build}

Sometimes you just want to test your build prior to pushing your code to Git. You can use a specific set of commands to build locally. Do **NOT** push the generated build files from this test to your remote Git branch. This is a test to ensure no issues occur before pushing to Git. Remember, when you push to the remote Git branch, a full build and deploy process begins automatically.

1. SSH into your local Magento workspace.
2. Move to another location to run your build. You should keep this build separate from your usual Git branch.
3. Run the following command to build locally. The command builds the current project locally strictly to test the build without the full patching and commit process.

		magento-cloud local:build

	For details, enter `magento-cloud local:build --help`.
4. Watch for the results. A series of files will generate for the build. If you do not encounter errors, you can [push code to the remote Git branch](#push) and continue.

If errors occur during the build, you can investigate and resolve the code issues. You should not commit the files from this build to Git.

To remove these test builds, you can use the `magento-cloud local:clean` command. For details, enter `magento-cloud local:clean --help`.

## Push code to Git and Integration {#push}

Before you continue, make sure you push all current code to the remote Cloud server so that, in event of issues, you can recover the state of the Magento application.

#### To prepare your code and branch:

{% include cloud/cli-get-started.md %}

#### To push code to your remote environment:

1.  Change to your project root directory.
1.  Complete code commits in a terminal.

    ```bash
    git add -A && git commit -m "<comment>"
    ```
    
    ```bash
    git push origin <branch name>
    ```

1.  The build and deploy phases begin. Wait for the deployment to complete.

## Build phase {#build}

During the [build phase]({{page.baseurl}}/cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build), we perform the following tasks:

*	Apply patches distributed to all Magento Commerce (Cloud) accounts
*	Apply patches we provided specifically to you
*	Enable modules to build
*	Compile code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration

The build also checks for a [configuration file]({{ site.baseurl }}/guides/v2.1/cloud/live/sens-data-over.html). If the file exists, the static file deployment is also completed during the build stage. If not, it is completed in the deployment stage.

Before you continue, you must know the file system path to any patch we provided specifically to you. Typically, hotfixes are in the `<Magento root dir>/m2-hotfixes` directory.

#### To build your site:

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
              
2.	Apply hotfixes and other patches provided to you:

		git apply <path to patch>

	For example, to apply hotfixes:

		git apply m2-hotfixes/<patch file name>

	If the `m2-hotfixes` directory is empty, skip this step.

	If patches are present, output from this command is similar to the patches command.
1.  Enable all missing modules.

    ```bash
    ./vendor/bin/ece-tools module:refresh
    ```

1.  Compile code and the dependency injection configuration:

    ```bash
    php bin/magento  setup:di:compile
    ```
	This command can take several minutes to complete and produces messages similar to the following:

    ```terminal
    Compilation was started.
    0% 1 sec 54.0 MiB%message% 0/7 [>---------------------------]
    0% 1 sec 54.0 MiBProxies code generation...
    0/7 [>---------------------------]
    0% 1 sec 54.0 MiB
    Proxies code generation... 1/7 [====>-----------------------]  14% 1 sec 58.0 MiB
    Repositories code generation... 1/7 [====>-----------------------]  14% 1 sec 58.0 MiB
    Repositories code generation... 2/7 [========>-------------------]  28% 30 secs 176.0 MiB
    ...
    ...
    Interception cache generation... 7/7 [============================] 100% 5 mins 324.0 MiB
    ```

If you receive errors, debug them when possible and open a [support ticket]({{page.baseurl}}/cloud/trouble/trouble.html) for further assistance.

We strongly recommend you complete your testing in an Integration or Staging environment only, and _not_ in a Production environment.

## Deploy phase {#deploy}

We highly recommend having Magento already installed prior to deployment. During the [deployment phase]({{ page.baseurl }}/cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook), we perform the following tasks:

*	Install the Magento application if needed
*	If the Magento application is installed, upgrade components
*	Clear the {% glossarytooltip 0bc9c8bc-de1a-4a06-9c99-a89a29c30645 %}cache{% endglossarytooltip %}
*	Set the Magento application for [`production`]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode) mode

#### To deploy your site:

1.	If you have not already, log in as or switch to the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).
2.	Change to your project root directory.
3.	Enter the following command:

		php bin/magento setup:upgrade

	We highly recommend having Magento already installed if you followed the [First time deployment]({{ page.baseurl }}/cloud/access-acct/first-time-deploy.html). If you have not installed the Magento application yet, use the [`magento setup:install`]({{ page.baseurl }}/install-gde/install/cli/install-cli.html) command instead. Be advised, you may encounter issues with enabled modules on a fresh installation.
4.	Clean the Magento cache:

		php bin/magento cache:clean
5.	Set the Magento application for [production mode]({{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode):

		php bin/magento deploy:mode:set production

If errors display, debug them if possible, [review logs]({{ page.baseurl }}/cloud/trouble/environments-logs.html), or open a [support ticket]({{ page.baseurl }}/cloud/trouble/trouble.html) to get additional assistance.

#### Next step
[Prepare to deploy to Staging and Production]({{ page.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)
