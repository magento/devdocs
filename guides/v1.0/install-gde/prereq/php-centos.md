---
layout: default
group: install
subgroup: Prerequisites
title: PHP 5.4 or 5.5&mdash;CentOS
menu_title: PHP 5.4 or 5.5&mdash;CentOS
menu_order: 4
github_link: install-gde/prereq/php-centos.md
---

<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#centos-verify-php">Verify PHP is installed</a>
*	<a href="#instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</a>
*	<a href="#instgde-prereq54-php-install-centos">PHP 5.4 on CentOS</a>
*	<a href="#instgde-prereq-php-prereq-centos">Installing required PHP extensions on CentOS</a>
*	<a href="#instgde-prereq-timezone">Setting the PHP timezone and memory limit</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>

Magento 2 requires PHP 5.4.11 or later or PHP 5.5.x.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento 2 does <em>not</em> support PHP 5.6.</p></span>
</div>

<h2 id="centos-verify-php">Verify PHP is installed</h2>

PHP 5.3 is the default PHP version on CentOS 6.x distributions. For best results, make sure PHP 5.3 is already installed and, if not, install it before upgrading to PHPH 5.4 or 5.5.

To verify if PHP is installed already, enter `php -v`. If PHP is *not* installed, install it by entering the following command:

<pre>yum -y install php php-xml</pre>

<h2 id="instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</h2>

To upgrade to PHP 5.5:

There is more than one way to upgrade CentOS 6.5 to PHP 5.5; the following is a suggestion only. Consult a reference for additional options.

Enter the following commands in the order shown.

	cd /tmp
	rpm -Uvh https://mirror.webtatic.com/yum/el6/latest.rpm
	yum -y remove php-common-5.3.3-40.el6_6.x86_64
	yum -y install php55w php55w-opcache

Restart Apache: `service httpd restart`

<h2 id="instgde-prereq-php55-install-centos">PHP 5.4 on CentOS</h2>
There is more than one way to upgrade CentOS 6.x to PHP 5.4; the following is a suggestion only. Consult a reference for additional options.


To upgrade to PHP 5.4:

1.	Enter the following commands:

	<pre>cd /tmp
rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
yum -y --enablerepo=remi install httpd php php-common</pre>

2.	To verify PHP 5.4 is installed, enter `php -v`. The command displays results similar to the following:

	<pre>PHP 5.4.33 (cli) (built: Sep 20 2014 16:20:03)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

3.	Restart Apache: `service httpd restart`

The following resources are also available:

*	<a href="http://kb.parallels.com/en/115875" target="_blank">kb.parallels</a>
*	<a href="http://stackoverflow.com/questions/21502656/upgrading-php-on-centos-6-5-final" target="_blank">stackoverflow</a>
*	<a href="http://rpms.famillecollet.com/" target="_blank">remi repository</a>

<h2 id="instgde-prereq-php-prereq-centos">Installing required PHP extensions on CentOS</h2>

PHP 5.5:

	yum -y install php55w-xml php55w-mcrypt php55w-gd php55w-devel php55w-mysql php55w-mbstring

PHP 5.4:

	yum -y install --enablerepo=remi php-mcrypt gd gd-devel php-gd php-mysql

<h2 id="instgde-prereq-timezone">Setting the PHP timezone and memory limit</h2>

Before you install Magento, you might need to set the system time zone for PHP; otherwise, errors like the following display during the installation and time-related operations like cron might not work:

`PHP Warning:  date(): It is not safe to rely on the system's timezone settings.` [more messages follow]

We also recommend you increase the PHP memory limit to at least 512MB for normal operation or 2GB for testing.

To set your time zone and memory limit:

1.	Locate your server's time zone in the available <a href="http://php.net/manual/en/timezones.php" target="_blank">time zone settings</a>.
2.	Locate `php.ini` by entering the following command:

	`php -i | grep "Loaded Configuration File"`
	
	Typical locations follow:
	
	Ubuntu: `/etc/php5/cli/php.ini`
	
	CentOS: `/etc/php.ini`
	
3.	Open `php.ini` in a text editor.

4.	Locate the following setting and uncomment it if necessary:

	`date.timezone =`
	
5.	Add the time zone setting you found in step 1.

2.	Change `memory_limit` to:

	`memory_limit = 512M` or more for normal operation
	
	`memory_limit = 2G` or more for testing
	
3.	Save your changes and exit the text editor. 

4.	Restart Apache:

	Ubuntu: `service apache2 restart`
	
	CentOS: `service httpd restart`
	

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.4&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Updating installation dependencies</a>