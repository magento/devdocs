---
layout: default
group: install_pre
subgroup: Prerequisites
title: nginx
menu_title: nginx
menu_order: 25
version: 2.1
github_link: install-gde/prereq/nginx.md
---

Magento supports nginx 1.8 (or the [latest mainline version](http://nginx.org/en/linux_packages.html#mainline){:target="&#95;blank}). You must also install the latest version of `php-fpm`.

Installation instructions vary based on which operating system you're using:

*   [Ubuntu 16]({{page.baseurl}}install-gde/prereq/nginx.hmtl/#ubuntu-16)
*   [CentOS 7]({{page.baseurl}}install-gde/prereq/nginx.hmtl/#centos-7)

## Help if you're just starting out {#apache-help-beginner}
If you're new to all this and need some help getting started, we suggest the following:

*	[Is the Magento software installed already?]({{page.baseurl}}install-gde/basics/basics_magento-installed.html)
*	[What is the software that the Magento server needs to run?]({{page.baseurl}}install-gde/basics/basics_software.html)
*	[What operating system is my server running?]({{page.baseurl}}install-gde/basics/basics_os-version.html)
*	[How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{page.baseurl}}install-gde/basics/basics_login.html)

## Ubuntu 16
The following section describes how to install Magento 2.x on Ubuntu 16 using nginx, PHP, and MySQL.

### Install nginx

	apt-get -y install nginx

After completing the following sections and [installing Magento]({{page.baseurl}}install-gde/prereq/nginx.html#install-magento2-ubuntu), we'll use a sample configuration file to [configure nginx]({{page.baseurl}}install-gde/prereq/nginx.hmtl#configure-nginx-ubuntu).

### Install and configure php-fpm
Magento requires several [PHP extensions]({{page.baseurl}}install-gde/prereq/php-ubuntu.html) to function properly. In addition to these extensions, you must also install and configure the `php-fpm` extension if you're using nginx.

To install and configure `php-fpm`:

1. Install `php-fpm` and `php-cli`:

		apt-get -y install php7.0-fpm php7.0-cli

2. Open the `php.ini` files in an editor:

		vim /etc/php/7.0/fpm/php.ini
		vim /etc/php/7.0/cli/php.ini

3. Edit both files to match the following lines:

		memory_limit = 2G
		max_execution_time = 1800
		zlib.output_compression = On

4. Save and exit the editor.

5. Restart the `php-fpm` service:

		systemctl restart php7.0-fpm

### Install and configure MySQL
Refer to [MySQL]({{page.baseurl}}install-gde/prereq/mysql.html) for more information.

### Install and configure Magento2 {#install-magento2-ubuntu}
There are several ways to download the Magento software, including:

*   [Download an archive]({{page.baseurl}}install-gde/prereq/zip_install.html)

*   [Get the Composer metapackage]({{page.baseurl}}install-gde/prereq/integrator_install.html)

*   [Clone the git repository]({{page.baseurl}}install-gde/prereq/dev_install.html)

For this example, we'll download and extract an archive.

2. Change to the web server docroot directory, or to a directory you’ve configured as a virtual host docroot. For this example, we're using the Ubuntu default `/var/www/html`.

		cd /var/www/html

3. Download the Magento archive, extract it, and rename the folder `magento2/`:

		wget https://github.com/magento/magento2/archive/2.1.tar.gz
		tar -xzvf 2.1.tar.gz
		mv magento2-2.1/ magento2/

5. [Set directory ownership and file permissions]({{page.baseurl}}install-gde/prereq/file-system-perms.html).

		cd /var/www/html/magento2
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :www-data .
		chmod u+x bin/magento

5. Install Composer globally. You'll need Composer to update dependencies before installing Magento:

		curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/bin --filename=composer

6. Update Magento dependencies:

		cd /var/www/html/magento2
		composer install -v

7. When prompted, enter your [Magento authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html).

8. Install Magento from the [command line]({{page.baseurl}}install-gde/install/cli/install-cli.html).

		cd /var/www/html/magento2/bin
		./magento setup:install --base-url=http://www.magento-dev.com/ --db-host=localhost --db-name=magento --db-user=magento --db-password=magento --admin-firstname=admin --admin-lastname=admin --admin-email=admin@admin.com --admin-user=admin --admin-password=admin123 --language=en_US --currency=USD --timezone=America/Chicago --use-rewrites=1

    Replace `http://www.magento-dev.com` with your domain name.

    <div class="bs-callout bs-callout-info" markdown="1">
EDITOR'S NOTE: Explain issues with Web Setup Wizard.
    </div>

9. Switch to developer mode:

		cd /var/www/html/magento2/bin
		./magento deploy:mode:set developer

		<div class="bs-callout bs-callout-info" markdown="1">
EDITOR'S NOTE: Why am I having to do this manually? There's a directive for it i the magento.conf file.
    </div>

### Configure nginx {#configure-nginx-ubuntu}
We recommend configuring nginx using the `nginx.conf.sample` configuration file provided in the Magento installation directory and an nginx virtual host.

These instructions assume you're using the Ubuntu default location for the nginx virtual host (e.g., `/etc/nginx/sites-available`) and Ubuntu default docroot (e.g., `/var/www/html`), however, you can change these locations to suit your environment.

1. Create a new virtual host for your Magento site:

		vim /etc/nginx/sites-available/magento

2. Add the following configuration:

		upstream fastcgi_backend {
			server  unix:/run/php/php7.0-fpm.sock;
		}

		server {

			listen 80;
			server_name www.magento.com;
			set $MAGE_ROOT /var/www/html/magento2;
			set $MAGE_MODE developer;
			include /var/www/html/magento2/nginx.conf.sample;
		}

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
The `include` directive must point to the sample nginx configuration file in your Magento installation directory.
    </div>

3. Replace `www.magento.com` with your domain name. This must match the base URL you specified when installing Magento.

4. Save and exit the editor.

5. Activate the newly created virtual host by creating a symlink to it in the `/etc/nginx/sites-enabled` directory:

		ln -s /etc/nginx/sites-available/magento /etc/nginx/sites-enabled

6. Verify that the syntax is correct:

		nginx -t

7. Restart nginx:

		systemctl restart nginx

### Verify the installation
Open a web browser and navigate to your site's base URL to [verify the installation.]({{page.baseurl}}install-gde/install/verify.html)

## CentOS 7
The following section describes how to install Magento 2.x on CentOS 7 using nginx, PHP, and MySQL.

### Install nginx

	yum -y install epel-release
	yum -y install nginx

After installation is complete, start nginx and configure it to start at boot time:

	systemctl start nginx
	systemctl enable nginx

After completing the following sections and [installing Magento]({{page.baseurl}}install-gde/prereq/nginx.html#install-and-configure-magento2-centos), we'll use a sample configuration file to [configure nginx]({{page.baseurl}}install-gde/prereq/nginx.html#configure-nginx-centos).

### Install and configure php-fpm
Magento requires several [PHP extensions]({{page.baseurl}}install-gde/prereq/php-centos.html) to function properly. In addition to these extensions, you must also install and configure the `php-fpm` extension if you're using nginx.

1. Install `php-fpm`:

		yum -y install php70w-fpm

2. Open the `/etc/php.ini` file in an editor.

3. 	Uncomment the `cgi.fix_pathinfo` line and change the value to `0`.

4. Edit the file to match the following lines:

		memory_limit = 512M
		max_execution_time = 1800
		zlib.output_compression = On

5. Uncomment the session path directory and set the path:

		session.save_path = "/var/lib/php/session"

6. Save and exit the editor.

7. Open `/etc/php-fpm.d/www.conf` in an editor.

8. Edit the file to match the following lines:

		user = nginx
		group = nginx
		listen = /run/php-fpm/php-fpm.sock
		listen.owner = nginx
		listen.group = nginx
		listen.mode = 0660

9. Uncomment the environment lines:

		env[HOSTNAME] = $HOSTNAME
		env[PATH] = /usr/local/bin:/usr/bin:/bin
		env[TMP] = /tmp
		env[TMPDIR] = /tmp
		env[TEMP] = /tmp

10. Save and exit the editor.

11. Create a new directory for the PHP session path and change the owner to the `apache` user and group:

		mkdir -p /var/lib/php/session/
		chown -R apache:apache /var/lib/php/

12. Create a new directory for the PHP session path and change the owner to the `apache` user and group:

		mkdir -p /run/php-fpm/
		chown -R apache:apache /run/php-fpm/

13. Start the `php-fpm` service and configure it to start at boot time:

		systemctl start php-fpm
		systemctl enable php-fpm

14. Verify that the `php-fpm` service is running:

		netstat -pl | grep php-fpm.sock

### Install and configure MySQL
Refer to [MySQL]({{page.baseurl}}install-gde/prereq/mysql.html) for more information.

### Install and configure Magento2 {#install-magento2-centos}
There are several ways to download the Magento software, including:

*   [Download an archive]({{page.baseurl}}install-gde/prereq/zip_install.html)

*   [Get the Composer metapackage]({{page.baseurl}}install-gde/prereq/integrator_install.html)

*   [Clone the git repository]({{page.baseurl}}install-gde/prereq/dev_install.html)

For this example, we'll download and extract an archive.

1. Change to the web server docroot directory, or to a directory you’ve configured as a virtual host docroot. For this example, we're using the CentoOS default `/usr/share/nginx/html`.

		cd /usr/share/nginx/html

2. Download the Magento archive, extract it, and rename the folder `magento2/`:

		wget https://github.com/magento/magento2/archive/2.1.tar.gz
		tar -xzvf 2.1.tar.gz
		mv magento2-2.1/ magento2/

3. [Set directory ownership and file permissions]({{page.baseurl}}install-gde/prereq/file-system-perms.html).

		cd /usr/share/nginx/html/magento2
		find var vendor pub/static pub/media app/etc -type f -exec chmod g+w {} \;
		find var vendor pub/static pub/media app/etc -type d -exec chmod g+ws {} \;
		chown -R :apache .
		chmod u+x bin/magento

4. Install Composer globally. You'll need Composer to update dependencies before installing Magento:

		curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/bin --filename=composer

5. Update Magento dependencies:

		cd /usr/share/nginx/html/magento2
		composer install

6. If prompted, enter your [Magento authentication keys]({{page.baseurl}}install-gde/prereq/connect-auth.html).

7. Install Magento from the [command line]({{page.baseurl}}install-gde/install/cli/install-cli.html).

		cd /usr/share/nginx/html/magento2/bin
		./magento setup:install --base-url=http://www.magento-dev.com/ \
		--db-host=localhost --db-name=magento --db-user=magento --db-password=magento \
		--admin-firstname=Magento --admin-lastname=User --admin-email=user@example.com \
		--admin-user=admin --admin-password=admin123 --language=en_US \
		--currency=USD --timezone=America/Chicago --use-rewrites=1

    Replace `http://www.magento-dev.com` with your domain name.

    <div class="bs-callout bs-callout-info" markdown="1">
EDITOR'S NOTE: Explain issues with Web Setup Wizard.
    </div>

8. Switch Magento to developer mode:

		cd /usr/share/nginx/html/magento2/bin
		./magento deploy:mode:set developer

    <div class="bs-callout bs-callout-info" markdown="1">
EDITOR'S NOTE: Why am I having to do this manually. There's a directive for it in the magento.conf file.
    </div>

### Configure nginx {#configure-nginx-centos}
We recommend configuring nginx using the `nginx.conf.sample` configuration file provided in the Magento installation directory and an nginx virtual host.

These instructions assume you're using the CentOS default location for the nginx virtual host (e.g., `/etc/nginx/conf.d`) and default docroot (e.g., `/usr/share/nginx/html`), however, you can change these locations to suit your environment.

1. Create a new virtual host for your Magento site:

		vim /etc/nginx/conf.d/magento.conf

2. Add the following configuration:

		upstream fastcgi_backend {
			server  unix:/run/php-fpm/php-fpm.sock;
		}

		server {

			listen 80;
			server_name www.magento-dev.com;
			set $MAGE_ROOT /usr/share/nginx/html/magento2;
			set $MAGE_MODE developer;
			include /usr/share/nginx/html/magento2/nginx.conf.sample;
		}

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
The `include` directive must point to the sample nginx configuration file in your Magento installation directory.
    </div>

3. Replace `www.magento-dev.com` with your domain name.

4. Save and exit the editor.

5. Verify that the syntax is correct:

		nginx -t

6. Restart nginx:

		systemctl restart nginx

### Configure SELinux and Firewalld
SELinux is enabled by default on CentOS 7. Use the following command to see if it's running:

	sestatus

To configure SELinux and firewalld:

1. Install SELinux management tools:

		yum -y install policycoreutils-python

2. Run the following commands to change the security context for the Magento installation directory:


		semanage fcontext -a -t httpd_sys_rw_content_t '/usr/share/nginx/html/magento2/app/etc(/.*)?'
		semanage fcontext -a -t httpd_sys_rw_content_t '/usr/share/nginx/html/magento2/var(/.*)?'
		semanage fcontext -a -t httpd_sys_rw_content_t '/usr/share/nginx/html/magento2/pub/media(/.*)?'
		semanage fcontext -a -t httpd_sys_rw_content_t '/usr/share/nginx/html/magento2/pub/static(/.*)?'
		restorecon -Rv '/usr/share/nginx/html/magento2/'

3. Install the firewalld package:

		yum -y install firewalld

4. Start the firewall service and configure it to start at boot time:

		systemctl start firewalld
		systemctl enable firewalld

5. Run the following commands to open ports for HTTP and HTTPS so you can access the Magento base URL from a web browser:

		firewall-cmd --permanent --add-service=http
		firewall-cmd --permanent --add-service=https
		firewall-cmd --reload

### Verify the installation
Open a web browser and navigate to your site's base URL to [verify the installation.]({{page.baseurl}}install-gde/install/verify.html)

#### Related topics:
*	[PHP 5.5, 5.6, or 7.0&mdash;Ubuntu]({{page.baseurl}}install-gde/prereq/php-ubuntu.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;CentOS]({{page.baseurl}}install-gde/prereq/php-centos.html)
*	[MySQL]({{page.baseurl}}install-gde/prereq/mysql.html)
* [Configuring security options]({{page.baseurl}}install-gde/prereq/security.html)
*	[Installing optional software]({{page.baseurl}}install-gde/prereq/optional.html)
*	[Determine your installation or upgrade path]({{ page.baseurl }}install-gde/bk-install-guide.html)
