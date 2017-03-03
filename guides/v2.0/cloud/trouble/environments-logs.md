---
layout: default
group: cloud
subgroup: 50_trouble
title: Use logs for troubleshooting
menu_title: Use logs for troubleshooting
menu_order: 2
menu_node: 
version: 2.0
github_link: cloud/trouble/environments-logs.md
---

This topic discusses how you can use logs to troubleshoot problems related to Magento Enterprise Cloud Edition [build hooks]({{page.baseurl}}cloud/discover-deploy.html#cloud-deploy-over-phases-build) and [deploy hooks]({{page.baseurl}}cloud/discover-deploy.html#cloud-deploy-over-phases-hook).

## Build logs
After pushing to your environment, you can see the results of the both hooks. Logs from the build hook are redirected to the output stream of `git push`, so you can observe them in the terminal or capture them (along with error messages) with
`git push > build.log 2>&1`. 

## Deploy logs {#log-deploy-log}
Logs from the deploy hook are located on the server in the following locations:

*	[Integration system]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-int): `/tmp/log/deploy.log`
*	[Staging]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-stage) or [production]({{ page.baseurl }}cloud/discover-arch.html#cloud-arch-prod) systems: `/var/log/platform/<user>/post_deploy.log`

	The value of `<user>` depends on the project ID and whether the environment is staging or production. For example, with a project ID of `yw1unoukjcawe`, the staging environment user is `yw1unoukjcawe_stg` and the production environment user is `yw1unoukjcawe`. 

	So on a staging environment for project `yw1unoukjcawe`, the deploy log is located at `/var/log/platform/yw1unoukjcawe_stg/post_deploy.log`.  

Logs for all deployments that have happened on this environment are appended to
this file, so check the timestamps on log entries to verify that you're seeing the logs that correspond to the deployment that you are interested in.

The actual log output is highly verbose to allow troubleshooting. Following is a condensed example:

{% highlight xml %}
[2016-10-11 22:15:38] Starting pre-deploy.
...
[2016-10-11 22:15:39] Pre-deploy complete.
[2016-10-11 22:15:42] Start deploy.
[2016-10-11 22:15:42] Preparing environment specific data.
[2016-10-11 22:15:42] Initializing routes.

... more ...

[2016-10-11 22:15:46] Deployment complete.
{% endhighlight %}

The deploy log contains start and stop messages for each of the two hooks: 
`Starting pre-deploy`, `Pre-deploy complete.`, `Start deploy.`, and `Deployment complete.`.