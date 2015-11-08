---
layout: default
group: install_pre
subgroup: S_Integrator
title: (Integrator) Get the Composer metapackage
menu_title: (Integrator) Get the Composer metapackage
menu_order: 1
menu_node: parent
github_link: install-gde/prereq/integrator_install.md
---

<div class="bs-callout bs-callout-tip">
  <p>Totally lost? Need a helping hand? Try our <a href="{{ site.gdeurl }}install-gde/install-quick-ref.html">installation quick reference (tutorial)</a> or <a href="{{ site.gdeurl }}install-gde/install-roadmap_part1.html">installation roadmap (reference)</a>.</p>
</div>

#### Contents
*	<a href="#int-aud">Intended audience</a>
*	<a href="#integrator-first-over">First steps</a>
*	<a href="#instgde-overview-composer">Composer and Magento</a>
*	<a href="#integrator-first-composer">Get the metapackage</a>
*	<a href="#instgde-prereq-compose-access">Set file system ownership and permissions</a>

<h2 id="int-aud">Intended audience</h2>
The audience for this topic is anyone who downloads the Magento metapackage using `composer create-project`. If that isn't you, go back and <a href="{{ site.gdeurl }}install-gde/continue.html">choose another starting point</a>.


<h2 id="integrator-first-over">First steps</h2>
As an integrator, you want to manage each of your Magento core components and third-party components using the Component Manager and System Upgrade.

To do so, you start by creating a Composer project from our metapackage. The metapackage installs each component so it can be centrally managed after installation.

{% include install/composer-overview.html %}

<h2 id="integrator-first-composer">Get the metapackage</h2>
To get started:

1.	Log in to your Magento server as, or switch to, a user who has privileges to write to the web server docroot.
2.	Change to the web server docroot directory, or to a directory you've configured as a virtual host docroot.
3.	Enter the following command:

		composer create-project magento/project-community-edition --stability="beta" <installation directory name>

	This command creates the project defined in <a href="http://packages.magento.com/#!/community" target="_blank">packages.magento.com</a> and downloads dependencies for it. The project is in a directory named `<installation directory name>` if you provided the parameter or `product-community-edition` if you did not.

	If you configured a virtual host, `<installation directory name>` must match the docroot directory defined for it.

3.	Continue with the next section.

<h2 id="instgde-prereq-compose-access">Set file system ownership and permissions</h2>
The following sections discuss how to set file system ownership and permissions:

*	<a href="#install-perms-import">Why we recommend you set file system permissions</a>
*	<a href="#install-perms-set">File system permissions and ownership</a>

<h3 id="install-perms-import">Why we recommend you set file system permissions</h3>
{% include install/file-system-perms1-why.html %}

<h3 id="install-perms-set">File system permissions and ownership</h3>
{% include install/file-system-perms2-how.html %}

#### Next step
Install the Magento software:

*	<a href="{{ site.gdeurl }}install-gde/install/cli/install-cli.html">Command line</a>
*	<a href="{{ site.gdeurl }}install-gde/install/web/install-web.html">Setup Wizard</a>