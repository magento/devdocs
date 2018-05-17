---
group: install_trouble
subgroup: 03_install
title: During installation, xdebug maximum function nesting level error
menu_title: During installation, xdebug maximum function nesting level error
menu_node:
menu_order: 500
version: 2.0
github_link: install-gde/trouble/php/tshoot_xdebug.md
redirect_from:
  - /guides/v1.0/install-gde/trouble/tshoot_xdebug.html
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

<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} or {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} after installation.</p>
<p>For details, see <a href="{{ page.baseurl }}/install-gde/trouble/tshoot_install-issues.html">Known issues that affect installation</a>.</p>

