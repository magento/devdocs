---
group: cloud-guide
title: Deployment process
redirect_from:
  - /cloud/discover-deploy.html
functional_areas:
  - Cloud
  - Deploy
---

Build and deploy scripts activate when you merge code to a remote environment.  These scripts use the environment configuration files and application code to prepare data and configurations to provision Cloud infrastructure and services, and to install or update the {{ site.var.data.ee }} application and third-party and custom extensions in the Cloud environment.

The build and deploy process is slightly different for each plan:

-  **Starter plans**—For the Integration environment, every active branch builds and deploys to a full environment for access and testing. Fully test your code after merging to the `staging` branch. To launch your site, push `staging` to `master` to deploy to the Production environment. You have full access to all branches through the Project Web Interface and the CLI commands.

-  **Pro plans**—For the Integration environment, every _active_ branch builds and deploys to a full environment for access and testing. You must merge your code to the `integration` branch before you can merge to the Staging environment and then the Production environment. You can merge to the Staging and Production environments using the Project Web Interface or using SSH and Magento Cloud CLI commands.

## Track the process {#track}

You can track build and deploy actions in real-time using the terminal or the Project Web UI Status messages—`in-progress`, `pending`, `success`, or `failed`—display during the deployment process. You can view details in the log files. See [View logs]({{ site.baseurl }}/cloud/project/log-locations.html).

If you are using external GitHub repositories, the log of operations does not display in the GitHub session. However, you can still follow activity in the interface for the external repository and the Project Web Interface. See [Integrations]({{ site.baseurl }}/cloud/integrations/cloud-integrations.html).

{:.bs-callout-info}
In Integration environments, you cannot view the deploy logs from the Project Web Interface. This feature is available only for Production and Staging environments. However, you can view logs for every phase of the deployment in any environment using the Magento [build and deploy]({{ site.baseurl }}/cloud/project/log-locations.html#build-and-deploy-logs) logs. For troubleshooting information, see the [Deployment error reference]({{site.baseurl}}/cloud/reference/error-codes.html).

## Project configuration {#cloud-deploy-conf}

A set of YAML configuration files located in the project root directory define your Magento installation and describe its dependencies. If you intend to make changes, modify the YAML files in your local branch. The build and deploy scripts access those files for specific settings.

For all Starter environments and Pro Integration environments, pushing your Git branch updates all settings and configurations dependent on these files.

-  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/magento-app.html)—defines how to build and deploy Magento, including user access, service mapping (relationships), hooks, cron jobs, and more.
-  [`.magento.env.yaml`]({{ site.baseurl }}/cloud/project/magento-env-yaml.html)—centralizes the management of build and deploy actions across all of your environments, including Pro Staging and Production, using environment variables.
-  [`.magento/routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html)—defines how Magento processes an incoming URL.
-  [`.magento/services.yaml`]({{ site.baseurl }}/cloud/project/services.html)—defines the services Magento uses by name and version. For example, this file can include versions of MySQL, PHP extensions, and Elasticsearch. These are referred to as *services*.
-  [`app/etc/config.php`]({{ site.baseurl }}/cloud/live/sens-data-over.html)—defines the [system-specific settings]({{ site.baseurl }}/cloud/live/sens-data-over.html#configuration-data) Magento uses to configure your store. Magento generates this file if it does not detect it during the build phase. See [Configuration Management]({{ site.baseurl }}/cloud/live/sens-data-over.html) for information on how to use this file to manage and synchronize the Magento application configuration across your Cloud environments.

## Required files for your Git branch {#requiredfiles}

Your Git branch must have the following files for building and deploying in your local environment and to Integration, Staging, and Production environments:

-  `auth.json`—in the root Magento directory. This file includes the Magento Authentication keys entered when creating the project. The file is generated as part of autoprovisioning a new project using a blank template. If you need to verify the file and settings, see [Troubleshooting deployment]({{ site.baseurl }}/cloud/trouble/troubleshoot-deployment.html).
-  [`app/etc/config.php`]({{ site.baseurl }}/cloud/live/sens-data-over.html)—auto-generates during the build phase if it does not exist.
-  [`.magento.app.yaml`]({{ site.baseurl }}/cloud/project/magento-app.html)—updates and saves to the root directory.
-  [`.magento/services.yaml`]({{ site.baseurl }}/cloud/project/services.html)—updates and saves to the `magento/` directory.
-  [`.magento/routes.yaml`]({{ site.baseurl }}/cloud/project/routes.html)—updates and saves to the `magento/` directory.

## Best practices for builds and deployment {#best-practices}

We highly recommend the following best practices and considerations for your deployment process:

-  **Ensure that you are running the most current version of the `{{site.data.var.ct}}` package**–See [Release notes for {{site.data.var.ct}}]({{ site.baseurl }}/cloud/release-notes/ece-release-notes.html).

-  **Follow the build and deploy process**–Ensure that you have the correct code in each environment to avoid overwriting configurations when merging code between environments. For example, to make configuration changes that apply to all environments, modify and test the changes in the local environment before deploying to Integration, and then deploy and test the changes in Staging before deploying to Production. When you merge from one environment to another, the deployment overwrites all code in the remote environment, except environment-specific configuration and settings. See [Build and deploy full steps](#steps).

-  **Use the same variables across environments**–The values for these variables may differ across environments; however, you usually need the same variables in each environment. See [Configuration management for store settings]({{ site.baseurl }}/cloud/live/sens-data-over.html).

-  **Keep sensitive configuration values and data in environment-specific variables**–This includes variables specified using the Magento Cloud CLI, the Project Web interface, or added to the `env.php` file. See [Working with environment variables]({{ site.baseurl }}/cloud/env/working-with-variables.html).

-  **Ensure that all code is available in the environment branch**–If you point to or include hooks to code in other branches, such as a private branch, you may encounter problems with the build and deploy process. For example, if you include a theme from a private repository in your branch, the theme will not build with the Magento code.

-  **Add new extensions, integrations, and code in iterated branches**–Make and test changes locally, push to Integration, then to Staging and Production. Test and resolve issues in each environment before merging the updates to the next environment. Some extensions and integrations must be enabled and configured in a specific order due to dependencies. Adding these in groups can make your build and deploy process much easier and help determine where issues occur.

-  **Verify service versions and relationships and the ability to connect**–Verify the services that are available to your application and ensure you are using the most current, compatible version. See [Service versions]({{ site.baseurl }}/cloud/project/services.html#service-versions) and [Service relationships]({{ site.baseurl }}/cloud/project/services.html#service-relationships).

-  **Test locally and in the Integration environment before deploying to Staging and Production**–Identify and fix issues in your local and Integration environments to prevent extended downtime when you deploy to Staging and Production environments.

   -  Use the `magento-cloud local:build` command to test the build in your local environment. Identify and fix any issues related to composer dependencies and environment and application configuration before deploying to a remote environment. See [Test build your code locally before deployment]({{ site.baseurl }}/cloud/live/live-sanity-check.html#test-build).

   -  Run the {{ site.data.var.ece }} smart wizard to ensure that your Cloud project configuration follows best practices for build and deployment including static content deployment (SCD) strategy. See [Smart wizard]({{ site.baseurl }}/cloud/deploy/smart-wizards.html).

-  **After completing testing in local and Integration environments, deploy and test in the Staging environment**–See [Deploy code to Staging and Production]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html#code).

-  **Check Production environment configuration**–Before deploying to Production, complete the following tasks:

   -  Ensure that you can connect to all three nodes in the Production environment using [SSH]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh).

   -  Verify that Indexers are set to _Update on Schedule_. See [Indexing modes]({{ site.baseurl }}/guides/v2.3/extension-dev-guide/indexing.html) in the _Extension Developer Guide_.

   -  Prepare the environment by updating any environment-specific variables in the Production code, verifying service availability and compatibility, and making any other required configuration changes.

-  **Monitor the deploy process**–Review the deployment status messages and mitigate issues as needed. Review the Cloud [logs]({{ site.baseurl }}/cloud/project/log-locations.html) for detailed log messages.

## Best practices for upgrading your project

Follow best practices for builds and deployment, and use the [Upgrades and patches]({{ site.baseurl }}/cloud/project/project-upgrade-parent.html) workflow to upgrade your project and environments. Use the following guidelines to plan your upgrade and post-upgrade work:

-  **Backup your project**–Before upgrading the {{ site.data.var.ee }} and any third-party or custom extensions, back up the database in Integration, Staging, and Production environments. See [Back up the database]({{ site.baseurl }}/cloud/project/project-upgrade.html#back-up-the-database).

-  **Check for compatibility issues**–

   -  Ensure that any custom themes are compatible with the new {{ site.data.var.ee }} version

   -  After upgrading third party and custom extensions, use the `magento-cloud local:build` command to validate composer dependencies before deploying.

   -  Review the {{ site.data.var.ee }} release notes and extension documentation to ensure that you have implemented any workarounds or configuration changes required to address known functional issues and bugs related to the upgraded Magento version and extensions.

   -  Ensure that the installed service versions are compatible with the new {{ site.data.var.ee }} version, and upgrade services as needed. See [Services]({{ site.baseurl }}/cloud/project/services.html).

   -  Test your database to address any issues introduced by the updates to the Magento version and extensions.

   -  Make any required updates to environment-specific settings before deploying to the remote environment.

   -  Ensure that the Elasticsearch service version is compatible with the Elasticsearch PHP client version. See [Set up Elasticsearch]({{ site.baseurl }}/cloud/project/services-elastic.html).

-  **Check database connectivity and available storage in remote environments**–

   -  Use SSH to log in to the remote server and verify the connection to the MySQL database. See [Connect to the database]({{ site.baseurl }}/cloud/project/services-mysql.html#connect-to-the-database).

   -  Verify available storage in the remote environment–Use the `disk free` command to view and manage available disk space on your Cloud environments. See [Manage disk space]({{ site.baseurl }}/cloud/project/manage-disk-space.html).

      -  Check the size of the upgraded database and verify that the `services.yaml` file has enough disk space allocated.

      -  Free up disk space–Clear the cache, and clean the `/log` and `/tmp` directories before deploying.

-  **Plan and perform a successful upgrade on local and Integration environments, before deploying to Staging**–After upgrade, test your deployment and resolve any issues. See [Build and deploy on local]({{ site.baseurl }}/cloud/live/live-sanity-check.html).

-  **Merge code to Staging, and then to Production**–Test and resolve any issues in the Staging environment before pushing changes to the Production environment. See [Prepare to deploy to Staging and Production]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html).

-  **Complete Post upgrade tasks**–

   -  Use SSH to log in to the remote server and verify the following:

      -  Check indexer status and reindex as needed. See [Manage the indexers]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-index.html).

      -  Check the `cron` logs and the `cron_schedule` table in the Magento database to verify cron status, and rerun cron jobs as needed.
      See [Logging]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-cron.html#logging) in the _Configuration Guide_.

   -  Complete post-upgrade User Acceptance Testing UAT on Staging and Production environments and fix any issues related to third-party and custom extension upgrades. See [User Acceptance Testing (UAT)]({{ site.baseurl}}/cloud/live/stage-prod-test.html).

## Five phases of Integration build and deployment {#cloud-deploy-over-phases}

The following phases occur in your local development environment and the Integration environment. For Pro plans, the code is not deployed to the Staging or Production environments in these initial phases. See [Deploy code to Staging and Production]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html).

Integration build and deployment consists of the following phases:

[Phase 1: Configuration validation and code retrieval](#cloud-deploy-over-phases-conf)

[Phase 2: Build](#cloud-deploy-over-phases-build)

[Phase 3: Prepare slug](#cloud-deploy-over-phases-slug)

[Phase 4: Deploy slugs and cluster](#cloud-deploy-over-phases-slugclus)

[Phase 5: Deployment hooks](#cloud-deploy-over-phases-hook)

[Post-deployment: configure routing](#cloud-deploy-over-phases-route)

For detailed instructions, see [Build and deploy full steps](#steps).

### Phase 1: Code and configuration validation {#cloud-deploy-over-phases-conf}

When you initially set up a project from a template, we retrieve the code from [the {{site.data.var.ece}} template](https://github.com/magento/magento-cloud). This code repo is cloned to your project as the `master` branch.

-  **For Starter**—`master` branch is your Production environment.
-  **For Pro**—`master` begins as origin branch for the Integration environment.

You should create a branch from `master` for your custom code, extensions and modules, and third party integrations. We provide a full Integration environment for testing your code in the cloud.

When you push your code from your local workspace to the remote repository, a series of checks and code validation completes prior to build and deploy scripts. The built-in Git server checks what you are pushing and makes changes. For example, you may want to add an Elasticsearch instance. The built-in Git server detects this and verifies that the topology of your cluster is modified to your new needs.

If you have a syntax error in a configuration file, our Git server refuses the push. For details, see [Protective Block]({{ site.baseurl }}/cloud/live/live-prot.html).

This phase also runs `composer install` to retrieve dependencies.

### Phase 2: Build {#cloud-deploy-over-phases-build}

{:.bs-callout-info}
During the build phase, the site is not in maintenance mode and will not be brought down if errors or issues occur. We build only what has changed since the last build.

This phase builds the codebase and runs hooks in the `build` section of `.magento.app.yaml`. The default Magento build hook is the `php ./vendor/bin/ece-tools` command and performs the following:

-  Applies patches located in `vendor/magento/ece-patches`, as well as optional, project-specific patches in `m2-hotfixes`
-  Regenerates code and the [dependency injection](https://glossary.magento.com/dependency-injection) configuration (that is, the Magento `generated/` directory, which includes `generated/code` and `generated/metapackage`) using `bin/magento setup:di:compile`.
-  Checks if the [`app/etc/config.php`]({{ site.baseurl }}/cloud/live/sens-data-over.html) file exists in the codebase. Magento auto-generates this file if it does not detect it during the build phase and includes a list of modules and extensions. If it exists, the build phase continues as normal, compresses static files using `gzip`, and deploys the files, which reduces downtime in the deployment phase. Refer to [Magento build options]({{ site.baseurl }}/cloud/env/variables-build.html) to learn about customizing or disabling file compression.

{:.bs-callout-warning}
At this point, the cluster has not been created yet, so you should not try to connect to a database or assume anything was daemonized.

After the application builds, it is mounted on a **read-only file system**. You can configure specific mount points that are going to be read/write. You cannot FTP to the server and add modules. Instead, you must add code to your local repository and run `git push`, which builds and deploys the environment. For the project structure, see [Local project directory structure]({{ site.baseurl }}/cloud/project/project-start.html).

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

{:.bs-callout-info}
Make your changes in a Git branch after all build and deployment completes and push again. All environment file systems are _read-only_. A read-only system guarantees deterministic deployments and dramatically improves your site security because no process can write to the file system. It also works to ensure your code is identical in the Integration, Staging, and Production environments.

### Phase 5: Deployment hooks {#cloud-deploy-over-phases-hook}

{:.bs-callout-info}
This phase puts the application in maintenance mode until deployment is complete.

The last step runs a deployment script, which you can use to anonymize data in development environments, clear caches, and ping external, continuous integration tools. When this script runs, you have access to all the services in your environment, such as Redis.

If the `app/etc/config.php` file does not exist in the codebase, static files are compressed using `gzip` and deployed during this phase. This increases the length of your deploy phase and site maintenance.

{:.bs-callout-info}
Refer to [Magento deploy variables]({{ site.baseurl }}/cloud/env/variables-deploy.html) to learn about customizing or disabling file compression.

There are two default deploy hooks. The `pre-deploy.php` hook completes necessary cleanup and retrieval of resources and code generated in the build hook. The `php ./vendor/bin/ece-tools deploy` hook runs a series of commands and scripts:

-  If Magento is **not installed**, it installs Magento with `bin/magento setup:install`, updates the deployment configuration, `app/etc/env.php`, and the database for your specified environment, such as Redis and website URLs. **Important:** When you completed the [First time deployment]({{ site.baseurl }}/cloud/setup/first-time-deploy.html) during setup, {{site.data.var.ee}} was installed and deployed across all environments.

-  If Magento **is installed**, performs any necessary upgrades. The deployment script runs [`bin/magento setup:upgrade`]({{ site.baseurl }}/guides/v2.3/install-gde/install/cli/install-cli-subcommands-db-upgr.html) to update the database schema and data (which is necessary after extension or core code updates), and also updates the [deployment configuration]({{ site.baseurl }}/guides/v2.3/config-guide/config/config-php.html), `app/etc/env.php`, and the database for your environment. Finally, the deployment script clears the Magento cache.

-  The script optionally generates static web content using the command [`magento setup:static-content:deploy`]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html).

-  Uses scopes (`-s` flag in build scripts) with a default setting of `quick` for static content deployment strategy. You can customize the strategy using the environment variable [`SCD_STRATEGY`]({{ site.baseurl }}/cloud/env/environment-vars_magento.html). For details on these options and features, see [Static files deployment strategies]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-deploy-strategies.html) and the `-s` flag for [Deploy static view files]({{ site.baseurl }}/guides/v2.3/config-guide/cli/config-cli-subcommands-static-view.html).

{:.bs-callout-info}
Our deploy script uses the values defined by configuration files in the `.magento` directory, then the script deletes the directory and its contents. Your local development environment is not affected.

### Post-deployment: configure routing {#cloud-deploy-over-phases-route}

While the deployment is running, we freeze the incoming traffic at the entry point for 60 seconds. We are now ready to configure routing so your web traffic arrives at your newly created cluster.

Successful deployment removes the maintenance mode to allow for normal access and creates backup (BAK) files for the `app/etc/env.php` and the `app/etc/config.php` configuration files.

If you enabled static content generation using the `SCD_ON_DEMAND` variable and you configured the [`post_deploy` hook]({{ site.baseurl }}/cloud/project/magento-app-properties.html#hooks), this clears the cache and pre-loads (warms) the cache _after_ the container begins accepting connections and _during_ normal, incoming traffic.

To review build and deploy logs, see [View logs]({{ site.baseurl }}/cloud/project/log-locations.html).

### Build and deploy full steps {#steps}

With an understanding of the process, we provide the following instructions for build and deploy for your local, Integration, Staging, and finally Production:

-  [Build and deploy to your local]({{ site.baseurl }}/cloud/live/live-sanity-check.html)
-  [Prepare to deploy]({{ site.baseurl }}/cloud/live/stage-prod-migrate-prereq.html)
-  [Deploy code and data]({{ site.baseurl }}/cloud/live/stage-prod-migrate.html)
-  [Test deployment]({{ site.baseurl }}/cloud/live/stage-prod-test.html)
-  [Site launch]({{ site.baseurl }}/cloud/live/live.html)
