---
layout: default
group: install2
subgroup: Getting Started
title: Installation overview
menu_title: Installation overview
menu_node: 
menu_order: 1
version: 2.0
github_link: install-gde/bk-install-guide.md
redirect_from: 
  - /guides/v1.0/install-gde/bk-install-guide.html
  - /guides/v2.0/install-gde/install/install-merchbeta.html
---

<h2>Magento software installation</h2>
Hi, we're glad you're among the 240,000 merchants worldwide who put their trust in our eCommerce software. We've gathered some information to help you get started with Magento and with your Magento installation. 

We have some resources here to help get you started using the eCommerce platform of the future&mdash;Magento 2.

It’s what we do.

<h2 id="install-how-install">Step 1: Find the installation that's right for you</h2>
<a href="{{page.baseurl}}install-gde/continue.html">Choose how to install the Magento software</a>.

<h2 id="install-verify-prereq">Step 2: Verify your prerequisites</h2>
Use the following table to verify you have the correct prerequisites to install the Magento software. If you used a shared hosting provider, you can skip this step.

<table>
	<tbody>
		<tr>
			<th>Prerequisite</th>
			<th>How to check</th>
			<th>For more information</th>
		</tr>
	<tr>
		<td><p>Apache 2.2 or 2.4</p></td>
		<td><p>Ubuntu: <code>apache2 -v</code></p>
		<p>CentOS: <code>httpd -v</code></p></td>
		<td><p><a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a></p>
			<p>(Don't forget to <a href="{{page.baseurl}}install-gde/prereq/apache.html#apache-help-rewrite">enable rewrites and <code>.htaccess</code></a>!)</p></td>
	</tr>
	<tr>
		<td><p>PHP 7.0.2–7.0.6 except for 7.0.5, 5.6.x or 5.5.x (PHP 5.4 is not supported)</p>
			<p>See <a href="{{page.baseurl}}install-gde/trouble/tshoot_install-issues.html#known-devrc-php">Known issue with certain PHP versions</a></p></td>
		<td><p><code>php -v</code></p></td>
		<td><a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">PHP Ubuntu</a><br><a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP CentOS</a></td>
	</tr>
	<tr><td><p>MySQL 5.6.x</p></td>
	<td><p><code>mysql -u &lt;root user name> -p</code></p></td>
	<td><a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a></td>
	</tr>
</tbody>
</table>

<h2>Step 3: Install Magento</h2>
*	Easy installation: <a href="{{page.baseurl}}install-gde/install/web/install-web.html">Install the Magento software using the Setup Wizard</a>

	<a href="{{page.baseurl}}install-gde/install/web/install-web-sample-data.html">Install optional sample data (Setup Wizard)</a>
*	Advanced installation with more control: <a href="{{page.baseurl}}install-gde/install/cli/install-cli.html">Install Magento software using the command line</a>

	<a href="{{page.baseurl}}install-gde/install/cli/install-cli-sample-data.html">Install optional sample data (command line)</a>

<h2>Post-installation</h2>
*	<a href="{{page.baseurl}}install-gde/install/verify.html">Verify the installation</a>
*	<a href="{{page.baseurl}}install-gde/trouble/tshoot.html">Troubleshooting</a>
*	<a href="{{page.baseurl}}install-gde/install/sample-data-after-magento.html">Install optional sample data after Magento</a>
*	<a href="{{page.baseurl}}install-gde/install/post-install-config.html">Configuring</a>

<h2>Useful information</h2>
At any time during your installation, take advantage of our <a href="{{page.baseurl}}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{page.baseurl}}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>. They're really easy to use; the tutorial walks you through a sample installation. The roadmap provides links to common tasks throughout the guide.

Use the links on the left side of the page to navigate topics in each part of the installation.

<h2>Required server permissions</h2>
UNIX systems require `root` privileges to install and configure software like a web server, PHP, and so on. If you need to install this software, make sure you have `root` access.

You should *not* install the Magento software in the web server docroot as the `root` user because the web server might not be able to interact with those files. 

You'll also need `root` privileges to create the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a> and add that owner to the web server's group. You'll use the Magento file system owner to run any commands from the command line and to set up the Magento cron job, which schedules tasks for you.
