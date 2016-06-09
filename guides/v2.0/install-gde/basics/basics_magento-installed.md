---
layout: default
group: install2
subgroup: Getting Started
title: Is the Magento software installed already?
menu_title: Is the Magento software installed already?
menu_node: 
menu_order: 2
version: 2.0
github_link: install-gde/basics/basics_magento-installed.md
redirect_from: /guides/v1.0/install-gde/basics/basics_magento-installed.html
---

To determine if the Magento software is installed already, you can access the Magento Admin (administration console) or storefront using a web browser.

**Prerequisite**: You must know the Magento server's host name or IP address, and the URL to access the Magento installation. If you're not sure, find the information from your system administrator or hosting provider.

Then open a web browser and go to the URL you were provided. Some examples follow:

	http://www.example.com/magento2/admin
	https://www.example.com/admin
	http://www.example.com
	
If a 404 (Not Found) error displays, Magento probably isn't installed. You should confirm that with your system administrator or hosting provider.

If Magento is installed, you should see something like the following after you log in:

Magento Admin:

<p><img src="{{ site.baseurl }}common/images/install_success_admin.png" alt="Magento Admin which verifies a successful installation"></p>


Magento storefront:

<p><img src="{{ site.baseurl }}common/images/install-success_store.png" alt="Magento storefront which verifies a successful installation"></p>

## What if Magento is installed?

If Magento *is* installed and you want to manage or upgrade components, see the following guides instead:

*	<a href="{{ site.gdeurl" }}comp-mgr/bk-compman-upgrade-guide.html">Component Manager Guide</a>

	A Magento *component* is an extension, language package, or theme. The Component Manager installs, uninstalls, updates, enables, or disables components.
*	<a href="{{ site.gdeurl }}comp-mgr/upgrader/upgrade-start.html">Upgrade Guide</a>

	Upgrade the Magento software or components.
