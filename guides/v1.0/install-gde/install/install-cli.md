---
layout: default
group: install
subgroup: R_Installation
title: Command-line installer
menu_title: Command-line installer
menu_node: 
menu_order: 7
github_link: install-gde/install/install-cli.md
---


<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-cli-prereq">Before you start your installation</a>
*	<a href="#instgde-install-cli-first">First steps</a>
*	<a href="#instgde-install-cli-magento">Installing the Magento 2 software from the command line</a>
*	<a href="#instgde-install-magento-reinstall">Reinstalling the Magento 2 software</a>

<h2 id="instgde-install-cli-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento 2 System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prequisites for installing Magento 2</a>.
3.	You installed Composer and cloned the Magento 2 GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento 2 GitHub repository</a>.
4.	After you log in to the Magento server, switch to the web server user as discussed in <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html#install-update-depend-apache">Switching to the Apache user</a>.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>You must install Magento from its <code>setup</code> subdirectory.</p></span>
</div>

The installer is designed to be run multiple times if necessary so you can:

*	Provide different values 

	For example, after you configure your web server for Secure Sockets Layer (SSL), you can run the installer to set SSL options.
*	Correct mistakes in previous installations
*	Install Magento in a different database instance

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <ul><li>By default, the installer doesn't overwrite the Magento database if you install the Magento software in the same database instance. You can use the optional <code>clean_database</code> parameter to change this behavior.</li>
  <li>If you get errors during the installation, see <a href="{{ site.gdeurl }}install-gde/trouble/tshoot.html">Troubleshooting</a>.</li></ul></span>
</div>

<h2 id="instgde-install-cli-first">First steps</h2>

Before you begin, you can run the following commands to find values for some required options:

<table>
	<tbody>
		<tr>
			<th>Installer option</th>
			<th>Command</th>
		</tr>
	<tr>
		<td>Language</td>
		<td><code>php -f index.php help languages</code></td>
	</tr>
	<tr>
		<td>Time zone</td>
		<td><code>php -f index.php help timezones</code></td>
	</tr>
	<tr>
		<td>Currency</td>
		<td><code>php -f index.php help currencies</code></td>
	</tr>
	</tbody>
	</table>
	
The format of the command follows:

	php -f index.php install --[installation option name]=[installation option value] ...
	
<h2 id="instgde-install-cli-magento">Installing the Magento 2 software from the command line</h2>

The following table discusses the meanings of installation option names and values. An example is provided in <a href="#sample-localhost-installation">Sample localhost installation</a>.

<table>
	<tbody>
		<tr>
			<th>Name</th>
			<th>Value</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td>base_url</td>
		<td><p>Base URL to use to access your Magento Admin and storefront in the format <tt>http[s]://[host or ip]/[your Magento base dir]/</tt>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) and a trailing slash are <em>both</em> required.</p>
		<p><tt>[your Magento base dir]</tt> is the docroot-relative path in which to install the Magento 2 software. Depending on how you set up your web server and virtual hosts, the path might be <tt>magento2</tt> or it might be blank.</p>
		<p>To access Magento on localhost, you can use either <code>http://localhost/[your Magento base dir]/</code> or <code>http://127.0.0.1/[your Magento base dir]/</code>.</p>
		</td>
		<td>Yes</td>
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

		<td>admin_firstname</td>
		<td>Magento administrator user's first name.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>admin_lastname</td>
		<td>Magento administrator user's last name.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>admin_email</td>
		<td>Magento administrator user's e-mail address.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>admin_username</td>
		<td>Magento administrator user name.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>admin_password</td>
		<td>Magento administrator user password.</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>language</td>
		<td>Language code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>php -f index.php help languages</code> from the <code>setup</code> directory.)</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>currency</td>
		<td>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>php -f index.php help currencies</code> from the <code>setup</code> directory.)</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>timezone</td>
		<td>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>php -f index.php help timezones</code> from the <code>setup</code> directory.)</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>use_secure</td>
		<td><p><code>1</code> enables the use of Secure Sockets Layer (SSL) in all URLs (both Admin and storefront). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> disables the use of SSL with Magento. In this case, all other secure URL options are assumed to also be <code>0</code>.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>base_secure_url</td>
		<td><p><code>1</code> means SSL is preferred in Magento URLs designed to use it (for example, the checkout page). Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means SSL is not used.</p></td>
		<td>No</td>
	</tr>
	
	<tr>
		<td>use_secure_admin</td>
		<td><p><code>1</code> means you use SSL to access the Magento Admin. Make sure your web server supports SSL before you select this option.</p>
		<p><code>0</code> means you do not use SSL with the Admin.</p></td>
		<td>No</td>
	</tr>
	<tr>
		<td>admin_use_security_key</td>
		<td><p><code>1</code> causes the Magento software to use a randomly generated key value to access pages in the Magento Admin and in forms. These key values help prevent <a href="https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29" target="_blank">cross-site script forgery attacks</a>.</p>
		<p><code>0</code> disables the use of the key.</p></td>
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
		<td>cleanup_database</td>
		<td>To drop database tables before installing the Magento 2 software, specify this parameter without a value. Otherwise, the Magento database is left intact.</td>
		<td>No</td>
	</tr>
	<tr>
		<td>db_init_statements</td>
		<td>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</td>
		<td>No</td>
	</tr>
	<tr>
		<td>sales_order_increment_prefix</td>
		<td>Specify a string value to use as a prefix for sales orders. Typically, this is used to guarantee unique order numbers for payment processors.</td>
		<td>No</td>
	</tr>
	
	</tbody>
</table>

<h4>Sample localhost installation</h4>

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

	<pre>php -f index.php install --base_url=http://localhost/magento2/
		--backend_frontname=admin 
		--db_host=localhost --db_name=magento --db_user=magento --db_pass=magento 
		--admin_firstname=Magento --admin_lastname=User --admin_email=user@example.com 	
		--admin_username=admin --admin_password=iamtheadmin --language=en_US
		--currency=USD --timezone=America/Chicago</pre>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The command must be entered on a single line; it's shown here on multiple lines because of space limitations.</p></span>
</div>

<h2 id="instgde-install-magento-reinstall">Reinstalling the Magento 2 software</h2>

This section discusses how to install the Magento 2 software after you installed it previously. You might do this in an development environment especially to get all the latest code changes.

To reinstall the Magento 2 software:

1.	Optionally delete and re-create the database instance.
2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system.
3.	Enter the following commands in the order shown:

	<pre>cd [your Magento install dir]
git pull
composer install
cd setup
composer install</pre>

4.	Repeat the tasks discussed in <a href="#instgde-install-cli-magento">Installing the Magento 2 software from the command line</a>. 

#### Next step

<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verifying your Magento 2 installation</a>.