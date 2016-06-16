---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node: 
menu_order: 2
version: 2.0
github_link: install-gde/install/cli/install-cli-subcommands.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-subcommands.html
  -  /guides/v2.0/install-gde/install/install-cli-subcommands.html
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-before">First steps</a>
*	<a href="#instgde-cli-summary">Command summary</a>
*	<a href="#instgde-cli-help">Help commands</a>
*	<a href="#instgde-cli-subcommands-common">Common arguments</a>
*	<a href="#instgde-cli-subcommands">Commands</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-deployment.html">Create the deployment configuration</a>

<!-- *	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a> -->

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>
{% include install/before-you-begin-cli.html %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-summary">Command summary</h2>
The following table summarizes the available commands. Commands are shown in summary form only; for more information about a command, click the link in the Command column.

<table>
	<col width="40%">
  	<col width="30%">
  	<col width="30%">
	<tbody>
		<tr>
			<th>Command</th>
			<th>Description</th>
			<th>Prerequisites</th>
		</tr>
		
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">magento setup:install</a></td>
		<td><p>Installs the Magento software</p></td>
		<td><p>None</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">magento setup:uninstall</a></td>
		<td><p>Removes the Magento software.</p></td>
		<td><p>Magento software installed</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">magento setup:upgrade</a></td>
		<td><p>Updates the Magento software.</p></td>
		<td><p>Deployment configuration</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-maint.html">magento maintenance:{enable|disable}</a></td>
		<td><p>Enables or disables maintenance mode (in maintenance mode, only exempt IP addresses can access the Magento Admin or storefront).</p></td>
		<td><p>Magento software installed</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-deployment.html">php magento config:set</a></td>
		<td><p>Creates the deployment configuration.</p></td>
		<td><p>None</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">magento module:{enable|disable}</a></td>
		<td><p>Enable or disable modules.</p></td>
		<td><p>None</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-store.html">magento setup:store-config:set</a></td>
		<td><p>Sets storefront-related options, such as base URL, language, timezone, and so on.</p></td>
		<td><ul><li>Deployment configuration</li>
			<li>Database (simplest way is to use <code>magento setup:upgrade</code>)</li>
				</ul></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-db.html">magento setup:db-schema:upgrade</a></td>
		<td><p>Updates the Magento database schema.</p></td>
		<td><p>Deployment configuration</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-db.html">magento setup:db-data:upgrade</a></td>
		<td><p>Updates the Magento database data.</p></td>
		<td><p>Deployment configuration</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-db.html#instgde-cli-dbconfig">magento setup:db:status</a></td>
		<td><p>Checks if the database is up-to-date with the code.</p></td>
		<td><p>Deployment configuration</p></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-admin.html">magento admin:user:create</a></td>
		<td><p>Creates a Magento administrator.</p></td>
		<td><p>All of the following:</p>
			<ul><li>Deployment configuration</li>
				<li>Enable at minimum the <code>Magento_User</code> and <code>Magento_Authorization</code> modules</li>
				<li>Database (simplest way is to use <code>magento setup:upgrade</code>)</li>
				</ul></td>
	</tr>
	<tr>
		<td><a href="#instgde-cli-help">magento list</a></td>
		<td><p>Lists all available commands.</p></td>
		<td><p>None</p></td>
	</tr>
	<tr>
		<td><a href="#instgde-cli-help">magento help</a></td>
		<td><p>Provides help for the specified command.</p></td>
		<td><p>None</p></td>
	</tr>
	
	
	</tbody>
</table>

<h2 id="instgde-cli-help">Help commands</h2>
{% include install/cli_help-commands.html %}


<h2 id="instgde-cli-subcommands-common">Common arguments</h2>
{% include install/cli_common-commands.html %}


<h2 id="instgde-cli-subcommands">Commands</h2>
The following sections discuss the available commands.

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
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
