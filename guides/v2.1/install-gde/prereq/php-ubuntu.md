---
group: installation-guide
subgroup: Prerequisites
title: PHP 5.6 or 7.0&mdash;Ubuntu
menu_title: PHP 5.6 or 7.0&mdash;Ubuntu
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

<!--{% assign supported_php_versions = site.data.codebase.v2_1.open-source.composer_lock.platform.php | split: "|" %}-->
{% include install/php-versions-template.md %}

{:.bs-callout .bs-callout-info}
For versions 2.1.16 and later, Magento supports PHP 7.1 for the 2.1.x release line. The other supported PHP versions remain valid and unchanged.

## Help if you're just starting out {#php-ubuntu-help-beginner}

If you're new to all this and need some help getting started, we suggest the following:

*	[Is the Magento software installed already?]({{ page.baseurl }}/install-gde/basics/basics_magento-installed.html)
*	[What is the software that the Magento server needs to run?]({{ page.baseurl }}/install-gde/basics/basics_software.html)
*	[What operating system is my server running?]({{ page.baseurl }}/install-gde/basics/basics_os-version.html)
*	[How do I log in to my Magento server using a terminal, command prompt, or SSH?]({{ page.baseurl }}/install-gde/basics/basics_login.html)

## Verify PHP is installed {#ubuntu-verify-php}

To verify if PHP is installed already, enter `php -v`. If PHP is installed, messages similar to the following display:

	PHP 5.6.4-1+deb.sury.org~precise+1 (cli) (built: Dec 21 2014 19:26:25)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

{:.bs-callout .bs-callout-info}
The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

If PHP is installed, continue with the next prerequisite, [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html).

If PHP is *not* installed, see one of the following sections:

*	[PHP 7.0 on Ubuntu 14](#instgde-prereq-php70-ubuntu)
*	[PHP 5.6 on Ubuntu 14<!--  or Ubuntu 12 -->](#instgde-prereq-php56-install-ubuntu)

## PHP 7.0 on Ubuntu 14 or 16 {#instgde-prereq-php70-ubuntu}

{% collapsible To install PHP 7 on Ubuntu 14: %}

1.	Enter the following commands in the order shown:

		sudo apt-get -y update
		sudo add-apt-repository ppa:ondrej/php
		sudo apt-get -y update
		sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv php7.0-soap

    {:.bs-callout .bs-callout-info}
    The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	Enter the following command to verify PHP 7 installed properly:

		php -v

	Following is a sample response that indicates PHP 7.0.8 is installed:

		PHP 7.0.8-2+deb.sury.org~trusty+1 (cli) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
    	  with Zend OPcache v7.0.8-2+deb.sury.org~trusty+1, Copyright (c) 1999-2016, by Zend Technologies

	{:.bs-callout .bs-callout-info}
  	The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

3.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

## PHP 5.6 on Ubuntu 14 {#instgde-prereq-php56-install-ubuntu}

{% collapsible To install PHP 5.6 or to upgrade from PHP 5.5 on Ubuntu 14: %}

1.	Enter the following commands in the order shown:

		apt-get -y update
		add-apt-repository ppa:ondrej/php
		apt-get -y update
		apt-get -y install php5.6 php5.6-mcrypt php5.6-mbstring php5.6-curl php5.6-cli php5.6-mysql php5.6-gd php5.6-intl php5.6-xsl php5.6-soap

2.	Enter the following command to verify PHP 5.6 installed properly:

		php -v

	Following is a sample response that indicates PHP 5.6 is installed:

		PHP 5.6.22-4+deb.sury.org~trusty+1 (cli)
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
    	with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

	{:.bs-callout .bs-callout-info}
  	The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

3.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

#### Next
[Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html)

#### Related topics

*	[MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html)
*	[Apache]({{ page.baseurl }}/install-gde/prereq/apache.html)
*	[PHP 5.6 or 7.0&mdash;CentOS]({{ page.baseurl }}/install-gde/prereq/php-centos.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
