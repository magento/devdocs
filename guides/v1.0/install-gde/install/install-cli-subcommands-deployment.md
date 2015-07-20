---
layout: default
group: install 
subgroup: T_Command-line installation
title: Create or update the deployment configuration
menu_title: Create or update the deployment configuration
menu_node: 
menu_order: 9
github_link: install-gde/install/cli/cli/install-cli-subcommands-deployment.md
---


#### Contents

*	<a href="#instgde-cli-before">First steps</a>
*	<a href="#instgde-cli-subcommands-configphp-prereq">Prerequisites</a>
*	<a href="#instgde-cli-subcommands-configphp">Creating the Magento deployment configuration</a>

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-configphp-prereq">Prerequisites</h2>
There are no prerequisites for using this command.
  
<h2 id="instgde-cli-subcommands-configphp">Create or update the Magento deployment configuration</h2>
<a href="{{ site.gdeurl }}config-guide/config/config-php.html">Magento's deployment configuration</a> provides the information Magento needs to initialize and bootstrap.

You can use this command if:

*	You previously installed the Magento software and you want to modify the deployment configuration
*	If you want to create only the deployment configuration and continue the Magento installation some other way
*	To update the deployment configuration without affecting anything else

Command options:

	magento setup:config:set [--<parameter>=<value>, ...]

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
		<td><p>--backend-frontname</p></td>
		<td><p>Path to access the Magento Admin. This path is appended to the base URL. Default is <code>admin</code>. 
For example, if Base URL is http://www.example.com and Admin Path is <code>admin</code>, the Admin Panel's URL is <code>http://www.example.com/admin</code>&mdash;provided you configured your web server for server rewrites.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-host</p></td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> (default) if your database server is on the same host as your web server.</li>
		<li>UNIX socket; for example, <code>/var/run/mysqld/mysqld.sock</code></li></ul>
		<p><strong>Note</strong>: You can optionally specify the database server port in its host name like <code>www.example.com:9000</code></p>
</td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-name</p></td>
		<td><p>Name of the Magento database instance in which you want to install the Magento database tables.</p>
			<p>Default is <code>magento2</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-user</p></td>
		<td><p>User name of the Magento database instance owner.</p>
			<p>Default is <code>root</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-password</p></td>
		<td><p>Magento database instance owner's password.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-prefix</p></td>
		<td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
		<p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--session-save</p></td>
		<td><p>Use any of the following:</p>
		<ul><li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless access to the Magento file system is slow or if you have a clustered database.</li>
		<li><code>db</code> to store session data in the database. Choose database storage if you have a clustered database; otherwise, there might not be much benefit compared to file-based storage.</li></ul></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--key</p></td>
		<td><p>If you have one, specify a key to encrypt sensitive data in the Magento database. (This includes passwords and personally identifiable customer information.) If you don't have one, Magento generates one for you.</p></td>
		<td><p>No</p></td>
	</tr>
	<!-- <tr> 
		<td>enable_modules=&lt;list></td>
		<td><p>Enable modules that are installed but disabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>For important information about module dependencies, see <a href="#instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list></td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>For important information about module dependencies, see <a href="#instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr> -->
	<tr>
		<td><p>--db-init-statements</p></td>
		<td><p>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database.</p>
			<p>Default is <code>SET NAMES utf8;</code>.</p> 
			<p>Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</p></td>
		<td><p>No</p></td>
	</tr>
	</tbody>
</table>

If applicable, continue your Magento software installation:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Command line installation</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup Wizard installation</a>

<!-- <h2 id="instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</h2>
{% include install/enable-disable-modules.html %} -->

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-uninstall-mods.html">Uninstall modules</a>
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
