---
layout: default
group: fedg
title: Magento cache overview 
menu_title: Magento cache overview 
menu_order: 10
version: 2.0
github_link: frontend-dev-guide/cache_for_frontdevs.md
---

{% include cache/cache_overview.md%}

The following cache types mostly have impact on frontend development process:

| Cache type "friendly" name | Cache type code name | Description                                                                                                                                                                                                                                                                                                                                       |
|----------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Layout                     | `layout`             | Compiled page layouts (that is, the layout components from all components). Clean or flush this cache type after modifying layout files.                                                                                                                                                                                                          |
| Block HTML output          | `block_html`         | HTML page fragments per block. Clean or flush this cache type after modifying the view layer.                                                                                                                                                                                                                                                     |
| Page cache                 | `full_page`          | Generated HTML pages. If necessary, Magento cleans up this cache automatically, but third-party developers can put any data in any segment of the cache. Clean or flush this cache type after modifying code level that affects HTML output. It’s recommended to keep this cache enabled because caching HTML improves performance significantly. |
| Translations               | `translate`          | Merged translations from all modules.                                                                                                                                                                                                                                                                                                             |



<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
Note: The full list of cache types can be found [here]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html#config-cli-subcommands-cache-clean-over).
</span>
</div>

To view the status of the cache, run 

`php bin/magento cache:status`

In theme development process developer rarely deals with these cache types. Mostly we need to clear static files, that are generated to pub/static and var directories. To clean them, run

`grunt clean`

<p class="q">what if I do not use grunt?</p>