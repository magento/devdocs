---
layout: default
group: install 
subgroup: T_Command-line installation
title: Create the deployment configuration, config.php
menu_title: Create the deployment configuration, config.php
menu_node: 
menu_order: 10
github_link: install-gde/install/install-cli-subcommands-deployment.md
---


<!-- #### Contents

*	<a href="#instgde-cli-subcommands-configphp">Creating the Magento deployment configuration</a>
*	<a href="#instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</a> -->
  
<h2 id="instgde-cli-subcommands-configphp">Creating the Magento deployment configuration</h2>
Magento's deployment configuration, <a href="{{ site.gdeurl }}config-guide/config/config-php.html">config.php</a>, provides the information Magento needs to initialize and bootstrap.

You can use this subcommand if:

*	You previously uninstalled the Magento software and you don't want to run the entire installation again
*	If you want to create only `config.php` and continue the Magento installation some other way

To install the deployment configuration:

1.	Complete the tasks discussed in <a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html#instgde-install-cli-prereq">Before you start your installation</a>. 

2.	Enter the following commands in the order shown:

		cd <your Magento install dir>/bin
		./magento setup:config:set <options>

	<div class="bs-callout bs-callout-warning">
		<span class="glyphicon-class">
  		<p>This command is the first to use a new syntax. This command must be run from the <code>bin</code> subdirectory instead of the <code>setup</code> subdirectory. The new syntax will soon be used by all installer commands.</p>
  		<p>This command replaces <code>php index.php install-configuration &lt;options></code>.</p></span>
	</div>

	The following table discusses the meanings of installation option names and values. 

<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		
	<tr>
		<td>backend_frontname</td>
		<td>Path to access the Magento Admin. This path is appended to Base URL.
For example, if Base URL is http://www.example.com and Admin Path is <code>admin</code>, the Admin Panel's URL is <code>http://www.example.com/admin</code>&mdash;provided you configured your web server for server rewrites.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>db_host</td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> if your database serve is on the same host as your web server.</li>
		<li>UNIX socket; for example, <code>/var/run/mysqld/mysqld.sock</code></li></ul>
		<p><strong>Note</strong>: You can optionally specify the database server port in its host name like <code>www.example.com:9000</code></p>
</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>db_name</td>
		<td>Name of the Magento database instance in which you want to install the Magento database tables.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>db_user</td>
		<td>User name of the Magento database instance owner.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>db_pass</td>
		<td>Magento database instance owner's password.</td>
		<td>No</td>
	</tr>
	<tr>
		<td>db_prefix</td>
		<td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
		<p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>session_save</td>
		<td><p>Use any of the following:</p>
		<ul><li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow or you have a clustered database.</li>
		<li><code>db.files</code> to store session data in the database. Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.</li></ul></td>
		<td>No</td>
	</tr>
	<tr>
		<td>key</td>
		<td>If you have one, specify a key to encrypt sensitive data in the Magento database. (This includes passwords and personally identifiable customer information.) If you don't have one, Magento generates one for you.</td>
		<td>No</td>
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
		<td>db_init_statements</td>
		<td>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</td>
		<td>No</td>
	</tr>
	</tbody>
</table>

If applicable, continue your Magento software installation:

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Command line installation</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Setup Wizard installation</a>

<!-- <h2 id="instgde-cli-subcommands-dep-config-enable-modules">About enabling and disabling modules</h2>
{% include install/enable-disable-modules.html %} -->

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>

