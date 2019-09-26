---
group: cloud-guide
title: Set up the Magento file system owner
functional_areas:
  - Cloud
  - Setup
---

**Previous step:**
[Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)

**This step is optional if you installed nginx as your web server.** The [Magento file system owner]({{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html#magento-file-system-owner) provides root access and permissions, for security reasons on a hosted system. Apache installations require

To enable the web server (Apache) to write files and directories in the Magento file system but to also maintain *ownership* by the [Magento file system owner](https://glossary.magento.com/magento-file-system-owner), both users must be in the same group. This is necessary so both users can share access to Magento files, including files created using the [Magento Admin](https://glossary.magento.com/magento-admin) or other web-based utilities.

You need to create a new Magento file system owner and put that user in the web server's group. If you use an existing user account, we recommend the user account has a strong password for security reasons.

## Create the Magento file system owner {#mage-owner-create-user}

Create the Magento file system owner with a strong password. Magento file system owner is another term for the *command-line user*.

To create the Magento file system owner, enter the following command as a user with `root` privileges:

	adduser <username>

To give the user a password, enter the following command as a user with `root` privileges:

	passwd <username>

Follow the prompts on your screen to create a password for the user.

{: .bs-callout .bs-callout-warning}
If you do not have `root` privileges on your Magento server, you can use another local user account. Confirm that the user has a strong password and continue with [Put the Magento file system owner in the web server group](#install-update-depend-user-add2group).

For example, to create a user named `magento_user` and give the user a password, enter:

	sudo adduser magento_user
	sudo passwd magento_user

{: .bs-callout .bs-callout-warning}
Because the point of creating this user is to provide added security, it is essential that you create a strong password.

## Find the web server user's group {#install-update-depend-user-findgroup}

To find the web server user's group:

*	CentOS:

    ```bash
    grep -E -i '^user|^group' /etc/httpd/conf/httpd.conf
    ```
    or
    ```bash
    grep -Ei '^user|^group' /etc/httpd/conf/httpd.conf
    ```

Typically, the user and group name are both `apache`

*	Ubuntu: `ps aux | grep apache` to find the apache user, then `groups <apache user>` to find the group

	Typically, the username and the group name are both `www-data`

## Put the Magento file system owner in the web server's primary group {#install-update-depend-user-add2group}

Assuming the typical Apache group name for CentOS and Ubuntu, enter the following command as a user with `root` privileges:

*	CentOS: `usermod -g apache <username>`
*	Ubuntu: `usermod -g www-data <username>`

For example, to add the user `magento_user` to the `apache` primary group on CentOS:

	usermod -g apache magento_user

To confirm your Magento user is a member of the web server group, enter the following command:

	groups <username>

A sample result follows:

	magento_user : apache

To complete the task, restart the web server:

*	Ubuntu: `service apache2 restart`
*	CentOS: `service httpd restart`

**Next step:**
[Clone and branch the project]({{ page.baseurl }}/cloud/before/before-setup-env-2_clone.html)
