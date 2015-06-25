---
layout: default
group: install 
subgroup: T_Command-line installation
title: Uninstall language packages
menu_title: Uninstall language packages
menu_node: 
menu_order: 500
github_link: install-gde/install/install-cli-uninstall-langpk.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-uninst-lgpk-over">Overview of uninstalling language packages</a>
*	<a href="#instgde-cli-uninst-mod-lgpk">Uninstall language packages</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-uninst-lgpk-over">Overview of uninstalling language packages</h2>
This command uninstalls *only* language packages that are specified in `composer.json`; in other words, language packages that are provided as Composer packages. If your language package is not a Composer package, you must uninstall it manually by:

*	Removing references to it in the Magento Admin (verify TBD)
*	Removing language package code from the file system

This section discusses how to uninstall one or more language packages, optionally including the language packages' code from the file system. You can create backups first so you can restore the data at a later time.

You can restore backups at any time using the <a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

<h2 id="instgde-cli-uninst-lgpk-uninst">Uninstall language packages</h2>
Command usage:

	magento i18n:uninstall [--b|backup-code] <language package name> ... <language package name>

The language package uninstall command performs the following tasks:

1.	Checks for dependencies; if so, the command terminates.

	You can work around this issue TBD.
2.	If `--backup code` is specified, backs up the Magento file system (excluding <code>var</code> and <code>pub/static</code> directories) to `var/backups/<timestamp>_filesystem.tgz`
3.	Removes language packages files from the codebase using `composer remove`.
4.	Cleans the cache.

For example, the following command uninstalls a language package named `magento/language-en_us` after backing up the Magento codebase:

	magento i18n:uninstall magento/language-en_us

Messages similar to the following display:

	Loading composer repositories with package information
	Updating dependencies (including require-dev)
	  - Removing magento/language-en_us (0.74.0-beta12)
	Removing Magento/LanguageEn_us
	Writing lock file
	Generating autoload files

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable language packages</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>