---
layout: default 
group:  install
subgroup: T_Command-line installation
title: Enable or disable modules
menu_title: Enable or disable modules
menu_node: 
menu_order: 7
github_link: install-gde/install/cli/cli/install-cli-subcommands-enable.md
---

  
#### Contents

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-subcommands-enable-disable-prereq">Prerequisites</a>
*	<a href="#instgde-cli-subcommands-enable-disable">Module enable, disable</a>
*	<a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-enable-disable-prereq">Prerequisites</h2>
This command has no prerequisites.

<h2 id="instgde-cli-subcommands-enable-disable">Module enable, disable</h2>
To enable or disable available modules, use the following command:

	magento module:enable [-c|--clear-static-content] [-f|--force] [--all] <module-list> 
	magento module:disable [-c|--clear-static-content] [-f|--force] [--all] <module-list> 

where

*	`<module-list>` is a space-delimited list of modules to enable or disable. If any module name contains special characters, enclose the name in either single or double quotes.
*	`--all` to enable or disable all modules at the same time.
*	`-f` or `--force` to force a module to be enabled or disabled despite dependencies. Before you use this option, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.
*	`-c` or `--clear-static-content` clears generated static view files after enabling or disabling modules. 

	Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them. 

	In other words, because of <a href="{{ site.gdeurl }}architecture/view/static-process.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named `logo.gif` that are different, fallback might cause the wrong file to display.

Use the following command to list enabled and disabled modules:

	magento module:status

For example, to disable the Weee module, enter:

	magento module:disable Magento_Weee

For important information about enabling and disabling modules, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.

<h2 id="instgde-cli-subcommands-enable-update">Update the database</h2>
If you enabled one or more modules, run the following command to update the database:

	magento setup:upgrade

<h2 id="instgde-cli-subcommands-enable-modules">About enabling and disabling modules</h2>
{% include install/enable-disable-modules.html %}

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-uninstall-langpk.html">Uninstall language packages</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
