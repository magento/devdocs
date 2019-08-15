---
group: cloud-guide
title: Set up cron jobs
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

Magento uses cron jobs for numerous features to schedule activities. This topic provides information for configuring crons for {{site.data.var.ece}} projects using the [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) file.

The `.magento.app.yaml` file specifies the configuration for the default Magento cron jobs as well as any custom crons that you add to the following environments.
mae-MAGECLOUD-3825-cron-changes
* Starter plan–All environments including `Master`

* Pro plan–Integration, Staging, and Production environments including `Master`

The `.magento.app.yaml` file includes the following default crons configuration, which runs the default Magento processes specified in the Magento crontab.

```yaml
crons:
    cronrun:
        spec: "* * * * *"
        cmd: "php bin/magento cron:run"
```

{:.bs-callout .bs-callout-info}
We use only one cron for {{site.data.var.ece}} projects because of the nature of read-only environments. This configuration is different from {{site.data.var.ee}}, which has three default cron jobs. See [Configure and run crons]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html) in the {{site.data.var.ee}} documentation.

## Verify cron configuration

Magento added an auto-crons configuration option to support self-service cron configuration updates from the `.magento.app.yaml` file on all environments–including Pro Staging and Production. If this option is enabled, you can use the Magento crontab to review the cron configuration for each environment.

####  To review cron configuration

1. Log in to the {{site.data.var.ece}} project environment using [SSH]({{ page.baseurl }}/cloud/env/environments-ssh.html#ssh).

1. List the scheduled cron processes.

   ```bash
   crontab -l
   ```

The following example shows the crontab output for an environment that has only the default crons configuration:

```terminal
username@hostname:~$ crontab -l
# Crontab is managed by the system, attempts to edit it directly will fail.
SHELL=/etc/platform/6fck2obu3244c/cron-run
MAILTO=""

# m h  dom mon dow  job_name

* * * * *           cronrun
```

{: .bs-callout-info}
If the command returns a `Command not found` error, contact your Magento account manager or CSM about enabling the auto-crons self-service configuration feature on the Cloud infrastructure for your {{site.data.var.ece}} project.

## Build a cron job {#build}

A cron job includes the schedule and timing specification and the command to run at the scheduled time. For example, the general format is: `* * * * * <command>`

Magento uses a five value specification for a cron job. The numbers per each `* * * * *` is as follows:

* Minute (0-59)  For all Starter and Pro environments, the minimum frequency supported for crons is five minutes. You may need to configure settings in your Magento Admin.
* Hour (0-23)
* Day of month (1 - 31)
* Month (1 - 12)
* Day of week (0 - 6) (Sunday to Saturday; 7 is also Sunday on some systems)

For example:
`00 */3 * * *` runs every 3 hours at the first minute (12:00 am, 3:00 am, 6:00 am, and so on) `20 */8 * * *` runs every 8 hours at minute 20 (12:20 am, 8:20 am, 4:20 pm, and so on) `00 00 * * *` runs once a day at midnight `00 * * * 1` runs once a week on Monday at midnight.

When determining the scheduling of custom cron jobs, consider the time it takes to complete the task. For example, if you run a job every three hours and the task takes 40 minutes to complete, you may consider changing the scheduled timing.

On the Magento Cloud platform, you add custom cron job configuration to the `.magento.app.yaml` file in the `crons` section. The general format is `spec` for scheduling and `cmd` to specify the command or custom script to run.

For the command script, the format includes:

`<path-to-php-binary> <magento install dir>/<script with command>`

The following is an example cron job:

```yaml
crons:
    spec: "00 */8 * * *"
    cmd: "/usr/bin/php /app/abc123edf890/bin/magento export:start catalog_category_product"
```
{:.no-copy}

In this example, `<path-to-php-binary>` is `/usr/bin/php`. The install directory, which includes the Project ID is `/app/abc123edf890/bin/magento`, and the script action is `export:start catalog_category_product`.

## Add custom cron jobs to your project {#add-cron}

On the {{site.data.var.ece}} platform, you configure custom cron jobs by adding them to the [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) file in the `crons` section.

{:.bs-callout .bs-callout-info}
The default cron interval for all environments provisioned in the US-3, EU-3, and AP-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. You cannot configure more frequent intervals than the default minimums.

### Prerequisite

The [auto-crons feature](#verify-cron-configuration) must be enabled on your {{site.data.var.ece}} project before you can add custom cron jobs to Staging and Production environments using `.magento.app.yaml`. If this feature is not enabled, contact your Magento account manager or CSM.

#### To add custom crons

1. In your local development environment, edit the `.magento.app.yaml` file in the Magento `/app` directory.

1. Add your custom cron code to the `crons` section in the file.

   For example, you can add a custom cron job to export the product catalog and configure it to run every eight hours, 20 minutes after the hour.

```yaml
crons:
    magento:
        spec: '* * * * *'
        cmd: 'php bin/magento cron:run'
        productcatalog:
            spec: '20 */8 * * *'
            cmd: 'bin/magento export:start catalog_product_category'
    ```
    {:.no-copy }

1. Add, commit, and push code changes.

    ```bash
    git add -A && git commit -m "cron config updates" && git push origin <branch-name>
    ```

## Update custom cron jobs {#update}

To add, remove, or update a custom cron job, change the configuration in the `crons` section of the `.magento.app.yaml` file for the Integration environment. Then, test the updates in the Integration environment before pushing the changes to the Production and Staging environments.

## Troubleshooting cron jobs

Magento has updated the {{site.data.var.ece}} package to optimize cron processing on the {{site.data.var.ece}} platform and to fix cron-related issues. If you are having problems with cron processing, make sure that your project is using the most current version of the ece-tools package. See [Upgrades and patches]({{ page.baseurl }}/cloud/project/project-upgrade-parent.html).

You can review cron processing information in the application-level log files for each environment. See [Application logs]({{ page.baseurl }}/cloud/trouble/environments-logs.html#app-log)).

See the following Magento Support articles for help troubleshooting cron-related problems:

* [Cron tasks lock tasks from other groups](https://support.magento.com/hc/en-us/articles/360029219812-Cron-tasks-lock-tasks-from-other-groups)
* [Reset stuck cron jobs manually on the cloud](https://support.magento.com/hc/en-us/articles/360000097713-Reset-stuck-Magento-cron-jobs-manually-on-Cloud)
