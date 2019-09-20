---
group: cloud-guide
title: ece-tools package
functional_areas:
  - Cloud
---

The `{{site.data.var.ct}}` package is a set of scripts and tools designed to manage and deploy {{site.data.var.ece}} projects. The `{{site.data.var.ct}}` package simplifies many {{site.data.var.ece}} processes, such as Docker environment deployment, cron management, and project verification. You can view and contribute to the open-source [ece-tools repository on Github](https://github.com/magento/ece-tools).

{% include cloud/note-ece-tools-package.md %}

The `{{site.data.var.ct}}` package is compatible with {{site.data.var.ee}}—starting with version 2.1.4—and contains scripts and {{site.data.var.ece}} commands designed to help manage your code and automatically build and deploy your projects.

To list the available `{{site.data.var.ct}}` commands:

```bash
php ./vendor/bin/ece-tools list
```

## Build and deploy

The `{{site.data.var.ct}}` package contains commands to perform operations for the build, deploy, and post-deploy stages of launching your {{site.data.var.ece}} application. For example, the `php ./vendor/bin/ece-tools build` command begins the application build process.

By default, these `{{site.data.var.ct}}` commands are in the [hooks property][hooks] of the `.magento.app.yaml` configuration file.

## Docker configuration generator

The `{{site.data.var.ct}}` package provides all the commands necessary to [launch a Docker development environment]({{page.baseurl}}/cloud/docker/docker-config.html).

Command | Action
:------ | :------
`docker:build` | Builds the docker environment in [production mode][mode] by default and verifies configured service versions.
`docker:build --mode="developer"` | Builds the docker environment in [developer mode][mode].
`docker:config:convert` | Convert PHP configuration files to Docker ENV files.

The following example lists the `{{site.data.var.ct}}` Docker commands:

```bash
php ./vendor/bin/ece-tools list | grep docker
```

Sample response:

```terminal
 docker
  docker:build              Build docker configuration
  docker:config:convert     Convert raw config to .env files configuration
```
{: .no-copy}

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
{: .no-copy}

## Verify environment configuration

There is a set of verification commands available to help evaluate the configuration of your project. See [Smart wizards][wizard] in the _Optimize deployment_ section for a detailed description of each wizard command. The `wizard:ideal-state` command runs automatically during the build phase. To verify the ideal state of your project:

```bash
php ./vendor/bin/ece-tools wizard:ideal-state
```

Sample output:

```terminal
Ideal state is configured
```
{:.no-copy}

{% include cloud/note-ece-tools-release-info.md %}

<!-- link definitions -->
[mode]: {{page.baseurl}}/cloud/docker/docker-config.html#launch-modes
[hooks]: {{page.baseurl}}/cloud/project/project-conf-files_magento-app.html#hooks
[cloudvar]: {{page.baseurl}}/cloud/env/variables-cloud.html
[wizard]: {{page.baseurl}}/cloud/deploy/smart-wizards.html