---
layout: howtom2instgde_chapters
title: Installing Composer and cloning the Magento 2 GitHub repository
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

<h2 id="instgde-prereq-compose-clone">Cloning the Magento 2 GitHub repository</h2>

To clone the Magento 2 GitHub repository:

1.	To clone the Magento 2 repository using secure shell (SSH), <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">generate SSH keys</a> and add the public key to GitHub.

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

<h2 id="instgde-prereq-compose-access">Setting file system permissions and ownership</h2>

After the clone is complete, set ownership of all Magento 2 files and directories and make sure they are writable by that user.

Typically, Magento 2 files and directories should be owned by the web server user; however, the choice of user is up to you. The important thing is that the owner of the Magento 2 file system must have write access to all files and directories.

We recommend setting the permissions as follows:

*	All directories have 700 permissions `(drwx------)`.

	700 permissions give full control (that is, read/write/execute) to the owner and no permissions to anyone else.

*	All files have 600 permissions `(-rw-------)`.

	600 permissions mean the owner can read and write but other users have no permissions.

Assuming the web server user owns the Magento 2 file system, use the following steps:

1.	Change to the Magento 2 directory:
	
	<pre>cd magento2</pre>

2.	Find the web server user:
	
	*	Ubuntu: <code>grep User /etc/apache2/apache2.conf</code>	
	*	CentOS: <code>grep User /etc/httpd/conf/httpd.conf</code>

3.	Set ownership:
	
	<code>chown -R [your web server user name] .</code>
		
	For example,
		
	<code>chown -R apache .</code>
	
4.	Set permissions:

	<pre>find . -type d -exec chmod 700 {} \;
find . -type f -exec chmod 600 {} \;</pre>

<h2>Next step</h2>

After completing the tasks discussed on this page, <a href="{{ site.gdeurl }}install-gde/install/install.html">install the Magento 2 software</a>.