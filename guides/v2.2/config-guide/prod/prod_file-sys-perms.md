---
layout: default
group: config-guide
subgroup: 90_prod
title: Magento ownership and permissions in development and production
menu_title: Magento ownership and permissions in development and production
menu_node:
menu_order: 2
version: 2.2
github_link: config-guide/prod/prod_file-sys-perms.md
---

## Overview of development and production file system ownership and permissions {#mage-owner}
This section discusses how to set up the owner or owners of the Magento file system for a development and production system. Before you continue, review the concepts discussed in [Overview of file system ownership and permissions]({{page.baseurl}}install-gde/prereq/file-sys-perms-over.html).

This topic focuses on Magento development and production systems. If you're installing Magento, see [Set pre-installation ownership and permissions]({{page.baseurl}}install-gde/prereq/file-system-perms.html).

The sections that follow discuss requirements for one or two Magento file system owners. That means:

*	One user: Typically necessary on shared hosting providers, which allow you to access only one user on the server This user can log in, transfer files using FTP, and this user also runs the web server.

*	Two users: We recommend two users if you run your own Magento server: one to transfer files and run command-line utilities, and a separate user for the web server software. When possible, this is preferable because it's more secure.

	Instead, you have separate users:

	*	The web server user, which runs the Magento Admin (including Setup Wizard) and storefront. 

	*	A *command-line user*, which is a local user account you can use to log in to the server. This user runs Magento cron jobs and command-line utilities.

<p id="mage-owner-one"></p>{% collapsibleh2 Production file system ownership for shared hosting (one user) %}
To use the one-owner setup, you must log in to your Magento server as the same user that runs the web server. This is typical for shared hosting.

Because having one file system owner is less secure, we recommend you deploy Magento in production on a private server instead of on shared hosting, if possible.

### Set up one owner for default or developer mode {#mage-owner-one-devel}
In default or developer mode, the following directories must be writable by the user:

*	`vendor` (Composer or compressed archive installation)
*	`app/etc`
*	`pub/static`
*	`var`
*	Any other static resources
*	`generated/code`
*	`generated/metadata`
*	`var/view_preprocessed`

You can set these permissions using either the command line or a file manager application provided by your shared hosting provider.

### Set up one owner for production mode {#mage-owner-one-prod}
When you're ready to deploy your site to production, you should remove write access from files in the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`pub/static`
*	Any other static resources
*	`generated/code`
*	`generated/metadata`
*	`var/view_preprocessed`

To update components, install new components, or to upgrade the Magento software, all of the preceding directories must be read-write.

#### Make files and directories read-only
To remove writable permissions to files and directories from the web server user's group:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following command to change to production mode:

		php bin/magento deploy:mode:set production
3.	Enter the following command:

		find var vendor pub/static app/etc generated/code generated/metadata var/view_preprocessed \( -type f -or -type d \) -exec chmod u-w {} \; && chmod o-rwx app/etc/env.php && chmod u+x bin/magento

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>

#### Make files and directories writable:
To make files and directories writable so you can update components and upgrade the Magento software:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following commands:

		chmod -R u+w .
		
	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  	If you're a contributing developer, replace `vendor` with `app/code` in the preceding commands. (A contributing developer <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)
	</div>

{% endcollapsibleh2 %}

<p id="mage-owner-two"></p>{% collapsibleh2 Production file system ownership for private hosting (two users) %}
If you use your own server (including a hosting provider's private server setup), there are two users:

*	The web server user, which runs the Magento Admin (including the Setup Wizard) and storefront.

	Linux systems typically do not provide a shell for this user; you cannot log in to the Magento server as, or switch to, the web server user.
*	The command-line user, which you log in to your Magento server as or switch to.

	Magento uses this user to run Magento CLI commands and cron.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	The command-line user is also referred to as the _Magento file system owner_.
	</div>

Because these users require access to the same files, we recommend you create a [shared group]({{page.baseurl}}install-gde/prereq/file-system-perms.html#mage-owner-about-group) to which they both belong. The following procedures assume you have already done this.

See one of the following sections:

*	[Two Magento file system owners in developer or default mode](#mage-owner-two-devel)
*	[Two Magento file system owners in production mode](#mage-owner-two-prod)

### Set up two owners for default or developer mode {#mage-owner-two-devel}
Files in the following directories must be writable by both users in developer and default mode:

* `var`
*	`generated`
* `pub/static`
* `pub/media`
* `app/etc`

Set the [`setgid`](http://linuxg.net/how-to-set-the-setuid-and-setgid-bit-for-files-in-linux-and-unix/){:target="_blank"} bit on directories so permissions always inherit from the parent directory. 

<div class="bs-callout bs-callout-info" id="info" markdown="1">
`setgid` applies to directories only, _not_ to files.
</div>

In addition, the directories should be writable by the web server group. Because content might already exist in these directories, add the permissions recursively.

#### Set permissions and `setgid`
To set `setgid` and permissions for developer mode:

1.	Log in to your Magento server as, or switch to, the Magento file system owner.
2.	Enter the following commands in the order shown:

		cd <your Magento install dir>
		find var generated pub/static pub/media app/etc -type f -exec chmod g+w {} \; && find var generated pub/static pub/media app/etc -type d -exec chmod g+ws {} \;

### Two Magento file system owners in production mode {#mage-owner-two-prod}
When you're ready to deploy your site to production, you should remove write access from files in the following directories for improved security:

*	`vendor` (Composer or compressed archive installation)
*	`app/code` (contributing developers only)
*	`app/etc`
*	`lib`
*	`pub/static`
*	Any other static resources
*	`generated/code`
*	`generated/metadata`
*	`var/view_preprocessed`

#### Make files and directories read-only
To remove writable permissions to files and directories from the web server user's group:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	As the Magento file system owner, enter the following command to change to production mode:

		php bin/magento deploy:mode:set production
3.	Enter the following command as a user with `root` privileges:

		find pub/static app/etc generated/code generated/metadata var/view_preprocessed \( -type d -or -type f \) -exec chmod g-w {} \; && chmod o-rwx app/etc/env.php

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If you're a contributing developer, replace <code>vendor</code> with <code>app/code</code> in the preceding commands. (A contributing developer <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)</p>
	</div>

#### Make files and directories writable
To make files and directories writable so you can update components and upgrade the Magento software:

1.	Log in to your Magento server.
2.	Change to your Magento installation directory.
3.	Enter the following command:

		find var generated vendor lib pub/static pub/media app/etc \( -type d -or -type f \) -exec chmod g+w {} \; && chmod o+rwx app/etc/env.php

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  	If you're a contributing developer, replace `vendor` with `app/code` in the preceding commands. (A contributing developer <a href="{{page.baseurl}}install-gde/prereq/dev_install.html">clones the Magento 2 GitHub repository</a> so they can contribute to our codebase.)
	</div>
{% endcollapsibleh2 %}

{% include install/file-system-umask.md %}


*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
