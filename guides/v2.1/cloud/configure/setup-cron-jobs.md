---
group: cloud-guide
title: Set up cron jobs
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

Magento uses cron jobs for numerous features to schedule activities. You can add cron jobs to `.magento.app.yaml` and push it to your branches for deployment. For specific information for configuring and setting up cron in Magento, see [{{site.data.var.ee}} cron information](#croninfo). The following information is specific to creating and deploying cron jobs in {{site.data.var.ece}}.

## Cron information {#croninfo}

The following links provide more information on crons for {{site.data.var.ee}}. You can use this information for setting up and understanding cron jobs in Magento. When you want to add cron jobs for {{site.data.var.ece}}, you manage all crons through `.magento.app.yaml`. For more information, review this topic.

*   [Set up cron]({{ page.baseurl }}/install-gde/install/post-install-config.html)
*   [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
*   [Set up a custom cron job and cron group]({{ page.baseurl }}/config-guide/cron/custom-cron.html)

## Build a cron job {#build}

A cron job includes the specification for scheduling and timing and the command to run at that time. For example, the general format is: `* * * * * <command>`

You will add the cron job to `.magento.app.yaml` in the `crons` section. The general format is `spec` for scheduling and `cmd` for the script. For example:

```yaml
crons:
    productcatalog:
        spec: '20 */3 * * *'
        cmd: 'bin/magento indexer:reindex catalog_product_category'
```

The following example is the default cron included for {{site.data.var.ece}}.

```yaml
crons:
    cronrun:
        spec: "* * * * *"
        cmd: "php bin/magento cron:run"
```

{:.bs-callout .bs-callout-info}
We use only this one cron for cloud due to the read-only nature of the environments. This is different from {{site.data.var.ee}} which has three default cron jobs.

Magento uses a five value specification for a cron job. The numbers per each `* * * * *` is as follows:

*   Minute (0-59)  For all Start environments and Pro Integration environments, the minimum frequency supported for crons is five minutes. You may need to configure settings in your Magento Admin.
*   Hour (0-23)
*   Day of month (1 - 31)
*   Month (1 - 12)
*   Day of week (0 - 6) (Sunday to Saturday; 7 is also Sunday on some systems)

For example:

*   `00 */3 * * *` runs every 3 hours at the first minute (12:00 am, 3:00 am, 6:00 am, and so on)
*   `20 */3 * * *` runs every 3 hours at minute 20 (12:20 am, 3:20 am, 6:20 am, and so on)
*   `00 00 * * *` runs once a day at midnight
*   `00 * * * 1` runs once a week on Monday at midnight

When determining the scheduling of your cron jobs, consider the time it takes to complete the task. For example, if you run a job every three hours and the task takes 40 minutes to complete, you may want to change the scheduled timing.

For the command script, the format includes:

`<path to php binary> <magento install dir>/<script with command>`

The following is an example cron job:

```yaml
crons:
    spec: "00 */3 * * *"
    cmd: "/usr/bin/php /app/abc123edf890/bin/magento indexer:reindex catalog_category_product"
```

With the settings:

*   `<path to php binary>` is `/usr/bin/php`
*   `/app/abc123edf890` is the install directory, which includes the Project ID for this example
*   `bin/magento indexer:reindex catalog_category_product` is the script actions

## Add cron jobs to .magento.app.yaml {#add-cron}

You should add all cron jobs to your [`.magento.app.yaml`]({{ page.baseurl }}/cloud/project/project-conf-files_magento-app.html) file in the `crons` section.

{:.bs-callout .bs-callout-info}
The default cron interval for all environments provisioned in the us-3, eu-3, and ap-3 regions is 1 minute. The default cron interval in all other regions is 5 minutes for Pro Integration environments and 1 minute for Pro Staging and Production environments. You cannot configure more frequent intervals than the default minimums.

We include a default cron job for Magento in the default file:

```yaml
crons:
    cronrun:
        spec: "* * * * *"
        cmd: "php bin/magento cron:run"
```

1.  Edit `.magento.app.yaml` in the root directory of the Magento code in the Git branch.
2.  Locate the `crons` section in the file and add your custom cron code.

    For example, you could add a reindexer cron job to run every three hours, 20 minutes after the hour (such as 12:20 am, 3:20 am, and so on):

    ```yaml
    crons:
        magento:
            spec: '* * * * *'
            cmd: 'php bin/magento cron:run'
        productcatalog:
            spec: '20 */3 * * *'
            cmd: 'bin/magento indexer:reindex catalog_product_category'
    ```
4.  Save the file and push updates to the Git branch.

## Add cron jobs to environments {#env}

When you push the code, the cron jobs will be added to and run in the following environments:

*   Starter: All environments you push to including `Master`
*   Pro: Only Integration environments you push to including `Master`

To add the cron jobs to Pro plan Staging and Production, you must [enter a ticket to Support]({{ page.baseurl }}/cloud/trouble/trouble.html). Request to have the cron jobs in `.magento.app.yaml` added to those environments. We recommend pushing the updates through to the Integration `master` branch.

We manage cron jobs on Pro plan Staging and Production environments using Jenkins. These cron jobs do not run precisely against the system clock. If Jenkins encounters lag, the cron jobs may run occasionally late.

## Update cron jobs {#update}

If you need to change or update your cron jobs, update the crons section in your `.magento.app.yaml` file. Push the file to your Git branch and deploy across environments.

For Pro plan Staging and Production environments, [enter a ticket to Support]({{ page.baseurl }}/cloud/trouble/trouble.html) to review, remove, or modify these cron jobs. To update a cron job, we recommend pushing the updates through to the Integration `master` branch in the `.magento.app.yaml` file. Cron jobs for Pro plan Staging and Production environments are not available through a Cron tab.
