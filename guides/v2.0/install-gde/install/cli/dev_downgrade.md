---
layout: default
group: install_cli 
subgroup: 99_contrib
title: Change to a released version
menu_title: Change to a released version
menu_order: 200
menu_node: 
version: 2.0
github_link: install-gde/install/cli/dev_downgrade.md
---

## Change to a released version

This topic discusses how a contributing developer can change versions of the Magento software after cloning the `develop` branch. This might be necessary to perform some tasks that require a specific Magento version other than `develop`.

The `develop` branch is the default branch, which means you get it by default when you clone the Magento 2 GitHub repository. For some tasks, such as data migration from Magento 1.x to Magento 2.x, you must switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a>.

You have the following options:

*	*(Easier)*. If you haven't done any customizations, you should uninstall the Magento software and reinstall it with the released version. Uninstalling not only drops the database tables, it also clears the Magento `var` directory, enabling you to start over with no issues.

	For more information, see [Change versions by uninstalling the Magento software](#downgrade-uninstall)
*	If you have done customizations and don't want to lose them, back up the Magento system, switch to the released branch, and install in a new database instance.

	For more information, see [Change versions by installing the Magento software in a new database instance](#downgrade-db)

	You can migrate your customizations (both in the file system and in the database) from the backups you made or directly using database and file system tools.

### Change versions by uninstalling the Magento software {#downgrade-uninstall}

To change versions after cloning:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html">the Magento file system owner</a>.
2.	Use the following command to uninstall the Magento software:

		php <your Magento clone dir>/bin/magento setup:uninstall
3.	Either remove your old Magento clone directory or <a href="{{ site.gdeurl }}install-gde/install/cli/dev_update-magento.html">update the Magento software</a>.
4.	If you haven't already done so, clone the Magento 2 GitHub repository as follows:

		git clone git@github.com:magento/magento2.git
5.	Change to <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name>  [-b <branch name>]

	For example, to check out the 2.0.6 release tag in a new branch named `2.0.6`, enter

		git checkout tags/2.0.6 -b 2.0.6

5.	Install the Magento software using the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">command line</a> or <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>.

### Change versions by installing the Magento software in a new database instance {#downgrade-db}

To change versions after cloning:

1.	Log in to your Magento server as, or switch to, <a href="{{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html">the Magento file system owner</a>.
2.	Create a <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html#instgde-prereq-mysql-config">new database instance</a> for your installation.
2.	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html#instgde-cli-uninst-back">Back up</a> the Magento file system, database, and media files:

		php <your Magento install dir>/bin/magento setup:backup --code --media --db
3.	Change to <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name>  [-b <branch name>]

	For example, to check out the 2.0.2 release tag in a new branch named `2.0.2`, enter

		git checkout tags/2.0.2 -b 2.0.2

4.	Manually clear Magento `var` directories:

		rm -rf <your Magento install dir>/var/cache/* <your Magento install dir>/var/page_cache/* <your Magento install dir>/var/generation/*

5.	Install the Magento software in your new database instance.

	You can install using either the <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">command line</a> or <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>.

<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
