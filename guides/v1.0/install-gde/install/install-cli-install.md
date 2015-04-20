---
layout: default
group: install 
subgroup: T_Command-line installation
title: Install the Magento software using the command line
menu_title: Install the Magento software using the command line 
menu_node: 
menu_order: 4
github_link: install-gde/install/install-cli-install.md
---

  
<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-install-cli-magento">Install the Magento software from the command line</a>
*	<a href="#instgde-install-magento-updatebeta11">Update to version 0.42.0-beta11 or later from beta10 or earlier</a>
*	<a href="#instgde-install-magento-update">Update the Magento software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstall the Magento software</a>
*	<a href="#instgde-install-uninstall">Uninstall the Magento software</a>

<div class="bs-callout bs-callout-warning">
<span class="glyphicon-class">
  <p>This topic discusses important information that affects you if you're updating the Magento software from version 0.42.0-beta10 or earlier to 0.42.0-beta11 or later. For more information, see <a href="#instgde-install-magento-updatebeta11">Updating to version 0.42.0-beta11 or later from beta10 or earlier</a>.</p></span>
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
  <ul><li>By default, the installer doesn't overwrite the Magento database if you install the Magento software in the same database instance. You can use the optional <code>cleanup_database</code> parameter to change this behavior.</li>
  <li>If you get errors during the installation, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot.html">Troubleshooting</a>.</li></ul></span>
</div>

<h2 id="instgde-cli-help-cmds">Installer help commands</h2>

Optionally run the following commands to find values for some required options:

<table>
<tbody>
	<tr>
		<th>Installer option</th>
		<th>Command</th>
	</tr>
<tr>
	<td>Language</td>
	<td><code>php magento info:language:list</code></td>
</tr>
<tr>
	<td>Time zone</td>
	<td><code>php  magento info:timezone:list</code></td>
</tr>
<tr>
	<td>Currency</td>
	<td><code>php magento info:currency:list</code></td>
</tr>
</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If an error displays when you run these commands, make sure you updated installation dependencies as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>.</p></span>
</div>

	
<h2 id="instgde-install-cli-magento">Install the Magento software from the command line</h2>
The format of the install command follows:

	php magento setup:install --<option>=<value> ...

The following table discusses the meanings of installation option names and values. An example is provided in <a href="#install-cli-example">Sample localhost installation</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Any options that contain spaces or special characters must be enclosed in either single or double quotes.</p></span>
</div>
<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td><p>base_url</p></td>
		<td><p>Base URL to use to access your Magento Admin and storefront in the format <code>http[s]://&lt;host or ip>/&lt;your Magento install dir>/</code>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.</p>
		<p><code>&lt;your Magento install dir></code> is the docroot-relative path in which to install the Magento software. Depending on how you set up your web server and virtual hosts, the path might be <code>magento2</code> or it might be blank.</p>
		<p>To access Magento on localhost, you can use either <code>http://localhost/&lt;your Magento install dir>/</code> or <code>http://localhost/&lt;your Magento install dir>/</code>.</p>
		</td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>backend_frontname</p></td>
		<td><p>Path to access the Magento Admin. This path is appended to Base URL.
For example, if Base URL is http://www.example.com and Admin Path is <code>admin</code>, the Admin Panel's URL is <code>http://www.example.com/admin</code>&mdash;provided you configured your web server for server rewrites.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>db_host</p></td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> if your database serve is on the same host as your web server.</li>
		<li>UNIX socket; for example, <code>/var/run/mysqld/mysqld.sock</code></li></ul>
		<p><strong>Note</strong>: You can optionally specify the database server port in its host name like <code>www.example.com:9000</code></p>
</td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>db_name</p></td>
		<td><p>Name of the Magento database instance in which you want to install the Magento database tables.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>db_user</p></td>
		<td><p>User name of the Magento database instance owner.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>db_password</p></td>
		<td><p>Magento database instance owner's password.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>db_prefix</p></td>
		<td><p>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already.</p>
		<p>In that case, use a prefix to identify the Magento tables for this installation. Some customers have more than one Magento instance running on a server with all tables in the same database.</p>
		<p>This option enables those customers to share the database server with more than one Magento installation.</p></td>
		<td><p>No</p></td>
	</tr>

		<td><p>admin_firstname</p></td>
		<td><p>Magento administrator user's first name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_lastname</p></td>
		<td><p>Magento administrator user's last name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_email</p></td>
		<td><p>Magento administrator user's e-mail address.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_user</p></td>
		<td><p>Magento administrator user name.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>admin_password</p></td>
		<td><p>Magento administrator user password.</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>language</p></td>
		<td><p>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>php magento info:language:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>currency</p></td>
		<td><p>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>php magento info:currency:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>timezone</p></td>
		<td><p>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>php magento info:timezone:list</code> from the <code>bin</code> directory.)</p></td>
		<td><p>Yes</p></td>
	</tr>
	<tr>
		<td><p>use_rewrites</p></td>
		<td><p><code>1</code> means you use web server rewrites for generated links in the storefront and Admin.</p>
		<p><code>0</code> disables the use of web server rewrites.</p></td>
		<td><p>1</p></td>
	</tr>
	<tr>
		<td><p>use_secure</p></td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>base_url_secure</p></td>
		<td><p><code>1</code> means SSL is preferred in Magento URLs designed to use it (for example, the checkout page). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means SSL is not used.</p></td>
		<td><p>No</p></td>
	</tr>

	<tr>
		<td><p>use_secure_admin</p></td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>admin_use_security_key</p></td>
		<td><p><code>1</code> causes the Magento software to use a randomly generated key value to access pages in the Magento Admin and in forms. These key values help prevent <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29" target="_blank">cross-site script forgery attacks</a>.</p>
		<p><code>0</code> disables the use of the key.</p></td>
		<td><p>No</p></td>
	</tr>
	<!-- <tr> 
		<td>enable_modules=&lt;list>}</td>
		<td><p>Enable modules that are installed but disabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>  
		<td>No</td>
	</tr>
	<tr>
		<td>disable_modules=&lt;list>}</td>
		<td><p>Disable modules that are installed and enabled where <code>&lt;list></code> is a comma-separated list of modules (no spaces allowed). Use <code>php index.php help module-list</code> to list enabled and disabled modules.</p>
		<p>To enable and disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p>
		<p>For important information about module dependencies, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html#instgde-cli-subcommands-enable-modules">About enabling and disabling modules</a>.</p></td>
		<td>No</td>
	</tr> -->
	<tr>
		<td><p>session_save</p></td>
		<td><p>Use any of the following:</p>
		<ul><li><code>files</code> to store session data in the file system. File-based session storage is appropriate unless the Magento file system access is slow or you have a clustered database.</li>
		<li><code>db</code> to store session data in the database. Choose database storage if you have a clustered database; otherwise, there might not be much benefit over file-based storage.</li></ul></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>key</p></td>
		<td>If you have one, specify a key to encrypt personally identifiable data in the Magento database. If you don't have one, Magento generates one for you.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>use_sample_data</p></td>
		<td><p>Use this parameter to install optional Magento sample data. Magento sample data uses the Luma theme to provide you with a sample storefront, complete with products, customers, products, CMS pages, and so on. You can use it to get the feel of a Magento storefront.</p>
		<p>Sample data installs only if you already enabled the package as discussed in <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a></p>.</td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>cleanup_database</p></td>
		<td><p>To drop database tables before installing the Magento software, specify this parameter without a value. Otherwise, the Magento database is left intact.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>db_init_statements</p></td>
		<td><p>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>sales_order_increment_prefix</p></td>
		<td><p>Specify a string value to use as a prefix for sales orders. Typically, this is used to guarantee unique order numbers for payment processors.</p></td>
		<td><p>No</p></td>
	</tr>
	<tr>
		<td><p>definition_format</p></td>
		<td><p>Type of definitions used by the Object Manager. Possible values are <a href="https://github.com/phadej/igbinary" target="_blank"><code>igbinary</code></a> or <code>serialized</code>.</p></td>
		<td><p>No</p></td>
	</tr>

	</tbody>
</table>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>To enable or disable modules after installing Magento, see <a href="{{ site.gdeurl }}install-gde/install/install-cli-subcommands-enable.html">Enable and disable modules</a>.</p></span>
</div>

<h4 id="install-cli-example">Sample localhost installations</h4>

**Example 1**

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://localhost` and you can access the Magento Admin at `http://localhost/admin`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	Installs optional sample data

*	The Magento administrator has the following properties:

	*	First and last name are `Magento User`
	*	User name is `admin` and the password is `iamtheadmin`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)

		php bin/magento setup:install --base_url=http://localhost/magento2/ \
		--backend_frontname=admin \
		--db_host=localhost --db_name=magento --db_user=magento --db_password=magento \
		--admin_firstname=Magento --admin_lastname=User --admin_email=user@example.com \
		--admin_user=admin --admin_password=iamtheadmin --language=en_US \
		--currency=USD --timezone=America/Chicago --use_sample_data

**Example 2** (with additional options)

The following example installs Magento with the following options:

*	The Magento software is installed in the `magento2` directory relative to the web server docroot on `localhost` and the path to the Magento Admin is `admin`; therefore:

	Your storefront URL is `http://localhost` and you can access the Magento Admin at `http://localhost/admin`

*	The database server is on the same host as the web server.

	The database name is `magento`, and the user name and password are both `magento`

*	The Magento administrator has the following properties:

	*	First and last name are is `Magento User`
	*	User name is `admin` and the password is `iamtheadmin`
	*	E-mail address is `user@example.com`

*	Default language is `en_US` (U.S. English)
*	Default currency is U.S. dollars
*	Default time zone is U.S. Central (America/Chicago)
*	The installer first cleans up the database before installing the tables and schema
*	You use a sales order increment prefix `ORD$` and because it contains a special character (`$`), the value must be enclosed in double quotes
*	Session data is saved in the database

		php bin/magento setup:install --base_url=http://localhost/magento2/ \
		--backend_frontname=admin --db_host=localhost --db_name=magento \
		--db_user=magento --db_password=magento \
		--admin_firstname=Magento --admin_lastname=User --admin_email=user@example.com \
		--admin_user=admin --admin_password=iamtheadmin --language=en_US \
		--currency=USD --timezone=America/Chicago --cleanup_database \
		--sales_order_increment_prefix="ORD$" --session_save=db


<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The command must be entered either on a single line or, as in the preceding example, with a <code>\</code> character at the end of each line.</p></span>
</div>

<h2 id="instgde-install-magento-updatebeta11">Update to version 0.42.0-beta11 or later from beta10 or earlier</h2>
This section applies to you in the following situation only:

*	You currently have version 0.42.0-beta10 or earlier
*	You're updating to version 0.42.0-beta11 or later

<div class="bs-callout bs-callout-info" id="info">
    <p>As a result of this change, you must first <em>uninstall</em> the Magento software and then reinstall it.</p>
</div>

To determine the versions:

*	Your version: View `<your Magento install dir>/CHANGELOG.md` in a text editor.
*	Current version: Look at the Magento 2 <a href="{{ site.mage2000url }}CHANGELOG.md" target="_blank">changelog</a> on GitHub.

<h3 id="instgde-install-magento-updatebeta11-why">Why must I uninstall?</h3>
{% include install/versionbeta10upgr.html %}


<h3 id="instgde-install-magento-updatebeta11-how">How to update the Magento software</h3>
To update the Magento software to 0.42.0-beta11 or later from version beta10 or earlier:

1.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).

2.	Change to the following directory:

		cd <your Magento install dir>/bin

3.	Uninstall the Magento software and change to your Magento installation directory:

		php magento setup:uninstall && cd ..

4.	Update the Magento code:

		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>

5.	Run Composer:

		composer install

6.	Install the Magento software:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-magento-update">Update the Magento software</h2>
This section discusses how to update your Magento software without reinstalling it. To uninstall and reinstall, see the next section.

You might do this in an development environment especially to get all the latest code changes.

To update the Magento software:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).
3. Save any changes you made to `composer.json` because the following steps will overwrite it:

		cd <your Magento install dir>
		cp composer.json composer.json.old

3.	If you previously installed the optional sample data, enter the following command:

		rm -rf dev/tools/Magento/Tools/SampleData/

3.	Update your local repository to get the latest code:
		
		git pull origin develop

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>.</p> </span>
	</div>
				
3.	Diff and merge your `composer.json.old` with `composer.json` installed with the Magento software.

4.	Enter the following command:

		composer update

4.	Update the Magento database.

		bin/php magento setup:upgrade

4.	_Optional_. To change installation options, repeat the tasks discussed in:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-magento-reinstall">Reinstall the Magento software</h2>
This section discusses how to uninstall and then reinstall the Magento software. 

To reinstall the Magento software:

2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system (for example, the <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">web server user</a>).
3.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		git pull origin develop
		php bin/magento setup:uninstall

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  			<p>If <code>git pull origin develop</code> fails, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot_git-pull-origin.html">troubleshooting</a>. </p></span>
	</div>

4.	Install the Magento software:

	*	<a href="#instgde-install-cli-magento">Install the Magento software using the command line</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>

<h2 id="instgde-install-uninstall">Uninstall the Magento software</h2>
Uninstalling the Magento software removes database assets and file system assets but does <em>not</em> drop the Magento database.

To uninstall the Magento software, enter the following command:

	php magento setup:uninstall

The following message displays to confirm a successful uninstallation:

	[SUCCESS]: Magento uninstallation complete.

#### Next steps

*	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>.
*	To install optional Magento sample data (sample store, products, customers, and so on), see <a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>.


