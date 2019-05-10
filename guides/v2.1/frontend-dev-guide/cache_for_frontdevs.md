---
group: frontend-developer-guide
title: Magento cache overview
functional_areas:
  - Frontend
---

{% include cache/page-cache-overview.md%}

## Cache types

The following cache types mostly have impact on frontend development process:

| Cache type "friendly" name | Cache type code name | Description                                                                                                                                                                                                                                                                                                                                       |
|----------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Layout                     | `layout`             | Compiled page layouts (that is, the layout components from all components). Clean or flush this cache type after modifying layout files.                                                                                                                                                                                                          |
| Block HTML output          | `block_html`         | HTML page fragments per block. Clean or flush this cache type after modifying the view layer.                                                                                                                                                                                                                                                     |
| Page cache                 | `full_page`          | Generated HTML pages. If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache. Clean or flush this cache type after modifying code level that affects HTML output. It’s recommended to keep this cache enabled because caching HTML improves performance significantly. |
| Translations               | `translate`          | Merged translations from all modules.                                                                                                                                                                                                                                                                                                             |

{:.bs-callout .bs-callout-info}
The full list of cache types can be found in the [Overview of cache types]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over) topic.

## Clean cache {#clean_cache}

To clean cache, run

	magento cache:clean <type> ... <type>

To view the status of the cache, run:

	bin/magento cache:status

For more details about working with cache, see [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)

## Clean static files cache {#clean_static_cache}

You can clean generated static view files in any of the following ways:

-   In the {% glossarytooltip 18b930cf-09cc-47c9-a5e5-905f86c43f81 %}Magento Admin{% endglossarytooltip %}. Go to **System** > **Tools** > **Cache Management** and click **Flush {% glossarytooltip 363662cb-73f1-4347-a15e-2d2adabeb0c2 %}Static Files{% endglossarytooltip %} Cache**.

    {:.bs-callout .bs-callout-info}
    This option is only available in `developer` mode. Refer to the [static view files overview]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html#config-cli-static-overview) for more information.

-   Manually by clearing the `pub/static` and `var/view_preprocessed` directories and subdirectories _except_ for `pub/static/.htaccess`.

    To clear the `pub/static` directory of all files except `.htaccess` (which is a hidden file), enter the following command:

        rm -R pub/static/*

-   Several commands support an optional parameter `--clear-static-content`, which cleans generated static view files:

    -   [`magento module:enable` and `magento module:disable`]({{ page.baseurl }}/install-gde/install/cli/install-cli-subcommands-enable.html)
    -   [`magento theme:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-theme-uninstall.html)
    -   [`magento module:uninstall`]({{ page.baseurl }}/install-gde/install/cli/install-cli-uninstall-mods.html)

## Clean static files {#clean_static}

Besides the cached files, in theme development process developers also deal with other saved files - static view files that are preprocessed and published to the `var/view_preprocessed` and `pub/static` directories correspondingly. In most cases when working on a custom theme, for example, if you are only working on styles, you do not need to clean cache, but need to clean the previously preprocessed and published static view files. To clean them, run  `grunt clean <theme>` or manually clear the `pub/static` and `var/view_preprocessed` directories.
