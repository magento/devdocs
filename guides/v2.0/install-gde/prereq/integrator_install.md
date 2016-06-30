---
layout: default
group: install_pre
subgroup: S_Integrator
title: (Integrator) Get the Composer metapackage
menu_title: (Integrator) Get the Composer metapackage
menu_order: 1
menu_node: parent
version: 2.0
github_link: install-gde/prereq/integrator_install.md
---

<div class="bs-callout bs-callout-tip">
  <p>Totally lost? Need a helping hand? Try our <a href="{{page.baseurl}}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{page.baseurl}}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>.</p>
</div>

#### Contents
*	<a href="#int-aud">Intended audience</a>
*	<a href="#integrator-first-over">First steps</a>
*	<a href="#instgde-overview-composer">Composer and Magento</a>
*	<a href="#instgde-prereq-compose-install">Install Composer</a>
*	<a href="#integrator-first-composer-ce">Get the Magento CE metapackage</a>
*	<a href="#integrator-first-composer-ee">Get the Magento EE metapackage</a>
*	[Set pre-installation file system ownership and permissions](#perms-over) 

<h2 id="int-aud">Intended audience</h2>
The audience for this topic is anyone who downloads the Magento metapackage using `composer create-project`. If that isn't you, go back and <a href="{{page.baseurl}}install-gde/continue.html">choose another starting point</a>.


<h2 id="integrator-first-over">First steps</h2>
As an integrator, you want to manage each of your Magento core components and third-party components using the Component Manager and System Upgrade.

To do so, you start by creating a Composer project from our metapackage. The metapackage installs each component so it can be centrally managed after installation.

{% include install/composer-overview.html %}

{% include install/composer-clone.md %}

<h2 id="integrator-first-composer-ce">Get the Magento CE metapackage</h2>
To get started:

1.	If you haven't done so already, <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">get your authentication keys</a>.
1.	Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.
3.	Enter the following command:

		composer create-project --repository-url=https://repo.magento.com/ magento/project-community-edition <installation directory name>

	When prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>. Your *public key* is your username; your *private key* is your password.

	This command creates the project and downloads dependencies for it. The project is in a directory named `<installation directory name>` if you provided the parameter or `project-community-edition` if you did not.

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If the following error displays, see <a href="{{page.baseurl}}install-gde/trouble/tshoot_composer-fail.html">troubleshooting</a>:</p>
  		<pre>file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory</pre>
	</div>

4.	Continue with <a href="#perms-over">Set file system ownership and permissions</a>.

<h2 id="integrator-first-composer-ee">Get the Magento EE metapackage</h2>
To get started:

1.	Make sure you know your support portal user name and password.

	If you don't remember it, contact Magento Support before you continue.
1.	Log in to your Magento server as, or switch to, the <a href="{{page.baseurl}}install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.
3.	Enter the following command:

		composer create-project --repository-url=https://repo.magento.com/ magento/project-enterprise-edition <installation directory name>

	When prompted, enter your <a href="{{page.baseurl}}install-gde/prereq/connect-auth.html">authentication keys</a>. Your *public key* is your username; your *private key* is your password.

	The following error indicates your tokens are incorrect:

		  Could not find package magento/project-enterprise-edition with version 2.0.0

	This command creates the project and downloads dependencies for it. The project is in a directory named `<installation directory name>` if you provided the parameter or `project-enterprise-edition` if you did not.

	<div class="bs-callout bs-callout-info" id="info">
  		<p>If the following error displays, see <a href="{{page.baseurl}}install-gde/trouble/tshoot_composer-fail.html">troubleshooting</a>:</p>
  		<pre>file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory</pre>
	</div>

5.	Continue with the next section.

{% include install/file-system-perms-before.md %}

#### Next step
Install the Magento software:

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{page.baseurl}}install-gde/install/web/install-web.html">Setup Wizard</a>
