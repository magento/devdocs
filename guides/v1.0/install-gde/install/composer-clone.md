---
layout: default
group: install_pre
subgroup: T_Developer
title: Install Composer and clone the Magento repository
menu_title: Install Composer and clone the Magento repository
menu_node: 
menu_order: 10
github_link: install-gde/install/composer-clone.md
---

<!-- This topic is referred to from Magento 2 code! Don't change the URL without informing engineering! -->
<!-- Referring file: README.md owned by core -->
<!-- References are to http://devdocs.magento.com/guides/v1.0/install-gde/install/composer-clone.html#instgde-prereq-compose-install, http://devdocs.magento.com/guides/v1.0/install-gde/install/composer-clone.html#instgde-prereq-compose-clone -->
<!-- Also referred to by view\magento\setup\readiness-check\progress.phtml owned by Ogres. Reference is to http://devdocs.magento.com/guides/v1.0/install-gde/install/composer-clone.html#instgde-prereq-compose-access and http://devdocs.magento.com/guides/v1.0/install-gde/install/composer-clone.html#instgde-prereq-compose-access -->
 
#### Contents 

*	<a href="#instgde-overview-composer">Composer and Magento</a>
*	<a href="#instgde-prereq-compose-install">Install Composer</a>
*	<a href="#instgde-prereq-compose-clone">Clone the Magento repository</a>
*	<a href="#instgde-prereq-compose-access">Set file system permissions and ownership</a>

<h2 id="instgde-overview-composer">Composer and Magento</h2>

We now use <a href="https://getcomposer.org/" target="_blank">Composer</a> to install the Magento software. Composer enables us to manage the Magento system, extensions, and their dependencies.

Composer provides you with the following advantages:

*	Enables you to reuse third-party libraries without bundling them with source code
*	Component-based architecture with robust dependency management
*	Manages dependencies to reduce extension conflicts and compatibility issues
*	Versioned dependencies
*	<a href="https://getcomposer.org/doc/01-basic-usage.md#package-versions" target="_blank">Semantic versioning</a>
*	Supports PHP Framework Interoperability standard

We'll have more information soon on how developers can use Composer to package extensions to distribute to Magento merchants and to other developers.

<h2 id="instgde-prereq-compose-install">Install Composer</h2>

First, check  if Composer is already installed: 

In a command prompt, enter any of the following commands:

*	`composer --help`
*	`composer list --help`

If command help displays, Composer is already installed; in that case, you can skip the next section and continue with <a href="#instgde-prereq-compose-clone">Clone the Magento repository</a>.

If an error displays, use the following steps to install Composer.

To install Composer:

1.	Change to or create an empty directory on your Magento server.

2.	Enter the following commands:

	<pre>curl -sS https://getcomposer.org/installer | php
	mv composer.phar /usr/local/bin/composer</pre>

	For additional installation options, see the <a href="https://getcomposer.org/download/" target="_blank">Composer installation documentation</a>.

<h2 id="instgde-prereq-compose-clone">Clone the Magento repository</h2>
You can clone the Magento 2 GitHub repository using either SSH or HTTPS protocols:

*	Use SSH for better security (no user name and password are exchanged). This requires you to <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">share a public key</a> with GitHub.
*	Use HTTPS if you don't share an SSH key with GitHub (your user name and password are encrypted before being sent to GitHub).

See one of the following section:

*	<a href="#instgde-prereq-compose-clone-ssh">Clone with SSH</a>
*	<a href="#instgde-prereq-compose-clone-https">Clone with HTTPS</a>

<h3 id="instgde-prereq-compose-clone-ssh">Clone with SSH</h3>

To clone the Magento GitHub repository using the SSH protocol:

1.	Copy to the clipboard the Magento GitHub repository SSH clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **SSH**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-ssh.png" alt="Clone the Magento GitHub repository using SSH"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

	Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here.

2.	Enter the following command:

		git clone git@github.com:magento/magento2.git

3.	Wait for the repository to clone on your server.

	<div class="bs-callout bs-callout-info" id="info">
		<p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
			<pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
	</div>

4.	Continue with <a href="#instgde-prereq-compose-access">Set file system permissions and ownership</a>.

<h3 id="instgde-prereq-compose-clone-https">Clone with HTTPS</h3>

To clone the Magento GitHub repository using the HTTPS protocol:

1.	Copy to the clipboard the Magento GitHub repository HTTPS clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **HTTPS**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-https.png" alt="Clone the Magento GitHub repository using HTTPS"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

2.	Enter the following command:

		git clone https://<your GitHub user name>:<your password>@github.com/magento/magento2.git

3.	Wait for the repository to clone on your server.

4.	Continue with the next section.

<h2 id="instgde-prereq-compose-access">Set file system permissions and ownership</h2>

After the clone is complete, set ownership of all Magento files and directories and make sure they are writable by that user.

Typically, Magento files and directories should be owned by the web server user; however, the choice of user is up to you. The important thing is that the owner of the Magento file system must have write access to all files and directories.

We recommend setting the permissions as follows:

*	All directories have 700 permissions `(drwx------)`.

	700 permissions give full control (that is, read/write/execute) to the owner and no permissions to anyone else.

*	All files have 600 permissions `(-rw-------)`.

	600 permissions mean the owner can read and write but other users have no permissions.

Assuming the web server user owns the Magento 2 file system, use the following steps:

1.	Change to the Magento directory:

		cd <web server docroot>/<magento2 clone dir>

	Cloning the Magento 2 GitHub repository creates a directory, typically `magento2`, under your web server's docroot. Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here</a>.

	Examples:

	*	Ubuntu: `/var/www/magento2`
	*	CentOS: `/var/www/html/magento2`

2.	Find the web server user:

	Ubuntu: `ps -ef | grep apache2`

	CentOS: `grep User /etc/httpd/conf/httpd.conf`

3.	Set ownership:

	<code>chown -R [your web server user name] .</code>

	Typical examples:

	CentOS: <code>chown -R apache .</code>

	Ubuntu: `chown -R www-data .`

4.	Set permissions:

		find . -type d -exec chmod 700 {} \; && find . -type f -exec chmod 600 {} \; && chmod +x bin/magento

	If you must enter the commands as `sudo`, use:

		sudo find . -type d -exec chmod 700 {} \; && sudo find . -type f -exec chmod 600 {} \; && sudo chmod +x bin/magento

#### Next step

After completing the tasks discussed on this page, see <a href="{{ site.gdeurl }}install-gde/install/prepare-install.html">Update installation dependencies</a>.
