---
group: cloud-guide
subgroup: 170_trouble
title: View logs for troubleshooting
menu_title: View logs for troubleshooting
menu_order: 5
menu_node:
functional_areas:
  - Cloud
  - Configuration
---

This topic discusses how you can use logs to troubleshoot problems related to {{site.data.var.ee}} [build hooks]({{ page.baseurl }}/cloud/reference/discover-deploy.html#cloud-deploy-over-phases-build) and [deploy hooks]({{ page.baseurl }}/cloud/reference/discover-deploy.html#cloud-deploy-over-phases-hook).

You may need to SSH into the environments to locate and view logs. To locate the SSH command to access your environments, see the following:

* Starter: For all environments, click Access Site for the environment in the Project Web Interface
* Pro:

  * Integration: Copy the link for the SSH command per environment through the Project Web Interface
  *	Staging: `ssh -A <project ID>_stg@<project ID>.ent.magento.cloud`
  *	Production: `ssh -A <project ID>@<project ID>.ent.magento.cloud`

## Build logs

After pushing to your environment, you can see the results of the both hooks. Logs from the build hook are redirected to the output stream of `git push`, so you can observe them in the terminal or capture them (along with error messages) with `git push > build.log 2>&1`.

For 2.1.9 and later and 2.2.X, we include a `var/log/cloud.log` file inside the Magento application root directory, that compiles both build and deploy actions into one file.

## Deploy logs {#log-deploy-log}

You can review these logs via SSH into the environment. Change to the directories listed below to review the logs.

For 2.1.9 and later and 2.2.X, we include a `var/log/cloud.log` file inside the Magento application root directory, that compiles both build and deploy actions into one file.

Logs from the deploy hook are located on the server in the following locations:

*	Integration: `/var/log/deploy.log`
*	Staging: `/var/log/platform/<project ID>_stg/deploy.log`
*	Production: `/var/log/platform/<project ID>/deploy.log`

The value of `<project ID>` depends on the project ID and whether the environment is Staging or Production. For example, with a project ID of `yw1unoukjcawe`, the Staging environment user is `yw1unoukjcawe_stg` and the Production environment user is `yw1unoukjcawe`.

For example, on the Staging environment for project `yw1unoukjcawe`, the deploy log is located at `/var/log/platform/yw1unoukjcawe_stg/deploy.log`.

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

## Application logs {#app-log}

To review other application logs in Staging or Production, you can access and review those logs in `/var/log/platform/<project ID>`.

For Staging, the project ID has `_stg` at the end. For example, if you receive 500 errors in Staging and want to review the nginx logs, you can SSH to the Staging environment and locate the logs in `/var/log/platform/<project ID>_stg`.

Remember, when viewing the logs for Production, you have three nodes to check.
