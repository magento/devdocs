---
layout: default
group: install_pre
subgroup: T_Developer
title: (Contributor) Clone the Magento repository
menu_title: (Contributor) Clone the Magento repository
menu_order: 1
menu_node: parent
version: 2.0
github_link: install-gde/prereq/dev_install.md
redirect_from: 
  - /guides/v1.0/install-gde/install/composer-clone.html
  - /guides/v2.0/install-gde/install/composer-clone.html
  - /guides/v2.0/install-gde/prereq/composer.html
---

<div class="bs-callout bs-callout-tip">
  <p>Totally lost? Need a helping hand? Try our <a href="{{page.baseurl}}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{page.baseurl}}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>.</p>
</div>

#### Contents 

*	<a href="#integrator-aud">Intended audience</a>
*	<a href="#instgde-overview-composer">Composer and Magento</a>
*	<a href="#instgde-prereq-compose-install">Install Composer</a>
*	<a href="#instgde-prereq-compose-clone">Clone the Magento repository</a>

<h2 id="integrator-aud">Intended audience</h2>
The audience for this topic is anyone who contributes to the Magento codebase. If that isn't you, go back and <a href="{{page.baseurl}}install-gde/continue.html">choose another starting point</a>.

{% include install/composer-overview.html %}

{% include install/composer-clone.md %}

<h2 id="instgde-prereq-compose-clone">Clone the Magento repository</h2>
This section discusses how to get current code by cloning the Magento GitHub's develop branch. You can clone either a release branch or the `develop` branch:

*	Release branches like `2.0` or `2.0.6` are more stable

	You *must* use a released branch with the <a href="{{page.baseurl}}migration/bk-migration-guide.html">Data Migration Tool</a>.
*	`develop` is more recent

Currently, the `develop` branch is the default but you can checkout a release branch like `2.0.6` after cloning.

<h3 id="instgde-prereq-compose-clone-auth">Creating an authorization file</h3>
The Magento 2 GitHub repository requires you to authenticate. The `composer install` commands fails if you do not. To authenticate, <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">generate authentication keys</a>, after which you create an `auth.json` file in the home directory of the Magento file system owner.

#### Generate authentication tokens

{% include install/auth-tokens-get.md %}

#### Create `auth.json`

{% include install/auth-json.md %}

<h3 id="instgde-prereq-compose-clone-ways">How to clone the Magento 2 GitHub repository</h3>
You can clone the Magento 2 GitHub repository using either SSH or HTTPS protocols:

*	Use SSH for better security (no user name and password are exchanged). This requires you to <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">share a public key</a> with GitHub.
*	Use HTTPS if you don't share an SSH key with GitHub (your user name and password are encrypted before being sent to GitHub).

See one of the following section:

*	<a href="#instgde-prereq-compose-clone-ssh">Clone with SSH</a>
*	<a href="#instgde-prereq-compose-clone-https">Clone with HTTPS</a>

<h4 id="instgde-prereq-compose-clone-ssh">Clone with SSH</h4>

To clone the Magento GitHub repository using the SSH protocol:

1.	Copy to the clipboard the Magento GitHub repository SSH clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **SSH**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-ssh.png" width="650px" alt="Clone the Magento GitHub repository using SSH"></p>

1.	Change to your web server's docroot directory.
	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

	Need help locating the docroot? Click <a href="{{page.baseurl}}install-gde/basics/basics_docroot.html">here.

2.	Enter `git clone` and paste the value you obtained from step 1.

	An example follows:

		git clone git@github.com:magento/magento2.git

3.	Wait for the repository to clone on your server.

	<div class="bs-callout bs-callout-info" id="info">
		<p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
			<pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
	</div>
4.	Optionally switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name> [-b <version>]

	For example, to check out the 2.0.6 release tag in a new branch named `2.0.6`, enter

		git checkout tags/2.0.6 -b 2.0.6

4.	Continue with <a href="{{page.baseurl}}install-gde/install/prepare-install.html">Update installation dependencies</a>.

<h4 id="instgde-prereq-compose-clone-https">Clone with HTTPS</h4>

To clone the Magento GitHub repository using the HTTPS protocol:

1.	Copy to the clipboard the Magento GitHub repository HTTPS clone URL.

	a.	In a web browser, go to <a href="https://github.com/magento/magento2" target="_blank">the Magento GitHub repository</a>.

	b.	On the right side of the page, under the *clone URL* field, click **HTTPS**.

	c.	Click the **Copy to clipboard** button.

	The following figure shows an example.

	<p><img src="{{ site.baseurl }}common/images/install_mage2_clone-https.png" alt="Clone the Magento GitHub repository using HTTPS"></p>

1.	Change to your web server's docroot directory.

	Typically, for Ubuntu, it's `/var/www` and for CentOS it's `/var/www/html`.

2.	Enter `git clone` and paste the value you obtained from step 1.

	An example follows

		git clone https://github.com/magento/magento2.git
3.	Wait for the repository to clone on your server.

	<div class="bs-callout bs-callout-info" id="info">
		<p>If the following error displays, make sure you <a href="https://help.github.com/articles/generating-ssh-keys/" target="_blank">shared your SSH key</a> with GitHub: </p>
			<pre>Cloning into 'magento2'...
Permission denied (publickey).
fatal: The remote end hung up unexpectedly</pre>
	</div>

4.	Optionally switch to a <a href="https://github.com/magento/magento2/tags" target="_blank">release tag</a> as follows:

		git checkout tags/<tag name> [-b <version>]

	For example, to check out the 2.0.6 release tag in a branch named `2.0.6`, enter

		git checkout tags/2.0.6 -b 2.0.6

#### Next step

After completing the tasks discussed on this page, see <a href="{{page.baseurl}}install-gde/install/prepare-install.html">Update installation dependencies</a>.



<!-- ABBREVIATIONS -->

*[contributing developer]: A developer who contributes code to the Magento 2 CE codebase
*[contributing developers]: Developers who contribute code to the Magento 2 CE codebase
