---
layout: default
group: install
subgroup: Q_Pre-installation
title: Update installation dependencies
menu_title: Update installation dependencies 
menu_node:
menu_order: 5
github_link: install-gde/install/prepare-install.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->

  
<h2 id="install-update-depend">Introduction to Magento installation dependencies</h2>

For the first time, Magento uses <a href="http://getcomposer.org">Composer</a> to resolve dependencies before you install the Magento software and extensions.

Composer is a separate application that manages PHP dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install the Composer software</a>.
2.	<a href="#install-update-depend-apache">Switch to the Apache user</a> so Composer writes files to the web server docroot as the correct user.
2.	Run the <a href="#install-composer-install">`composer install` command</a> from your Magento root directory (for example, `/var/www/magento2/`).

<h2 id="install-update-depend-apache">Switching to the Apache user</h2>

For the installation to work properly, all files written by Composer *must* be owned by the web server user. There are at least two ways to do this:

*	Run Composer as the web server user as discussed in this section
*	Run Composer as another user and change file ownership afterward (more secure)

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>We suggest running Composer in a web server shell in a development environment <em>only</em>. In a more secure environment, you should change ownership to the web server user after you run Composer.</p></span>
</div>

In the discussion that follows, it's assumed that the CentOS web server user is `apache` and the Ubuntu web server user is `www-data`.

<h3 id="install-update-depend-apache-ubuntu">Ubuntu</h3>

To switch to the web server user on Ubuntu:

1.	Enter the following command:

		su www-data

2.	If a password prompt displays but you don't know the user's password, continue with the next step; otherwise, continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

3.	To enable the `www-data` user's shell and to set a password, enter the following commands in the order shown:

		sudo chsh -s /bin/bash www-data && sudo passwd www-data

4.	Run the following command again and enter the user's password:

		su www-data

5.	Continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

<h3 id="install-update-depend-apache-centos">CentOS</h3>

To switch to the web server user on CentOS:

1.	Enter the following command:

		su - apache

	If you don't know the user's password or if the following error displays, continue with the next step; otherwise, continue with <a href="#install-composer-install">Running Composer to update dependencies</a>.

		This account is currently not available.

2.	To give `apache` a valid shell account so you can switch to it, enter the following command:

		sudo chsh -s /bin/bash apache && sudo passwd apache

3.	Run the following command again; this time, it should work:

		su - apache

3.	Continue with the next section.

<h2 id="install-composer-install">Running Composer to update dependencies</h2>

After you completed the tasks discussed in the preceding section, update dependencies as follows:

1.	Log in to your Magento server as the web server user or <a href="#install-update-depend-apache">switch to that user</a>.
2.	Change to the Magento installation directory and run `composer install`. Examples:

	CentOS:

		cd /var/www/html/magento2 && composer install

	Ubuntu:

		cd /var/www/magento2 && composer install

	This command updates package dependencies and can take a few minutes to complete.

3.	(Secure environment). Change ownership to the web server user as follows:

	*	(Ubuntu) `chown -R www-data .`
	*	(CentOS) `chown -R apache .`

#### Next step

*	<a href="{{ site.gdeurl }}install-gde/install/sample-data.html">Enable optional Magento sample data</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-web.html">Install the Magento software using the Setup Wizard</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install-cli.html">Install the Magento software using the command line</a>