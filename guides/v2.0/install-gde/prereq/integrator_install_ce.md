---
layout: default
group: install_pre
subgroup: S_Integrator
title: Get the Magento CE metapackage
menu_title: Get the Magento CE metapackage
menu_order: 3
menu_node: 
version: 2.0
github_link: install-gde/prereq/integrator_install_ce.md
---

To get the Magento CE metapackage:

1.	See [(Integrator) Integrator installation]({{ page.baseurl }}install-gde/prereq/integrator_install.html) first.
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


{% include install/file-system-perms-before.md %}

#### Next step
Install the Magento software:

*	<a href="{{page.baseurl}}install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{page.baseurl}}install-gde/install/web/install-web.html">Setup Wizard</a>
