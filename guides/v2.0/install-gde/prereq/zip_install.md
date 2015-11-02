---
layout: default
group: install_pre
subgroup: R_General
title: Install the Magento archive on your server
menu_title: Install the Magento archive on your server
menu_order: 1
menu_node: parent
github_link: install-gde/prereq/zip_install.md
---


#### Contents 

*	<a href="#integrator-aud">Intended audience</a>
*	<a href="#zip-prereq">Prerequisites</a>
*	<a href="#zip-perms">Set file system ownership and permissions</a>

<h2 id="integrator-aud">Intended audience</h2>
The audience for this topic is everyone. If you'd rather use Composer, go back and <a href="{{ site.gdeurl }}install-gde/continue.html">choose another starting point</a>.

<h2 id="zip-prereq">Prerequisites</h2>
Before you continue, make sure you've done all of the following:

*	Set up a server that meets our <a href="{{ site.gdeurl }}install-gde/system-requirements.html">system requirements</a>
*	Created the <a href="{{ site.gdeurl }}install-gde/prereq/apache-user.html">Magento file system owner</a>	

<h2 id="zip-transfer">Transfer the Magento archive to your server</h2>
TBD

<h2 id="zip-perms">Set file system ownership and permissions</h2>
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