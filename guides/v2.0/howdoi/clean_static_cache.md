---
group: howdoi
subgroup: clear-static-files
title: Clean static files cache
menu_title: Clean static files cache
menu_node: parent
menu_order: 1
version: 2.0
github_link: howdoi/clean_static_cache.md
---

You can clean generated static view files in any of the following ways:

-   In the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. Go to **System** > **Tools** > **Cache Management** and click **Flush {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}Static Files{% endglossarytooltip %} Cache**.

    <div class="bs-callout bs-callout-info" id="info" markdown="1">
    This option is only availble in `developer` mode. Refer to the [static view files overview]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) for more information.

-   Manually by clearing the `pub/static` and `var/view_preprocessed` directories and subdirectories _except_ for `pub/static/.htaccess`.

    To clear the `pub/static` directory of all files except `.htaccess` (which is a hidden file), enter the following command:

        rm -R pub/static/*

-   Several commands support an optional parameter `--clear-static-content`, which cleans generated static view files:

    -   [`magento module:enable` and `magento module:disable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
    -   [`magento theme:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
    -   [`magento module:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)
