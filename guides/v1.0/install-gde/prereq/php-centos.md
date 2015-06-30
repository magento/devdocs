---
layout: default
group: install
subgroup: Prerequisites
title: PHP 5.5 or 5.6&mdash;CentOS
menu_title: PHP 5.5 or 5.6&mdash;CentOS
menu_order: 4
github_link: install-gde/prereq/php-centos.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->


<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#php-centos-help-beginner">Help if you're just starting out</a>
*	<a href="#centos-verify-php">Verify PHP is installed</a>
*	<a href="#instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</a>
*	<a href="#instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</a>
*	<a href="#instgde-prereq-timezone">Setting the PHP timezone and memory limit</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>

Magento requires:

*	PHP 5.5.x
*	PHP 5.6.x 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento no longer supports PHP 5.4.</p></span>
</div>

<h2 id="php-centos-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="centos-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If PHP is installed, messages similar to the following display:

	PHP 5.6.4 (cli) (built: Dec 20 2014 17:30:46)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

If PHP is installed, continue with the next prerequisite, <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>.

If PHP is *not* installed, see one of the following sections:

*	<a href="#instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</a>
*	<a href="#instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</a>

<h2 id="instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</h2>
There is more than one way to upgrade CentOS 6.5 to PHP 5.6; the following is a suggestion only. Consult a reference for additional options.

To upgrade to PHP 5.6:

1.	Enter the following commands in the order shown:

		rpm -Uvh https://mirror.webtatic.com/yum/el6/latest.rpm
		yum install -y php56w php56w-opcache php56w-xml php56w-mcrypt php56w-gd php56w-devel php56w-mysql php56w-intl php56w-mbstring

2.	Restart Apache: `service httpd restart`

2.	Enter the following command to verify that PHP 5.6 is installed:

		php -v

	The following response indicates that PHP 5.6 is installed properly:

		PHP 5.6.4 (cli) (built: Dec 20 2014 17:30:46)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    	with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

3.	<a href="#instgde-prereq-timezone">Set the PHP timezone and memory limit</a>.

<h2 id="instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</h2>
There is more than one way to upgrade CentOS 6.5 to PHP 5.5; the following is a suggestion only. Consult a reference for additional options.

To upgrade to PHP 5.5:

1.	Enter the following commands in the order shown.

		rpm -Uvh https://mirror.webtatic.com/yum/el6/latest.rpm
		yum -y remove php-common-5.3.3-40.el6_6.x86_64
		yum -y install php55w php55w-opcache
		yum -y install php55w-xml php55w-mcrypt php55w-gd php55w-devel php55w-mysql php55w-intl php55w-mbstring

2.	Restart Apache: `service httpd restart`

3.	Continue with the next section.

<h2 id="instgde-prereq-timezone">Setting the PHP timezone and memory limit</h2>

Before you install Magento, you might need to set the system time zone for PHP; otherwise, errors like the following display during the installation and time-related operations like cron might not work:

	PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more messages follow]

We also recommend you increase the PHP memory limit to at least 512MB for normal operation or 2GB for testing.

To set your time zone and memory limit:

1.	Locate your server's time zone in the available <a href="http://php.net/manual/en/timezones.php" target="_blank">time zone settings</a>.
2.	Locate `php.ini` by entering the following command:

		php -i | grep "Loaded Configuration File"

	Typical locations follow:

	Ubuntu: `/etc/php5/cli/php.ini`

	CentOS: `/etc/php.ini`

3.	Open `php.ini` in a text editor.

4.	Locate the following setting and uncomment it if necessary:

		date.timezone =

5.	Add the time zone setting you found in step 1.

6.	Search for `memory_limit`.

2.	Change `memory_limit` to:

		memory_limit = 512M` or more for normal operation
		memory_limit = 2G` or more for testing

3.	Save your changes and exit the text editor.

4.	Restart Apache:

	Ubuntu: `service apache2 restart`

	CentOS: `service httpd restart`


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>