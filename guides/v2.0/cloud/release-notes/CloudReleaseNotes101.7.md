---
group:
subgroup:
title: magento-cloud-configuration release 101.7.x Release Notes
menu_title: magento-cloud-configuration release 101.7.x Release Notes
menu_order:
menu_node:
level3_menu_node:
level3_subgroup:
version: 2.0
github_link: cloud/release-notes/CloudReleaseNotes101.7.md
functional_areas:
  - Cloud
---

These Release Notes provide up-to-date information about changes, additions, and fixes to the {{site.data.var.ece}} version 2.1.7, `magento-cloud-configuration` releases 101.7.3, 101.7.4, 101.7.5, and 101.7.6.

## Changes and enhancements in this release {#changes-and-enhancements-in-this-release}

In `magento-cloud-configuration` releases 101.7.3, 101.7.4, 101.7.5, and 101.7.6 on Magento Commerce 2.1.7, we provide the following improvements:

### 101.7.6 changes {#changes}

* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on {{site.data.var.ece}}, see [Redis troubleshooting](http://devdocs.magento.com/guides/v2.0/cloud/trouble/redis-troubleshooting.html).

### 101.7.5 changes {#changes-1}

* Magento no longer automatically disables Google Analytics when deployed in the master branch.
* HTML minification now works as expected on Cloud.

### 101.7.4 changes {#changes-2}

* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.

### 101.7.3 changes {#changes-3}

* Magento no longer throws an error when only the default store issued. Previously, when only the default store is used, Magento threw the following error when running php bin/magento magento-cloud:scd-dump:

    Exception]
    	Notice: Undefined index: stores in /app/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/Console/Command/SCDConfigDump.php on line 91

<div class="bs-callout bs-callout-info" id="info" markdown="1">
We've reverted the changes to image resizing that we introduced in 2.1.6. Unfortunately, certain image resizing changes introduced unanticipated problems. We have reverted these changes in this release, and will provide improvements to image resizing in a future product update.
</div>

## How to get magento-cloud-configuration release 101.7.x

{{site.data.var.ece}} periodically provides patch releases in components like `magento-cloud-configuration`.

To test and implement your {{site.data.var.ece}} upgrade, see [Test a Magento upgrade]({{ page.baseurl }}/cloud/project/project-upgrade.html).

## Magento Commerce Release Notes

These {{site.data.var.ece}} releases correspond to [Magento Commerce 2.1.7](http://devdocs.magento.com/guides/v2.1/release-notes/ReleaseNotes2.1.7EE.html).
