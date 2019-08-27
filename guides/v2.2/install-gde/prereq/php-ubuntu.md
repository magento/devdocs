---
group: installation-guide
subgroup: Prerequisites
title: PHP 7.0 or 7.1 &mdash;Ubuntu
menu_title: PHP 7.0 or 7.1&mdash;Ubuntu
menu_order: 23
level3_menu_node: level3child
level3_subgroup: php
functional_areas:
  - Install
  - System
  - Setup
---

{:.bs-callout .bs-callout-info}
If you must install both Apache and PHP, [install Apache]({{ page.baseurl }}/install-gde/prereq/apache.html) first.

## PHP versions supported {#php-support}

<!--{% assign supported_php_versions = site.data.codebase.v2_2.open-source.composer_lock.platform.php | split: "|" %}-->
{% include install/php-versions-template.md %}

## Help if you're just starting out {#php-ubuntu-help-beginner}

If you're new to all this and need some help getting started, we suggest the following:

*	[Is the Magento software installed already?]({{ page.baseurl }}/install-gde/basics/basics_magento-installed.html)
*	[What is the software that the Magento server needs to run?]({{ page.baseurl }}/install-gde/basics/basics_software.html)
*	[What operating system is my server running?]({{ page.baseurl }}/install-gde/basics/basics_os-version.html)
*	[How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{ page.baseurl }}/install-gde/basics/basics_login.html)

## Verify PHP is installed {#ubuntu-verify-php}

To verify if PHP is installed already, enter `php -v`. If PHP is installed, a message similar to the following displays:

    PHP 7.0.21-1~ubuntu14.04.1+deb.sury.org+1 (cli) (built: Jul  6 2017 09:38:10) ( NTS )
    Copyright (c) 1997-2017 The PHP Group
    Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
      with Zend OPcache v7.0.21-1~ubuntu14.04.1+deb.sury.org+1, Copyright (c) 1999-2017, by Zend Technologies

{:.bs-callout .bs-callout-info}
The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}

If PHP is installed, continue with the next prerequisite, [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html).

If PHP is *not* installed, see one of the following sections:

* [PHP 7.0 on Ubuntu 14](#instgde-prereq-php70-ubuntu)
* [PHP 7.1 on Ubuntu 14](#instgde-prereq-php71-ubuntu)

## PHP 7.0 on Ubuntu {#instgde-prereq-php70-ubuntu}
{% collapsible To install PHP 7.0 on Ubuntu 14 or 16: %}

1.	Enter the following commands in the order shown:

		sudo apt-get -y update
		sudo add-apt-repository ppa:ondrej/php
		sudo apt-get -y update
		sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv php7.0-soap

    {:.bs-callout .bs-callout-info}
    The last command installs all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions). The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	Verify that PHP 7.0 is installed properly:

		php -v

    The following response indicates that PHP 7.0.21 is installed:

		PHP 7.0.21-1~ubuntu16.04.1+deb.sury.org+1 (cli) (built: Jul  6 2017 09:07:54) ( NTS )
		Copyright (c) 1997-2017 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies with Zend OPcache v7.0.21-1~ubuntu16.04.1+deb.sury.org+1, Copyright (c) 1999-2016, by Zend Technologies

    {:.bs-callout .bs-callout-info}
    The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

3.	Verify that all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions) were installed:

		php -me

    You should see output similar to the following:
    ```
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
    ```

4.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

## PHP 7.1 on Ubuntu {#instgde-prereq-php71-ubuntu}
{% collapsible To install PHP 7.1 on Ubuntu 14 or 16: %}

1.	Enter the following commands in the order shown:

		sudo apt-get -y update
		sudo add-apt-repository ppa:ondrej/php
		sudo apt-get -y update
		sudo apt-get install -y php7.1 libapache2-mod-php7.1 php7.1-common php7.1-gd php7.1-mysql php7.1-mcrypt php7.1-curl php7.1-intl php7.1-xsl php7.1-mbstring php7.1-zip php7.1-bcmath php7.1-iconv php7.1-soap

    {:.bs-callout .bs-callout-info}
    The last command installs all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions). The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	Verify that PHP 7.1 is installed properly:

		php -v

    The following response indicates that PHP 7.1.7 is installed:

		PHP 7.1.7-1~ubuntu14.04.1+deb.sury.org+1 (cli) (built: Jul  6 2017 09:07:54) ( NTS )
		Copyright (c) 1997-2017 The PHP Group
		Zend Engine v3.1.0, Copyright (c) 1998-2017 Zend Technologies with Zend OPcache v7.1.7-1~ubuntu14.04.1+deb.sury.org+1, Copyright (c) 1999-2017, by Zend Technologies

    {:.bs-callout .bs-callout-info}
    The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

3.	Verify that all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions) were installed:

		php -me

    You should see output similar to the following:
    ```
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
    ```

4.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

#### Next
[Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html)

#### Related topics

*	[MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP 7.0&mdash;CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
