---
layout: default 
group: compman
subgroup: 20_update-updater
title: Update the updater application
menu_title: Update the updater application
menu_node: parent
menu_order: 1
version: 2.0
github_link: comp-mgr/updater/update-updater.md
---

## Update the updater application
In some cases, you might need to update the updater application, which is responsible for updating components and the Magento application. You should do this only if instructed to do so.

To update the updater application:

1.	Log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl }}install-gde/prereq/apache-user.html).
2.	Delete, move, or rename the directory containing the updater application.

	For example,

		mv <your Magento install dir>/update <your Magento install dir>/old_update
3.	Change to your Magento 2 installation directory and enter the following command:

		composer create-project magento/updater update --repository https://repo.magento.com
4.	If prompted, enter your Magento [authentication keys]({{ site.gdeurl }}install-gde/prereq/connect-auth.html).
5.	Wait while Composer installs the updater and its dependencies.
