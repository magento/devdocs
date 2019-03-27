---
group: cloud-guide
title: Project structure
functional_areas:
  - Cloud
  - Configuration
---
All {{site.data.var.ece}} projects include essential files for credentials and application configuration:

File | Description
--- | ---
`/.magento/routes.yaml` | Configuration file that redirects `www` to the naked domain and `php` application to serve HTTP. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`/.magento/services.yaml` | Configuration file that defines a MySQL instance, Redis, and ElasticSearch. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`/app` | The `code` folder is used for custom modules. The `design` folder is used for custom themes. See [Install a theme]({{ page.baseurl }}/cloud/howtos/custom-theme.html). The `etc` folder contains configuration files for Magento.
`/m2-hotfixes` | Used for custom patches.
`.gitignore` | Specify which files and directories to ignore. See [`.gitignore` reference](#ignoring-files).
`.magento.app.yaml` | Configuration file that defines the properties to build your application. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`.magento.env.yaml` | Configuration file that defines actions for the build, deploy, and post-deploy phases. The ece-tools package includes a sample of this file with detailed descriptions for the available variables. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`composer.json` | Fetches the Magento Enterprise Edition and the necessary configuration scripts to prepare your application. See [Prepare your Magento install]({{ page.baseurl }}/cloud/setup/first-time-setup-import-prepare.html).
`composer.lock` | Stores version dependencies for every package.
`magento-vars.php` | A file used to define [multiple stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html) and sites using [Magento variables]({{ page.baseurl }}/config-guide/multi-site/ms_over.html).

{: .bs-callout .bs-callout-info}
When you push your local environment to the remote server, our deploy script uses the values defined by configuration files in the `.magento` directory, then the script deletes the directory and its contents. Your local development environment is not affected.

## Ignoring files

We include a base `.gitignore` file with the {{site.data.var.ece}} project repository. See [.gitignore file](https://github.com/magento/magento-cloud/blob/master/.gitignore). You can add an ignored file when staging a commit by using the `-f` option:

```bash
git add <path/filename> -f
```

## Magento application root directory {#rootdir}

The Magento application root directory is located in different locations depending on the environment.

For Starter:

-  Integration environment—the Magento application is located in the `/app` directory.
-  Production environment—the Magento application is located in the `/<project code>` directory.

For Pro:

-  Integration environment—the Magento application is located in the `/app` directory.
-  Staging environment—the Magento application is located in the `/<project code>_stg` directory.
-  Production environment—the Magento application is located in the ` /<project code>` directory.

## Writable directories {#write-dir}

In Integration, Staging, and Production, *only* the following directories are writable due to security reasons:

-	`var`
-	`pub/static`
-	`pub/media`
-	`app/etc`
-	`/tmp`

{: .bs-callout .bs-callout-info}
In Production, each node in the three-node cluster has a `/tmp` directory that is not shared with the other nodes.

## Logs {#logs}

The `/var/log` directory contains logs for each environment. You can access that directory by opening an SSH tunnel to the environment using the `magento-cloud environment:ssh -e <environment id>` command.

For Pro, the deployment log for Staging and Production is located in `/var/log/platform/<project ID>`.

Magento logs are located in the `<magento root dir>/var/log` directory.

## Build logs {#build-log}

After pushing to your environment, you can see the results of the both hooks. Logs from the build hook are redirected to the output stream of `git push`, so you can observe them in the terminal or capture them (along with error messages) with `git push > build.log 2>&1`.

### Deploy logs {#deploy-log}

You can review these logs via SSH into the environment. Change to the directories listed below to review the logs.

Logs from the deploy hook are located on the server in the following locations:

*	Integration: `/var/log/deploy.log`
*	Staging: `/var/log/platform/<project ID>/deploy.log`
*	Production: `/var/log/platform/{1|2|3}.<project ID>/deploy.log`

The value of `<project ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`.

For example, on the Staging environment for project `yw1unoukjcawe`, the deploy log is located at `/var/log/platform/yw1unoukjcawe_stg/deploy.log`.

For Production, you have a three node structure. Logs are available with specific information for that node. For example, on the Production environment for project `yw1unoukjcawe`, the deploy log is located at node 1 `/var/log/platform/1.yw1unoukjcawe/deploy.log`, node 2 `/var/log/platform/2.yw1unoukjcawe/deploy.log`, and node 3 `/var/log/platform/3.yw1unoukjcawe/deploy.log`.

Logs for all deployments that have occurred on this environment are appended to this file. Check the timestamps on log entries to verify and locate the logs you want for a specific deployment.

The actual log output is highly verbose to allow troubleshooting. The following is a condensed example:

```xml
[2016-10-11 22:15:38] Starting pre-deploy.
...
[2016-10-11 22:15:39] Pre-deploy complete.
[2016-10-11 22:15:42] Start deploy.
[2016-10-11 22:15:42] Preparing environment specific data.
[2016-10-11 22:15:42] Initializing routes.

... more ...

[2016-10-11 22:15:46] Deployment complete.
```

The deploy log contains start and stop messages for each of the two hooks:
`Starting pre-deploy`, `Pre-deploy complete.`, `Start deploy.`, and `Deployment complete.`.

### Application logs {#app-log}

To review other application logs in Staging or Production, you can access and review those logs in `/var/log/platform/ProjectID`.

For Pro plan Staging, the project ID has `_stg` at the end. For example, if you receive 500 errors in Staging and want to review the nginx logs, you can SSH to the Staging environment and locate the logs in `/var/log/platform/ProjectID_stg`.

For Pro plan Production, you have three nodes to check for logs.
