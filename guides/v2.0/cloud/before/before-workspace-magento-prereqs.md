---
layout: default
group: cloud
subgroup: 080_setup
title: Install Magento prerequisites
menu_title: Install Magento prerequisites
menu_order: 15
menu_node:
level3_menu_node: level3child
level3_subgroup: workspace
version: 2.0
github_link: cloud/before/before-workspace-magento-prereqs.md
redirect_from:
  - /guides/v2.0/cloud/before/before-workspace-php.html
  - /guides/v2.1/cloud/before/before-workspace-php.html
  - /guides/v2.2/cloud/before/before-workspace-php.html
  - /guides/v2.0/cloud/before/before-workspace-cli.html
  - /guides/v2.1/cloud/before/before-workspace-cli.html
  - /guides/v2.2/cloud/before/before-workspace-cli.html
---

#### Previous step:
[Set up an account and project]({{ page.baseurl }}cloud/before/before-workspace-cloud-account.html)

Install the following software packages and tools on your local to prepare for Magento code development. If you already have these packages installed, check for any recommendations or notes and continue to the next step.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento documentation provides installation instructions for installing software on CentOS or Ubuntu only. For installation information on Windows or MacOS, consult a community resource.
</div>

## Virtual machine {#vm}
To best develop and manage your local, we recommend using a virtual machine. The VM encapsulates your code, web services, testing and supports a Unix-based environment. Select a virtual system you prefer.

For examples in this documentation, we use [Vagrant](https://www.vagrantup.com/) and [VirtualBox](https://www.virtualbox.org). Vagrant provides a single workflow for managing VMs, helps setup developer environments quickly, and isolates dependencies through one consistent environment. VirtualBox manages the environment. Another option commonly used is [Docker](https://www.docker.com/), which uses containers instead of virtualization.

### Vagrant {#vagrant}
To download and install [Vagrant](https://www.vagrantup.com/downloads.html):

1. (optional) Install the Vagrant hostmanager plugin. we also recommend the package [hostmanager](https://github.com/devopsgroup-io/vagrant-hostmanager).
		vagrant plugin install vagrant-hostmanager

2. Install Vagrant. For example, these commands install Vagrant with specific OS versions:

	<ul><li>Ubuntu 12.04 LTS 64-bit: `vagrant init hashicorp/precise64`</li>
	<li>Ubuntu 16.04.2 LTS 64-bit: `vagrant init ubuntu/xenial64`</li></ul>

3. You may want to create a Vagrant directory for the local environment. For example:
		mkdir ~/localdev && cd ~/localdev

4. Install a box based on the OS. This command installs an Ubuntu box:
		vagrant init ubuntu/xenial64

5. And start the VM:
		vagrant up

6. If you installed hostmanager, update the hosts file on the active machines:
		vagrant hostmanager

### VirtualBox {#virtualbox}
[VirtualBox](https://www.virtualbox.org/wiki/Downloads) extends support and features across all OS and platforms to create and manage multiple VMs and operating systems on your local.

Select and download a preferred Unix-based OS for your virtual system, such as Denbian, CentOS, or Ubuntu. For examples in this documentation, we use Ubuntu. Run the installation to complete. You don't need to make additional configurations to run and manage VMs.

## Development tools {#devtools}
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"} - Provides code branching and management for accessing Magento Enterprise Cloud Edition and your code respositories. Use Git command-line commands or applications of your choice to work with Git.
	For more information, see [How Cloud uses Git]({{ page.baseurl }}cloud/reference/git-integration.html).
* [Composer](https://getcomposer.org/download/) - Used for dependency management. Composer enables us to manage the Magento components and their dependencies.
	For more information, see [How Cloud uses Composer]({{ page.baseurl }}cloud/reference/cloud-composer.html).

## PHP {#php}
Install {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} on your local. We recommend PHP 7.0. For information on installing PHP, see these instructions for [CentOS]({{ page.baseurl }}install-gde/prereq/php-centos.html) and [Ubuntu]({{ page.baseurl }}install-gde/prereq/php-ubuntu.html). For instructions for another OS, see the [PHP documentation](http://php.net/manual/en/install.php).

The following packages may also be helpful for your PHP installation:

* [bcmath](http://php.net/manual/en/book.bc.php)
* [curl](http://php.net/manual/en/book.curl.php)
* ext-dom
* [fpm](https://php-fpm.org/)
* [gd](http://php.net/manual/en/book.image.php)
* [intl](http://php.net/manual/en/book.intl.php)
* [json](http://php.net/manual/en/ref.json.php)
* [mbstring](http://php.net/manual/en/book.mbstring.php)
* [mcrypt](http://php.net/manual/en/book.mcrypt.php)
* [mysql](http://php.net/manual/en/set.mysqlinfo.php)
* [xml](http://php.net/manual/en/book.xml.php)
* [zip](http://php.net/manual/en/book.zip.php)

### Set up PHP memory limit {#cloud-first-php}
When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from Magento Enterprise Cloud Edition. For example, certain actions (like debugging) require a larger PHP `memory_limit` than most PHP distributions provide by default.

To set `memory_limit`:

Before working with your Magento Enterprise Cloud Edition project, make sure you set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

1.	Find your `php.ini` file using the following command:

			php --ini

	Use the value of `Loaded Configuration File`.
2.	As a user with `root` privileges, open `php.ini` in a text editor.
3.	Change the value of `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.
4.	Save your changes to `php.ini` and exit the text editor.
5.	Restart your web server:

	*	Apache:
		*	CentOS: `service httpd restart`
		*	Ubuntu: `service apache2 restart`
	*	nginx: `service nginx restart`

## Web server {#webserver}
We support installations of [Apache]({{ page.baseurl }}install-gde/prereq/apache.html) and [nginx](https://nginx.org/) for your web server. We do not provide documentation for an installation and configuration of nginx at this time. Please review the [nginx Wiki](https://www.nginx.com/resources/wiki/) for further instructions.

## Database {#database}
You have multiple options for databases to use for your local. We recommend [MySQL]({{ page.baseurl }}install-gde/prereq/mysql.html). Regardless of database, you need to modify the `auto_increment_increment` value. The Magento Enterprise Cloud Edition environments use [Mariadb](https://mariadb.org/), with a [Galara Cluster](http://galeracluster.com/) with triple reducency in the Production environment.

### Set up the auto-increment {#cloud-mysql}
The MySQL configuration parameter [`auto_increment_increment`](http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html){:target="_blank"} is set to `1` by default in a local MySQL installation. You need to change this value to `3`.  The Magento Enterprise Cloud Edition database cluster includes 3 database implementations. The increment ensures data is unique across all databases for consistant data in the High Availability structure.

<div class="bs-callout bs-callout-warning" markdown="1">
Do not develop using hard-coded database IDs in your development. Due to the incremented data IDs, the referenced data will differ across the three nodes in Production.
</div>

To avoid issues, we recommend you set `auto_increment_increment=3`.

To view and set `auto_increment_increment`:

First, view the current value:

	mysqladmin variables -u <root user name> -p | grep 'auto_increment'

If necessary, set `auto_increment_increment` to 3:

1.	As a user with `root` privileges, open `/etc/my.cnf` in a text editor.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		On Ubuntu 16, the path is typically `/etc/mysql/mysql.conf.d/mysqld.cnf`.
	</div>

2.	Add or edit the following line in the `[mysqld]` section:

			auto_increment_increment=3

		Magento Enterprise Cloud Edition supports a High Availability configuration. This setting increments the database IDs in increments of three to ensure row uniqueness for Galara databases on each of the three HA nodes in production.

3.	Restart MySQL:

			service mysqld restart

## Magento Cloud CLI {#cloud-ssh-cli-cli-install}
The Magento Enterprise Cloud Edition command-line interface (CLI) tool helps you manage your projects and code branches on Magento Enterprise Cloud Edition. For a list of available commands, see [Common Magento CLI commands]({{ page.baseurl }}cloud/env/environments-start.html).

These instructions discuss installation using commands for a Unix environment. For Windows, we recommend using [Cygwin](https://www.cygwin.com/){:target="_blank"} or Git Bash.

To install the Magento Enterprise Cloud Edition CLI:

1.	Log in to your local development machine, or switch to, the [Magento file system owner]({{ page.baseurl }}cloud/before/before-workspace-file-sys-owner.html).

2.	Change to a directory to which the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} has write access (for example, the web server docroot).

3.	Enter the following command:

			curl -sS https://accounts.magento.cloud/cli/installer | php

4.	After the CLI downloads, an operating system-specific command displays.

	For example, on Ubuntu and CentOS, the command is similar to:

		<pre class="no-copy">source /home/magento_user/.bashrc</pre>

	For more information about the user shell profile, see [.bash_profile vs .bashrc](http://www.joshstaiger.org/archives/2005/07/bash_profile_vs.html){:target="_blank"}

	You can also add the `<magento user home dir>/.magento-cloud/bin` to the Magento user's `PATH`. 	If the user name is `magento_user`, the command is similar to the following:

			export PATH=$PATH:/home/magento_user/.magento-cloud/bin

	Consult operating system documentation for details.

5.	Verify the `magento-cloud` command is in your path by entering the following command:

			magento-cloud list

## Additional options
You can also install [optional software]({{ page.baseurl }}install-gde/prereq/optional.html) as well.

#### Next step
[Enable SSH keys]({{ page.baseurl }}cloud/before/before-workspace-php.html)
