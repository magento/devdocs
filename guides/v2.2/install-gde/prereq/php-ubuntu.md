---
layout: default
group: install_pre
subgroup: Prerequisites
title: PHP 7.0&mdash;Ubuntu
menu_title: PHP 7.0&mdash;Ubuntu
menu_order: 23
level3_menu_node: level3child
level3_subgroup: php
version: 2.2
github_link: install-gde/prereq/php-ubuntu.md
---

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{page.baseurl}}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>

{% include install/php_2.2.md %}

<h2 id="php-ubuntu-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{page.baseurl}}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="ubuntu-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If PHP is installed, a message similar to the following displays:

    PHP 7.0.21-1~ubuntu14.04.1+deb.sury.org+1 (cli) (built: Jul  6 2017 09:38:10) ( NTS )
    Copyright (c) 1997-2017 The PHP Group
    Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
      with Zend OPcache v7.0.21-1~ubuntu14.04.1+deb.sury.org+1, Copyright (c) 1999-2017, by Zend Technologies

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="&#95;blank">PHP OPcache documentation</a>.</p></span>
</div>

If PHP is installed, continue with the next prerequisite, <a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>.

If PHP is *not* installed, see the [PHP 7.0 on Ubuntu 14](#instgde-prereq-php70-ubuntu) section.

## PHP 7.0 on Ubuntu {#instgde-prereq-php70-ubuntu}
To install PHP 7 on Ubuntu 14 or 16:

1.	Enter the following commands in the order shown:

		sudo apt-get -y update
		sudo add-apt-repository ppa:ondrej/php
		sudo apt-get -y update
		sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv php7.0-soap

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    The last command installs all [required PHP extensions]({{page.baseurl}}install-gde/system-requirements-tech.html#required-php-extensions). The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.
    </div>

2.	Verify that PHP 7 is installed properly:

		php -v

    The following response indicates that PHP 7.0.21 is installed:

		PHP 7.0.21-1~ubuntu16.04.1+deb.sury.org+1 (cli) (built: Jul  6 2017 09:07:54) ( NTS )
		Copyright (c) 1997-2017 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies with Zend OPcache v7.0.21-1~ubuntu16.04.1+deb.sury.org+1, Copyright (c) 1999-2016, by Zend Technologies

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="&#95;blank">PHP OPcache documentation</a>.
    </div>

3.	Verify that all [required PHP extensions]({{ page.baseurl }}install-gde/system-requirements-tech.html#required-php-extensions) were installed:

		php -me

    You should see output similar to the following:
    <pre>
    [PHP Modules]
    bcmath
    calendar
    Core
    ctype
    curl
    date
    dom
    exif
    fileinfo
    filter
    ftp
    gd
    gettext
    hash
    iconv
    intl
    json
    libxml
    mbstring
    mcrypt
    mysqli
    mysqlnd
    openssl
    pcntl
    pcre
    PDO
    pdo_mysql
    Phar
    readline
    Reflection
    session
    SimpleXML
    soap
    sockets
    SPL
    standard
    tokenizer
    wddx
    xml
    xmlreader
    xmlwriter
    xsl
    Zend OPcache
    zip
    zlib

    [Zend Modules]
    Zend OPcache
    </pre>

4.	Continue with [Required PHP settings]({{ page.baseurl }}install-gde/prereq/php-settings.html).

#### Next
[Required PHP settings]({{ page.baseurl }}install-gde/prereq/php-settings.html)

#### Related topics
*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{page.baseurl}}install-gde/prereq/php-centos.html">PHP 7.0&mdash;CentOS</a>
*	<a href="{{page.baseurl}}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{page.baseurl}}install-gde/prereq/optional.html">Installing optional software</a>
