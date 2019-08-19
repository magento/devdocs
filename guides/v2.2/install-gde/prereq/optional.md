---
group: installation-guide
subgroup: Prerequisites
title: Optional software
menu_title: Optional software
menu_order: 400
functional_areas:
  - Install
  - System
  - Setup
---

## Magento optional software {#install-optional-intro}

We strongly recommend you install NTP because otherwise, cron-related tasks might not perform properly. (Server dates could be in the past or future, for example.)

The other optional utilities discussed in this topic might assist you with your installation; however, they are not required to install or use Magento.

## Installing and Configuring Network Time Protocol (NTP) {#install-optional-ntp}
[NTP](http://www.ntp.org) enables servers to synchronize their system clocks using [globally available pool servers](http://www.pool.ntp.org/en){:target="_blank"}. Magento recommends you use NTP servers you trust, whether they are dedicated hardware solutions your internal network or external, public servers.

If you are deploying Magento on multiple hosts, NTP is a simple way to guarantee their clocks are all synchronized, no matter what time zone the servers are in. Also, cron-related tasks (such as indexing and transactional e-mails) depend on the server clock being accurate.

See one of the following sections:

*	[Install and configure NTP on Ubuntu](#install-optional-ntp-ubuntu)
*	[Install and configure NTP on CentOS](#install-optional-ntp-centos)
*	[Use NTP pool servers](#install-optional-ntp-servers)

### Install and configure NTP on Ubuntu {#install-optional-ntp-ubuntu}

Enter the following command to install NTP:

	apt-get install ntp

Continue with [Use NTP pool servers](#install-optional-ntp-servers)

### Install and configure NTP on CentOS {#install-optional-ntp-centos}

To install and configure NTP:

1.	Enter the following command to find the appropriate NTP software:

		yum search ntp

2.	Select a package to install. For example, `ntp.x86_64`.

2.	Install the package.

		yum -y install ntp.x86_64

3.	Enter the following command so that NTP starts when the server starts.

		chkconfig ntpd on

3.	Continue with the next section.

### Use NTP pool servers {#install-optional-ntp-servers}

Selecting pool servers is up to you. If you use NTP pool servers, ntp.org recommends you use [pool servers](http://www.pool.ntp.org/en){:target="_blank"} that are close to your servers' time zone as discussed on the [NTP pool project help page](http://www.pool.ntp.org/en/use.html){:target="_blank"}. If you have a private NTP server that is available to all hosts in your Magento deployment, you can use that server instead.

1.	Open `/etc/ntp.conf` in a text editor.

2.	Look for lines similar to the following:

		server 0.centos.pool.ntp.org
		server 1.centos.pool.ntp.org
		server 2.centos.pool.ntp.org

3.	Replace those lines or add additional lines that specify your NTP pool server or other NTP servers. It's a good idea to specify more than one.

4.	An example of using three United States-based NTP servers follows:

		server 0.us.pool.ntp.org
		server 1.us.pool.ntp.org
		server 2.us.pool.ntp.org

5.	Save your changes to `/etc/ntp.conf` and exit the text editor.

4.	Restart the service.

	Ubuntu: `service ntp restart`

	CentOS: `service ntpd restart`

4.	Enter `date` to check the server's date.

	If the date is incorrect, make sure the NTP client port (typically, UDP 123) is open in your firewall.

	Try the `ntpdate _[pool server hostname]_` command. If it fails, search for the error it returns.

	If all else fails, try rebooting the server.

## Create phpinfo.php {#install-optional-phpinfo}
[`phpinfo.php`](http://php.net/manual/en/function.phpinfo.php){:target="_blank"} displays a large amount of information about [PHP](https://glossary.magento.com/php) and its extensions.

{:.bs-callout .bs-callout-info}
Use `phpinfo.php` in a development system _only_. It can be a security issue in production.

Add the following code anywhere in your web server's docroot:

	<?php
	// Show all information, defaults to INFO_ALL
	phpinfo();

For more information, see the [phpinfo manual page](http://php.net/manual/en/function.phpinfo.php){:target="_blank"}.

To view the results, enter the following [URL](https://glossary.magento.com/url) in your browser's location or address field:

	http://<web server host or IP>/phpinfo.php

If a 404 (Not Found) error displays, check the following:

*	Start the web server if necessary.
*	Make sure your firewall allows traffic on port 80.

	[Help for Ubuntu](https://help.ubuntu.com/community/UFW){:target="_blank"}

	[Help for CentOS](http://wiki.centos.org/HowTos/Network/IPTables){:target="_blank"}

## Install phpmyadmin {#install-optional-phpmyadmin}
`phpmyadmin` is an easy-to-use, free database administration utility. You can use it to check and manipulate the contents of your database. You must log in to `phpmyadmin` as the MySQL database administrative user.

For more information about `phpmyadmin`, see the [phpmyadmin home page](http://www.phpmyadmin.net/home_page/index.php){:target="_blank"}.

For more detailed information about installation, see the [phpmyadmin installation documentation](http://docs.phpmyadmin.net/en/latest/setup.html#quick-install){:target="_blank"}.

{:.bs-callout .bs-callout-info}
Use phpmyadmin in a development system _only_. It can be a security issue in production.

## Install phpmyadmin on Ubuntu {#install-optional-phpmyadmin-ubuntu}

To install phpmyadmin on Ubuntu:

1.	Use the following command:

		apt-get install phpmyadmin

2.	Follow the prompts on your screen to complete the installation.

3.	To use phpmyadmin, enter the following URL in your browser's address or location field:

		http://<web server host or IP>/phpmyadmin

4.	When prompted, log in using your MySQL database `root` or administrative user's username and password.

## Install phpmyadmin on CentOS {#install-optional-phpmyadmin-centos}

To install phpmyadmin on CentOS:

1.	Download the epel RPM for the version of CentOS you're using. A sample follows.

		cd /tmp
		wget http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
		rpm -ivh epel-release-6-8.noarch.rpm

2.	Install `phpmyadmin` as follows:

		yum -y install phpmyadmin

3.	Authorize access to phpmyadmin from your machine's IP address.

	Open the following file for editing:

		vim /etc/httpd/conf.d/phpMyAdmin.conf

3.	Replace the following IP address with your IP address

		Require ip localhost

	For example,

		Require ip 192.51.100.101

4.	Replace the following IP with your IP address:

		Allow from localhost

	For example,

		Allow from 192.51.100.101

5.	Save your changes to `/etc/httpd/conf.d/phpMyAdmin.conf` and exit the text editor.

6.	Restart Apache.

		service httpd Restart

7.	To use phpmyadmin, enter the following command in your browser's address or location field:

		http://<web server host or IP>/phpmyadmin

8.	When prompted, log in using your MySQL database `root` or administrative user's username and password.

#### Related topics:

*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)
*	[PHP 5.5, 5.6, or 7.0&mdash;CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)
*	[MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[How to get the Magento software]({{ page.baseurl }}/install-gde/bk-install-guide.html)
