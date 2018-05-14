---
group: install_trouble
subgroup: 02_access
title: After installing, images and stylesheets do not load; only text displays, no graphics
menu_title: After installing, images and stylesheets do not load; only text displays, no graphics
menu_node:
menu_order: 5
version: 2.1
github_link: install-gde/trouble/tshoot_no-styles.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_no-styles.html
functional_areas:
  - Install
  - System
  - Setup
---

### Details

The path to images and stylesheets is not correct, either because of an incorrect base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} or because server rewrites (CentOS, Ubuntu) are not set up properly. To confirm this is the case, use a web browser inspector to check the paths to static assets and verify those assets are located on the Magento file system.

Magento static assets should be located under `<your Magento install dir>/pub/static/` (there should be `frontend` and `adminhtml` directories).

### Solution

*	Verify your <a href="{{ page.baseurl }}/install-gde/prereq/apache.html#apache-help-rewrite">Apache server rewrites</a> setting and your Magento server's base URL and try again. If you set up the `AllowOverride` directive incorrectly, {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} aren't served from the correct location.

*	If the Magento application is in <a href="{{ page.baseurl }}/config-guide/bootstrap/magento-modes.html#production-mode">production mode</a>, try deploying static view files using the command <a href="{{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html">`magento setup:static-content:deploy`</a>.
