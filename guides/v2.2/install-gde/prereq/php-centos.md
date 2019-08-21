---
group: installation-guide
subgroup: Prerequisites
title: PHP 7.0 or 7.1&mdash;CentOS
menu_title: PHP 7.0 or 7.1&mdash;CentOS
menu_order: 22
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

## Verify PHP is installed {#centos-verify-php}

To verify if PHP is installed already, enter `php -v`. If [PHP](https://glossary.magento.com/php) is installed, a message similar to the following displays:

    PHP 7.0.20 (cli) (built: Jun 8 2017 09:31:38) ( NTS )
    Copyright (c) 1997-2017 The PHP Group
    Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
      with Zend OPcache v7.0.20, Copyright (c) 1999-2017, by Zend Technologies

{:.bs-callout .bs-callout-info}
The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

If PHP is installed, continue with the next prerequisite, [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html).

If PHP is *not* installed, see one of the following sections:

* [PHP 7.0 on CentOS 6 or 7](#php-centos-70)
* [PHP 7.1 on CentOS 6 or 7](#php-centos-71)

## CentOS repositories {#centos-php-repos}

Linux systems provide software like PHP in one or more *repositories*. CentOS, unlike Ubuntu, has a set of [officially recommended repositories](https://wiki.centos.org/AdditionalResources/Repositories){:target="_blank"}. Other repositories are considered less safe for the reasons stated on the CentOS wiki.

We're not aware that you can install PHP 7.0 or 7.1 from a CentOS-recommended repository. Therefore, you must consider the following:

*	If you're setting up a system that will be deployed in production, you should choose a hosting provider who uses repositories considered to be safe and reliable.

	You should also consider upgrading to a later version of CentOS that has the desired PHP version in a recommended repository.
*	If you're setting up a development system, you can use any repository you wish.

In this topic, we show how to install PHP using the [Inline with Upstream Stable (IUS)](https://ius.io/GettingStarted){:target="_blank"} repository, which is *not* on the CentOS recommended list. However, packages installed from IUS do not use the same names as CentOS-provided packages, so [no existing system packages are replaced](https://ius.io/Philosophy){:target="_blank"}.

Before you continue, review their [Getting Started topic](https://ius.io/GettingStarted){:target="_blank"}.

{:.bs-callout .bs-callout-info}
Magento does _not_ officially recommend using the IUS repository. We discuss it here for example purposes only.

## PHP 7.0 on CentOS {#php-centos-70}

There is more than one way to install PHP 7.0 on CentOS; the following is a suggestion only. Consult a reference for additional options.

{% collapsible To install PHP 7.0 on CentOS 6 or 7: %}

1.	*CentOS 6*. Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
2.	*CentOS 7*. Enter the following commands:

		yum install -y http://dl.iuscommunity.org/pub/ius/stable/CentOS/7/x86_64/ius-release-1.0-14.ius.centos7.noarch.rpm
		yum -y update
3.	Install all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions):

		yum -y install php70u php70u-pdo php70u-mysqlnd php70u-opcache php70u-xml php70u-mcrypt php70u-gd php70u-devel php70u-mysql php70u-intl php70u-mbstring php70u-bcmath php70u-json php70u-iconv php70u-soap

	{:.bs-callout .bs-callout-info}
  	The `bcmath` extension is required for {{site.data.var.ee}} only.

4.	Restart Apache: `service httpd restart`

5.	Verify that PHP 7.0 is installed properly:

		php -v

    The following response indicates that PHP 7.0.3 is installed:

		PHP 7.0.3 (cli) (built: Feb 4 2016 08:51:10) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

    {:.bs-callout .bs-callout-info}
    The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

6.	Verify that all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions) were installed:

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

7.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

## PHP 7.1 on CentOS {#php-centos-71}

There is more than one way to install PHP 7.1 on CentOS; the following is a suggestion only. Consult a reference for additional options.

{% collapsible To install PHP 7.1 on CentOS 6 or 7: %}

1.	*CentOS 6*. Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
2.	*CentOS 7*. Enter the following commands:

		yum install -y http://dl.iuscommunity.org/pub/ius/stable/CentOS/7/x86_64/ius-release-1.0-14.ius.centos7.noarch.rpm
		yum -y update
3.	Install all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions):

		yum -y install php71u php71u-pdo php71u-mysqlnd php71u-opcache php71u-xml php71u-mcrypt php71u-gd php71u-devel php71u-mysql php71u-intl php71u-mbstring php71u-bcmath php71u-json php71u-iconv php71u-soap

	{:.bs-callout .bs-callout-info}
  	The `bcmath` extension is required for {{site.data.var.ee}} only.

4.	Restart Apache: `service httpd restart`

5.	Verify that PHP 7.1 is installed properly:

		php -v

    The following response indicates that PHP 7.1.6 is installed:

		PHP 7.1.6 (cli) (built: Jan 9 2017 09:23:16) ( NTS )
		Copyright (c) 1997-2017 The PHP Group
		Zend Engine v3.1.0, Copyright (c) 1998-2017 Zend Technologies with Zend OPcache v7.1.6, Copyright (c) 1999-2017, by Zend Technologies

    {:.bs-callout .bs-callout-info}
    The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

6.	Verify that all [required PHP extensions]({{ page.baseurl }}/install-gde/system-requirements-tech.html#required-php-extensions) were installed:

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

7.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

#### Next
[Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html)

#### Related topics

*	[MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP 7.0&mdash;Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
