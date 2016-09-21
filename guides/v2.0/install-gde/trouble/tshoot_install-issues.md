---
layout: default
group: install_trouble
subgroup: 20_other
title: Known issues that affect installation
menu_title: Known issues that affect installation
menu_node: 
menu_order: 500
version: 2.0
github_link: install-gde/trouble/tshoot_install-issues.md
---

<h2 id="known-devbeta-xdebug">Known issue with xdebug</h2>
If you use the optional PHP extension `xdebug`, you can encounter exceptions:

*   During installation 
*   Accessing either the Magento Admin or storefront after a successful installation 

Sample exception:

    Fatal error: Maximum function nesting level of '100' reached, aborting!

To resolve this issue, you can:

*   Disable the `xdebug` extension.
*   Set the value of `xdebug.max_nesting_level` to a value of 200 or more. For more information, see <a href="http://xdebug.org/docs/basic#max_nesting_level" target="_blank">xdebug documentation</a>.

After you change the configuration of or disable `xdebug`, restart Apache:

*   CentOS: `sudo service httpd restart`
*   Ubuntu: `sudo service apache2 restart`
