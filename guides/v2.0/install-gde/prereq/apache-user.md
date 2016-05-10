---
layout: default
group: install_pre
subgroup: Prerequisites
title: Magento file system ownership and permissions
menu_title: Magento file system ownership and permissions
menu_node:
menu_order: 17
level3_menu_node: level3child
level3_subgroup: umask
github_link: install-gde/prereq/apache-user.md
---

#### Contents
*	[Magento file system ownership and permissions](#mage-owner)
*	[Set up one Magento file system owner](#mage-owner-one)
*	[Set up two Magento file system owners that belong to the same group](#mage-owner-two)
*	[Switch to the Magento file system owner](#install-update-depend-user-switch)

## Magento file system ownership and permissions {#mage-owner}
This section discusses how to set up the owner or owners of the Magento file system. Before you continue, make sure you know how many owners to set up as discussed in [Overview of file system ownership and permissions (mage_umask)]({{ site.gdeurl }}install-gde/prereq/apache-user-over.html).

*	Set up one Magento file system owner if you're using shared hosting or another environment where there is one user account for both login and for the web server
*	Set up two Magento file system owners if you cannot log in to your Magento server as, or switch to, the web server user

	This type of setup is common in Linux systems that are *not* shared; in other words, if you have your own server or a hosting account that provides you with a non-shared server.

## Set up one Magento file system owner {#mage-owner-one}
To use the one-owner setup, you must log in to your Magento server as the same user that runs the web server. This is typical for shared hosting.

### Set up one owner for default or developer mode {#mage-owner-one-devel}
To set up one owner for developer mode:

1.	Log in to your Magento server.
2.	Set the value of `mage_umask`:

	1.	Use a text editor to create a new file `<your Magento install dir>/mage_umask`
	2.	Set `mage_umask` to the desired value.

		For example, if you set `mage_umask` to `022`, Magento-created directories have 755 permissions and Magento-created files have 644 permissions.

		755 permissions means full control for the user, and everyone else can traverse directories.

		644 permissions mean read-write permissions for the user, and read-only for everyone else.
3.	Save your changes to `mage_umask` and exit the text editor.

### Set up one owner for production mode {#mage-owner-one-prod}
When you're ready to deploy your site to production, you should remove write access from files in the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	`var/generation`
*	`var/di`
*	`var/view_preprocessed`

To update components, install new components, or to upgrade the Magento software, all of the preceding directories must be read-write.

#### Make files and directories read-only
To remove writable permissions to files and directories from the web server user's group:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following commands:

		find var vendor lib pub/static pub/media app/etc -type f -exec chmod g-w {} \;
		find var vendor lib pub/static pub/media app/etc -type d -exec chmod g-w {} \;
		chmod o-rwx app/etc/env.php

	You can optionally enter all the preceding commands as one command:

		find var vendor lib pub/static pub/media app/etc -type f -exec chmod g-w {} \; && find var vendor lib pub/static pub/media app/etc -type d -exec chmod g-w {} \; && chmod o-rwx app/etc/env.php

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>

#### Make files and directories writable:
To make files and directories writable so you can update components and upgrade the Magento software:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following commands:

		find var vendor lib pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor lib pub/static pub/media app/etc -type d -exec chmod g+w {} \;
		chmod o+rwx app/etc/env.php

	You can optionally enter all the preceding commands as one command as follows:

		find var vendor lib pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var vendor lib pub/static pub/media app/etc -type d -exec chmod g+w {} \; && chmod o+rwx app/etc/env.php

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>

## Set up two Magento file system owners that belong to the same group {#mage-owner-two}
We recommend you have to owners of the Magento file system:

*	The web server user, which runs the Magento Admin (including Component Manager and System Upgrade).
*	The command-line and cron user, which runs Magento CLI commands and cron.

Because these users require access to the same files, we recommend you create a group to which they both belong.

Complete the following tasks in the order shown:

*	[About the shared group](#mage-owner-about-group)
*	[Step 1: Create the command-line user and give the user a strong password](#mage-owner-create-user)
*	[Step 2: Find the web server group](#install-update-depend-user-findgroup)
*	[Step 3: Assign users to the group](#install-update-depend-user-assign)
*	[Two Magento file system owners in developer or default mode](#mage-owner-two-devel)
*	[Two Magento file system owners in production mode](#mage-owner-two-prod)

### About the shared group {#mage-owner-about-group}
To enable the web server to write files and directories in the Magento file system but to also maintain *ownership* by the Magento file system owner. This is necessary so both users can share access to Magento files. (This includes files created using the Magento Admin or other web-based utilities.)

You must share the users' groups in any of the following ways:

*	Put the Magento file system in the web server's group

	This method is simpler but otherwise equivalent to the other method.
*	Put each user in the other's group

### Step 1: Create the command-line user and give the user a strong password {#mage-owner-create-user}
This section discusses how to create the Magento file system owner. (The command-line user is usually referred to as the *Magento file system owner*.)

To create a user on CentOS or Ubuntu, enter the following command as a user with `root` privileges:

	adduser <username>

To give the user a password, enter the following command as a user with `root` privileges:

	passwd <username>

Follow the prompts on your screen to create a password for the user.

<div class="bs-callout bs-callout-warning">
    <p>If you don't have <code>root</code> privileges on your Magento server, you can use another local user account. Make sure the user has a strong password and continue with <a href="#install-update-depend-user-group">Put the Magento file system owner in the web server group</a>.</p>
</div>

For example, to create a user named `magento_user` and give the user a password, enter:

	sudo adduser magento_user
	sudo passwd magento_user

<div class="bs-callout bs-callout-warning">
    <p>Because the point of creating this user is to provide added security, make sure you create a <a href="https://en.wikipedia.org/wiki/Password_strength" target="_blank">strong password</a>.</p>
</div>

### Step 2: Find the web server group {#install-update-depend-user-findgroup}
To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

Continue with either:

*	<a href="#install-update-depend-user-add2group">Put the Magento file system owner in the web server's group</a>
*	<a href="#install-update-depend-user-share-groups">Put each user in the other's group</a>

### Step 3: Assign users to the group {#install-update-depend-user-assign}
Complete the two-user setup by assigning users to the shared group in any of the following ways:

*	[Put the Magento file system owner in the web server's group](#install-update-depend-user-add2group) (simpler)
*	[Put each user in the other's group](#install-update-depend-user-share-groups)

#### Put the Magento file system owner in the web server's group {#install-update-depend-user-add2group}
To put the Magento file system owner in the web server's primary group (assuming the typical Apache group name for CentOS and Ubuntu), enter the following command as a user with `root` privileges:

*	CentOS: `usermod -g apache <username>`
*	Ubuntu: `usermod -g www-data <username>`

For example, to add the user `magento_user` to the `apache` primary group on CentOS:

	usermod -g apache magento_user

To confirm your Magento user is a member of the web server group, enter the following command:

	groups <user name>

A sample result follows:

	magento_user : apache

To complete the task, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

#### Put each user in the other's group {#install-update-depend-user-share-groups}
An alternative to setting up group membership is to put the web server user in the Magento file system owner's group and vice versa. To put each user in the other's group, as a user with `root` privileges, enter the following command for each of the two users:

	usermod -a -G <groupname> <username>

For example,

	usermod -a -G apache magento_user
	usermod -a -G magento_user apache

To confirm the users' group membership, enter the following command for each user:

	groups <username>

Example:

	groups apache
	apache : apache magento_user

	groups magento_user
	magento_user : magento_user apache

To complete the task, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

### Two Magento file system owners in developer or default mode {#mage-owner-two-devel}
TBD

### Two Magento file system owners in production mode {#mage-owner-two-prod}
TBD

## Switch to the Magento file system owner {#install-update-depend-user-switch}
After you've performed the other tasks in this topic, enter one of the following commands to switch to that user:

*	Ubuntu: `su <username>`
*	CentOS: `su - <username>`

For example,

	su magento_user