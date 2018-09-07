---
group: software-update-guide
subgroup: 50_trouble
title: Missing .gitignore files
menu_title: Missing .gitignore files
menu_node:
menu_order: 5
functional_areas:
  - Upgrade
---

### Problem: missing `.gitignore` files {#missing-ignore}

If you downloaded a compressed archive, there might have been missing `.gitignore` files that prevent the upgrade from completing properly. To apply our update, patch `magento/magento-composer-installer` then run `composer update` from your Magento installation directory. 

The following figure shows an example of this issue when using the Setup Wizard.

![]({{ site.baseurl }}/common/images/upgr_gitignore-err.png){: width="700px"}


#### Solution

To solve this issue:

1.	Log in to your Magento server as the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).
2.	Change to your Magento installation directory.
3.	Run the following commands in the order shown:

		composer update magento/magento-composer-installer
		composer update

4.	Try your upgrade again.
