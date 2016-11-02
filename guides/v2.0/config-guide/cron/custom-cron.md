---
layout: default
group: config-guide
subgroup: 11_cron
title: Set up a custom cron job and cron group
menu_title: Set up a custom cron job and cron group
menu_order: 1
menu_node: parent
version: 2.0
github_link: config/cron/custom-cron.md
---

## Set up a custom crontab and cron group
These topics discuss how to set up a custom cron job and optionally a custom cron group. If your Magento extension requires scheduled tasks to run periodically, you can use these topics to set up a cron *job* (the scheduled task) and optionally a cron *group* (which runs custom tasks at the same time).

If you use a Magento-provided cron group, you don't have to define a custom cron group; however, if you want your cron jobs to run at a different schedule or you want them all to run together, you should define a cron group

The Magento application provides the following cron groups:

*	`default`, which contains most cron jobs
*	`index`, which refreshes [indexers]({{ page.baseurl }}config-guide/cli/config-cli-subcommands-index.html)
*	![These topics are available in EE only]({{ site.baseurl }}common/images/ee-only_small.png)
	*	`staging`, which runs [Staging-related](http://docs.magento.com/m2/ee/user_guide/cms/content-staging.html){:target="_blank"} tasks
	*	`catalog_event`, which runs tasks for target and shopping cart rules

See the following topics for details:

*	[Custom cron job and cron group reference]({{ page.baseurl }}config-guide/cron/custom-cron-ref.html)
*	[Configure a custom cron job and cron group (tutorial)]({{ page.baseurl }}config-guide/cron/custom-cron-tut.html)

