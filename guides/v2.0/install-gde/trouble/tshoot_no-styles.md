---
layout: default
group: install_trouble
subgroup: Access issues
title: After installing, images and stylesheets do not load; only text displays, no graphics
menu_title: After installing, images and stylesheets do not load; only text displays, no graphics
menu_node:
menu_order: 5
version: 2.0
github_link: install-gde/trouble/tshoot_no-styles.md
redirect_from: /guides/v1.0/install-gde/trouble/tshoot_no-styles.html
---

<h2 id="install-trouble-styles">After installing, images and stylesheets do not load; only text displays, no graphics</h2>

### Details

The path to images and stylesheets is not correct, either because of an incorrect base URL or because server rewrites (CentOS, Ubuntu) are not set up properly. To confirm this is the case, use a web browser inspector to check the paths to static assets and verify those assets are located on the Magento file system.

Magento static assets should be located under `<your Magento install dir>/pub/static/` (there should be `frontend` and `adminhtml` directories).

### Solution

*	Verify your <a href="{{ site.gdeurl }}install-gde/prereq/apache.html#apache-help-rewrite">Apache server rewrites</a> setting and your Magento server's base URL and try again. If you set up the `AllowOverride` directive incorrectly, static files aren't served from the correct location.

*	If the Magento application is in <a href="{{ site.gdeurl }}config-guide/bootstrap/magento-modes.html#mode-production">production mode</a>, try deploying static view files using the command <a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">`magento setup:static-content:deploy`</a>.
