---
layout: default
group: install_cli 
subgroup: 05_Command-line installation
title: Install the Magento software
menu_title: Install the Magento software
menu_order: 4
version: 2.0
github_link: install-gde/install/cli/install-cli-install.md
redirect_from:
  -  /guides/v1.0/install-gde/install/install-cli-install.html
  -  /guides/v2.0/install-gde/install/install-cli-install.html
---

<div class="bs-callout bs-callout-tip">
  <p>Totally lost? Need a helping hand? Try our <a href="{{page.baseurl}}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{page.baseurl}}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>.</p>
</div>
  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-magento">Install the Magento software from the command line</a>
*	[Set file system permissions after installing](#instgde-install-cli-magento-perms)

See also <a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html">Update, reinstall, uninstall</a>.


<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{page.baseurl}}install-gde/system-requirements.html">Magento system requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{page.baseurl}}install-gde/prereq/prereq-overview.html">Prerequisites</a>.
3.	You took your first installation steps as discussed in <a href="{{page.baseurl}}install-gde/bk-install-guide.html">Your install or upgrade path</a>.
4.	After you log in to the Magento server, <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">switch to the Magento file system owner</a>.
5.	Review the information discussed in <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands.html">Get started with the command-line installation</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must install Magento from its <code>bin</code> subdirectory.</p></span>
</div>

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.
*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <ul><li>By default, the installer doesn't overwrite the Magento database if you install the Magento software in the same database instance. You can use the optional <code>cleanup-database</code> parameter to change this behavior.</li>
  <li>If you get errors during the installation, see <a href="{{page.baseurl}}install-gde/trouble/tshoot.html">Troubleshooting</a>.</li></ul></span>
</div>

<h2 id="instgde-cli-help-cmds">Installer help commands</h2>

You can run the following commands to find values for some required arguments:

<table>
<tbody>
	<tr>
		<th>Installer argument</th>
		<th>Command</th>
	</tr>
<tr>
	<td>Language</td>
	<td><code>magento info:language:list</code></td>
</tr>
<tr>
	<td>Currency</td>
	<td><code>magento info:currency:list</code></td>
</tr>
<tr>
	<td>Time zone</td>
	<td><code>php  magento info:timezone:list</code></td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If an error displays when you run these commands, make sure you updated installation dependencies as discussed in <a href="{{page.baseurl}}install-gde/install/prepare-install.html">Update installation dependencies</a>.</p></span>
</div>

	
<h2 id="instgde-install-cli-magento">Install the Magento software from the command line</h2>
The format of the install command follows:

	magento setup:install --<option>=<value> ... --<option>=<value>

The following table discusses the meanings of installation option names and values. Examples are provided in <a href="#install-cli-example">Sample localhost installations</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Any options that contain spaces or special characters must be enclosed in either single or double quotes.</p></span>
</div>
<table>
	<col width="35%">
	<col width="55%">
	<col width="10%">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>--admin-firstname</p></td>
		<td><p>Magento administrator user's first name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-lastname</p></td>
		<td><p>Magento administrator user's last name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-email</p></td>
		<td><p>Magento administrator user's e-mail address.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-user</p></td>
		<td><p>Magento administrator user name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--admin-password</p></td>
		<td><p>Magento administrator user password.</p>
			<p>The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character.</p>
			<p>We recommend a longer, more complex password. Enclose the entire password string in single quotes. For example, <code>--admin-password='A0b9%t_3`g'</code></p></td>
		<td><p>Yes</p></td>
	</tr>
		<tr>
		<td><p>--base-url</p></td>
		<td><p>Base URL to use to access your Magento Admin and storefront in any of the following formats:</p>
		<ul><li><code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.</p>
		<p><code>&lt;your Magento install dir></code> is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be <code>magento2</code> or it might be blank.</p>
		<p>To access Magento on localhost, you can use either <code>http://127.0.0.1/&lt;your Magento install dir>/</code> or <code>http://127.0.0.1/&lt;your Magento install dir>/</code>.</p></li>
		<li><code>&#123;&#123;base_url&#125;&#125;</code> which represents a base URL defined by a virtual host setting or by a virtualization environment like Docker. For example, if you set up a virtual host for Magento with the host name <code>magento.example.com</code>, you can install the Magento software with <code>--base-url=&#123;&#123;base_url&#125;&#125;</code> and access the Magento Admin with a URL like <code>http://magento.example.com/admin</code>.</li></ul>

		</td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--backend-frontname</p></td>
		<td><p>Uniform Resource Identifier (<a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.2" target="_blank">URI</a>) to access the Magento Admin or omit this parameter to let Magento generate a random URI for you.</p>
			<p>We recommend a random URI for security purposes. A random URI is harder for hackers or malicious software to exploit.</p>
			<p>The URI displays at the end of the installation. You can display it later at any time using the <a href="{{page.baseurl}}install-gde/install/install-cli-adminurl.html">magento info:adminuri</a> command.</p>
			<p>If you choose to enter a value, we recommend you <em>not</em> use a common word like <code>admin</code>, <code>backend</code>, and so on. The Admin URI can contain alphanumeric values, the underscore character (<code>_</code>), and the dash character (<code>-</code>) only. It can be up to 255 characters in length.</p></td>
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
		<td><p>--language</p></td>
		<td><p>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--currency</p></td>
		<td><p>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--timezone</p></td>
		<td><p>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>magento info:timezone:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--use-rewrites</p></td>
		<td><p><code>1</code> means you use web server rewrites for generated links in the storefront and Admin.</p>
		<p><code>0</code> disables the use of web server rewrites. This is the default.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--use-secure</p></td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all storefront URLs. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>. This is the default.</p>
		<p>To have a fully secure site, you must enable <em>both</em> <code>--use-secure=1</code> and <code>--base-url-secure=1</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--base-url-secure</p></td>
		<td>Secure base URL to use to access your Magento Admin and storefront in the following format:
		<code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>
		<p>To have a fully secure site, you must enable <em>both</em> <code>--use-secure=1</code> and <code>--base-url-secure=1</code>.</p></td>
		<td><p>No</p></td>
	</tr>

	<tr>
		<td><p>--use-secure-admin</p></td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin. This is the default.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--admin-use-security-key</p></td>
		<td><p><code>1</code> causes the Magento software to use a randomly generated key value to access pages in the Magento Admin and in forms. These key values help prevent <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29" target="_blank">cross-site script forgery attacks</a>. This is the default.</p>
		<p><code>0</code> disables the use of the key.</p></td>
		<td><p>No</p></td>
	</tr>
	<!-- <tr> 
		<td>enable_modules=&lt;list>}</td>
		<td><p>Enable modules that are installed but disabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>  
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list>}</td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr> -->
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
	<tr>
		<td><p>--cleanup-database</p></td>
		<td><p>To drop database tables before installing the Magento software, specify this parameter without a value. Otherwise, the Magento database is left intact.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-init-statements</p></td>
		<td><p>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</p>
			<p>Default is <code>SET NAMES utf8;</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--sales-order-increment-prefix</p></td>
		<td><p>Specify a string value to use as a prefix for sales orders. Typically, this is used to guarantee unique order numbers for payment processors.</p></td>
		<td><p>No</p></td>
	</tr>
	<!-- <tr>
		<td><p>--definition_format</p></td>
		<td><p>Type of definitions used by the Object Manager. Possible values are <a href="https://github.com/phadej/igbinary" target="_blank"><code>igbinary</code></a> or <code>serialized</code>.</p></td>
		<td><p>No</p></td>
	</tr> -->
<tr>
<td><p>--amqp-host</p></td>
<td><p>Enterprise Edition only. Do not use the --amqp options unless you have already set up an installation of RabbitMQ. See <a href="{{page.baseurl}}install-gde/prereq/install-rabbitmq.html">RabbitMQ installation</a> for more information about .</p>
<p>The host name where RabbitMQ is installed.</p></td>
<td><p>No</p></td>
</tr>
<tr>
<td><p>--amqp-port</p></td>
<td><p>Enterprise Edition only. The port to use to connect to RabbitMQ. The default is <code>5672</code>.</p></td>
<td><p>No</p></td>
</tr>
<tr>
<td><p>--amqp-user</p></td>
<td><p>Enterprise Edition only. The user name for connecting to RabbitMQ. Do not use the default user <code>guest</code>.</p></td>
<td><p>No</p></td>
</tr>
<tr>
<td><p>--amqp-password</p></td>
<td><p>Enterprise Edition only. The password for connecting to RabbitMQ. Do not use the default password <code>guest</code>.</p></td>
<td><p>No</p></td>
</tr>
	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>To enable or disable modules after installing Magento, see <a href="{{page.baseurl}}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
  	</span>
</div>

{% include install/sens-data.md %}

<h4 id="install-cli-example">Sample localhost installations</h4>

**Example 1**

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://127.0.0.1`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	Uses server rewrites

*	The Magento administrator has the following properties:

	*	First and last name are `Magento User`
	*	User name is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

		magento setup:install --base-url=http://127.0.0.1/magento2/ \
		--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --use-rewrites=1

Messages similar to the following display to indicate a successful installation:

	Post installation file permissions check...
	For security, remove write permissions from these directories: '/var/www/html/magento2/app/etc'	
	[Progress: 274 / 274]
	[SUCCESS]: Magento installation complete.
	[SUCCESS]: Admin Panel URI: /admin_puu71q


**Example 2** (with additional options)

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://127.0.0.1`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	The Magento administrator has the following properties:

	*	First and last name are is `Magento User`
	*	User name is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)
*	The installer first cleans up the database before installing the tables and schema
*	You use a sales order increment prefix `ORD$` and because it contains a special character (`$`), the value must be enclosed in double quotes
*	Session data is saved in the database
*	Uses server rewrites

		magento setup:install --base-url=http://127.0.0.1/magento2/ \
		--db-host=localhost --db-name=magento \
		--db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --cleanup-database \
		--sales-order-increment-prefix="ORD$" --session-save=db --use-rewrites=1

Messages similar to the following display to indicate a successful installation:

	Post installation file permissions check...
	For security, remove write permissions from these directories: '/var/www/html/magento2/app/etc'	
	[Progress: 274 / 274]
	[SUCCESS]: Magento installation complete.
	[SUCCESS]: Admin Panel URI: /admin_puu71q


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The command must be entered either on a single line or, as in the preceding example, with a <code>\</code> character at the end of each line.</p></span>
</div>

#### Next step
*	If you have one user account to access the Magento server, see [Optionally set a umask]({{page.baseurl}}install-gde/install/post-install-umask.html).

	This type of setup is typical for shared hosting.
*	[Verify the installation]({{page.baseurl}}install-gde/install/verify.html).

#### Related topics

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-install.html">Installing the Magento software using the command line</a>
*	[Remove or update sample data]({{ page.baseurl }}install-gde/install/cli/install-cli-sample-data-other.html)
*	[Display or change the Admin URI]({{ page.baseurl }}install-gde/install/cli/install-cli-adminurl.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-enable.html">Enable or disable modules</a>
*	[Uninstall modules]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-mods.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-deployment.html">Create or update the deployment configuration</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-maint.html">Enable or disable maintenance mode</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-db.html">Create the Magento database schema</a>
*	[Update the Magento database schema and data]({{ page.baseurl }}install-gde/install/cli/install-cli-subcommands-db-upgr.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-store.html">Configure the store</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-subcommands-admin.html">Create a Magento administrator</a>
*	[Back up and roll back the file system, media, and database]({{ page.baseurl }}install-gde/install/cli/install-cli-backup.html)
*	[Uninstall themes]({{ page.baseurl }}install-gde/install/cli/install-cli-theme-uninstall.html)
*	[Uninstall language packages]({{ page.baseurl }}install-gde/install/cli/install-cli-uninstall-langpk.html)
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-uninstall">Uninstall the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-update">Update the Magento software</a>
*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-uninstall.html#instgde-install-magento-reinstall">Reinstall the Magento software</a>
