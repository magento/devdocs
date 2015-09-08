---
layout: default
group: install_pre
subgroup: Prerequisites
title: Create the Magento file system owner
menu_title: Create the Magento file system owner
menu_node:
menu_order: 6
github_link: install-gde/prereq/apache-user.md
---

#### Contents
*	<a href="#install-update-depend-user-over">Overview of ownership and permissions</a>
*	<a href="#install-update-depend-user-create">Create a user and give the user a strong password</a>
*	<a href="#install-update-depend-user-group">Add the user to the web server group</a>
*	<a href="#install-update-depend-user-switch">Switch to the Magento file system owner</a>

<h2 id="install-update-depend-user-over">Overview of ownership and permissions</h2>
Even in a development environment, you want your Magento installation to be secure. To help prevent issues related to unauthorized people or processes doing potentially harmful things to your system, we recommend some guidelines related to file system ownership and security:

*	The web server user should *not* own the files and directories on the Magento file system; however, the web server user must have write access to some directories.

	The *web server user* runs the web-based Setup Wizard installer and everything you do in the Magento Admin. This user must have the ability to write media files and so on. However, the user cannot *own* the files because that can potentially lead to security issues because any web-based process could potentially attack the Magento file system.

*	Another user should own the Magento files and directories; this user must not be `root`.

	This user runs the Magento cron job, command-line utilities, and has full control over all Magento files and directories. Because the user exists only on the server, it's very difficult for a malicious process to exploit it.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Although you can install and use the Magento software as the web server user, for the preceding reasons, we don't recommend it and don't discuss it in this guide.</p></span>
</div>

<h2 id="install-update-depend-user-create">Create a user and give the user a strong password</h2>
To create a user on CentOS or Ubuntu, enter the following command as a user with `root` privileges:

	adduser <username>

To give the user a password, enter the following command as a user with `root` privileges:

	passwd

Follow the prompts on your screen to create a password for the user.

<div class="bs-callout bs-callout-warning">
    <p>Because the point of creating this user is to provide added security, make sure you create a <a href="https://en.wikipedia.org/wiki/Password_strength" target="_blank">strong password</a>.</p>
</div>

<h2 id="install-update-depend-user-group">Add the user to the web server group</h2>
This section discusses how to find the name of the web server user's group and to add your Magento user to that group. The user must belong to the web server group so the user can share access to files with the web server user. (This includes files created by the Magento Admin or other web-based utilities.)

See one of the following sections:

*	<a href="#install-update-depend-user-findgroup">Find the web server group</a>
*	<a href="#install-update-depend-user-add2group">Add the user to the web server group</a>

<h3 id="install-update-depend-user-findgroup">Find the web server group</h3>
To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

<h3 id="install-update-depend-user-add2group">Add the user to the web server group</h3>
To add a user to the web server's group (assuming the typical Apache group name for CentOS and Ubuntu), enter the following command as a user with `root` privileges:

*	CentOS: `usermod -a -G apache <username>`
*	Ubuntu: `useradd -G www-data <username>`

For example, to add the user `deborah` to the `apache` group on CentOS:

	usermod -a -G apache deborah

<h3 id="install-update-depend-user-group-confirm">Confirm the user's group</h3>
To confirm your Magento user is a member of the web server group, enter the following command:

	groups <user name>

<h2 id="install-update-depend-user-switch">Switch to the Magento file system owner</h2>
After you've performed the other tasks in this topic, enter one of the following commands to switch to that user:

*	Ubuntu: `su <username>`
*	CentOS: `su - <username>`

For example,

	su magento_user

### Next steps
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Security-related prerequisites</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Your install or upgrade path</a>