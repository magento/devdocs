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

<h2 id="instgde-overview-roadmap">High-level installation roadmap</h2>

Following is a brief overview of how to install the Magento software.

<h3>Step 1: Verify your prerequisites</h3>

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
		<td>Ubuntu: <code>apache -v</code><br>
		CentOS: <code>httpd -v</code></td>
		<td><a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a></td>
	</tr>
	<tr>
		<td>PHP 5.4.x (where x = 11 or later) or 5.5.x</td>
		<td><code>php -v</code></td>
		<td><a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a><br><a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP CentOS</a></td>
	</tr>
	<tr><td>MySQL 5.6.x</td>
	<td><code>mysql -u [root user name] -p</code></td>
	<td><a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a></td>
	</tr>
</tbody>
</table>

<h3>Step 2: Prepare to install</h3>

After verifying your prerequisites, perform the following tasks in order to prepare to install the Magento software.

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-install">Install Composer</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html#instgde-prereq-compose-clone">Clone the Magento repository</a>

<h3>Step 3: Install and verify the installation</h3>

1.	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>
2.	Install Magento:
	*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install Magento software through the web interface</a>
	*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software through the command line</a>
2.	<a href="{{ site.gdeurl }}install-gde/install/verify.html">Verify the installation</a>

<h2>Required server permissions</h2>

Unless otherwise noted, all commands in this guide must be entered as a user with `root` privileges and permission to write to the web server docroot. Depending on your system, that might mean you must use different user accounts or add users to the web server user group&mdash;provided that group has sufficient privileges.

Installing software on Linux typically requires `root` privileges. You should generally not install the Magento software in the web server docroot using `root` privileges; however, that is up to you.
