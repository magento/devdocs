---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Uninstall modules
menu_title: Uninstall modules
menu_node: 
menu_order: 8
version: 2.0
github_link: install-gde/install/cli/install-cli-uninstall-mods.md
redirect_from: 
  -  /guides/v1.0/install-gde/install/install-cli-uninstall-mods.html
  -  /guides/v2.0/install-gde/install/install-cli-uninstall-mods.html
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-cli-uninst-prereq">Prerequisites</a>
*	<a href="#instgde-cli-uninst-mod-over">Overview of uninstalling modules</a>
*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-uninst-mod-uninst">Uninstall modules</a>
*	<a href="#instgde-cli-uninst-mod-roll">Roll back the file system, database, or media files</a>

<h2 id="instgde-cli-uninst-prereq">Prerequisites</h2>
Before you use this command, you must <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">install the Magento software</a>.

<h2 id="instgde-cli-uninst-mod-over">Overview of uninstalling modules</h2>
This section discusses how to uninstall one or more modules. During uninstallation, you can optionally remove the modules' code, database schema, and database data. You can create backups first so you can recover the data at a later time.

You should uninstall a module only if you're certain you won't use it. Instead of uninstalling a module, you can disable it as discussed in <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command checks <em>only</em> dependencies declared in <code>composer.json</code>. If you uninstall a module that is <em>not</em> defined in <code>composer.json</code>, this command uninstalls the module without checking for dependencies. This command does <em>not</em>, however, remove the module's code from the Magento file system. You must use file system tools to remove the module's code (for example, <code>rm -rf &lt;path to module></code>.</p>
  <p>As an alternative, you can <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">disable</a> non-Composer modules.</p></span>
</div>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-uninst-mod-uninst">Uninstall modules</h2>
Command usage:

	magento module:uninstall [--backup-code] [--backup-media] [--backup-db] [-r|--remove-data] [-c|--clear-static-content] \
	{ModuleName} ... {ModuleName}

where `{ModuleName}` specifies the module name in `<VendorName>_<ModuleName>` format. For example, the Magento Customer module name is `Magento_Customer`. To get a list of module names, enter `magento module:status`

The module uninstall command performs the following tasks:

1.	Verifies that the specified modules exist in the code base and are packages installed by Composer.

	This command works *only* with modules defined as Composer packages.

2.	Checks for dependencies with other modules; if there are any, the command terminates..

	To work around this, you can either uninstall all modules at the same time or you can uninstall the depending modules first.
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
		<td><p>var/backups/&lt;timestamp>_filesystem.tgz</p></td>
	</tr>
	<tr>
		<td><p>--backup-media</p></td>
		<td><p>Backs up the <code>pub/media</code> directory.</p></td>
		<td><p>var/backups/&lt;timestamp>_filesystem_media.tgz</p></td>
	</tr>
	<tr>
	<tr>
		<td><p>--backup-db</p></td>
		<td><p>Backs up the Magento 2 database.</p></td>
		<td><p>var/backups/&lt;timestamp>_db.gz</p></td>
	</tr>
	<tr>
	</tbody>
	</table>


3.	If `--remove-data` is specified, removes the database schema and data defined in the module's `Uninstall` classes.

	For each specified module to uninstall, invokes the `uninstall` method in its `Uninstall` class. This class must inherit from <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Setup/UninstallInterface.php" target="_blank">Magento\Framework\Setup\UninstallInterface</a>.
4.	Removes the specified modules from the `setup_module` database table.
4.	Removes the specified modules from the module list in the <a href="{{ site.gdeurl }}config-guide/config/config-php.html">deployment configuration</a>.
5.	Removes code from the codebase using `composer remove`.

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>Uninstalling a module <em>always</em> runs <code>composer remove</code>. The <code>--remove-data</code> option removes database data and schema defined by the module's <code>Uninstall</code> class.</p></span>
	</div>
5.	Cleans the cache.
6.	Updates generated classes.
6.	If `--clear-static-content` is specified, cleans <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview">generated static view files</a>.
7.	Takes the store out of maintenance mode.

For example, if you attempt to uninstall a module that another module depends on, the following message displays:

	magento module:uninstall Magento_SampleMinimal
		Cannot uninstall module 'Magento_SampleMinimal' because the following module(s) depend on it:
        Magento_SampleModifyContent

One alternative is to uninstall both modules after backing up the Magento module file system, `pub/media` files, and database tables but *not* removing the module's database schema or data:

	magento module:uninstall Magento_SampleMinimal Magento_SampleModifyContent --backup-code --backup-media --backup-db

Messages similar to the following display:

	You are about to remove code and/or database tables. Are you sure?[y/N]y
	Enabling maintenance mode
	Code backup is starting...
	Code backup filename: 1435261098_filesystem_code.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
	Code backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_code.tgz
	[SUCCESS]: Code backup completed successfully.
	Media backup is starting...
	Media backup filename: 1435261098_filesystem_media.tgz (The archive can be uncompressed with 7-Zip on Windows systems)
	Media backup path: /var/www/html/magento2/var/backups/1435261098_filesystem_media.tgz
	[SUCCESS]: Media backup completed successfully.
	DB backup is starting...
	DB backup filename: 1435261098_db.gz (The archive can be uncompressed with 7-Zip on Windows systems)
	DB backup path: /var/www/html/magento2/var/backups/1435261098_db.gz
	[SUCCESS]: DB backup completed successfully.
	You are about to remove a module(s) that might have database data. Remove the database data manually after uninstalling, if desired.
	Removing Magento_SampleMinimal, Magento_SampleModifyContent from module registry in database
	Removing Magento_SampleMinimal, Magento_SampleModifyContent from module list in deployment configuration	
	Removing code from Magento codebase:
	Loading composer repositories with package information
	Updating dependencies (including require-dev)
	  - Removing magento/sample-module-modifycontent (1.0.0)
	Removing Magento/SampleModifycontent
	  - Removing magento/sample-module-minimal (1.0.0)
	Removing Magento/SampleMinimal
	Writing lock file
	Generating autoload files
	Cache cleared successfully.
	Generated classes cleared successfully.
	Alert: Generated static view files were not cleared. You can clear them using the --clear-static-content option. Failure to clear static view files might cause display issues in the Admin and storefront.
	Disabling maintenance mode

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>Errors display if you attempt to uninstall a module with a dependency on another module. In that case, you cannot uninstall one module; you must uninstall both.</p></span>
</div>

<h2 id="instgde-cli-uninst-mod-roll">Roll back the file system, database, or media files</h2>
To restore the Magento codebase to the state at which you backed it up, use the following command:

	magento setup:rollback [-c|--code-file="<filename>"] [-m|--media-file="<filename>"] [-d|--db-file="<filename>"]

where `<filename>` is the name of the backup file located in `<your Magento install dir>/var/backups`. To display a list of backup files, enter `magento info:backups:list`

<div class="bs-callout bs-callout-warning">
    <p>This command deletes the specified files or the database before restoring them. (For example, the <code>--media-file</code> option deletes media assets under <code>pub/media</code> before restoring from the specified rollback file.) Make sure you have made no changes to the file system or database that you want to keep before using this command.</p>
</div>


<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>To display a list of available backup files, enter <code>magento info:backups:list</code></p></span>
</div>

This command performs the following tasks:

1.	Puts the store in maintenance mode.
1.	Verifies the backup file name.
4.	If you specify a code rollback file:
	
	a.	Verifies the rollback destination locations are writable (note that the `pub/static` and `var` folders are ignored).

	b.	Deletes all files and directories under your Magento 2 installation directory.

	c.	Extracts the archive file to the destination locations.
5.	If you specify a database rollback file:

	a.	Drops the entire Magento database.

	b.	Restores the database using the database backup.
5.	If you specify a media rollback file:

	a.	Verifies the rollback destination locations are writable.

	b.	Deletes all files and directories under `pub/media`

	c.	Extracts the archive file to the destination locations.

5.	Takes the store out of maintenance mode.

For example, to restore a code (that is, file system) backup, enter the following commands in the order shown:

*	Display a list of backups:

		magento info:backups:list

*	Restore a file backup named `1433876616_filesystem.tgz`:

		magento setup:rollback --code-file="1433876616_filesystem.tgz"

	Messages similar to the following display:

		Enabling maintenance mode
		Code rollback is starting ...
		Code rollback filename: 1433876616_filesystem.tgz
		Code rollback file path: /var/www/html/magento2/var/backups/1433876616_filesystem.tgz
		[SUCCESS]: Code rollback has completed successfully.
		Disabling maintenance mode

<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
	<p>To run the <code>magento</code> command again without changing directories, you might need to enter <code>cd `pwd`</code></p></span>
</div>

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-backup.html">Back up the file system, media, and database</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-theme-uninstall.html">Uninstall themes</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall-langpk.html">Uninstall language packages</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
