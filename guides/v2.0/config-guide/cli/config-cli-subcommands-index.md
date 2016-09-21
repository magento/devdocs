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
---


#### Contents

*	<a href="#config-cli-before">First steps</a>
*	<a href="#config-cli-subcommands-index-status">View indexer status</a>
*	<a href="#config-cli-subcommands-index-reindex">Reindex</a>
*	<a href="#config-cli-subcommands-index-conf">Configure indexers</a>

<h2 id="config-cli-before">First steps</h2>
{% include install/first-steps-cli.html %}
In addition to the command arguments discussed here, see <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands.html#config-cli-subcommands-common">Common arguments</a>.

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

	magento indexer:status [indexer]

where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to view status of all indexers.

To view the list of indexers, enter

	magento indexer:info

A sample follows:

	magento indexer:status

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
This command enables you to reindex all or selected indexers one time only.

<div class="bs-callout bs-callout-info" id="info">
<span class="glyphicon-class">
  <p>This command reindexes one time only. To keep indexers up-to-date, you must set up a <a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html#config-cli-cron-bkg">cron job</a>.</p></span>
</div>

Command options:

	magento indexer:reindex [indexer]

where `[indexer]` is a space-separated list of indexers. Omit `[indexer]` to reindex all indexers.

To view the list of indexers, enter

	magento indexer:info

A sample follows:

	magento indexer:reindex

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

[More information about indexing]({{ page.baseurl }}extension-dev-guide/indexing.html)

<h3 id="config-cli-subcommands-index-conf-show">Display the current configuration</h3>
To view the current indexer configuration, enter

	magento indexer:show-mode [indexer]

where `[indexer]` is a space-separated list of indexers or omit `[indexer]` to show all indexers' modes.

For example, to show the mode of all indexers:

	magento indexer:show-mode 

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

	magento indexer:set-mode {realtime|schedule} [indexer]

where

`realtime` sets the selected indexers to update on save.
`schedule` sets the specified indexers to save according to the cron schedule.
`indexer` is a space-separated list of indexers or omit `indexer` to configure all indexers the same way.

To view the list of indexers, enter

	magento indexer:info

For example, to change only the category products and product categories indexers to update on schedule, enter

	magento indexer:set-mode schedule catalog_category_product catalog_product_category

Sample result:

	Index mode for Indexer Category Products was changed from 'Update on Save' to 'Update by Schedule'
	Index mode for Indexer Product Categories was changed from 'Update on Save' to 'Update by Schedule'

#### Related topics

*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cache.html">Manage the cache</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-cron.html">Configure and run cron</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-compiler.html">Code compiler</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-mode.html">Set the Magento mode</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-urn.html">URN highlighter</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-depen.html">Dependency reports</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-i18n.html">Translation dictionaries and language packages</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-static-view.html">Deploy static view files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-less-sass.html">Create symlinks to LESS files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-test.html">Run unit tests</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-layout-xml.html">Convert layout XML files</a>
*	<a href="{{page.baseurl}}config-guide/cli/config-cli-subcommands-perf-data.html">Generate data for performance testing</a>
