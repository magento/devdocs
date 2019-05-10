---
group: installation-guide
title: After installing, images and stylesheets do not load; only text displays, no graphics
functional_areas:
  - Install
  - System
  - Setup
---

### Details

The path to images and stylesheets is not correct, either because of an incorrect base {% glossarytooltip a05c59d3-77b9-47d0-92a1-2cbffe3f8622 %}URL{% endglossarytooltip %} or because server rewrites (CentOS, Ubuntu) are not set up properly. To confirm this is the case, use a web browser inspector to check the paths to static assets and verify those assets are located on the Magento file system.

Magento static assets are located under `<magento_root>/pub/static/`, within the `frontend` and `adminhtml` directories).

### Solution

*	If you are using the Apache web server, verify your [server rewrites]({{page.baseurl}}/install-gde/prereq/apache.html#apache-help-rewrite) setting and your Magento server's base URL and try again. If you set up the Apache `AllowOverride` directive incorrectly, the {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}static files{% endglossarytooltip %} are not served from the correct location.

* If you are using the nginx web server, be sure to [configure a virtual host file]({{page.baseurl}}/install-gde/prereq/nginx.html#configure-nginx-ubuntu). The nginx virtual host file must meet the following criteria:

  - The `include` directive must point to the sample nginx configuration file in your Magento installation directory. For example:

    ```
    include /var/www/html/magento2/nginx.conf.sample;
    ```

  - The `server_name` directive must match the base URL you specified when installing Magento. For example:

    ```
    server_name 192.186.33.10;
    ```

*	If the Magento application is in [production mode]({{page.baseurl}}/config-guide/bootstrap/magento-modes.html#production-mode), try deploying static view files using the command [`magento setup:static-content:deploy`]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html).
