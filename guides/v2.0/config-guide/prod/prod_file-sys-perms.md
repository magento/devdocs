---
layout: default
group: config-guide
subgroup: 90_prod
title: Magento ownership and permissions in development and production
menu_title: Magento ownership and permissions in development and production
menu_node:
menu_order: 2
github_link: config-guide/prod/prod_file-sys-perms.md
---

#### Contents
*	[Overview of development and production file system ownership and permissions](#mage-owner)
*	[Tasks for one Magento file system owner](#mage-owner-one)
*	[Tasks for two Magento file system owners](#mage-owner-two)
*	[Optionally set `magento_umask`](#mage-owner-umask)

## Overview of development and production file system ownership and permissions {#mage-owner}
This section discusses how to set up the owner or owners of the Magento file system for a development and production system. Before you continue, review the concepts discussed in [Overview of file system ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-sys-perms-over.html).

This topic focuses on Magento development and production systems. If you're installing Magento, see [Set pre-installation ownership and permissions]({{ site.gdeurl }}install-gde/prereq/file-system-perms.html).

The sections that follow discuss requirements for one or two Magento file system owners. That means:

*	One user:  Typically, shared hosting providers enable you to log in to the server as one user. This user can log in, transfer files using FTP, and this user also runs the web server.

*	Two users: You must have two users if you *cannot* log in to the server as, or switch to, the web server user. This type of setup is typical in private hosting or if you have your own Magento server.

	Instead, you have separate users:

	*	The web server user, which runs the Magento Admin (including Setup Wizard) and storefront. 

	*	A *command-line user*, which is a local user account you can use to log in to the server. This user runs Magento cron jobs and command-line utilities.

## Tasks for one Magento file system owner {#mage-owner-one}
{% collapsible Click to show/hide content %}
To use the one-owner setup, you must log in to your Magento server as the same user that runs the web server. This is typical for shared hosting.

### Set up one owner for default or developer mode {#mage-owner-one-devel}
In default or developer mode, the following directories must be writable by the user:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	Any other static resources
*	`var/generation`
*	`var/di`
*	`var/view_preprocessed`

You can set these permissions using either the command line or a file manager application provided by your shared hosting provider.

### Set up one owner for production mode {#mage-owner-one-prod}
When you're ready to deploy your site to production, you should remove write access from files in the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	Any other static resources
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
		chmod u+x bin/magento

	You can optionally enter all the preceding commands as one command:

		find var vendor lib pub/static pub/media app/etc -type f -exec chmod g-w {} \; && find var vendor lib pub/static pub/media app/etc -type d -exec chmod g-w {} \; && chmod o-rwx app/etc/env.php && chmod u+x bin/magento

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>

#### Make files and directories writable:
To make files and directories writable so you can update components and upgrade the Magento software:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following commands:

		chmod -R u+x .
		
	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{ site.gdeurl }}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>
{% endcollapsible %}

## Tasks for two Magento file system owners {#mage-owner-two}
{% collapsible Click to show/hide content %}
If you use your own server (including a hosting provider's private server setup), there are two users:

*	The web server user, which runs the Magento Admin (including the Setup Wizard) and storefront.

	Linux systems typically do not provide a shell for this user; you cannot log in to the Magento server as, or switch to, the web server user.
*	The command-line user, which you log in to your Magento server as or switch to.

	Magento uses this user to run Magento CLI commands and cron.

	<div class="bs-callout bs-callout-info" id="info">
		<p>The command-line user is also referred to as the <em>Magento file system owner</em>.</p>
	</div>

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

This section discusses how to create a new Magento file system owner and put that user in the web server's group. You can use an existing user account if you wish; we recommend the user have a strong password for security reasons.

### Step 1: Create the command-line user and give the user a strong password {#mage-owner-create-user}
This section discusses how to create the Magento file system owner. (The command-line user is also referred to as the *Magento file system owner*.)

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

### Step 2: Find the web server user's group {#install-update-depend-user-findgroup}
To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

### Step 3: Put the Magento file system owner in the web server's group {#install-update-depend-user-add2group}
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

### Set up two owners for default or developer mode {#mage-owner-two-devel}
Files in the following directories must be writable by both users in developer and default mode:

* `var`
* `pub/static`
* `pub/media`
* `app/etc`

Set the [`setgid`](http://linuxg.net/how-to-set-the-setuid-and-setgid-bit-for-files-in-linux-and-unix/){:target="_blank"} bit on directories so permissions always inherit from the parent directory. 

<div class="bs-callout bs-callout-info" id="info">
 	<p><code>setgid</code> applies to directories only, <em>not</em> to files.</p>
</div>

In addition, the directories should be writable by the web server group. Because content might already exist in these directories, add the permissions recursively.

#### Set permissions and `setgid`
To set `setgid` and permissions for developer mode:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var pub/static pub/media app/etc -type d -exec chmod g+ws {} \;

### Two Magento file system owners in production mode {#mage-owner-two-prod}
When you're ready to deploy your site to production, you should remove write access from files in the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	Any other static resources
*	`var/generation`
*	`var/di`
*	`var/view_preprocessed`

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
{% endcollapsible %}

{% include install/file-system-umask.md %}


*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase