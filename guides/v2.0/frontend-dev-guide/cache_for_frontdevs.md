---
group: fedg
title: Magento cache overview
menu_title: Magento cache overview
menu_order: 10
version: 2.0
github_link: frontend-dev-guide/cache_for_frontdevs.md
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

<div class="bs-callout bs-callout-info" id="info" markdown ="1">
<span class="glyphicon-class">
The full list of cache types can be found in the [Overview of cache types]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over) topic.
</span>
</div>

## Clean cache {#clean_cache}

To clean cache, run

	magento cache:clean <type> ... <type>

To view the status of the cache, run:

	`php bin/magento cache:status`

For more details about working with cache, see [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)

## Clean static files {#clean_static}

Besides the cached files, in theme development process developers also deal with other saved files - static view files that are preprocessed and published to the `var/view_preprocessed` and `pub/static` directories correspondingly. In most cases when working on a custom theme, for example, if you are only working on styles, you do not need to clean cache, but need to clean the previously preprocessed and published static view files. To clean them, run  `grunt clean <theme>` or manually clear the `pub/static` and `var/view_preprocessed` directories.
