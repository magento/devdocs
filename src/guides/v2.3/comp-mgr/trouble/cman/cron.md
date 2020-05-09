---
group: software-update-guide
subgroup: 50_trouble
title: Troubleshoot cron
menu_title: Troubleshoot cron
menu_node:
menu_order: 7
functional_areas:
  - Upgrade
redirect_to: https://support.magento.com/hc/en-us/articles/360032952852
---

Following are symptoms of cron issues:

*  Your update or upgrade never runs; it stays in a `pending` state
*  An error message about the [PHP](https://glossary.magento.com/php) setting `$HTTP_RAW_POST_DATA` displays even though it's set properly
*  The cron readiness check fails

   Possible errors include non-writable paths and cron not set up. An example follows:

   <img src="{{ site.baseurl }}/common/images/upgr-tshoot-no-cron2.png">

*  The PHP readiness check doesn't display the PHP version as the following figure shows.

   <img src="{{ site.baseurl }}/common/images/upgr-tshoot-no-cron.png">

*  The following error displays in the Magento Admin:

   ![cron isn't running]({{ site.baseurl }}/common/images/compman-cron-not-running.png)

   To see the error, you might need to click **System Messages** at the top of the window as follows:

   ![System Messages]({{ site.baseurl }}/common/images/compman_sys-messages.png)

{% include install/trouble/rc_cron.md %}
