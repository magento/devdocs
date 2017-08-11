---
layout: default
group: cloud
subgroup: 030_ReleaseNotes
title: magento-cloud-configuration release 101.5.x Release Notes
menu_title: magento-cloud-configuration release 101.5.x Release Notes
menu_order: 48
menu_node: 
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes101.5.md
---
 
These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Enterprise Cloud Edition version 2.1.5, `magento-cloud-configuration` release 101.5.2 and release 101.5.3.


## 101.5.3 changes
In `magento-cloud-configuration` release 101.5.3 on Magento Enterprise Cloud Edition 2.1.5, we provide the following improvements:


<!--- MAGECLOUD-870 -->* Magento no longer automatically disables Google Analytics when deployed in the master branch.

<!--- MAGECLOUD-860 -->* HTML minification now works as expected on Cloud. 

## 101.5.2 changes
In `magento-cloud-configuration` release 101.5.2 on Magento Enterprise Cloud Edition 2.1.5, we provide the following improvements:


<!--- MAGECLOUD-792 -->* Magento no longer purges all Redis user sessions during deployment, but only the database where the cache is stored.

<!--- MAGECLOUD-771 -->* You can now successfully deploy your Cloud installation with multiple locales to staging after upgrading to `magento-cloud-configuration` 101.5.1. 

<!--- MAGECLOUD-587 -->* Magento now automatically sets the cookie domain to reflect the new domain when branching an environment in a PAAS environment. Previously, the Admin panel was inaccessible until the value of the `cookie_domain` is changed at the database level to the current domain.


## How to get `magento-cloud-configuration` release 101.5.x
Magento Enterprise Cloud Edition periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply the patch, see [Test general patches]({{ site.gdeurl21 }}cloud/project/project-patch.html#cloud-patch-gen).

### Magento EE Release Notes
This Magento Enterprise Cloud Edition release corresponds to Magento Enterprise Edition 2.1.5.