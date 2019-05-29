---
group: installation-guide
subgroup: 03_install
title: During installation, xdebug maximum function nesting level error
menu_title: During installation, xdebug maximum function nesting level error
menu_node:
menu_order: 500
redirect_from:
  - /guides/v2.0/install-gde/trouble/tshoot_xdebug.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

During the installation, a  message similar to the following displays:

	PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in <path>/ClassLoader.php

### Solution

There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the [storefront](https://glossary.magento.com/storefront) or [Magento Admin](https://glossary.magento.com/Magento Admin) after installation.

For details, see [Known issue with xdebug]({{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html).
