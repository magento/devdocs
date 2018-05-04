---
layout: default
group: cloud
subgroup: 080_setup
title: Set up the Magento file system owner
menu_title: Set up the Magento file system owner
menu_order: 25
menu_node:
version: 2.1
github_link: cloud/before/before-workspace-file-sys-owner.md
functional_areas:
  - Cloud
  - Setup
---
#### Previous step: {#mage-owner-about-group}
[Enable SSH keys]({{ page.baseurl}}/cloud/before/before-workspace-ssh.html)

**This step is optional if you installed nginx as your web server.** The [Magento file system owner]({{ page.baseurl}}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner) provides root access and permissions, for security reasons on a hosted system. Apache installations require

To enable the web server (Apache) to write files and directories in the Magento file system but to also maintain *ownership* by the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %}, both users must be in the same group. This is necessary so both users can share access to Magento files, including files created using the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} or other web-based utilities.

You need to create a new Magento file system owner and put that user in the web server's group. If you use an existing user account, we recommend the user account has a strong password for security reasons.

## Create the Magento file system owner {#mage-owner-create-user}
Create the Magento file system owner with a strong password. Magento file system owner is another term for the *command-line user*.

To create the Magento file system owner, enter the following command as a user with `root` privileges:

	adduser <username>

To give the user a password, enter the following command as a user with `root` privileges:

	passwd <username>

Follow the prompts on your screen to create a password for the user.

<div class="bs-callout bs-callout-warning">
    <p>If you don't have <code>root</code> privileges on your Magento server, you can use another local user account. Make sure the user has a strong password and continue with <a href="#install-update-depend-user-add2group">Put the Magento file system owner in the web server group</a>.</p>
</div>

For example, to create a user named `magento_user` and give the user a password, enter:

	sudo adduser magento_user
	sudo passwd magento_user

<div class="bs-callout bs-callout-warning">
    <p>Because the point of creating this user is to provide added security, make sure you create a <a href="https://en.wikipedia.org/wiki/Password_strength" target="_blank">strong password</a>.</p>
</div>


## Find the web server user's group {#install-update-depend-user-findgroup}

To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`


## Put the Magento file system owner in the web server's primary group {#install-update-depend-user-add2group}

Assuming the typical Apache group name for CentOS and Ubuntu, enter the following command as a user with `root` privileges:

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

#### Next step:
[Clone and branch the project]({{ page.baseurl}}/cloud/before/before-setup-env-2_clone.html)
