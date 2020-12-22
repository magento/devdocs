---
group: installation-guide
subgroup: Getting Started
title: Is the Magento software installed already?
menu_title: Is the Magento software installed already?
menu_node:
menu_order: 101
level3_menu_node: level3child
level3_subgroup: basics
functional_areas:
  - Install
  - System
  - Setup
---

To determine if the Magento software is installed already, you can access the [Magento Admin](https://glossary.magento.com/magento-admin) (administration console) or [storefront](https://glossary.magento.com/storefront) using a web browser.

**Prerequisite**: You must know the Magento server's hostname or IP address, and the [URL](https://glossary.magento.com/url) to access the Magento installation. If you're not sure, find the information from your system administrator or hosting provider.

Then open a web browser and go to the URL you were provided. Some examples follow:

```http
http://www.example.com/magento2/admin
https://www.example.com/admin
http://www.example.com
```

If a 404 (Not Found) error displays, Magento probably isn't installed. You should confirm that with your system administrator or hosting provider.

If Magento is installed, you should see something like the following after you log in:

Magento Admin:

![Magento Admin which verifies a successful installation]({{ site.baseurl }}/common/images/install_success_admin.png)

Magento storefront:

![Magento storefront which verifies a successful installation]({{ site.baseurl }}/common/images/install-success_store.png)

## What if Magento is installed?

If Magento *is* installed and you want to manage or upgrade the Magento software or components, see the [Upgrade Guide]({{ page.baseurl }}/comp-mgr/bk-compman-upgrade-guide.html).

{:.bs-callout-info}
A Magento *component* is an extension, language package, or theme. You must use the command line to install, uninstall, update, enable, or disable components.
