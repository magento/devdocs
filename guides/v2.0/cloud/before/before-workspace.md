---
layout: default
group: cloud
subgroup: 04_setup
title: Set up a Magento workspace
menu_title: Set up a Magento workspace
menu_order: 5
menu_node: 
version: 2.0
github_link: cloud/before/before-workspace.md
---

#### Contents
*	[Set up a Magento workspace](#cloud-first-workspace)
*	[Install the CLI](#cloud-ssh-cli-cli-install)
*	[Set up PHP](#cloud-first-php)
*	[Enable Secure Shell (SSH)](#cloud-ssh-cli-ssh)

## Set up a Magento workspace {#cloud-first-workspace}
The following sections discuss your options for setting up a Magento Enterprise Cloud Edition project.

To be able to manage your projects, environments, and services, you must set up the Magento Enterprise Cloud Edition command-line interface (CLI) and Secure Shell (SSH). These tools enable you to perform tasks like:

*	Work on a local branch
*	Branch and merge in your project
*	Push changes to the parent branch
*	Pull changes from the parent branch

This guide assumes you're working on a UNIX system or in a UNIX shell environment. On Windows, you can use a UNIX environment like Cygwin or you can use Putty. The tool you use is up to you.

## Install the CLI (command-line interface) {#cloud-ssh-cli-cli-install}
The CLI is equivalent to the Web Interface. It will help you manage your projects on Magento Enterprise Cloud Edition.

{% collapsible Click to show/hide content %}

To install the Magento Enterprise Cloud Edition CLI:

1.	Open a terminal and enter the following command:

		curl -sS https://accounts.magento.cloud/cli/installer | php
2.	After the CLI downloads, an operating system-specific command displays.

	For example, on Ubuntu and CentOS, the command is:

		source .bashrc

	If the `source .bashrc` command fails, prepend the absolute file system path to your user home directory to `.bashrc`

	For more information about the user shell profile, see [.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html){:target="_blank"}

3.	Enter the operating system-specific command to add the CLI to your system `$PATH`.
4.	Verify the `magento-cloud list` command is in your path by entering the following command:

		magento-cloud list

{% endcollapsible %}

## Set up PHP {#cloud-first-php}
When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from Magento Enterprise Cloud Edition. For example, certain things (like debugging) require a larger PHP `memory_limit` than most PHP distributions provide by default.

{% collapsible Click to show/hide content %}

Before working with your Cloud project, make sure you set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

To set `memory_limit`:

1.	Find your `php.ini` file using the following command:

		php --ini
		
	Use the value of `Loaded Configuration File`.
2.	Open `php.ini` in a text editor.
3.	Change the value of `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.
4.	Save your changes to `php.ini` and exit the text editor.
5.	Restart your web server:

	*	CentOS: `service httpd restart`
	*	Ubuntu: `service apache2 restart`

{% endcollapsible %}

## Enable Secure Shell (SSH) {#cloud-ssh-cli-ssh}
The [SSH protocol ](https://en.wikipedia.org/wiki/Secure_Shell){:target="_blank"} is designed to maintain a secure connection between two systems&mdash;in this case, your local working environment and your Magento Enterprise Cloud Edition Git project.

{% collapsible To enable SSH: %}

{% include cloud/enable-ssh.md %}

{% endcollapsible %}

#### Next steps
*	[Create a sample Magento project from a template]({{page.baseurl}}cloud/access-acct/first-time-setup_template.html)
*	[Import an existing Magento project]({{page.baseurl}}cloud/access-acct/first-time-setup_import.html)

