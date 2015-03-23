---
layout: default
group: install2
subgroup: Getting Started
title: Installation overview
menu_title: Installation overview
menu_node: 
menu_order: 1
github_link: install-gde/bk-install-guide.md
---
  
<h2>New to Magento? Need some help?</h2> 
If you're not sure about the following, you probably need a little help before you get started using the Magento software:

*	Is the Magento software <a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">installed already</a>?
*	What's a <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">terminal, command prompt, or Secure Shell (ssh)</a>?
*	Where's my <a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">Magento server</a> and how do I access it?
*	What's <a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">PHP</a>?
*	What's <a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">Apache</a>?
*	What's <a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">MySQL</a>?

<h2>Step 1: Verify your prerequisites</h2>

Use the following table to verify you have the correct prerequisites to install the Magento software.

<table>
	<tbody>
		<tr>
			<th>Prerequisite</th>
			<th>How to check</th>
			<th>For more information</th>
		</tr>
	<tr>
		<td>Apache 2.2 or 2.4</td>
		<td>Ubuntu: <code>apache2 -v</code><br>
		CentOS: <code>httpd -v</code></td>
		<td><a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a></td>
	</tr>
	<tr>
		<td>PHP 5.6.x or 5.5.x (PHP 5.4 is not supported)<br />
			See <a href="{{ site.gdeurl }}release-notes/known-issues.html#known-devrc-php">Known issue with certain PHP versions</a></td>
		<td><code>php -v</code></td>
		<td><a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a><br><a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP CentOS</a></td>
	</tr>
	<tr><td>MySQL 5.6.x</td>
	<td><code>mysql -u [root user name] -p</code></td>
	<td><a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a></td>
	</tr>
</tbody>
</table>

<h2>Step 2: Prepare to install</h2>

After verifying your prerequisites, perform the following tasks in order to prepare to install the Magento software.

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-clone">Clone the Magento repository</a>

<h2>Step 3: Install and verify the installation</h2>

1.	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>
2.	Install Magento:
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software using the command line</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>

<h2>Required server permissions</h2>

Unless otherwise noted, all commands in this guide must be entered as a user with `root` privileges and permission to write to the web server docroot. Depending on your system, that might mean you must use different user accounts or add users to the web server user group&mdash;provided that group has sufficient privileges.

Installing software on Linux typically requires `root` privileges. You should generally not install the Magento software in the web server docroot using `root` privileges; however, that is up to you.
