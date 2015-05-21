---
layout: default
group: install 
subgroup: T_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node: 
menu_order: 2
github_link: install-gde/install/install-cli-subcommands.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-summary">Command summary</a>
*	<a href="#instgde-cli-help">Help commands</a>
*	<a href="#instgde-cli-subcommands-common">Common arguments</a>
*	<a href="#instgde-cli-subcommands">Commands</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>

<!-- *	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a> -->

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>
{% include install/before-you-begin-cli.html %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
<ol><li>Log in to the Magento server as, or <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">switch to</a>, the web server user.</li>
<li>Change to the following directory:<br>
<pre>cd &lt;your Magento install dir>/bin</pre>
Examples:
<ul><li>Ubuntu: <code>cd /var/www/magento2/bin</code></li>
<li>CentOS: <code>cd /var/www/html/magento2/bin</code></li>
</ul>
</li>
</ol>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You can run the commands in any of the following ways:</p>
<ul><li><code>magento &lt;command></code></li>
<li><code>magento &lt;command></code></li></ul></span>
</div>

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
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">magento setup:install</a></td>
		<td>Installs the Magento software</td>
		<td>None</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-uninstall">magento setup:uninstall</a></td>
		<td>Removes the Magento software.</td>
		<td>Magento software installed</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-update">magento setup:upgrade</a></td>
		<td>Updates the Magento software.</td>
		<td>Deployment configuration</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-maint.html">magento maintenance:{enable|disable}</a></td>
		<td>Enables or disables maintenance mode (in maintenance mode, only exempt IP addresses can access the Magento Admin or storefront).</td>
		<td>Magento software installed</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">magento config:set</a></td>
		<td>Creates the deployment configuration file, <code>config.php</code>.</td>
		<td>None</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">magento module:{enable|disable}</a></td>
		<td>Enable or disable modules.</td>
		<td>None</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-store.html">magento setup:store-config:set</a></td>
		<td>Sets storefront-related options, such as base URL, language, timezone, and so on.</td>
		<td><ul><li>Deployment configuration</li>
			<li>Database (simplest way is to use <code>magento setup:upgrade</code>)</li>
				</ul></td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">magento setup:db-schema:upgrade</a></td>
		<td>Updates the Magento database schema.</td>
		<td>Deployment configuration</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">magento setup:db-data:upgrade</a></td>
		<td>Updates the Magento database data.</td>
		<td>Deployment configuration</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html#instgde-cli-dbconfig">magento setup:db:status</a></td>
		<td>Checks if the database is up-to-date with the code.</td>
		<td>Deployment configuration</td>
	</tr>
	<tr>
		<td><a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-admin.html">magento admin:user:create</a></td>
		<td>Creates a Magento administrator.</td>
		<td><p>All of the following:</p>
			<ul><li>Deployment configuration</li>
				<li>Enable at minimum the <code>Magento_User</code> and <code>Magento_Authorization</code> modules</li>
				<li>Database (simplest way is to use <code>magento setup:upgrade</code>)</li>
				</ul></td>
	</tr>
	<tr>
		<td><a href="#instgde-cli-help">magento list</a></td>
		<td>Lists all available commands.</td>
		<td>None</td>
	</tr>
	<tr>
		<td><a href="#instgde-cli-help">magento help</a></td>
		<td>Provides help for the specified command.</td>
		<td>None</td>
	</tr>
	
	
	</tbody>
</table>

<h2 id="instgde-cli-help">Help commands</h2>
{% include install/cli_help-commands.html %}


<h2 id="instgde-cli-subcommands-common">Common arguments</h2>
{% include install/cli_common-commands.html %}


<h2 id="instgde-cli-subcommands">Commands</h2>
The following sections discuss the available commands.

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-deployment.html">Create the deployment configuration, config.php</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-db.html">Create the Magento database</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
