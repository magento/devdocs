---
group: installation-guide
subgroup: S_Integrator
title: Get the Magento Commerce metapackage
menu_title: Get the Magento Commerce metapackage
menu_order: 4
menu_node:
functional_areas:
  - Install
  - System
  - Setup
---

To get the {{site.data.var.ee}} metapackage:

1.	See [(Integrator) Integrator installation]({{ page.baseurl }}/install-gde/prereq/integrator_install.html) first.
1.	Make sure you know your support portal username and password.

	If you don't remember it, contact Magento Support before you continue.
1.	Log in to your Magento server as, or switch to, the <a href="{{ page.baseurl }}/install-gde/prereq/file-sys-perms-over.html">Magento file system owner</a>.
2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.
3.	Enter the following command:

		composer create-project --repository=https://repo.magento.com/ magento/project-enterprise-edition <installation directory name>

	When prompted, enter your <a href="{{ page.baseurl }}/install-gde/prereq/connect-auth.html">authentication keys</a>. Your *public key* is your username; your *private key* is your password.

	The following error indicates your tokens are incorrect:

		  Could not find package magento/project-enterprise-edition with version <version>

	If you receive this error after creating authentication keys as discussed previously, your account might not be authorized to download Magento EE. Contact [Magento support]({{ page.baseurl }}/install-gde/install/get-help.html) to resolve the issue.

	This command creates the project and downloads dependencies for it. The project is in a directory named `<installation directory name>` if you provided the parameter or `project-enterprise-edition` if you did not.

	<div class="bs-callout bs-callout-info" id="info" markdown="1">
	If the following error displays, see [troubleshooting]({{ page.baseurl }}/install-gde/trouble/tshoot_composer-fail.html):
	```terminal
  file_get_contents(app/etc/NonComposerComponentRegistration.php): failed to open stream: No such file or directory
	```
	</div>

{% include install/file-system-perms-before.md %}

#### Next step

Install the Magento software:

*	<a href="{{ page.baseurl }}/install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{ page.baseurl }}/install-gde/install/web/install-web.html">Setup Wizard</a>
