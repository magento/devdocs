---
group: software-update-guide
subgroup: 02_prereq
title: Set up cron for update and upgrade
menu_title: Set up cron for update and upgrade
menu_order: 3
menu_node:
functional_areas:
  - Upgrade
---

To enable us to update or upgrade your system, you must configure two cron jobs. Each cron job should run every minute.

The cron jobs schedule tasks for the Setup Wizard and for the updater application. These applications work together to install, update, and upgrade the Magento application and components.

Enable the cron jobs as [crontabs](http://ss64.com/bash/crontab.html){:target="_blank"} for the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html) because that user runs the updater application for the Web Setup Wizard. 

{% include config/setup-cron.md %}

