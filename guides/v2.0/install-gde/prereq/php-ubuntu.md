---
layout: default
group: install_pre
subgroup: Prerequisites
title: PHP 5.5, 5.6, or 7.0&mdash;Ubuntu
menu_title: PHP 5.5, 5.6, or 7.0&mdash;Ubuntu
menu_order: 23
level3_menu_node: level3child
level3_subgroup: php
github_link: install-gde/prereq/php-ubuntu.md
redirect_from: /guides/v1.0/install-gde/prereq/php-ubuntu.html
---

#### Contents

*	<a href="#php-support">PHP versions supported</a>
*	<a href="#php-ubuntu-help-beginner">Help if you're just starting out</a>
*	<a href="#ubuntu-verify-php">Verify PHP is installed</a>
*	[PHP 7.0 on Ubuntu 14](#instgde-prereq-php70-ubuntu)
*	<a href="#instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14</a>
*	<a href="#instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</a>
*	<a href="#instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</a>
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

<h2 id="php-ubuntu-help-beginner">Help if you're just starting out</h2>
If you're new to all this and need some help getting started, we suggest the following:

*	<a href="{{ site.gdeurl }}install-gde/basics/basics_magento-installed.html">Is the Magento software installed already?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_software.html">What is the software that the Magento server needs to run?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_os-version.html">What operating system is my server running?</a>
*	<a href="{{ site.gdeurl }}install-gde/basics/basics_login.html">How do I log in to my Magento server using a terminal, command prompt, or SSH?</a>

<h2 id="ubuntu-verify-php">Verify PHP is installed</h2>
To verify if PHP is installed already, enter `php -v`. If PHP is installed, messages similar to the following display:

	PHP 5.6.4-1+deb.sury.org~precise+1 (cli) (built: Dec 21 2014 19:26:25)
	Copyright (c) 1997-2014 The PHP Group
	Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
</div>

If PHP is installed, continue with the next prerequisite, <a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>.

If PHP is *not* installed, see one of the following sections:

*	[PHP 7.0 on Ubuntu 14](#instgde-prereq-php70-ubuntu)
*	<a href="#instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14<!--  or Ubuntu 12 --></a>
*	<a href="#instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</a>
*	<a href="#instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</a>

## PHP 7.0 on Ubuntu 14 {#instgde-prereq-php70-ubuntu}
To install PHP 7 on Ubuntu 14:

1.	Enter the following commands in the order shown:

		sudo apt-get -y update
		sudo add-apt-repository ppa:ondrej/php
		sudo apt-get -y update
		sudo apt-get install -y php7.0 libapache2-mod-php7.0 php7.0 php7.0-common php7.0-gd php7.0-mysql php7.0-mcrypt php7.0-curl php7.0-intl php7.0-xsl php7.0-mbstring php7.0-zip php7.0-bcmath php7.0-iconv

	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

2.	Enter the following command to verify PHP 7.0.2 installed properly:

		php -v

	Following is a sample response that indicates PHP 7.0.2 is installed:

		PHP 7.0.4-6+deb.sury.org~trusty+1 (cli) ( NTS )
		Copyright (c) 1997-2016 The PHP Group
		Zend Engine v3.0.0, Copyright (c) 1998-2016 Zend Technologies
    	   with Zend OPcache v7.0.6-dev, Copyright (c) 1999-2016, by Zend Technologies

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
  	<p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
	</div>
3.	<a href="#instgde-prereq-timezone">Set PHP configuration options</a>.


<h2 id="instgde-prereq-php56-install-ubuntu">PHP 5.6 on Ubuntu 14</h2>
To install PHP 5.6 or to upgrade from PHP 5.5 on Ubuntu 14:

1.	Enter the following commands in the order shown:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5-5.6
		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl php5-bcmath

	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

2.	Enter the following command to verify PHP 5.6 installed properly:

		php -v

	Following is a sample response that indicates PHP 5.6 is installed:

		PHP 5.6.4-1+deb.sury.org~trusty+1 (cli) (built: Dec 21 2014 19:28:16)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
		with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
</div>

3.	<a href="#instgde-prereq-timezone">Set PHP configuration options</a>.

<h2 id="instgde-prereq-php56-install-ubuntu12">PHP 5.6 on Ubuntu 12</h2>
Before continuing, enter the following command to make sure you're running Apache 2.4:

	apache2 -v

The result should be similar to the following:

	Server version: Apache/2.4.10 (Ubuntu)
	Server built:   Jul 22 2014 22:46:25

If you're running an earlier Apache version, see <a href="{{ site.gdeurl }}install-gde/prereq/apache.html#install-prereq-apache-ubuntu-upgrade">Upgrading Apache on Ubuntu 12</a> first.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Ubuntu 12 comes with PHP 5.3 by default. PHP 5.3 is not supported by Magento and upgrading to it might involve additional tasks not discussed here. For more information, consult a resource like <a href="http://phpave.com/upgrade-php-53-to-php-56-on-ubuntu-1204-lts" target="_blank">phpave</a>.</p></span>
</div>

To install or upgrade to PHP 5.6 on Ubuntu 12:

1.	Enter the following commands in the order shown:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5-5.6
		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl php5-bcmath

	<div class="bs-callout bs-callout-info" id="info">
  		<p>The <code>bcmath</code> extension is required for Magento Enterprise Edition (EE) only.</p>
	</div>

2.	Verify that PHP 5.6 installed properly:

		php -v

	Messages similar to the following should display:

		PHP 5.6.4-1+deb.sury.org~precise+1 (cli) (built: Dec 21 2014 19:26:25)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.6.0, Copyright (c) 1998-2014 Zend Technologies
    	with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

    <div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
 		 <p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
	</div>

3.	<a href="#instgde-prereq-timezone">Set PHP configuration options</a>.

<h2 id="instgde-prereq-php55-install-ubuntu">PHP 5.5 on Ubuntu 14 or Ubuntu 12</h2>

See one of the following sections for more information:

*	<a href="#instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu 14</a>
*	<a href="#instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu 12</a>

<h3 id="instgde-prereq-php55-install-ubuntu14">PHP 5.5 on Ubuntu 14</h3>
To install PHP 5.5 on Ubuntu 14:

1.	Enter the following command:

		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

		PHP 5.5.9-1ubuntu4.4 (cli) (built: Sep  4 2014 06:56:34)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
	    with Zend OPcache v7.0.3, Copyright (c) 1999-2014, by Zend Technologies

	<div class="bs-callout bs-callout-info" id="info">
		<span class="glyphicon-class">
  		<p>The preceding message confirms that the <code>Zend OPcache</code> is installed. We strongly recommend using the OPcache for performance reasons. If your PHP distribution does not come with the OPcache, see the <a href="http://php.net/manual/en/opcache.setup.php" target="_blank">PHP OPcache documentation</a>.</p></span>
	</div>

3.	<a href="#instgde-prereq-timezone">Set PHP configuration options</a>.

<h3 id="instgde-prereq-php55-install-ubuntu12">PHP 5.5 on Ubuntu 12</h3>
We can't verify this procedure; if you know how to install PHP 5.5 on Ubuntu 12, please click **Edit this page on GitHub** at the top of this page and let us know.

<!-- 1.	Use the following commands from <a href="http://www.dev-metal.com/how-to-setup-latest-version-of-php-5-5-on-ubuntu-12-04-lts/" target="_blank">dev-metal</a>:

		apt-get -y update
		add-apt-repository ppa:ondrej/php5
		apt-get -y update
		apt-get -y install php5 php5-mhash php5-mcrypt php5-curl php5-cli php5-mysql php5-gd php5-intl php5-xsl

2.	Verify the PHP version by entering `php -v`. Messages similar to the following should display:

		PHP 5.5.18-1+deb.sury.org~precise+1 (cli) (built: Oct 17 2014 15:11:34)
		Copyright (c) 1997-2014 The PHP Group
		Zend Engine v2.5.0, Copyright (c) 1998-2014 Zend Technologies
    	with Zend OPcache v7.0.4-dev, Copyright (c) 1999-2014, by Zend Technologies

3.	Set the PHP configuration options as discussed in the next section. -->

<h2 id="instgde-prereq-timezone">Set PHP configuration options</h2>
{% include install/php-config.html %}


#### Related topics

*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/php-centos.html">PHP 5.5 or 5.6&mdash;CentOS</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/pre-install.html">Ways to install the Magento software</a>

