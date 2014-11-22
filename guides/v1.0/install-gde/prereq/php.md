---
layout: default
title: Installing PHP 5.4 and required extensions
---

<h1 id="instgde-prereq-php">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/php.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#instgde-prereq-php-install-centos">PHP 5.4 on CentOS</a>
*	<a href="#instgde-prereq-php-install-ubuntu">PHP 5.4 on Ubuntu</a>
*	<a href="#instgde-prereq-timezone">Setting the PHP timezone (all operating systems)</a>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <br><br><br><ul><li>You must run all commands on this page as a user with <code>root</code> privileges.</li>
  <li>If you must install both Apache and PHP, <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">install Apache</a> first.</li></ul></span>
</div>

<h2 id="instgde-prereq-php-install-centos">PHP 5.4 on CentOS</h2>

This section discusses the following topics:

*	<a href="#instgde-prereq-php-install-centos-upgr">Upgrade to PHP 5.4 on CentOS</a>
*	<a href="#instgde-prereq-php-install-centos-ext">Install required PHP extensions on CentOS</a>

<h3 id="instgde-prereq-php-install-centos-upgr">Upgrade to PHP 5.4 on CentOS</h3>

PHP 5.3 is the default PHP version on CentOS distributions. Upgrade to PHP 5.4 using a repository like <a href="http://blog.famillecollet.com/pages/Config-en" target="_blank">remi</a>. 

The following resources are also available:

*	<a href="http://kb.parallels.com/en/115875" target="_blank">kb.parallels</a>
*	<a href="http://stackoverflow.com/questions/21502656/upgrading-php-on-centos-6-5-final" target="_blank">stackoverflow</a>
*	<a href="http://rpms.famillecollet.com/" target="_blank">remi repository</a>

To upgrade to PHP 5.4, enter the following commands:

<pre>cd /tmp
rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm
yum -y --enablerepo=remi install httpd php php-common</pre>

To verify PHP 5.4 is installed, enter `php -v`. The command displays results similar to the following:

<pre>PHP 5.4.33 (cli) (built: Sep 20 2014 16:20:03)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

<h3 id="instgde-prereq-php-install-centos-ext">Install required PHP extensions on CentOS</h3>

Enter the following command to install required PHP extensions:

`yum -y --enablerepo=remi install php-xml php-intl`

<h2 id="instgde-prereq-php-install-ubuntu">PHP 5.4 on Ubuntu</h2>

See one of the following sections:

*	<a href="#instgde-prereq-php-ubuntu-install">Install PHP 5.4</a>
*	<a href="#instgde-prereq-php-ubuntu-upgr">Upgrade to PHP 5.4</a>
*	<a href="#instgde-prereq-php-ubuntu-ext">Install required PHP extensions</a>

<h3 id="instgde-prereq-php-ubuntu-install">Install PHP 5.4</h3>

Use the following instructions from <a href="http://askubuntu.com/questions/109404/how-do-i-install-latest-php-in-supported-ubuntu-versions-like-5-4-x-in-ubuntu-1" target="_blank">askubuntu</a>:

<pre>add-apt-repository ppa:ondrej/php5-oldstable
apt-get update
apt-get upgrade
apt-get install php5</pre>

Verify the PHP version by entering `php -v`. Messages similar to the following should display:

<pre>PHP 5.4.33-2+deb.sury.org~precise+1 (cli) (built: Sep 25 2014 09:06:25)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

<h3 id="instgde-prereq-php-ubuntu-upgr">Upgrade to PHP 5.4</h3>

Use the instructions on <a href="http://phpave.com/upgrade-php-5-3-php-5-5-ubuntu-12-04-lts/" target="_blank">phpave</a>.

After upgrading, verify the PHP version by entering `php -v`. Messages similar to the following should display:

<pre>PHP 5.4.33-2+deb.sury.org~precise+1 (cli) (built: Sep 25 2014 09:06:25)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

<h3 id="instgde-prereq-php-ubuntu-ext">Install required PHP extensions</h3>

<pre>apt-get install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl</pre>

<h2 id="instgde-prereq-timezone">Setting the PHP timezone (all operating systems)</h2>

Before you install Magento, you might need to set the system time zone for PHP; otherwise, errors like the following display during the installation and time-related operations like cron might not work:

`PHP Warning:  date(): It is not safe to rely on the system's timezone settings.` [more messages follow]

To set your time zone:

1.	Locate your server's time zone in the available <a href="http://php.net/manual/en/timezones.php" target="_blank">time zone settings</a>.
2.	Locate `php.ini` by entering the following command:

	`php -i | grep "Loaded Configuration File"`
	
	Typical locations follow:
	
	Ubuntu: `/etc/php5/cli/php.ini`
	
	CentOS: `/etc/php.ini`
	
3.	Open `php.ini` in a text editor.

4.	Locate the followign setting and uncomment it if necessary:

	`date.timezone =`
	
5.	Add the time zone setting you found in step 1.
6.	Save your changes to `php.ini` and exit the text editor.
	

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>