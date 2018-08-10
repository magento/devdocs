---
group: install2
subgroup: Getting Started
title: Is the Magento software installed already?
menu_title: Is the Magento software installed already?
menu_node:
menu_order: 101
level3_menu_node: level3child
level3_subgroup: basics
version: 2.1
redirect_from: /guides/v1.0/install-gde/basics/basics_magento-installed.html
functional_areas:
  - Install
  - System
  - Setup
---

To determine if the Magento software is installed already, you can access the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} (administration console) or {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} using a web browser.

**Prerequisite**: You must know the Magento server's hostname or IP address, and the {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} to access the Magento installation. If you're not sure, find the information from your system administrator or hosting provider.

Then open a web browser and go to the URL you were provided. Some examples follow:

	http://www.example.com/magento2/admin
	https://www.example.com/admin
	http://www.example.com

If a 404 (Not Found) error displays, Magento probably isn't installed. You should confirm that with your system administrator or hosting provider.

If Magento is installed, you should see something like the following after you log in:

Magento Admin:

![Magento Admin which verifies a successful installation]({{ site.baseurl }}/common/images/install_success_admin.png)


Magento storefront:

![Magento storefront which verifies a successful installation]({{ site.baseurl }}/common/images/install-success_store.png)

## What if Magento is installed?

If Magento *is* installed and you want to manage or upgrade components, see the following guides instead:

*	[Component Manager Guide]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html)

	A Magento *component* is an extension, language package, or theme. The Component Manager installs, uninstalls, updates, enables, or disables components.
*	[Upgrade Guide]({{ page.baseurl }}/comp-mgr/upgrader/upgrade-start.html)

	Upgrade the Magento software or components.
