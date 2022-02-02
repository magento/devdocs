---
title: Migrate from Elasticsearch to OpenSearch
functional_areas:
  - Configuration
  - Search
  - System
  - Setup
---

{% include config/es-version-24.md %}

## About OpenSearch

OpenSearch is an open source fork of Elasticsearch 7.10.2, following Elasticsearch's licensing change.

{{ site.data.var.ee }} and {{ site.data.var.ce }} 2.4.4 supports OpenSearch support has been added to Magento 2.4.4. On-premises installations continue to support Elasticsearch, although it is no longer supported for {{ site.data.var.ece }} 2.4.4.

## Migrating to OpenSearch

The steps to migrate to OpenSearch are simple and largely follow the steps for Elasticsearch configuration.

1. (Optional) Place the site in [Maintenance Mode] and uninstall Elasticsearch.

1. Ensure that your installation meets the [search engine prerequisites] and [Install OpenSearch].

1. [Configure Magento to use Elasticsearch], flush the cache, and reindex the catalog search index.

No further configuration value changes are necessary.

<!-- Link Definitions -->

[Maintance Mode]: https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-maint.html
[Search engine prerequisites]: https://devdocs.magento.com/guides/v2.4/install-gde/prereq/elasticsearch.html
[Configure Magento to use Elasticsearch]: https://devdocs.magento.com/guides/v2.4/config-guide/elasticsearch/configure-magento.html
[Install OpenSearch]: https://opensearch.org/docs/latest/opensearch/install/important-settings/
