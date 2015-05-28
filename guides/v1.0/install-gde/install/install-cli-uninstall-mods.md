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
*	<a href="#instgde-cli-uninst-mod-uninst">Uninstall modules</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-uninst-mod-over">Overview of uninstalling modules</h2>
This section discusses how to uninstall one or more individual modules, optionally including the modules' data. 

You should uninstall a module only if you're certain you won't use it. Instead of uninstalling a module, you can disable it as discussed in <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>.

The module uninstall command performs the following tasks:

1.	Verifies that the specified modules exist in the code base and are packages installed by Composer.

	This command works *only* with modules defined as Composer packages.

2.	Checks for dependencies with other modules.
2.	If `--code-backup` is specified, backs up the Magento file system (excluding `var` and `pub/static` directories).
3.	If `--remove-data` is specified, collects the `Uninstall` classes from the code base.

	For each specified module to uninstall, invoke the `uninstall` method in its `Uninstall` class. This class must inherit from <a href="{{ site.mage2000url }}lib/internal/Magento/Framework/Setup/UninstallInterface.php" target="_blank">Magento\Framework\Setup\UninstallInterface</a>.
4.	Removes the specified modules from the module registry in the database table `setup_module`.
4.	Removes the specified modules from the module list in the <a href="{{ site.gdeurl }}config-guide/config/config-php.html">deployment configuration</a>.
5.	Cleans the cache.
6.	Cleans generated classes.
6.	If `--clear-static-content` is specified, clears generated static view files.


<h2 id="instgde-cli-uninst-mod-uninst">Uninstall modules</h2>
Command usage:

	magento module:uninstall [-r|--remove-data] [--code-backup] [-c|--clear-static-content] <ModuleName> ... <ModuleName>

The following table discusses the meanings of installation parameters and values. 

<table>
	<col width="25%">
	<col width="65%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Parameter</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td><p>&lt;ModuleName></p></td>
		<td><p>Space-separated list of modules to uninstall.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>-r|--remove-data</p></td>
		<td><p>Removes the module's data from the file system (under <code>app/code</code>).</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>-c|--clear-static-content</p></td>
		<td><p>Clears generated static view files after uninstalling modules.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--code-backup</p></td>
		<td><p>Backs up the Magento file system (excluding the <code>var</code> and <code>pub/static</code> directories) before uninstalling modules.</p>
			<p>The backup is stored in <code>var/backup</code> as a compressed tar file with the name <code>&lt;timestamp>.filesystem.tgz</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	
	</tbody>
</table>





