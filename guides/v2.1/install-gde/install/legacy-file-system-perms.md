---
layout: default
group: install
subgroup: 99_app
title: Appendix&mdash;Magento file system ownership and appendix (legacy)
menu_title: Appendix&mdash;Magento file system ownership and appendix (legacy)
menu_node: parent
menu_order: 100
github_link21: install-gde/install/legacy-file-system-perms.md
---

#### Contents 

*	[Overview: Magento file system ownership and appendix (legacy)](#appendix-over)
*	[Summary of file system permissions](#appendix-summary)
*	[Set permissions before installing the Magento software](#appendix-install)

## Overview: Magento file system ownership and appendix (legacy) {#appendix-over}
This topic is provided for convenience for anyone using Magento Community Edition (CE) or Magento Enterprise Edition (EE) versions 2.0.0&ndash;2.0.5. 

In versions *before* 2.0.6, Magento explicitly set file system permissions when we created files, such as cache and static view files. Starting with 2.0.6, we do not set permissions explicitly. For more detail about file system ownership and permissions for version 2.0.6 and later, see [Overview of ownership and permissions]({{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html).

## Summary of file system permissions {#appendix-summary}
This section summarizes the permissions Magento uses when creating files in the file system.

### Developer mode permissions
In developer mode, Magento sets permissions as follows:

*	Directories: 770

	770 permissions give full control to the owner and to the group, and no permissions to anyone else.
*	Files: 660

	660 permissions give read-write permissions to the owner and to the group, and no permissions to anyone else.

### Production mode permissions
Changing modes affects permissions and ownership the following subdirectories in your Magento installation:

	var/view_preprocessed
	var/generation
	var/di

When you change to production mode, we set the following permissions on these directories and subdirectories:

*	Directories: 750

	750 permissions give full control to the owner, read and execute permissions to the group, and no permissions to anyone else.
*	Files: 640

	640 permissions give read-write permissions to the owner, read-only permissions to the group, and no permissions to anyone else.

## Set permissions before installing the Magento software {#appendix-install}
Use the following steps:

1.	If you haven't already done so, log in to your Magento server as, or switch to, the [Magento file system owner]({{ site.gdeurl21 }}install-gde/prereq/file-sys-perms-over.html).
2.	Change to the Magento installation directory:

		cd <web server docroot>/<magento2 base dir>

	The base directory is typically a subdirectory named `magento2` under your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl21 }}install-gde/basics/basics_docroot.html">here</a>.<br>

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

2.	Set ownership:

		chown -R :<your web server group name> .

	Typical examples:

	*	CentOS: `chown -R :apache .`
	*	Ubuntu: `chown -R :www-data .`

3.	Set permissions:

		find . -type d -exec chmod 770 {} \; && find . -type f -exec chmod 660 {} \; && chmod u+x bin/magento

	If you must enter the commands as `sudo`, use:

		sudo find . -type d -exec chmod 770 {} \; && sudo find . -type f -exec chmod 660 {} \; && sudo chmod u+x bin/magento