---
layout: default
group: install 
subgroup: T_Command-line installation
title: Uninstall modules
menu_title: Uninstall modules
menu_node: 
menu_order: 8
github_link: install-gde/install/install-cli-uninstall-mods.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-uninst-mod-over">Overview of uninstalling modules</a>
*	<a href="#instgde-cli-uninst-prereq">Prerequisites</a>
*	<a href="#instgde-cli-uninst-mod-uninst">Uninstall modules</a>
*	<a href="#instgde-cli-uninst-mod-roll">Roll back the codebase</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-uninst-prereq">Prerequisites</h2>
Before you use this command, you must <a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">install the Magento software</a>.

<h2 id="instgde-cli-uninst-mod-over">Overview of uninstalling modules</h2>
This section discusses how to uninstall one or more individual modules, optionally including the modules' data. 

You should uninstall a module only if you're certain you won't use it. Instead of uninstalling a module, you can disable it as discussed in <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command uninstalls <em>only</em> Composer packages. Modules that are installed with the Magento software can't be uninstalled; you can, however, disable those modules.</p></span>
</div>


<h2 id="instgde-cli-uninst-mod-uninst">Uninstall modules</h2>
Command usage:

	magento module:uninstall [--backup-code] [--backup-media] [--backup-db] [-r|--remove-data] [-c|--clear-static-content] <ModuleName> ... <ModuleName>

The module uninstall command performs the following tasks:

1.	Verifies that the specified modules exist in the code base and are packages installed by Composer.

	This command works *only* with modules defined as Composer packages.

2.	Checks for dependencies with other modules.
4.	Requests confirmation to proceed.
3.	Puts the store in maintenance mode.
4.	Processes the following command options.

	<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Option</th>
			<th>Meaning</th>
			<th>Backup file name and location</th>
		</tr>
		
	<tr>
		<td><p>--backup-code</p></td>
		<td><p>Backs up the Magento file system (excluding <code>var</code> and <code>pub/static</code> directories).</p></td>
		<td><p>/var/backups/&lt;timestamp>filesystem.tgz</p></td>
	</tr>
	<tr>
		<td><p>--backup-media</p></td>
		<td><p>Back up the <code>pub/media</code> directory.</p></td>
		<td><p>/var/backups/&lt;timestamp>filesystem_media.tgz</p></td>
	</tr>
	<tr>
	<tr>
		<td><p>--backup-db</p></td>
		<td><p>Back up the Magento 2 database.</p></td>
		<td><p>/var/backups/&lt;timestamp>db.gz</p></td>
	</tr>
	<tr>
	</tbody>
	</table>


3.	If `--remove-data` is specified, collects the `Uninstall` classes from the code base.

	For each specified module to uninstall, invoke the `uninstall` method in its `Uninstall` class. This class must inherit from <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Setup/UninstallInterface.php" target="_blank">Magento\Framework\Setup\UninstallInterface</a>.
4.	Removes the specified modules from the `setup_module` database table.
4.	Removes the specified modules from the module list in the <a href="{{ site.gdeurl }}config-guide/config/config-php.html">deployment configuration</a>.
5.	Removes code from the codebase using `composer remove`.
5.	Cleans the cache.
6.	Updates generated classes.
6.	If `--clear-static-content` is specified, clears generated static view files.
7.	Takes the store out of maintenance mode.

<h2 id="instgde-cli-uninst-mod-roll">Roll back the codebase</h2>
To restore the Magento codebase to the state at which you backed it up using the `--backup-code` parameter, use the following command:

	magento setup:rollback {filename}

where `filename` is the name of the backup file located in `<your Magento install dir>/var/backups`.

This command performs the following tasks:

1.	Puts the store in maintenance mode.
1.	Verifies the backup file name.
4.	If you specify a code rollback file:
	
	2.	Verifies the rollback destination locations are writable (note that the `pub/static` and `var` folders are ignored).
	3.	Removes existent code base in the rollback destination locations.
	4.	Extracts the archive file to the destination locations.
5.	If you specify a database rollback file:

	2.	Drops the entire Magento database.
	3.	Restores the database using the database backup.
5.	If you specify a media rollback file:

	2.	Verifies the rollback destination locations are writable.
	3.	Removes existent media files in the rollback destination locations.
	4.	Extracts the archive file to the destination locations.

5.	Takes the store out of maintenance mode.

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>