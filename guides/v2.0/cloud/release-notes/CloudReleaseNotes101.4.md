---
layout: default
group: cloud
subgroup: 030_ReleaseNotes
title: magento-cloud-configuration release 101.4.x Release Notes
menu_title: magento-cloud-configuration release 101.4.x Release Notes
menu_order: 50
menu_node: 
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes101.4.md
---
 
These Release Notes provide up-to-date information about changes, additions, and fixes to the  Magento Commerce (Cloud) version 2.1.4, `magento-cloud-configuration` release 101.4.1, 101.4.4, and 101.4.5.

## 101.4.5 changes
In `magento-cloud-configuration` release 101.4.5 on Magento Commerce (Cloud) 2.1.4, we provide the following improvements:

<!--- MAGECLOUD-1005 -->* We’ve added support for the latest version of Redis and for PHP-Redis 3.1.3. For more information on this update, and for guidance on Redis troubleshooting on Magento Commerce (Cloud), see [Redis troubleshooting](http://devdocs.magento.com/guides/v2.0/cloud/trouble/redis-troubleshooting.html).

## 101.4.4 changes

In `magento-cloud-configuration` release 101.4.4 on Magento Commerce (Cloud) 2.1.4, we provide the following improvements:


<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud. 




## 101.4.1 changes

In `magento-cloud-configuration` release 101.4.1 on Magento Commerce (Cloud) 2.1.4, we provide the following improvements:


*	Better way to [manage the configuration]({{ site.gdeurl21 }}cloud/live/sens-data-over.html#cloud-confman-over) so your integration, staging, and production systems stay in synchronization with each other more easily.

	<!-- Sensitive data, such as payment processor passwords and API keys, are managed using either environment variables or using the Magento Admin only. -->
*	Less time required to [build]({{ site.gdeurl21 }}cloud/live/sens-data-over.html#cloud-confman-scd-over) and deploy your project by reducing the time required for static file deployment.

For details, see [Overview of configuration management]({{ site.gdeurl21 }}cloud/live/sens-data-over.html).

## How to get `magento-cloud-configuration` release 101.4.x
Magento Commerce (Cloud) periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply the patch, see [Test general patches]({{ site.gdeurl21 }}cloud/project/project-patch.html#cloud-patch-gen).

### Magento Commerce Release Notes
This Magento Commerce (Cloud) release has no corresponding Magento EE release.

