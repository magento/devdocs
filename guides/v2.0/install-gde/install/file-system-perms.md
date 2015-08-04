---
layout: default
group: install_pre
subgroup: Y_perms
title: Set file system ownership and permissions
menu_title: Set file system ownership and permissions
menu_node: parent
menu_order: 1
github_link: install-gde/install/file-system-perms.md
---

<!-- Being used as a redirect from the old wiki. Create a temporary redirect from guides/v2.0 > guides/v1.0 until 2.0 is available -->

After you get the Magento software, set ownership of all Magento files and directories and make sure they are writable by that user.

Typically, Magento files and directories should be owned by the web server user; however, the choice of user is up to you. The important thing is that the owner of the Magento file system must have write access to all files and directories.

We recommend setting the permissions as follows:

*	All directories have 700 permissions `(drwx------)`.

	700 permissions give full control (that is, read/write/execute) to the owner and no permissions to anyone else.

*	All files have 600 permissions `(-rw-------)`.

	600 permissions mean the owner can read and write but other users have no permissions.

Assuming the web server user owns the Magento 2 file system, use the following steps:

1.	Change to the Magento directory:

		cd <web server docroot>/<magento2 base dir>

	Cloning the Magento 2 GitHub repository creates a directory, typically `magento2`, under your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

2.	Find the web server user:

	Ubuntu: `ps -ef | grep apache2`

	CentOS: `grep User /etc/httpd/conf/httpd.conf`

3.	Set ownership:

		chown -R [your web server user name] .

	Typical examples:

	CentOS: `chown -R apache .`

	Ubuntu: `chown -R www-data .`

4.	Set permissions:

		find . -type d -exec chmod 700 {} \; && find . -type f -exec chmod 600 {} \; && chmod +x bin/magento

	If you must enter the commands as `sudo`, use:

		sudo find . -type d -exec chmod 700 {} \; && sudo find . -type f -exec chmod 600 {} \; && sudo chmod +x bin/magento

#### Next step
Install the Magento software:

*	Using the web-based <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>, which is better for less experienced users or anyone who has a hosting provider (especially if you don't have access to the Magento server)
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Command line</a>, which gives you more control but requires more experience and also access to the Magento server

