---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Create or update the deployment configuration
menu_title: Create or update the deployment configuration
menu_node: 
menu_order: 9
version: 2.0
github_link: install-gde/install/cli/install-cli-subcommands-deployment.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-subcommands-deployment.html
  -  /guides/v2.0/install-gde/install/install-cli-subcommands-deployment.html
---

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html#instgde-cli-subcommands-common">Common arguments</a>.

<h2 id="instgde-cli-subcommands-configphp-prereq">Prerequisites</h2>
There are no prerequisites for using this command.
  
<h2 id="instgde-cli-subcommands-configphp">Create or update the Magento deployment configuration</h2>
<a href="{{page.baseurl}}config-guide/config/config-php.html">Magento's deployment configuration</a> provides the information Magento needs to initialize and bootstrap.

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
		<td><p>Uniform Resource Identifier (<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2" target="_blank">URI</a>) to access the Magento Admin.</p>
			<p>To prevent exploits, we recommend you <em>not</em> use a common word like <code>admin</code>, <code>backend</code>, and so on. The Admin URI can contain alphanumeric values, the underscore character (<code>_</code>), and the dash character (<code>-</code>) only. It can be up to 255 characters in length.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-host</p></td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> (default) or <code>127.0.0.1</code> if your database server is on the same host as your web server.<br><code>localhost</code> means the MySQL client library uses UNIX sockets to connect to the database. <code>127.0.0.1</code> causes the client library to use the TCP protocol. For more information about sockets, see the <a href="http://php.net/manual/en/ref.pdo-mysql.php" target="_blank">PHP <code>PDO_MYSQL</code> documentation</a>.</li></ul>
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
		<p>The prefix can be a maximum of five characters in length. It must begin with a letter and can include only letters, numbers, and underscore characters.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--session-save</p></td>
		<td><p>Use any of the following:</p>
		<ul><li><code>db</code> to store session data in the <a href="{{page.baseurl}}config-guide/database/database.html">database</a>. Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.</li>
			
			<li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow or you have a clustered database.</li>
	</ul></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--key</p></td>
		<td><p>If you have one, specify a key to encrypt <a href="#sens-data">sensitive data</a> in the Magento database. If you don't have one, Magento generates one for you.</p></td>
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
	<tr>
		<td><p>--http-cache-hosts</p></td>
		<td><p>Comma-separated list of HTTP cache gateway hosts to which to send purge requests. (For example, Varnish servers.) Use this parameter to specify the host or hosts to purge in the same request. (It doesn't matter if you have only one host or many hosts.)</p>
			<p>Format must be <code>&lt;hostname or ip>:&lt;listen port></code>, where you can omit <code>&lt;listen port></code> if it's port 80. For example, <code>--http-cache-hosts=192.0.2.100,192.0.2.155:6081</code>. Do not separate hosts with a space character.</p> </td>
		<td><p>No</p></td>
	</tr>
	</tbody>
</table>

{% include install/sens-data.md %}

If applicable, continue your Magento software installation:

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Command line installation</a>
*	<a href="{{page.baseurl}}install-gde/install/install-web.html">Setup Wizard installation</a>

<!-- <h2 id="instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</h2>
{% include install/enable-disable-modules.html %} -->

#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove sample data modules or update sample data]({{ page.baseurl }}install-gde/install/cli/install-cli-sample-data-other.html)
*	[Enable or disable modules]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-enable.html)
*	[Display or change the Admin URI]({{ page.baseurl }}install-gde/install/cli/install-cli-adminurl.html)
*	[Uninstall modules]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-admin.html">Create or unlock a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
