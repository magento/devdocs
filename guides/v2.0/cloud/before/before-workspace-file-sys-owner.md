---
layout: default
group: cloud
subgroup: 08_setup
title: Step 2, Set up the Magento file system owner
menu_title: Step 2, Set up the Magento file system owner
menu_order: 10
menu_node: 
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-file-sys-owner.md
---

#### Contents
*	[About the shared group](#mage-owner-about-group)
*	[Step 1: Create the Magento file system owner and give the user a strong password](#mage-owner-create-user)
*	[Step 2: Find the web server group](#install-update-depend-user-findgroup)
*	[Step 3: Put the Magento file system owner in the web server's group](#install-update-depend-user-add2group)

### About the shared group {#mage-owner-about-group}
To enable the web server to write files and directories in the Magento file system but to also maintain *ownership* by the Magento file system owner, both users must be in the same group. This is necessary so both users can share access to Magento files (including files created using the Magento Admin or other web-based utilities).

This section discusses how to create a new Magento file system owner and put that user in the web server's group. You can use an existing user account if you wish; we recommend the user have a strong password for security reasons.

### Step 1: Create the Magento file system owner and give the user a strong password {#mage-owner-create-user}
This section discusses how to create the Magento file system owner. (Magento file system owner is another term for the *command-line user*.)

{% collapsible To create the Magento file system owner: % }

Enter the following command as a user with `root` privileges:

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

{% endcollapsible %}

### Step 2: Find the web server user's group {#install-update-depend-user-findgroup}

{% collapsible To find the web server user's group: %}
To find the web server user's group:

*	CentOS: `egrep -i '^user|^group' /etc/httpd/conf/httpd.conf`

	Typically, the user and group name are both `apache`
*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the user name and the group name are both `www-data`

{% endcollapsible %}

### Step 3: Put the Magento file system owner in the web server's group {#install-update-depend-user-add2group}

{% collapsible To put the Magento file system owner in the web server's primary group: %}

Asuming the typical Apache group name for CentOS and Ubuntu), enter the following command as a user with `root` privileges:

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

{% endcollapsible %}

#### Next step
[Install the CLI]({{ page.baseurl }}cloud/before/before-workspace-cli.html)


