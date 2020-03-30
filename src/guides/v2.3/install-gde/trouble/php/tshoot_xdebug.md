---
group: installation-guide
subgroup: 03_install
title: During installation, xdebug maximum function nesting level error
menu_title: During installation, xdebug maximum function nesting level error
menu_node:
menu_order: 500
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360034238512
---

### Details

During the installation, a  message similar to the following displays:

```text
PHP Fatal error: Maximum function nesting level of '100' reached, aborting! in <path>/ClassLoader.php
```

### Solution

There is a known issue with <code>xdebug</code> that can affect Magento installations or access to the [storefront](https://glossary.magento.com/storefront) or [Magento Admin](https://glossary.magento.com/magento-admin) after installation.

For details, see [Known issue with xdebug](https://support.magento.com/hc/en-us/articles/360034242212).
