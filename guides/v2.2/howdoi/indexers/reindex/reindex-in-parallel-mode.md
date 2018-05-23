---
group: howdoi
title: Reindex in parallel mode
version: 2.2
github_link: howdoi/indexer/reindex/reindex-in-parallel-mode.md
functional_areas:
  - Search
---

## Magento reindex in parallel mode

In Magento 2.2.5, you can reindex in parallel mode. This feature allows you to parallelize the reindex by the indexer's dimension, speeding up the reindex execution across multiple threads.

## How to run reindex in parallel mode

To reindex in parallel mode, you run the reindex command using the installed environment variable  `MAGE_INDEXER_THREADS_COUNT`. Use the variable to set the number of threads for the reindex processing.

For example, the following command runs the Catalog Search Fulltext indexer in three threads:

	MAGE_INDEXER_THREADS_COUNT=3 php -f bin/magento indexer:reindex catalogsearch_fulltext

<div class="bs-callout bs-callout-info" id="info">
<p>Only use the environment variable only in the indexer command. Do not save the variable to your environment or Magento installs and updates may have errors. </p>
</div>

## Indexers supporting parallel mode

The following indexes can be run in parallel mode:
- Catalog Search Fulltext can be paralleled by store views.
- Category Product can be paralleled by store views.
