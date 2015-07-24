---
layout: default
group: install_pre
subgroup: Prerequisites
title: PHP 5.5 or 5.6&mdash;Ubuntu
menu_title: PHP 5.5 or 5.6&mdash;Ubuntu
menu_order: 3
github_link: install-gde/prereq/php-ubuntu.md
redirect_from: /guides/v1.0/install-gde/prereq/php-ubuntu.html
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->


<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#php-ubuntu-help-beginner">Help if you're just starting out</a>
*	<a href="#ubuntu-verify-php">Verify PHP is installed</a>
*	<a href="#instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14</a>
*	<a href="#instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</a>
*	<a href="#instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</a>
*	<a href="#instgde-prereq-timezone">Setting the PHP timezone and memory limit</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>
Magento requires:

*	PHP 5.6.x
*	PHP 5.5.x 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento no longer supports PHP 5.4.</p></span>
</div>

<h2 id="php-ubuntu-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="ubuntu-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If PHP is installed, messages similar to the following display:

	PHP 5.6.4-1+deb.sury.org~precise+1 (cli) (built: Dec 21 2014 19:26:25)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

If PHP is installed, continue with the next prerequisite, <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>.

If PHP is *not* installed, see one of the following sections:

*	<a href="#instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14<!--  or Ubuntu 12 --></a>
*	<a href="#instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</a>
*	<a href="#instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</a>
 

<h2 id="instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14</h2>
To install PHP 5.6 or to upgrade from PHP 5.5 on Ubuntu 14:

1.	Enter the following commands in the order shown:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5-5.6
		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Enter the following command to verify PHP 5.6 installed properly:

		php -v

	Following is a sample response that indicates PHP 5.6 is installed:

		PHP 5.6.4-1+deb.sury.org~trusty+1 (cli) (built: Dec 21 2014 19:28:16)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
		with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

3.	<a href="#instgde-prereq-timezone">Set the PHP timezone and memory limit</a>.

<h2 id="instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</h2>
Before continuing, enter the following command to make sure you're running Apache 2.4:

	apache2 -v

The result should be similar to the following:

	Server version: Apache/2.4.10 (Ubuntu)
	Server built:   Jul 22 2014 22:46:25

If you're running an earlier Apache version, see <a href="{{ site.gdeurl }}install-gde/prereq/apache.html#install-prereq-apache-ubuntu-upgrade">Upgrading Apache on Ubuntu 12</a> first.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Ubuntu 12 comes with PHP 5.3 by default. PHP 5.3 is not supported by Magento and upgrading to it might involve additional tasks not discussed here. For more information, consult a resource like <a href="http://phpave.com/upgrade-php-53-to-php-56-on-ubuntu-1204-lts" target="_blank">phpave</a>.</p></span>
</div>

To install or upgrade to PHP 5.6 on Ubuntu 12:

1.	Enter the following commands in the order shown:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5-5.6
		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Verify that PHP 5.6 installed properly:

		php -v

	Messages similar to the following should display:

		PHP 5.6.4-1+deb.sury.org~precise+1 (cli) (built: Dec 21 2014 19:26:25)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    	with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

3.	<a href="#instgde-prereq-timezone">Set the PHP timezone and memory limit</a>.

<h2 id="instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</h2>

See one of the following sections for more information:

*	<a href="#instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu 14</a>
*	<a href="#instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu 12</a>

<h3 id="instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu 14 or Ubuntu 12 14</h3>
To install PHP 5.5 on Ubuntu 14 or Ubuntu 12 14:

1.	Enter the following command:

		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

		PHP 5.5.9-1ubuntu4.4 (cli) (built: Sep  4 2014 06:56:34)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
	    with Zend OPcache v7.0.3, Copyright (c) 1999-2014, by Zend Technologies

3.	<a href="#instgde-prereq-timezone">Set the PHP timezone and memory limit</a>.

<h3 id="instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu 14 or Ubuntu 12</h3>
1.	Use the following commands from <a href="http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/" target="_blank">dev-metal</a>:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5
		apt-get update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

		PHP 5.5.18-1+deb.sury.org~precise+1 (cli) (built: Oct 17 2014 15:11:34)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
    	with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

3.	Set the PHP timezone and memory limit as discussed in the next section.

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

	`service apache2 restart`



#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Install Composer and clone the Magento repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
