---
group: installation-guide
subgroup: Prerequisites
title: PHP 5.6 or 7.0&mdash;CentOS
menu_title: PHP 5.6 or 7.0&mdash;CentOS
menu_order: 22
level3_menu_node: level3child
level3_subgroup: php
functional_areas:
  - Install
  - System
  - Setup
---

{:.bs-callout .bs-callout-info}
If you must install both Apache and PHP, [Install Apache]({{ page.baseurl }}/install-gde/prereq/apache.html) first.

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

## Verify PHP is installed {#centos-verify-php}

To verify if PHP is installed already, enter `php -v`. If [PHP](https://glossary.magento.com/php) is installed, messages similar to the following display:

	PHP 5.6.4 (cli) (built: Dec 20 2014 17:30:46)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

{:.bs-callout .bs-callout-info}
The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.

If PHP is installed, continue with the next prerequisite, [MySQL]({{ page.baseurl }}/install-gde/prereq/mysql.html).

## CentOS repositories {#centos-php-repos}

Linux systems provide software like PHP in one or more *repositories*. CentOS, unlike Ubuntu, has a set of [officially recommended repositories](https://wiki.centos.org/AdditionalResources/Repositories){:target="_blank"}. Other repositories are considered less safe for the reasons stated on the CentOS wiki.

We're not aware that you can install PHP 5.6 or 7.0 from a CentOS-recommended repository. Therefore, you must consider the following:

*	If you're setting up a system that will be deployed in production, you should choose a hosting provider who uses repositories considered to be safe and reliable.

	You should also consider upgrading to a later version of CentOS that has the desired PHP version in a recommended repository.
*	If you're setting up a development system, you can use any repository you wish.

In this topic, we show how to install PHP using the [Inline with Upstream Stable (IUS)](https://ius.io/GettingStarted){:target="_blank"} repository, which is *not* on the CentOS recommended list. However, packages installed from IUS do not use the same names as CentOS-provided packages, so [no existing system packages are replaced](https://ius.io/Philosophy){:target="_blank"}.

Before you continue, review their [Getting Started topic](https://ius.io/GettingStarted){:target="_blank"}.

{:.bs-callout .bs-callout-info}
Magento does _not_ officially recommend using the IUS repository. We discuss it here for example purposes only.

Continue with one of the following sections:

*	[PHP 7 on CentOS 6 or 7](#php-centos-7)
*	[PHP 5.6 on CentOS 6 or 7](#instgde-prereq-php56-install-centos)

## PHP 7 on CentOS 6 or 7 {#php-centos-7}

There is more than one way to install PHP 7.0 on CentOS; the following is a suggestion only. Consult a reference for additional options.

{% collapsible To install PHP 7 on CentOS 6 or 7: %}

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
3.	Enter the following command:

		yum -y install php70u php70u-pdo php70u-mysqlnd php70u-opcache php70u-xml php70u-mcrypt php70u-gd php70u-devel php70u-mysql php70u-intl php70u-mbstring php70u-bcmath php70u-json php70u-iconv php70u-soap

	{:.bs-callout .bs-callout-info}
  	The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	Restart Apache: `service httpd restart`

2.	Enter the following command to verify that PHP 7 is installed:

		php -v

	The following response indicates that PHP 7 is installed properly:

		PHP 7.0.3 (cli) (built: Feb 4 2016 08:51:10) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
    	with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

	{:.bs-callout .bs-callout-info}
	The preceding message confirms that the `Zend OPcache` is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the [PHP OPcache documentation](http://php.net/manual/en/opcache.setup.php){:target="_blank"}.
3.	Continue with [Required PHP settings]({{ page.baseurl }}/install-gde/prereq/php-settings.html).

{% endcollapsible %}

## PHP 5.6 on CentOS 6 or 7 {#instgde-prereq-php56-install-centos}

There is more than one way to install PHP 5.6 on CentOS; the following is a suggestion only. Consult a reference for additional options.

{% collapsible To install PHP 5.6 on CentOS 6 or 7: %}

1.	*CentOS 6*. Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
		yum -y install php56u php56u-opcache php56u-xml php56u-mcrypt php56u-gd php56u-devel php56u-mysql php56u-intl php56u-mbstring php56u-bcmath php56u-soap


	{:.bs-callout .bs-callout-info}
  	The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	*CentOS 7*. Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
		wget https://centos7.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
		yum -y install php56u php56u-opcache php56u-xml php56u-mcrypt php56u-gd php56u-devel php56u-mysql php56u-intl php56u-mbstring php56u-bcmath php56u-soap


	{:.bs-callout .bs-callout-info}
  	The `bcmath` extension is required for {{site.data.var.ee}} only.

2.	Restart Apache: `service httpd restart`

2.	Enter the following command to verify that PHP 5.6 is installed:

		php -v

	The following response indicates that PHP 5.6 is installed properly:

		PHP 5.6.18 (cli) (built: Feb 4 2016 09:29:52)
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
*	[PHP 5.6 or 7.0&mdash;Ubuntu]({{ page.baseurl }}/install-gde/prereq/php-ubuntu.html)
*	[Configuring security options]({{ page.baseurl }}/install-gde/prereq/security.html)
*	[Installing optional software]({{ page.baseurl }}/install-gde/prereq/optional.html)
