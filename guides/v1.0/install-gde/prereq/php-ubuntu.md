---
layout: default
group: install
subgroup: Prerequisites
title: PHP 5.4 or 5.5&mdash;Ubuntu
menu_title: PHP 5.4 or 5.5&mdash;Ubuntu
menu_order: 3
github_link: install-gde/prereq/php-ubuntu.md
---



<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu</a>
*	<a href="#instgde-prereq-php54-install-ubuntu">PHP 5.4 on Ubuntu</a>
*	<a href="#instgde-prereq-php-upgrade-ubuntu">Upgrade PHP on Ubuntu</a>
*	<a href="#instgde-prereq-php-ubuntu-ext">Installing required PHP extensions on Ubuntu</a>
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

<h2 id="instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu</h2>

See one of the following sections for more information:

*	<a href="#instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu14</a>
*	<a href="#instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu12</a>

<h3 id="instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu 14</h3>
To install PHP 5.5 on Ubuntu 14:

1.	Enter the following command:

	`apt-get -y install php5`
	
2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

	<pre>PHP 5.5.9-1ubuntu4.4 (cli) (built: Sep  4 2014 06:56:34)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.3, Copyright (c) 1999-2014, by Zend Technologies</pre>
	
<h3 id="instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu12</h3>
1.	Use the following commands from <a href="http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/" target="_blank">dev-metal</a>:

	<pre>add-apt-repository ppa:ondrej/php5
	apt-get update
	sudo apt-get install php5</pre>
	
2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

	<pre>PHP 5.5.18-1+deb.sury.org~precise+1 (cli) (built: Oct 17 2014 15:11:34)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies</pre>
	
<h2 id="instgde-prereq-php54-install-ubuntu">PHP 5.4 on Ubuntu</h2>

The Ubuntu 14 repository has PHP 5.4. This section discusses how to install PHP 5.4 on Ubuntu 12.

To install PHP 5.4 on Ubuntu 12:

1.	Use the following instructions from <a href="http://askubuntu.com/questions/109404/how-do-i-install-latest-php-in-supported-ubuntu-versions-like-5-4-x-in-ubuntu-1" target="_blank">askubuntu</a>:

	<pre>add-apt-repository ppa:ondrej/php5-oldstable
	apt-get update
	apt-get upgrade
	apt-get install php5</pre>

2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

	<pre>PHP 5.4.33-2+deb.sury.org~precise+1 (cli) (built: Sep 25 2014 09:06:25)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

3.	Restart Apache: `service apache2 restart`

<h2 id="instgde-prereq-php-upgrade-ubuntu">Upgrade PHP on Ubuntu</h2>

To upgrade to PHP 5.4 on Ubuntu:

1.	Use the instructions on <a href="http://phpave.com/upgrade-php-5-3-php-5-5-ubuntu-12-04-lts/" target="_blank">phpave</a>.
2.	After upgrading, verify the PHP version by entering `php -v`. Messages similar to the following should display:

	<pre>PHP 5.4.33-2+deb.sury.org~precise+1 (cli) (built: Sep 25 2014 09:06:25)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

3.	Restart Apache: `service apache2 restart`

<h2 id="instgde-prereq-php-ubuntu-ext">Installing required PHP extensions on Ubuntu</h2>

To install the PHP extensions required by Magento, enter the following command:

<pre>apt-get install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl</pre>

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

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.4 or 5.5&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>