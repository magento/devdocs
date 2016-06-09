---
layout: default 
group: install_trouble
subgroup: Errors during installation
title: During installation, xdebug maximum function nesting level error
menu_title: During installation, xdebug maximum function nesting level error
menu_node: 
menu_order: 500
version: 2.1
github_link21: install-gde/trouble/php/tshoot_xdebug.md
---

<h2 id="install-trouble-xdebug">During installation, xdebug maximum function nesting level error</h2>

### Details

During the installation, a  message similar to the following displays: 

	PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in <path>/ClassLoader.php

### Solution

<p>There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the storefront or Magento Admin after installation.</p>
<p>For details, see <a href="{{ site.gdeurl21 }}install-gde/trouble/tshoot_install-issues.html#known-devbeta-xdebug">Known issue with xdebug</a>.

