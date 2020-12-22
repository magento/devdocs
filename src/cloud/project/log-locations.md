---
group: cloud-guide
title: View and manage logs
functional_areas:
  - Cloud
  - Configuration
redirect_from:
  - /cloud/trouble/environments-logs.html
---

Logs for {{site.data.var.ece}} projects are useful for troubleshooting problems related to {{site.data.var.ece}} [build and deploy hooks][hook], cloud services, and the Magento application.

You can view the logs from the file system, the project web UI, and the `magento-cloud` CLI.

-  **File system**—The `/var/log` system directory contains logs for all environments. The `var/log/` Magento directory contains app-specific logs unique to a particular environment. You must use an SSH connection to access logs in a remote server environment. These directories are not shared between nodes in a cluster. In Pro Production and Staging environments, you must check the logs on each node.

-  **Project web UI**—You can see build and post-deploy log information in the environment _messages_ list.

-  **Magento Cloud CLI**—You can view logs using the `magento-cloud log` command.

## Manage log data

On Pro Production and Staging environments, use the New Relic Logs application integrated with your project to manage aggregated log data from all logs associated with your {{ site.data.var.ece }} project.

The New Relic Logs application provides a centralized log management dashboard to troubleshoot and monitor {{site.data.var.ece}} Production and Staging environments. The dashboard also provides access to log data for Fastly CDN, Image Optimization, and Web application firewall (WAF) services. See [New Relic services][].

### Log command

When you are logged into your {{ site.data.var.ece }} project, you can use the `magento-cloud log` CLI command to quickly view a specific log from the command line. If you do not specify a log name, you can choose a log from the response list.

```bash
magento-cloud log
```

Sample response:

```terminal
Enter a number to choose a log:
  [0] access
  [1] app
  [2] cron
  [3] deploy
  [4] error
  [5] php.access
  [6] post-deploy
 >
```

By default, the command displays the log from the Integration environment. For the Pro Staging logs, you need to specify the log location using the project ID.

```bash
magento-cloud log platform/<project_id>_stg/<log>
```

## Build and Deploy logs

After pushing changes to your environment, you can review the logging from each hook in the `var/log/cloud.log` file. The log contains start and stop messages for each hook. In the following example, the messages are "`Starting post-deploy.`" and "`Post-deploy is complete.`"

Check the timestamps on log entries to verify and locate the logs for a specific deployment. The following is a condensed example of log output that you can use for troubleshooting:

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

{:.bs-callout-tip}
When you configure your Cloud environment, you can set up [log-based Slack and email notifications][slacklog] for build and deploy actions.

### Error logs

Error and warning messages generated during the deployment process are written to both the `var/log/cloud.log` and the `var/log/cloud.error.log` files. The Cloud error log file contains only errors and warnings from the latest deployment. An empty file indicates a successful deployment with no errors. See [Error message reference for ece-tools][Error reference].

The following logs have a common location for all Cloud projects:

-  **Deployment log**: `var/log/cloud.log`
-  **Last deployment error log**: `var/log/cloud.error.log`
-  **Debug log**: `var/log/debug.log`
-  **Exception log**: `var/log/exception.log`
-  **Reports**: `var/reports/`

Though the `cloud.log` file contains feedback from each stage of the deployment process, logs from the deploy hook are unique to each environment. The environment-specific deploy log is in the following directories:

-  **Starter and Pro Integration**: `/var/log/deploy.log`
-  **Pro Staging**: `/var/log/platform/<project_id>_stg/deploy.log`
-  **Pro Production**: `/var/log/platform/<project_id>/deploy.log`

The value of `<project_id>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`.
Using that example, the deploy log is: `/var/log/platform/yw1unoukjcawe_stg/deploy.log`

The log for each deployment concatenates to the specific `deploy.log` file. The following example prints the deploy log in the terminal:

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

You can use the same CLI command to view a deploy log from the Staging environment:

```bash
magento-cloud log platform/<project_id>_stg/deploy
```

{%include cloud/note-error-message-reference-ece-tools.md%}

## Application logs

Similar to deploy logs, application logs are unique for each environment. For Pro Staging and Production environments, the Deploy, Post-deploy, and Cron logs are available only on the first node in the cluster.

The following table lists application log locations on each environment:

Log file            | Starter and Pro Integration | Pro Staging                                       | Pro Production
------------------- | --------------------------- | ------------------------------------------------- | -------------------------------------------
**Deploy log**      | `/var/log/deploy.log`       | First node only:<br>`/var/log/platform/<project_id>_stg/deploy.log`   | First node only:<br>`/var/log/platform/<project_id>/deploy.log`
**Post-deploy log**      | `/var/log/post_deploy.log`       | First node only:<br>`/var/log/platform/<project_id>_stg/post_deploy.log`   | First node only:<br>`/var/log/platform/<project_id>/post_deploy.log`
**Cron log**        | `/var/log/cron.log`         | First node only:<br>`/var/log/platform/<project_id>_stg/cron.log`     | First node only:<br>`/var/log/platform/<project_id>/cron.log`
**Nginx access log**| `/var/log/access.log`       | `/var/log/platform/<project_id>_stg/access.log`   | `/var/log/platform/<project_id>/access.log`
**Nginx error log** | `/var/log/error.log`        | `/var/log/platform/<project_id>_stg/error.log`    | `/var/log/platform/<project_id>/error.log`
**PHP access log**  | `/var/log/php.access.log`   | `/var/log/platform/<project_id>_stg/php.access.log` | `/var/log/platform/<project_id>/php.access.log`
**PHP FPM log**     | `/var/log/app.log`          | `/var/log/platform/<project_id>_stg/php5-fpm.log` | `/var/log/platform/<project_id>/php5-fpm.log`

## Service logs

Because each service runs in a separate container, the service logs are not available in the Integration environment. {{ site.data.var.ece }} provides access to the web server container in the Integration environment only. The following service log locations are for the Pro Production and Staging environments:

-  **Redis log**: `/var/log/platform/<project_id>_stg/redis-server-<project_id>_stg.log`
-  **Elasticsearch log**: `/var/log/elasticsearch/elasticsearch.log`
-  **Mail log**: `/var/log/mail.log`
-  **MySQL error log**: `/var/log/mysql/mysql-error.log`
-  **MySQL slow log**: `/var/log/mysql/mysql-slow.log`
-  **RabbitMQ log**: `/var/log/rabbitmq/rabbit@host1.log`

{:.bs-callout-tip}
Log file locations in the scaled architecture depend on the node type. See [Log locations in the Scaled architecture][scaled] topic.

<!--Link definitions-->

[configlog]: {{site.baseurl}}/guides/v2.3/config-guide/cli/logging.html
[Error reference]: {{site.baseurl}}/cloud/reference/ece-tools-error-reference.html
[hook]: {{site.baseurl}}/cloud/project/magento-app-properties.html#hooks
[New Relic services]: {{site.baseurl}}/cloud/project/new-relic.html
[slacklog]: {{site.baseurl}}/cloud/env/setup-notifications.html
[scaled]: {{site.baseurl}}/cloud/architecture/scaled-architecture.html#log-locations
