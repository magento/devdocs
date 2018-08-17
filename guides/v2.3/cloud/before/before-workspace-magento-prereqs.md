---
group: cloud
subgroup: 080_setup
title: Install Magento prerequisites
menu_title: Install Magento prerequisites
menu_order: 15
menu_node:
version: 2.1
redirect_from:
  - /guides/v2.0/cloud/before/before-workspace-php.html
  - /guides/v2.1/cloud/before/before-workspace-php.html
  - /guides/v2.2/cloud/before/before-workspace-php.html
  - /guides/v2.0/cloud/before/before-workspace-cli.html
  - /guides/v2.1/cloud/before/before-workspace-cli.html
  - /guides/v2.2/cloud/before/before-workspace-cli.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

#### Previous step:
[Prepare for local environment setup]({{ page.baseurl }}/cloud/before/before-workspace.html)

Install the following software packages and tools on your local to prepare for Magento code development. If you already have these packages installed, check for any recommendations or notes and continue to the next step.

To begin, install and set up a VM on your host computer (Windows, Mac OS, Linux-based system). A VM gives you an environment to install a different Operating System, tools, software, a database, and Magento without requiring a customized system. You only need to install the VM software on your host. All other software can be installed and configured on your VM.

When you install and configure software on your local (or VM), you will first SSH into the VM and then complete installations. Follow the SSH instructions and commands for the VM software you install. For example, you would install PHP, Nginx, and database on the VM via SSH.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Magento documentation provides installation instructions for installing software on CentOS or Ubuntu only. For installation information on Windows or MacOS, consult a community resource.
</div>

## Virtual machine or container (host) {#vm}

To best develop and manage your host, we recommend using a virtual machine. The VM encapsulates your code, web services, testing and supports a Unix-based environment. Select a virtual system you prefer.

For your VM, we recommend installing one of the following:

* [Vagrant](https://www.vagrantup.com/docs/){:target="_blank"} for a virtual machine
* [Docker](https://docs.docker.com/){:target="_blank"} for a container

When using Vagrant, we also recommend the package [hostmanager](https://github.com/devopsgroup-io/vagrant-hostmanager){:target="_blank"} and using [VirtualBox](https://www.virtualbox.org/wiki/Documentation){:target="_blank"} to manage the environment. VirtualBox extends support and features across all OS and platforms to create and manage multiple VMs and operating systems on your local.

## Development tools {#devtools}

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git){:target="_blank"} - Provides code branching and management for accessing {{site.data.var.ee}} and your code repositories. Use Git command-line commands or applications of your choice to work with Git. You can install this on your local VM or on your host.
	For more information, see [How Cloud uses Git]({{ page.baseurl }}/cloud/reference/git-integration.html).
* [Composer](https://getcomposer.org/download/){:target="_blank"} - Used for dependency management. Composer enables us to manage the Magento components and their dependencies. Install on your local VM.
	For more information, see [How Cloud uses Composer]({{ page.baseurl }}/cloud/reference/cloud-composer.html).

## Web server (local) {#webserver}

We strongly recommend installing [Nginx]({{ page.baseurl }}/install-gde/prereq/nginx.html) for your web server on your local. While {{site.data.var.ee}} supports [Apache]({{ page.baseurl }}/install-gde/prereq/apache.html), {{site.data.var.ece}} uses Nginx. To have your local as close to cloud installations as possible, install and configure Nginx.

## PHP (local) {#php}

Install {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} on your local. We recommend PHP 7.1.3+ or 7.2. For information on installing PHP on CentOS and Ubuntu see [PHP](../../../v2.3/install-gde/prereq/php-centos-ubuntu.html). For instructions for another OS, see the [PHP documentation](http://php.net/manual/en/install.php){:target="_blank"}.

The following packages may also be helpful for your PHP installation:

* [bcmath](http://php.net/manual/en/book.bc.php){:target="_blank"}
* [curl](http://php.net/manual/en/book.curl.php){:target="_blank"}
* ext-dom
* [fpm](https://php-fpm.org/){:target="_blank"}
* [gd](http://php.net/manual/en/book.image.php){:target="_blank"}
* [intl](http://php.net/manual/en/book.intl.php){:target="_blank"}
* [json](http://php.net/manual/en/ref.json.php){:target="_blank"}
* [mbstring](http://php.net/manual/en/book.mbstring.php){:target="_blank"}
* [mcrypt](http://php.net/manual/en/book.mcrypt.php){:target="_blank"} (for PHP 7.1 and earlier only)
* [mysql](http://php.net/manual/en/set.mysqlinfo.php){:target="_blank"}
* [xml](http://php.net/manual/en/book.xml.php){:target="_blank"}
* [zip](http://php.net/manual/en/book.zip.php){:target="_blank"}

### Set up PHP memory limit {#cloud-first-php}

When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from {{site.data.var.ee}}. For example, certain actions (like debugging) require a larger PHP `memory_limit` than most PHP distributions provide by default.

To set `memory_limit`:

Before working with your {{site.data.var.ece}} project, make sure you set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

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
	*	Nginx: `service nginx restart`

## Database (local) {#database}

You have multiple options for databases to use for your local. One database option you may want to consider is MariaDB. The {{site.data.var.ee}} environments use [MariaDB](https://mariadb.org/){:target="_blank"}, with a [Galera Cluster](http://galeracluster.com/){:target="_blank"} with triple redundancy in the Production environment.

Regardless of database, for **Pro plans** you need to modify the `auto_increment_increment` value.

<div class="bs-callout bs-callout-warning" markdown="1">
For **Pro plans**, the Production environment has a three node infrastructure that uses auto-incrementing by 3 for all data IDs. Do not develop using hard-coded database IDs in your development. Due to the incremented data IDs, the referenced data will differ across the three nodes in Production.
</div>

These example instructions detail how to install and create a MariaDB database for Magento on your local:

1. Use this command to create the database:

		apt-get install mariadb-server
2. Secure the database with the following command and completing all prompts:

		mysql_secure_installation
3. Access the MariaDB database.
4. Grant all privileges to the Magento account you created for the local:

		grant all privileges on <database> to '<account>'@'localhost' identified by '<password>';
5. Finally create the database:

		create database magento;
		use magento;
6. Exit when done.

### Pro: Set up the auto-increment for MariaDB {#cloud-mysql}

You need to set an auto-increment value for the MariaDB installation.

1.	As a user with `root` privileges, open `/etc/mysql/mariadb.conf.d/50-server.cnf` in a text editor.
2.	In the Basic Settings section, add `auto_increment_increment = 3`.
3.	Restart the service: `service mysql restart`.

### Pro: Set up the auto-increment for MySQL {#cloud-mysql}

The MySQL configuration parameter [`auto_increment_increment`](http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html){:target="_blank"} is set to `1` by default in a local MySQL installation. You need to change this value to `3`.  The {{site.data.var.ee}} database cluster includes 3 database implementations. The increment ensures data is unique across all databases for consistent data in the High Availability structure.

To avoid issues, we recommend you set `auto_increment_increment=3`.

First, view the current value and verify if it is set to 3:

	mysqladmin variables -u <root username> -p | grep 'auto_increment'

If necessary, set `auto_increment_increment` to 3:

1.	As a user with `root` privileges, open `/etc/my.cnf` in a text editor.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
  		On Ubuntu 16, the path is typically `/etc/mysql/mysql.conf.d/mysqld.cnf`.
	</div>

2.	Add or edit the following line in the `[mysqld]` section:

		auto_increment_increment=3

	{{site.data.var.ece}} supports a High Availability configuration. This setting increments the database IDs in increments of three to ensure row uniqueness for Galera databases on each of the three HA nodes in production.

3.	Restart MySQL:

		service mysqld restart

## Magento Cloud CLI (local) {#cloud-ssh-cli-cli-install}

The Magento Cloud command-line interface (CLI) tool helps you manage your projects and code branches on {{site.data.var.ece}}. For a list of available commands, see [Common Magento CLI commands]({{ page.baseurl }}/cloud/reference/cli-ref-topic.html).

These instructions discuss installation using commands for a Unix environment. For Windows, we recommend using [Cygwin](https://www.cygwin.com/){:target="_blank"} or Git Bash.

To install the Magento Cloud CLI:

1.	Log in to your local development machine or switch to the [Magento file system owner]({{ page.baseurl }}/cloud/before/before-workspace-file-sys-owner.html).

2.	Change to a directory to which the {% glossarytooltip 5e7de323-626b-4d1b-a7e5-c8d13a92c5d3 %}Magento file system owner{% endglossarytooltip %} has write access, such as the home directory.

3.	Enter the following command:

		curl -sS https://accounts.magento.cloud/cli/installer | php

4.	After the CLI downloads, an operating system-specific command displays.

	For example, on Ubuntu and CentOS, the command is similar to:

		source $HOME/.bashrc

	For more information about the user shell profile, see [.bash_profile vs .bashrc](https://apple.stackexchange.com/questions/51036/what-is-the-difference-between-bash-profile-and-bashrc){:target="_blank"}

	You can also add the `$HOME/.magento-cloud/bin` to the Magento user's `PATH`:

		export PATH=$PATH:$HOME/.magento-cloud/bin

	Consult operating system documentation for details.

5.	Verify the `magento-cloud` command is in your path by entering the following command:

		magento-cloud list

## Additional requirements for Magento Commerce {#commerce}

The requirements listed in this topic are specific to {{site.data.var.ece}} environments. You will also install {{site.data.var.ee}} on your VM or Docker container. For that installation, you should also review the following:

* [{{site.data.var.ee}} requirements]({{ page.baseurl }}/install-gde/system-requirements2.html)
* [(Integrator) Integrator installation]({{ page.baseurl }}/install-gde/composer.html)

## Additional options

You can also install additional [optional software]({{ page.baseurl }}/install-gde/prereq/optional.html). These packages should be installed on the local VM.

#### Next step:
[Enable SSH keys]({{ page.baseurl }}/cloud/before/before-workspace-ssh.html)
