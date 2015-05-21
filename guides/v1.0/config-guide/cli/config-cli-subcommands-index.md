---
layout: default
group: config-guide 
subgroup: CLI
title: Manage the indexers
menu_title: Manage the indexers
menu_node: 
menu_order: 6
github_link: config-guide/cli/config-cli-subcommands-index.md
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-index-status">View indexer status</a>
*	<a href="#config-cli-subcommands-index-reindex">Reindex</a>
*	<a href="#config-cli-subcommands-index-conf">Configure indexers</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}

<h2 id="config-cli-subcommands-index-info">View the list of indexers</h2>
To view the list of indexers to use in the commands discussed in this topic, enter

	magento indexer:info

The list displays as follows:

	catalog_category_product                 Category Products
	catalog_product_category                 Product Categories
	catalog_product_price                    Product Price
	catalog_product_attribute                Product EAV
	cataloginventory_stock                   Stock
	catalogrule_rule                         Catalog Rule Product
	catalogrule_product                      Catalog Product Rule
	catalogsearch_fulltext                   Catalog Search

<h2 id="config-cli-subcommands-index-status">View indexer status</h2>
This command enables you to view the status of all or selected indexers (for example, shows whether indexers need to be reindexed).

Command options:

	magento indexer:status <indexer>

where `<indexer>` is either `--all` to display the status of all indexers, or a space-separated list of indexers.

To view the list of indexers, enter

	magento indexer:info

A sample follows:

	magento indexer:status --all

Sample result:

	Category Products:                                 Reindex required
	Product Categories:                                Reindex required
	Product Price:                                     Reindex required
	Product EAV:                                       Reindex required
	Stock:                                             Reindex required
	Catalog Rule Product:                              Reindex required
	Catalog Product Rule:                              Reindex required
	Catalog Search:                                    Reindex required

Reindexing is discussed in the next section.

<h2 id="config-cli-subcommands-index-reindex">Reindex</h2>
This command enables you to reindex all or selected indexers.

Command options:

	magento reindex <indexer>

where `<indexer>` is either `--all` to reindex all indexers, or a space-separated list of indexers.

To view the list of indexers, enter

	magento indexer:info

A sample follows:

	magento indexer:reindex --all

Sample result:

	Category Products index has been rebuilt successfully in <time>
	Product Categories index has been rebuilt successfully in <time>
	Product Price index has been rebuilt successfully in <time>
	Product EAV index has been rebuilt successfully in <time>
	Stock index has been rebuilt successfully in <time>
	Catalog Rule Product index has been rebuilt successfully in <time>
	Catalog Product Rule index has been rebuilt successfully in <time>
	Catalog Search index has been rebuilt successfully in <time>

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>Reindexing all indexers can take a long time for stores with large numbers of products, customers, categories, and promotional rules.</p></span>
</div>

<h2 id="config-cli-subcommands-index-conf">Configure indexers</h2>
This command enables you to set the following indexer options:

*	Update on save (`realtime`): Indexed data is updated as soon as a change is made in the Admin. (For example, the category products index is reindex after products are added to a category in the Admin.) This is the default.
*	Update by schedule (`schedule`): Data is indexed according to the schedule set by your Magento cron job.

<a href="{{ site.gdeurl }}architecture/index-cache/indexing.html">More information about indexing</a>.

<h3 id="config-cli-subcommands-index-conf-show">Display the current configuration</h3>
To view the current indexer configuration, enter

	magento indexer:show-mode <indexer> [--all]

where `<indexer>` is either `--all` to display the configuration of all indexers, or a space-separated list of indexers.

For example, to show the mode of all indexers:

	magento indexer:show-mode --all

Sample result:

	Category Products:                                 Update on Save
	Product Categories:                                Update on Save
	Product Price:                                     Update on Save
	Product EAV:                                       Update on Save
	Stock:                                             Update on Save
	Catalog Rule Product:                              Update on Save
	Catalog Product Rule:                              Update on Save
	Catalog Search:                                    Update on Save

<h3 id="config-cli-subcommands-index-conf-set">Configure indexers</h3>
To specify the indexer configuration, enter

	magento indexer:set-mode {realtime|schedule} <indexer>

where

`realtime` sets the selected indexers to update on save.
`schedule` sets the specified indexers to save according to the cron schedule.
`indexer` is either `--all` to display the status of all indexers, or a space-separated list of indexers.

To view the list of indexers, enter

	magento indexer:info

For example, to change only the category products and product categories indexers to update on schedule, enter

	magento indexer:set-mode schedule catalog_category_product catalog_product_category

Sample result:

	Index mode for Indexer Category Products was changed from 'Update on Save' to 'Update by Schedule'
	Index mode for Indexer Product Categories was changed from 'Update on Save' to 'Update by Schedule'

#### Related topics

*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-multi.html">Multi-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-compiler-single.html">Single-tenant compiler</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-log.html">Clean the logs</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-less-sass.html">Create LESS from CSS</a>
*	<a href="{{ site.gdeurl }}config-guide/cli/config-cli-subcommands-test.html">Run tests</a>