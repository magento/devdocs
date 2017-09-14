---
layout: default
group: cloud
subgroup: 030_ReleaseNotes
title: magento-cloud-configuration release 101.8.x Release Notes
menu_title: magento-cloud-configuration release 101.8.x Release Notes
menu_order: 42
menu_node: 
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes101.8.md
---
 
These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Commerce (Cloud)  version 2.1.8, `magento-cloud-configuration` release 101.8.0. 

## Changes and enhancements in this release
In `magento-cloud-configuration` releases 101.8.0 and 101.8.1, we provide the following improvements:

## 101.8.1 changes

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on Magento Commerce (Cloud), see [Redis troubleshooting](http://devdocs.magento.com/guides/v2.0/cloud/trouble/redis-troubleshooting.html).

## 101.8.0 changes

<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud. 

<!--- MAGECLOUD-808-->* We’ve removed the patch that fixed SCD in a build with multiple languages because the patch functionality has been integrated into Magento 2.1.8. 

<!--- MAGECLOUD-150-->* Magento Cloud now supports PayPal TPV tracking, which enables Cloud customers to send Magento Cloud-specific tracking codes to PayPal and Braintree. 

<!--- MAGECLOUD-459 -->* The `deploy.log` file now contains the Magento version and `mcc` version. 


## How to get `magento-cloud-configuration` release 101.8.x
Magento Commerce (Cloud) periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply these patches, see [Test general patches]({{ site.gdeurl21 }}cloud/project/project-patch.html#cloud-patch-gen).

### Magento Commerce Release Notes
This Magento Commerce (Cloud) release corresponds to Magento Commerce 2.1.8.

