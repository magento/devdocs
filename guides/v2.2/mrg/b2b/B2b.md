---
group: module-reference-guide
subgroup: 30_B2B
title: Magento_b2b module
menu_title: B2b
menu_order: 10
---

## Overview

The `Magento_b2b` module is the base module for B2B. It must be present on all B2B installations.

This module also provides several B2B branding elements. For example, it adds a link to B2B customer support in Admin, and it displays "B2B Edition" at the bottom of the site. Also, the module adds the configuration page for B2B settings where an admin user can enable or disable a B2B feature. Disabling a B2B feature in store configurations disables this feature for the storefront only, and it is still available in the admin panel.

## Installation details

This module must be installed to use and to configure the other B2B modules. It can be uninstalled after other B2B modules are uninstalled.

## Structure

[Learn about a typical file structure for a Magento 2 module]({{ page.baseurl }}/extension-dev-guide/build/module-file-structure.html).

## Extensibility

Extension developers can interact with the Magento_B2b module. For more information about the Magento extension mechanism, see [Magento plug-ins]({{ page.baseurl }}/extension-dev-guide/plugins.html).

[The Magento dependency injection mechanism]({{ page.baseurl }}/extension-dev-guide/depend-inj.html) enables you to override the functionality of the Magento_B2b module.

## Additional information

You can track [backward incompatible changes made in a Magento B2b mainline after the Magento 2.2 release]({{ page.baseurl }}/release-notes/changes/b2b_changes.html).
