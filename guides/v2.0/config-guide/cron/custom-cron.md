---
group: config-guide
subgroup: 12_cron
title: Set up a custom cron job and cron group
menu_title: Set up a custom cron job and cron group
menu_order: 1
menu_node: parent
version: 2.0
github_link: config-guide/cron/custom-cron.md
functional_areas:
  - Configuration
  - System
  - Setup
---

These topics discuss how to set up a custom cron job and optionally a custom cron group. If your Magento {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} requires scheduled tasks to run periodically, you can use these topics to set up a cron *job* (the scheduled task) and optionally a cron *group* (which runs custom tasks at the same time).

If you use a Magento-provided cron group, you don't have to define a custom cron group; however, if you want your cron jobs to run at a different schedule or you want them all to run together, you should define a cron group

The Magento application provides the following cron groups:

*	`default`, which contains most cron jobs
*	`index`, which refreshes [indexers]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-index.html)
*	These topics are available in {{site.data.var.ee}} only
	*	`staging`, which runs [Staging-related](http://docs.magento.com/m2/ee/user_guide/cms/content-staging.html){:target="_blank"} tasks
	*	`catalog_event`, which runs tasks for target and shopping cart rules

See the following topics for details:

*	[Custom cron job and cron group reference]({{ page.baseurl }}/config-guide/cron/custom-cron-ref.html)
*	[Configure a custom cron job and cron group (tutorial)]({{ page.baseurl }}/config-guide/cron/custom-cron-tut.html)
