---
layout: default
group: 
subgroup: ZZ_Troubleshooting
title: Missing `.gitignore` files
menu_title: Missing `.gitignore` files
menu_node: 
menu_order: 5
github_link: comp-mgr/trouble/cman/gitignore.md
---

### Problem: missing `.gitignore` files {#missing-ignore}
If you downloaded a compressed archive, there might have been missing `.gitignore` files that prevent the upgrade from completing properly. To apply our update, patch `magento/magento-composer-installer` then run `composer update` from your Magento installation directory. 

#### Solution
To solve this issue:

1.	Log in to your Magento server as the <a href="{{ site.gdeurl21 }}install-gde/prereq/apache-user.html">Magento file system owner</a>.
2.	Change to your Magento installation directory.
3.	Run the following commands in the order shown:

		composer update magento/magento-composer-installer
		composer update

4.	Try your upgrade again.