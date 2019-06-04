---
group: release-notes
subgroup: 02_rel-notes
title: magento-cloud-configuration release 101.6.x Release Notes
menu_title: magento-cloud-configuration release 101.6.x Release Notes
menu_order: 370
menu_node:
level3_menu_node: level3child
level3_subgroup: mccloud-relnotes
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}} version 2.1.6, `magento-cloud-configuration` releases 101.6.2, 101.6.3, 101.6.4, 101.6.5, and 101.6.6.

## Changes and enhancements in this release

In `magento-cloud-configuration` releases 101.6.2, 101.6.3, 101.6.4, 101.6.5, and 101.6.6 on Magento Commerce 2.1.6, we provide the following improvements:

* Staging and Production environments in the UI for Pro projects. You can enter a ticket to have your project updated. For more information, see [Add Staging and Production to Pro projects UI]({{ page.baseurl }}/cloud/trouble/pro-env-management.html).

### 101.6.6 changes

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting]({{ page.baseurl }}/cloud/trouble/redis-troubleshooting.html).

### 101.6.5 changes

<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud.

### 101.6.4 changes

<!--- MAGECLOUD-792 -->* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.

### 101.6.3 changes

<!--- MAGECLOUD-771 -->* You can now successfully deploy your Cloud installation with multiple locales to staging after upgrading to `magento-cloud-configuration` 101.6.2.

### 101.6.2 changes

<!--- MAGECLOUD-762 -->* Magento image resizing has been optimized. Image resize operations performed from the command-line interface now generate images of all sizes. See `magento catalog:images:resize` for more information.


<!--- MAGECLOUD-587 -->* Magento now automatically sets the cookie domain to reflect the new domain when branching an environment in a PAAS environment. Previously, the Admin panel was inaccessible until the value of the `cookie_domain` is changed at the database level to the current domain.

<!--- MAGECLOUD-683 -->* You can now log in to the Admin panel whether you’re in normal browser mode or incognito mode. Previously, you could log in to the Admin panel only when in browser incognito mode.


<!--- MAGECLOUD-614 -->* The `base_url` setting is no longer environment-dependent. (We’ve removed `base_url` from `config.local.php`.)


<!--- MAGECLOUD-717 -->* You can now successfully deploy when using the `.regenerate` flag. (We corrected an error in the `magento-cloud-configuration/pre-deploy.php` file.) Previously, a PHP fatal error occurred during deployment with `magento-cloud-configuration` 101.6.0.

## How to get `magento-cloud-configuration` releases 101.6.x
{{site.data.var.ece}}  periodically provides patch releases in components like `magento-cloud-configuration`.

To test and implement your {{site.data.var.ece}} upgrade, see [Test a Magento upgrade]({{ page.baseurl }}/cloud/project/project-upgrade.html).

### Magento Commerce Release Notes

These {{site.data.var.ece}}  releases correspond to Magento Commerce 2.1.6.
