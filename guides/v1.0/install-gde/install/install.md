---
layout: howtom2instgde_chapters
title: Installing and reinstalling Magento 2
---

<h1 id="instgde-install">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/install/install.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h4>Contents</h4>

See one of the following sections:

*	<a href="#instgde-install-intro">Introduction to installing Magento 2</a>
*	<a href="#instgde-install-prereq">Before you start your installation</a>
*	<a href="#instgde-install-start">Getting started with your installation</a>
*	<a href="#instgde-install-magento">Installing the Magento 2 software</a>
*	<a href="#instgde-install-magento-reinstall">Reinstalling the Magento 2 software</a>

<h2 id="instgde-install-intro">Introduction to installing Magento 2</h2>

We now use <a href="https://getcomposer.org/" target="_blank">Composer</a> to install the Magento 2 software. Composer enables us to manage Magento 2, extensions, and their dependencies.

Composer provides you with the following advantages:

*	Enables you to reuse third-party libraries without bundling them with source code
*	Component-based architecture with robust dependency management
*	Manages dependencies to reduce extension conflicts and compatibility issues
*	Versioned dependencies
*	<a href="https://getcomposer.org/doc/01-basic-usage.md#package-versions" target="_blank">Semantic versioning</a>
*	Supports PHP Framework Interoperability standards


We'll have more information soon on how developers can use Composer to package extensions to distribute to Magento merchants and to other developers.

<h2 id="instgde-install-prereq">Before you start your installation</h2>

Before you begin, make sure that:

1.	Your system meets the requirements discussed in <a href="{{ site.gdeurl }}install-gde/system-requirements.html">Magento 2 System Requirements</a>.
2.	You completed all prerequisite tasks discussed in <a href="{{ site.gdeurl }}install-gde/prereq/prereq-overview.html">Prequisites for installing Magento 2</a>.
3.	You installed Composer and cloned the Magento 2 GitHub repository as discussed in <a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento 2 GitHub repository</a>.

<h2 id="instgde-install-start">Getting started with your installation</h2>

After you complete the tasks discussed in the preceding section, update Composer and run the installer:

1.	Log in to your Magento server as a user with `root` privileges.
2.	Change to the Magento 2 `setup` directory. For example,

	`cd /var/www/html/magento2/setup`
	
3.	Enter `composer install`

	This command updates package dependencies and can take a few minutes to complete.
	
4.	Choose what to install:

	*	To install the Magento 2 system software, continue with the next section.
	*	To install or update only the database schema, see TBD
	*	To install or update only users and administrators, see TBD
	*	To only update existing Magento 2 components, see TBD
	
	<p class="q">Reviewer: Only the first option above will be available for the GitHub Readme. The others will be available for developer beta.</p>
	
<h2 id="instgde-install-magento">Installing the Magento 2 software</h2>

This section discusses how to run the command-line installer for Magento 2. Before you begin, you can run the following commands to find values for some required options:

<table>
	<tbody>
		<tr>
			<th>Installer option</th>
			<th>Command</th>
		</tr>
	<tr>
		<td>Language</td>
		<td><code>php -f setup/index.php help languages</code></td>
	</tr>
	<tr>
		<td>Time zone</td>
		<td><code>php -f setup/index.php help timezones</code></td>
	</tr>
	<tr>
		<td>Currency</td>
		<td><code>php -f setup/index.php help currencies</code></td>
	</tr>
	</tbody>
	</table>

The format of the command follows:

`php -f index.php install [--[installation option name]=[installation option value] ...`

The following table discusses the meanings of installation option names and values. Some examples are provided in TBD.

<table>
	<tbody>
		<tr>
			<th>Option</th>
			<th>Description</th>
			<th>Required?</th>
		</tr>
		<tr>
		<td>base_url</td>
		<td><p>Base URL to use to access the Magento Admin and your Magento storefront.</p>
		<p>To run Magento on localhost, you can use either <code>http://localhost</code> or <code>http://127.0.0.1</code>.</p>
		<p><strong>Note</strong>: The scheme (<code>http://</code> or <code>https://</code>) is required.</p></td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>backend_frontname</td>
		<td>Path to access the Magento Admin. This path is appended to Base URL.
For example, if Base URL is http://www.example.com and Admin Path is `admin`, the Admin Panel's URL is `http://www.example.com/admin`&mdash;provided you configured your web server for server rewrites.</td>
		<td>Yes</td>
	</tr>
	<tr>
	<tr>
		<td>db_host</td>
		<td><p>Use any of the following:</p>
		<ul><li>The database server's fully qualified host name or IP address.</li>
		<li><code>localhost</code> if your database serve is on the same host as your web server.</li>
		<li>UNIX socket; for example, <code>/var/run/mysqld/mysqld.sock</code></li></ul>
		<p><strong>Note</strong>: You can optionally specify the database server port in its host name like <code>localhost:9000</code></p>
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
		<td>Use only if you're installing the Magento database tables in a database instance that has Magento tables in it already. In that case, use a prefix to identify the Magento tables for this installation.
Some customers have more than one Magento instance running on a server with all tables in the same database. This option enables those customers to share the database server with more than one Magento installation.</td>
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
		<td>:anguage code to use in the Admin and storefront. (If you have not done so already, you can view the list of language codes by entering <code>php -f setup/index.php help languages</code> from the <code>setup</code> directory.)</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>currency</td>
		<td>Default currency to use in the storefront. (If you have not done so already, you can view the list of currencies by entering <code>php -f setup/index.php help currencies</code> from the <code>setup</code> directory.)</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>timezone</td>
		<td>Default time zone to use in the Admin and storefront. (If you have not done so already, you can view the list of time zones by entering <code>php -f setup/index.php help timezones</code> from the <code>setup</code> directory.)</td>
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
		<td>If you have one, specify a key to encrypt sensitive data (such as passwords and personally identifiable customer information) in the Magento database. If you don't have one, Magento generates one for you.</td>
		<td>No</td>
	</tr>
	<tr>
		<td>db_model</td>
		<td>Advanced MySQL configuration parameter. Change the default, `db_model`, only if you are an experienced database administrator.</td>
		<td>No</td>
	</tr>
	<tr>
		<td>db_init_statements</td>
		<td>Advanced MySQL configuration parameter. Uses database initialization statements to run when connecting to the MySQL database. Consult a reference similar to <a href="http://dev.mysql.com/doc/refman/5.6/en/server-options.html" target="_blank">this one</a> before you set any values.</td>
		<td>No</td>
	</tr>
	
	
	</tbody>
</table>

<h2 id="instgde-install-magento-reinstall">Reinstalling the Magento 2 software</h2>

This section discusses how to install the Magento 2 software after you installed it previously. You might do this in an development environment especialy to get all the latest code changes.

To reinstall the Magento 2 software:

1.	Optionally delete and re-create the database instance.
2.	Log in to your Magento server as a user with permissions to modify files in the Magento file system.
3.	Enter the following commands in the order shown:

	<pre>cd [your Magento install dir]/setup
git pull
composer install</pre>

4.	Repeat the tasks discussed in <a href="#instgde-install-magento">Installing the Magento 2 software</a>.

