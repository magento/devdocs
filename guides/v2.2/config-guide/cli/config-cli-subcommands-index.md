---
group: configuration-guide
title: Manage the indexers
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

`[indexer]` is a space-separated list of indexers. Omit `[indexer]` to view the status of all indexers.

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
+----------------------+------------------+-----------+---------------------+---------------------+
| Title                | Status           | Update On | Schedule Status     | Schedule Updated    |
+----------------------+------------------+-----------+---------------------+---------------------+
| Catalog Product Rule | Reindex required | Save      |                     |                     |
| Catalog Rule Product | Reindex required | Save      |                     |                     |
| Catalog Search       | Ready            | Save      |                     |                     |
| Category Products    | Reindex required | Schedule  | idle (0 in backlog) | 2018-06-28 09:45:53 |
| Customer Grid        | Ready            | Schedule  | idle (0 in backlog) | 2018-06-28 09:45:52 |
| Design Config Grid   | Ready            | Schedule  | idle (0 in backlog) | 2018-06-28 09:45:52 |
| Product Categories   | Reindex required | Schedule  | idle (0 in backlog) | 2018-06-28 09:45:53 |
| Product EAV          | Reindex required | Save      |                     |                     |
| Product Price        | Reindex required | Save      |                     |                     |
| Stock                | Reindex required | Save      |                     |                     |
+----------------------+------------------+-----------+---------------------+---------------------+
```

## Reindex {#config-cli-subcommands-index-reindex}

Use this command to reindex all, or selected indexers, one time only.

{:.bs-callout .bs-callout-info}
This command reindexes one time only. To keep indexers up-to-date, set up a [cron job]({{ page.baseurl }}/config-guide/cli/config-cli-subcommands-cron.html).

Command options:

```bash
bin/magento indexer:reindex [indexer]
```

```[indexer]``` is a space-separated list of indexers. Omit ```[indexer]``` to reindex all indexers.

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

{:.bs-callout .bs-callout-info}
Reindexing all indexers can take a long time for stores with large numbers of products, customers, categories, and promotional rules. To reduce processing time, see the next section for reindexing in parallel mode.

### Reindex in parallel mode {#config-cli-subcommands-index-reindex-parallel}

As of Magento 2.2.6, indexers are scoped and multi-threaded to support reindexing in parallel mode. This feature reduces processing time. It parallelizes by the indexer's dimension and executes across multiple threads.

These indexes can be run in parallel mode:
- Catalog Search Fulltext can be paralleled by store views.
- Category Product can be paralleled by store views.
- Catalog Price can be paralleled by website and customer groups.

By default, Catalog Price does not use a partitioning into dimension.

If you want to use parallelization you need to set one of available modes of dimensions for product price indexer:
- `none` (default)
- `website`
- `customer_group`
- `website_and_customer_group`

For example, to set the mode by website run:

```bash
bin/magento indexer:set-dimensions-mode catalog_product_price website
```
To check the current mode you can use next command:
```bash
bin/magento indexer:show-dimensions-mode
```

To reindex in parallel mode, run the reindex command using the environment variable `MAGE_INDEXER_THREADS_COUNT`, or add an environment variable to `env.php`. This variable sets the number of threads for the reindex processing.

For example, the following command runs the Catalog Search Fulltext indexer across three threads:

```bash
MAGE_INDEXER_THREADS_COUNT=3 php -f bin/magento indexer:reindex catalogsearch_fulltext
```

## Configure indexers

Use this command to set the following indexer options:

*  **Update on save (`realtime`)** - Indexed data is updated as soon as a change is made in the [Admin](https://glossary.magento.com/admin). (For example, the [category](https://glossary.magento.com/category) products index is reindex after products are added to a category in the Admin.) This is the default.
* **Update by schedule (`schedule`)** - Data is indexed according to the schedule set by your Magento cron job.

[Learn more about indexing]({{ page.baseurl }}/extension-dev-guide/indexing.html).

### Display the current configuration

To view the current indexer configuration:

```bash
bin/magento indexer:show-mode [indexer]
```

`[indexer]` is a space-separated list of indexers. Omit `[indexer]` to show all indexers' modes. For example, to show the mode of all indexers:

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

**`realtime`** sets the selected indexers to update on save.

**`schedule`** sets the specified indexers to save according to the cron schedule.

**`indexer`** is a space-separated list of indexers. Omit `indexer` to configure all indexers the same way.

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
