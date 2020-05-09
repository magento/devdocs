---
group: cloud-guide
title: Reset cron jobs
functional_areas:
  - Cloud
  - Configuration
redirect_to: https://support.magento.com/hc/en-us/articles/360033099451
---

Sometimes, Magento cron jobs do not finish executing and persist in a `running` status, which prevents other cron jobs from running. This can happen for a number of reasons, such as network issues, application crashes, redeployment issues.

## Symptom

Symptoms of cron jobs that must be reset include:

*  Large quantity of jobs appear in the `cron_schedule` queue
*  Site performance starts to degrade
*  Jobs fail to execute on schedule

## Solution

To resolve this issue, you must reset the cron job(s) using the `cron:unlock` command. This command changes the status of the cron job in the database, ending the job forcefully to allow other scheduled jobs to continue.

{:.bs-callout-warning}
Running this command without the `--job-code` option resets _all_ cron jobs, including those currently running, so we recommend using it only in exceptional cases, such as after you have verified that all cron jobs must be reset. Re-deployment runs this command by default to reset cron jobs, so they recover appropriately after the environment is back up. Avoid using this solution when indexers are running.

1. Open a terminal and use your [SSH]({{ site.baseurl }}/cloud/env/environments-ssh.html#ssh) keys to connect to the affected environment.

1. Get the MySQL database credentials:

   ```shell
   echo $MAGENTO_CLOUD_RELATIONSHIPS | base64 -d | json_pp
   ```

1. Connect to the database using `mysql`:

   ```shell
   mysql -hdatabase.internal -uuser -ppassword main
   ```

1. Select the `main` database:

   ```shell
   use main
   ```

1. Find all running cron jobs:

   ```shell
   SELECT * FROM cron_schedule WHERE status = 'running';
   ```

1. Copy the `schedule_id` of any job running longer than usual.

1. Use the schedule IDs from the previous step to unlock specific cron jobs:

   ```shell
   ./vendor/bin/ece-tools cron:unlock --job-code=<schedule_id> --job-code=<schedule_id>
   ```
