---
group: software-update-guide
subgroup: 40_update-updater
title: Update the updater application
menu_title: Update the updater application
menu_node: parent
menu_order: 1
functional_areas:
  - Upgrade
---

In some cases, you might need to update the updater application, which is responsible for updating components and the Magento application. You should do this only if instructed to do so.

To update the updater application:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/apache-user.html).
2.	Delete, move, or rename the directory containing the updater application.

	For example,

		mv <magento_root>/update <magento_root>/old_update
3.	Change to your Magento 2 installation directory and enter the following command:

		composer create-project magento/updater update --repository https://repo.magento.com
4.	If prompted, enter your Magento [authentication keys]({{ page.baseurl }}/install-gde/prereq/connect-auth.html).
5.	Wait while [Composer](https://glossary.magento.com/composer) installs the updater and its dependencies.
