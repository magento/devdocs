---
group: cloud-guide
title: Log locations
functional_areas:
  - Cloud
  - Configuration
redirect_from:
  - /guides/v2.2/cloud/trouble/environments-logs.html
  - /guides/v2.3/cloud/trouble/environments-logs.html
---
The `/var/log` directory contains logs for all environments. The following logs have a common location for all Cloud projects:

-  **Build log**: `var/log/cloud.log`
-  **Debug log**: `var/log/debug.log`
-  **Exception log**: `var/log/exception.log`
-  **Support report log**: `var/log/support_report.log`

To access the `/var/log` directory in the remote server environment, you must use an SSH connection.
Also, you can check the deploy log with the project web UI or the `magento-cloud` command line utility:

```bash
magento-cloud log deploy
```

Sample response:

```terminal
Reading log file project-integration-ID--mymagento@ssh.magento.cloud:/var/log/'deploy.log'
================

Error Output:
================
sh: 1: kill: No such process

[2019-09-09 09:00:00] NOTICE: Validating configuration
...
```

Magento-specific logs are in the `<magento-root-dir>/var/log` directory. See [Magento Logging]({{page.baseurl}}/config-guide/cli/logging.html) in the _Configuration guide_. Pro projects have a three-node structure and each node contains logs with specific information for that node.

{:.bs-callout-tip}
You can [set up log-based Slack and email notifications]({{ page.baseurl }}/cloud/env/setup-notifications.html).

## Build logs

After pushing changes to your environment, you can review the logs from the build hook in the `var/log/cloud.log` file.

## Deploy logs

You can review the logs from the deploy hook in the following directories:

-  **Starter and Pro Integration**: `/var/log/deploy.log`
-  **Pro Staging**: `/var/log/platform/<project_id>_stg/deploy.log`
-  **Pro Production**: `/var/log/platform/<node-{1|2|3}>.<project_id>/deploy.log`

The value of `<project_id>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`. Using that example, the deploy log is: `/var/log/platform/yw1unoukjcawe_stg/deploy.log`

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

## Application logs

The following table lists log files with a different location, depending on the environment:

Log file            | Starter and Pro Integration | Pro Staging | Pro Production
------------------- | --------------------------- | ----------- | --------------
**Deployment log**  | `/var/log/deploy.log`       | `/var/log/platform/<project_id>_stg/deploy.log`   | `/var/log/platform/<project_id>/deploy.log`
**Cron log**        | `/var/log/cron.log`         | `/var/log/platform/<project_id>_stg/cron.log`     | `var/log/platform/<project_id>/cron.log`
**Nginx access log**| `/var/log/access.log`       | `/var/log/platform/<project_id>_stg/access.log`   | `/var/log/platform/<project_id>/access.log`
**Nginx error log** | `/var/log/error.log`        | `/var/log/platform/<project_id>_stg/error.log`    | `/var/log/platform/<project_id>/error.log`
**PHP access log**  | `/var/log/php.access.log`   | `/var/log/platform/<project_id>_stg/php.access.log` | `/var/log/platform/<project_id>/php.access.log`
**PHP FPM log**     | `/var/log/app.log`          | `/var/log/platform/<project_id>_stg/php5-fpm.log` | `/var/log/platform/<project_id>/php5-fpm.log`

## Service logs

Because each service runs in a separate container, the service logs are not available in the Integration environment. {{site.data.var.ece}} only provides access to the web server container in the Integration environment. The following lists the service log locations for the Pro Staging and Production environments:

-  **Redis log**: `/var/log/platform/<project_id>_stg/redis-server-<project_id>_stg.log`
-  **Elasticseach log**: `/var/log/elasticsearch/elasticsearch.log`
-  **Mail log**: `/var/log/mail.log`
-  **MySQL error log**: `/var/log/mysql/mysql-error.log`
-  **MySQL slow log**: `/var/log/mysql/mysql-slow.log`
-  **RabbitMQ log**: `/var/log/rabbitmq/rabbit@host1.log`