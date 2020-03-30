---
group: installation-guide
subgroup: 20_other
title: Known issues that affect installation
menu_title: Known issues that affect installation
menu_node:
menu_order: 500
functional_areas:
  - Install
  - System
  - Setup
redirect_to: https://support.magento.com/hc/en-us/articles/360034242212
---

If you use the optional [PHP](https://glossary.magento.com/php) [extension](https://glossary.magento.com/extension) `xdebug`, you can encounter exceptions:

*  During installation
*  Accessing either the [Magento Admin](https://glossary.magento.com/magento-admin) or [storefront](https://glossary.magento.com/storefront) after a successful installation

Sample exception:

```terminal
Fatal error: Maximum function nesting level of '100' reached, aborting!
```

To resolve this issue, you can:

*  Disable the `xdebug` extension.
*  Set the value of `xdebug.max_nesting_level` to a value of 200 or more. For more information, see [xdebug documentation](http://xdebug.org/docs/basic#max_nesting_level){:target="_blank"}.

After you change the configuration of or disable `xdebug`, restart Apache:

*  CentOS: `sudo service httpd restart`
*  Ubuntu: `sudo service apache2 restart`
