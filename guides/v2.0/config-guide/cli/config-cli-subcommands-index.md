---
layout: default
group: config-guide
subgroup: 04_CLI
title: Manage the indexers
menu_title: Manage the indexers
menu_node:
menu_order: 90
version: 2.0
github_link: config-guide/cli/config-cli-subcommands-index.md
redirect_from: /guides/v1.0/config-guide/cli/config-cli-subcommands-index.html
functional_areas:
  - Configuration
  - System
  - Setup
---

{% include config/cli-intro.md %}

## View a list of indexers
To view a list of all indexers:

	bin/magento indexer:info

The list displays as follows:

	catalog_category_product                 Category Products
	catalog_product_category                 Product Categories
	catalog_product_price                    Product Price
	catalog_product_attribute                Product EAV
	cataloginventory_stock                   Stock
	catalogrule_rule                         Catalog Rule Product
	catalogrule_product                      Catalog Product Rule
	catalogsearch_fulltext                   Catalog Search

## View indexer status
Use this command to view the status of all indexers or specific indexers. For example, find out if an indexer needs to be reindexed.

Command options:

	bin/magento indexer:status [indexer]

Where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to view the status of all indexers.

To list all indexers:

	bin/magento indexer:info

A sample follows:

	bin/magento indexer:status

Sample result:

	Category Products:                                 Reindex required
	Product Categories:                                Reindex required
	Product Price:                                     Reindex required
	Product EAV:                                       Reindex required
	Stock:                                             Reindex required
	Catalog Rule Product:                              Reindex required
	Catalog Product Rule:                              Reindex required
	Catalog Search:                                    Reindex required

## Reindex {#config-cli-subcommands-index-reindex}
Use this command to reindex all or selected indexers one time only.

<div class="bs-callout bs-callout-info" id="info" markdown="1">
This command reindexes one time only. To keep indexers up-to-date, you must set up a [cron job]({{page.baseurl}}/config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg).
</div>

Command options:

	bin/magento indexer:reindex [indexer]

Where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to reindex all indexers.

To view a list of all indexers:

	bin/magento indexer:info

A sample follows:

	bin/magento indexer:reindex

Sample result:

	Category Products index has been rebuilt successfully in <time>
	Product Categories index has been rebuilt successfully in <time>
	Product Price index has been rebuilt successfully in <time>
	Product EAV index has been rebuilt successfully in <time>
	Stock index has been rebuilt successfully in <time>
	Catalog Rule Product index has been rebuilt successfully in <time>
	Catalog Product Rule index has been rebuilt successfully in <time>
	Catalog Search index has been rebuilt successfully in <time>

<div class="bs-callout bs-callout-info" id="info" markdown="1">
Reindexing all indexers can take a long time for stores with large numbers of products, customers, categories, and promotional rules.
</div>

## Configure indexers
Use this command to set the following indexer options:

-   **Update on save (`realtime`):** Indexed data is updated as soon as a change is made in the {% glossarytooltip 29ddb393-ca22-4df9-a8d4-0024d75739b1 %}Admin{% endglossarytooltip %}. (For example, the {% glossarytooltip 50e49338-1e6c-4473-8527-9e401d67ea2b %}category{% endglossarytooltip %} products index is reindex after products are added to a category in the Admin.) This is the default.
-   **Update by schedule (`schedule`):** Data is indexed according to the schedule set by your Magento cron job.

[Learn more about indexing]({{ page.baseurl}}/extension-dev-guide/indexing.html)

### Display the current configuration
To view the current indexer configuration:

	bin/magento indexer:show-mode [indexer]

Where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to show all indexers' modes. For example, to show the mode of all indexers:

	bin/magento indexer:show-mode

Sample result:

	Category Products:                                 Update on Save
	Product Categories:                                Update on Save
	Product Price:                                     Update on Save
	Product EAV:                                       Update on Save
	Stock:                                             Update on Save
	Catalog Rule Product:                              Update on Save
	Catalog Product Rule:                              Update on Save
	Catalog Search:                                    Update on Save

### Configure indexers
To specify the indexer configuration:

	bin/magento indexer:set-mode {realtime|schedule} [indexer]

Where:

-   **`realtime`** - Sets the selected indexers to update on save.
-   **`schedule`** - Sets the specified indexers to save according to the cron schedule.
-   **`indexer`** - Is a space-separated list of indexers. Omit `indexer` to configure all indexers the same way.

To view the list of indexers:

	bin/magento indexer:info

For example, to change only the category products and product categories indexers to update on schedule, enter

	bin/magento indexer:set-mode schedule catalog_category_product catalog_product_category

Sample result:

	Index mode for Indexer Category Products was changed from 'Update on Save' to 'Update by Schedule'
	Index mode for Indexer Product Categories was changed from 'Update on Save' to 'Update by Schedule'

#### Related topics

-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
-   <a href="{{page.baseurl}}/config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
