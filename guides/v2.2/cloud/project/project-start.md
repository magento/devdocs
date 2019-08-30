---
group: cloud-guide
title: Project structure
functional_areas:
  - Cloud
  - Configuration
---
All {{site.data.var.ece}} projects include essential files for credentials and application configuration:

File                      | Description
------------------------- | -----------
`/.magento/routes.yaml`   | Configuration file that redirects `www` to the naked domain and `php` application to serve HTTP. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`/.magento/services.yaml` | Configuration file that defines a MySQL instance, Redis, and ElasticSearch. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`/app`                    | The `code` folder is used for custom modules. The `design` folder is used for custom themes. See [Install a theme]({{ page.baseurl }}/cloud/howtos/custom-theme.html). The `etc` folder contains configuration files for Magento.
`/m2-hotfixes`            | Used for custom patches.
`/update`                 | A service folder used by the support module.
`.gitignore`              | Specify which files and directories to ignore. See [`.gitignore` reference](#ignoring-files).
`.magento.app.yaml`       | Configuration file that defines the properties to build your application. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`.magento.env.yaml`       | Configuration file that defines actions for the build, deploy, and post-deploy phases. The ece-tools package includes a sample of this file with detailed descriptions for the available variables. See [Configure environments]({{ page.baseurl }}/cloud/env/environments.html).
`composer.json`           | Fetches the Magento Enterprise Edition and the necessary configuration scripts to prepare your application. See [Prepare your Magento install]({{ page.baseurl }}/cloud/setup/first-time-setup-import-prepare.html).
`composer.lock`           | Stores version dependencies for every package.
`magento-vars.php`        | A file used to define [multiple stores]({{ page.baseurl }}/cloud/project/project-multi-sites.html#modify-magento-variables) and sites using [Magento variables]({{ page.baseurl }}/config-guide/multi-site/ms_over.html).

{: .bs-callout-info }
When you push your local environment to the remote server, our deploy script uses the values defined by configuration files in the `.magento` directory, then the script deletes the directory and its contents. Your local development environment is not affected.

## Magento application root directory

The Magento application root directory is located in different locations depending on the environment.

-  **Starter and Pro Integration**: `/app`
-  **Starter Production**: `/<project-ID>`
-  **Pro Staging**: `/<project-ID>_stg`
-  **Pro Production**: `/<project-ID>`

### Writable directories

In Integration, Staging, and Production, *only* the following directories are writable due to security reasons:

-	`var`
-	`pub/static`
-	`pub/media`
-	`app/etc`
-	`/tmp`

{: .bs-callout-info }
In Production, each node in the three-node cluster has a `/tmp` directory that is not shared with the other nodes.

## Ignoring files

We include a base `.gitignore` file with the {{site.data.var.ece}} project repository. See the latest [.gitignore file in the magento-cloud repository](https://github.com/magento/magento-cloud/blob/master/.gitignore). If you need to add a file that is in the ignore list, you can use the `-f` (force) option when staging a commit:

```bash
git add <path/filename> -f
```

## Logs

The `/var/log` directory contains logs for all environments. Use the `magento-cloud ssh` command to log in to the environment to access the `/var/log` directory.

For Pro, the deployment log for Staging and Production is in the `/var/log/platform` directory. Magento-specific logs are in the `<magento-root-dir>/var/log` directory. Pro projects have a three-node structure and each node contains logs with specific information for that node.

{:.bs-callout .bs-callout-tip}
You can also [set up log-based Slack and email notifications]({{ page.baseurl }}/cloud/env/setup-notifications.html).

### Build logs

After pushing changes to your environment, you can observe the build results in the terminal or use SSH to log in and view them in the `var/log/cloud.log` file.

### Deploy logs

You can review the logs from the deploy hook in the following directories:

-  **Integration**: `/var/log/deploy.log`
-  **Staging**: `/var/log/platform/<project-ID>_stg/deploy.log`
-  **Production**: `/var/log/platform/<node-{1|2|3}>.<project-ID>/deploy.log`

The value of `<project-ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`. Using that example, the deploy log is: `/var/log/platform/yw1unoukjcawe_stg/deploy.log`

Pro projects have a three-node structure and each node contains logs with specific information for that node. For example, on the Production environment for the `yw1unoukjcawe` project, the deploy logs have the following locations:

-  **Node 1**: `/var/log/platform/1.yw1unoukjcawe/deploy.log`
-  **Node 2**: `/var/log/platform/2.yw1unoukjcawe/deploy.log`
-  **Node 3**: `/var/log/platform/3.yw1unoukjcawe/deploy.log`

The log for each deployment appends to this file. Check the timestamps on log entries to verify and locate the logs you want for a specific deployment. The following is a condensed example of log output that you can use for troubleshooting:

```terminal
Re-deploying environment project-integration-ID
  Executing post deploy hook for service `mymagento`
    [2019-01-03 19:44:11] NOTICE: Starting post-deploy.
    [2019-01-03 19:44:11] INFO: Validating configuration
    [2019-01-03 19:44:11] INFO: End of validation
    [2019-01-03 19:44:11] INFO: Enable cron
    [2019-01-03 19:44:11] INFO: Create backup of important files.
    [2019-01-03 19:44:11] INFO: Backup /app/app/etc/env.php.bak for /app/app/etc/env.php was created.
    [2019-01-03 19:44:11] INFO: Backup /app/app/etc/config.php.bak for /app/app/etc/config.php was created.
    [2019-01-03 19:44:11] INFO: php ./bin/magento cache:flush --ansi --no-interaction
    [2019-01-03 19:44:32] INFO: Warming up failed: http://integration-id-project.us.magentosite.cloud/
    [2019-01-03 19:44:32] NOTICE: Post-deploy is complete.
```
{: .no-copy}

The deploy log contains start and stop messages for each hook: such as `Start deploy.` and `Deployment complete.`

### Application logs

You can access and review other application logs, such as 'redis-server-<project-ID>', in the `/var/log/platform/ProjectID_stg/` directory for Staging or the `/var/log/platform/ProjectID/` directory for Production.

Pro projects have a three-node structure and each node contains logs with specific information for that node.

## Change base template

You can use the following steps to change the structure of an existing project to reflect the latest base template for {{site.data.var.ece}}.

1.  Clone project to local workstation.

1.  Update the `composer.json` file with the following values for the `extra` section.

    ```json
    "extra": {
        "magento-force": true
        "magento-deploystrategy": "copy"
    }
    ```

1.  Add the `.gitignore` file designed for the base template. For example, if you need the `.gitignore` file for the version 2.2.6 template, use the [.gitignore for 2.2.6](https://github.com/magento/magento-cloud/blob/2.2.6/.gitignore) file as a reference.

1.  Clear the git cache.

    ```bash
    git rm -r --cached .
    ```

1.  Add and commit changes.

    ```bash
    git add -A && git commit -m "Update base template"
    ```