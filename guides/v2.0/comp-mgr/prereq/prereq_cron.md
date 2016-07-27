---
layout: default
group: compman
subgroup: 02_prereq
title: Set up cron for Component Manager and System Upgrade
menu_title: Set up cron for Component Manager and System Upgrade
menu_order: 3
menu_node: 
version: 2.0
github_link: comp-mgr/prereq/prereq_cron.md
redirect_from: /guides/v2.0/comp-mgr/prereq/prereq_compman-updater.html
---

<h2 id="compman-prereq-cron">Set up cron jobs</h2>
To enable the updater to work for both the Component Manager and System Upgrade, you must configure two cron jobs. Each cron job should run every minute.

The cron jobs schedule tasks for the Setup Wizard and for the updater application. These applications work together to install, update, and upgrade the Magento application and components.

Enable the cron jobs as <a href="http://ss64.com/bash/crontab.html" target="_blank">crontabs</a> for the <a href="{{page.baseurl}}install-gde/prereq/apache-user.html">Magento file system owner</a> because that user runs the updater application for the Component Manager and System Upgrade. 

{% include config/setup-cron.md %}

#### Next step

*	<a href="{{page.baseurl}}comp-mgr/module-man/compman-start.html">Run the Component Manager</a>
*	<a href="{{page.baseurl}}comp-mgr/upgrader/upgrade-start.html">Run System Upgrade</a>
