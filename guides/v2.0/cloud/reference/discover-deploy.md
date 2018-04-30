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
redirect_from:
  - /guides/v2.0/cloud/discover-deploy.html
functional_areas:
  - Cloud
---

Every time you push code from your local workstation to the remote environment or merge code to a base environment branch, such as a merge from the Integration environment to the Staging environment, this activates the build and deploy scripts. These scripts generate new Magento code and provision configured services to the remote environment.

The build and deploy process is slightly different for each plan:

-  **Starter plans**—For the Integration environment, every active branch build and deploys to a full environment for access and testing. Fully test your code after merging to the `staging` branch. To go live, push `staging` to `master` to deploy to Production. You have full access to all branches through the Project Web Interface and the CLI commands.
-  **Pro plans**—For the Integration environment, every _active_ branch builds and deploys to a full environment for access and testing. You must merge your code to the `integration` branch before you can merge to the Staging environment and then the Production environment. You can only merge to Staging and Production using CLI commands with SSH or using the Project Web Interface. If you do not see the Staging or Production environments in your Project Web Interface, then you need to [Add Staging and Production to Pro projects UI]({{page.baseurl}}/cloud/trouble/pro-env-management.html).

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Make sure all code for your site and stores is in the active {{site.data.var.ee}} Git branch. If you point to or include hooks to code in other branches, especially a private branch, the build and deploy process will have issues. For example, add any new themes into the Git branch of code. If you include it from a private repo, the theme won't build with the Magento code.
</div>

{% include cloud/wings-management.md %}

## Track the process {#track}
You can track the ongoing build and deploy actions in your terminal and the Project Web Interface in real-time. the status displays in-progress, pending, success, or failed. Logs are available to review through the interface.

If you are using external GitHub repositories, the log of the operations does not display in the GitHub session. You can still follow what's happening in their interface and in the {{site.data.var.ece}} Project Web Interface.

## Project configuration {#cloud-deploy-conf}
A set of YAML configuration files located in the project root directory define your Magento installation and describe its dependencies.

If you intend to make changes, modify the YAML files in your Git branch of code. The build and deploy scripts access those files for specifics.

*	[`.magento.app.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html) defines how Magento is built and deployed. Enter specific build and deploy options to the `hooks` section.
*	[`routes.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_routes.html) defines how an incoming URL is processed by {{site.data.var.ee}}.
*	[`services.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_services.html) defines the services Magento uses by name and version. For example, this file may include versions of MySQL, some PHP extensions, and Elasticsearch. These are referred to as *services*.

## Required files for your Git branch {#requiredfiles}
Your Git branch must have the following files for building and deploying for your local and to Integration, Staging, and Production environments:

* `auth.json` in the root Magento directory. This file includes the Magento Authentication keys entered when creating the project. The file is generated as part of [autoprovisioning]({{ page.baseurl}}/cloud/basic-information/cloud-plans.html#autoprovisioning) or a new project using a blank template. If you need to verify the file and settings, see [Troubleshoot deployment]({{ page.baseurl}}/cloud/access-acct/trouble.html).
* [`.magento.app.yaml`]({{ page.baseurl}}/cloud/project/project-conf-files_magento-app.html) is updated and saved in the root directory
* [`services.yaml`]({{ page.baseurl}}/cloud/project/project-conf-files_services.html) is updated and saved in `magento/`
* [`routes.yaml`]({{ page.baseurl}}/cloud/project/project-conf-files_routes.html) is updated and saved in `magento/`

## Best practices for builds and deployment {#best-practices}
We highly recommend the following best practices and considerations for your deployment process:

* **Always following the deployment process** to ensure your code is THE SAME in Integration, Staging, and Production. This is vital. Pushing code from Integration environments may become important or needed for upgrades, patches, and configurations. This deployment will overwrite Production and any differences in code in that environment.
* **Always add new extensions, integrations, and code in iterated branches** to then build and deploy using the process. Some extensions and integrations must be enabled and configured in a specific order due to dependencies. Adding these in groups can make your build and deploy process much easier and help determine where issues occur.
* **Enter the same variables environment-to-environment.** The values for these [variables]({{ page.baseurl}}/cloud/env/variables-intro.html) may differ across environments, but the variables may be required for your code.
* **Keep sensitive configuration values and data in environment specific variables.** This includes an env.php file, CLI entered variables, and Project Web Interface entered variables. The values can differ, but having the variables is important.
* **Test your build and deploy locally and in Staging before deploying to Production.** Many extensions work, custom code, and more work great in development. Some users then push to production only to have failures and issues. Staging gives you an opportunity to fully test your code and implementation in a production environment without extended downtime if something goes wrong in Production.

## Five phases of Integration build and deployment {#cloud-deploy-over-phases}
The following phases occur on your local development environment and the Integration environment. The code is not deployed to Staging or Production for Pro plan in these initial phases.

Integration build and deployment consists of the following phases:

1.	[Phase 1: Configuration validation and code retrieval](#cloud-deploy-over-phases-conf)
2.	[Phase 2: Build](#cloud-deploy-over-phases-build)
3.	[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)
4.	[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus)
5.	[Phase 5: Deployment hooks](#cloud-deploy-over-phases-hook)
6.	[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

### Phase 1: Code and configuration validation {#cloud-deploy-over-phases-conf}
When you initially set up a project from a template, we retrieve the code from the [the {{site.data.var.ee}} template](https://github.com/magento/magento-cloud){:target="_blank"}. This code repo is cloned to your project as the `master` branch.

* **For Starter**: `master` branch is used in your Production environment.
* **For Pro**: `master` begins as origin branch for the Integration environment. You deploy this branch to Staging and Production.

The remote server gets your code using Git. When you push your code from local to the remote Git, a series of checks and code validation completes prior to build and deploy scripts. The built-in Git server checks what you are pushing and makes changes. For example, you may want to add an Elasticsearch instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

If you have a syntax error in a configuration file, our Git server refuses the push. For details, see [Protective Block]({{page.baseurl}}/cloud/live/live-prot.html).

This phase also runs `composer install` to retrieve dependencies.

### Phase 2: Build {#cloud-deploy-over-phases-build}
**Helpful Note:** During this phase, the site is not in maintenance mode and will not be brought down if errors or issues occur.

We build only what has changed since the last build.

This phase builds the codebase and runs hooks in the `build` section of `.magento.app.yaml`. The default Magento build hook is a CLI command called `magento-cloud:build`. It does the following:

* Applies patches located in `vendor/magento/magento-cloud-configuration/patches`, as well as optional project-specific patches in `m2-hotfixes`
*	Enables all extensions. To best build all code for deployment, we enable all extensions, build, then disable extensions you had disabled in your configuration.
*	Regenerates code and the {% glossarytooltip 2be50595-c5c7-4b9d-911c-3bf2cd3f7beb %}dependency injection{% endglossarytooltip %} configuration (that is, the Magento `var/generation` and `var/di` directories) using `bin/magento setup:di:compile`.

**Important:** At this point the cluster has not been created yet. So you should not try to connect to a database or imagine anything was daemonized.

Once the application has been built it is mounted on a **read-only file system**. You will be able to configure specific mount points that are going to be read/write. For the project structure, see [Local project directory structure]({{ page.baseurl}}/cloud/project/project-start.html#cloud-structure-local).

This means you cannot FTP to the server and add modules. Instead, you must add code to your Git repo and run `git push`, which builds and deploys the environment.

The build checks if the [`config.local.php` file](http://devdocs.magento.com/guides/v2.1/cloud/live/sens-data-over.html) exists in the codebase and has information about scopes (for details see [`SCD_STRATEGY`](http://devdocs.magento.com/guides/v2.2/cloud/env/environment-vars_magento.html)). If so, static files are deployed during this phase, reducing the downtime in the deployment phase.

### Phase 3: Prepare the slug {#cloud-deploy-over-phases-slug}
The result of the build phase is a read-only file system we refer to as a *slug*. In this phase, we create an archive and put the slug in permanent storage. The next time you push code, if a service didn't change, we reuse the slug from the archive.

* Makes continuous integration builds go faster reusing unchanged code
* If code was changed, makes an updated slug for the next build to possibly reuse
* Allows for instantaneous reverting of a deployment if needed
* Includes static files if the `config.local.php` file exists in the codebase

The slug includes all files and folders **excluding the following** mounts configured in `magento.app.yaml`:

* `"var": "shared:files/var"`
* `"app/etc": "shared:files/etc"`
* `"pub/media": "shared:files/media"`
* `"pub/static": "shared:files/static"`

### Phase 4: Deploy slugs and cluster {#cloud-deploy-over-phases-slugclus}
Now we provision your applications and all the {% glossarytooltip 74d6d228-34bd-4475-a6f8-0c0f4d6d0d61 %}backend{% endglossarytooltip %} services you need:

*	Mounts each service in its own container (web server, Elasticsearch, RabbitMQ and so on)
*	Mounts the read-write file system (mounted on a highly available distributed storage grid)
*	Configures the network so Magento's services can "see" each other (and only each other)

<div class="bs-callout bs-callout-info" id="info">
  <p>Do you need to make more code changes, add another extension, and so on? Make your changes in a Git branch after all build and deployment completes and push again. All environment file systems are <em>read-only</em>. A read-only system guarantees deterministic deployments and dramatically improves your site's security because no process can write to the file system. It also works to ensure your code is identical in Integration, Staging, and Production.</p>
</div>

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}
**Helpful Note:** During this phase, the site is in maintenance mode until the deploy completes.

The last step runs a deployment script. You can use this for example to anonymize data in development environments, clear caches, ping external continuous integration tools, and so on.

When this script runs, you have access to all the services in your environment (Redis, database, and so on).

If the `config.local.php` file does not exist in the codebase, static file deployment occurs during this phase. This increases the length of your deploy phase and site maintenance.

There are two default deploy hooks. `pre-deploy.php` completes necessary cleanup and retrieval of resources and code generated in the build hook. `bin/magento magento-cloud:deploy` runs a series of commands and scripts:

*	If Magento is **not installed**, it installs Magento with `bin/magento setup:install`, updates the deployment configuration, `app/etc/env.php`, and the database for your specified environment (for example, Redis and website URLs). **Important:** When you completed the [First time deployment]({{ page.baseurl}}/cloud/access-acct/first-time-deploy.html) during setup, {{site.data.var.ee}} was installed and deployed across all environments.

*	If Magento **is installed**, performs any necessary upgrades. The deployment script runs [`bin/magento setup:upgrade`]({{ page.baseurl}}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and data (which is necessary after extension or core code updates), and also updates the [deployment configuration]({{ page.baseurl}}/config-guide/config/config-php.html), `app/etc/env.php`, and the database for your environment. Finally, the deployment script clears the Magento cache.

*	The script optionally generates static web content using the command [`magento setup:static-content:deploy`]({{ page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html).

<div class="bs-callout bs-callout-info" id="info">
  <p>Our deploy script uses the values defined by configuration files in the <code>.magento</code> directory, then the script deletes the directory and its contents. Your local development environment isn't affected.</p>
</div>

<div class="bs-callout bs-callout-info" id="info">
  <p>The deployment phase may seem to get stuck or take a long time. If cron jobs are running, the hooks wait until the cron jobs complete before completion of the deployment.</p>
</div>

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}
While the deployment is running, we freeze the incoming traffic at the entry point for 60 seconds. We are now ready to configure routing so your web traffic will arrive at your newly created cluster.

If deployment completes without issues or errors, the maintenance mode is removed to allow for normal access.

To review build and deploy logs, see [Use logs for troubleshooting]({{page.baseurl}}/cloud/trouble/environments-logs.html).

#### Build and deploy full steps {#steps}
With an understanding of the process, we provide the following instructions for build and deploy for your local, Integration, Staging, and finally Production:

*	[Build and deploy to your local]({{ page.baseurl}}/cloud/live/live-sanity-check.html)
*	[Prepare to deploy]({{ page.baseurl}}/cloud/live/stage-prod-migrate-prereq.html)
*	[Deploy code and data]({{ page.baseurl}}/cloud/live/stage-prod-migrate.html)
*	[Test deployment]({{ page.baseurl}}/cloud/live/stage-prod-test.html)
* [Go live and launch]({{ page.baseurl}}/cloud/live/live.html)

#### Related topics
* [Deployment troubleshooting]({{page.baseurl}}/cloud/access-acct/trouble.html)
*	[Get started with a project]({{page.baseurl}}/cloud/project/project-start.html)
*	[Get started with an environment]({{page.baseurl}}/cloud/env/environments-start.html)
*	[`.magento.app.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_magento-app.html)
*	[`routes.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_routes.html)
*	[`services.yaml`]({{page.baseurl}}/cloud/project/project-conf-files_services.html)
