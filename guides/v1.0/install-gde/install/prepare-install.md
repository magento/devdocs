---
layout: default
group: install
subgroup: R_Installation
title: Update installation dependencies
menu_title: Update installation dependencies 
menu_node:
menu_order: 6
github_link: install-gde/install/prepare-install.md
---
 
<h2 id="install-update-depend">Introduction to Magento installation dependencies</h2>

For the first time, Magento uses <a href="http://getcomposer.org">Composer</a> to resolve dependencies before you install the Magento software and extensions.

Composer is a separate application that manages PHP dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install the Composer software</a>.
2.	<a href="#install-update-depend-apache">Switch to the Apache user</a> so Composer writes files to the web server docroot as the correct user.
2.	Run the <a href="#install-composer-install">`composer install` command</a> from your Magento root directory (for example, `/var/www/magento2/`).

<h2 id="install-update-depend-apache">Switching to the Apache user</h2>

For the installation to work properly, you *must* run Composer as the web server user. If the web server runs as `root`, you can run Composer as `root`; however, that is typically not the case. In general, *avoid running Composer as the root user*.

In the discussion that follows, it's assumed that the CentOS web server user is `apache` and the Ubuntu web server user is `www-data`.

<h3 id="install-update-depend-apache-ubuntu">Ubuntu</h3>

To switch to the web server user on Ubuntu:

1.	Enter the following command:

	<pre>su www-data</pre>

2.	If a password prompt displays but you don't know the user's password, continue with the next step; otherwise, continue with <a href="install-composer-install">Running Composer to update dependencies</a>.

3.	To enable the `www-data` user's shell and to set a password, enter the following commands in the order shown:

	<pre>sudo chsh -s /bin/bash www-data
	sudo passwd www-data</pre>

4.	Run the following command again and enter the user's password:

	<pre>su www-data</pre>

5.	Continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

<h3 id="install-update-depend-apache-centos">CentOS</h3>

To switch to the web server user on CentOS:

1.	Enter the following command:

	<pre>su - apache</pre>

	If the following error displays, continue with the next step; otherwise, continue with <a href="install-composer-install">Running Composer to update dependencies</a>.

	<pre>This account is currently not available.</pre>

2.	To give `apache` a valid shell account so you can switch to it, enter the following command:

	<pre>sudo chsh -s /bin/bash apache</pre>

3.	Run the following command again; this time, it should work:

	<pre>su - apache</pre>

3.	Continue with the next section.

<h2 id="install-composer-install">Running Composer to update dependencies</h2>

After you completed the tasks discussed in the preceding section, update dependencies as follows:

1.	Log in to your Magento server as the web server user or <a href="#install-update-depend-apache">switch to that user</a>.
2.	Change to the Magento installation directory. For example,

	`cd /var/www/html/magento2`

3.	As user with privileges to write to the web server docroot, enter `composer install`

	This command updates package dependencies and can take a few minutes to complete.

#### Next step

*	<a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install Magento software using the command line</a>