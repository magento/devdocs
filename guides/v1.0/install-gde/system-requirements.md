---
layout: default
group: install
subgroup: Getting Started
title: System Requirements
menu_title: Magento system requirements
menu_node: parent
menu_order: 1
github_link: install-gde/system-requirements.md
---
 
 
Before you install Magento, make sure your system meets or exceeds the following requirements:

*	Operating systems 

	Linux distributions such as RedHat Enterprise Linux (RHEL), CentOS, Ubuntu, Debian, and so on

*	<a href="https://getcomposer.org/download/" target="_blank">Composer</a> (latest stable version)
*	<a href="http://httpd.apache.org/download.cgi" target="_blank">Apache 2.2 or 2.4</a>
	
	In addition, the apache `mod_rewrite` module must be enabled. `mod_rewrite` enables the server to perform URL rewriting. For more information, see <a href="{{ site.gdeurl }}install-gde/prereq/apache.html">Apache</a>.
	
*	PHP:

	*	5.6.x
	*	5.5.x 

	<div class="bs-callout bs-callout-info" id="info">
	<span class="glyphicon-class">
  	<ul><li>There is a <a href="https://bugs.php.net/bug.php?id=66985" target="_blank">known PHP issue</a> with versions:
  		<ul><li>5.5.10&ndash;5.5.16</li>
		<li>5.6.0</li></ul>
	</li>
	<p>This issue prevents users from being able to set their timezones to Greenwich time and several other time zones. </p>
	<p>To work around the issue, see <a href="{{ site.gdeurl }}release-notes/known-issues.html#known-devrc-php">Known issue with certain PHP versions</a>.</p>
	<li>Magento no longer supports PHP 5.4.</li></ul></span>
	</div>

*	Required PHP extensions:

	*	PDO/MySQL
	*	mbstring
	*	mcrypt
	*	mhash
	*	simplexml
	*	curl
	*	gd2, ImageMagick 6.3.7 (or later) or both
	*	soap

*	<a href="http://dev.mysql.com/doc/refman/5.6/en/installing.html" target="_blank">MySQL 5.6.x</a>
*	Mail Transfer Agent (MTA) or an SMTP server
*	Optional but recommended:

	*	<a href="http://xdebug.org/download.php" target="_blank">php_xdebug2.2.0</a> or later (development environments only; can have an adverse effect on performance)

		<div class="bs-callout bs-callout-info" id="info">
  		<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.</p>
  		<p>For details, see <a href="{{ site.gdeurl }}release-notes/known-issues.html#known-devbeta-xdebug">Known issue with xdebug</a>.
		</div>

    *	PHPUnit (as a command-line tool) 4.1 or later









