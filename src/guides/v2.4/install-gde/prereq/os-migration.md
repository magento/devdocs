---
title: Elasticsearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{% include config/es-version-24.md %}

## About OpenSearch

OpenSearch is an open-source fork of Elasticsearch 7.10.2 following Elasticsearch's licensing change.

OpenSearch support has been added to Magento 2.4.4. Elasticsearch remains supported, although it is no longer supported for Magento Cloud 2.4.4.

## Migrating to OpenSearch

The steps to migrate to OpenSearch are simple and largely follow the steps for ElasticSearch configuration.
1. (optional) Uninstall Elasticsearch. Customers will likely put the site in [Maintenance Mode] if doing this.

1. [Install OpenSearch] and follow the recommended Magento [Elasticsearch system configuration guide].

1. After installing OpenSearch, Customers should follow the guide [Configure Magento to use Elasticsearch].
This guide provides instructions on how to specify the location of the Opensearch/Elasticsearch instance as well as instructions to flush the cache and reindex the catalog search index.

No further configuration value changes are necessary.

<!-- Link Definitions -->

[Maintance Mode]: https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-maint.html
[Elasticsearch system configuration guide]: https://devdocs.magento.com/guides/v2.4/install-gde/prereq/elasticsearch.html
[Configure Magento to use Elasticsearch]: https://devdocs.magento.com/guides/v2.4/config-guide/elasticsearch/configure-magento.html
[Install OpenSearch]: https://opensearch.org/docs/latest/opensearch/install/important-settings/
