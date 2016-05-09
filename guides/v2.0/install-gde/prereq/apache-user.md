---
layout: default
group: install_pre
subgroup: Prerequisites
title: Magento file system ownership
menu_title: Magento file system ownership
menu_node:
menu_order: 17
level3_menu_node: level3child
level3_subgroup: umask
github_link: install-gde/prereq/apache-user.md
---

#### Contents
*	[Magento file system ownership](#mage-owner)
*	[Set up one Magento file system owner](#mage-owner-one)
*	[Set up two Magento file system owners that belong to the same group](#mage-owner-two)

## Magento file system ownership {#mage-owner}
This section discusses how to set up the owner or owners of the Magento file system. Before you continue, make sure you know how many owners to set up as discussed in [About Magento file system ownership and permissions (MAGE_UMASK)]({{ site.gdeurl }}install-gde/prereq/apache-user-over.html).

## Set up one Magento file system owner {#mage-owner-one}
This is a simple setup we recommend for anyone who uses Magento in a development environment only or who uses Magento with shared hosting. It's simple to set up but not as secure as the [two-owner setup](#mage-owner-two).

To use the one-owner setup, you must use the web server user account to access your server using Secure Shell (SSH), FTP, or SCP. 

### Set up one owner for default or developer mode {#mage-owner-one-devel}
To set up one owner for developer mode:

1.	Log in to your Magento server as, or switch to, the web server user.
2.	Find the group to which the web server user belongs:

		groups <web server user>

	For example, on Ubuntu, the web server user name and group name are both typically `www-data`.
2.	Set the value of `MAGE_UMASK`:

	1.	Use a text editor to open `<your Magento install dir>/.htaccess`
	2.	Locate `MAGE_UMASK` and set it to the desired value.

		For example, if you set `MAGE_UMASK` to `022`, Magento-created files have 775 permissions and Magento-created directories have 664 permissions.

		775 permissions means full control for the user and group, and read-write-execute for everyone else.

		664 permissions mean read-write permissions for the user and group, and read-only for everyone else.
	3.	Save your changes to `.htaccess` and exit the text editor.

### Set up one owner for production mode {#mage-owner-one-prod}
When you're ready to deploy your site to production, you should remove write access from the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	`var/generation`
*	`var/di`
*	`var/view_preprocessed`

To update components, install new components, or to upgrade the Magento software, all of the preceding directories must be read-write.

To make a directory and the files it contains read-only:

1.	Log in to your Magento server as, or switch to, the web server user.
2.	Enter the following command for each directory:

		chmod -R o-rwx <directory path>

	For example, if Magento is installed in `/var/www/html/magento2`, make the `app/etc` directory and files read-only using the command:

		chmod 0-rwx /var/www/html/magento2/app/etc

## Set up two Magento file system owners that belong to the same group {#mage-owner-two}
We recommend you have to owners of the Magento file system:

*	The web server user, which runs the Magento Admin (including Component Manager and System Upgrade).
*	The command-line and cron user, which runs Magento CLI commands and cron.

Because these users require access to the same files, we recommend you create a group to which they both belong.

### Set up two owners for default or developer mode {#mage-owner-two-devel}

