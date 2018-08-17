---
group: install_pre
subgroup: T_Developer
title: Update installation dependencies
menu_title: Update installation dependencies
menu_node:
menu_order: 10
version: 2.0
redirect_from: /guides/v1.0/install-gde/install/prepare-install.html
functional_areas:
  - Install
  - System
  - Setup
---

## Introduction to Magento installation dependencies   {#install-update-depend}

We now use <a href="http://getcomposer.org">Composer</a> to resolve dependencies before you install the Magento software and extensions.

{% glossarytooltip d85e2d0a-221f-4d03-aa43-0cda9f50809e %}Composer{% endglossarytooltip %} is a separate application that manages {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} dependencies. Before you can install the Magento software, you must perform the following tasks in the order shown:

1.	<a href="{{ page.baseurl }}/install-gde/prereq/dev_install.html">Install the Composer software</a>.
2.	<a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Create the Magento file system owner</a> so Composer writes files to the web server docroot as the correct user.
2.	Run the <a href="#install-composer-install"><code>composer install</code> command</a> from your Magento root directory (for example, `/var/www/magento2/`).

	The Magento root directory is a subdirectory of your web server's docroot. Need help locating the docroot? Click <a href="{{ page.baseurl }}/install-gde/basics/basics_docroot.html">here</a>.

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If the following error displays, see <a href="{{ page.baseurl }}/install-gde/trouble/tshoot_composer-fail.html">troubleshooting</a>:</p>
  		<pre>file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory</pre>
	</div>

For you to be able to run the Magento application, make sure you perform all tasks as a user with privileges to write to the web server docroot. One way to do this is to log in as or switch to the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">switch to the Magento file system owner</a>.

## Run `composer install` to update dependencies   {#install-composer-install}

Update installation dependencies as follows:

1.	Log in to your Magento server as the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} or <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">switch to that user</a>.
2.	Change to the Magento installation directory and run `composer install`. Examples:

	CentOS:

		cd /var/www/html/magento2 && composer install

	Ubuntu:

		cd /var/www/magento2 && composer install

	This command updates package dependencies and can take a few minutes to complete.

	The following error might display:

		[Composer\Downloader\TransportException]
			The "https://repo.magento.com/archives/magento/composer/magento-composer-1.0.2.0.zip" file could not be downloaded (HTTP/1.1 404 Not Found)

	If so, create <a href="{{ page.baseurl }}/install-gde/prereq/dev_install.html#instgde-prereq-compose-clone-auth">`auth.json`</a> in the Magento file system owner's `<home>/.composer` directory and run `composer install` again.

{% include install/file-system-perms-before.md %}

#### Next step

Install the Magento software:

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{ page.baseurl }}/install-gde/install/web/install-web.html">Setup Wizard</a>
