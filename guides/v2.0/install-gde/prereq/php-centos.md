---
layout: default
group: install_pre
subgroup: Prerequisites
title: PHP 5.5, 5.6, or 7.0&mdash;CentOS
menu_title: PHP 5.5, 5.6, or 7.0&mdash;CentOS
menu_order: 22
level3_menu_node: level3child
level3_subgroup: php
github_link: install-gde/prereq/php-centos.md
redirect_from: /guides/v1.0/install-gde/prereq/php-centos.html
---

#### Contents

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#php-centos-help-beginner">Help if you're just starting out</a>
*	<a href="#centos-verify-php">Verify PHP is installed</a>
*	[CentOS repositories](#centos-php-repos)
*	[PHP 7 on CentOS](#php-centos-7)
*	<a href="#instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</a>
*	<a href="#instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</a>
*	<a href="#instgde-prereq-timezone">Set PHP configuration options</a>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>

Magento requires:

*	7.0.2&ndash;7.0.6 except for 7.0.5 (supported by Magento version 2.0.1 and later only)
	There is a [known PHP issue](https://bugs.php.net/bug.php?id=71914){:target="_blank"} that affects our [code compiler]({{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler.html) when using PHP 7.0.5. We recommend you not use PHP 7.0.5; instead, use PHP 7.0.2&ndash;7.0.4 or 7.0.6.
*	PHP 5.6.x
*	PHP 5.5.x, where x is 22 or greater 

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Magento no longer supports PHP 5.4.</p></span>
</div>

<h2 id="php-centos-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="centos-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If PHP is installed, messages similar to the following display:

	PHP 5.6.4 (cli) (built: Dec 20 2014 17:30:46)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
</div>

If PHP is installed, continue with the next prerequisite, <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>.

## CentOS repositories {#centos-php-repos}
Linux systems provide software like PHP in one or more *repositories*. CentOS, unlike Ubuntu, has a set of [officially recommended repositories](https://wiki.centos.org/AdditionalResources/Repositories){:target="_blank"}. Other repositories are considered less safe for the reasons stated on the CentOS wiki.

We're not aware that you can install PHP 5.5, 5.6, or 7.0 from a CentOS-recommended repository. Therefore, you must consider the following:

*	If you're setting up a system that will be deployed in production, you should choose a hosting provider who uses repositories considered to be safe and reliable. 

	You should also consider upgrading to a later version of CentOS that has the desired PHP version in a recommended repository.
*	If you're setting up a development system, you can use any repository you wish.

In this topic, we show how to install PHP using the [Inline with Upstream Stable (IUS)](https://ius.io/GettingStarted){:target="_blank"} repository, which is *not* on the CentOS recommended list. However, packages installed from IUS do not use the same names as CentOS-provided packages, so [no existing system packages are replaced](https://ius.io/Philosophy){:target="_blank"}.

Before you continue, review their [Getting Started topic](https://ius.io/GettingStarted){:target="_blank"}.

<div class="bs-callout bs-callout-warning">
    <p>Magento does <em>not</em> officially recommend using the IUS repository. We discuss it here for example purposes only.</p>
</div>

Continue with one of the following sections:

*	[PHP 7 on CentOS](#php-centos-7)
*	<a href="#instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</a>
*	<a href="#instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</a>

## PHP 7 on CentOS {#php-centos-7}
There is more than one way to install PHP 7.0.2 or later on CentOS 6; the following is a suggestion only. Consult a reference for additional options.

To upgrade to PHP 7.0.2 or later:

1.	*CentOS 6*. Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
2.	*CentOS 7*. Enter the following commands:

		yum install http://dl.iuscommunity.org/pub/ius/stable/CentOS/7/x86_64/ius-release-1.0-14.ius.centos7.noarch.rpm
		yum -y update
3.	Enter the following command:

		yum -y install php70u php70u-pdo php70u-mysqlnd php70u-opcache php70u-xml php70u-mcrypt php70u-gd php70u-devel php70u-mysql php70u-intl php70u-mbstring php70u-bcmath php70u-json php70u-iconv

	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

2.	Restart Apache: `service httpd restart`

2.	Enter the following command to verify that PHP 5.6 is installed:

		php -v

	The following response indicates that PHP 5.6 is installed properly:

		PHP 7.0.3 (cli) (built: Feb  4 2016 08:51:10) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
    	with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
 	 <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
	</div>
3.	<a href="#instgde-prereq-timezone">Set up PHP configuration options</a>.

<h2 id="instgde-prereq-php56-install-centos">PHP 5.6 on CentOS</h2>
There is more than one way to upgrade CentOS 6.5 to PHP 5.6; the following is a suggestion only. Consult a reference for additional options.

To upgrade to PHP 5.6:

1.	Enter the following commands in the order shown:

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
		yum -y install php56u php56u-opcache php56u-xml php56u-mcrypt php56u-gd php56u-devel php56u-mysql php56u-intl php56u-mbstring php56u-bcmath


	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

2.	Restart Apache: `service httpd restart`

2.	Enter the following command to verify that PHP 5.6 is installed:

		php -v

	The following response indicates that PHP 5.6 is installed properly:

		PHP 5.6.18 (cli) (built: Feb  4 2016 09:29:52)
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
    	with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
 	 <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
	</div>
3.	<a href="#instgde-prereq-timezone">Set up PHP configuration options</a>.

<h2 id="instgde-prereq-php55-install-centos">PHP 5.5 on CentOS</h2>
There is more than one way to upgrade CentOS 6.5 to PHP 5.5; the following is a suggestion only. Consult a reference for additional options.

To upgrade to PHP 5.5:

1.	Enter the following commands in the order shown.

		yum -y update
		yum -y install epel-release
		wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
		wget https://centos6.iuscommunity.org/ius-release.rpm
		rpm -Uvh ius-release*.rpm
		yum -y update
		yum -y install php55u php55u-opcache php55u-xml php55u-mcrypt php55u-gd php55u-devel php55u-mysql php55u-intl php55u-mbstring php55u-bcmath


	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>
2.	Enter the following command to verify the version:

		php -v

	The following messages display:

		PHP 5.5.32 (cli) (built: Feb  4 2016 09:30:35)
		Copyright (c) 1997-2015 The PHP Group
		Zend Engine v2.5.0, Copyright (c) 1998-2015 Zend Technologies
		with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2015, by Zend Technologies
3.	Restart Apache: `service httpd restart`
4.	Continue with the next section.

<h2 id="instgde-prereq-timezone">Set PHP configuration options</h2>
{% include install/php-config.html %}


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/php-ubuntu.html">PHP 5.5 or 5.6&mdash;Ubuntu</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Ways to install the Magento software</a>
