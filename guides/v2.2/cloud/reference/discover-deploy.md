---
layout: default
group: cloud
subgroup: 160_deploy
title: Deployment process
menu_title: Deployment process
menu_order: 10
menu_node:
version: 2.2
github_link: cloud/reference/discover-deploy.md
---

When you deploy Magento Commerce, complete all of your development in your local Git branch and push the code to the Git repository. Every push starts the Magento build process followed by deployment.'

What happens technically: Build scripts parse configuration files committed to the repository and provide info used by deploy scripts to rebuild the environment you are working in.

For the Integration environment, every active branch build and deploys to a full environment for access and testing. To deploy to Staging and Production, your code must be merged to the `master` branch in Integration then pushed to those environments using SSH or a ticket.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make sure all code for your site and stores is in the Magento Commerce Git branch. If you point to or include hooks to code in other branches, especially a private branch, the build and deploy process will have issues. For example, add any new themes into the Git branch of code. If you include it from a private repo, the theme won't build with the Magento code.
</div>

## Track the process {#track}
You can track the ongoing build and deploy actions in your terminal and the Project Web Interface in real-time. the status displays in-progress, pending, success, or failed. Logs are available to review through the interface.

If you are using external GitHub repositories, the log of the operations does not display in the GitHub session. You can still follow what's happening in their interface and in the Magento Commerce (Cloud) Web Interface.

## Project configuration {#cloud-deploy-conf}
A set of YAML configuration files located in the project root directory define your Magento installation and describe its dependencies.

If you intend to make changes, modify the YAML files in your Git branch of code. The build and deploy scripts access those files for specifics.

*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html) defines how Magento is built and deployed. Enter specific build and deploy options to the `hooks` section.
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html) defines how an incoming URL is processed by Magento Commerce.
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html) defines the services Magento uses by name and version. For example, this file may include versions of MySQL, some PHP extensions, and Elasticsearch. These are referred to as *services*.

We also recommend configuring your [system-specific settings]({{page.baseurl}}cloud/live/sens-data-over.html) into a `config.php` file. This file captures all of your configuration settings, or only those you changed. You push this file into your Git branch, deploying it across all environments. If the file is found in the deployed code, all static file deployment occurs during the Build phase, not Deploy. Static file deployment takes a long time to complete, reducing deployment and site downtime if done in the Build phase.

## Five phases of deployment {#cloud-deploy-over-phases}
Deployment consists of the following phases:

1.	[Phase 1: Configuration validation and code retrieval](#cloud-deploy-over-phases-conf)
2.	[Phase 2: Build](#cloud-deploy-over-phases-build)
3.	[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)
4.	[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus)
5.	[Phase 5: Deployment hooks](#cloud-deploy-over-phases-hook)
6.	[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

### Phase 1: Code and configuration validation {#cloud-deploy-over-phases-conf}
When you initially set up a project from a template, we retrieve the code from the [the Magento Commerce template](https://github.com/magento/magento-cloud){:target="_blank"}. This code repo is cloned to your project as the `master` branch.

The remote server gets your code using Git. When you push your code from local to the remote Git, a series of checks and code validation completes prior to build and deploy scripts. The built-in Git server checks what you are pushing and makes changes. For example, you may want to add an Elasticsearch instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

If you have a syntax error in a configuration file, our Git server refuses the push. For details, see [Protective Block]({{page.baseurl}}cloud/live/live-prot.html).

This phase also runs `composer install` to retrieve dependencies.

### Phase 2: Build {#cloud-deploy-over-phases-build}
**Helpful Note:** During this phase, the site is not in maintenance and will not be brought down if errors or issues occur.

We build only what has changed since the last build.

This phase builds the codebase and runs hooks in the `build` section of `.magento.app.yaml`. The default Magento build hook is a CLI command called `magento-cloud:build`. It does the following:

* Applies patches located in `vendor/magento/magento-cloud-configuration/patches`, as well as optional project-specific patches in `m2-hotfixes`
*	Enables all extensions. To best build all code for deployment, we enable all extensions, build, then disable extensions you had disabled in your configuration.
*	Regenerates code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration (that is, the Magento `var/generation` and `var/di` directories) using `bin/magento setup:di:compile`.

**Important:** At this point the cluster has not been created yet. So you should not try to connect to a database or imagine anything was daemonized.

Once the application has been built it is mounted on a **read-only file system**. You will be able to configure specific mount points that are going to be read/write. For the project structure, see [Local project directory structure]({{ page.baseurl }}cloud/project/project-start.html#cloud-structure-local).

This means you cannot FTP to the server and add modules. Instead, you must add code to your Git repo and run `git push`, which builds and deploys the environment.

The build checks if the [`config.php` file]({{page.baseurl}}cloud/live/sens-data-over.html) exists in the codebase. If so, static files are deployed during this phase, reducing the downtime in the deployment phase.

### Phase 3: Prepare the slug {#cloud-deploy-over-phases-slug}
The result of the build phase is a read-only file system we refer to as a *slug*. In this phase, we create an archive and put the slug in permanent storage. The next time you push code, if a service didn't change, we reuse the slug from the archive.

* Makes continuous integration builds go faster reusing unchanged code
* If code was changed, makes an updated slug for the next build to possibly reuse
* Allows for instantaneous reverting of a deployment if needed
* Includes static files if the `config.php` file exists in the codebase

### Phase 4: Deploy slugs and cluster {#cloud-deploy-over-phases-slugclus}
Now we provision your applications and all the {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} services you need:

*	Mounts each service in its own container (web server, Elasticsearch, RabbitMQ and so on)
*	Mounts the read-write file system (mounted on a highly available distributed storage grid)
*	Configures the network so Magento's services can "see" each other (and only each other)

<div class="bs-callout bs-callout-info" id="info">
  <p>The file system is <em>read-only</em>. A read-only system guarantees deterministic deployments and dramatically improves your site's security because no process can write to the file system. If you need to make a change, make it in your local Git and push again.</p>
</div>

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}
**Helpful Note:** During this phase, the site is in maintenance mode until the deploy completes.

The last step runs a deployment script. You can use this for example to anonymize data in development environments, clear caches, ping external continuous integration tools, and so on.

When this script runs, you have access to all the services in your environment (Redis, database, and so on).

If the `config.php` file does not exist in the codebase, static file deployment occurs during this phase. This increases the length of your deploy phase and site maintenance.

There are two default deploy hooks. `pre-deploy.php` completes necessary cleanup and retrieval of resources and code generated in the build hook. `bin/magento magento-cloud:deploy` runs a series of commands and scripts:

*	If Magento is **not installed**, it installs Magento with `bin/magento setup:install`, updates the deployment configuration, `app/etc/env.php`, and the database for your specified environment (for example, Redis and {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} URLs). **Important:** When you completed the [First time deployment]({{ page.baseurl }}cloud/access-acct/first-time-deploy.html) during setup, Magento Commerce was installed and deployed across all environments.

*	If Magento **is installed**, performs any necessary upgrades. The deployment script runs [`bin/magento setup:upgrade`]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and data (which is necessary after extension or core code updates), and also updates the [deployment configuration]({{ page.baseurl }}config-guide/config/config-php.html), `app/etc/env.php`, and the database for your environment. Finally, the deployment script clears the Magento cache.

*	Sets the mode to either [`developer`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer}}) or [`production`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production) based on the environment variable [`APPLICATION_MODE`]({{ page.baseurl }}cloud/env/environment-vars_magento.html).

	In `production` mode, the script optionally generates static web content using the command [`magento setup:static-content:deploy`]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-static-view.html).

<div class="bs-callout bs-callout-info" id="info">
  <p>Our deploy script uses the values defined by configuration files in the <code>.magento</code> directory, then the script deletes the directory and its contents. Your local development environment isn't affected.</p>
</div>

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}
While the deployment is running, we freeze the incoming traffic at the entry point for 60 seconds. We are now ready to configure routing so your web traffic will arrive at your newly created cluster.

If deployment completes without issues or errors, the maintenance mode is removed to allow for normal access.

To review build and deploy logs, see [Use logs for troubleshooting]({{page.baseurl}}cloud/trouble/environments-logs.html).

#### Deployment steps
*	[Build and deploy to your local]({{ page.baseurl }}cloud/live/live-sanity-check.html)
*	[Prepare to deploy]({{ page.baseurl }}cloud/live/stage-prod-migrate-prereq.html)
*	[Deploy code and data]({{ page.baseurl }}cloud/live/stage-prod-migrate.html)
*	[Test deployment]({{ page.baseurl }}cloud/live/stage-prod-test.html)
* [Go live and launch]({{ page.baseurl }}cloud/live/live.html)

#### Related topics
* [Deployment troubleshooting]({{page.baseurl}}cloud/access-acct/trouble.html)
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
