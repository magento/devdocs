---
layout: default
group: install_pre
subgroup: Prerequisites
title: Create the Magento file system owner
menu_title: Create the Magento file system owner
menu_node:
menu_order: 02
github_link: install-gde/prereq/apache-user.md
---

#### Contents
*	<a href="#install-update-depend-user-over">Overview of ownership and permissions</a>
*	<a href="#install-update-depend-user-create">Create a user and give the user a strong password</a>
*	<a href="#install-update-depend-user-group">Options for shared groups</a>
*	<a href="#install-update-depend-user-switch">Switch to the Magento file system owner</a>

<div class="bs-callout bs-callout-tip">
  <p>Totally lost? Need a helping hand? Try our <a href="{{ site.gdeurl }}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{ site.gdeurl }}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>.</p>
</div>

<h2 id="install-update-depend-user-over">Overview of ownership and permissions</h2>
Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and security:

*	Choose file system permissions that enable you to run Magento but that also provides security against unwanted access.

	We enable you to do this by setting the `MAGE_UMASK` environment variable. A umask&mdash;also referred to as a *file system creation mask*&mdash;is a set of bits, each of which restricts how its corresponding permission is set for newly created files.

	Magento uses a three-bit mask, by default `002`, that you subtract from the UNIX defaults of 777 for files and 666 for directories.

	(777 means *world writable*; that is, full control by everyone. 666 means read/write for everyone.)

	With the default `MAGE_UMASK` of `002`, files and directories created by Magento have 775 permissions (full control by the user; full control by the group; write and execute for anyone else). We recommend you set more restrictive permissions; we'll go into that in more detail in TBD.

*	Two users should own the Magento file system, although you can set it up with only one user in development.

	One user is the web server, which runs the Magento Admin (including Component Manager and System Upgrade); the other user is the Magento file system owner, which runs cron jobs and command-line utilities. You give permissions to both users by way of a shared group to which they both belong.

*	We recommend different permissions and ownership for default mode, developer mode, and production mode.

	We discuss these recommendations TBD.

<h2 id="install-update-depend-user-create">Create a user and give the user a strong password</h2>
This section discusses how to create the Magento file system owner.

<div class="bs-callout bs-callout-warning">
    <p>If you don't have <code>root</code> privileges on your Magento server, you can use another local user account. Make sure the user has a strong password and continue with <a href="#install-update-depend-user-group">Put the Magento file system owner in the web server group</a>.</p>
</div>

To create a user on CentOS or Ubuntu, enter the following command as a user with `root` privileges:

	adduser <username>

To give the user a password, enter the following command as a user with `root` privileges:

	passwd <username>

Follow the prompts on your screen to create a password for the user.

For example, to create a user named `magento_user` and give the user a password, enter:

	sudo adduser magento_user
	sudo passwd magento_user

<div class="bs-callout bs-callout-warning">
    <p>Because the point of creating this user is to provide added security, make sure you create a <a href="https://en.wikipedia.org/wiki/Password_strength" target="_blank">strong password</a>.</p>
</div>

<h2 id="install-update-depend-user-group">Options for shared groups</h2>
To enable the web server to write files and directories in the Magento file system but to also maintain *ownership* by the Magento file system owner. This is necessary so both users can share access to Magento files. (This includes files created using the Magento Admin or other web-based utilities.)

You must share the users' groups in any of the following ways:

*	Put the Magento file system in the web server's group

	This method is simpler but otherwise equivalent to the other method.
*	Put each user in the other's group

See the following sections:

1.	<a href="#install-update-depend-user-findgroup">Find the web server group</a>
2.	Any of the following:

	*	<a href="#install-update-depend-user-add2group">Add the Magento file system owner to the web server's primary group</a>
	*	<a href="#install-update-depend-user-share-groups">Put each user in the other's group</a>

<h3 id="install-update-depend-user-findgroup">Find the web server group</h3>
To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

Continue with either:

*	<a href="#install-update-depend-user-add2group">Put the Magento file system owner in the web server's group</a>
*	<a href="#install-update-depend-user-share-groups">Put each user in the other's group</a>

<h3 id="install-update-depend-user-add2group">Put the Magento file system owner in the web server's group</h3>
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

<h3 id="install-update-depend-user-share-groups">Put each user in the other's group</h3>
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

<h2 id="install-update-depend-user-switch">Switch to the Magento file system owner</h2>
After you've performed the other tasks in this topic, enter one of the following commands to switch to that user:

*	Ubuntu: `su <username>`
*	CentOS: `su - <username>`

For example,

	su magento_user

### Next steps
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">SELinux and iptables</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Your install or upgrade path</a>
