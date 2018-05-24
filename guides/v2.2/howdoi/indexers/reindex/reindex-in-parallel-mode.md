---
group: howdoi
title: Reindex in parallel mode
version: 2.2
github_link: howdoi/indexer/reindex/reindex-in-parallel-mode.md
functional_areas:
  - Search
---

## Magento reindex in parallel mode

In Magento 2.2.5, specific indexers are scoped and multi-threaded, allowing you to reindex in parallel mode. This feature allows you to parallelize reindexes by the indexer's dimension, speeding up the reindex execution across multiple threads.

Using multi-threading runs the reindexing simultaneously to maximize CPU time, increasing the performance and reducing the processing time of your indexing.

## Indexers supporting parallel mode

The following indexes can be run in parallel mode:
- Catalog Search Fulltext can be paralleled by store views.
- Category Product can be paralleled by store views.

## How to run reindex in parallel mode

To reindex in parallel mode, run the reindex command using the installed environment variable `MAGE_INDEXER_THREADS_COUNT`. This variable sets the number of threads for the reindex processing.

For example, the following command runs the Catalog Search Fulltext indexer across three threads:

	MAGE_INDEXER_THREADS_COUNT=3 php -f bin/magento indexer:reindex catalogsearch_fulltext

<div class="bs-callout bs-callout-info" id="info">
<p>Only use the environment variable only in the indexer command. Do not save the variable to your environment or your Magento installs and updates may have errors. </p>
</div>
