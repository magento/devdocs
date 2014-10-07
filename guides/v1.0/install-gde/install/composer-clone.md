---
layout: howtom2instgde_chapters
title: Install Composer and clone the Magento 2 GitHub repository
---

<h1 id="instgde-prereq-compose-clone">{{ page.title }}</h1>

<p><a href="{{ site.githuburl }}install-gde/prereq/composer-clone.md" target="_blank"><em>Help us improve this page</em></a>&nbsp;<img src="{{ site.baseurl }}common/images/newWindow.gif"/></p>

<h2 id="instgde-prereq-compose-intro">Introduction to installing Magento using Composer</h2>

TBD

<div class="bs-callout bs-callout-info" id="info">
  <img src="{{ site.baseurl }}common/images/icon_note.png" alt="note" align="left" width="40" />
<span class="glyphicon-class">
  <p>Unless otherwise stated, you must run all commands on this page as a user with <code>root</code> privileges.</p></span>
</div>

<h2 id="instgde-prereq-compose-install">Install Composer</h2>

To install Composer:

1.	Change to or create an empty directory on your Magento server.

2.	Enter the following commands:

	<pre>curl -sS https://getcomposer.org/installer | php
	mv composer.phar /usr/local/bin/composer</pre>
	
	For additional installation options, see the <a href="https://getcomposer.org/download/" target="_blank">Composer installation documentation</a>.

<h2 id="instgde-prereq-compose-clone">Clone the Magento 2 GitHub repository</h2>

To clone the Magento 2 GitHub repository:

1.	Copy to the clipboard the Magento 2 GitHub repository SSH or HTTPS clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento 2 GitHub repository</a>.
	
	b.	On the right side of the page, under the *clone URL* field, click either **SSH** or **HTTPS**.
	
	c.	Click the **Copy to clipboard** button.
	
	The following figure shows an example of copying the HTTPS clone URL to the clipboard.
	
	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-url1.png" alt="Clone the Magento 2 GitHub repository using either HTTPS or SSH"></p>
	
1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

2.	Enter any of the following commands:

	To clone using HTTPS: `git clone https://github.com/magento/magento2.git`
	
	To clone using SSH: `git clone git@github.com:magento/magento2.git`
	
3.	Wait for the repository to clone on your server.

4.	After the clone is complete, enter the following commands to set ownership of all Magento 2 files and directories to the web server user:

	Change to the Magento 2 directory:
	
		<pre>cd magento2</pre>

	Find the web server user:
	
	Ubuntu: <code>grep User /etc/apache2/apache2.conf</code>
	
	CentOS: <code>grep User /etc/httpd/conf/httpd.conf</code>

	Set ownership:
	
	<code>chown -R [your web server user name]</code>
		
	For example,
		
	<code>chown -R apache</code>