---
layout: default
group: cloud
subgroup: 030_ReleaseNotes
title: magento-cloud-configuration release 101.6.x Release Notes
menu_title: magento-cloud-configuration release 101.6.x Release Notes
menu_order: 46
menu_node: 
version: 2.1
github_link: cloud/release-notes/CloudReleaseNotes101.6.md
---
 
These Release Notes provide up-to-date information about changes, additions, and fixes to the Magento Enterprise Cloud Edition version 2.1.6, `magento-cloud-configuration` releases 101.6.2, 101.6.3, 101.6.4, and 101.6.5. 

## Changes and enhancements in this release
In `magento-cloud-configuration` releases 101.6.2, 101.6.3, 101.6.4, and 101.6.5 on Magento Enterprise Edition 2.1.6, we provide the following improvements:



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
Magento Enterprise Cloud Edition periodically provides patch releases in components like `magento-cloud-configuration`.

To test and apply these patches, see [Test general patches]({{ site.gdeurl21 }}cloud/project/project-patch.html#cloud-patch-gen).

### Magento EE Release Notes
These Magento Enterprise Cloud Edition releases correspond to Magento Enterprise Edition 2.1.6.

