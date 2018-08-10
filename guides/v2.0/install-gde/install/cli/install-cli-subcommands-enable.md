---
group: install_cli
subgroup: 05_Command-line installation
title: Enable or disable modules
menu_title: Enable or disable modules
menu_node:
menu_order: 7
version: 2.0
redirect_from:
  - /guides/v1.0/install-gde/install/install-cli-subcommands-enable.html
  - /guides/v2.0/install-gde/install/install-cli-subcommands-enable.html
functional_areas:
  - Install
  - System
  - Setup
---

## First steps   {#instgde-cli-before}

{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

## Prerequisites   {#instgde-cli-subcommands-enable-disable-prereq}

This command has no prerequisites.

## Module enable, disable   {#instgde-cli-subcommands-enable-disable}

To enable or disable available modules, use the following command:

	magento module:enable [-c|--clear-static-content] [-f|--force] [--all] <module-list>
	magento module:disable [-c|--clear-static-content] [-f|--force] [--all] <module-list>

where

*	`<module-list>` is a space-delimited list of modules to enable or disable. If any {% glossarytooltip c1e4242b-1f1a-44c3-9d72-1d5b1435e142 %}module{% endglossarytooltip %} name contains special characters, enclose the name in either single or double quotes.
*	`--all` to enable or disable all modules at the same time.
*	`-f` or `--force` to force a module to be enabled or disabled despite dependencies. Before you use this option, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.
*	`-c` or `--clear-static-content` cleans <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a>.

	Failure to clear static view files might result in issues if there are multiple files with the same name and you don't clear all of them.

	In other words, because of <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html">static file fallback</a> rules, if you do not clear static files and there is more than one file named `logo.gif` that are different, fallback might cause the wrong file to display.

Use the following command to list enabled and disabled modules:

	magento module:status

For example, to disable the Weee module, enter:

	magento module:disable Magento_Weee

For important information about enabling and disabling modules, see <a href="#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.

## Update the database   {#instgde-cli-subcommands-enable-update}

If you enabled one or more modules, run the following command to update the database:

	magento setup:upgrade

## About enabling and disabling modules   {#instgde-cli-subcommands-enable-modules}

{% include install/enable-disable-modules.html %}

#### Related topics

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}/install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}/install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}/install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
