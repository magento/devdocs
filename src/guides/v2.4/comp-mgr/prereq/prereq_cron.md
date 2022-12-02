---
group: software-update-guide
title: Set up cron for update and upgrade
functional_areas:
  - Upgrade
redirect_to: https://experienceleague.adobe.com/docs/commerce-operations/upgrade-guide/prepare/prerequisites.html
layout: migrated
---

To enable us to update or upgrade your system, you must have two cron jobs. Each cron job should run every minute.

{% include config/setup-cron_about.md %}

{% include config/setup-cron_how-to.md %}

For more information about cron, including how to remove a crontab and run cron from the command line, see [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html).
