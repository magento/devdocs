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

#### Contents
*	<a href="#install-perms-import">Why we recommend you set file system permissions</a>
*	<a href="#install-perms-set">File system permissions and ownership</a>

<h2 id="install-perms-import">Why we recommend you set file system permissions</h2>
Malicious exploits are unfortunate reality in the internet age. To help prevent exploits that take advantage of the file system, we recommend you set Magento file system ownership and permissions in a particular way. For more information, see <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html#install-update-depend-user-over">Overview of ownership and permissions</a>.

The important things:

*	The owner of the Magento file system must have full control (read/write/execute) of all files and directories.
*	The web server user must have write access to the `var`, `app/etc`, and `pub/static` files and directories
*	The Magento file system owner is *not* the web server user; it should be a different user

In addition, the web server's *group* must own the Magento file system so that the Magento user (who is in the group) can modify files created using the Magento Admin and other web-based tools.

We recommend setting the permissions as follows:

*	All directories have 770 permissions.

	770 permissions give full control (that is, read/write/execute) to the owner and to the group and no permissions to anyone else.

*	All files have 660 permissions.

	600 permissions mean the owner and the group can read and write but other users have no permissions.

<h2 id="install-perms-set">File system permissions and ownership</h2>
Use the following steps:

1.	Change to the Magento directory:

		cd <web server docroot>/<magento2 base dir>

	The base directory is typically a subdirectory named `magento2` under your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

3.	Set ownership:

		chown -R :[your web server group name] .

	Typical examples:

	CentOS: `chown -R :apache .`

	Ubuntu: `chown -R :www-data .`

4.	Set permissions:

		find . -type d -exec chmod 770 {} \; && find . -type f -exec chmod 660 {} \; && chmod +x bin/magento

	If you must enter the commands as `sudo`, use:

		sudo find . -type d -exec chmod 770 {} \; && sudo find . -type f -exec chmod 670 {} \; && sudo chmod +x bin/magento

#### Next steps
Install the Magento software:

*	Using the web-based <a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>, which is better for less experienced users or anyone who has a hosting provider (especially if you don't have access to the Magento server)
*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Command line</a>, which gives you more control but requires more experience and also access to the Magento server

