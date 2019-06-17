---
group: release-notes
subgroup: 02_rel-notes
title: magento-cloud-configuration release 101.7.x Release Notes
menu_title: magento-cloud-configuration release 101.7.x Release Notes
menu_order: 365
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}}  version 2.1.7, `magento-cloud-configuration` releases 101.7.3, 101.7.4, 101.7.5, and 101.7.6.

## Changes and enhancements in this release

In `magento-cloud-configuration` releases 101.7.3, 101.7.4, 101.7.5, and 101.7.6 on Magento Commerce 2.1.7, we provide the following improvements:

* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

### 101.7.6 changes

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting]({{ page.baseurl }}/cloud/trouble/redis-troubleshooting.html).

### 101.7.5 changes

<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud.

### 101.7.4 changes

<!--- MAGECLOUD-792 -->* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.

### 101.7.3 changes

<!--- MAGECLOUD-782 -->* Magento no longer throws an error when only the default store issued.  Previously, when only the default store is used, Magento threw the following error when running `php bin/magento magento-cloud:scd-dump`:

		Exception]
  		Notice: Undefined index: stores in /app/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/Console/Command/SCDConfigDump.php on line 91

{:.bs-callout .bs-callout-info}
We've reverted the changes to image resizing that we introduced in 2.1.6. Unfortunately, certain image resizing changes introduced unanticipated problems. We have reverted these changes in this release, and will provide improvements to image resizing in a future product update.

## How to get `magento-cloud-configuration` release 101.7.x
{{site.data.var.ece}} periodically provides patch releases in components like `magento-cloud-configuration`.

To test and implement your {{site.data.var.ece}} upgrade, see [Test a Magento upgrade]({{ page.baseurl }}/cloud/project/project-upgrade.html).

### Magento Commerce Release Notes

This {{site.data.var.ece}}  release corresponds to Magento Commerce 2.1.7.
