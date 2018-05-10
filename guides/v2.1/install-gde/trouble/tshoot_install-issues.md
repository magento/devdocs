---
group: install_trouble
subgroup: 20_other
title: Known issues that affect installation
menu_title: Known issues that affect installation
menu_node:
menu_order: 500
version: 2.1
github_link: install-gde/trouble/tshoot_install-issues.md
functional_areas:
  - Install
  - System
  - Setup
---

If you use the optional {% glossarytooltip bf703ab1-ca4b-48f9-b2b7-16a81fd46e02 %}PHP{% endglossarytooltip %} {% glossarytooltip 55774db9-bf9d-40f3-83db-b10cc5ae3b68 %}extension{% endglossarytooltip %} `xdebug`, you can encounter exceptions:

*   During installation 
*   Accessing either the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %} or {% glossarytooltip 1a70d3ac-6bd9-475a-8937-5f80ca785c14 %}storefront{% endglossarytooltip %} after a successful installation 

Sample exception:

    Fatal error: Maximum function nesting level of '100' reached, aborting!

To resolve this issue, you can:

*   Disable the `xdebug` extension.
*   Set the value of `xdebug.max_nesting_level` to a value of 200 or more. For more information, see <a href="http://xdebug.org/docs/basic#max_nesting_level" target="_blank">xdebug documentation</a>.

After you change the configuration of or disable `xdebug`, restart Apache:

*   CentOS: `sudo service httpd restart`
*   Ubuntu: `sudo service apache2 restart`
