---
group: installation-guide
subgroup: 05_readiness
title: cron readiness check issues
menu_title: cron readiness check issues
menu_node:
menu_order: 40
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360033856251
---

Following are symptoms of cron issues:

*  An error message about the [PHP](https://glossary.magento.com/php) setting `$HTTP_RAW_POST_DATA` displays even though it's set properly
*  The PHP readiness check doesn't display the PHP version as the following figure shows.

   ![]({{ site.baseurl }}/common/images/upgr-tshoot-no-cron.png)

*  The following error displays in the Magento Admin:

   ![cron isn't running]({{ site.baseurl }}/common/images/compman-cron-not-running.png){:width="550px"}

   To see the error, you might need to click **System Messages** at the top of the window as follows:

   ![System Messages]({{ site.baseurl }}/common/images/compman_sys-messages.png)

{% include install/trouble/rc_cron.md %}
