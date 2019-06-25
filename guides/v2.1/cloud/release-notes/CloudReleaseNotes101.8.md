---
group: release-notes
subgroup: 02_rel-notes
title: magento-cloud-configuration release 101.8.x Release Notes
menu_title: magento-cloud-configuration release 101.8.x Release Notes
menu_order: 360
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}}  version 2.1.8, `magento-cloud-configuration` release 101.8.0.

## Changes and enhancements in this release

In `magento-cloud-configuration` releases 101.8.0 and 101.8.1, we provide the following improvements:

* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

## 101.8.1 changes

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting]({{ page.baseurl }}/cloud/trouble/redis-troubleshooting.html).

## 101.8.0 changes

<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud.

<!--- MAGECLOUD-808-->* We’ve removed the patch that fixed SCD in a build with multiple languages because the patch functionality has been integrated into Magento 2.1.8.

<!--- MAGECLOUD-150-->* Magento Cloud now supports PayPal TPV tracking, which enables Cloud customers to send Magento Cloud-specific tracking codes to PayPal and Braintree.

<!--- MAGECLOUD-459 -->* The `deploy.log` file now contains the Magento version and `mcc` version.

## How to get `magento-cloud-configuration` release 101.8.x
{{site.data.var.ece}} periodically provides patch releases in components like `magento-cloud-configuration`.

To test and implement your {{site.data.var.ece}} upgrade, see [Test a Magento upgrade]({{ page.baseurl }}/cloud/project/project-upgrade.html).

### Magento Commerce Release Notes

This {{site.data.var.ece}} release corresponds to Magento Commerce 2.1.8.
