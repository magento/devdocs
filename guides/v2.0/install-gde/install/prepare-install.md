---
layout: default
group: install_pre
subgroup: T_Developer
title: Update installation dependencies
menu_title: Update installation dependencies 
menu_node: 
menu_order: 50
github_link: install-gde/install/prepare-install.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->

  
<h2 id="install-update-depend">Introduction to Magento installation dependencies</h2>
Magento uses <a href="http://getcomposer.org">Composer</a> to resolve dependencies before you install the Magento software and extensions.

Composer is a separate application that manages PHP dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1.	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install the Composer software</a>.
2.	<a href="#install-update-depend-apache">Switch to the Apache user</a> so Composer writes files to the web server docroot as the correct user.
2.	Run the <a href="#install-composer-install">`composer install` command</a> from your Magento root directory (for example, `/var/www/magento2/`).

	The Magento root directory is a subdirectory of your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.

<h2 id="install-update-depend-apache">Switching to the Apache user</h2>
{% include install/web-server-user.html %}

<h2 id="install-composer-install">Running Composer to update dependencies</h2>

After you completed the tasks discussed in the preceding section, update dependencies as follows:

1.	Log in to your Magento server as the web server user or <a href="#install-update-depend-apache">switch to that user</a>.
2.	Change to the Magento installation directory and run `composer install`. Examples:

	CentOS:

		cd /var/www/html/magento2 && composer install

	Ubuntu:

		cd /var/www/magento2 && composer install

	This command updates package dependencies and can take a few minutes to complete.

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>The Magento installation directory is a subdirectory of your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.</p></span>
	</div>


3.	(Secure environment). Change ownership to the web server user as follows:

	*	(Ubuntu) `chown -R www-data .`
	*	(CentOS) `chown -R apache .`

4.	<a href="{{ site.gdeurl }}install-gde/install/file-system-perms.html">Set file system ownership and permissions</a>
