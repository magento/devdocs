---
layout: default
title: Installing and configuring Apache
---

<h1 id="instgde-prereq-apache">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/apache.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>You must run all commands on this page as a user with <code>root</code> privileges</p></span>
</div>

<h2 id="install-prereq-apache-ubuntu">Installing Apache on Ubuntu</h2>

1.	Use the standard on the <a href="https://help.ubuntu.com/10.04/serverguide/httpd.html" target="_blank">Ubuntu site</a>. 
2.	Enable <a href="http://askubuntu.com/questions/48362/how-to-enable-mod-rewrite-in-apache" target="_blank">server rewrites</a>.
3.	Specify the type of directives that can be used in `.htaccess`. Magento uses `.htaccess` for redirects. <a href="http://httpd.apache.org/docs/2.2/mod/core.html#allowoverride" target="_blank">Apache documentation</a>.

	<div class="bs-callout bs-callout-info" id="info">
	<img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
		<p>You must change the value of <code>Allow Override</code> in the directive for the directory to which you expect to install the Magento software. For example, to install in the web server docroot, edit the directive in <code>&lt;Directory /var/www></code>.</span>
	</div>
	
4.	Restart Apache: `service apache2 restart`

<h2 id="install-prereq-apache-centos">Installing Apache on CentOS</h2>

1.	Use the standard on the <a href="http://httpd.apache.org/docs/2.4/platform/rpm.html" target="_blank">Apache site</a>. 
2.	Enable <a href="http://unix.stackexchange.com/questions/57946/enable-apache-mod-rewrites-to-load-clean-urls" target="_blank">server rewrites</a>.

	<div class="bs-callout bs-callout-info" id="info">
	<img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
	<span class="glyphicon-class">
		<p>You must change the value of <code>Allow Override</code> in the directive for the directory to which you expect to install the Magento software. For example, to install in the web server docroot, edit the directive in <code>&lt;Directory "/var/www/html"></code>.</span>
	</div>
	
2.	Set the type of directives that can be used in `.htaccess`. Magento uses `.htaccess` for redirects. <a href="http://httpd.apache.org/docs/2.2/mod/core.html#allowoverride" target="_blank">Apache documentation</a>.


#### Related topics:

*	<a href="{{ site.gdeurl }}install-gde/prereq/php.html">Installing PHP 5.4 and required extensions</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/mysql.html">Installing and configuring MySQL</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/security.html">Configuring security options</a>
*	<a href="{{ site.gdeurl }}install-gde/prereq/optional.html">Installing optional software</a>
*	<a href="{{ site.gdeurl }}install-gde/install/composer-clone.html">Installing Composer and cloning the Magento 2 GitHub repository</a>
*	<a href="{{ site.gdeurl }}install-gde/install/install.html">Installing and reinstalling Magento 2</a>
