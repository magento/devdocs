---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Uninstall themes
menu_title: Uninstall themes
menu_node: 
menu_order: 200
version: 2.0
github_link: install-gde/install/cli/install-cli-theme-uninstall.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-theme-uninstall.html
  -  /guides/v2.0/install-gde/install/install-cli-theme-uninstall.html
---

<h2 id="instgde-install-uninst-theme-prereq">Prerequisite</h2>
Before you use this command, you must know the relative path to your theme. Themes are located in a subdirectory of `<your Magento install dir>/app/design/<area name>`. You must specify the path to the theme starting with the area, which is either `frontend` (for storefront themes) or `adminhtml` (for Magento Admin themes).

For example, the path to the Luma theme provided with Magento 2 is `frontend/Magento/luma`.

For more information about themes, see <a href="{{page.baseurl}}frontend-dev-guide/themes/theme-structure.html">Magento theme structure</a>.

<h2 id="instgde-install-uninst-theme-over">Overview of uninstalling themes</h2>
This section discusses how to uninstall one or more themes, optionally including the themes' code from the file system. You can create backups first so you can restore the data at a later time.

This command uninstalls *only* themes that are specified in `composer.json`; in other words, themes that are provided as Composer packages. If your theme is not a Composer package, you must uninstall it manually by:

*	Updating the `parent` node information in `theme.xml` to remove references to the theme.
*	Removing theme code from the file system.

	<a href="{{page.baseurl}}frontend-dev-guide/themes/theme-inherit.html">More information about theme inheritance</a>.

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-install-uninst-theme-uninst">Uninstall themes</h2>
Command usage:

	magento theme:uninstall [--backup-code] [-c|--clear-static-content] {theme path} ... {theme path}

where 

*	`{theme path}` is the relative path to the theme, starting with the area name. For example, the path to the Blank theme supplied with Magento 2 is `frontend/Magento/blank`.
*	`--backup-code` backs up the Magento 2 codebase as discussed in the paragraphs that follow.
*	`--clear-static-content` cleans generated <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">static view files</a>, which is necessary to cause static view files to display properly.

The command performs the following tasks:

1.	Verifies that the specified theme paths exist; if not, the command terminates.
2.	Verifies that the theme is a Composer package; if not, the command terminates.
3.	Checks for dependencies; if there are any, the command terminates.

	To work around this, you can either uninstall all themes at the same time or you can uninstall the depending theme first.
4.	Verifies that the theme is not being used; if it is being used, the command terminates.
5.	Verifies that the theme is not the base of the virtual theme; if it is the base of a virtual theme, the command terminates.
6.	Puts the store in maintenance mode.
7.	If `--backup-code` is specified, backs up the Magento 2 codebase, excluding the `pub/static`, `pub/media`, and `var` directories.

	The backup file name is `var/backups/<timestamp>_filesystem.tgz`

	You can restore backups at any time using the <a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

8.	Removes themes from the `theme` database table.
9.	Remove themes from code base using `composer remove`.
10.	Cleans the cache.
11.	Cleans generated classes
12.	If `--clear-static-content` is specified, cleans <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a>.

For example, if you attempt to uninstall a theme that another theme depends on, the following message displays:

	Cannot uninstall frontend/ExampleCorp/SampleModuleTheme because the following package(s) depend on it:
        ExampleCorp/sample-module-theme-depend

One alternative is to uninstall both themes at the same time as follows after backing up the Magento codebase:

	magento theme:uninstall frontend/ExampleCorp/SampleModuleTheme frontend/ExampleCorp/SampleModuleThemeDepend --backup-code

Messages similar to the following display:

	Code backup is starting...
	Code backup filename: 1435261098_filesystem_code.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
	Code backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_code.tgz
	[SUCCESS]: Code backup completed successfully.Removing frontend/ExampleCorp/SampleModuleTheme, frontend/ExampleCorp/SampleModuleThemeDepend from database
	Loading composer repositories with package information
	Updating dependencies (including require-dev)
	Removing frontend/ExampleCorp/SampleModuleTheme, frontend/ExampleCorp/SampleModuleThemeDepend from Magento codebase
	  - Removing ExampleCorp/sample-module-theme-depend (dev-master)
	Removing ExampleCorp/SampleThemeDepend
	  - Removing ExampleCorp/sample-module-theme (dev-master)
	Removing ExampleCorp/SampleTheme
	Writing lock file
	Generating autoload files
	Cache cleared successfully.
	Alert: Generated static view files were not cleared. You can clear them using the --clear-static-content option. 
	Failure to clear static view files might cause display issues in the Admin and storefront.
	Disabling maintenance mode

<div class="bs-callout bs-callout-info" id="info">
  <p>To uninstall a Magento Admin theme, you must also remove it from your component's dependency injection configuration, <code>&lt;component root directory>/etc/di.xml</code>.</p>
</div>

#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html)
*	[Uninstall language packages]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
