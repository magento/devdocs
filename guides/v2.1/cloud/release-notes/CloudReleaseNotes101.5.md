---
group: release-notes
subgroup: 02_rel-notes
title: magento-cloud-configuration release 101.5.x Release Notes
menu_title: magento-cloud-configuration release 101.5.x Release Notes
menu_order: 375
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
redirect_from:
  - /guides/v2.2/cloud/release-notes/CloudReleaseNotes101.5.html
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}} version 2.1.5, `magento-cloud-configuration` release 101.5.2, 101.5.3, and 101.5.4.

## General changes

Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

## 101.5.4 changes

In `magento-cloud-configuration` release 101.5.4 on {{site.data.var.ece}} 2.1.5, we provide the following improvements:

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting]({{ page.baseurl }}/cloud/trouble/redis-troubleshooting.html).

## 101.5.3 changes

In `magento-cloud-configuration` release 101.5.3 on {{site.data.var.ece}} 2.1.5, we provide the following improvements:


<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud.

## 101.5.2 changes

In `magento-cloud-configuration` release 101.5.2 on Magento Enterprise Cloud Edition 2.1.5, we provide the following improvements:


<!--- MAGECLOUD-792 -->* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.

<!--- MAGECLOUD-771 -->* You can now successfully deploy your Cloud installation with multiple locales to staging after upgrading to `magento-cloud-configuration` 101.5.1.

<!--- MAGECLOUD-587 -->* Magento now automatically sets the cookie domain to reflect the new domain when branching an environment in a PAAS environment. Previously, the Admin panel was inaccessible until the value of the `cookie_domain` is changed at the database level to the current domain.

## How to get `magento-cloud-configuration` release 101.5.x

Magento  Commerce (Cloud) periodically provides patch releases in components like `magento-cloud-configuration`.

To test and implement your {{site.data.var.ece}} upgrade, see [Test a Magento upgrade]({{ page.baseurl }}/cloud/project/project-upgrade.html).

### Magento Commerce Release Notes

This {{site.data.var.ece}} release corresponds to Magento Commerce 2.1.5.
