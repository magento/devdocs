---
group: configuration-guide
title: Configure and run cron
functional_areas:
  - Configuration
  - System
  - Setup
---

## Overview of cron {#config-cli-cron-overview}
{% include config/cron-overview.md %}

To run cron in a web browser, see [Secure cron.php to run in a browser]({{ page.baseurl }}/config-guide/secy/secy-cron.html)

## Create or remove the Magento crontab

This section discusses how to create or remove your Magento crontab (that is, the configuration for Magento cron jobs).

{% include config/setup-cron_2.2_about.md %}

{% include config/setup-cron_2.3_how-to.md %}

### Remove the Magento crontab {#config-cron-remove}

You should remove the Magento crontab only before uninstalling the Magento application.

To remove the Magento crontab:

1. Log in as or switch to the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html).
1. Change to the Magento installation directory.
1. Enter the following command:

   ```bash
   bin/magento cron:remove
   ```

 {:.bs-callout-info}
This command has no effect on cron jobs outside the `#~ MAGENTO START` and `#~ MAGENTO END` comments in your crontab.

## Run cron from the command line {#config-cli-cron-group-run}

Command options:

```bash
bin/magento cron:run [--group="<cron group name>"]
```

where `--group` specifies the cron group to run (omit this option to run cron for all groups)

To run the indexing cron job, enter:

```bash
bin/magento cron:run --group index
```

To run the default cron job, enter:

```bash
bin/magento cron:run --group default
```

To set up custom cron jobs and groups, see [Configure custom cron jobs and cron groups]({{ page.baseurl }}/config-guide/cron/custom-cron.html).

{:.bs-callout-info}
You must run cron twice: the first time to discover tasks to run and the second time — to run the tasks themselves. The second cron run must occur on or after the `scheduled_at` time for every task.

## Logging

All `cron` job information has moved from `system.log` into a separate `cron.log`.
By default, the cron information can be found at `<install_directory>/var/log/cron.log`.
All exceptions from cron jobs are logged by `\Magento\Cron\Observer\ProcessCronQueueObserver::execute`.

In addition to being logged in `cron.log`:

-  Failed jobs with `ERROR` and `MISSED` statuses are logged to the `<install_directory>/var/log/support_report.log`.

-  Jobs with an `ERROR` status are always logged as `CRITICAL` in `<install_directory>/var/log/exception.log`.

-  Jobs with a `MISSED` status are logged as `INFO` in the `<install_directory>/var/log/debug.log` directory (developer mode only).

{%
include note.html
type='info'
content='All cron data is also written to the `cron_schedule` table in the Magento database. The table provides a history of cron jobs, including:

-  Job ID and code
-  Status
-  Created date
-  Scheduled date
-  Executed date
-  Finished date

To see records in the table, log in to the Magento database on the command line and enter `SELECT * from cron_schedule;`.'
%}

## Related topics

[Custom cron job and cron group reference]({{ page.baseurl }}/config-guide/cron/custom-cron-ref.html)
