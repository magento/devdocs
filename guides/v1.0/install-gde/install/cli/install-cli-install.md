---
layout: default
group: install 
subgroup: T_Command-line installation
title: Install the Magento software using the command line 
menu_title: Install the Magento software using the command line 
menu_node: 
menu_order: 4
github_link: install-gde/install/cli/install-cli-install.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-magento">Install the Magento software from the command line</a>

See also <a href="{{ site.gdeurl }}install-gde/install/cli/install-cli-uninstall.html">Update, reinstall, uninstall</a>.

<div class="bs-callout bs-callout-warning">
    <p>Because of database changes in the Merchant Beta release (1.0.0-beta), you <em>must</em> uninstall the Magento software and reinstall it. Details are provided in <a href="{{ site.gdeurl }}install-gde/install/install-merchbeta.html">Merchant Beta&mdash;uninstall and reinstall</a>.</p>
</div>


<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento system requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prerequisites</a>.
3.	You installed Composer and cloned the Magento GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento GitHub repository</a>.
4.	After you log in to the Magento server, switch to the web server user as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.
5.	Review the information discussed in <a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Command line installation</a>.

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
  <li>If you get errors during the installation, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot.html">Troubleshooting</a>.</li></ul></span>
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
  <p>If an error displays when you run these commands, make sure you updated installation dependencies as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>.</p></span>
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
	<col width="55">
	<col width="10%">
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
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
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--backend-frontname</p></td>
		<td><p>Path to access the Magento Admin. This path is appended to base URL. Default is <code>admin</code>. 
For example, if Base URL is http://www.example.com and Admin Path is <code>admin</code>, the Admin Panel's URL is <code>http://www.example.com/admin</code>&mdash;provided you configured your web server for server rewrites.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--db-host</p></td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> )default) if your database server is on the same host as your web server.</li>
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
			<p>The password must be at least 7 characters in length and must include at least one alphabetic and at least one numeric character.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--language</p></td>
		<td><p>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--currency</p></td>
		<td><p>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--timezone</p></td>
		<td><p>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>magento info:timezone:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>--use-rewrites</p></td>
		<td><p><code>1</code> means you use web server rewrites for generated links in the storefront and Admin.</p>
		<p><code>0</code> disables the use of web server rewrites. This is the default.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--use-secure</p></td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>. This is the default.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--base-url-secure</p></td>
		<td><p><code>1</code> means SSL is preferred in Magento URLs designed to use it (for example, the checkout page). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means SSL is not used. This is the default.</p></td>
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
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>  
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list>}</td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr> -->
	<tr>
		<td><p>--session-save</p></td>
		<td><p>Use any of the following:</p>
		<ul><li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow or you have a clustered database.</li>
		<li><code>db</code> to store session data in the database. Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.</li></ul></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--key</p></td>
		<td><p>If you have one, specify a key to encrypt personally identifiable data in the Magento database. If you don't have one, Magento generates one for you.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>--use-sample-data</p></td>
		<td><p>Use this parameter to install optional Magento sample data. Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, CMS pages, and so on. You can use it to get the feel of a Magento storefront.</p>
		<p>Sample data installs only if you already enabled the package as discussed in <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a></p>.</td>
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

	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>To enable or disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/cli/cli/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p></span>
</div>

<h4 id="install-cli-example">Sample localhost installations</h4>

**Example 1**

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://127.0.0.1` and you can access the Magento Admin at `http://127.0.0.1/admin`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	Installs optional sample data

*	Uses server rewrites

*	The Magento administrator has the following properties:

	*	First and last name are `Magento User`
	*	User name is `admin` and the password is `admin123`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

		php bin/magento setup:install --base-url=http://127.0.0.1/magento2/ \
		--backend-frontname=admin \
		--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --use-sample-data --use-rewrites=1

**Example 2** (with additional options)

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://127.0.0.1` and you can access the Magento Admin at `http://127.0.0.1/admin`

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

		php bin/magento setup:install --base-url=http://127.0.0.1/magento2/ \
		--backend-frontname=admin --db-host=localhost --db-name=magento \
		--db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --cleanup-database \
		--sales-order-increment-prefix="ORD$" --session-save=db --use-rewrites=1


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The command must be entered either on a single line or, as in the preceding example, with a <code>\</code> character at the end of each line.</p></span>
</div>

#### Next steps

*	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.
*	To install optional Magento sample data (sample store, products, customers, and so on), see <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>.
