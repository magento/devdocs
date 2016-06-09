---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Uninstall language packages
menu_title: Uninstall language packages
menu_node: 
menu_order: 500
version: 2.1
github_link21: install-gde/install/cli/install-cli-uninstall-langpk.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-uninst-lgpk-over">Overview of uninstalling language packages</a>
*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-uninst-mod-lgpk">Uninstall language packages</a>

<h2 id="instgde-cli-uninst-lgpk-over">Overview of uninstalling language packages</h2>
This section discusses how to uninstall one or more language packages, optionally including the language packages' code from the file system. You can create backups first so you can restore the data at a later time.

This command uninstalls *only* language packages that are specified in `composer.json`; in other words, language packages that are provided as Composer packages. If your language package is not a Composer package, you must uninstall it manually by removing language package code from the file system.

You can restore backups at any time using the <a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall-mods.html#instgde-cli-uninst-mod-roll">magento setup:rollback</a> command.

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl21 }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-uninst-lgpk-uninst">Uninstall language packages</h2>
Command usage:

	magento i18n:uninstall [-b|--backup-code] {language package name} ... {language package name}

The language package uninstall command performs the following tasks:

1.	Checks for dependencies; if so, the command terminates.

	To work around this, you can either uninstall all dependent language packages at the same time or you can uninstall the depending language packages first.
2.	If `--backup code` is specified, backs up the Magento file system (excluding <code>var</code> and <code>pub/static</code> directories) to `var/backups/<timestamp>_filesystem.tgz`
3.	Removes language packages files from the codebase using `composer remove`.
4.	Cleans the cache.

For example, if you attempt to uninstall a language package that another language package depends on, the following message displays:

	Cannot uninstall vendorname/language-en_us because the following package(s) depend on it:
        vendorname/language-en_gb

One alternative is to uninstall both language packages after backing up the Magento codebase:

	magento i18n:uninstall vendorname/language-en_us vendorname/language-en_gb --backup-code

Messages similar to the following display:

	Code backup is starting...
	Code backup filename: 1435261098_filesystem_code.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
	Code backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_code.tgz
	[SUCCESS]: Code backup completed successfully.
	Loading composer repositories with package information
	Updating dependencies (including require-dev)
	  - Removing vendorname/language-en_us (dev-master)
	Removing Magento/LanguageEn_us
	  - Removing vendorname/language-en_br (dev-master)
		Removing vendorname/language-en_br (dev-master)
	Writing lock file
	Generating autoload files

#### Related topics

*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl21 }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
