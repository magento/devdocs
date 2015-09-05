---
layout: default
group: install_pre
subgroup: Prerequisites
title: Set up the updater
menu_title: Set up the updater
menu_order: 10
menu_node: 
github_link: install-gde/prereq/prereq_updater.md
---

#### Contents

*	<a href="#compman-updater-over">Overview of the updater</a>
*	<a href="#compman-updater-clone">Cloning the updater repository</a>

<h2 id="compman-updater-over">Overview of the updater</h2>
The updater synchronizes with Magento Connect for updating components and upgrading the Magento software. Contributing developers must clone the updater GitHub repository and copy the files to `<your Magento install dir>/update`

<h2 id="compman-updater-clone">Cloning the updater repository</h2>
You can clone the Magento 2 Updater repository using either SSH or HTTPS protocols:

*	Use SSH for better security (no user name and password are exchanged). This requires you to <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">share a public key</a> with GitHub.
*	Use HTTPS if you don't share an SSH key with GitHub (your user name and password are encrypted before being sent to GitHub).

See one of the following section:

*	<a href="#compman-clone-ssh">Clone with SSH</a>
*	<a href="#compman-clone-https">Clone with HTTPS</a>
*	<a href="#compman-clone-composer">Update installation dependencies</a>
*	<a href="#compman-copy">Copy the files</a>

<h3 id="compman-clone-ssh">Clone with SSH</h3>
To clone the Magento 1 Updater repository using the SSH protocol:

1.	Copy to the clipboard the Magento 2 Updater repository SSH clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2-updater" target="_blank">the Magento 2 Updater repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **SSH**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-ssh.png" alt="Clone the Magento 2 Updater repository using SSH"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

	Need help locating the docroot? Click <a href="{{ site.gdeurl }}install-gde/basics/basics_docroot.html">here.

2.	Enter the following command:

		git clone git@github.com:magento/magento2-updater.git

3.	Wait for the repository to clone on your server.

	<div class="bs-callout bs-callout-info" id="info">
		<p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
			<pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
	</div>

4.	Continue with <a href="#compman-clone-composer">Update installation dependencies</a>.

<h3 id="compman-clone-https">Clone with HTTPS</h3>
To clone the Magento 2 Updater repository using the HTTPS protocol:

1.	Copy to the clipboard the Magento 2 Updater repository HTTPS clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2-updater" target="_blank">the Magento 2 Updater repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **HTTPS**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-https.png" alt="Clone the Magento 2 Updater repository using HTTPS"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

2.	Enter the following command:

		git clone https://github.com/magento/magento2-updater.git

	If the command fails with an authentication error, try

		git clone https://<your GitHub user name>:<your password>@github.com/magento/magento2-updater.git

3.	Wait for the repository to clone on your server.

4.	Continue with the next section.

<h3 id="compman-clone-composer">Update installation dependencies</h3>
The updater application has dependencies specified in its `composer.json` file. Before you continue, resolve those dependencies as follows:

1.	Change to the directory to which you cloned the updater application.
2.	As a user with permissions to write to the directory, enter

		composer install

	Wait for dependencies to resolve and continue with the next section.

<h3 id="compman-copy">Copy the files</h3>
As a user with privileges to write files to the Magento file system, enter the following command:

	mkdir -p <your Magento install dir>/update
	cp -R <updater-clone-directory>/* <your Magento install dir>/update

For example, if you cloned the updater to `/var/www/html/magento2-updater` and Magento is installed in `/var/www/html/magento2`, enter

	mkdir -p /var/www/html/magento2/update
	cp -R /var/www/html/magento2-updater/* /var/www/html/magento2/update

#### Next step

*	<a href="{{ site.gdeurl }}install-gde/continue-to-install.html">Installation options</a>