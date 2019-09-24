---
group: cloud-guide
title: Deployment process
redirect_from:
  - /guides/v2.2/cloud/discover-deploy.html
functional_areas:
  - Cloud
  - Deploy
---

Every time you push code from your local workstation to the remote environment or merge code to a base environment branch, such as a merge from the Integration environment to the Staging environment, this activates the build and deploy scripts. These scripts generate new Magento code and provision configured services to the remote environment.

The build and deploy process is slightly different for each plan:

-  **Starter plans**—For the Integration environment, every active branch build and deploys to a full environment for access and testing. Fully test your code after merging to the `staging` branch. To go live, push `staging` to `master` to deploy to Production. You have full access to all branches through the Project Web Interface and the CLI commands.
-  **Pro plans**—For the Integration environment, every _active_ branch builds and deploys to a full environment for access and testing. You must merge your code to the `integration` branch before you can merge to the Staging environment and then the Production environment. You can only merge to Staging and Production using CLI commands with SSH or using the Project Web Interface.

{:.bs-callout .bs-callout-info}
Verify the code for your site and stores is in the {{site.data.var.ece}} branch. If you point, or include hooks, to code in other branches, such as a private branch, you may encounter problems with the build and deploy process. For example, if you include a theme from a private repo in your branch, the theme will not build with the Magento code.

## Track the process {#track}

You can track build and deploy actions in real-time using the terminal or the Project Web Interface. The status displays in-progress, pending, success, or failed. You can view the logs in the interface.

If you are using external GitHub repositories, the log of the operations does not display in the GitHub session. You can still follow activity in their interface and in the {{site.data.var.ece}} Project Web Interface.

## Project configuration {#cloud-deploy-conf}

A set of YAML configuration files located in the project root directory define your Magento installation and describe its dependencies. If you intend to make changes, modify the YAML files in your local branch. The build and deploy scripts access those files for specific settings.

For all Starter environments and Pro Integration environments, pushing your Git branch updates all settings and configurations dependent on these files.

-  [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—defines how to build and deploy Magento, including services, hooks, cron jobs, and more.
- [`.magento.env.yaml`]({{ page.baseurl }}/cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables.
-  [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—defines how Magento processes an incoming URL.
-  [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—defines the services Magento uses by name and version. For example, this file may include versions of MySQL, PHP extensions, and Elasticsearch. These are referred to as *services*.
-  [`app/etc/config.php`]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html)—defines the [system-specific settings]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html#cloud-clp-settings) Magento uses to configure your store. Magento auto-generates this file if it does not detect it during the build phase and includes a list of modules and extensions. If the file exists, the build phase continues as normal, compresses static files using `gzip`, and deploys the files. If you follow [Configuration Management]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html) at a later time, the commands update the file without requiring additional steps.

   {:.bs-callout .bs-callout-info}
   The `app/etc/config.php` file includes a _scopes_ setting that defines how static files deploy during the build phase. By default, the scope is [quick]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-quick). Static file deployment takes a long time to complete, so doing it during the build phase reduces deployment and site downtime.

## Required files for your Git branch {#requiredfiles}

Your Git branch must have the following files for building and deploying in your local environment and to Integration, Staging, and Production environments:

-  `auth.json`—in the root Magento directory. This file includes the Magento Authentication keys entered when creating the project. The file is generated as part of autoprovisioning a new project using a blank template. If you need to verify the file and settings, see [Troubleshoot deployment]({{ page.baseurl }}/cloud/trouble/troubleshoot-deployment.html).
-  [`app/etc/config.php`]({{ site.baseurl }}/guides/v2.2/cloud/live/sens-data-over.html)—auto-generates during the build phase if it does not exist.
-  [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html)—updates and saves to the root directory.
-  [`.magento/services.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_services.html)—updates and saves `magento/`.
-  [`.magento/routes.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_routes.html)—updates and saves to `magento/`.

## Best practices for builds and deployment {#best-practices}

We highly recommend the following best practices and considerations for your deployment process:

-  **Always follow the deployment process** to ensure your code is THE SAME in Integration, Staging, and Production. This is vital. Pushing code from Integration environments may become important or needed for upgrades, patches, and configurations. This deployment overwrites Production and any differences in code in that environment.
-  **Always add new extensions, integrations, and code in iterated branches** to then build and deploy using the process. Some extensions and integrations must be enabled and configured in a specific order due to dependencies. Adding these in groups can make your build and deploy process much easier and help determine where issues occur.
-  **Enter the same variables environment-to-environment.** The values for these [variables]({{ page.baseurl }}/cloud/env/variables-intro.html) may differ across environments, but the variables may be required for your code.
-  **Keep sensitive configuration values and data in environment-specific variables.** This includes an `env.php` file, CLI-entered variables, and Project Web Interface-entered variables. The values can differ, but having the variables is important.
-  **Test your build and deploy locally and in Staging before deploying to Production.** Extensions and custom code work great in development. Some users push to production only to have failures and issues. Staging gives you an opportunity to fully test your code and implementation in a production environment without extended downtime if something goes wrong in Production.

## Five phases of Integration build and deployment {#cloud-deploy-over-phases}

The following phases occur in your local development environment and the Integration environment. For Pro plans, the code is not deployed to the Staging or Production environments in these initial phases. See [Deploy code to Staging and Production]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html).

Integration build and deployment consists of the following phases:

[Phase 1: Configuration validation and code retrieval](#cloud-deploy-over-phases-conf)
[Phase 2: Build](#cloud-deploy-over-phases-build)
[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)
[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus)
[Phase 5: Deployment hooks](#cloud-deploy-over-phases-hook)
[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

For detailed instructions, see [Build and deploy full steps](#steps).

### Phase 1: Code and configuration validation {#cloud-deploy-over-phases-conf}

When you initially set up a project from a template, we retrieve the code from the [the {{site.data.var.ee}} template](https://github.com/magento/magento-cloud). This code repo is cloned to your project as the `master` branch.

-  **For Starter**—`master` branch is your Production environment.
-  **For Pro**—`master` begins as origin branch for the Integration environment.

You should create a branch from `master` for your custom code, extensions and modules, and third party integrations. We provide a full Integration environment for testing your code in the cloud.

When you push your code from your local workspace to the remote repository, a series of checks and code validation completes prior to build and deploy scripts. The built-in Git server checks what you are pushing and makes changes. For example, you may want to add an Elasticsearch instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

If you have a syntax error in a configuration file, our Git server refuses the push. For details, see [Protective Block]({{ page.baseurl }}/cloud/live/live-prot.html).

This phase also runs `composer install` to retrieve dependencies.

### Phase 2: Build {#cloud-deploy-over-phases-build}

{:.bs-callout .bs-callout-info}
During the build phase, the site is not in maintenance mode and will not be brought down if errors or issues occur. We build only what has changed since the last build.

This phase builds the codebase and runs hooks in the `build` section of `.magento.app.yaml`. The default Magento build hook is the `php ./vendor/bin/ece-tools` command and performs the following:

-  Applies patches located in `vendor/magento/ece-patches`, as well as optional, project-specific patches in `m2-hotfixes`
-  Regenerates code and the [dependency injection](https://glossary.magento.com/dependency-injection) configuration (that is, the Magento `generated/` directory, which includes `generated/code` and `generated/metapackage`) using `bin/magento setup:di:compile`.
-  Checks if the [`app/etc/config.php`]({{ page.baseurl }}/cloud/live/sens-data-over.html) file exists in the codebase. Magento auto-generates this file if it does not detect it during the build phase and includes a list of modules and extensions. If it exists, the build phase continues as normal, compresses static files using `gzip`, and deploys the files, which reduces downtime in the deployment phase. Refer to [Magento build options]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-build.html) to learn about customizing or disabling file compression.

  {:.bs-callout .bs-callout-info}
  The `app/etc/config.php` file includes a _scopes_ setting that defines how static files deploy during the build phase. By default, the scope is [`quick`]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html#static-file-quick). Static file deployment takes a long time to complete, so initiating it during the build phase helps to reduce deployment and site downtime.

{:.bs-callout .bs-callout-warning}
At this point, the cluster has not been created yet, so you should not try to connect to a database or assume anything was daemonized.

After the application builds, it is mounted on a **read-only file system**. You can configure specific mount points that are going to be read/write. You cannot FTP to the server and add modules. Instead, you must add code to your local repository and run `git push`, which builds and deploys the environment. For the project structure, see [Local project directory structure]({{ page.baseurl }}/cloud/project/project-start.html).

### Phase 3: Prepare the slug {#cloud-deploy-over-phases-slug}

The result of the build phase is a read-only file system referred to as a *slug*. In this phase, we create an archive and put the slug in permanent storage. The next time you push code, if a service did not change, it uses the slug from the archive.

-  Makes continuous integration build faster by reusing unchanged code
-  If code changes, updates the slug for the next build to reuse
-  Allows for instantaneous reverting of a deployment, if needed
-  Includes static files if the `app/etc/config.php` file exists in the codebase

The slug includes all files and folders **excluding the following** mounts configured in `magento.app.yaml`:

-  `"var": "shared:files/var"`
-  `"app/etc": "shared:files/etc"`
-  `"pub/media": "shared:files/media"`
-  `"pub/static": "shared:files/static"`

### Phase 4: Deploy slugs and cluster {#cloud-deploy-over-phases-slugclus}

Now we provision your applications and all of the [backend](https://glossary.magento.com/backend) services you need:

-  Mounts each service in a container (web server, Elasticsearch, RabbitMQ)
-  Mounts the read-write file system (mounted on a highly available distributed storage grid)
-  Configures the network so Magento services can "see" each other (and only each other)

{:.bs-callout .bs-callout-info}
Make your changes in a Git branch after all build and deployment completes and push again. All environment file systems are _read-only_. A read-only system guarantees deterministic deployments and dramatically improves your site security because no process can write to the file system. It also works to ensure your code is identical in the Integration, Staging, and Production environments.

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}

{:.bs-callout .bs-callout-info}
This phase puts the application in maintenance mode until deployment is complete.

The last step runs a deployment script, which you can use to anonymize data in development environments, clear caches, and ping external, continuous integration tools. When this script runs, you have access to all the services in your environment, such as Redis.

If the `app/etc/config.php` file does not exist in the codebase, static files are compressed using `gzip` and deployed during this phase. This increases the length of your deploy phase and site maintenance.

{:.bs-callout .bs-callout-info}
Refer to [Magento deploy variables]({{ site.baseurl }}/guides/v2.2/cloud/env/variables-deploy.html) to learn about customizing or disabling file compression.

There are two default deploy hooks. The `pre-deploy.php` hook completes necessary cleanup and retrieval of resources and code generated in the build hook. The `php ./vendor/bin/m2-ece-deploy` hook runs a series of commands and scripts:

-  If Magento is **not installed**, it installs Magento with `bin/magento setup:install`, updates the deployment configuration, `app/etc/env.php`, and the database for your specified environment, such as Redis and website URLs. **Important:** When you completed the [First time deployment]({{ page.baseurl }}/cloud/setup/first-time-deploy.html) during setup, {{site.data.var.ee}} was installed and deployed across all environments.

-  If Magento **is installed**, performs any necessary upgrades. The deployment script runs [`bin/magento setup:upgrade`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and data (which is necessary after extension or core code updates), and also updates the [deployment configuration]({{ page.baseurl }}/config-guide/config/config-php.html), `app/etc/env.php`, and the database for your environment. Finally, the deployment script clears the Magento cache.

-  The script optionally generates static web content using the command [`magento setup:static-content:deploy`]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html).

-  Uses scopes (`-s` flag in build scripts) with a default setting of `quick` for static content deployment strategy. You can customize the strategy using the environment variable [`SCD_STRATEGY`]({{ site.baseurl }}/guides/v2.2/cloud/env/environment-vars_magento.html). For details on these options and features, see [Static files deployment strategies]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html) and the `-s` flag for [Deploy static view files]({{ site.baseurl }}/guides/v2.2/config-guide/cli/config-cli-subcommands-static-view.html).

{:.bs-callout .bs-callout-info}
Our deploy script uses the values defined by configuration files in the `.magento` directory, then the script deletes the directory and its contents. Your local development environment is not affected.

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}

While the deployment is running, we freeze the incoming traffic at the entry point for 60 seconds. We are now ready to configure routing so your web traffic arrives at your newly created cluster.

Successful deployment removes the maintenance mode to allow for normal access and creates backup (BAK) files for the `app/etc/env.php` and the `app/etc/config.php` configuration files.

If you enabled static content generation using the `SCD_ON_DEMAND` variable and you configured the [`post_deploy` hook]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html#hooks), this clears the cache and pre-loads (warms) the cache _after_ the container begins accepting connections and _during_ normal, incoming traffic.

To review build and deploy logs, see [Log locations]({{page.baseurl}}/cloud/project/log-locations.html).

### Build and deploy full steps {#steps}

With an understanding of the process, we provide the following instructions for build and deploy for your local, Integration, Staging, and finally Production:

-  [Build and deploy to your local]({{ page.baseurl }}/cloud/live/live-sanity-check.html)
-  [Prepare to deploy]({{ page.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)
-  [Deploy code and data]({{ page.baseurl }}/cloud/live/stage-prod-migrate.html)
-  [Test deployment]({{ page.baseurl }}/cloud/live/stage-prod-test.html)
-  [Go live and launch]({{ page.baseurl }}/cloud/live/live.html)
