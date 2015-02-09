---
layout: default
group: install 
subgroup: T_Command-line installation
title: Get started with the command-line installation
menu_title: Get started with the command-line installation
menu_node: 
menu_order: 1
github_link: install-gde/install/install-cli-subcommands.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-cli-help">Command-line installer help commands</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="#instgde-cli-subcommands-configphp">Deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>
{% include install/before-you-begin-cli.html %}

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.

*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<h2 id="instgde-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="instgde-cli-help">Command-line installer help commands</h2>
To display a complete list of installer subcommands, enter:

	php index.php help

To get help on a particular subcommand, enter:

	php index.php help <subcommand>

For example,

	php index.php help install-configuration

<h2 id="instgde-cli-subcommands">Command line installer subcommands</h2>
The following sections discuss the available subcommands.

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Installing the Magento software using the command line</a>
*	<a href="#instgde-cli-subcommands-configphp">Deployment configuration</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="#instgde-cli-maint-configphp">Maintenance mode</a>
*	<a href="#instgde-cli-subcommands-uninstall">Uninstall</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Not all subcommands are currently documented. Provide us input by <a href="{{ site.githuburl }}install-gde/install/install-cli-subcommands.md }}">editing this page on GitHub</a>.</p></span>
</div>

<h3 id="instgde-cli-subcommands-configphp">Deployment configuration</h3>
Magento's deployment configuration, <a href="{{ site.gdeurl }}config-guide/config/config-php.html">config.php</a>, provides the information Magento needs to initialize and bootstrap.

To install the deployment configuration:

1.	Complete the tasks discussed in <a href="#instgde-install-cli-prereq">Before you start your installation</a>.

2.	Enter the following command:

		php index.php install-configuration <options>

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
	<tr> 
		<td>enable_modules=&lt;list>}</td>
		<td><p>Enable modules that are installed but disabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>For important information about module dependencies, see <a href="#instgde-cli-enable-warn">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list>}</td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>For important information about module dependencies, see <a href="#instgde-cli-enable-warn">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>db_init_statements</td>
		<td>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</td>
		<td>No</td>
	</tr>
	</tbody>
</table>

<h4 id="instgde-cli-enable-warn">About enabling and disabling modules</h4>
{% include install/enable-disable-modules.html %}

<h3 id="instgde-cli-maint-configphp">Maintenance mode</h3>
Magento uses *maintenance mode* to disable bootstrapping; for example, if your system is being updated or reconfigured. 

Magento detects maintenance mode as follows:

*	If `var/.maintenance.flag` does not exist, maintenance mode is off and Magento operates normally.
*	Otherwise, maintenance mode is on unless `var/.maintenance.ip` exists:

	`var/.maintenance.ip` can contain a list of comma-separated IP addresses. If an entry point is accessed using HTTP and the client IP address corresponds to one of the entries in that list, then maintenance mode is off.

Command usage:

	php index.php maintenance [--set=1|0] [--addresses=<list>|none]

For example, to enable maintenance mode:

	php index.php maintenance --set=1

To enable maintenance mode for all clients except 192.0.2.10:

	php index.php maintenance --set=1 --addresses=192.0.2.10

<h3 id="instgde-cli-subcommands-uninstall">Uninstall</h3>
The command discussed in this section does the following:

*	Drops and re-creates the database, if the connection settings are present in the deployment configuration (`app/etc/config.php`). All tables and data are lost because only database is re-created, not the tables.
*	Deletes the contents of the `var` and `pub/static` directories, skipping paths that start with `.` (period).
*	Deletes the deployment configuration, `app/etc/config.php`

To perform the preceding tasks, enter the following command:

	php index.php uninstall


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-install.html">Install the Magento software using the command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>