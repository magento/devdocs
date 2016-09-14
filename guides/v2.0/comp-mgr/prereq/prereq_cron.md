---
layout: default
group: compman
subgroup: 02_prereq
title: Set up cron for update and upgrade
menu_title: Set up cron for update and upgrade
menu_order: 3
menu_node: 
version: 2.0
github_link: comp-mgr/prereq/prereq_cron.md
redirect_from: /guides/v2.0/comp-mgr/prereq/prereq_compman-updater.html
---

## Set up cron for update and upgrade {#compman-prereq-cron}
To enable us to update or upgrade your system, you must configure two cron jobs. Each cron job should run every minute.

The cron jobs schedule tasks for the Setup Wizard and for the updater application. These applications work together to install, update, and upgrade the Magento application and components.

Enable the cron jobs as <a href="http://ss64.com/bash/crontab.html" target="_blank">crontabs</a> for the [Magento file system owner]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html) because that user runs the updater application for the Web Setup Wizard. 

{% include config/setup-cron.md %}

#### Next step

*	[Component Manager]({{page.baseurl}}comp-mgr/module-man/compman-start.html)
*	[System Upgrade]({{page.baseurl}}comp-mgr/upgrader/upgrade-start.html)

