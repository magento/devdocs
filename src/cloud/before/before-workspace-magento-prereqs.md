---
group: cloud-guide
title: Install Magento prerequisites
redirect_from:
  - /cloud/before/before-workspace-php.html
  - /cloud/before/before-workspace-cli.html
functional_areas:
  - Cloud
  - Setup
  - Configuration
---

{:.ref-header}
Previous step

[Prepare for local environment setup]({{ site.baseurl }}/cloud/before/before-workspace.html)

Install the following software packages and tools on your local to prepare for Magento code development. If you already have these packages installed, check for any recommendations or notes and continue to the next step.

To begin, install and set up a VM on your host computer (Windows, Mac OS, Linux-based system). A VM gives you an environment to install a different Operating System, tools, software, a database, and Magento without requiring a customized system. You only need to install the VM software on your host. All other software can be installed and configured on your VM.

When you install and configure software on your local (or VM), you will first SSH into the VM and then complete installations. Follow the SSH instructions and commands for the VM software you install. For example, you would install PHP, Nginx, and database on the VM via SSH.

 {:.bs-callout-info}
Magento documentation provides installation instructions for installing software on CentOS or Ubuntu only. For installation information on Windows or MacOS, consult a community resource.

## Virtual machine or container (host) {#vm}

To best develop and manage your host, we recommend using a virtual machine. The VM encapsulates your code, web services, testing and supports a Unix-based environment. Select a virtual system you prefer.

For your VM, we recommend installing one of the following:

*  [Vagrant](https://www.vagrantup.com/docs/) for a virtual machine
*  [Docker](https://docs.docker.com/) for a container

When using Vagrant, we also recommend the package [hostmanager](https://github.com/devopsgroup-io/vagrant-hostmanager) and using [VirtualBox](https://www.virtualbox.org/wiki/Documentation) to manage the environment. VirtualBox extends support and features across all OS and platforms to create and manage multiple VMs and operating systems on your local.

## Development tools {#devtools}

*  [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) - Provides code branching and management for accessing {{site.data.var.ee}} and your code repositories. Use Git command-line commands or applications of your choice to work with Git. You can install this on your local VM or on your host. For more information, see [How Cloud uses Git]({{ site.baseurl }}/cloud/reference/git-integration.html).
*  [Composer](https://getcomposer.org/download/) - Used for dependency management. Composer enables us to manage the Magento components and their dependencies. Install on your local VM. For more information, see [How Cloud uses Composer]({{ site.baseurl }}/cloud/reference/cloud-composer.html).

## Web server (local) {#webserver}

We strongly recommend installing [Nginx]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/nginx.html) for your web server on your local. While {{site.data.var.ee}} supports [Apache]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/apache.html), {{site.data.var.ece}} uses Nginx. To have your local as close to cloud installations as possible, install and configure Nginx.

## PHP (local) {#php}

Install [PHP](https://glossary.magento.com/php) on your local workstation. For information on installing PHP, see [PHP Settings]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/php-settings.html). For instructions for another OS, see the [PHP documentation](http://php.net/manual/en/install.php).

The following packages may also be helpful for your PHP installation:

*  [bcmath](http://php.net/manual/en/book.bc.php)
*  [curl](http://php.net/manual/en/book.curl.php)
*  ext-dom
*  [fpm](https://php-fpm.org/)
*  [gd](http://php.net/manual/en/book.image.php)
*  [intl](http://php.net/manual/en/book.intl.php)
*  [json](http://php.net/manual/en/ref.json.php)
*  [mbstring](http://php.net/manual/en/book.mbstring.php)
*  [mcrypt](http://php.net/manual/en/book.mcrypt.php) (for PHP 7.1 and earlier only)
*  [mysql](http://php.net/manual/en/set.mysqlinfo.php)
*  [xml](http://php.net/manual/en/book.xml.php)
*  [zip](http://php.net/manual/en/book.zip.php)

### Set up PHP memory limit {#cloud-first-php}

When you're working with the Magento Cloud CLI, local environment settings come from the machine on which you're working, not from {{site.data.var.ee}}. For example, certain actions (like debugging) require a larger PHP `memory_limit` than most PHP distributions provide by default.

Before working with your {{site.data.var.ece}} project, set the PHP `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.

{:.procedure}
To set a memory limit:

1. Find your `php.ini` file using the following command:

   ```bash
   php --ini
   ```

   Use the value of `Loaded Configuration File`.

1. As a user with `root` privileges, open `php.ini` in a text editor.
1. Change the value of `memory_limit` to at least `1G` for normal use or at least `2G` for debugging.
1. Save your changes to `php.ini` and exit the text editor.
1. Restart your web server:

   *  Apache:
      *  CentOS: `service httpd restart`
      *  Ubuntu: `service apache2 restart`
   *  Nginx: `service nginx restart`

## Database (local) {#database}

You have multiple options for databases to use for your local. One database option you may want to consider is MariaDB. The {{site.data.var.ee}} environments use [MariaDB](https://mariadb.org/), with a [Galera Cluster](http://galeracluster.com/) with triple redundancy in the Production environment.

Regardless of database, for **Pro plans** you need to modify the `auto_increment_increment` value.

{:.bs-callout-warning}
For **Pro plans**, the Production environment has a three node infrastructure that uses auto-incrementing by 3 for all data IDs. Do not develop using hard-coded database IDs in your development. Due to the incremented data IDs, the referenced data will differ across the three nodes in Production.

{:.procedure}
To install and create a MariaDB database for Magento on your local:

1. Use this command to create the database:

   ```bash
   apt-get install mariadb-server
   ```

1. Secure the database with the following command and completing all prompts:

   ```bash
   mysql_secure_installation
   ```

1. Access the MariaDB database.
1. Grant all privileges to the Magento account you created for the local:

   ```bash
   grant all privileges on <database> to '<account>'@'localhost' identified by '<password>';
   ```

1. Finally create the database:

   ```bash
   create database magento;
   use magento;
   ```

1. Exit when done.

### Pro: Set up the auto-increment for MariaDB

You need to set an auto-increment value for the MariaDB installation.

1. As a user with `root` privileges, open `/etc/mysql/mariadb.conf.d/50-server.cnf` in a text editor.
1. In the Basic Settings section, add `auto_increment_increment = 3`.
1. Restart the service: `service mysql restart`.

### Pro: Set up the auto-increment for MySQL {#cloud-mysql}

The MySQL configuration parameter [`auto_increment_increment`](http://dev.mysql.com/doc/refman/5.6/en/server-system-variables.html) is set to `1` by default in a local MySQL installation. You need to change this value to `3`.  The {{site.data.var.ee}} database cluster includes 3 database implementations. The increment ensures data is unique across all databases for consistent data in the High Availability structure.

To avoid issues, we recommend you set `auto_increment_increment=3`.

First, view the current value and verify if it is set to 3:

```bash
mysqladmin variables -u <root username> -p | grep 'auto_increment'
```

{:.procedure}
To set `auto_increment_increment` to 3:

1. As a user with `root` privileges, open `/etc/my.cnf` in a text editor.

    {:.bs-callout-info}
   On Ubuntu 16, the path is typically `/etc/mysql/mysql.conf.d/mysqld.cnf`.

1. Add or edit the following line in the `[mysqld]` section:

   ```conf
   auto_increment_increment=3
   ```

   {{site.data.var.ece}} supports a High Availability configuration. This setting increments the database IDs in increments of three to ensure row uniqueness for Galera databases on each of the three HA nodes in production.

1. Restart MySQL:

   ```bash
   service mysqld restart
   ```

## Magento Cloud CLI {#cloud-ssh-cli-cli-install}

To install the `magento-cloud` CLI , see the [Magento Cloud CLI reference]({{ site.baseurl }}/cloud/reference/cli-ref-topic.html).

## Additional requirements for Magento Commerce {#commerce}

The requirements listed in this topic are specific to {{site.data.var.ece}} environments. You will also install {{site.data.var.ee}} on your VM or Docker container. For that installation, you should also review the following:

*  [{{site.data.var.ee}} requirements]({{ site.baseurl }}/guides/v2.3/install-gde/system-requirements.html)
*  [(Integrator) Integrator installation]({{ site.baseurl }}/guides/v2.3/install-gde/composer.html)

## Additional options

You can also install additional [optional software]({{ site.baseurl }}/guides/v2.3/install-gde/prereq/optional.html). These packages should be installed on the local VM.

{:.ref-header}
Next step

[Enable SSH keys]({{ site.baseurl }}/cloud/before/before-workspace-ssh.html)
