---
layout: default
group: cloud
subgroup: 030_ReleaseNotes
title: magento-cloud-configuration release 101.7.x Release Notes
menu_title: magento-cloud-configuration release 101.7.x Release Notes
menu_order: 44
menu_node: 
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes101.7.md
---
 
These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Enterprise Cloud Edition version 2.1.7, `magento-cloud-configuration` releases 101.7.3, 101.7.4, and 101.7.5. 

## Changes and enhancements in this release
In `magento-cloud-configuration` releases 101.7.3, 101.7.4, and 101.7.5 on Magento Enterprise Edition 2.1.7, we provide the following improvements:




### 101.7.5 changes

<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud. 

### 101.7.4 changes

<!--- MAGECLOUD-792 -->* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.


### 101.7.3 changes

<!--- MAGECLOUD-782 -->* Magento no longer throws an error when only the default store issued.  Previously, when only the default store is used, Magento threw the following error when running `php bin/magento magento-cloud:scd-dump`: 

		Exception]                                                                                                                                               
  		Notice: Undefined index: stores in /app/vendor/magento/magento-cloud-configuration/src/Magento/MagentoCloud/Console/Command/SCDConfigDump.php on line 91  

<div class="bs-callout bs-callout-info" id="info">
  <p>We've reverted the changes to image resizing that we introduced in 2.1.6. Unfortunately, certain image resizing changes introduced unanticipated problems. We have reverted these changes in this release, and will provide improvements to image resizing in a future product update.</p>
</div>






## How to get `magento-cloud-configuration` release 101.7.x
Magento Enterprise Cloud Edition periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply these patches, see [Test general patches]({{ site.gdeurl21 }}cloud/project/project-patch.html#cloud-patch-gen).

### Magento EE Release Notes
This Magento Enterprise Cloud Edition release corresponds to Magento Enterprise Edition 2.1.7.

