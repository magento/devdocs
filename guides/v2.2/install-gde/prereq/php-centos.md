---
layout: default
group: install_pre
subgroup: Prerequisites
title: PHP 7.0&mdash;CentOS
menu_title: PHP 7.0&mdash;CentOS
menu_order: 22
level3_menu_node: level3child
level3_subgroup: php
version: 2.2
github_link: install-gde/prereq/php-centos.md
---

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>If you must install both Apache and PHP, <a href="{{page.baseurl}}install-gde/prereq/apache.html">install Apache</a> first.</p></span>
</div>

<h2 id="php-support">PHP versions supported</h2>

{% include install/php_2.2.md %}

<h2 id="php-centos-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{page.baseurl}}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{page.baseurl}}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="centos-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} is installed, a message similar to the following displays:

    PHP 7.0.20 (cli) (built: Jun  8 2017 09:31:38) ( NTS )
    Copyright (c) 1997-2017 The PHP Group
    Zend Engine v3.0.0, Copyright (c) 1998-2017 Zend Technologies
      with Zend OPcache v7.0.20, Copyright (c) 1999-2017, by Zend Technologies

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="&#95;blank">PHP OPcache documentation</a>.</p></span>
</div>

If PHP is installed, continue with the next prerequisite, <a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>.

If PHP is *not* installed, see the [PHP 7 on CentOS 6 or 7](#php-centos-7) section.

## CentOS repositories {#centos-php-repos}
Linux systems provide software like PHP in one or more *repositories*. CentOS, unlike Ubuntu, has a set of [officially recommended repositories](https://wiki.centos.org/AdditionalResources/Repositories){:target="&#95;blank"}. Other repositories are considered less safe for the reasons stated on the CentOS wiki.

We're not aware that you can install PHP 5.6 or 7.0 from a CentOS-recommended repository. Therefore, you must consider the following:

*	If you're setting up a system that will be deployed in production, you should choose a hosting provider who uses repositories considered to be safe and reliable.

	You should also consider upgrading to a later version of CentOS that has the desired PHP version in a recommended repository.
*	If you're setting up a development system, you can use any repository you wish.

In this topic, we show how to install PHP using the [Inline with Upstream Stable (IUS)](https://ius.io/GettingStarted){:target="&#95;blank"} repository, which is *not* on the CentOS recommended list. However, packages installed from IUS do not use the same names as CentOS-provided packages, so [no existing system packages are replaced](https://ius.io/Philosophy){:target="&#95;blank"}.

Before you continue, review their [Getting Started topic](https://ius.io/GettingStarted){:target="&#95;blank"}.

<div class="bs-callout bs-callout-warning">
    <p>Magento does <em>not</em> officially recommend using the IUS repository. We discuss it here for example purposes only.</p>
</div>

## PHP 7 on CentOS {#php-centos-7}
There is more than one way to install PHP 7 on CentOS; the following is a suggestion only. Consult a reference for additional options.

To install PHP 7 on CentOS 6 or 7:

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

		yum -y install php70u php70u-pdo php70u-mysqlnd php70u-opcache php70u-xml php70u-mcrypt php70u-gd php70u-devel php70u-mysql php70u-intl php70u-mbstring php70u-bcmath php70u-json php70u-iconv

	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

4.	Restart Apache: `service httpd restart`

5.	Enter the following command to verify that PHP 7 is installed properly:

		php -v

    The following response indicates that PHP 7.0.3 is installed:

		PHP 7.0.3 (cli) (built: Feb  4 2016 08:51:10) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="&#95;blank">PHP OPcache documentation</a>.
    </div>

6.	Continue with [Required PHP settings]({{ page.baseurl }}install-gde/prereq/php-settings.html).

#### Next
[Required PHP settings]({{ page.baseurl }}install-gde/prereq/php-settings.html)

#### Related topics
*	<a href="{{page.baseurl}}install-gde/prereq/php-ubuntu.html">PHP 7.0&mdash;Ubuntu</a>
*	<a href="{{page.baseurl}}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{page.baseurl}}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{page.baseurl}}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{page.baseurl}}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{page.baseurl}}install-gde/install/pre-install.html">Ways to install the Magento software</a>
