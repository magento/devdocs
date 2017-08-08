---
layout: default
group: cloud
subgroup: 160_deploy
title: Deployment process
menu_title: Deployment process
menu_order: 10
menu_node:
version: 2.0
github_link: cloud/reference/discover-deploy.md
---

When you deploy Magento Commerce, you complete all of your development in your local Git branch and push the code to the Git repository. Every push starts the Magento build process followed by deployment.

What happens technically: Build scripts parse configuration files committed to the repository and provide info used by deploy scripts to rebuild the environment you are working in.

For the Integration environment, every active branch build and deploys to a full environment for access and testing. To deploy to Staging and Production, your code must be merged to the `master` branch in Integration then built and deployed to those environments.

## Track the process {#track}
You can track the ongoing build and deploy actions in your terminal and the Project Web Interface in real-time. the status displays in-progress, pending, success, or failed. Logs are available to review through the interface.

If you are using external GitHub repositories, the log of the operations does not display in the GitHub session. You can still follow what's happening in their interface and in the Magento Commerce (Cloud) Web Interface.

## Project configuration {#cloud-deploy-conf}
A set of YAML configuration files located in the project root directory define your Magento installation and describe its dependencies.

If you intend to make changes, modify the YAML files in your Git branch of code. The build and deploy scripts access those files for specifics.

*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html) defines how Magento is built and deployed.
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html) defines how an incoming URL is processed by Magento Commerce.
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html) defines the services Magento uses by name and version. For example, this file may include versions of MySQL, some PHP extensions, and Elasticsearch. These are referred to as *services*.

## Five phases of deployment {#cloud-deploy-over-phases}
Deployment consists of the following phases:

1.	[Phase 1: Configuration validation and code retrieval](#cloud-deploy-over-phases-conf)
2.	[Phase 2: Build](#cloud-deploy-over-phases-build)
3.	[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)
4.	[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus)
5.	[Phase 5: Deployment hooks](#cloud-deploy-over-phases-hook)
6.	[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

### Phase 1: Configuration validation and code retrieval {#cloud-deploy-over-phases-conf}
The remote server gets your code using Git. When you initially set up a project from a template, we retrieve the code from the [the Magento Commerce template](https://github.com/magento/magento-cloud){:target="_blank"}. This code repo is cloned to your project as the `master` branch.

The built-in Git server checks what you are pushing. If you have a syntax error in a configuration file, our Git server refuses the push. For details, see [Protective Block]({{page.baseurl}}cloud/live/live-prot.html).

For example, you may want to add an Elasticsearch instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

This phase also runs `composer install` to retrieve dependencies.

### Phase 2: Build {#cloud-deploy-over-phases-build}
We build only what has changed since the last build. This is one of the things that makes Magento Commerce so fast in deployment.

It builds the codebase and runs hooks in the `build` section of `.magento.app.yaml`.

The default Magento build hook is a CLI command called `magento-cloud:build`. It does the following:

* Applies patches located in `vendor/magento/magento-cloud-configuration/patches`, as well as optional project-specific patches in `m2-hotfixes`
*	Enables all extensions. To best build all code for deployment, we enable all extensions, build, then disable extensions you had disabled in your configuration.
*	Regenerates code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration (that is, the Magento `var/generation` and `var/di` directories) using `bin/magento setup:di:compile`.

**Important:** At this point the cluster has not been created yet. So you should not try to connect to a database or imagine anything was daemonized.

Once the application has been built it is going to be mounted on a read-only file system. You will be able to configure specific mount points that are going to be read/write. For the project structure, see [Local project directory structure]({{ page.baseurl }}cloud/project/project-start.html#cloud-structure-local).

This means you cannot FTP to the server and add modules. Instead, you must add code to your Git repo and run `git push`, which builds and deploys the environment.

### Phase 3: Prepare the slug {#cloud-deploy-over-phases-slug}
The result of the build phase is a read-only file system we refer to as a *slug*. In this phase, we create an archive and put it in permanent storage. The next time you push code, if a service did not change, you can use a slug from the archive.

It also means that reverting a deployment is basically instantaneous.

### Phase 4: Deploy slugs and cluster {#cloud-deploy-over-phases-slugclus}
Now we provision your applications and all the {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} services you need:

*	Mounts each service in its own container
*	Mounts the read-write file system (mounted on a highly available distributed storage grid)
*	Configures the network so Magento's services can "see" each other (and only each other)

<div class="bs-callout bs-callout-info" id="info">
  <p>The file system is <em>read-only</em>. A read-only system guarantees deterministic deployments and dramatically improves your site's security because no process can write to the file system.</p>
</div>

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}
The last step runs a deployment script. You can use this for example to anonymize data in development environments, clear caches, ping external continuous integration tools, and so on.

When this script runs, you have access to all the services in your environment (Redis, database, and so on).

There are two default deploy hooks:

* `pre-deploy.php` that completes necessary cleanup and retrieval of resources generated in the build hook
* `bin/magento magento-cloud:deploy` that runs a series of commands and scripts

`bin/magento magento-cloud:deploy` does the following:

*	If Magento is not installed, it installs Magento with `bin/magento setup:install`, updates the deployment configuration, `app/etc/env.php`, and the database for your specified environment (for example, Redis and {% glossarytooltip a3c8f20f-b067-414e-9781-06378c193155 %}website{% endglossarytooltip %} URLs).

*	If Magento is installed, performs any necessary upgrades.

 The deployment script runs [`bin/magento setup:upgrade`]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and data (which is necessary after extension or core code updates), and also updates the [deployment configuration]({{ page.baseurl }}config-guide/config/config-php.html), `app/etc/env.php`, and the database for your environment.

	Finally, the deployment script and clears the Magento cache.

*	Sets the mode to either [`developer`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-developer}}) or [`production`]({{ page.baseurl}}config-guide/bootstrap/magento-modes.html#mode-production) based on the environment variable [`APPLICATION_MODE`]({{ page.baseurl }}cloud/env/environment-vars_magento.html).

	In `production` mode, the script optionally generates static web content using the command [`magento setup:static-content:deploy`]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-static-view.html).

<div class="bs-callout bs-callout-info" id="info">
  <p>Our deploy script uses the values defined by configuration files in the <code>.magento</code> directory, then the script deletes the directory and its contents. Your local development environment isn't affected.</p>
</div>

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}
While the deployment is running, we freeze the incoming traffic at the entry point for 60 seconds. We are now ready to configure routing so your web traffic will arrive at your newly created cluster.

#### Related topics
*	[Get started with a project]({{page.baseurl}}cloud/project/project-start.html)
*	[Get started with an environment]({{page.baseurl}}cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}cloud/project/project-conf-files_services.html)
