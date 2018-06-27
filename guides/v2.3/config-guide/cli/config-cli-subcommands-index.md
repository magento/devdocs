---
group: config-guide
subgroup: 04_CLI
title: Manage the indexers
menu_title: Manage the indexers
menu_node:
menu_order: 90
version: 2.3
github_link: config-guide/cli/config-cli-subcommands-index.md
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## View a list of indexers
To view a list of all indexers:

```bash
bin/magento indexer:info
```

The list displays as follows:

```
design_config_grid                       Design Config Grid
customer_grid                            Customer Grid
catalog_category_product                 Category Products
catalog_product_category                 Product Categories
catalog_product_price                    Product Price
catalog_product_attribute                Product EAV
catalogrule_rule                         Catalog Rule Product
catalogrule_product                      Catalog Product Rule
cataloginventory_stock                   Stock
catalogsearch_fulltext                   Catalog Search
```

## View indexer status
Use this command to view the status of all indexers or specific indexers. For example, find out if an indexer needs to be reindexed.

Command options:

```bash
bin/magento indexer:status [indexer]
```

Where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to view the status of all indexers.

To list all indexers:

```bash
bin/magento indexer:info
```

A sample follows:

```bash
bin/magento indexer:status
```

Sample result:

```
Category Products:                                 Reindex required
Product Categories:                                Reindex required
Product Price:                                     Reindex required
Product EAV:                                       Reindex required
Stock:                                             Reindex required
Catalog Rule Product:                              Reindex required
Catalog Product Rule:                              Reindex required
Catalog Search:                                    Reindex required
```

## Reindex {#config-cli-subcommands-index-reindex}
Use this command to reindex all or selected indexers one time only.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This command reindexes one time only. To keep indexers up-to-date, you must set up a [cron job]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg).
</div>

Command options:

```bash
bin/magento indexer:reindex [indexer]
```

Where ```[indexer]``` is a space-separated list of indexers. Omit ```[indexer]``` to reindex all indexers.

To view a list of all indexers:

```bash
bin/magento indexer:info
```

A sample follows:

```bash
bin/magento indexer:reindex
```

Sample result:

```
Category Products index has been rebuilt successfully in <time>
Product Categories index has been rebuilt successfully in <time>
Product Price index has been rebuilt successfully in <time>
Product EAV index has been rebuilt successfully in <time>
Stock index has been rebuilt successfully in <time>
Catalog Rule Product index has been rebuilt successfully in <time>
Catalog Product Rule index has been rebuilt successfully in <time>
Catalog Search index has been rebuilt successfully in <time>
```

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Reindexing all indexers can take a long time for stores with large numbers of products, customers, categories, and promotional rules. <!-- Content for 2.3:  To reduce processing time, see the next section for reindexing in parallel mode. -->
</div>

<!-- Content for 2.3:
### Reindex in parallel mode {#config-cli-subcommands-index-reindex-parallel}

Indexers are scoped and multi-threaded to support reindexing in parallel mode. This feature reduces processing time. It parallelizes by the indexer's dimension and executes across multiple threads.

The following indexes can be run in parallel mode:
- Catalog Search Fulltext can be paralleled by store views.
- Category Product can be paralleled by store views.

To reindex in parallel mode, run the reindex command using the environment variable `MAGE_INDEXER_THREADS_COUNT`. This variable sets the number of threads for the reindex processing.

For example, the following command runs the Catalog Search Fulltext indexer across three threads:

```bash
MAGE_INDEXER_THREADS_COUNT=3 php -f bin/magento indexer:reindex catalogsearch_fulltext
```

<div class="bs-callout bs-callout-info" markdown="1">
Only use the environment variable in the indexer command. Do not save the variable to your environment or your Magento installs and updates may have errors.
</div>
-->

## Configure indexers
Use this command to set the following indexer options:

*  **Update on save (`realtime`):** Indexed data is updated as soon as a change is made in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. (For example, the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} products index is reindex after products are added to a category in the Admin.) This is the default.
* **Update by schedule (`schedule`):** Data is indexed according to the schedule set by your Magento cron job.

[Learn more about indexing]({{ page.baseurl }}/extension-dev-guide/indexing.html)

### Display the current configuration
To view the current indexer configuration:

```bash
bin/magento indexer:show-mode [indexer]
```

Where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to show all indexers' modes. For example, to show the mode of all indexers:

```bash
bin/magento indexer:show-mode
```

Sample result:

```
Category Products:                                 Update on Save
Product Categories:                                Update on Save
Product Price:                                     Update on Save
Product EAV:                                       Update on Save
Stock:                                             Update on Save
Catalog Rule Product:                              Update on Save
Catalog Product Rule:                              Update on Save
Catalog Search:                                    Update on Save
```

### Configure indexers
To specify the indexer configuration:

```bash
bin/magento indexer:set-mode {realtime|schedule} [indexer]
```

Where:

-   **`realtime`** - Sets the selected indexers to update on save.
-   **`schedule`** - Sets the specified indexers to save according to the cron schedule.
-   **`indexer`** - Is a space-separated list of indexers. Omit `indexer` to configure all indexers the same way.

To view the list of indexers:

```bash
bin/magento indexer:info
```

For example, to change only the category products and product categories indexers to update on schedule, enter:

```bash
bin/magento indexer:set-mode schedule catalog_category_product catalog_product_category
```

Sample result:

```
Index mode for Indexer Category Products was changed from 'Update on Save' to 'Update by Schedule'
Index mode for Indexer Product Categories was changed from 'Update on Save' to 'Update by Schedule'
```

#### Related topics

* [Manage the cache]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cache.html)
* [Configure and run cron]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html)
* [Code compiler]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-compiler.html)
* [Set the Magento mode]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-mode.html)
* [URN highlighter]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-urn.html)
* [Dependency reports]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-depen.html)
* [Translation dictionaries and language packages]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-i18n.html)
* [Deploy static view files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-static-view.html)
* [Create symlinks to LESS files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-less-sass.html)
* [Run unit tests]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-test.html)
* [Convert layout XML files]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-layout-xml.html")
* [Generate data for performance testing]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-perf-data.html)
