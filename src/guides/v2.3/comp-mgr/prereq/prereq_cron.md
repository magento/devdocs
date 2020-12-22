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

To enable us to update or upgrade your system, you must have two cron jobs. Each cron job should run every minute.

The cron jobs schedule tasks for the Setup Wizard and for the updater application. These applications work together to install, update, and upgrade the Magento application and components.

{% include config/setup-cron_2.2_about.md %}

{% include config/setup-cron_2.2_how-to.md %}

For more information about cron, including how to remove a crontab and run cron from the command line, see [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html).
