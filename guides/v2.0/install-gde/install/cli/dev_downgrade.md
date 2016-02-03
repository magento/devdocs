---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Change to a released version
menu_title: Change to a released version
menu_order: 200
menu_node: 
github_link: install-gde/install/cli/dev_downgrade.md
---

This topic discusses how a contributing developer can change versions of the Magento software after cloning the `develop` branch. This might be necessary to perform some tasks that require a specific Magento version other than `develop`.

The `develop` branch is the default branch, which means you get it by default when you clone the Magento 2 GitHub repository. For some tasks, such as data migration from Magento 1.x to Magento 2.x, you must switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a>.

To change versions after cloning:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">the Magento file system owner</a>.
2.	Use the following command to uninstall the Magento software:

		php <your Magento clone dir>/bin/magento setup:uninstall
3.	Either remove your old Magento clone directory or <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html">update the Magento software</a>.
4.	If you haven't already done so, clone the Magento 2 GitHub repository'sas follows:

		git clone git@github.com:magento/magento2.git
5.	Change to <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name>  [-b <branch name>]

	For example, to check out the 2.0.2 release tag in a new branch named `2.0.2`, enter

		git checkout tags/2.0.2 -b 2.0.2

5.	Install the Magento software using the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">command line</a> or <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>.

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase