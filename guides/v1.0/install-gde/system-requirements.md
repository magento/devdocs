---
layout: howtom2instgde_chapters
title: Magento 2 system requirements
---

<h1 id="instgde-sys-req">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/system-requirements.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

Before you install Magento 2, make sure your system meets or exceeds the following requirements:

*	Operating systems

	Linux distributions such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on
	
*	<a href="https://getcomposer.org/download/" target="_blank">Composer</a> (latest stable version)
*	<a href="http://httpd.apache.org/download.cgi" target="_blank">Apache 2.2</a> or later
*	PHP 5.4.33 or later (<a href="http://php.net/downloads.php" target="_blank">installation</a> instructions, <a href="http://phpave.com/upgrade-php-5-3-php-5-5-ubuntu-12-04-lts/" target="_blank">upgrade</a> instructions)
*	Required PHP extensions:

	*	PDO/MySQL
	*	MySQLi
	*	mbstring
	*	mcrypt
	*	mhash
	*	simplexml
	*	curl
	*	gd2, ImageMagick 6.3.7 (or later) or both
	*	soap
	
*	<a href="http://dev.mysql.com/doc/refman/5.5/en/installing.html" target="_blank">MySQL 5.5</a> or later
*	Mail Transfer Agent (MTA) or an SMTP server
*	Optional but recommended: 

	*	<a href="http://xdebug.org/download.php" target="_blank">php_xdebug2.2.0</a> or later
    *	PHPUnit (as a command-line tool) 3.7 or later 
	
<h2 id="instgde-sys-req-check">Prerequisite check</h2>

To check your system for prerequisites, enter the following commands:

*	PHP

	`php -v`
	
	You must run PHP version 5.4.33 or later as the following result indicates:
	
	<pre>PHP 5.4.33 (cli) (built: Sep 20 2014 16:20:03)
Copyright (c) 1997-2014 The PHP Group
Zend Engine v2.4.0, Copyright (c) 1998-2014 Zend Technologies</pre>

	To install or upgrade PHP, see TBD.

*	Apache

	CentOS: `httpd -v`
	
	Ubuntu: TBD
	
	You must run Apache version 2.2 or later as the following result indicates:
	
	<pre>Server version: Apache/2.2.15 (Unix)
Server built:   Jul 23 2014 14:17:29</pre>

	To install or upgrade Apache, see TBD.

*	MySQL

	`mysql -u [database root user or database owner name] -p`
	
	For example:
	
	`mysql -u magento -p`
	
	You must run MySQL version 5.5 or later as the following result indicates:
	
	<pre>Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 78
Server version: 5.5.40 MySQL Community Server (GPL) by Remi
Copyright (c) 2000, 2014, Oracle and/or its affiliates. All rights reserved.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.</pre>

	Enter `exit` at the `mysql>` prompt to exit.
	
	To install or upgrade MySQL, see TBD.
	


	
