---
layout: howtom2instgde_chapters
title: Installing PHP 5.4 and required extensions
---

<h1 id="instgde-prereq-php">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/php.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h4 id="instgde-php-prereq-contents">Contents</h4>

*	<a href="#instgde-prereq-php-install-centos">PHP 5.4 on CentOS</a>
*	<a href="#instgde-prereq-php-install-ubuntu">PHP 5.4 on Ubuntu</a>
*	<a href="#instgde-prereq-timezone">Setting the PHP timezone (all operating systems)</a>

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

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Unless otherwise stated, you must run all commands on this page as a user with <code>root</code> privileges.</p></span>
</div>

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

`yum -y --enablerepo=remi install php-intl`

<h2 id="instgde-prereq-php-install-ubuntu">PHP 5.4 on Ubuntu</h2>

TBD

<h2 id="instgde-prereq-timezone">Setting the PHP timezone (all operating systems)</h2>

`PHP Warning:  date(): It is not safe to rely on the system's timezone settings. [more]`

TBD

#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Installing and configuring Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>