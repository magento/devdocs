---
group: cloud-guide
title: ece-tools package
functional_areas:
  - Cloud
---

The `{{site.data.var.ct}}` package is a set of scripts and tools designed to manage and deploy {{site.data.var.ece}} projects. The `{{site.data.var.ct}}` package simplifies many {{site.data.var.ece}} processes, such as deploying to a Docker environment, managing crons, verifying project configuration, and applying  Magento patches and hot fixes. You can view and contribute to the open-source [ece-tools repository on Github](https://github.com/magento/ece-tools).

{% include cloud/note-ece-tools-package.md %}

The `{{site.data.var.ct}}` package is compatible with {{site.data.var.ee}}—starting with version 2.1.4—and contains scripts and {{site.data.var.ece}} commands designed to help manage your code and automatically build and deploy your projects.

The following lists the available `{{site.data.var.ct}}` commands:

```bash
php ./vendor/bin/ece-tools list
```

```terminal
Available commands:
  build                    Builds application.
  db-dump                  Creates database backups.
  deploy                   Deploys application.
  help                     Displays help for a command.
  list                     Lists commands.
  patch                    Applies custom patches.
  post-deploy              Performs after deploy operations.
  run                      Execute scenario(s).
 backup
  backup:list              Shows the list of backup files.
  backup:restore           Restore important configuration files. Run backup:list to show the list of backup files
 build.
  build:generate           Generates all necessary files for build stage.
  build:transfer           Transfers generated files into init directory.
 cloud
  cloud:config:create      Creates a `.magento.env.yaml` file with the specified build, deploy, and post-deploy variable configuration. Overwrites any existing `.magento,.env.yaml` file.
  cloud:config:update      Updates the existing `.magento.env.yaml` file with the specified configuration. Creates `.magento.env.yaml` file if it does not exist.
 config
  config:dump              [dump] Dump configuration for static content deployment.
 cron
  cron:disable             Disable all Magento cron processes and kills currently running.
  cron:enable              Enable Magento cron processes.
  cron:kill                Kill all Magento cron processes.
  cron:unlock              Unlock cron jobs that stuck in "running" state.
 dev
  dev:git:update-composer  Updates composer for deployment from git.
 env
  env:config:show          Display encoded cloud configuration environment variables.
 error
  error:show               Display info about error by error id or info about all errors from the last deployment.
 module
  module:refresh           Refresh config to enable newly added modules.
 wizard
  wizard:ideal-state       Verifies ideal state of configuration.
  wizard:master-slave      Verifies master-slave configuration.
  wizard:scd-on-build      Verifies SCD on build configuration.
  wizard:scd-on-demand     Verifies SCD on demand configuration.
  wizard:scd-on-deploy     Verifies SCD on deploy configuration.
  wizard:split-db-state    Verifies ability to split DB and whether DB was already split or not.
```
{:.no-copy}

## Build and deploy

The `{{site.data.var.ct}}` package contains commands to perform operations for the build, deploy, and post-deploy stages of launching your {{site.data.var.ece}} application. For example, the `php ./vendor/bin/ece-tools build` command begins the application build process.

By default, these `{{site.data.var.ct}}` commands are in the [hooks property][hooks] of the `.magento.app.yaml` configuration file.

## Docker configuration generator

The `{{site.data.var.ct}}` package includes a dependency for the [magento/magento-cloud-docker] package, which provides functionality and configuration files for Docker images to launch a Docker development environment for {{site.data.var.ece}}. You can also run {{site.data.var.mcd-prod}} as a stand-alone package. See [Docker development].

## Services, routes, and variables

You can use the `{{site.data.var.ct}}` package to display detailed information about the Base64-encoded [Cloud variables][cloudvar] used in any Cloud environment. The following command shows all services, routes, and variables.

```bash
php ./vendor/bin/ece-tools env:config:show
```

To display a specific set of information, use the following format:

```bash
php ./vendor/bin/ece-tools env:config:show <option>
```

-  `services`—Displays the relationship data from the `MAGENTO_CLOUD_RELATIONSHIPS` environment variable, defined in the `services.yaml` file.
-  `routes`—Displays the configured routes for the project using the `MAGENTO_CLOUD_ROUTES` environment variable.
-  `variables`—Displays the configured variables for the project using the `MAGENTO_CLOUD_VARIABLES` environment variable.

Sample output for the `services` option:

```terminal
Magento Cloud Services:
+-----------------------------------+----------------------------------+
| Service Configuration             | Value                            |
+-----------------------------------+----------------------------------+
| database:                                                            |
+-----------------------------------+----------------------------------+
| host                              | 127.0.0.1                        |
| password                          | <password>                       |
| port                              | 3306                             |
+-----------------------------------+----------------------------------+
| elasticsearch:                                                       |
+-----------------------------------+----------------------------------+
| host                              | 127.0.0.1                        |
| port                              | 9200                             |
...
```
{:.no-copy}

## Verify environment configuration

There is a set of verification commands available to help evaluate the configuration of your project. See [Smart wizards][wizard] in the _Optimize deployment_ section for a detailed description of each wizard command. The `wizard:ideal-state` command runs automatically during the build phase. To verify the ideal state of your project:

```bash
php ./vendor/bin/ece-tools wizard:ideal-state
```

 {:.bs-callout-info}
You must run the `wizard:ideal-state` command in the Cloud environment. The command always returns the `The configured state is not ideal` error when run in the local development environment.

Sample output:

```terminal
Ideal state is configured
```
{:.no-copy}

{% include cloud/note-ece-tools-release-info.md %}

## Magento patches and custom patches

The `{{site.data.var.ct}}` package includes a dependency for the [magento/magento-cloud-patches] package, which delivers Magento patches and hot fixes that improve the integration of all {{site.data.var.ee}} versions with Cloud environments and supports quick delivery of critical fixes. The `{{site.data.var.mcp-package}}` also delivers custom patches that you add to your {{site.data.var.ece}} project. See [Apply patches].

<!-- link definitions -->
[mode]: {{site.baseurl}}/cloud/docker/docker-config.html#set-the-launch-mode
[hooks]: {{site.baseurl}}/cloud/project/magento-app-properties.html#hooks
[cloudvar]: {{site.baseurl}}/cloud/env/variables-cloud.html
[wizard]: {{site.baseurl}}/cloud/deploy/smart-wizards.html
[Docker development]: {{site.baseurl}}/cloud/docker/docker-development.html
[Apply patches]: {{site.baseurl}}/cloud/project/project-patch.html
[magento/magento-cloud-docker]: https://github.com/magento/magento-cloud-docker
[magento/magento-cloud-patches]: https://github.com/magento/magento-cloud-patches
